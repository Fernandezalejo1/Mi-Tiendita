import React, { useState } from 'react'
import Button from '../Button.jsx'  
import './ItemCount.css'

const ItemCount = () => {
    const [count, setCount] = useState(1)
    
    const restar = () => {
        console.log("se esta ejecutando restar")
        setCount(prevCount => Math.max(0, prevCount - 1))
    }
    
    const sumar = () => {
        console.log("se esta ejecutando sumar")
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div className='container'>
            <Button 
                text="-" 
                onClick={restar} 
                variant="primary"
                size="medium"
            />
            <p>{count}</p>
            <Button 
                text="+" 
                onClick={sumar} 
                variant="primary"
                size="medium"
            />
        </div>
    )
}

export default ItemCount