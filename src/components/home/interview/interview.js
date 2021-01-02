import React from "react"
import {Link} from "gatsby"

import BackgroundImg from "../background/brackgroundImage"
import BWI from "../../widgets/buttons/buttonWithImg"
import {Subtitle} from "../../layouts/title"

const polygons = [
    {
        position: "absolute",
        top: "0",
        left: "20%",
        width: "60%",
        height: "100%",
        transform: "rotate(-40deg)"
    },
    {
        position: "absolute",
        top: "0",
        left: "70%",
        width: "50%",
        height: "100%",
        transform: "rotate(20deg)"
    },
]

const Interview = (props) => {
    return (
        <div>
            <BWI setDefault={props.setDefault} unsetDefault={props.unsetDefault}>
                <Subtitle>
                    <Link to="/interview">NEWS & INTERVIEWS</Link>
                </Subtitle>
                <BackgroundImg style={polygons[1]}/>
            </BWI>
        </div>
    )
}

export default Interview
