import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'
import MenuListItem from './MenuListItem'

const menuItems = [
  { text: '关于我们', link: '/about', icon: 'fa fa-dot-circle-o' },
  { text: '个人介绍', link: '/hello', icon: 'fa fa-star' }
]

class Menu extends React.Component {

  static propTypes = {
    activeClass: PropTypes.string.isRequired,
    application: PropTypes.object.isRequired,
    switchLocale: PropTypes.func.isRequired
  };

  constructor (props, context) {
    super(props, context)

    this.handleLanguageSwitch = this.handleLanguageSwitch.bind(this)
  }

  handleLanguageSwitch (evt) {
    this.props.switchLocale(evt.target.value)
  }

  render () {
    const { application: { locale } } = this.props

    return (
      <div id="menu" ref="menu" className={this.props.activeClass}>
        <div className="pure-menu">
          <Link to="/" className="pure-menu-heading">教学系统</Link>

          <ul className="pure-menu-list">
            {menuItems.map((item, i) => <MenuListItem {...item} key={i} />)}
          </ul>
          <form className="pure-form language-switcher">
            <fieldset>
              <select ref="langSwitcher" value={locale}
                onChange={this.handleLanguageSwitch}>
                <option value="en">EN</option>
                <option value="de">DE</option>
                <option value="it">IT</option>
              </select>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  ({ application }) => ({ application }),
  applicationActions
)(Menu)
