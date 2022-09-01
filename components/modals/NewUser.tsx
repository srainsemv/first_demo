import { useSelector, useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { UserPlusIcon } from "@heroicons/react/24/outline";
// @ts-ignore
import {toggleNewUserModal} from "../../slices/progressSlice";
import {Fragment} from "react"; // 5. Import the toggle function from step 2

export default function NewUserModal() {
    const dispatch = useDispatch()
    const newUserModalOpen = useSelector((state: any) => state.progress.newUserModalOpen) // 6. Create a "localized" const with useSelector for the state (from step 1)

    return (
        <>
            <section>
                <button
                    className={"bg-blue-500 px-4 py-3 rounded-lg text-white"}
                    onClick={() => dispatch(toggleNewUserModal())} // 7. Add the toggle function inside a dispatch for it to execute on button click
                >
                    Create New User
                </button>
            </section>

            {newUserModalOpen && ( // 8. Add the const we created to check if it's open or closed
                <Transition.Root show={newUserModalOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={toggleNewUserModal}>
                        <Transition.Child>
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child>
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <UserPlusIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                                </div>
                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-lg font-medium text-gray-900 border-b">
                                                        Create New User
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <div className={"w-96 py-4"}>
                                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                                Full Name
                                                            </label>
                                                            <div className="mt-1">
                                                                <input
                                                                    type="text"
                                                                    name="fullname"
                                                                    id="fullname"
                                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                                    placeholder="John Doe"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={"w-96 py-4"}>
                                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                                Email Address
                                                            </label>
                                                            <div className="mt-1">
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    id="email"
                                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                                    placeholder="email@example.com"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => dispatch(toggleNewUserModal())}
                                            >
                                                Add User
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => dispatch(toggleNewUserModal())}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            )}
        </>
    )
}