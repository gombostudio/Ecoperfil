import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{display:'flex', backgroundColor:'#396639', color:'white', alignItems:'center', justifyContent:'center', fontSize:'clamp(.8rem, 0.85rem + 0.25vw, 1.15rem)', paddingTop:'24px'}}>
            <p>&copy; {currentYear} @EcoPerfil. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
