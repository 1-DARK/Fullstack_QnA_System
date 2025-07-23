"use client"
import { useAuthStore } from '@/store/Auth'
import React from 'react'

function Loginpage() {
    const { login } = useAuthStore()
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState("")
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // collect data
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        // validation
        if (!email || !password) {
            setError(() => "Please fill out all the fields")
            return
        }
        // handle login and error
        setIsLoading(() => true)
        setError(() => "")
        // login
        const loginresponse = await login(email.toString(), password.toString())
        if (loginresponse.error) {
            setError(() => loginresponse.error!.message)
        }
        setIsLoading(() => false)
    }
    return (
        <div>

        </div>
    )
}

export default Loginpage
