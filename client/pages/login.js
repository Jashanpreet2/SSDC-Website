import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { 
    MDBContainer,
    MDBInput,
    MDBBtn
} from "mdb-react-ui-kit";

export default function Login() {
    const {
        register,
        handleSubmit,
        reset
    } = useForm({
        defaultValues: {
            userName: '',
            password: ''
        },
    });
    const [error, setError] = useState('');
    const router = useRouter();

    const submitForm = async data => {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data }),
            });
            reset({
                userName: '',
                password: '',
            });
            if (res.ok) {
                setError('');
                router.push('/admin/');
            } else {
                setError('User name and/or Password entered is not correct');
            }
        } catch (err) {
            console.error('An error occurred:', err);
        }
    };

    return (
        <MDBContainer
        fluid
        className="d-flex justify-content-center align-items-center vh-100 text-white"
        >
            <MDBContainer
                className="rounded-5 w-100 p-5"
                style={{ maxWidth: '650px', backgroundColor: 'black' }}
            >
                <h1 className="mb-6 text-center">Login As Admin</h1>

                {error != "" && <h2>{ error }<br /><br /></h2>}

                <form onSubmit={handleSubmit(submitForm)} style={{ width: '100%', margin: '0 auto' }}>
                    <MDBInput
                        className="mb-4"
                        label="User Name"
                        id="userName"
                        type="text"
                        labelStyle={{ color: 'white' }}
                        style={{ color: 'white', width: '100%' }}
                        {...register('userName', { required: true })}
                    />

                    <MDBInput
                        className="mb-4"
                        label="Password"
                        id="password"
                        type="password"
                        labelStyle={{ color: 'white' }}
                        style={{ color: 'white' }}
                        {...register('password', { required: true })}
                    />

                    <div className="d-flex justify-content-center">
                        <MDBBtn
                        className="mb-2"
                        type="submit"
                        style={{ fontSize: '1rem', padding: '0.5rem 3rem', textTransform: 'none' }}
                        >
                            Log In
                        </MDBBtn>
                    </div>
                </form>
            </MDBContainer>
        </MDBContainer>
    );
}
