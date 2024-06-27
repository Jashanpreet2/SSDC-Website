import Image from 'next/image'
import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from 'mdb-react-ui-kit'
import Hero from './Hero'

export default function MainNavbar({ currentPage }) {
  const [openNav, setOpenNav] = useState(false)

  return (
    <header>
      <MDBNavbar expand="lg" dark bgColor="dark" className="p-3">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <Image src="/logo.png" height="50" width="50" alt="Logo" loading="lazy" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink active={currentPage == 'Home'} aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/events">Events</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/news">News</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/projects">Projects</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {currentPage == 'Home' && (
        <Hero
          imgUrl="https://mdbootstrap.com/img/new/slides/041.webp"
          action="Join Now"
          head="Welcome to our Developer Club"
          subHead="Explore the world of coding and collaboration"
        />
      )}
    </header>
  )
}
