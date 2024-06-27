import { MDBBtn } from "mdb-react-ui-kit"

export default function Hero({imgUrl, url, head, subHead, action}) {
  return (
    <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url('${imgUrl}')`, height: '400px' }}
    >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
            <h1 className='mb-3'>{head}</h1>
            <h4 className='mb-3'>{subHead}</h4>
            <MDBBtn tag="a" outline size="lg" href={url}>
                {action}
            </MDBBtn>
            </div>
        </div>
        </div>
    </div>
  )
}