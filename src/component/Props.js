import React from "react";

export default function Props(Props){

    return (
        <div>
            <h1>
                Hello {Props.name} with age {Props.age}
                
            </h1>
            {Props.children}
        </div>
    )

}