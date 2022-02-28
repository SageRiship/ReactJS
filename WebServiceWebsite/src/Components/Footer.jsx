import React from "react";

const Footer =()=>{
    const Year = new Date().getFullYear()
    return (
        <>
            <footer className="w-100 bg-light text-center">
                <p>©️ {Year} SageWebServices. All Rights Reserved | Terms And Conditions</p>
            </footer>
        </>
    )
}

export default Footer