import {useDispatch, useSelector} from "react-redux";
import Calendar from "react-calendar";
import {useEffect, useState} from "react";
import {RadioGroup} from "@headlessui/react";
import classNames from "classnames";
import {CheckCircleIcon} from "@heroicons/react/20/solid";
// @ts-ignore
import {setLocationState, setSelectedDate, toggleTDUserForm, setSelectedTate, setSelectedDateTime} from "../../slices/progressSlice";
import client from "../../lib/apollo-client";
import {gql} from "@apollo/client";

export default function CalendarView(initialTimes: string[]) {
    const selectDayTimeOpen = useSelector((state: any) => state.progress.selectDayTimeOpen)
    const selectedLocation = useSelector((state: any) => state.progress.selectedLocation)
    const [date, setDate] = useState(new Date());
    const [times, setTimes] = useState<string[]>(initialTimes);

    useEffect(() => {
        // This runs when a new date is selected
        getVehicleAvailabilityForDayAndLocation()
    }, [date]);

    useEffect(() => {
        // This runs when a location is selected (gets current day's availability at location)
        if (selectedLocation.name != "") {
            getVehicleAvailabilityForDayAndLocation()
        }
    }, [selectedLocation])

    async function getVehicleAvailabilityForDayAndLocation() {
        try {
            const {data} = await client.query({
                query: gql`
                query GetLocationAvailability {
                  testdrive_vehicles(where: {in_service: {_eq: true}, location: {_eq: ${selectedLocation.id}}}) {
                    vehicle_availability_relationship_array(where: {date: {_eq: "${getSelectedDate(date)}"}}) {
                      t8
                      t9
                      t10
                      t11
                      t12
                      t13
                      t14
                      t15
                      t16
                      t17
                      t18
                      t19
                      t20
                    }
                  }
                }
              `,
            });

            await createArrayOfAvailabilityForDay(data.testdrive_vehicles)
        } catch (err) {
            console.log(err)
        }
    }

    const createArrayOfAvailabilityForDay = async (data: { vehicle_availability_relationship_array: { t8: boolean; t9: boolean; t10: boolean; t11: boolean; t12: boolean; t13: boolean; t14: boolean; t15: boolean; t16: boolean; t17: boolean; t18: boolean; t19: boolean; t20: boolean; }[]; }[]) => {
        let fullListOfTimes: string[] = []

        data.map((vehicle: {
            vehicle_availability_relationship_array: {
                t8: boolean; t9: boolean; t10: boolean; t11: boolean; t12: boolean; t13: boolean; t14: boolean; t15: boolean; t16: boolean; t17: boolean; t18: boolean; t19: boolean; t20: boolean;
            }[];
        }) => (
            vehicle.vehicle_availability_relationship_array.map(async (value: {
                t8: boolean; t9: boolean; t10: boolean; t11: boolean; t12: boolean; t13: boolean; t14: boolean; t15: boolean; t16: boolean; t17: boolean; t18: boolean; t19: boolean; t20: boolean;
            }) => (
                (
                    getListOfAvailableTimesForEachVehicle(value).map((timeString) => (
                        fullListOfTimes.indexOf(timeString) === -1 ? fullListOfTimes.push(timeString) : null
                    ))
                )
            ))
        ))

        setTimes(fullListOfTimes)
    }

    const getListOfAvailableTimesForEachVehicle = (data: { t8: boolean; t9: boolean; t10: boolean; t11: boolean; t12: boolean; t13: boolean; t14: boolean; t15: boolean; t16: boolean; t17: boolean; t18: boolean; t19: boolean; t20: boolean; }) => {
        let tempTimes: string[] = []
        data.t8 ? tempTimes.push("8:00 AM") : null
        data.t9 ? tempTimes.push("9:00 AM") : null
        data.t10 ? tempTimes.push("10:00 AM") : null
        data.t11 ? tempTimes.push("11:00 AM") : null
        data.t12 ? tempTimes.push("12:00 PM") : null
        data.t13 ? tempTimes.push("1:00 PM") : null
        data.t14 ? tempTimes.push("2:00 PM") : null
        data.t15 ? tempTimes.push("3:00 PM") : null
        data.t16 ? tempTimes.push("4:00 PM") : null
        data.t17 ? tempTimes.push("5:00 PM") : null
        data.t18 ? tempTimes.push("6:00 PM") : null
        data.t19 ? tempTimes.push("7:00 PM") : null
        data.t20 ? tempTimes.push("8:00 PM") : null
        return tempTimes
    }

    return (
        <>
            <div className={"bg-gray-50 mx-auto max-w-4xl my-6 py-4 rounded-lg"} hidden={!selectDayTimeOpen}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
                    <div className={"grid grid-rows-1 gap-4"}>
                        <div className="flex justify-center pt-4 h-fit">
                            <Calendar onChange={setDate} value={date} className={"rounded-lg"} calendarType={"US"}
                                      minDate={new Date()}
                                      maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())}/>
                        </div>
                    </div>

                    <div className={"h-fit px-4"}>
                        <p className={"font-semibold text-center pt-2"}>{date.toLocaleString('default', {month: 'long'})} {date.getDate()}, {date.getFullYear()}</p>
                        <p className={"text-center pt-2"}>{selectedLocation.name}</p>
                        {ListOfAvailableTimes(getSelectedDate(date), times)}
                    </div>
                </div>
            </div>
        </>
    )
}

function ListOfAvailableTimes(selectedDate: string, availableTimes: string[]) {
    const dispatch = useDispatch()
    const [selectedTime, setSelectedTime] = useState() // Leave empty so no cell is selected by default

    return (
        <>
            <RadioGroup value={selectedTime} onChange={setSelectedTime} name={"selectedTime"} id={"selectedTime"}>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 pb-6">
                    {/* LOOPS THROUGH AVAILABILITY AND MAPS THEM TO THE CALENDAR VIEW */}
                    {availableTimes.map((time: string) => (
                        <RadioGroup.Option
                            key={time}
                            onClick={() => dispatch(setSelectedDateTime({"date": selectedDate, "time": time}))}
                            value={time}
                            className={({ checked, active }) =>
                                classNames(
                                    checked ? 'border-transparent' : 'border-gray-300',
                                    active ? 'border-blue-500 ring-2 ring-blue-500' : '',
                                    'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none hover:bg-gray-50'
                                )
                            }
                        >
                            {({ checked, active }) => (
                                <>
                                    <span className="flex flex-1">
                                      <span className="flex flex-col">
                                        <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                          {time}
                                        </RadioGroup.Label>
                                      </span>
                                    </span>
                                    <CheckCircleIcon
                                        className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-blue-600')}
                                        aria-hidden="true"
                                    />
                                    <span
                                        className={classNames(
                                            active ? 'border' : 'border-2',
                                            checked ? 'border-blue-500' : 'border-transparent',
                                            'pointer-events-none absolute -inset-px rounded-lg'
                                        )}
                                        aria-hidden="true"
                                    />
                                </>
                            )}
                        </RadioGroup.Option>
                    ))}
                </div>

                {/* HIDES THE CONTINUE BUTTON IF NOT TIMES ARE AVAILABLE */}
                {availableTimes.length > 0 ?
                    (
                        <button
                            key={1}
                            className={`${selectedTime == undefined ? "bg-gray-300" : "bg-blue-600 hover:bg-blue-700"} rounded-lg py-3 px-6 w-full flex justify-center text-white`}
                            disabled={selectedTime == undefined}
                            onClick={() => dispatch(toggleTDUserForm())}
                        >
                            {selectedTime == undefined ? (<h1>Select a Time</h1>) : <h1>Continue</h1>}
                        </button>
                    ) :
                    (
                        <p className={"bg-gray-100 rounded-lg text-center py-4 px-6"}>
                            No available times
                        </p>
                    )
                }
            </RadioGroup>
        </>
    )
}

function getSelectedDate(selectedDate: Date) {
    const dateNum = selectedDate.getDate() < 10 ? `0${selectedDate.getDate()}` : selectedDate.getDate()
    const monthNum = selectedDate.getMonth()+1 < 10 ? `0${selectedDate.getMonth()+1}` : selectedDate.getMonth()+1

    return `${monthNum}/${dateNum}/${selectedDate.getFullYear()}`
}