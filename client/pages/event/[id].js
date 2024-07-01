import Head from 'next/head'
import Link from 'next/link'
import { MDBContainer, MDBCol, MDBBtn } from 'mdb-react-ui-kit'
import IconList from '@/components/IconList'

export default function Event({ event }) {
  return (
    <>
      <Head>
        <title>{event.heading}</title>
      </Head>

      <div
        className="full-width-section mb-6"
        style={{
          backgroundImage: `url(${event.imageUrl || `https://picsum.photos/1000/400?random=${event._id}`})`,
        }}
      >
        <div className="overlay">
          <h1 className="mb-4 text-center text-white">{event.heading}</h1>
          <p className="mb-4 text-center text-white">by {event.author}</p>
          <div className="mb-4">
            {event.tags.map((tag) => (
              <MDBBtn key={tag} color="dark" size="sm" className="me-2">
                {tag}
              </MDBBtn>
            ))}
          </div>
        </div>
      </div>
      <MDBContainer fluid className="p-0">
        <MDBCol md="8" className="w-100">
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
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>

          <div className="d-flex flex-column align-items-center mb-8 mt-5">
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
      <IconList />
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const res = await fetch(`${process.env.API_ENDPOINT}/api/event/${id}`)
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