import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "redux/hooks"
import ProductListItem from "./ProductListItem"

type ProductProps = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

type Props = {}

const ProductsList = () => {

    const productsArray = useAppSelector(
        (state) => state.products)
    return (
         
        <>
            <Typography
                align="center"
                variant="h4"
                style={{
                    margin: "25px 0",
                    textTransform: "uppercase",
                }}
            >
                Products List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
