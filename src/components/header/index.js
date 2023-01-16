import { useSelector } from "react-redux"
import cartIcon from "../../images/shopping-cart64.png"
import { CartContainer, Image, ItemCount, Title, Wrapper } from "./styles"

const Header = () => {
  const cart = useSelector((state) => state.cart.items)
  const productCount = cart.length === 0 ? "" : cart.length

  return (
    <Wrapper>
      <CartContainer>
        <ItemCount>{productCount}</ItemCount>
        <Image src={cartIcon} alt="cart" />
      </CartContainer>
      <Title>
        Reactiv<strong>E</strong>commerce
      </Title>
    </Wrapper>
  )
}

export default Header
