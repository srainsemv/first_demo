import {useSelector} from "react-redux";
import {CheckCircleIcon} from "@heroicons/react/24/outline";

export default function StatusView() {
    const statusPageOpen = useSelector((state: any) => state.progress.statusPageOpen)
    const selectedLocation = useSelector((state: any) => state.progress.selectedLocation)
    const selectedDateString = useSelector((state: any) => state.progress.selectedDateString)
    const selectedTime = useSelector((state: any) => state.progress.selectedTime)

    return(
        <>
            <div className={"bg-gray-50 mx-auto max-w-4xl my-6 py-4 rounded-lg"} hidden={!statusPageOpen}>
                <div className="text-green-600 flex justify-center pb-2">
                    <CheckCircleIcon className="h-14 w-14" aria-hidden="true" />
                </div>
                <h1 className={"text-center text-2xl font-bold"}>Test Drive Confirmed!</h1>
                <p className={"text-center pt-2 pb-12"}>Your test drive has been scheduled. We will send you a confirmation email with directions.</p>

                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 pb-4"}>
                    {/* Begin Test Drive Info */}
                    <div className={"container px-6"}>
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

                    {/* Begin Solo Image */}
                    <div className={"container px-4"}>
                        <img
                            src={"/images/black-solo-sideview.png"}
                            className={"w-auto rounded-lg"}
                        />
                    </div>
                </div>

                {/*
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    <div className={"container px-6"}>
                        <div className={"pt-6 pb-4 text-center"}>
                            <a href={""} className={"bg-blue-600 text-white py-4 px-8 hover:bg-blue-700 max-w-4xl"}>
                                Explore SOLO
                            </a>
                        </div>
                    </div>

                    <div className={"container px-4"}>
                        <div className={"pt-6 pb-4 text-center"}>
                            <a href={""} className={"bg-blue-600 text-white py-4 px-8 hover:bg-blue-700"}>
                                Explore Charging
                            </a>
                        </div>
                    </div>
                </div>
                */}
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