import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
} from 'mdb-react-ui-kit'
import { formatDate } from '@/lib/dateUtils'

export default function NewsCard({ _id, heading, date, author, content }) {
  const formattedDate = formatDate(date)
  return (
    <MDBCard className="news-card-style mb-4">
      <MDBCardBody>
        <MDBCardTitle className="fw-bold">{heading}</MDBCardTitle>
        <MDBCardSubTitle className="text-dark">written by {author}</MDBCardSubTitle>
        <MDBCardText className="my-2">{`${content.slice(0, 150)}${content.length > 200 ? '...' : ''}`}</MDBCardText>
        <div className="d-flex justify-content-between align-items-end flex-lg-row flex-column">
          <small className="text-muted d-block mb-md-0 mb-2 text-end">{formattedDate}</small>
          <MDBBtn href={`/news/${_id}`}>Read more</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  )
}
