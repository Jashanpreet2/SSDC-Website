import { useState } from 'react';
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
    MDBModalFooter,
    MDBInputGroup,
    MDBCard,
    MDBCardBody,
} from "mdb-react-ui-kit";

export default function ChatBotToggler() {
    const [chats, setChats] = useState([]);
    const [ques, setQues] = useState('');
    const [scrollableModal, setScrollableModal] = useState(false);

    const manageChat = () => {
        if (ques) {
            let userChat = {
                msg: ques,
                ifUser: true
            };
            /* Chatbot Data */
            let chatBotChat = {
                msg: "",
                ifUser: false
            }
            setChats([...chats, userChat, chatBotChat]);
            // console.log(ques);
            // console.log(chats);
            setQues("");
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
                        <MDBBtn onClick={() => setScrollableModal(!scrollableModal)} size='lg' tag='a' color='dark' outline floating>
                            <MDBIcon fas icon='robot' />
                        </MDBBtn>
                        <br />
                        <br />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBModal open={scrollableModal} onClose={() => setScrollableModal(false)} tabIndex='-1'>
                <MDBModalDialog scrollable>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>DevClub Chatbot</MDBModalTitle>
                            <MDBBtn
                                className='btn-close'
                                color='none'
                                onClick={() => setScrollableModal(false)}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
                                <MDBRow className="d-flex justify-content-center">
                                    <MDBCol md="10" lg="8" xl="6">
                                        <MDBCard id="chat2" style={{ borderRadius: "15px" }}>
                                            <MDBCardBody>
                                                {chats.map((chat, idx) => {
                                                    //console.log(chat.msg);
                                                    if (chat.ifUser) {
                                                        return (
                                                            <div key={idx} className="d-flex flex-row justify-content-end">
                                                                <div>
                                                                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                                                        {chat.msg}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                    else {
                                                        return (
                                                            <div key={idx} className="d-flex flex-row justify-content-start mb-4">
                                                                <div>
                                                                    <p
                                                                        className="small p-2 ms-3 mb-1 rounded-3"
                                                                        style={{ backgroundColor: "#f5f6f7" }}
                                                                    >{chat.msg}</p>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBInputGroup className='mb-3'>
                                <input className='form-control' value={ques} placeholder="Question" type='text' onChange={(e) => {setQues(e.target.value)}} />
                                <MDBBtn outline onClick={manageChat}>Send</MDBBtn>
                            </MDBInputGroup>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
