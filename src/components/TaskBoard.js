'use client';

import TaskList from './TaskList';

export default function TaskBoard() {
  const tasks = [
    { id: 1, title: 'Buy milk', done: false },
    { id: 2, title: 'Write tests', done: true },
    { id: 3, title: 'Ship it', done: false },
  ];

  function handleToggle(id) {
    console.log('toggle', id);
  }

  function handleDelete(id) {
    console.log('delete', id);
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </main>
  );
}