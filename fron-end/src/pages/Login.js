import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { loginUser } from '../networks/Api'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const onSubmit = async (e) => {
        e.preventDefault()
        var res = await loginUser({ email, password })
        if (res.data.success) {
            await localStorage.setItem('token', res.data.token)
            history.push('/')
        } else {
            alert(res.data.msg)
        }
    }

    return (
        <div>
            <form onSubmit={e => { onSubmit(e) }}>
                Email : <input type="email" value={email} onChange={e => { setEmail(e.target.value) }} /><br />
                Password : <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} /><br />
                <button type="submit" >Login</button>
                {localStorage.getItem('signup') ? ("") : <p>Don't have an account ?? <Link to='/signup'>Sign Up</Link></p>}
            </form>
        </div>
    )
}
