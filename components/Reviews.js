import { MDBTypography, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import Post from './Post'
import SectionHeader from './SectionHeader'
import Review from './Review'
import ReviewList from './ReviewList'
import ViewMoreButton from './ViewMoreButton'

export default function Reviews() {
  const reviews = [
    { id: 1, name: 'Jane Smith', review: 'Great community and learning resources', star: 5, imgSrc: 'https://mdbootstrap.com/img/new/slides/041.webp' },
    { id: 2, name: 'John Doe', review: 'Excellent tutorials and support', star: 3, imgSrc: 'https://mdbootstrap.com/img/new/slides/041.webp' },
    { id: 8, name: 'James Anderson', review: 'Fantastic platform for learning', star: 2, imgSrc: 'https://mdbootstrap.com/img/new/slides/041.webp' },
  ];
  return (
    <div className="mt-py-below py-5">
      <SectionHeader title="Member Reviews" />
      <div className="content-space">
        <ReviewList reviews={reviews} linkTo="/review" />
      </div>
    </div>
  )
}
