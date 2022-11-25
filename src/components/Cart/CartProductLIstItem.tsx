import {Product} from "components/Products/productsArray"

type Props = {
  product: Product
productCount: number
}

const CartProductLIstItem = ({ product, productCount}: Props) => {
  return (
      <div>
          {product.name}: {productCount}
      </div>
  )
}

export default CartProductLIstItem