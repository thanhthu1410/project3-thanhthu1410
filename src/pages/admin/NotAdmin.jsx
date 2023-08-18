import React, { useEffect, useState } from 'react'

export default function Test() {
    const [timeRedriect, setTimeRedriect] = useState(3);

    useEffect(() => {
        if(timeRedriect <= 0) {
            window.location.href='/'
        }
        setTimeout(() => {
            setTimeRedriect(timeRedriect - 1)
        }, 1000);
    }, [timeRedriect])
  return (
    <div style={{width:"100%",height:"90vh",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"50px"}}>Not Admin {timeRedriect} Back To HomePage</div>
  )
}