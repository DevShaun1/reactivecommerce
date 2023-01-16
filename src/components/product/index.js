import {
  Card,
  ActionsContainer,
  DetailsContainer,
  ImageContainer,
  InfoContainer,
  MetaContainer,
  RateContainer,
  Button,
  Category,
  Image,
  Price,
  Title
} from "./styles"

const Product = (product) => {
  const {
    category,
    count,
    description,
    handleProductAction,
    image,
    isInCart,
    price,
    rating,
    title,
  } = product
  return (
    <Card>
      <DetailsContainer>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <p>{description}</p>
          <Price>R {price}</Price>
        </InfoContainer>
        <MetaContainer>
          <Category>{category}</Category>
          <RateContainer>
            <div>
              <strong>Rating:</strong> {rating}
            </div>
            <div>
              <strong>Count:</strong> {count}
            </div>
          </RateContainer>
        </MetaContainer>
      </DetailsContainer>
      <ActionsContainer>
        <Button
          variant={isInCart ? "remove" : "add"}
          onClick={() => handleProductAction(product)}
        >
          {isInCart ? "Remove from cart" : "Add to cart"}
        </Button>
      </ActionsContainer>
    </Card>
  )
}

export default Product
