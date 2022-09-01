import {Component} from "react";
import NavBar from "../NavBar";
import Link from 'next/link';

class Hero extends Component<any, any> {
    render() {

        return (
            <>
                {/* Hero card */}
                <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                    <div className="mx-auto h-full">

                        <div className="relative shadow-xl sm:overflow-hidden h-screen flex flex-col">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full"
                                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                    alt="People working on laptops"
                                />
                                <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" />
                            </div>

                            <NavBar />

                            <div className="p-16 mt-auto w-full z-10">
                                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                                    <div className={"container p-8"}>
                                        <p className={"text-white text-3xl pb-2"}>Introducing</p>
                                        <p className={"text-white text-3xl pb-4"}>The All-Electric SOLO</p>
                                        <p className={"text-white text-xl"}>Priced at $18,500
                                            <span className={"align-super text-xs"}>1</span>
                                        </p>
                                    </div>

                                    <div className={"container flex justify-end items-end pb-4 pr-4"}>
                                        <Link href={""}>
                                            <a className="flex w-56 h-16 items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg">
                                                Order Now
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Hero