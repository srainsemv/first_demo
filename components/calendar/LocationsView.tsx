import {useDispatch, useSelector} from "react-redux";
import {MapPinIcon} from "@heroicons/react/24/outline";
// @ts-ignore
import {setLocationState} from "../../slices/progressSlice";

export default function LocationsView(locations: { id: number; name: string; address1: string; city: string; state: string; zip: string; country: string; location_details_relationship: {phone: string; notes: string;} }[]) {
    const selectLocationOpen = useSelector((state: any) => state.progress.selectLocationOpen)
    const dispatch = useDispatch()

    return (
        <>
            <div className={"bg-gray-50 mx-auto max-w-4xl my-6 py-4 rounded-lg"} hidden={!selectLocationOpen}>
                <div className={"grid grid-cols-1 sm:grid-cols-2 gap-6"}>
                    <div className={"px-4 pt-2 sm:border-r"}>
                        {/*
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="text"
                                name="zip"
                                id="zip"
                                className="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Enter Zip Code"
                            />
                        </div>
                        <div className="flex justify-center h-fit pt-4">
                            <img src={"/map.png"} className={"rounded-lg"} />
                        </div>
                        */}

                        <h1 className={"text-2xl font-bold text-center pb-8"}>Request a Test Drive</h1>
                        <div className={"max-w-full sm:max-w-md px-4"}>
                            <p className={"font-semibold pb-6 text-center sm:text-left"}>Test drives are by appointment only. We will reach out to confirm your appointment by email, phone and text.</p>
                            <p className={"pb-6 text-center sm:text-left"}>1 hour appointments includes time for sign-in, introductions, product walkthrough/tour, the drive, and then any Q&A following the experience.</p>
                            <p className={"pb-4 text-center sm:text-left"}>If you have any additional questions before requesting your test drive you can reach us at:</p>
                            <p className={"pb-1 text-center sm:text-left text-blue-500 underline"}> <a href={"mailto:sales@electrameccanica.com"}>sales@electrameccanica.com</a></p>
                            <p className={"pb-6 text-center sm:text-left"}> <a href={"tel:18884577656"} className={"underline text-blue-500"}>+1 (888) 457-SOLO</a> <span className={"text-sm"}>(Option 2 for Sales & Test Drives)</span></p>
                            <p className={"pb-6 text-center sm:text-left"}>Interested in a home test drive? Call the above number and ask about our home test drive options!</p>
                            <p className={"pb-2 text-center sm:text-left text-red-500"}>Please bring your insurance and Drivers License to your appointment.</p>
                        </div>
                    </div>

                    <div className={"h-fit px-4"}>
                        <p className={"font-semibold text-center pt-2"}>Select a Location</p>
                        <div className={"mt-4 grid grid-cols-1 gap-y-4 sm:gap-x-4 pb-6"}>
                            {locations.map((location: { id: number; name: string; address1: string; city: string; state: string; zip: string; country: string; location_details_relationship: {phone: string; notes: string;} }) => (
                                <button
                                    key={location.id}
                                    onClick={
                                        () => dispatch(setLocationState([{"id": location.id, "name":location.name, "address1":location.address1, "city":location.city, "state":location.state, "zip":location.zip, "phone":location.location_details_relationship.phone, "notes":location.location_details_relationship.notes}]))
                                    }
                                    className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 md:py-4 md:px-10 md:text-sm"
                                >
                                    {location.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}