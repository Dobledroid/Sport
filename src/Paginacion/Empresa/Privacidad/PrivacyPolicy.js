
import React from 'react';
import styles from "../styles.module.css";
import Header from '../../../Esquema/Header';
import Footer from '../../../Esquema/Footer';

function PrivacyPolicy() {

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2 className="text-center mb-4">Políticas de Privacidad</h2>

        <section className={styles.section}>
          <p className={styles.p}>
            Sport GYM Center, mejor conocido como Sport GYM Center, con domicilio en calle Calle Oriente 7,
            colonia Parque de Poblamiento, ciudad Huejutla de Reyes, municipio o delegación Huejutla de Reyes,
            c.p. 43000, en la entidad de Hidalgo, país México, y portal de internet
            https://web.facebook.com/p/SPORT-GYM-CenteR/, es el responsable del uso y protección de sus
            datos personales, y al respecto le informamos lo siguiente:
          </p>
          {/* Agrega más contenido de la política de privacidad aquí */}
        </section>

        <section className={styles.section}>
          <h3 className={styles.h3}>¿Para qué fines utilizaremos sus datos personales?</h3>
          <p className={styles.p}>
            Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son
            necesarias para el servicio que solicita:

            De manera adicional, utilizaremos su información personal para las siguientes finalidades
            secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y
            facilitan brindarle una mejor atención:
            <ul>
              <li>Enviar información sobre promociones y servicios.</li>
              <li>Gestionar el proceso de salud y acondicionamiento físico de los clientes.</li>
              <li>Realizar encuestas de satisfacción para mejorar la calidad de los servicios.</li>
              <li>Registrar a los clientes y brindarles los servicios solicitados.</li>
              <li>Prospección comercial</li>
              <li>Guardar formas de pago</li>
              <li>Administrar datos de autenticación</li>
              <li>Validar datos de registro</li>
              <li>Verificar datos de pago</li>
              <li>Contactar con el cliente</li>
            </ul>
            En caso de que no desee que sus datos personales se utilicen para estos fines secundarios, indíquelo a continuación:
            No consiento que mis datos personales se utilicen para los siguientes fines:
            <ul>
              <li>[  ] Enviar información sobre promociones y servicios.</li>
              <li>[  ] Gestionar el proceso de salud y acondicionamiento físico de los clientes.</li>
              <li>[  ] Realizar encuestas de satisfacción para mejorar la calidad de los servicios.</li>
              <li>[  ] Registrar a los clientes y brindarles los servicios solicitados.</li>
              <li>[  ] Prospección comercial</li>
              <li>[  ] Guardar formas de pago</li>
              <li>[  ] Administrar datos de autenticación</li>
              <li>[  ] Validar datos de registro</li>
              <li>[  ] Verificar datos de pago</li>
              <li>[  ] Contactar con el cliente</li>
            </ul>
            La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos
            los servicios y productos que solicita o contrata con nosotros.
          </p>
          {/* Agrega más contenido de los términos y condiciones aquí */}
        </section>

        <section className={styles.section}>
          <h3 className={styles.h3}>¿Qué datos personales utilizaremos para estos fines?</h3>
          <p className={styles.p}>
            Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes
            datos personales:
            <ul>
              <li>Nombre</li>
              <li>Lugar de nacimiento</li>
              <li>Fecha de nacimiento</li>
              <li>Teléfono particular</li>
              <li>Correo electrónico</li>
              <li>Edad</li>
              <li>Fotografía</li>
              <li>Estatura</li>
              <li>Peso</li>
              <li>Cuentas bancarias</li>
              <li>Número de tarjetas de crédito</li>
              <li>Datos de identificación</li>
              <li>Datos de contacto</li>
            </ul>
            Además de los datos personales mencionados anteriormente,
            para las finalidades informadas en el presente aviso de
            privacidad utilizaremos los siguientes datos personales
            considerados como sensibles, que requieren de especial
            protección:
            <ul>
              <li>Estado de salud físico presente, pasado o futuro</li>
            </ul>
          </p>
          {/* Agrega más contenido de la política de cancelación aquí */}
        </section>

        <section className={styles.section}>
          <h3 className={styles.h3}>¿Con quién compartimos su información personal y para qué fines?</h3>
          <p className={styles.p}>
            Le informamos que sus datos personales son
            compartidos dentro del país con las siguientes
            personas, empresas, organizaciones o autoridades
            distintas a nosotros, para los siguientes fines:
            <br /><br />
            <table class="table table-bordered">
              <thead>
                <tr>
                  <td>Destinatario de los datos personales</td>
                  <td>Finalidad</td>
                  <td>Requiere del consentimiento</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gmail</td>
                  <td>Inicio de sesión y registro</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Google Analytic</td>
                  <td>Publicidad y análisis para la mejora continua</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Servicios de pago en linea</td>
                  <td>Autenticación de pago</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>Inicio de sesión y registro</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>

          </p>
          {/* Agrega más contenido de la política de cancelación aquí */}
        </section>

        <section className={styles.section}>
          <h3 className={styles.h3}>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</h3>
          <p className={styles.p}>
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las
            condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su
            información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación);
            que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo
            utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines
            específicos (Oposición). Estos derechos se conocen como derechos ARCO.

            Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a
            través del siguiente medio:

            Solicitud a través de correo electrónico a la dirección, Solicitud a través del formulario disponible en
            .https://web.facebook.com/p/SPORT-GYM-CenteR/

            Con relación al procedimiento y requisitos para el ejercicio de sus derechos ARCO, le informamos lo siguiente:
            <p>a)	¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la
              personalidad este último?
              El titular podrá acreditar su identidad mediante una copia de su credencial de elector, pasaporte, cédula profesional,
              o cualquier otro documento oficial que acredite su identidad.</p>

            <p>b)	¿Qué información y/o documentación deberá contener la solicitud?
              La solicitud deberá contener los siguientes datos: Nombre completo del titular.
              Número de identificación oficial. Domicilio. Correo electrónico. Descripción clara y precisa de los
              datos personales respecto de los que se solicita ejercer el derecho. En caso de que la solicitud se realice a través de un
              representante, se deberán indicar los datos del representante, así como la carta poder que acredite su personalidad.</p>

            <p>c)	¿En cuántos días le daremos respuesta a su solicitud?
              El Responsable del tratamiento de datos personales deberá dar respuesta a la solicitud en un plazo máximo de 20 días
              hábiles contados a partir de la fecha de recepción de la solicitud.
            </p>
            <p>d)	¿Por qué medio le comunicaremos la respuesta a su solicitud? A través de correo electrónico .
              A través de correo electrónico .</p>

            <p>e)	¿En qué medios se pueden reproducir los datos personales que, en su caso, solicite?
              Los datos personales se podrán reproducir en formato electrónico</p>

            <p>f)	Ponemos a sus órdenes los siguientes formularios o sistemas para facilitar el ejercicio de derechos ARCO:
              El Responsable del tratamiento de datos personales pone a disposición del titular los siguientes formularios para
              facilitar el ejercicio de sus derechos ARCO: Formulario de solicitud de acceso a datos personales. Formulario de
              solicitud de rectificación de datos personales. Formulario de solicitud de cancelación de datos personales.
              Formulario de solicitud de oposición al tratamiento de datos personales.</p>

            <p>g)	Para mayor información sobre el procedimiento, ponemos a disposición los siguientes medios:
              El Responsable del tratamiento de datos personales pone a disposición del titular los siguientes medios para obtener
              mayor información sobre el procedimiento para el ejercicio de sus derechos ARCO: Página web:
              https://web.facebook.com/p/SPORT-GYM-CenteR. Correo electrónico: sport_gymCA@gmail.com. Teléfono: 7711299178.</p>


            Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las solicitudes de derechos ARCO, son los siguientes:

            <ul>
              <li>a)	Nombre de la persona o departamento de datos personales: Lic.JAIR MORALES FRANCO</li>
              <li>b)	Domicilio: calle Oriente 7, colonia Parque de poblamiento, ciudad Huejutla de Reyes, municipio o delegación Huejutla de Reyes, c.p. 43000, en la entidad de Hidalgo, país Mexico</li>
              <li>c)	Correo electrónico: jairmoralesfrancoGYMCA@gmail.com</li>
              <li>d)	Número telefónico: 7711299178</li>
            </ul>

          </p>
          {/* Agrega más contenido de la política de cancelación aquí */}
        </section>

        <section className={styles.section}>
          <h3 className={styles.h3}>Usted puede revocar su consentimiento para el uso de sus datos personales</h3>
          <p className={styles.p}>
            Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.

            Para revocar su consentimiento deberá presentar su solicitud a través del siguiente medio:

            Solicitud a través de correo electrónico a la dirección

            Con relación al procedimiento y requisitos para la revocación de su consentimiento, le informamos lo siguiente:
            <p>a)	¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad este último?
              El titular podrá acreditar su identidad mediante una copia de su credencial de elector, pasaporte, cédula profesional, o cualquier otro documento oficial que acredite su identidad.</p>

            <p>
              b)	¿Qué información y/o documentación deberá contener la solicitud?
              La solicitud deberá contener los siguientes datos: Nombre completo del titular. Número de identificación oficial. Domicilio. Correo electrónico. Descripción clara y precisa de los datos personales respecto de los que se solicita revocar el consentimiento.
            </p>

            <p>c)	¿En cuántos días le daremos respuesta a su solicitud?
              El Responsable del tratamiento de datos personales deberá dar respuesta a la solicitud en un plazo máximo de 20 días hábiles contados a partir de la fecha de recepción de la solicitud.</p>

            <p>d)	¿Por qué medio le comunicaremos la respuesta a su solicitud?
              La respuesta a la solicitud se comunicará al titular por escrito a la dirección que indique en su solicitud o a través de correo electrónico.
            </p>
            <p>
              e)	Para mayor información sobre el procedimiento, ponemos a disposición los siguientes medios:
              El Responsable del tratamiento de datos personales pone a disposición del titular los siguientes formularios para facilitar el ejercicio de su derecho de revocación: Formulario de solicitud de revocación del consentimiento.
            </p>



          </p>
          {/* Agrega más contenido de la política de cancelación aquí */}
        </section>


        <section className={styles.section}>
          <h3 className={styles.h3}>¿Cómo puede limitar el uso o divulgación de su información personal?</h3>
          <p className={styles.p}>
            Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le
            ofrecemos los siguientes medios:

            El titular puede limitar el uso o divulgación de sus datos personales a través de los siguientes medios: Solicitud a través de correo electrónico a la dirección sportGYMCenter@gmail.com Solicitud a través del formulario disponible en www.SportGymCenter.com.

            Asimismo, usted se podrá inscribir a los siguientes registros, en caso de que no desee obtener publicidad de nuestra parte:

            Registro Público de Usuarios, para mayor información consulte el portal de internet de la CONDUSEF

          </p>
          {/* Agrega más contenido de la política de cancelación aquí */}
        </section>

        <section className={styles.section}>
          <h3 className={styles.h3}>El uso de tecnologías de rastreo en nuestro portal de internet</h3>
          <p className={styles.p}>
            Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que recabamos a través de estas tecnologías, los utilizaremos para los siguientes fines:

            Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes: Identificadores, nombre de usuario y contraseñas de una sesión
            Idioma preferido por el usuario Tipo de navegador del usuario
            Fecha y hora del inicio y final de una sesión de un usuario


          </p>
          {/* Agrega más contenido de la política de cancelación aquí */}
        </section>

        <section className={styles.section}>
          <h3 className={styles.h3}>¿Cómo puede conocer los cambios en este aviso de privacidad?</h3>
          <p className={styles.p}>
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.

            Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de: El Responsable del tratamiento de datos personales utilizará los siguientes medios para dar a conocer los cambios o actualizaciones del aviso de privacidad: Publicación en su portal de internet. Envíos a través de correo electrónico..

            El procedimiento a través del cual se llevarán a cabo las notificaciones sobre cambios o actualizaciones al presente aviso de privacidad es el siguiente:

            El Responsable del tratamiento de datos personales publicará los cambios o actualizaciones del aviso de privacidad
            en su portal de internet dentro de los 15 días hábiles siguientes a la fecha en que se efectúen.
            También enviará un correo electrónico a los titulares que hayan proporcionado su dirección de correo
            electrónico, notificándoles los cambios o actualizaciones realizados al aviso de privacidad.
            El correo electrónico deberá contener la siguiente información: Fecha de publicación de los cambios o
            actualizaciones. Descripción de los cambios o actualizaciones realizados. Enlace al aviso de privacidad
            actualizado. Los titulares podrán consultar el aviso de privacidad actualizado en cualquier
            momento en el portal de internet del Responsable del tratamiento de datos personales.
            Ejemplo de correo electrónico: Asunto: Cambios al aviso de privacidad Estimado titular:
            Le informamos que hemos realizado cambios al aviso de privacidad que regula el tratamiento de
            sus datos personales. Los cambios o actualizaciones realizados al aviso de privacidad son los
            siguientes: [Descripción de los cambios o actualizaciones realizados.]
            Para consultar el aviso de privacidad actualizado, puede visitar nuestro portal de internet en
            la siguiente dirección: [Enlace al aviso de privacidad actualizado] Agradecemos su atención.
            Atentamente, Lic Jair Morales Franco.
          </p>
          {/* Agrega más contenido de la política de cancelación aquí */}
        </section>

        <p>
          Última actualización: 14/11/2023
        </p>
        {/* Agrega más secciones de políticas según sea necesario */}
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
