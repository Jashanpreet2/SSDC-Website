import Head from 'next/head'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import ReviewList from '@/components/ReviewList'

export default function Review() {

  const reviews = [
    { id: 1, name: 'Jane Smith', review: 'Great community and learning resources', star: 5, imgSrc: 'https://mdbootstrap.com/img/new/slides/041.webp' },
    { id: 2, name: 'John Doe', review: 'Excellent tutorials and support', star: 3, imgSrc: 'https://mdbootstrap.com/img/new/slides/041.webp' },
    { id: 3, name: 'Emily Johnson', review: 'Helpful and friendly community', star: 4, imgSrc: 'https://mdbootstrap.com/img/new/slides/041.webp' },
    { id: 4, name: 'Michael Brown', review: 'Amazing content and instructors', star: 5, imgSrc: 'https://mdbootstrap.com/img/new/slides/041.webp' },
    { id: 5, name: 'Sarah Davis', review: 'Learned a lot from the courses', star: 3, imgSrc: 'https://mdbootstrap.com/img/new/slides/041.webp' },
    { id: 6, name: 'David Wilson', review: 'Highly recommend to everyone', star: 6, imgSrc: 'https://mdbootstrap.com/img/new/slides/041.webp' },
    { id: 7, name: 'Laura Taylor', review: 'Great experience overall', star: 5, imgSrc: 'https://mdbootstrap.com/img/new/slides/041.webp' },
    { id: 8, name: 'James Anderson', review: 'Fantastic platform for learning', star: 2, imgSrc: 'https://mdbootstrap.com/img/new/slides/041.webp' },
  ];

  return (
    <>
      <Head>
        <title>SSDC Website - Member Reviews</title>
        <meta name="description" content="Read authentic reviews from our club. We look forward to having you join our club." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MDBContainer className="my-lg-5 review-fs">
        <MDBRow className='align-items-center h-100'>
            <MDBCol md='12' lg='6' className="order-2 order-lg-1 text-center text-lg-start my-lg-0 mt-4">
              <h1>Welcome to Our Reviews Page</h1>
              <p>Explore the feedback from our members</p>
            </MDBCol>
            <MDBCol md='12' lg='6' className="order-1 order-lg-2 h-100">
                <img src="https://via.placeholder.com/1000" alt="Placeholder" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </MDBCol>
        </MDBRow>
      </MDBContainer>
      <h2 className='mt-5 d-lg-block d-none text-center'>Member Reviews</h2>
      <div className="mt-5">
        <ReviewList reviews={reviews} />
      </div>
    </>
  )
}
