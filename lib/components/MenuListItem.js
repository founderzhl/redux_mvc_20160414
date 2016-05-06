import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class MenuListItem extends Component {

  static propTypes = {
    isExternal: PropTypes.bool,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    activeClass: PropTypes.string.isRequired,
    imgurl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  };

  static defaultProps = { isExternal: false };

  render () {
    return (
      <li className={this.props.activeClass}>
        {this.renderLink()}
      </li>
    )
  }

  renderLink () {
    if (this.props.isExternal)
      return (
        <a href={this.props.link} target="_blank"
           data-toggle="tooltip"
           data-placement="right"
           title={this.props.alt}
           data-original-title={this.props.alt}
           className={this.props.activeClass}
        >
          <img  src={this.props.imgurl} alt={this.props.alt} />
          <p>{this.props.text}</p>
        </a>
      )
    else
      return (
        <Link to={this.props.link}
              data-toggle="tooltip"
              data-placement="right"
              title={this.props.alt}
              data-original-title={this.props.alt}
              className={this.props.activeClass}
        >
          <img  src={this.props.imgurl} alt={this.props.alt} />
          <p>{this.props.text}</p>
        </Link>
      )
  }
}
