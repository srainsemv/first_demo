import React, { useEffect, useState, useRef } from "react";
import {NextPage} from "next";
import Head from 'next/head';
import NewUserModal from "../components/modals/NewUser";
import DeactivateModal from "../components/modals/Deactivate";
import { User } from "../models/post.model";
import { Car } from "../models/car.model";
import {getOrCreateConnection} from "../utils";
import { ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

// For Pagination
import ReactPaginate from 'react-paginate';

// For Charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Test: NextPage = () => {
    return (
        <>
            <Head>
                <title>Testing</title>
            </Head>

            <main>
                <div className={"text-center p-4"}>
                    <NewUserModal />
                    <DeactivateModal />

                    <div className={"pt-12 px-4"}>
                        <PaginatedItems itemsPerPage={10} />
                    </div>

                    <div className={"pt-12 pb-4 w-96 flex justify-center"}>
                        <DoughnutChartExample />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Test

export async function getServerSideProps() {
    const conn = await getOrCreateConnection();
    const userRepo = conn.getRepository<User>("User")
    const carRepo = conn.getRepository<Car>("Car")

    //const localCars = await carRepo.find();
    //const localUsers = await userRepo.find();
    //console.log(`${localCars.length} cars fetched from the database`)

    return {
        props: {

        }
    }
}

// @ts-ignore
function Items({ currentItems }) {
    return (
        <>
            <div className="flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Title
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Email
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Role
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 bg-white">
                            {currentItems &&
                                currentItems.map((item: string) => (
                                    <tr key={item} className={"text-left"}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            Item #{item}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">T</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">T</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">T</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only">T</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// @ts-ignore
function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        // @ts-ignore
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                className={"flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 w-20"}
                pageLinkClassName={"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"}
                activeLinkClassName={"bg-gray-100"}
                previousLinkClassName={"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"}
                nextLinkClassName={"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"}
                breakLabel={
                    <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true"/>
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                nextLabel={
                    <><span className="sr-only">Next</span><ChevronRightIcon className="h-5 w-5" aria-hidden="true"/></>
                }
                previousLabel={
                    <><span className="sr-only">Previous</span><ChevronLeftIcon className="h-5 w-5" aria-hidden="true"/></>
                }
                // @ts-ignore
                renderOnZeroPageCount={null}
            />
        </>
    );
}

function LineChartExample() {
    const canvasEl = useRef(null);

    const colors = {
        purple: {
            default: "rgba(149, 76, 233, 1)",
            half: "rgba(149, 76, 233, 0.5)",
            quarter: "rgba(149, 76, 233, 0.25)",
            zero: "rgba(149, 76, 233, 0)"
        },
        indigo: {
            default: "rgba(80, 102, 120, 1)",
            quarter: "rgba(80, 102, 120, 0.25)"
        }
    };

    useEffect(() => {
        // @ts-ignore
        const ctx = canvasEl.current.getContext("2d");
        // const ctx = document.getElementById("myChart");

        const gradient = ctx.createLinearGradient(0, 16, 0, 600);
        gradient.addColorStop(0, colors.purple.half);
        gradient.addColorStop(0.65, colors.purple.quarter);
        gradient.addColorStop(1, colors.purple.zero);

        const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

        const labels = [
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Week 6",
            "Week 7",
            "Week 8",
            "Week 9",
            "Week 10"
        ];
        const data = {
            labels: labels,
            datasets: [
                {
                    backgroundColor: gradient,
                    label: "Orders",
                    data: weight,
                    fill: true,
                    borderWidth: 2,
                    borderColor: colors.purple.default,
                    lineTension: 0.2,
                    pointBackgroundColor: colors.purple.default,
                    pointRadius: 3
                }
            ]
        };
        const config = {
            type: "line",
            data: data
        };
        // @ts-ignore
        const myLineChart = new Chart(ctx, config);

        return function cleanup() {
            myLineChart.destroy();
        };
    });

    return (
        <div className="App">
            <span>Chart Example</span>
            <canvas id="myChart" ref={canvasEl} height="100" />
        </div>
    );
}

function DoughnutChartExample() {
    const doughnutData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    return (
        <>
            <Doughnut data={doughnutData} />
        </>
    )
}