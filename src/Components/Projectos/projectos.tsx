import React from 'react'
import style from './styles.module.css'

const Projects = () => {

  return (

    <>
    <div id='projects' className={style.princiSection}>
     <div className={style.text_and_line}>
       <span>Engenharia e Ecologia</span>
       <div></div>
     </div>

     <div className={style.section}>
        <div className={style.section_lefttext}>
          <h3>PROJECTOS</h3>
          <p>
           No grupo EcoPerfil, abraçamos a diversidade, a criactividade e a colaboração.
           Acreditamos que, ao unir diferentes perspectivas e competências, podemos enfrentar
           qualquer desafio e criar soluções verdadeiramente transformadoras.
          </p>
        </div>

        <div className={style.section_righttext}>
          <p>
           Junte-se a nós
           nesta jornada de inovação e descubra como podemos construir um futuro melhor, juntos.
          </p>

        </div>
     </div>
     </div>
    </>
  )

}

export default Projects