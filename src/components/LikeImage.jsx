import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'
 function LikeImage(props) {
  const {count,handleUpdate} = props
  return (
    <div>
      <button onClick={handleUpdate}>Like Image {count}</button>
    </div>
  )
}

export default HigherOrderComponent(LikeImage)

