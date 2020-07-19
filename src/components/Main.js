import PropTypes from 'prop-types'
import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      nameError: '',
      emailError: '',
      phoneError: '',
      addressError: '',
      success: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    if (event.target.name === 'name') {
      this.setState({
        nameError: '',
      })
    }
    if (event.target.name === 'email') {
      this.setState({
        emailError: '',
      })
    }
    if (event.target.name === 'phone') {
      this.setState({
        phoneError: '',
      })
    }
    if (event.target.name === 'address') {
      this.setState({
        addressError: '',
      })
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    if (this.state.name === '') {
      this.setState({
        nameError: 'Por favor ingresa tu nombre',
      })
    }
    if (this.state.email === '') {
      this.setState({
        emailError: 'Por favor ingresa tu email',
      })
    }
    if (this.state.phone === '') {
      this.setState({
        phoneError: 'Por favor ingresa tu numero de telefono',
      })
    }
    if (this.state.address === '') {
      this.setState({
        addressError: 'Por favor ingresa tu direccion',
      })
    }
    if (
      this.state.name &&
      this.state.email &&
      this.state.phone &&
      this.state.address
    ) {
      const request = await addToMailchimp(this.state.email, {
        name: this.state.name,
        phone: this.state.phone,
        address: this.state.address,
      })
      if (request.result === 'success') {
        this.setState({
          success: true,
        })
      }
    }
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }

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
          <h2 className="major">&iquest;Qu&eacute; ofrecemos?</h2>

          <p>
            Le construimos una plataforma web a tu restaurante para que puedas
            vender tu comida por internet. Misma que podr&aacute;s compartir con
            tus clientes de forma f&aacute;cil y efectiva. Pon tu link donde
            quieras: redes sociales, p&uacute;blicidad impresa, sitio web, etc.
            Aprovecha la magia de internet y aumenta tus ventas.
          </p>
          <p>
            Es inaceptable que empresas como GrubHub, Seamless, UberEats o
            Doordash est&eacute;n cobrando comisiones de entre el 22% y el 35%
            por procesamiento de ordenes. Al tener tu propia plataforma y no
            depender de terceros estar&aacute;s aumentando tu margen de
            ganancias.
          </p>
          <p>
            En cuesti&oacute;n de horas tendr&aacute;s tu plataforma
            funcionando, lo &uacute;nico que necesitamos es tu men&uacute;
            actualizado, las zonas a donde haces deliveries, tu horario de
            servicio y en caso de que tengas, un logo. Nuestro personal
            t&eacute;cnico se encargara del resto.
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
          <h2 className="major">&iquest;C&oacute;mo funciona?</h2>
          {/*<span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <p>Tu cliente hace un pedido por internet y ocurre lo siguiente:</p>
          <ul>
            <li>
              Recibes una llamada telefonica inform&aacute;ndote que
              lleg&oacute; una nueva orden
            </li>
            <li>
              Recibes una notificaci&oacute;n de la nueva orden dentro de la
              plataforma
            </li>
            <li>
              Recibes un PDF v&iacute;a email con los detalles de la orden y del
              cliente, mismo que podr&aacute;s imprimir para tu personal de
              cocina
            </li>
            <li>
              Recibes un SMS con el nombre del cliente y su direcci&oacute;n
            </li>
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
          <h2 className="major">&iquest;Cu&aacute;nto cuesta?</h2>

          <p>
            Pago &uacute;nico de $350. Sin contratos ni ataduras legales.
            Hosting y dominio incluido. Podr&aacute;s procesar tus ordenes con
            un fee m&iacute;nimo del 5%
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
          {this.state.success ? (
            <>
              <h2>Awesome {this.state.name}</h2>
              <h3>
                Ya diste el primer paso para aumentar tus ganancias por internet
              </h3>
              <h3>Nos pondr&eacute;mos en contacto contigo ASAP</h3>
            </>
          ) : (
            <>
              <h2 className="major">TUS DATOS</h2>
              <h3>Te llamaremos para agendar una DEMO en vivo</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="field half first">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <div>
                    <span>{this.state.nameError}</span>
                  </div>
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <div>
                    <span>{this.state.emailError}</span>
                  </div>
                </div>
                <div className="field half first">
                  <label htmlFor="phone">Tel&eacute;fono</label>
                  <input
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                  <div>
                    <span>{this.state.phoneError}</span>
                  </div>
                </div>
                <div className="field half">
                  <label htmlFor="address">Direcci&oacute;n</label>
                  <input
                    name="address"
                    id="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    type="text"
                  ></input>
                  <div>
                    <span>{this.state.addressError}</span>
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="special"
                    />
                  </li>
                </ul>
              </form>
            </>
          )}
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
