import React from "react";

export default function Destructure(Props){
   const {name,age}=Props

    return (
        <div>
            <h1>
                Hello {name} with age {age}
                
            </h1>
            {Props.children}
        </div>
    )

}