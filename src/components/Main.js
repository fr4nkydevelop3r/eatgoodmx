import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
        onKeyPress={() => {
          this.props.onCloseArticle()
        }}
        role="button"
        tabIndex="0"
        aria-label="Close"
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Que ofrecemos?</h2>

          <p>
            Te construimos tu propia plataforma web para que puedas vender tu
            comida por internet. Misma que podras dar a conocer a tus clientes
            de forma facil y efectiva, ya que al tratarse de un link podras
            promocionarte por cualquier medio: redes sociales, publicidad
            impresa, tu sitio web, etc.
          </p>
          <p>
            Es inaceptable que empresas como GrubHub, Seamless, UberEats o
            Doordash esten cobrando comisiones de entre el 22% y el 35% por
            procesamiento de ordenes. Al tener tu propia plataforma y no
            depender de terceros estaras aumentando tu margen de ganancias.
          </p>
          <p>
            En cuestion de horas tendras tu plataforma funcionando, lo unico que
            necesitamos es tu menu actualizado, las zonas a donde haces
            deliveries, tu horario de servicio y en caso de que tengas un logo.
            Nuestro personal tecnico se encargara del resto.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Como funciona?</h2>
          {/*<span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <p>Tu cliente hace un pedido por internet y ocurre lo siguiente:</p>
          <ul>
            <li>
              Recibes una notificacion de la nueva orden dentro de la plataforma
            </li>
            <li>
              Recibes un PDF via email con los detalles de la orden y del
              cliente, mismo que podras imprimir para tu personal de cocina
            </li>
            <li>Recibes un SMS con el nombre del cliente y su direccion</li>
            <li>Todo esto en tiempo real</li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Cuanto cuesta?</h2>

          <p>
            Pago unico de $500. Sin contratos ni ataduras legales. Hosting y
            dominio incluido. Podras procesar tus ordenes con un fee minimo del
            8%
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">TUS DATOS</h2>
          <h3>Te llamaremos para agendar una DEMO en vivo</h3>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field half first">
              <label htmlFor="phone">Telefono</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <div className="field half">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {/* <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
