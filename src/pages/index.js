import React, {useState} from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ProductGrid from "../components/ProductsGrid/ProductGrid"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import '../styles/global.css'

const SearchInput = styled.input`
  margin-bottom: 1.5em;
  padding: .75em;
  border-radius: 0.25em;
  border: 1px solid rgba(0,0,0,0.2);
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 1em;
  color: var(--body-text-color);

    &:focus {
    outline: none;
    border: 1px solid var(--accent-color);
  }
`

const IndexPage = ({ data: { products } }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const filteredProducts = products.nodes.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <Layout>
      <SearchInput
        type="text"
        placeholder="Suche nach Produktname"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ProductGrid products={filteredProducts}/>
    </Layout>
  )
}

export const query = graphql`
  query {
    products: allProductsJson {
      nodes {
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
  }
`

export const Head = () => <Seo title='Home'></Seo>

export default IndexPage
