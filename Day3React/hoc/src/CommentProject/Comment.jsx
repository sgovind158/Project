import React, { useState } from 'react'

const Comment = ({comment}) => {
    const [showComment ,setShowComment] = useState(false)

    let {id,author, timestamp,body,points,replies
    } = comment;

   
  return (
    <div>
       
        <div onClick={()=>setShowComment(!showComment)}   >
            <p style={{display:showComment?"block":"none"}}>{author} {points}points {timestamp}</p>
            <h1  >{body}</h1>
        </div>

        {/* /recursion function */}

        <div style={{marginLeft :"100px"}}>
            {
               (replies || []).map((ele)=>{
                return(
                    <Comment key={ele.id} comment={ele}/>
                )
               })
            }
        </div>
      
    </div>
  )
}

export default Comment
