import { useAuthStore } from '@/store/Auth'
import React from 'react'

function RegisterPage() {
    const { createAccount } = useAuthStore();
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState("")
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // collect data
        const formData = new FormData(e.currentTarget)
        const firstname = formData.get('firstname')
        const lastname = formData.get('lastname')
        const email = formData.get('email')
        const password = formData.get('password')
        // validate
        if (!firstname || !lastname || !email || !password) {
            setError(() => "Please fill out all the fields")
        }
        // call the store
        setIsLoading(true)
        setError("")
    }
    return (
        <div>

        </div>
    )
}

export default RegisterPage
