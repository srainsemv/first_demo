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
                {faker.name.fullName()}
            </p>
        </>
    )
}

export default UpdateNumber