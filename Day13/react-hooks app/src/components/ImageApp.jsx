import React from 'react'
import './ImageApp.css'
import pic from '..images//'

const ImageApp = () => {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [rotation, setRotation] = useState(0);

  return (
    <div className='disp'>
        <div className='image'>
            <img 
            src="{pic}" style="{
            width:width,
            height:height,
            transform: 'rotate(${rotation}deg)"/>
        </div>

        <div className='panel'>
            <button onClick={()=>{
                setWidth(width + 10)
            }}>Increase Width</button>
            <button onClick={()=>{
                setHeight(height + 10)
            }}>Decrease Width</button>
            <button onClick={()=>{
                setWidth(width - 10)
            }}>Increase Height</button>
            <button onClick={()=>{
                setHeight(height - 10)
            }}>Decrease Height</button>
            <button onClick={()=>{
                setRotation(rotation + 10)
            }}>Rotate Clockwise</button>
            <button onClick={()=>{
                setRotation(rotation - 10)
            }}>Rotate Anticlockwise</button>

        </div>
    </div>
  )
}

export default ImageApp