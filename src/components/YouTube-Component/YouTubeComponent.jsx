import React from 'react'
import './YouTubeComponent.css'

const YouTubeComponent =(props)=>{
   return (
      <div className='youtube-wrapper'>
         <div className='img-thumb'>
            <img alt='' src='https://productioncoder.com/wp-content/uploads/2018/09/video-preview-mock.jpg'/>
            <p className='time'>{props.time}</p>
         </div>
         <p className='title'>{props.title}</p>
         <p className='desc'>{props.desc}</p>
      </div>
   )
}

YouTubeComponent.defaultProps = {
   time:'00.00',
   title: 'Your Title',
   desc: 'xx ditonton x jam yang lalu'
}

export default YouTubeComponent