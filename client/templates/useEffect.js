import React, {useEffect, useState} from "react";

const [pos, setPos] = useState({
    x: 0,
    y: 0
})

const mouseMoveHandler = e => {
    setPos({
        x: e.clientX,
        y: e.clientY
    })

}

useEffect(() => {
    console.log('ComponentDidMount')
    window.addEventListener('mousemove', mouseMoveHandler)
    return () => {
        window.removeEventListener('mousemove', mouseMoveHandler)
    }
}, [])

{JSON.stringify(pos, null, 2)}

