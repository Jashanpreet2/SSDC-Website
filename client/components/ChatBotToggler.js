import { useState } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBInputGroup,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit'

export default function ChatBotToggler() {
  const chatbotUrl = 'http://127.0.0.1:5000'
  const [chats, setChats] = useState([
    { msg: 'Hello, how can I assist you today?', ifUser: false },
  ])
  const [ques, setQues] = useState('')
  const [scrollableModal, setScrollableModal] = useState(false)

  const manageChat = async () => {
    if (ques) {
      let userChat = {
        msg: ques,
        ifUser: true,
      }
      let resp = await fetch(`${chatbotUrl}?query=${ques}`)
      let chatbotResponse = await resp.text()
      let chatBotChat = {
        msg: chatbotResponse,
        ifUser: false,
      }
      setChats([...chats, userChat, chatBotChat])
      // console.log(ques);
      // console.log(chats);
      setQues('')
    }
  }

  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol></MDBCol>
          <MDBCol></MDBCol>
          <MDBCol></MDBCol>
          <MDBCol></MDBCol>
          <MDBCol></MDBCol>
          <MDBCol></MDBCol>
          <MDBCol></MDBCol>
          <MDBCol>
            <MDBBtn
              onClick={() => setScrollableModal(!scrollableModal)}
              size="lg"
              tag="a"
              color="dark"
              outline
              floating
            >
              <MDBIcon fas icon="robot" />
            </MDBBtn>
            <br />
            <br />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBModal open={scrollableModal} onClose={() => setScrollableModal(false)} tabIndex="-1">
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader style={{ backgroundColor: '#1C0F13', color: 'white' }}>
              <MDBModalTitle>DevClub ChatBot</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setScrollableModal(false)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="p-0">
              <MDBCard style={{ borderRadius: '0' }}>
                <MDBCardBody style={{ height: '400px', overflowY: 'auto' }}>
                  {chats.map((chat, idx) => (
                    <div
                      key={idx}
                      className={`d-flex ${chat.ifUser ? 'justify-content-end' : 'justify-content-start'} mb-2`}
                    >
                      <div
                        style={{
                          backgroundColor: chat.ifUser ? '#ef4444' : '#e0e0e0',
                          color: chat.ifUser ? 'white' : 'black',
                          borderRadius: '10px',
                          padding: '8px 12px',
                          maxWidth: '70%',
                        }}
                      >
                        {chat.msg}
                      </div>
                    </div>
                  ))}
                </MDBCardBody>
              </MDBCard>
              <div className="p-3">
                <MDBInputGroup>
                  <input
                    className="form-control"
                    value={ques}
                    placeholder="Message"
                    type="text"
                    onChange={(e) => setQues(e.target.value)}
                  />
                  <MDBBtn onClick={manageChat} style={{ backgroundColor: '#ef4444' }}>
                    Send
                  </MDBBtn>
                </MDBInputGroup>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}
