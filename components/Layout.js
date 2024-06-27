import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { MDBContainer } from 'mdb-react-ui-kit'
import MainNavbar from './MainNavbar'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <>
      <MainNavbar currentPage={props.currentComp} />
      <br />
      <MDBContainer>{props.children}</MDBContainer>
      <br />
      <Footer />
    </>
  )
}
