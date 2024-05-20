import React from 'react'
import {Link} from 'gatsby-link'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {formatPrice} from '../../lib/utils'

const Card = styled.div`
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: .25em;
  transition: all 400ms ease-in-out;
  padding: 1.5em;
  min-height: 34em;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:hover {
  border-color: #4FE3C1; 
  transform: scale(1.01);
      h2 {
      color: var(--accent-color);
    }
  }
`

const ProductTitle = styled.h2`
margin: 1.5em 0 1em;
color: var(--headings);
font-size: 1.5em;
transition: color 400ms ease-in-out;
`

const ProductDescription = styled.p`
color: var(--body-text-color);
margin-bottom: 1.5em;
font-weight: 300;
`

const ProductPrice = styled.p`
margin-top: auto;
font-size: 1.5em;
font-weight: bold;
color: var(--headings);
`

const ProductCard = ({ product }) => {
    const { name, description, price } = product;
    const productSlug = name.toLowerCase().split(' ').join('-');
    
    return (
        <Link to={`/${productSlug}`}>
          <Card>
            <GatsbyImage
              image={getImage(product.image)}
              alt={product.name}
              style={{ maxHeight: "200px"}}
              loading="lazy"
            />
            <ProductTitle>{name}</ProductTitle>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>ab {formatPrice(price)}&#8364;</ProductPrice>
          </Card>
        </Link>
    );
};

export default ProductCard;
