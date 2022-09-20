import React from 'react'

const HocGreen = (props) => {
  return (
    <div>
     <h1 style={{background : "green",width : "100px"}}><props.cmp/></h1> 
    </div>
  )
}

export default HocGreen
