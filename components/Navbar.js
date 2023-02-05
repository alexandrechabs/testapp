import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MdOutlineMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { userService } from "@/services";
import Link from "next/link";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/contact",
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "/contact" },
  { name: "Contact Sales", href: "/contact" },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/contact",
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function logout() {
  console.log("logout");
  return userService.logout();
}

export default function Nav({ color }) {
  return (
    <Popover className={`relative bg-gradient-to-b ${color}`}>
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400">
              <span className="sr-only">Open menu</span>
              <MdOutlineMenu size={25} />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <div className="dropdown">
              <button className="dropbtn text-base font-medium text-gray-500 hover:text-gray-900">
                Dropdown
              </button>
              <div className="dropdown-content hidden absolute rounded">
                <Link
                  className="px-5 py-3 hover:bg-gray-200 hover:rounded-t"
                  href="/graph"
                >
                  Graph
                </Link>
                <Link
                  className="px-5 py-3 hover:bg-gray-200 hover:rounded-b"
                  href="/table"
                >
                  Table
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <button
              onClick={logout}
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-welmo-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-welmo-blue-hover"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <ImCross />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                <Link
                  href="/graph"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Graph
                </Link>
                <Link
                  href="/table"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Table
                </Link>
                <Link
                  href="/contact"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact
                </Link>
                <Link
                  href="/about"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  About
                </Link>
              </div>
              <div>
                <button
                  onClick={logout}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-welmo-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-welmo-blue-hover"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
