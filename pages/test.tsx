import {NextPage} from "next";
import Head from 'next/head';
import NewUserModal from "../components/modals/NewUser";
import DeactivateModal from "../components/modals/Deactivate";
import { User } from "../models/post.model";
import { Car } from "../models/car.model";
import {getOrCreateConnection} from "../utils";

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