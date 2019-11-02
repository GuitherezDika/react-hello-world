import React from 'react'
import '../../container/BlogPost/BlogPost.css'

const Post = (props)  => {
   return (
      <div className='post'>
         <div className='img-thumb'>
            <img src="http://placeimg.com/200/150/tech" alt="dummyImg"/>
         </div>
         <div className='content'>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
         </div>
      </div>
   )
}

export default Post