import React from 'react'
import Link from 'next/link'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
} from 'mdb-react-ui-kit'

const EventCard = ({ event }) => {
  return (
    <MDBCol key={event._id}>
      <MDBCard style={{ maxWidth: '300px' }}>
        <MDBCardImage
          src={event.imageUrl || `https://picsum.photos/300/200?random=${event._id}`}
          position="top"
          alt={event.heading}
          style={{ width: '300px', height: '200px' }}
        />
        <MDBCardBody>
          <MDBCardTitle>{event.heading}</MDBCardTitle>
          <MDBCardText className="text-truncate" style={{ maxWidth: '100%' }}>
            <small className="text-muted">{new Date(event.date).toLocaleDateString()}</small>
            <br />
            <br />
            {event.content}
          </MDBCardText>
          <Link href={`/event/${event._id}`} passHref>
            <MDBBtn color="primary">More Details</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default EventCard
