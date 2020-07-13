import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Todos los derechos reservados. Built with
      <span role="img" aria-label="heart">
        ️ ️❤️
      </span>{' '}
      by <a href="https://frankandrade.dev/">fr4nky</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
