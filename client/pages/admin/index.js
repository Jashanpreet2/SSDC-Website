import AdminList from "@/components/AdminList"
import { 
    MDBContainer,
    MDBCol,
    MDBRow
} from "mdb-react-ui-kit"

export default function Admin() {
  return (
    <>
        <MDBContainer className="my-lg-5 review-fs">
            <MDBRow className="align-items-center h-100">
                <MDBCol
                md="12"
                lg="6"
                className="order-lg-1 text-lg-start my-lg-0 order-2 mt-4 text-center"
                >
                    <h1>Welcome Admin</h1>
                    <p>Explore the list of Events/News</p>
                </MDBCol>
                <MDBCol md="12" lg="6" className="order-lg-2 h-100 order-1">
                    <img
                        src="https://via.placeholder.com/1000"
                        alt="Placeholder"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <h2 className="d-lg-block d-none mt-5 text-center">Event List</h2>
        <div className="mt-5">
            <AdminList/>
        </div>
        <h2 className="d-lg-block d-none mt-5 text-center">News List</h2>
        <div className="mt-5">
            <AdminList type='news'/>
        </div>
    </>
  )
}
