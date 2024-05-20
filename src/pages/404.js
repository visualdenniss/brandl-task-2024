import {Link} from 'gatsby-link'
import React from 'react'
import styled from "styled-components"
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const ErrorMessage = styled.p`
  margin-bottom: 2em;
  font-size: 2em;
  font-weight: 300;
  color: var(--body-text-color);
`

const ReturnLink = styled.span`
  color: var(--accent-color);
  font-size: 1.5em;
  font-weight: bold;
`

const NotFound = () => {
    return (
        <Layout>
            <ErrorMessage>Oops! Seite nicht gefunden :(</ErrorMessage>
            <Link to='/'><ReturnLink>Zurück zu Startseite</ReturnLink></Link>
        </Layout>
    )
}

export const Head = () => <Seo title='404'></Seo>

export default NotFound
