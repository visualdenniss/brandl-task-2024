// Gatsby automatically slugifies the {productsJson.name} e.g. 
// even if productsJson.name is "Brokkoli Extrakt" output will be "/brokkoli-extrakt"

import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import styled from "styled-components"
import {formatPrice} from '../lib/utils'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  flex: 1fr;
  margin-bottom: 1em;
  display: grid;
  place-items: center;

  @media(min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const InfoContainer = styled.div`
  flex: 1fr;
  text-align: center;
  display: grid;
  place-items: center;

  @media(min-width: 768px) {
    width: 50%;
    padding-left: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ProductTitle = styled.h2`
    color: var(--headings);
    margin-bottom: 0.5em;
    font-size: 2em;

    @media(min-width: 768px) {
      font-size: 3em;
    }
`;

const ProductDescription = styled.p`
  margin-bottom: 3em;
  font-weight: 300;
  color: var(--body-text-color);
`;

const ProductPrice = styled.p`
  font-size: 2em;
  font-weight: bold;
  color: var(--headings);
`;

const Divider = styled.div`
  width: 100%;
  height: 0.75px;
  margin: 1em 0 1.5em;
  background-color: var(--accent-color);

  @media(min-width: 768px) {
    width: 0.75px;
    height: 250px;
    background-color: var(--accent-color);
  }
`

const ProductPage = ({data}) => {
    const {name, description, price, image} = data.productsJson
    
    return (
    <Layout>
      <Container>
        <ImageContainer>
          <GatsbyImage image={getImage(image)} style={{maxWidth:'500px'}} alt={name} loading="lazy" />
        </ImageContainer>
        <Divider/>
        <InfoContainer>
          <ProductTitle>{name}</ProductTitle>
          <ProductDescription>{description}</ProductDescription>
          <ProductPrice>{formatPrice(price)}&#8364;</ProductPrice>
        </InfoContainer>
      </Container>
    </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    productsJson(id: {eq: $id}) {
      name
      description
      price
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export const Head = ({data}) => <Seo title={data.productsJson.name}/>

export default ProductPage;
