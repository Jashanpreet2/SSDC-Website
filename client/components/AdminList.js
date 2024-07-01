import useSWR from 'swr';
import { useRouter } from 'next/router';
import { 
    MDBContainer, 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

const fetcher = (url) => fetch(url).then((res) => res.json()); 

export default function AdminList({type = 'event'}) {
    const router = useRouter();
    const {data, error} = useSWR(`/api/${type}`, fetcher);

    const deleteCurrentData = async (id) => {
        try {
            await fetch(`/api/${type}/${id}`, {method: 'DELETE'});
            router.reload();
        } catch(err) {
            console.error('An error occurred:', err);
        }
    }

    return (
        <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {data?.map((ele) => (
                    <MDBCol>
                        <MDBCard style={{ maxWidth: '540px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                    <MDBCardImage src={ele.img?ele.img:"https://via.placeholder.com/540"} alt='...' fluid />
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                        <MDBCardTitle>{ele.heading}</MDBCardTitle>
                                        <MDBCardText>
                                        {ele.content.length <= 140? ele.content: ele.content.substring(0, 139) + '...'}
                                        </MDBCardText>
                                        <MDBContainer>
                                            <MDBRow>
                                                <MDBCol>
                                                    <MDBBtn
                                                        onClick={() => { 
                                                            router.push({
                                                                pathname: '/admin/update',
                                                                query: { type: `${type}`, id:`${ele._id}`}
                                                            })}
                                                        }
                                                        size="lg"
                                                        tag="a"
                                                        color="dark"
                                                        outline
                                                        floating
                                                        >
                                                        <MDBIcon fas icon="pen-square" />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol>
                                                    <MDBBtn
                                                        onClick={() => deleteCurrentData(ele._id)}
                                                        size="lg"
                                                        tag="a"
                                                        color="dark"
                                                        outline
                                                        floating
                                                        >
                                                        <MDBIcon fas icon="trash" />
                                                    </MDBBtn>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBContainer>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
  );
}
