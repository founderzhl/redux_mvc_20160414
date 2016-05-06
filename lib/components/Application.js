import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Menu from './Menu'
import Footer from './Footer'
import DisplayError from './DisplayError'

export default class Application extends React.Component {

  static propTypes = {
    children: PropTypes.any
  };
  constructor (props, context) {
    super(props, context)

    this.handleMenuClick = this.handleMenuClick.bind(this)

    this.state = {
      isMenuActive: false
    }
  }

  handleMenuClick (evt) {
    evt.preventDefault()
    this.setState({ isMenuActive: !this.state.isMenuActive })
  }

  render () {
    const { isMenuActive } = this.state
    const activeClass = isMenuActive ? 'active' : ''
    return (
      <div>
        <a  className={classnames('active', activeClass)}
          onClick={this.handleMenuClick}>
          <span></span>
        </a>
        <Menu activeClass={this.state.activeClass} />
        <div className="container">
          <DisplayError />
          {/* this will render the child routes */}
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}
