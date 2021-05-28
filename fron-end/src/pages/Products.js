import React, { useContext } from 'react'
import { ThemeContext } from '../components/context/ThemeContext'
import Header from '../components/shared/Header'

export default function Products() {
    const { dark } = useContext(ThemeContext)
    return (
        <div className={dark ? "dark" : "light"} style={{ height: '100vh' }}>
            <Header title="Products" />
            Products
        </div>
    )
}
