import React, { Component } from 'react'
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'
import BlogPost from '../BlogPost/BlogPost'
// import YouTubeComponent from '../../components/YouTube-Component/YouTubeComponent'
// import Product from '../Product/Product'

class Home extends Component {
   state = {
      showComponent: true
   }
   
   componentDidMount() {
      setTimeout( () => {
         this.setState({
            showComponent: false
         })

      }, 15000)
   }

   render() {
      return (
         <div>
            {/* <p>YouTube Component</p>
            <hr/>
            <YouTubeComponent 
               time='9.13' 
               title='My video 1' 
               desc='200x ditonton dua jam yang lalu'
            />

            <YouTubeComponent 
               time='12.5' 
               title='My video 2' 
               desc='140x ditonton satu  hari yang lalu'
            />

            <YouTubeComponent 
               time='8.04' 
               title='My video 3' 
               desc='100x ditonton 12 jam yang lalu'
            />

            <YouTubeComponent 
               time='15.23'
               title='My video 4'
               desc='250x ditonton dua hari yang lalu'
            />

            <YouTubeComponent /> */}
            {/* <p>Counter</p>
            <Product />  */}
            {/* <p>LifeCycle Component</p> */}
            {/* <hr/> */}
            {/* {
               this.state.showComponent?
               <LifeCycleComp /> : null            
            } */}
            <p>Blog Post</p>
            <hr/>
            <BlogPost />
         </div>
      )
   }
}

export default Home
