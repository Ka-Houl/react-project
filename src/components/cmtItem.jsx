import React from 'react';
import styleObj from '@/css/cmtItem.css';
console.log(styleObj)
function CmtItem(props){
  const objStyle = {
    color : '#000',
    marginTop : '10px',
    paddingLeft : '10px',
    border : '1px dashed #ccc'

  }
  return(
    <div key={props.id} style = {objStyle}>
      <h2 className={styleObj.title +  ' item'}>评论人{props.user}</h2>
      {/* <h2 style = {objStyle}>评论人{props.user}</h2> */}
      <p>{props.content}</p>
    </div> 
  )
}

export default CmtItem;   //将组件暴露出去