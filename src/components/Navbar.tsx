import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Build an absolute URL that respects GitHub Pages base path (e.g. /LLM-MI-MICCAI-2025/)
const baseUrl = (import.meta as any).env?.BASE_URL ?? "/";
const scheduleHref = new URL("Schedule.pdf", baseUrl).toString();

type NavItem =
  | { name: string; href: string; type: "route" }
  | { name: string; href: string; type: "pdf" };

const navigation: NavItem[] = [
  { name: "Home", href: "/", type: "route" },
  { name: "Call for Papers", href: "/call-for-papers", type: "route" },
  { name: "Important Dates", href: "/important-dates", type: "route" },
  { name: "Organizers", href: "/organizers", type: "route" },
  { name: "Schedule", href: scheduleHref, type: "pdf" }, // ✅ Schedule button
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex w-full">
                <div className="flex items-center flex-shrink-0">
                  <span className="text-xl font-bold text-gray-800">
                    MICCAI 2025 Workshop
                  </span>
                </div>

                {/* Desktop nav */}
                <div className="hidden w-full items-center gap-6 sm:ml-6 sm:flex">
                  {/* left-side links (routes) */}
                  {navigation
                    .filter((i) => i.type === "route")
                    .map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-600"
                      >
                        {item.name}
                      </Link>
                    ))}

                  {/* push the Schedule button to the right */}
                  <div className="ml-auto" />

                  {/* Schedule PDF button */}
                  <a
                    href={scheduleHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Schedule (PDF)
                  </a>
                </div>
              </div>

              {/* Mobile menu toggle */}
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
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
            <div className="space-y-1 pb-3 pt-2">
              {navigation
                .filter((i) => i.type === "route")
                .map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}

              {/* Schedule PDF (mobile) */}
              <a
                href={scheduleHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 pl-3 pr-4 text-base font-semibold text-blue-700 hover:bg-blue-50"
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
