import { MDBTypography } from 'mdb-react-ui-kit'

export default function SectionHeader({ title, subtitle }) {
  return (
    <>
      <MDBTypography tag="h2" className="text-center">
        {title}
      </MDBTypography>

      {subtitle && (
        <MDBTypography tag="h4" className="text-center">
          {subtitle}
        </MDBTypography>
      )}
    </>
  )
}
