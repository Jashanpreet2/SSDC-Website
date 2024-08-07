import { MDBTypography, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import Post from './Post'
import SectionHeader from './SectionHeader'

export default function LatestPosts() {
  return (
    <div className="mt-py-below py-5">
      <SectionHeader title="Latest Posts" subtitle="Stay updated with our blogs and tutorials" />
      <MDBContainer className="content-space">
        <MDBRow>
          <MDBCol size="md-6">
            <Post
              title="Web Development Trends"
              desc="Explore the latest trends in frontend development"
            />
          </MDBCol>
          <MDBCol size="md-6" className="mt-md-0 mt-4">
            <Post title="Python Workshop Recap" desc="Highlights from our recent Python workshop" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}
