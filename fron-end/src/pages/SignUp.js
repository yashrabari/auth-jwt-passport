import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { signUpUser } from '../networks/Api'

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const onSubmit = async (e) => {
        e.preventDefault()
        var res = await signUpUser({ userName, email, password })
        if (res.data.success) {
            localStorage.setItem('signup', true)
            history.push('/login')
        } else {
            alert(res.data.msg)
        }

    }

    return (
        <div>
            <form onSubmit={e => { onSubmit(e) }}>
                User Name : <input type="text" value={userName} onChange={e => { setUserName(e.target.value) }} /><br />
                Email : <input type="email" value={email} onChange={e => { setEmail(e.target.value) }} /><br />
                Password : <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} /><br />
                <button type="submit" >Sign up</button>
            </form>
        </div>
    )
}
