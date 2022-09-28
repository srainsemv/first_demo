import {useDispatch, useSelector} from "react-redux";
import {EnvelopeIcon, MapPinIcon, PhoneIcon, UserIcon} from "@heroicons/react/24/outline";
import client from "../../lib/apollo-client";
import {ConfirmTestDrive} from "../../graphql/ConfirmTestDrive";
// @ts-ignore
import { toggleShowStatus } from "../../slices/progressSlice";

export default function UserFormView() {
    const dispatch = useDispatch()
    const tdUserFormOpen = useSelector((state: any) => state.progress.tdUserFormOpen)
    const selectedLocation = useSelector((state: any) => state.progress.selectedLocation)
    const selectedDateString = useSelector((state: any) => state.progress.selectedDateString)
    const selectedTime = useSelector((state: any) => state.progress.selectedTime)

    const submitForm = async (event: any) => {
        event.preventDefault();

        const {data} = await client.mutate({
            mutation: ConfirmTestDrive(event.target.name.value, event.target.email.value, event.target.phone.value, event.target.selectedDateString.value, event.target.selectedTime.value, event.target.selectedLocation.value, event.target.zip.value)
        });

        if (data.insert_testdrive_confirmations.returning[0].id != undefined) {
            //alert("Test Drive Successfully Scheduled!")
            dispatch(toggleShowStatus())
        }
    }

    return (
        <>
            <div className={"bg-gray-50 mx-auto max-w-4xl my-6 py-4 rounded-lg"} hidden={!tdUserFormOpen}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    {/* Begin Test Drive Info */}
                    <div className={"container px-4"}>
                        <p className={"font-semibold text-center pt-2 pb-6"}>Test Drive Info</p>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Date</p>
                            </div>

                            <div>
                                <p className={"text-sm"}>{getLongDateString(selectedDateString)}</p>
                            </div>
                        </div>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Time</p>
                            </div>

                            <div>
                                <p className={"text-sm"}>{selectedTime}</p>
                            </div>
                        </div>
                        <div className={"py-4"}></div>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Location</p>
                            </div>

                            <div>
                                <p className={"text-sm"}>{selectedLocation.name}</p>
                            </div>
                        </div>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Address</p>
                            </div>

                            <div>
                                <a href={""}>
                                    <p className={"text-sm"}>{selectedLocation.address1}</p>
                                    <p className={"text-sm"}>{selectedLocation.city}, {selectedLocation.state} {selectedLocation.zip}</p>
                                </a>
                            </div>
                        </div>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Phone Number</p>
                            </div>

                            <div>
                                <p className={"text-sm"}>{selectedLocation.phone}</p>
                            </div>
                        </div>
                        <div className={"grid grid-cols-1 md: grid-cols-2 gap-2 py-2"}>
                            <div>
                                <p className={"font-semibold"}>Notes</p>
                            </div>

                            <div>
                                <p className={"text-sm"}>{selectedLocation.notes}</p>
                            </div>
                        </div>
                    </div>

                    {/* Begin User Form */}
                    <form onSubmit={submitForm}>
                        <input name={"selectedLocation"} value={selectedLocation.id} hidden={true} readOnly={true} />
                        <input name={"selectedDateString"} value={selectedDateString} hidden={true} readOnly={true} />
                        <input name={"selectedTime"} value={selectedTime} hidden={true} readOnly={true} />

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
                                        required={true}
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
                                        required={true}
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
                                        required={true}
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
                                        required={true}
                                    />
                                </div>
                            </div>

                            <button
                                className={"bg-blue-600 rounded-lg py-3 px-6 w-full flex justify-center text-white hover:bg-blue-700"}
                                type={"submit"}
                            >
                                <h1>Confirm Test Drive</h1>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

function getLongDateString(date: string) {
    const tempDate = new Date();
    const dateArray = date.split("/");
    tempDate.setMonth(Number(dateArray[0]) - 1);

    const monthString = tempDate.toLocaleString([], {
        month: 'long',
    });

    return `${monthString} ${dateArray[1]}, ${dateArray[2]}`
}