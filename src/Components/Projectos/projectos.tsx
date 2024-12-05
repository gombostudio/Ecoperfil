import React from 'react'
import style from './styles.module.css'

const Projects = () => {

  return (

    <>
     <div className={style.text_and_line}>
       <span>Engenharia e Ecologia</span>
       <div></div>
     </div>

     <div className={style.section}>
        <div className={style.section_lefttext}>
          <h3>PROJECTOS</h3>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <div className={style.section_righttext}>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

        </div>
     </div>
    </>
  )

}

export default Projects