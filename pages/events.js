// pages/events.js
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
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
  // Dummy data for events
  const events = [
    {
      id: 1,
      heading: 'Event Name 1',
      author: 'Author 1',
      tags: {
        update: false,
        news: true,
      },
      content:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum',
      date: '2024-06-29',
    },
    {
      id: 2,
      heading: 'Event Name 2',
      author: 'Author 2',
      tags: {
        update: true,
        news: false,
      },
      date: '2024-06-30',
      content: 'Description 2',
    },
    {
      id: 3,
      heading: 'Event Name 3',
      author: 'Author 3',
      tags: {
        update: false,
        news: true,
      },
      date: '2024-07-02',
      content: 'Description 3',
    },
    {
      id: 4,
      heading: 'Event Name 4',
      author: 'Author 4',
      tags: {
        update: true,
        news: false,
      },
      date: '2024-07-15',
      content: 'Description 4',
    },
    {
      id: 5,
      heading: 'Event Name 5',
      author: 'Author 5',
      tags: {
        update: false,
        news: true,
      },
      date: '2024-07-27',
      content: 'Description 5',
    },
    {
      id: 6,
      heading: 'Event Name 6',
      author: 'Author 6',
      tags: {
        update: true,
        news: false,
      },
      date: '2024-08-15',
      content: 'Description 6',
    },
    {
      id: 7,
      heading: 'Event Name 7',
      author: 'Author 7',
      tags: {
        update: true,
        news: false,
      },
      date: '2024-07-4',
      content: 'Description 7',
    },
    {
      id: 8,
      heading: 'Event Name 8',
      author: 'Author 8',
      tags: {
        update: false,
        news: true,
      },
      date: '2024-06-27',
      content: 'Description 8',
    },
    {
      id: 9,
      heading: 'Event Name 9',
      author: 'Author 9',
      tags: {
        update: true,
        news: false,
      },
      date: '2024-07-8',
      content: 'Description 9',
    },
  ]

  const [filter, setFilter] = useState('All')
  const [filterText, setFilterText] = useState('Filter by')
  const [visibleEvents, setVisibleEvents] = useState(4) // Initial number of events to display

  const handleFilterChange = (filterValue, filterLabel) => {
    setFilter(filterValue)
    setFilterText(filterLabel)
    setVisibleEvents(4) // Reset visible events when filter changes
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

  // Sort filtered events by date in ascending order
  filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date))

  const loadMoreEvents = () => {
    setVisibleEvents((prevVisibleEvents) => prevVisibleEvents + 4) // Increase visible events by 4
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
            <MDBCol key={event.id}>
              <MDBCard>
                <MDBCardImage
                  src="https://via.placeholder.com/300x200"
                  position="top"
                  alt={event.heading}
                />
                <MDBCardBody>
                  <MDBCardTitle>{event.heading}</MDBCardTitle>
                  <MDBCardText className="text-truncate" style={{ maxWidth: '100%' }}>
                    <small className="text-muted">{event.date}</small>
                    <br />
                    <br />
                    {event.content}
                  </MDBCardText>
                  <Link href={`/event/${event.id}`} passHref>
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
