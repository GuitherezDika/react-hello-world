import React, { Component, Fragment } from 'react'
import './BlogPost.css'
import Post from '../../components/Post/Post'

class BlogPost extends Component {
   state = {
      post: []
   }

   componentDidMount() {
      fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
         this.setState({
            post: json
         })
      })
   }

   render() {
      return (
         <Fragment>
            <p className='section-title'>Blog Post</p>
            {
               this.state.post.map(post => {
                  
                  return <Post title={post.title} key={post.id} desc={post.body} />
               }
               )
            }
         </Fragment>
      )
   }
}
export default BlogPost
