import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #0e0b16;
  margin-bottom: 20px;
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 1.5em;
  @media (min-width: 425px) {
    left: 2.3em;
  }
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e7dfdd;
`

export const ItemCount = styled.span`
  color: #fff;
`

export const Image = styled.img`
  width: 32px;
  height: 32px;
`
