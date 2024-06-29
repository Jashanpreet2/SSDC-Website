import { MDBIcon } from 'mdb-react-ui-kit'

export default function IconList() {
  return (
    <section className="icon-list pt-5 text-center">
      <p>Follow us to learn more</p>
      <div>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <MDBIcon fab icon="linkedin-in" size="2x" className="me-4" />
        </a>
        <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">
          <MDBIcon fab icon="discord" size="2x" className="me-4" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <MDBIcon fab icon="instagram" size="2x" className="me-4" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <MDBIcon fab icon="youtube" size="2x" className="me-4" />
        </a>
      </div>
    </section>
  )
}
