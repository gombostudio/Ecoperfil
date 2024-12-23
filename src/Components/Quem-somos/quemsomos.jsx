import React from 'react'
import style from './quemsomos.module.css'
import missionImage from '../../assets/missionimg.jpg';

function QuemSomos(){
    return(
        <>
        <div className={style.text_and_line}>
            <span>Engenharia e Ecologia</span>
            <div></div>
        </div>
    

        <div className={style.section} id='quemsomos'> 

            <div className={style.section_firsttext}>
                <h3> <span>QUEM</span> SOMOS </h3>
                <p>
                No grupo Ecoperfil, acreditamos que a inovação e a sustentabilidade são às chaves
                para um futuro melhor.
                </p>
            </div>

            <div className={style.section_img}>
                <img src={missionImage}/>
            </div>

            <div className={style.section_secondtext}>
            <p>
            Somos uma equipa multidisciplinar de engenheiros de especializações diversas,
            ecólogos e profissionais de saúde, unidos pela paixão de resolver desafios complexos através de abordagens
            inovadoras, princípios ecológicos e ciência fundamental.
            </p>
            </div>

            <div className={style.line}></div>
        </div>
        
        </>
    )

}export default QuemSomos
