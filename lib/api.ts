// src/lib/api.ts
import axios from 'axios'
import { useAuthStore } from './store'

const api = axios.create({
  baseURL: 'https://api.echomedi.com/api',
  timeout: 60000,
})

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  const isNoAuthRequired = config.url?.startsWith('/cart');
  if (token && isNoAuthRequired) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config
},
  (error) => {
    return Promise.reject(error);
  }
)

export const login = async (identifier: string, password: string) => {
  const response = await api.post('/user/auth', { identifier, password })
  return response.data
}

export const register = async (userData: {
  phone: string
  name: string
  email: string
  password: string
}) => {
  const response = await api.post('/patient/createPatientAndUser', {
    ...userData,
    isWeb: true,
  })
  return response.data
}

export const getCart = async () => {
  const response = await api.get('/product/getCart')
  return response.data
}

export const updateCartItem = async (id: string, quantity: number) => {
  const response = await api.post('/cart/updateCartLine', { id, cnt: quantity })
  return response.data
}

export const deleteCartItem = async (id: string) => {
  const response = await api.delete(`/cart-lines/${id}`)
  return response.data
}

export const getAllProducts = async (page = 1, pageSize = 10000) => {
  const response = await api.get('/products', {
    params: {
      'pagination[page]': page,
      'pagination[pageSize]': pageSize,
    },
  })
  return response.data
}

export const getProductBySlug = async (slug: string) => {
  const response = await api.get(`/product/findOne/${slug}`)
  return response.data.product
}