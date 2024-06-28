import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit'
import Image from 'next/image'

export default function Post({ title, desc }) {
  return (
    <MDBCard style={{ maxWidth: '600px' }}>
      <MDBRow className="g-0">
        <MDBCol lg="4" className="d-flex align-items-center p-lg-3 flex-row-reverse p-0">
          <img
            src="https://mdbootstrap.com/img/new/slides/041.webp"
            className="card-image"
            alt="..."
          />
        </MDBCol>
        <MDBCol lg="8">
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>{desc}</MDBCardText>
            {/* <MDBCardText>
                          <small className='text-muted'>Last updated 3 mins ago</small>
                        </MDBCardText> */}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  )
}
