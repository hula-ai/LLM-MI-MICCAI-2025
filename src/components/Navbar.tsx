import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Call for Papers", href: "/call-for-papers" },
	{ name: "Important Dates", href: "/important-dates" },
	{ name: "Organizers", href: "/organizers" },
];

export default function Navbar() {
	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex">
								<div className="flex-shrink-0 flex items-center">
									<span className="text-xl font-bold text-gray-800">
										MICCAI 2025 Workshop
									</span>
								</div>
								<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
									{navigation.map((item) => (
										<Link
											key={item.name}
											to={item.href}
											className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-600"
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
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

					<Disclosure.Panel className="sm:hidden">
						<div className="pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>
									{item.name}
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
