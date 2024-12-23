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
            <ul className={`${style.list_menu} ${toggleMenu ? style.active : ''}`}>
                <li>Home</li>
                <li><a href="#quemsomos">Quem Somos</a></li>
                <li><a href="#projects">Projectos</a></li>
                <li><a href="#galeria">Galeria</a></li>
                <li>
                    <button className={style.btn_contacto}>Contacte-nos</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
