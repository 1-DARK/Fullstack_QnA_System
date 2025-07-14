import { useAuthStore } from '@/store/Auth'
import React from 'react'

function RegisterPage() {
    const { createAccount } = useAuthStore();
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState("")
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // collect data

        // validate

        // call the store
    }
    return (
        <div>

        </div>
    )
}

export default RegisterPage
