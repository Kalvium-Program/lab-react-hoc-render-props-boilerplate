import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'
 function LikePost(props) {
const {count,handleUpdate} = props

  return (
    
    <div>
      <button onClick={handleUpdate}>Like Post {count}</button>
    </div>
  )
}
export default HigherOrderComponent(LikePost)