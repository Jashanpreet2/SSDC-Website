import React from 'react'
import { MDBRow } from 'mdb-react-ui-kit'
import EventCard from './EventCard'

const EventList = ({ events, visibleEvents }) => {
  return (
    <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-8">
      {events.slice(0, visibleEvents).map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </MDBRow>
  )
}

export default EventList
