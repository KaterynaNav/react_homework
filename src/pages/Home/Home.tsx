import ProductsList from "components/Products/ProductsList"
import Reviews from "components/Reviews/Reviews"
import React from "react"

type Props = {}

const Home = () => {
    return (
        <>
            <ProductsList />
            <Reviews />
        </>
    )
}

export default Home
