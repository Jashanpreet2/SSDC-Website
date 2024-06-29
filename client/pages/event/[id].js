// pages/event/[id].js
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { MDBContainer, MDBIcon, MDBCol, MDBBtn } from 'mdb-react-ui-kit'

export default function Event() {
  const router = useRouter()
  const { id } = router.query

  // Dummy data for a single event
  const event = {
    id: id,
    heading: 'Event Name 1',
    author: 'Author 1',
    tags: {
      update: true,
      news: false,
    },
    content: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum',
    date: '2023-07-01',
  }

  return (
    <>
      <Head>
        <title>{event.name}</title>
      </Head>

      <MDBContainer fluid className="p-0">
        <MDBCol md="8" className="w-100">
          <div
            className="d-flex flex-column justify-content-center align-items-center mb-5"
            style={{
              height: '400px',
              backgroundColor: '#D9D9D9',
              width: '100%',
            }}
          >
            <h1 className="mb-4 text-center">{event.heading}</h1>
            <p className="text-muted mb-4 text-center">by {event.author}</p>
            <div className="mb-4">
              {Object.entries(event.tags).map(
                ([key, value]) =>
                  value && (
                    <MDBBtn key={key} color="dark" size="sm" className="me-2">
                      {key}
                    </MDBBtn>
                  )
              )}
            </div>
          </div>

          <div
            className="rounded-9 d-flex justify-content-center align-items-center mb-4 border border-gray-300 bg-white px-5 py-4"
            style={{ minHeight: '400px' }}
          >
            <p>{event.content}</p>
          </div>

          <div
            className="rounded-9 mx-auto mb-10 border border-gray-300 p-3"
            style={{ maxWidth: '250px', textAlign: 'center', backgroundColor: '#D9D9D9' }}
          >
            <span>{event.date}</span>
          </div>

          <div className="d-flex flex-column align-items-center mt-5 mb-8">
            <h3>Upcoming Events</h3>
            <p>Join us for exciting new events</p>
            <Link href="/events" passHref>
              <MDBBtn
                color="dark"
                className="rounded-9"
                style={{
                  maxWidth: '250px',
                  textAlign: 'center',
                  fontSize: '1rem',
                  padding: '1rem 3rem',
                  textTransform: 'none',
                }}
              >
                View All Events
              </MDBBtn>
            </Link>
          </div>
        </MDBCol>
      </MDBContainer>

      <hr />

      <footer className="mt-5 text-center">
        <p>Follow us to learn more</p>
        <div>
          <a
            href="https://www.linkedin.com/company/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDBIcon fab icon="linkedin-in" size="2x" className="me-4" />
          </a>
          <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="discord" size="2x" className="me-4" />
          </a>
          <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="instagram" size="2x" className="me-4" />
          </a>
          <a href="https://www.youtube.com/user/example" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="youtube" size="2x" className="me-4" />
          </a>
        </div>
      </footer>
    </>
  )
}
