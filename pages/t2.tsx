import {NextPage} from "next";
import Head from "next/head";
import { useState } from "react";

const AnotherTest: NextPage = () => {
    const [inputValues, setInputValues] = useState({});
    const [counter, setCounter] = useState(1);

    const handleNewClick = () => {
        setCounter(counter + 1);
    };

    const handleRemoveClick = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const handleOnChange = (e: { target: { className: string | number; value: any; } }) => {
        const abc: {[index: string]:any} = {};
        abc[e.target.className] = e.target.value;
        setInputValues({ ...inputValues, ...abc });
    };

    const handleSubmission = () => {
        const formData = Object.values(inputValues)
        for (let i = 0; i < counter; i++) {
            if (formData[i] != undefined) {
                console.log(formData[i])
            }
        }
    }

    return (
        <>
            <Head>
                <title>t2</title>
            </Head>

            <main className={"text-center pt-10"}>
                {Array.from(Array(counter)).map((c, index) => {
                    return (
                        <div className={"py-2"} key={c}>
                            <input
                                onChange={handleOnChange}
                                className={`w-96 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${index}`}
                                placeholder={"Enter your data"}
                                type="text"
                            ></input>
                        </div>
                    );
                })}
                <div className={"py-4"}>
                    <button
                        onClick={handleNewClick}
                        className={"bg-blue-500 text-white py-4 px-8 rounded-lg"}
                    >
                        Add New Field
                    </button>
                    <button
                        onClick={handleRemoveClick}
                        className={"bg-red-500 text-white py-4 px-8 rounded-lg ml-2"}
                    >
                        Remove Last Field
                    </button>
                </div>
                <div className={"pb-4"}>
                    <button
                        onClick={handleSubmission}
                        className={"bg-blue-500 text-white py-4 px-8 rounded-lg"}
                    >
                        Submit Form
                    </button>
                </div>
            </main>
        </>
    )
}

export default AnotherTest