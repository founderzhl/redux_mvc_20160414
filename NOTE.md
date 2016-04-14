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






  
