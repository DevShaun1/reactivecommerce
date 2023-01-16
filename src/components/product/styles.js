import styled from "styled-components"

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: white;
  margin: 1em 0;
  padding: 1em;
  border-radius: 3px;
  @media (min-width: 425px) {
    padding: 1em 2em;
  }
  @media (min-width: 1400px) {
    padding: 1em 6em;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 525px) {
    gap: 40px;
  }
`

export const ImageContainer = styled.div`
  align-self: center;
  padding-right: 10px;
`

export const InfoContainer = styled.div`
  margin: auto;
  overflow-wrap: break-word;
  max-width: 110px;
  @media (min-width: 525px) {
    max-width: none;
  }
`

export const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

export const RateContainer = styled.div`
  align-self: flex-end;
`

export const ActionsContainer = styled.div`
  padding-top: 20px;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
`

export const Title = styled.h1`
  color: #4d4d4f;
  margin: 0;
`

export const Price = styled.span`
  font-weight: 700;
`
export const Category = styled.span`
  background-color: aliceblue;
  padding: 5px 12px;
  border-radius: 20px;
  text-align: center;
`

export const Button = styled.button.attrs((props) => props)`
  border: none;
  background-color: ${({ variant }) =>
    variant == "remove" ? "#d10e0e" : "#1c8644"};
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    filter: brightness(95%);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  }
`
