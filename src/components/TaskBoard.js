'use client';

import { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

export default function TaskBoard() {
  const [tasks, setTasks] = useState([
    { id: 't1', title: 'Buy milk', done: false },
    { id: 't2', title: 'Write tests', done: false },
  ]);

  const [filter, setFilter] = useState('all');

  function handleAdd(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      done: false,
    };

    setTasks([...tasks, newTask]);
  }

  function handleToggle(id) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  }

  function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  const completedCount = tasks.filter((t) => t.done).length;

  const visible =
    filter === 'all'
      ? tasks
      : filter === 'active'
      ? tasks.filter((t) => !t.done)
      : tasks.filter((t) => t.done);

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <AddTaskForm onAdd={handleAdd} />

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter('all')}
          className="px-3 py-1 border rounded"
        >
          All
        </button>

        <button
          onClick={() => setFilter('active')}
          className="px-3 py-1 border rounded"
        >
          Active
        </button>

        <button
          onClick={() => setFilter('done')}
          className="px-3 py-1 border rounded"
        >
          Done
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        {completedCount} of {tasks.length} complete
      </p>

      <TaskList
        tasks={visible}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}