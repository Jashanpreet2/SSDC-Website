import { MDBTypography, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import Post from './Post'
import SectionHeader from './SectionHeader'
import Review from './Review'

export default function Reviews() {
  return (
    <div className="mt-py-below py-5">
      <SectionHeader title="Member Reviews"/>
      <MDBContainer className="content-space">
        <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <MDBCol>
            <Review name="Jane Smith" img="https://mdbootstrap.com/img/new/slides/041.webp" star="2" review="Great community and learning resources"/>
          </MDBCol>
          <MDBCol>
          <Review name="Alex Johnson" img="https://mdbootstrap.com/img/new/slides/041.webp" star="5" review="Exciting events and collaborative projects"/>
          </MDBCol>
          <MDBCol>
          <Review name="Anthony Darlington" img="https://mdbootstrap.com/img/new/slides/041.webp" star="2" review="test test test test test test test"/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}
