import React from 'react'
import "../Css/Blog.css"
const BlogDetail = (props) => {
  return (
    <div>
       <div className='blogs'>
        <div className='blogImage'>
            <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721898731/blog_bkp9zl.jpg' alt=''/>
            <div className='overlayText'>
                {props.imgaeHeading}
            </div>
        </div>
        <div>
            <span> Business</span>
            <h4 className='blogsSubject'>{props.head}</h4>
            <p>{props.detail}</p>
        </div> 
        </div>
    </div>
  )
}

export default BlogDetail