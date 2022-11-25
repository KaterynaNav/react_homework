import { Button, Card, CardActions, CardContent } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import React, { useState } from "react"
import "./ProductListItem.scss"
import Quantity from "components/Quantity/Quantity"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import { addLike, removeLike } from "redux/likeReducer"
import {addProductToCart} from "redux/cartReducer"

type Props = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
    addProductToCart?: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
  
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)
    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)

    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <Card className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt={name} />
                </div>
                <Button
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <h4>{name}</h4>
                <p className="product-description">{description}</p>
                <div className="product-features">
                    <span>Type:</span> {type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capacity} Gb
                </div>
                <div className="product-price">Price: {price} $</div>
                <Quantity
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                    count={count}
                />
            </CardContent>
            <CardActions className="btn-wrap">
                <Button
                    variant="contained"
                    onClick={() => dispatch(addProductToCart({ id, count }))}
                >
                    Add to cart{" "}
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
