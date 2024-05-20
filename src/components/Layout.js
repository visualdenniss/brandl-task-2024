import {Link} from 'gatsby-link'
import React from 'react'
import styled from "styled-components"
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = styled.nav`
border-bottom: .75px solid var(--accent-color);
position: fixed;
top: 0;
width: 100%;
background-color: white;
z-index: 2;
padding: 1em 1.5em;
max-width: 1440px;
`

const Logo = styled.span`
font-size: 3em;
font-weight: 900;
color: var(--accent-color);
transition: all 400ms ease-in-out;

  &:hover {
  opacity: .75;
  }
`

const PageContent = styled.main`
margin-top: 7em;
margin-bottom: 3.5em;
padding: 1.5em;
`

const PageWrapper = styled.div`
max-width: 1440px;
margin: 0 auto;
position: relative;
`

const Footer = styled.footer`
width: 100%;
background-color: var(--accent-color);
padding: 1em;
font-size: 2em;
display: flex;
justify-content: space-between;
`

const StyledFooterLink = styled(Link)`
  color: white;
  font-weight: bold;
`;

const SocialLink = styled.a`
  display: inline-block;
`;


const Layout = ({children}) => {
    return (
        <PageWrapper>
           <Navbar>
                <Link to="/">
                    <Logo>Brandl</Logo>
                </Link> 
           </Navbar>
           <PageContent>
                {children}
           </PageContent>
           <Footer>
                <StyledFooterLink to="/">
                    Brandl
                </StyledFooterLink> 
                <SocialLink href="https://www.instagram.com/brandlnutrition/" target="_blank" rel="noopener noreferrer">
                    <StaticImage
                        alt="Instagram Logo"
                        src="../images/instagram.png"
                    />
                </SocialLink>
           </Footer>
        </PageWrapper>
    )
}

export default Layout
