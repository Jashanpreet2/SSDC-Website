import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
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
    const type = searchParams.get('type');
    const id = searchParams.get('id');
    const router = useRouter();

    const {data, error} = useSWR(`/api/${type}/${id}`, fetcher);
    const [ heading, setHeading ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ content, setContent ] = useState('');
    const [ date, setDate ] = useState('');
    const [ tags, setTags ] = useState([]);

    useEffect(() => {
        setContent(data?.content);
        setTags(data?.tags.map(ele => ({name: ele, checked: true })));
        setDate(data?.date);
        setHeading(data?.heading);
        setAuthor(data?.author);
    }, [data]);

    const submitForm = async (e) => {
        e.preventDefault();
        const newTags = tags.map(({name, checked}) => {
            if (checked) {
                return name;
            }
        });
        console.log(newTags);
        try {
            const res = await fetch(`/api/${type}/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    heading, author, date, content,  tags: newTags
                })
            });
            if (res.ok) {
                console.log('data-updated');
                router.push('/admin/');
            }
        } catch (err) {
            console.error('error occurred ', err);
        } 
    };

    return (type && id && data)?(
        <MDBContainer
            fluid
            className="d-flex justify-content-center align-items-center vh-100 text-white"
        >
            <MDBContainer
                className="rounded-5 w-100 p-5"
                style={{ maxWidth: '650px', backgroundColor: 'black' }}
            >
                <h1 className="mb-6 text-center">Update {type.charAt(0).toUpperCase() + type.substring(1)}</h1>
        
                <form onSubmit={(e) => { submitForm(e) }} style={{ width: '100%', margin: '0 auto' }}>
                    <MDBInput
                        className="mb-4"
                        label="Heading"
                        id="heading"
                        type="text"
                        value={heading}
                        onChange={(e) => {setHeading(e.target.value)}}
                        labelStyle={{ color: 'white' }}
                        style={{ color: 'white', width: '100%' }}
                        required
                    />
        
                    <MDBInput
                        className="mb-4"
                        label="Author"
                        id="author"
                        type="text"
                        value={author}
                        onChange={(e) => {setAuthor(e.target.value)}}
                        labelStyle={{ color: 'white' }}
                        style={{ color: 'white' }}
                        required
                    />
        
                    <MDBRow className="mb-4">
                        <MDBCol xs="12" md="5" className="mb-md-0 mb-4">
                            <div className="bg-secondary rounded-5 p-3" style={{ width: '100%' }}>
                                <h5 className="mb-3">Tags</h5>
                                {tags?.map((val, idx) => (
                                    <div key={idx} className="mb-3">
                                        <MDBCheckbox
                                            name={'tags.' + val.name}
                                            id={val.name}
                                            label={val.name.charAt(0).toUpperCase() + val.name.substring(1)}
                                            checked={val.checked}
                                            onClick={() => { setTags(tags.map(ele => {
                                                if (ele.name == val.name) {
                                                    return {name: ele.name, checked: !ele.checked};
                                                }
                                                return ele;
                                            })) }}
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
                                    value={date?new Date(date).toISOString().split('T')[0]:""}
                                    onChange={(e) => { setDate(e.target.value)} }
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
                        value={content}
                        onChange={(e) => { setContent(e.target.value) }}
                        required
                        rows={4}
                    />
    
                    <div className="d-flex justify-content-center">
                        <MDBBtn
                            className="mb-2"
                            type="submit"
                            style={{ fontSize: '1rem', padding: '0.5rem 3rem', textTransform: 'none' }}
                        >
                            {"Update " + type.charAt(0).toUpperCase() + type.substring(1)}
                        </MDBBtn>
                    </div>
                </form>
            </MDBContainer>
        </MDBContainer>
    ):"Please wait";
}