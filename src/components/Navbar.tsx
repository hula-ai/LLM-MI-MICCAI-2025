import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Build a base-aware URL for GitHub Pages / subpaths
const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
const scheduleHref = `${base}/Schedule.pdf`;

type NavItem = {
  name: string;
  href: string;
  external?: boolean;
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Call for Papers", href: "/call-for-papers" },
  { name: "Important Dates", href: "/important-dates" },
  { name: "Organizers", href: "/organizers" },
  { name: "Schedule", href: scheduleHref, external: true },
];

// Small helper so we don’t duplicate Link vs <a> logic
function NavLink({ item, className }: { item: NavItem; className: string }) {
  return item.external ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {item.name}
    </a>
  ) : (
    <Link to={item.href} className={className}>
      {item.name}
    </Link>
  );
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Left: Brand + Desktop Nav */}
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold text-gray-800">
                    MICCAI 2025 Workshop
                  </span>
                </div>

                {/* Desktop links */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      item={item}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-600"
                    />
                  ))}
                </div>
              </div>

              {/* Right: Mobile menu button */}
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
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

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  item={item}
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
