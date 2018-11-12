//入口文件
import React from 'react';
import ReactDOM from 'react-dom';
// import CmtItem from '../src/components/cmtItem.jsx';
import CmtList from '@/components/cmtList';
console.log(1)
//参数1： 创建元素的类型  字符串 表示 元素名称
//参数2： 一个对象或者为null
//参数3： 可以是子节点 其他的虚拟DOM
//参数N： 其他子阶段
// const myh2 = React.createElement('p', {id : '123' , title : '666'}, '我是h2标签', 'asf','asfg');
// const myh1 = React.createElement('h1', {id : '123' , title : '666'}, null, myh2, '+++','af','afg');
// class CmtList extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       name : '23',
//       age : 18,
//       ComentList : [
//         {id : 1, user : '张三', content : '我是张三'},
//         {id : 2, user : '李四', content : '我是李四'},
//         {id : 3, user : '王五', content : '我是王五'},
//         {id : 4, user : '赵六', content : '我是赵六'},
//       ]
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>这是评论列表</h1>
//         <div>
//           {
//             this.state.ComentList.map(item =>
//               // <CmtItem key = {item.id} user = {item.user} content = {item.content}/>
//               <CmtItem key = {item.id} {...item}/>
//             )
//           }
//         </div>
//       </div>
//     )
//   }
// }

ReactDOM.render(
    <CmtList />,
    document.getElementById('app')
)

