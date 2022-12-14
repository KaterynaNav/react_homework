import CartProductList from "components/Cart/CartProductList"
import { Grid, Typography } from "@mui/material"

import CartTotal from "components/Cart/CartTotal"
import CartProductListItemExtended from "components/Cart/CartProductListItemExtended"
import { useAppSelector } from "redux/hooks"
import { Link } from "react-router-dom"

type Props = {
}

type ProductsInCartProps = {
    productsInCart: {
        [id: number]: number
    }
}
const CartPage = () => {
const productsInCart = useAppSelector(
    (state: ProductsInCartProps) => state.productsInCart
)

    return (
        <div>
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    margin: "40px 0 20px",
                }}
            >
                CART
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
        
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Proceed to checkout</Link>
        </div>
    )
}

export default CartPage
