import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import StartRating from './StarRating'

export default function Review({ name, img, star, review }) {
  return (
    <MDBCard className="review-style">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <img src={img} className="review-image rounded-circle" alt="..." />
        </div>
        <div className="fw-bold ms-2">
          <span>{name}</span>
        </div>
        <div className="ms-auto">
          <StartRating rating={star} />
        </div>
      </div>
      <p className="mb-0 mt-2">{review}</p>
    </MDBCard>
  )
}
