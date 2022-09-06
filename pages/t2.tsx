import {NextPage} from "next";
import Head from "next/head";
import { useState } from "react";

const t2: NextPage = () => {
    const [inputValues, setInputValues] = useState({});
    const [counter, setCounter] = useState(1);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    const handleOnChange = (e: { target: { className: string | number; value: any; }; }) => {
        const abc = {};
        // @ts-ignore
        abc[e.target.className] = e.target.value;
        setInputValues({ ...inputValues, ...abc });
    };

    return (
        <>
            <Head>
                <title>t2</title>
            </Head>

            <main className={"text-center pt-10"}>
                {Object.keys(inputValues).map((c) => {
                    return <p>{inputValues[c]}</p>;
                })}

                {Array.from(Array(counter)).map((c, index) => {
                    return (
                        <div className={"py-2"}>
                            <input
                                onChange={handleOnChange}
                                key={c}
                                className={`w-96 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${index}`}
                                placeholder={"Enter your data"}
                                type="text"
                            ></input>
                        </div>
                    );
                })}
                <div className={"py-4"}>
                    <button
                        onClick={handleClick}
                        className={"bg-blue-500 text-white py-4 px-8 rounded-lg"}
                    >
                        New Text Field
                    </button>
                </div>
            </main>
        </>
    )
}

export default t2