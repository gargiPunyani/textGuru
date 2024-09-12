import React from 'react'
import "../Css/Benefit.css"

const BenefitDetails = (props) => {
  return (
    <div>
        <div className='benefit'>
        <h3>
            {props.heading}
        </h3>
        </div>
        <div>
            <p>
                {props.para1}
            </p>
            <p>
                {props.para2}
            </p>
            <p>
                {props.para3}
            </p>
            <p>
                {props.para4}
            </p>
            <p>
                {props.para5}
            </p>
            <p>
                {props.para6}
            </p>
            <p>
                {props.para7}
            </p>
            <p>
                {props.para8}
            </p>

        </div>
    </div>
  )
}

export default BenefitDetails