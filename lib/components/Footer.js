import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  builtWith: {
    id: 'footer.builtWith',
    description: 'Mention how the site is built with',
    defaultMessage: '仅供redux学习使用 {link}'
  }
})

export default class Footer extends React.Component {

  render () {
    const link = (<a href="http://123.59.109.243/" target="_blank">国开Moodle后台管理</a>)
    return (
      <div className="footer">
        <div className="pure-g">
          <div className="pure-u-1 u-sm-1-2">
            <FormattedMessage {...messages.builtWith} values={{ link }} />
          </div>
          <div className="pure-u-1 u-sm-1-2">
            &copy; 20160414  0.0.1版本
          </div>
        </div>
      </div>
    )
  }
}
