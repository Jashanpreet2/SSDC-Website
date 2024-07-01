import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBTextArea,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UpdateForm() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type')
    const id = searchParams.get('id')
    const router = useRouter();
    console.log(router);

    const {data, error} = useSWR(`/api/${type}/${id}`, fetcher);
    const { register, handleSubmit, reset } = useForm();

    const submitForm = (data) => {
        console.log(data);
    };

    return (type && id)?(
        <MDBContainer
            fluid
            className="d-flex justify-content-center align-items-center vh-100 text-white"
        >
            <MDBContainer
                className="rounded-5 w-100 p-5"
                style={{ maxWidth: '650px', backgroundColor: 'black' }}
            >
                <h1 className="mb-6 text-center">Update {type.charAt(0).toUpperCase() + type.substring(1)}</h1>
        
                <form onSubmit={handleSubmit(submitForm)} style={{ width: '100%', margin: '0 auto' }}>
                    <MDBInput
                        className="mb-4"
                        label="Heading"
                        id="heading"
                        type="text"
                        value={data?.heading}
                        labelStyle={{ color: 'white' }}
                        style={{ color: 'white', width: '100%' }}
                        {...register('heading', { required: true })}
                    />
        
                    <MDBInput
                        className="mb-4"
                        label="Author"
                        id="author"
                        type="text"
                        value={data?.author}
                        labelStyle={{ color: 'white' }}
                        style={{ color: 'white' }}
                        {...register('author', { required: true })}
                    />
        
                    <MDBRow className="mb-4">
                        <MDBCol xs="12" md="5" className="mb-md-0 mb-4">
                            <div className="bg-secondary rounded-5 p-3" style={{ width: '100%' }}>
                                <h5 className="mb-3">Tags</h5>
                                {data?.tags.map((val, idx) => (
                                    <div key={idx} className="mb-3">
                                        <MDBCheckbox
                                            name={'tags.' + val}
                                            id={val}
                                            label={val.char(0).toUpperCase() + val.substring(1)}
                                            checked={true}
                                        />
                                    </div>
                                ))}
                            </div>
                        </MDBCol>
        
                        <MDBCol xs="12" md="7" className="d-flex flex-column justify-content-center">
                            <div className="mb-4" style={{ width: '100%' }}>
                                <label htmlFor="date" className="form-label" style={{ color: 'white' }}>
                                Select Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    className="form-control"
                                    value={data?.date}
                                    required
                                    style={{ width: '100%' }}
                                />
                            </div>
                            </MDBCol>
                        </MDBRow>
        
                        <MDBTextArea
                            className="mb-8"
                            label="Content"
                            id="content"
                            labelStyle={{ color: 'white' }}
                            style={{ color: 'white', width: '100%' }}
                            value={data?.content}
                            required
                            rows={4}
                        />
        
                        <div className="d-flex justify-content-center">
                            <MDBBtn
                                className="mb-2"
                                type="submit"
                                style={{ fontSize: '1rem', padding: '0.5rem 3rem', textTransform: 'none' }}
                            >
                                {"Update" + type.charAt(0).toUpperCase() + type.substring(1)}
                            </MDBBtn>
                        </div>
                </form>
            </MDBContainer>
        </MDBContainer>
    ):"Please wait";
}