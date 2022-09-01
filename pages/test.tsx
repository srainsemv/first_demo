import {NextPage} from "next";
import Head from 'next/head';
import NewUserModal from "../components/modals/NewUser";
import DeactivateModal from "../components/modals/Deactivate";
import { User } from "../models/post.model";
import { Car } from "../models/car.model";
import {getOrCreateConnection} from "../utils";

// For Pagination
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

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
                        <PaginatedItems itemsPerPage={8} />
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
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        // @ts-ignore
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="previous"
                // @ts-ignore
                renderOnZeroPageCount={null}
            />
        </>
    );
}
