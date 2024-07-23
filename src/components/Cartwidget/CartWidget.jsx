import React from 'react'

const CartWidget = ({ itemCount = 0 }) => {
  return (
    <div>
      🛒 <span>{itemCount}</span>
    </div>
  )
}

export default CartWidget