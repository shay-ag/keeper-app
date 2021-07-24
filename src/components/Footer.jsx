import React from "react";

function Footer(){

    const year = new Date().getFullYear();

    return(
        <footer>
            <p>Copyright &#169; Shay {year}</p>
        </footer>
    )
}

export default Footer;