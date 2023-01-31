import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { TbChevronDown, TbHelp, TbChartBar, TbMenu2 } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { userService } from "@/services";
import Link from "next/link";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/contact",
    icon: TbChartBar,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "/contact", icon: TbChartBar },
  { name: "Contact Sales", href: "/contact", icon: TbChartBar },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/contact",
    icon: TbHelp,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "/contact" },
];

function logout() {
  console.log("logout");
  return userService.logout();
}

export default function Navbar({ color }) {
  return (
    <Popover
      className={`relative bg-gradient-to-b ${color} to-transparent bg-blur-sm`}
    >
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

          <div>
            <button className="peer text-base opacity-100 font-medium text-gray-700 hover:text-gray-900">
              Dropdown
            </button>

            <div
              className="hidden rounded transition-opacity duration-1000 ease-out opacity-0 hover:opacity-100 peer-hover:opacity-100 absolute peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
            >
              <Link
                className="px-5 py-3 hover:bg-gray-200 hover:rounded-t"
                href="/graph"
              >
                graph
              </Link>
              <Link className="px-5 py-3 hover:bg-gray-200" href="#">
                Contact Us
              </Link>
              <Link
                className="px-5 py-3 hover:bg-gray-200 hover:rounded-b"
                href="#"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-base font-medium text-gray-700 hover:text-gray-900"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-base font-medium text-gray-700 hover:text-gray-900"
          >
            About
          </Link>
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
          className="absolute z-10 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-sm bg-translucid-700">
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
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-trarant p-2 text-gray-400 hover:translucid-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-welmo-blue">
                    <span className="sr-only">Close menu</span>
                    <ImCross className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
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
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
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
