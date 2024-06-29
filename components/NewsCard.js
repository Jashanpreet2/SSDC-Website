import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
} from 'mdb-react-ui-kit'

export default function NewsCard({ id, title, date, author, desc }) {
  return (
    <MDBCard className="news-card-style mb-4" key={id}>
      <MDBCardBody>
        <span>key:{id}</span>
        <MDBCardTitle className="fw-bold">{title}</MDBCardTitle>
        <MDBCardSubTitle className="text-dark">written by {author}</MDBCardSubTitle>
        <MDBCardText className="my-2">{desc}</MDBCardText>
        <div className="d-flex justify-content-between align-items-end flex-lg-row flex-column">
          <small className="text-muted d-block mb-md-0 mb-2 text-end">{date}</small>
          <MDBBtn href={`/news/${id}`}>Read more</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  )
}
