import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import logoUrl from "../../assets/images/logo.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const user = {
    name: "Jephthah Mbah",
    email: "donjeph@gmail.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation = [
    { name: "Home", path: "/" },
    { name: "My Reports", path: "/my-reports" },
    { name: "Bible Students", path: "/bible-students" },
    { name: "Download App", path: "/download-app" },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const userNavigation = [
    { name: "Your Profile" },
    { name: "Settings" },
    { name: "Sign out" },
  ];

  return (
    <>
      <Disclosure
        as="nav"
        className="bg-[#1B1B1B] h-14 backdrop-blur fixed top-0 w-full"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-6">
              <div className="flex h-14 items-center justify-between">
                <div className="flex items-center">
                  <Link href="/" className="flex-shrink-0 cursor-pointer flex">
                    <Image
                      width={32}
                      height={32}
                      className="h-8 w-8"
                      src={logoUrl}
                      alt="Jeph"
                    />
                  </Link>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:text-black`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3 ">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    if (item.name === "Your Profile") {
                                      // navigateTo("/profile");
                                    }
                                  }}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </button>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className=" flex md:hidden ">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-900 hover:bg-gray-200">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars4Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden bg-[#1B1B1B] ">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.path}
                    className={classNames(
                      // item.current ? "" : "",
                      "block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:text-black "
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-white pt-4 pb-3">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <Image
                      width={32}
                      height={32}
                      className="h-14 w-14 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-100 mt-1">
                      {user.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="button"
                      onClick={() => {
                        if (item.name === "Your Profile") {
                          // navigateTo("/profile");
                        }
                      }}
                      className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:text-black"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
