import React from "react";

const SecondsCounter = ({ seconds }) => {

    const digitSix = Math.floor(seconds / 100000) % 10;
    const digitFive = Math.floor(seconds / 10000) % 10;
    const digitFour = Math.floor(seconds / 1000) % 10;
    const digitThree = Math.floor(seconds / 100) % 10;
    const digitTwo = Math.floor(seconds / 10) % 10;
    const digitOne = seconds % 10;

    return (

        <div className="d-flex justify-content-center bg-dark p-4">

            <div className="text-white fs-1 me-3">
                <i className="fa-solid fa-clock"></i>
            </div>

            <div className="text-white fs-1 mx-2">{digitSix}</div>
            <div className="text-white fs-1 mx-2">{digitFive}</div>
            <div className="text-white fs-1 mx-2">{digitFour}</div>
            <div className="text-white fs-1 mx-2">{digitThree}</div>
            <div className="text-white fs-1 mx-2">{digitTwo}</div>
            <div className="text-white fs-1 mx-2">{digitOne}</div>

        </div>

    );
};

export default SecondsCounter;