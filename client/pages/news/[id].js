// pages/news/[id].js
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { MDBContainer, MDBIcon, MDBCol, MDBBtn } from 'mdb-react-ui-kit'
import Hero from '@/components/Hero'
import IconList from '@/components/IconList'
import { formatDate } from '@/lib/dateUtils'

export default function News({ news }) {
  const router = useRouter()
  const formattedDate = formatDate(news.date)
  return (
    <>
      <Head>
        <title>{news.heading}</title>
      </Head>
      <Hero
        imgUrl="https://via.placeholder.com/1000"
        action=""
        head={news.heading}
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
            <span>Date: {formattedDate}</span>
          </div>

          <div className="d-flex flex-column align-items-center mb-8 mt-5">
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

export async function getServerSideProps(context) {
  const { id } = context.params
  const res = await fetch(`${process.env.API_ENDPOINT}/api/news/${id}`)
  const news = await res.json()

  if (!news) {
    return {
      notFound: true,
    }
  }

  return {
    props: { news },
  }
}
