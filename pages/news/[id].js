// pages/news/[id].js
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { MDBContainer, MDBIcon, MDBCol, MDBBtn } from 'mdb-react-ui-kit'
import Hero from '@/components/Hero'
import IconList from '@/components/IconList'

export default function Event() {
  const router = useRouter()
  const { id } = router.query

  const news = {
    id: 7,
    title: 'Club Social Event: Networking Night',
    author: 'Lisa Adams',
    desc: 'Join us for a night of networking and fun. Meet fellow members and industry professionals in a relaxed setting.',
    date: '2024-06-30',
    content: 'Expand your horizons with the International Relations Club. Dive into global issues, diplomacy, and cultural exchange through discussions, simulations, and guest speakers. Join us as we explore current events and promote understanding and cooperation among students.'
  }
  return (
    <>
      <Head>
        <title>{news.title}</title>
      </Head>
      <Hero
          imgUrl="https://via.placeholder.com/1000"
          action=""
          head={news.title}
          subHead={`written by ${news.author}`}
      />

      <MDBContainer fluid className="p-0">
        <MDBCol md="8" className="w-100">
          <div
            className="rounded-9 d-flex justify-content-center align-items-center my-4 border border-gray-300 bg-white px-5 py-4"
            style={{ minHeight: '400px' }}
          >
            <p>{news.content}</p>
          </div>

          <div
            className="rounded-9 mx-auto mb-10 border border-gray-300 p-3"
            style={{ maxWidth: '250px', textAlign: 'center', backgroundColor: '#D9D9D9' }}
          >
            <span>{news.date}</span>
          </div>

          <div className="d-flex flex-column align-items-center mt-5 mb-8">
            <Link href="/news" passHref>
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
                Back to News page
              </MDBBtn>
            </Link>
          </div>
        </MDBCol>
      </MDBContainer>
      <IconList />
    </>
  )
}
