import React, {useState, useEffect} from "react";
import {faker} from "@faker-js/faker";

const UpdateNumber = () => {
    const [timer, setTimer] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(new Date());
        }, 1000);
        return () => clearInterval(interval);
    },[])
    return (
        <>
            <p>
                {faker.internet.email()}
            </p>
        </>
    )
}

export default UpdateNumber