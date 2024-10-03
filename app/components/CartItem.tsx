import React from 'react'
import { useCartStore } from '@/lib/store'
import { updateCartItem, deleteCartItem } from '@/lib/api'

interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity }) => {
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity)
  const removeItem = useCartStore((state) => state.removeItem)

  const handleQuantityChange = async (newQuantity: number) => {
    try {
      await updateCartItem(id, newQuantity)
      updateItemQuantity(id, newQuantity)
    } catch (error) {
      console.error('Error updating cart item:', error)
    }
  }

  const handleRemove = async () => {
    try {
      await deleteCartItem(id)
      removeItem(id)
    } catch (error) {
      console.error('Error removing cart item:', error)
    }
  }

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p>Price: ${price}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          -
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
        <button onClick={handleRemove} className="ml-4 text-red-500">
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem