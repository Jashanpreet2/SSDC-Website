import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit'
import Image from 'next/image'

export default function Profile(props) {
  return (
    <div className="bg-dark content-pd-space content-space full-width-background text-white">
      <MDBContainer>
        <MDBRow className="align-items-center justify-content-center justify-content-lg-between">
          <MDBCol size="12" lg="2" className="profile-image-container">
            <Image
              src='/president.jpeg'
              className="rounded-circle"
              alt="..."
              height="100"
              width="100"
            />
          </MDBCol>
          <MDBCol
            size="12"
            lg="6"
            className="d-flex flex-column align-items-lg-start align-items-center"
          >
            <span className="fs-5 fw-bold mt-lg-0 mt-2">Pratham Garg</span>
            <span className="mt-lg-2 badge text-on-dark-bg-alt text-dark mt-1">President</span>
            <span className="mt-lg-2 mt-1">Passionate about creating innovative solutions</span>
          </MDBCol>
          <MDBCol size="auto" lg="2" className="mt-lg-0 mt-5">
            <MDBBtn>View Profile</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}
