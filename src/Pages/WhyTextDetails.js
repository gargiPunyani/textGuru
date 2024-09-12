import React from 'react'

const WhyTextDetails = (props) => {
  return (
    <div className=''>
        <div className='textmsg'>
            <div className="">
                <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1721820105/rupee-circle-svgrepo-com_jnrcbh.svg ' alt=''/>

            </div>
            <div>
                <h5>
                    {props.head}
                </h5>
                <p>
                    {props.details}
                </p>
            </div>

        </div>
    </div>
  )
}

export default WhyTextDetails