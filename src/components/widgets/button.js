import React from "react"
import {Link} from "gatsby"

const linkStyle = {
	textDecoration: "none",
	color: "black"
}

const Button = (props) => {
    return (
        <Link to={props.to} style={linkStyle}>
            {props.children}
        </Link>
    )
}

export default Button
