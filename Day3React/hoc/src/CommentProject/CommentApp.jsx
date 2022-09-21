import React, { useState } from 'react'
import Comment from './Comment.jsx'
import data from "./data.js"

const CommentApp = () => {
  
    const [chat,setChat] = useState(data)

  return (
    <div>

       {
        chat.map((el)=>{
            return(
                <div key={el.id} >
                    <Comment comment = {el}/>
                </div>
            )
        })
       }

        

      
    </div>
  )
}

export default CommentApp
