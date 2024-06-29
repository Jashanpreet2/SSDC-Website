import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit'
import IconList from '@/components/IconList'

export default function Events() {
  const [events, setEvents] = useState([])
  const [filter, setFilter] = useState('All')
  const [filterText, setFilterText] = useState('Filter by')
  const [visibleEvents, setVisibleEvents] = useState(4)

  useEffect(() => {
    fetch('/api/event')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error))
  }, [])

  const handleFilterChange = (filterValue, filterLabel) => {
    setFilter(filterValue)
    setFilterText(filterLabel)
    setVisibleEvents(4)
  }

  const filteredEvents = events.filter((event) => {
    if (filter === 'All') return true
    const eventDate = new Date(event.date)
    const now = new Date()
    const thisMonth = now.getMonth()
    const thisYear = now.getFullYear()
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)

    if (filter === 'This Month') {
      return eventDate.getMonth() === thisMonth && eventDate.getFullYear() === thisYear
    } else if (filter === 'Next Month') {
      return (
        eventDate.getMonth() === nextMonth.getMonth() &&
        eventDate.getFullYear() === nextMonth.getFullYear()
      )
    }
  })

  filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date))

  const loadMoreEvents = () => {
    setVisibleEvents((prevVisibleEvents) => prevVisibleEvents + 4)
  }

  return (
    <>
      <Head>
        <title>Discover our events</title>
      </Head>
      <MDBContainer fluid className="p-0">
        <div
          className="d-flex justify-content-center align-items-center mb-5"
          style={{
            height: '400px',
            backgroundColor: '#D9D9D9',
            width: '100%',
          }}
        >
          <h1 className="mb-5 text-center">&quot;Discover our events&quot;</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Upcoming Events ...</h2>
          <MDBDropdown>
            <MDBDropdownToggle color="secondary" className="ms-2">
              {filterText}
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link onClick={() => handleFilterChange('All', 'All')}>
                All
              </MDBDropdownItem>
              <MDBDropdownItem link onClick={() => handleFilterChange('This Month', 'This Month')}>
                This Month
              </MDBDropdownItem>
              <MDBDropdownItem link onClick={() => handleFilterChange('Next Month', 'Next Month')}>
                Next Month
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
        <MDBRow className="row-cols-1 row-cols-md-2 g-4 mb-8">
          {filteredEvents.slice(0, visibleEvents).map((event) => (
            <MDBCol key={event._id}>
              <MDBCard>
                <MDBCardImage
                  src="https://via.placeholder.com/300x200"
                  position="top"
                  alt={event.heading}
                />
                <MDBCardBody>
                  <MDBCardTitle>{event.heading}</MDBCardTitle>
                  <MDBCardText className="text-truncate" style={{ maxWidth: '100%' }}>
                    <small className="text-muted">
                      {new Date(event.date).toLocaleDateString()}
                    </small>
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
          ))}
        </MDBRow>
        {visibleEvents < filteredEvents.length && (
          <div className="mb-8 mt-4 text-center">
            <MDBBtn
              color="secondary"
              style={{
                fontSize: '1.5rem',
                padding: '0.5rem 6rem',
                textTransform: 'none',
              }}
              onClick={loadMoreEvents}
            >
              Load More
            </MDBBtn>
          </div>
        )}
      </MDBContainer>

      <IconList />
    </>
  )
}
