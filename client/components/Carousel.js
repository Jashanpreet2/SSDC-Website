import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit'

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img
          src="https://media.licdn.com/dms/image/D5622AQFyMXIR9dkNYw/feedshare-shrink_2048_1536/0/1711043766361?e=1722470400&v=beta&t=dfCXX025obsD-X63BDzp0PF3gNPqkkwwPNIRVRi5L-k"
          className="d-block h-10 w-100"
          alt="..."
          style={{objectFit: "cover", height: "572px"}}
        />
        <MDBCarouselCaption>
          <h5>Events & Activities</h5>
          <p>Participate in exciting events such as hackathons and group study sessions!</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          src="https://plus.unsplash.com/premium_photo-1663054914576-252d1479383e?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="d-block w-100"
          alt="..."
          style={{objectFit: "cover", height: "572px"}}
        />

        <MDBCarouselCaption>
          <h5>Exclusive Resources</h5>
          <p>Gain access to free resources provided by the club!</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="d-block w-100"
          alt="..."
          style={{objectFit: "cover", height: "572px"}}
        />
        <MDBCarouselCaption>
          <h5>Networking</h5>
          <p>Get to meet with and learn from like minded individuals!</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  )
}
