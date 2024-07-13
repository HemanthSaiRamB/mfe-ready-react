import React, { Suspense, lazy } from "react"
const Products = lazy(() => import("products/Products"))
const Cart = lazy(() => import("cart/Cart"))


const App = () => {

    return (
        <>
            <h1>Shell</h1>
            <Suspense fallback={<div>Loading Products...</div>}><Products /></Suspense>
            <Suspense fallback={<div>Loading Cart...</div>}><Cart /></Suspense>
        </>
    )
}

export default App