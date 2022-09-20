import React from 'react'

const HocRed = (props) => {
  return (
    <div>
      <h1 style={{background : "red",width : "100px"}}><props.cmp/></h1>
    </div>
  )
}

export default HocRed
