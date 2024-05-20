import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`

const ProductGrid = ({products}) => {
    return (
        <Grid>
            {products.map(product=>{
                return <ProductCard key={product.name} product={product}/>
            })}
        </Grid>
    )
}

export default ProductGrid
