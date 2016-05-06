import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuListItem from './MenuListItem'


const menuItems = [
  { text: '主页', link: '/',
  alt:'主页',imgurl:'/assets/assets/images/home.svg' },
  { text: '表格应用', link: '/table',
  alt:'表格应用',imgurl:'/assets/assets/images/table.svg' },
  { text: '关于我们', link: '/about',
  alt:'关于我们',imgurl:'/assets/assets/images/about.svg' },
  { text: '个人介绍', link: '/hello',
  alt:'个人介绍',imgurl:'/assets/assets/images/userlog.svg', isExternal: true  }
]

class Menu extends React.Component {

  static propTypes = {
    activeClass: PropTypes.string.isRequired,
    application: PropTypes.object.isRequired
  };

  constructor (props, context) {
    super(props, context)
  }

  render () {
    const { application: {  } } = this.props
    return (
      <div>
         <div className="ui navbar ng-scope"
              ng-controller="NavbarCtrl">
          <ul className="nav nav-pills nav-stacked">
            {menuItems.map((item, i) =>
            <MenuListItem {...item} key={i}
            className={this.props.activeClass}
            activeClass={this.props.activeClass}  />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  ({ application }) => ({ application })
)(Menu)
