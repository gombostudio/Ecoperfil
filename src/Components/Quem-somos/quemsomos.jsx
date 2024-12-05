import React from 'react'
import style from './quemsomos.module.css'

function QuemSomos(){
    return(
        <>
        <div className={style.text_and_line}>
            <span>Engenharia e Ecologia</span>
            <div></div>
        </div>
    

        <div className={style.section}> 

            <div className={style.section_firsttext}>
                <h3> <span>QUEM</span> SOMOS </h3>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci illo ea quas sint nam possimus porro eius nulla laudantium,
                repudiandae tempora eligendi, modi magnam harum eaque dolor itaque nihil similique.
                </p>
            </div>

            <div className={style.section_img}>
                <img src='../../public/images/quem-somos.jpg'/>
            </div>

            <div className={style.section_secondtext}>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci illo ea quas sint nam possimus porro eius nulla laudantium,
                repudiandae tempora eligendi, modi magnam harum eaque dolor itaque nihil similique.
            </p>
            </div>

            <div className={style.line}></div>
        </div>
        
        </>
    )

}export default QuemSomos
