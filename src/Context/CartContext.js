import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addtoitem: () => {},
  deletetoitem: () => {},
})

export default CartContext
