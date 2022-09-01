import { useSelector, useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
// @ts-ignore
import {toggleDeactivateModal} from "../../slices/progressSlice";
import {Fragment} from "react"; // 5. Import the toggle function from step 2

export default function DeactivateModal() {
    const dispatch = useDispatch()
    const deactivateModalOpen = useSelector((state: any) => state.progress.deactivateModalOpen) // 6. Create a "localized" const with useSelector for the state (from step 1)

    return (
        <>
            <section>
                <button
                    className={"bg-red-500 px-4 py-3 rounded-lg text-white mt-5"}
                    onClick={() => dispatch(toggleDeactivateModal())} // 7. Add the toggle function inside a dispatch for it to execute on button click
                >
                    Deactivate
                </button>
            </section>

            {deactivateModalOpen && ( // 8. Add the const we created to check if it's open or closed
                <Transition.Root show={deactivateModalOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={toggleDeactivateModal}>
                        <Transition.Child>
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child>
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                                </div>
                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                        Deactivate account
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">
                                                            Are you sure you want to deactivate your account? All of your data will be permanently
                                                            removed. This action cannot be undone.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => dispatch(toggleDeactivateModal())}
                                            >
                                                Deactivate
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => dispatch(toggleDeactivateModal())}
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