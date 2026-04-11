'use client';

export default function TaskCard({ id, title, done, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between gap-2 p-3 border-b">
      <div className="flex items-center gap-2">
        <span className={done ? 'line-through text-gray-400' : 'text-gray-900'}>
          {title}
        </span>

        {done && <span className="text-green-600 text-xs font-bold">Done</span>}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(id)}
          className="px-2 py-1 text-sm border rounded"
        >
          Toggle
        </button>

        <button
          onClick={() => onDelete(id)}
          className="px-2 py-1 text-sm border rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}