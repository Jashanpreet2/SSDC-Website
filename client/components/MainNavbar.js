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
                <MDBNavbarLink active={currentPage == 'Events'} href="/events">
                  Events
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/news">News</MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink href="/projects">Projects</MDBNavbarLink>
              </MDBNavbarItem> */}
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
      {currentPage == 'News' && (
        <Hero
          imgUrl="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          action=""
          head="Discover Our Latest News!"
          subHead="Stay updated with the latest news from our club."
        />
      )}
      {currentPage == 'Events' && (
        <Hero
          imgUrl="https://www.senecapolytechnic.ca/content/seneca/futurestudents/events-and-webinars/_jcr_content/root/responsivegrid/pre-content/top_feature_copy/1.img.Open-House-Newnham-2022-11-26-085.jpg"
          action=""
          head="Discover Our Latest Events!"
          subHead="Stay updated with the latest events from our club."
        />
      )}
    </header>
  )
}
