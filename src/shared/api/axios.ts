import axios, { AxiosError } from 'axios'
import { getSession } from 'next-auth/react'

// Create a custom axios instance
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
})


export default api
