import React from "react";
import { useParams } from "react-router";

export default function User(){

    let { username } = useParams()

    return(
        <div>
            <center style={{marginTop: 5 +'em', fontSize: 30 + 'px'}}>
                User: {username}
            </center>
        </div>
    )

}


// //.Extra
// function Doubler() {

//     let { num } = useParams()


//     return ( 
//         <div>
//             Double of {} is {}
//         </div>
//     )
// }