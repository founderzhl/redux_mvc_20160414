区分是master_redux_pro项目的演练

执行的相关命令:

  npm install

  npm start

学习笔记:

  1. 首先学习时有一个入口文件（index.html或index.js或app.js文件之类）

  2. index.js中引用了Root组件

  3. Root.js中引用其它的组件

     const定义要处理的组件：

     如：

     const {

      Hello

     } = components

     添加路由的处理:

     如：

      <ReduxRouter>

        <Route component={Application}>

          <Route path="hello" component={Hello} />

        </Route>

      </ReduxRouter>

   4. components/Application.js定义基本的显示面板控制

   5. components/index.js定义“components所有的组件”的引用

   6. 查看菜单的定义components/Menu.js

    定义菜单的显示数据：

    如：

      const menuItems = [

        { text: 'Hello', link: '/hello', icon: 'fa fa-star' }

      ]

  7. 定义相应的组件

     如：pages/Hello.js

      import React from 'react'

      export default class Hello extends React.Component {

        render () {

          return (

            <div>

              Hello world!

            </div>

          )

        }
      
      }
  
  8. 加载图片的控制
      
     加载要引入的图片文件：

     import  '../assets/images/shop.svg'

     引用时要使用全路径：

     /assets/assets/images/shop.svg
     

参考学习的地址

  - [Redux](https://github.com/gaearon/redux) for the _Atomic Flux_ architecture.

  - [React](https://github.com/facebook/react) for all the goodness.

  - [React-Router](https://github.com/rackt/react-router) for the other goodness.

  - [React-Transform](https://github.com/gaearon/react-transform-boilerplate) for development fun (and productivity).

  - [Webpack](https://github.com/webpack/webpack) for keeping everything together.

  - [React-Router](http://emmenko.github.io/redux-react-router-async-example)

  - [Babel](https://github.com/yahoo/babel-plugin-react-intl)
  
  - [参考文档](https://dl.dropboxusercontent.com/u/4803975/ReactEurope/slides.pdf)

