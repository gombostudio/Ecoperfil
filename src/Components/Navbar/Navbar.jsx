import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/princi-logo.png";
import menu_icon from "../../assets/menu.png";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu((prevState) => !prevState); // Alterna entre true e false
    };

    return (
        <nav className={style.nav_menu}>
            {/* Logo */}
            <img src={logo} className={style.logo} alt="ecoperfil" />

            {/* Ícone de menu (hambúrguer) */}
            <img
                src={menu_icon}
                className={style.menuicon}
                alt="Menu"
                onClick={handleToggle}
            />

            {/* Menu */}
            <ul className={toggleMenu ? style.list_menu : ''}>
            
                <li>Home</li>
                <li>Quem Somos</li>
                <li>Projectos</li>
                <li>Galeria</li>
                <li>
                    <button className={style.btn_contacto}>Contacte-nos</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
