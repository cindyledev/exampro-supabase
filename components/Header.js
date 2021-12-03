import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { LockClosedIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <Popover>
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block text-right">
          <span className="flex items-center">
            <button type="button" className="flex-shrink-0">
              <Link href="/auth">
                <a className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-orange-500 bg-white hover:bg-gray-100 focus:outline-none">
                  <LockClosedIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Sign In
                </a>
              </Link>
            </button>
            <button type="button" className="md:ml-4 md:flex-shrink-0">
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none"
              >
                Get Started
              </a>
            </button>
          </span>
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md  overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button className="block w-full px-2 py-3 rounded-md text-center font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                <a href="#">Get Started</a>
              </button>
            </div>
            <Link href="/auth">
              <button className="block w-full px-5 py-3 text-center font-medium text-orange-500 bg-gray-50 hover:bg-gray-100">
                <a>Sign In</a>
              </button>
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
