import {useSelector} from "react-redux";
import Calendar from "react-calendar";
import {useState} from "react";
import {RadioGroup} from "@headlessui/react";
import classNames from "classnames";
import {CheckCircleIcon} from "@heroicons/react/20/solid";

export default function CalendarView(date: Date, times: string[]) {
    const selectDayTimeOpen = useSelector((state: any) => state.progress.selectDayTimeOpen)
    return (
        <>
            <div className={"bg-gray-50 mx-auto max-w-4xl my-6 py-4 rounded-lg"} hidden={!selectDayTimeOpen}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
                    <div className={"grid grid-rows-1 gap-4"}>
                        <div className="flex justify-center pt-4 h-fit">
                            <Calendar onChange={() => {}} value={date} className={"rounded-lg"} calendarType={"US"}
                                      minDate={new Date()}
                                      maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())}/>
                        </div>
                    </div>

                    <div className={"h-fit px-4"}>
                        <p className={"font-semibold text-center pt-2"}>{date.toLocaleString('default', {month: 'long'})} {date.getDate()}, {date.getFullYear()}</p>
                        {ListOfAvailableTimes(getSelectedDate(date), times)}
                    </div>
                </div>
            </div>
        </>
    )
}

function ListOfAvailableTimes(selectedDate: string, availableTimes: string[]) {
    const [selectedTime, setSelectedTime] = useState() // Leave empty so no cell is selected by default

    return (
        <>
            <form onSubmit={submitForm}>
                <input name={"selectedDate"} id={"selectedDate"} value={selectedDate} hidden readOnly={true} />
                <RadioGroup value={selectedTime} onChange={setSelectedTime} name={"selectedTime"} id={"selectedTime"}>
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 pb-6">
                        {/* LOOPS THROUGH AVAILABILITY AND MAPS THEM TO THE CALENDAR VIEW */}
                        {availableTimes.map((time: string) => (
                            <RadioGroup.Option
                                key={time}
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
                    <button className={"bg-blue-600 rounded-lg py-3 px-6 w-full flex justify-center text-white hover:bg-blue-700"} type={"submit"} key={1}>
                        <h1>Continue</h1>
                    </button>

                </RadioGroup>
            </form>
        </>
    )
}

function getSelectedDate(selectedDate: Date) {
    const dateNum = selectedDate.getDate() < 10 ? `0${selectedDate.getDate()}` : selectedDate.getDate()
    const monthNum = selectedDate.getMonth()+1 < 10 ? `0${selectedDate.getMonth()+1}` : selectedDate.getMonth()+1

    return `${monthNum}/${dateNum}/${selectedDate.getFullYear()}`
}

const submitForm = async (event: any) => {
    event.preventDefault();
    alert(`Test Drive on ${event.target.selectedDate.value} at ${event.target.selectedTime.value} confirmed!`);
};