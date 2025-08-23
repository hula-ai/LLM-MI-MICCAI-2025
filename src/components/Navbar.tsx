import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Respects GitHub Pages base path (e.g., /LLM-MI-MICCAI-2025/)
const scheduleHref = new URL("Schedule.pdf", import.meta.env.BASE_URL).toString();

const navigation = [
  { name: "Home", href: "/", type: "route" },
  { name: "Call for Papers", href: "/call-for-papers", type: "route" },
  { name: "Important Dates", href: "/important-dates", type: "route" },
  { name: "Organizers", href: "/organizers", type: "route" },
  // Separate PDF button
  { name: "Schedule (PDF)", href: scheduleHref, type: "pdf" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex w-full">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold text-gray-800">
                    MICCAI 2025 Workshop
                  </span>
                </div>

                {/* Desktop nav */}
                <div className="hidden sm:ml-6 sm:flex sm:items-center sm:gap-6 w-full">
                  {navigation.slice(0, 4).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-600"
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Push the PDF button to the right */}
                  <div className="ml-auto" />

                  {/* PDF button */}
                  <a
                    href={scheduleHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
                  >
                    Schedule (PDF)
                  </a>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}

              {/* PDF button (mobile) */}
              <a
                href={scheduleHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block pl-3 pr-4 py-2 text-base font-semibold text-blue-700 hover:bg-blue-50"
              >
                Schedule (PDF)
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
