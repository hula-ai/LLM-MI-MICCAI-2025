import React from 'react';

const dates = [
  { event: 'Paper Submission Deadline', date: 'June 15, 2025' },
  { event: 'Notification of Acceptance', date: 'July 30, 2025' },
  { event: 'Camera-Ready Submission', date: 'August 15, 2025' },
  { event: 'Workshop Date', date: 'September 27, 2025' }
];

export default function ImportantDates() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Important Dates</h1>
      
      <div className="mt-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {dates.map((item) => (
              <li key={item.event} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-indigo-600">{item.event}</div>
                  <div className="text-sm text-gray-500">{item.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-gray-600">
          All deadlines are at 23:59 AoE (Anywhere on Earth) on the specified date.
          No extensions will be granted.
        </p>
      </div>
    </div>
  );
}
