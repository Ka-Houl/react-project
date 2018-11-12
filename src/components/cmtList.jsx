import React from 'react';
import CmtItem from '@/components/cmtItem';
import styleObj from '@/css/cmtList.css';
console.log(styleObj)


class CmtList extends React.Component{
    constructor(){
      super()
      this.state = {
        name : '23',
        age : 18,
        ComentList : [
          {id : 1, user : '张三', content : '我是张三'},
          {id : 2, user : '李四', content : '我是李四'},
          {id : 3, user : '王五', content : '我是王五'},
          {id : 4, user : '赵六', content : '我是赵六'},
        ]
      }
    }
    render(){
      const objStyle = {
          color : 'red',
          textAlign : 'center'
      }
      return(
        <div>
          <h1 className={styleObj.title}>这是评论列表</h1>
          <div>
            {
              this.state.ComentList.map(item =>
                // <CmtItem key = {item.id} user = {item.user} content = {item.content}/>
                <CmtItem key = {item.id} {...item}/>
              )
            }
          </div>
        </div>
      )
    }
  }

export default CmtList;   //将组件暴露出去