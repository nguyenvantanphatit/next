'use client'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useCartStore } from '@/lib/store'
import { getCart } from '@/lib/api'
import CartItem from '../components/CartItem'
export default function CartPage() {
  const { items, clearCart } = useCartStore()
  const { data: cartData, isLoading, error } = useQuery({ queryKey: ['cart'], queryFn: getCart })
  useEffect(() => {
    if (cartData) {
      clearCart()
      Object.values(cartData).forEach((item: any) => useCartStore.getState().addItem(item))
    }
  }, [cartData, clearCart])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading cart</div>

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id}>
              {item.cart_lines.map((lineItem : any) => (
                <CartItem key={lineItem.id} {...lineItem} />
              ))}
            </div>
          ))}
          <div className="mt-4">
            <p className="font-bold">
              Total: ${items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}