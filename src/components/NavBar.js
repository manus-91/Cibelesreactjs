import React from "react";

class NavBar extends React.Component{
    render() {
        return(
            <nav> Nuestros productos
            <ul>
            <li>
                    <a href="">Canelones</a>
                </li>
                <li>
                <a href="">Carne al Horno</a>
                </li>
                <li>
                <a href="">Pastel de carne</a>
                </li>
                <li>
                    <a href="">Guiso de lentejas</a>
                </li>
            </ul>
        </nav>

        );
    }
}

export default NavBar; 