export type Product = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        name: "iPhone X",
        description: "This is iPhone X",
        type: "phone",
        capacity: 64,
        price: 500,
        image: "/images/iphone-blue.jpg",
    },
    {
        id: 2,
        name: "iPhone 13 Pro",
        description: "This is iPhone 13 Pro",
        type: "phone",
        capacity: 128,
        price: 1000,
        image: "/images/iphone-gold.jpg",
    },
    {
        id: 3,
        name: "iPhone XS",
        description: "This is iPhone XS",
        type: "phone",
        capacity: 512,
        price: 800,
        image: "/images/iphone-green.jpg",
    },
    {
        id: 4,
        name: "iPhone 14 Pro Max",
        description: "This is iPhone 14 Pro Max",
        type: "phone",
        capacity: 256,
        price: 200,
        image: "/images/iphone-purple.jpg",
    },
    {
        id: 5,
        name: "iPhone 8 Plus",
        description: "This is iPhone 8 Plus",
        type: "phone",
        capacity: 64,
        price: 500,
        image: "/images/iphone-red.jpg",
    },
    {
        id: 6,
        name: "iPhone 12",
        description: "This is iPhone 12",
        type: "phone",
        capacity: 128,
        price: 100,
        image: "/images/iphone-white.jpg",
    },
]

export const getProductsObject = (array: Product[]) => array.reduce((object, product) => ({
    ...object,
    [product.id] : product
}), {})


export default productsArray
