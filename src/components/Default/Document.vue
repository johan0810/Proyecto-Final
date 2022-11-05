<template>

  <div class="container-body">
   <a
            type="button"
            id="boton-link" class="prev"
          >
          </a>

           <a
            type="button"
            id="boton-link" class="next"
          >
          </a>
    <div class="tex">
      <h1><b> Documentación Del Sena</b></h1>
    </div>
    <div class="slider">

      <div class="content">
        <div class="photo1"></div>
        <div class="photo2"></div>
        <div class="photo3"></div>
        <div class="photo4"></div>
      </div>
    </div>
  </div>
  <div class="slider">
  <div class="titulo1">
    <ul>
      <li><h1>Observa y Consulta:</h1></li>
    </ul>
  </div>
  <div class="div">
    <div class="container-main">
      <article id="documento1">
        <h1>Reglamento del Aprendiz</h1>
        <div class="logo" id="img1"></div>
        <div class="texto">
          El Reglamento del Aprendiz SENA se aplica a todas las personas
          matriculadas en los programas de formación profesional del Sena.
        </div>
        <a id="button" class="btn" href="#manual" role="button">Ver</a>
      </article>
      <article id="documento1">
        <h1>Mision y Vision del Sena</h1>
        <div class="logo" id="img2"></div>
        <div class="texto">
          El SENA, es un establecimiento público del orden nacional, con
          personería jurídica, patrimonio propio e independiente.
        </div>
        <a id="button" class="btn" href="#mision-vision" role="button">Ver</a>
      </article>
      <article id="documento1">
        <h1>Himno del SENA</h1>
        <div class="logo" id="img3"></div>
        <div class="texto">
          El himno del SENA es uno de los símbolos institucionales que fomenta
          el amor por una de las instituciones más importantes del país.
        </div>
        <a id="button" class="btn" href="#himno" role="button">Ver</a>
      </article>
      <article id="documento1">
        <h1>Valores y Compromisos Institucionales</h1>
        <div class="logo" id="img4"></div>
        <div class="texto">
          Los servidores públicos del SENA, contribuyen a dar respuesta al
          reclamo generalizado en contra de la corrupción y vivir una política
          de integridad.
        </div>
        <a id="button" class="btn btn" href="#valores" role="button">Ver</a>
      </article>
    </div>
  </div>

  <!-- <div class="collapse" id="collapseExample">
    <div class="card card-body">
      <iframe
        src="../src\assets\Proyecto\Documentos\ReglamentodelAprendiz.pdf"
        frameborder="0"
      ></iframe>
    </div>
  </div> -->



  <div class="container-footer" id="manual">
    <div class="titulo">
      <ul>
        <li><h1>Reglamento del Aprendiz</h1></li>
      </ul>
    </div>
    <div class="img3"></div>

    <div class="resumen">
      <p>
        <b
          ><em
            >El Reglamento del Aprendiz&nbsp;SENA se aplica a todas las personas
            matriculadas en los programas de formaci&oacute;n profesional del
            Sena, quienes durante el tiempo de desarrollo del mismo se denominan
            Aprendices, independientemente de la modalidad de formaci&oacute;n
            elegida para adelantar dicho programa, quienes se comprometen con lo
            establecido en el presente reglamento y las dem&aacute;s normas
            institucionales que le son aplicables.</em
          ></b
        >
      </p>
    </div>

    <!-- Button trigger modal -->
    <a
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      id="boton-descarga"
    >
    </a>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" id="modal">
        <div class="modal-content" id="modal2">
          <div class="modal-header">
            <h1 class="modal-title fs-2 titulo" id="exampleModalLabel">
              Manual Del Aprendiz
            </h1>
            <a
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="boton-cerrar"
            ></a>
          </div>
          <div class="modal-body">
            <iframe
              src="../src\assets\Proyecto\Documentos\ReglamentodelAprendiz.pdf"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>


  <div class="container-footer" id="mision-vision">
    <div class="titulo">
      <ul>
        <li><h1>Visión y Misión SENA</h1></li>
      </ul>
    </div>
    <p>
      El SENA, es un establecimiento público del orden nacional, con personería
      jurídica, patrimonio propio e independiente, y autonomía administrativa;
      adscrito al Ministerio del Trabajo, de Colombia.
    </p>

    <div class="img">
      <div class="i">
        <a
          type="button"
          target="_blank"
          href="https://www.sena.edu.co/es-co/sena/Paginas/misionVision.aspx"
          id="boton-link"
        >
        </a>
      </div>
    </div>

    <div class="titulo2">
      <ul>
        <li>
          <h2><b> Misión</b></h2>
        </li>
      </ul>
    </div>
    <p>
      El SENA está encargado de cumplir la función que le corresponde al Estado
      de invertir en el desarrollo social y técnico de los trabajadores
      colombianos, ofreciendo y ejecutando la formación profesional integral,
      para la incorporación y el desarrollo de las personas en actividades
      productivas que contribuyan al desarrollo social, económico y tecnológico
      del país (Ley 119/1994).
    </p>

    <div class="titulo2">
      <ul>
        <li>
          <h2><b>Visión</b></h2>
        </li>
      </ul>
    </div>
    <p>
      En el año 2022 el SENA se consolidará como una entidad referente de
      formación integral para el trabajo, por su aporte a la empleabilidad, el
      emprendimiento y la equidad, que atiende con pertinencia y calidad las
      necesidades productivas y sociales del país.
    </p>
  </div>
  <div class="container-footer" id="himno">
    <div class="titulo">
      <ul>
        <li><h1>Himno Del Sena</h1></li>
      </ul>
    </div>
    <div class="img2">
      <div class="i">
        <a
          type="button"
          target="_blank"
          href="https://www.sena.edu.co/es-co/sena/Paginas/misionVision.aspx"
          id="boton-link"
        >
        </a>
      </div>
    </div>
    <div class="letra-himno">
      <div align="center">
        Letra: Jes&uacute;s Brice&ntilde;o S. y Luis A. Sarmiento
      </div>
      <div align="center">M&uacute;sica: Daniel Marl&eacute;s E.</div>
      <div align="center"><br /></div>
      <div align="center"><br /></div>
      <div align="center">..</div>
      <div align="center">Coro</div>
      <div align="center"><br /></div>
      <div align="center">
        Estudiantes del SENA, adelante!por Colombia luchad con amor con el
        &aacute;nimo noble y radiante transform&eacute;mosla en mundo mejor.
        (BIS)
      </div>
      <div align="center"><br /></div>
      <div align="center"><br /></div>
      <div align="center">..</div>
      <div align="center">I</div>
      <div align="center"><br /></div>
      <div align="center">
        De la patria el futuro destino en las manos del joven est&aacute;.El
        trabajo es seguro caminoque el progreso a Colombia dar&aacute;.
      </div>
      <div align="center"><br /></div>
      <div align="center"><br /></div>
      <div align="center">..</div>
      <div align="center">II</div>
      <div align="center"><br /></div>
      <div align="center">
        En la forja del SENA se forman hombres libres que anhelan triunfar.Con
        la ciencia y la t&eacute;cnica unidas nuevos rumbos de paz
        trazar&aacute;n.
      </div>
      <div align="center"><br /></div>
      <div align="center">..</div>
      <div align="center">Coro</div>
      <div align="center"><br /></div>
      <div align="center">
        Estudiantes del SENA, adelante! por Colombia luchad con amor con el
        &aacute;nimo noble y radiante transform&eacute;mosla en mundo mejor.
        (BIS)
      </div>
      <div align="center"><br /></div>
      <div align="center"><br /></div>
      <div align="center">..</div>
      <div align="center">III</div>
      <div align="center"><br /></div>
      <div align="center">
        Hoy la patria nos grita sentida estudiantes del SENA,
        triunfad,s&oacute;lo as&iacute; lograreis en la vida m&aacute;s
        justicia, mayor libertad.
      </div>
      <div align="center"><br /></div>
      <div align="center"><br /></div>
      <div align="center">..</div>
      <div align="center">IV</div>
      <div align="center"><br /></div>
      <div align="center">
        Avancemos con fuerza guerrera estudiantes con firme tes&oacute;n que la
        patria en nosotros espera su pac&iacute;fica revoluci&oacute;n.
      </div>
    </div>
  </div>

  <div class="container-footer" id="valores">
    <div class="titulo">
      <ul>
        <li><h1>Valores y Compromisos</h1></li>
        <div class="i">
          <a
            type="button"
            target="_blank"
            href="https://www.sena.edu.co/es-co/sena/Paginas/misionVision.aspx"
            id="boton-link"
          >
          </a>
        </div>
      </ul>
    </div>
    <div class="texto-valores">
      <div>
        Los servidores p&uacute;blicos del SENA, contribuyen a dar respuesta al
        reclamo generalizado en contra de la corrupci&oacute;n y vivir una
        pol&iacute;tica de integridad.<br /><br />
      </div>
      <div>
        <div>
          <p>
            <strong
              >Sin duda la consolidaci&oacute;n del esfuerzo ciudadano, con el
              acompa&ntilde;amiento de las entidades del Estado Colombiano, los
              servidores p&uacute;blicos del SENA, contribuyen a dar respuesta
              al reclamo generalizado en contra de la corrupci&oacute;n y vivir
              una pol&iacute;tica de integridad.</strong
            >
          </p>
          <p>
            <strong
              >El SENA, comprometido con el arte de vivir y convivir, por su
              misi&oacute;n, objetivos y funciones que se le han confiado, el
              servidor p&uacute;blico de la instituci&oacute;n sustenta su
              actuar en:</strong
            >
          </p>
          <div>
            <div>
              <div>
                <div>
                  <div width="100%">
                    <div><br /></div>
                    <div><br /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p><br /></p>
          <blockquote>
            <h2>1. Pol&iacute;tica de Integridad</h2>
          </blockquote>
          <p>
            Esta pol&iacute;tica tiene como prop&oacute;sito desarrollar
            mecanismos que faciliten la institucionalizaci&oacute;n de la
            integridad en las entidades p&uacute;blicas con miras a garantizar
            un comportamiento probo de los servidores p&uacute;blicos y
            controlar las conductas de corrupci&oacute;n que afectan el logro de
            los fines esenciales del Estado (Manual Operativo MIPG,
            versi&oacute;n 4).
          </p>
          <p>
            La pol&iacute;tica cuenta con dos componentes para su
            implementaci&oacute;n, el c&oacute;digo de integridad y la
            identificaci&oacute;n y declaraci&oacute;n de conflictos de
            inter&eacute;s.
          </p>
          <p>&nbsp;</p>
          <blockquote>
            <h2>1.1. C&oacute;digo de Integridad</h2>
          </blockquote>
          <p>
            El c&oacute;digo de integridad que leemos, entendemos y vivenciamos
            cada d&iacute;a, es el estilo de vida del servidor p&uacute;blico
            para que cada usuario de nuestros servicios tenga la
            satisfacci&oacute;n del buen y eficiente trato. Respeto, Honestidad,
            Compromiso, Diligencia, Justicia, Solidaridad y Lealtad son un
            camino del servidor p&uacute;blico en el SENA para que el derecho a
            la formaci&oacute;n profesional integral de la naci&oacute;n
            pluralista colombiana, quede planamente satisfecho y son asumidos
            como cultura, enaltecen nuestro servicio p&uacute;blico y hace que
            el Estado cumpla con el derecho humano a la buena
            administraci&oacute;n.
          </p>
          <p>
            <a
              href="https://www.sena.edu.co/es-co/sena/codigoeticabuengobierno/codigo_de_integridad.pdf"
              >Consulte el c&oacute;digo de Integridad</a
            >
          </p>
          <h2><strong>Valores de Integridad:&nbsp;</strong></h2>
          <p><br /></p>
          <blockquote>
            <strong>1.&nbsp;Honestidad.</strong> Act&uacute;o siempre con
            fundamento en la verdad, cumpliendo mis deberes con transparencia y
            rectitud, y siempre favoreciendo el inter&eacute;s
            general.&nbsp;<strong>2.&nbsp;Respeto.</strong> Reconozco, valoro y
            trato de manera digna a todas las personas, con sus virtudes y
            defectos, sin importar su labor, su procedencia, t&iacute;tulos o
            cualquier otra condici&oacute;n.<br /><strong>3. Compromiso</strong
            >. Soy consciente de la importancia de mi rol como servidor
            p&uacute;blico y estoy en disposici&oacute;n permanente para
            comprender y resolver las necesidades de las personas con las que me
            relaciono en mis labores cotidianas, buscando siempre mejorar su
            bienestar.<br /><strong>4.&nbsp;Diligencia.</strong> Cumplo con los
            deberes, funciones y responsabilidades asignadas a mi cargo de la
            mejor manera posible, con atenci&oacute;n, prontitud, destreza y
            eficiencia, para as&iacute; optimizar el uso de los recursos del
            Estado.<br />&nbsp;<br /><strong>5.&nbsp;Justicia.</strong>
            Act&uacute;o con imparcialidad garantizando los derechos de las
            personas, con equidad, igualdad y sin
            discriminaci&oacute;n.&nbsp;<br /><strong>6. Solidaridad.</strong>
            Brindo mi ayuda a las personas cuando lo necesitan sin esperar algo
            a cambio, entendiendo que hago parte de una comunidad.<br />
            <p>
              <strong>7. Lealtad.&nbsp;</strong>Obro de acuerdo a los principios
              &eacute;ticos, morales, culturales, ecol&oacute;gicos y a las
              normas colombianas e institucionales.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\User\document.css);
</style>


<script>
export default {
methods(){
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')
  const slider = document.querySelector('.slider')

  prev.addEventListener('click', () =>{
    slider.scrollTop -= 300
  })

  next.addEventListener('click', () =>{
    slider.scrollTop += 300
  })


}

}
</script>