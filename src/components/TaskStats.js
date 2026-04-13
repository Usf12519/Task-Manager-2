'use client';

export default function TaskStats({
  total,
  completed,
  active,
  onClearCompleted,
}) {
  return (
    <div className="mb-4 p-4 border rounded">
      <p className="text-sm mb-1">Total: {total}</p>
      <p className="text-sm mb-1">Completed: {completed}</p>
      <p className="text-sm mb-3">Active: {active}</p>

      <button
        onClick={onClearCompleted}
        className="px-3 py-1 border rounded text-sm"
      >
        Clear completed
      </button>
    </div>
  );
}