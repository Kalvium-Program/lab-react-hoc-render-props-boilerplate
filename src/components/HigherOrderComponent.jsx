import React ,{useState}from 'react'

const HigherOrderComponent = (ChildComponent) => {


    const UpdatedComponent = ()=>{
        const [likeImageCounter, setLikeImageCounter] = useState(0);

        const handleLikeImageCount = ()=>{
          setLikeImageCounter(likeImageCounter+1);
        }
      
      return (
        <div>
          <ChildComponent count={likeImageCounter} handleUpdate={handleLikeImageCount}/>
        </div>
      )
    }
    return UpdatedComponent
 
}

export default HigherOrderComponent
