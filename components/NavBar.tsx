import {Component, Fragment} from "react";
import {Popover, Transition} from "@headlessui/react";
import {
    Bars3Icon,
    ChatBubbleBottomCenterTextIcon,
    ChatBubbleLeftRightIcon,
    InboxIcon, QuestionMarkCircleIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import Link from 'next/link';

class NavBar extends Component<any, any> {
    render() {
        const navigation = [
            { name: 'SOLO', href: '#' },
            { name: 'TEST DRIVE', href: '#' },
        ]
        const solutions = [
            {
                name: 'Inbox',
                description: 'Get a better understanding of where your traffic is coming from.',
                href: '#',
                icon: InboxIcon,
            },
            {
                name: 'Messaging',
                description: 'Speak directly to your customers in a more meaningful way.',
                href: '#',
                icon: ChatBubbleBottomCenterTextIcon,
            },
            {
                name: 'Live Chat',
                description: "Your customers' data will be safe and secure.",
                href: '#',
                icon: ChatBubbleLeftRightIcon,
            },
            {
                name: 'Knowledge Base',
                description: "Connect with third-party tools that you're already using.",
                href: '#',
                icon: QuestionMarkCircleIcon,
            },
        ]

        function classNames(...classes: any[]) {
            return classes.filter(Boolean).join(' ')
        }

        return (
            <>
                <header className={""}>
                    <Popover className="relative bg-transparent">
                        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <a href="#">
                                    <span className="sr-only">ElectraMeccanica</span>
                                    <img
                                        className="h-8 w-auto sm:h-10"
                                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="-my-2 -mr-2 md:hidden">
                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden space-x-10 md:flex items-center justify-end">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href}>
                                        <a className="text-2xl font-medium text-white hover:text-gray-300">
                                            {item.name}
                                        </a>
                                    </Link>
                                ))}

                                {/* BEGIN DROPDOWN */}
                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button>
                                                <Bars3Icon
                                                    className={classNames(
                                                        open ? 'text-gray-100' : 'text-white',
                                                        'h-10 w-10 group-hover:text-gray-300 pt-2'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                            {solutions.map((item) => (
                                                                <Link key={item.name} href={item.href}>
                                                                    <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                                                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 text-white sm:h-12 sm:w-12">
                                                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                                                        </div>
                                                                        <div className="ml-4">
                                                                            <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                        </div>
                                                                    </a>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </Popover.Group>
                        </div>

                        {/* Mobile Nav Control */}
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
                                className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
                            >
                                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="px-5 pt-5 pb-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                                    alt="Workflow"
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close menu</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid grid-cols-1 gap-7">
                                                {solutions.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                                                    >
                                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 text-white">
                                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                                        </div>
                                                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="py-6 px-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                            >
                                                Sign up
                                            </a>
                                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                Existing customer?
                                                <a href="#" className="text-gray-900">
                                                    Sign in
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </header>
            </>
        )
    }
}

export default NavBar