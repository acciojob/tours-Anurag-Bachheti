import React,{useState} from 'react'
import Tours from '../Data/Tours';

function Tour() {
  const[showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore)
  }

  return (
    <div style={{width:'500px', margin:'auto'}}>
      <p>
        {showMore ? tourList.info : `${tourList.slice(0, 200)}...`}
      </p>
      <button onClick={toggleText}>
        {showMore ? 'See Less' : 'Show More'}
      </button>
    </div>
  )
}

export default Tour