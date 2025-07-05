import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"

function AdminLogIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()

    async function handleSubmit() {

        const adminData = {
            admin_name: username,
            password: password
        }

        try {
            axios.post('https://dbda-2405-201-a805-e01c-b72b-b381-4adc-b75b.ngrok-free.app/admin/signin',adminData,{withCredentials:true}).then((res)=> res.data.success ? navigate('/dashboard') : console.log(`Login Failed`))


        } catch (error: unknown) {
            return setErrorMsg('An unexpected error occurred')
        }

    }
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5 bg-black h-screen">
                <div>
                    <h1 className="text-red-500 text-2xl font-inter">
                        {
                            errorMsg
                        }
                    </h1>
                </div>
                <input className="bg-white w-[25%] px-2 py-2" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
                <input className="bg-white w-[25%] px-2 py-2" onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" />

                <button onClick={handleSubmit} className="bg-white text-xl px-4 py-2">
                    Log In
                </button>
            </div>
        </>
    )
}

export default AdminLogIn