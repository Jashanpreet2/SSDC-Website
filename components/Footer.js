import { useForm } from 'react-hook-form';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBTextArea,
} from 'mdb-react-ui-kit';
import ChatBotToggler from './ChatBotToggler';

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const submitForm = (data) => {}

  return (
    <MDBFooter>
      <ChatBotToggler/>
      <MDBContainer className="p-4 bg-dark text-white" fluid>
        <section className="">
          <MDBRow>
            <MDBCol lg="3">
              <span>E: info.ssdcseneca@gmail.com</span>
              <br />
              <span>Seneca Software Developers Club</span>
              <br />
              <br />
              <span>1750 Finch Avenue East</span>
              <br />
              <span>Toronto Ontario M2J 2X5</span>
              <br />
              <span>Canada</span>
              <br />
            </MDBCol>
            <MDBCol lg="3"></MDBCol>
            <MDBCol lg="6" className="mt-lg-0 mt-md-4">
              <form onSubmit={handleSubmit(submitForm)}>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput
                      label="Name"
                      type="text"
                      contrast
                      {...register('name', { required: true })}
                    />
                    {errors.name?.type === 'required' && (
                      <span className="text-red">
                        <br />
                        Name is required
                      </span>
                    )}
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      type="email"
                      label="Email Address"
                      contrast
                      {...register('email', { required: true })}
                    />
                    {errors.email?.type === 'required' && (
                      <span className="text-red">
                        <br />
                        Email is required
                      </span>
                    )}
                  </MDBCol>
                </MDBRow>
                <MDBTextArea
                  className="mb-4"
                  label="Message"
                  contrast
                  type="text"
                  size="lg"
                  {...register('message', { required: true })}
                />
                {errors.message?.type === 'required' && (
                  <span className="text-red">
                    <br />
                    Message is required
                  </span>
                )}
                <MDBBtn className="mb-4" type="submit" block>
                  Submit
                </MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </section>

        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://x.com/campusgroups"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.instagram.com/seneca_sdc/"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.linkedin.com/company/seneca-software-developers-club/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  )
}
