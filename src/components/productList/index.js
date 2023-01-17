import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../store/cartSlice"
import { fetchProducts, toggleIsProductInCart } from "../../store/productsSlice"
import Product from "../product"
import { ListContainer, StatusContainer } from "./styles"

const ProductList = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.products.items)
  const productListStatus = useSelector((state) => state.products.status)

  useEffect(() => {
    if (productListStatus === "idle") {
      dispatch(fetchProducts())
    }
  }, [dispatch, productListStatus])

  const addProductToCart = (product) => {
    dispatch(addToCart(product))
    dispatch(toggleIsProductInCart(product.id))
  }

  const removeProductFromCart = (id) => {
    dispatch(removeFromCart(id))
    dispatch(toggleIsProductInCart(id))
  }

  const handleProductAction = (product) => {
    !product.isInCart
      ? addProductToCart(product)
      : removeProductFromCart(product.id)
  }

  let content = ""

  if (productListStatus === "loading")
    content = <StatusContainer>Loading...</StatusContainer>
  else if (productListStatus === "succeeded") {
    content = productList.map((product) => (
      <Product
        category={product.category.toUpperCase()}
        count={product.count}
        description={product.description}
        handleProductAction={() => handleProductAction(product)}
        id={product.id}
        image={product.image}
        isInCart={product.isInCart}
        key={product.id}
        price={product.price}
        rating={product.rating}
        title={product.title}
      />
    ))
  } else if (productListStatus === "failed")
    content = <StatusContainer>Products unavailable</StatusContainer>

  return <ListContainer>{content}</ListContainer>
}

export default ProductList
