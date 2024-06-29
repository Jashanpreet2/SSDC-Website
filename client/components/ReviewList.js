import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import Review from './Review'
import ViewMoreButton from './ViewMoreButton'

const ReviewContainer = ({ name, imgSrc, star, review }) => (
  <MDBCol>
    <Review name={name} img={imgSrc} star={star} review={review} />
  </MDBCol>
)
export default function ReviewList({ reviews, linkTo = '' }) {
  return (
    <MDBContainer>
      <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {reviews.map((review) => (
          <ReviewContainer key={review.id} {...review} />
        ))}
      </MDBRow>
      {linkTo && (
        <div className="link mt-2">
          <ViewMoreButton linkTo={linkTo} />
        </div>
      )}
    </MDBContainer>
  )
}
