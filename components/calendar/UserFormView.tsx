import {useSelector} from "react-redux";
import {EnvelopeIcon, MapPinIcon, PhoneIcon, UserIcon} from "@heroicons/react/24/outline";

export default function UserFormView() {
    const tdUserFormOpen = useSelector((state: any) => state.progress.tdUserFormOpen)

    return (
        <>
            <div className={"bg-gray-50 mx-auto max-w-4xl my-6 py-4 rounded-lg"} hidden={!tdUserFormOpen}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    <div className={"container px-4"}>
                        <p className={"font-semibold text-center pt-2 pb-6"}>Test Drive Info</p>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Date</p>
                            </div>

                            <div>
                                <p className={"text-sm"}>September 23, 2022</p>
                            </div>
                        </div>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Time</p>
                            </div>

                            <div>
                                <p className={"text-sm"}>2:00 PM - 3:00 PM PST</p>
                            </div>
                        </div>
                        <div className={"py-4"}></div>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Location</p>
                            </div>

                            <div>
                                <p className={"text-sm"}>Scottsdale Fashion Square</p>
                            </div>
                        </div>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Address</p>
                            </div>

                            <div>
                                <a href={""}>
                                    <p className={"text-sm"}>7014 E Camelback Rd</p>
                                    <p className={"text-sm"}>Scottsdale, AZ 85251</p>
                                </a>
                            </div>
                        </div>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Phone Number</p>
                            </div>

                            <div>
                                <p className={"text-sm"}>+1 (480) 392-3695</p>
                            </div>
                        </div>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Notes</p>
                            </div>

                            <div>
                                <p className={"text-sm"}>In the food court next to the Starbucks and Boba Tea.</p>
                            </div>
                        </div>
                    </div>

                    <div className={"container h-fit px-4"}>
                        <p className={"font-semibold text-center pt-2 pb-4"}>Enter Your Details</p>

                        <div className={"pb-6"}>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Full Name"
                                />
                            </div>
                        </div>

                        <div className={"pb-6"}>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Email Address"
                                />
                            </div>
                        </div>

                        <div className={"pb-6"}>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>

                        <div className={"pb-6"}>
                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                                Zip Code
                            </label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    name="zip"
                                    id="zip"
                                    className="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Zip Code"
                                />
                            </div>
                        </div>

                        <button className={"bg-blue-600 rounded-lg py-3 px-6 w-full flex justify-center text-white hover:bg-blue-700"} type={"submit"} key={1}>
                            <h1>Confirm Test Drive</h1>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}