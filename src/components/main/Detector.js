import React from 'react'
import Target from "./Target"

const Detector = ({ref, size, image, prediction}) => {
    
    return (
        <div>
            <img  ref={ref} style={{ objectFit:'cover',border : "solid",
            borderWidth: "2px", maxHeight:'580px'}} fluid src={image}/>
                {prediction.map((pre) => <Target ref={ref} size={size} prediction={pre}/>)
        </div>
         
    )
}

export default Detector
