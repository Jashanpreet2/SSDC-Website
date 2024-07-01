import Head from 'next/head'
import { useState, useEffect } from 'react'
import {
  MDBContainer,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBBtn,
} from 'mdb-react-ui-kit'
import IconList from '@/components/IconList'
import EventList from '@/components/EventList'

export default function Events({ event }) {
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
        <title>SSDC Website - Events</title>
        <meta
          name="description"
          content="Stay updated with our latest events. This website is run by ssdc seneca"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MDBContainer fluid className="p-0">
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
        <EventList events={filteredEvents} visibleEvents={visibleEvents} />
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

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_ENDPOINT}/api/event`)
  const event = await res.json()

  if (!event) {
    return {
      notFound: true,
    }
  }

  return {
    props: { event },
  }
}
