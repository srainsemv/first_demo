import { useSelector, useDispatch } from "react-redux";
import { toggleSettingsModal } from "../../slices/progressSlice";

export default function MyTestModal() {
    const dispatch = useDispatch()
    const settingsModalOpen = useSelector((state: any) => state.progress.settingsModalOpen)

    return (
        <>
            <section>
                <button
                    className={"bg-blue-500 px-4 py-3 rounded-lg text-white"}
                    onClick={() => dispatch(toggleSettingsModal())}
                >
                    Open Settings
                </button>
            </section>

            {settingsModalOpen && (
                <div className={"pt-10 flex justify-center"}>
                    <div className={"bg-gray-300 max-w-7xl p-10 rounded-lg"}>
                        <h2 className={"pb-2"}>Settings</h2>
                        <button
                            className={"bg-blue-500 px-4 py-2 rounded-lg text-white"}
                            onClick={() => dispatch(toggleSettingsModal())}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}