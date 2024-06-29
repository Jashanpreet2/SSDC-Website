import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBTextArea,
  MDBCheckbox,
} from 'mdb-react-ui-kit'

const CreateNewsArticle = () => {
  const { register, handleSubmit, reset } = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [date, setDate] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState({ news: false, update: false })

  const submitForm = async (data) => {
    let enabledTags = []
    for (let key in tags) {
      if (tags[key] == true) enabledTags.push(key)
    }
    console.log('Form Submitted', { ...data, date, content, tags: enabledTags })
    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, date, content, tags: enabledTags }),
      })

      if (res.ok) {
        setIsSubmitted(true)
        reset({
          heading: '',
          author: '',
          tags: {
            update: false,
            news: false,
          },
        })
        setTags({ news: false, update: false })
        setContent('')
        setDate('')
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        console.error('Failed to create news article')
      }
    } catch (err) {
      console.error('An error occurred:', err)
    }
  }

  return (
    <MDBContainer
      fluid
      className="d-flex justify-content-center align-items-center vh-100 text-white"
    >
      <MDBContainer
        className="rounded-5 w-100 p-5"
        style={{ maxWidth: '650px', backgroundColor: 'black' }}
      >
        <h1 className="mb-6 text-center">Create a News Article</h1>

        <form onSubmit={handleSubmit(submitForm)} style={{ width: '100%', margin: '0 auto' }}>
          <MDBInput
            className="mb-4"
            label="Heading"
            id="heading"
            type="text"
            labelStyle={{ color: 'white' }}
            style={{ color: 'white', width: '100%' }}
            {...register('heading', { required: true })}
          />

          <MDBInput
            className="mb-4"
            label="Author"
            id="author"
            type="text"
            labelStyle={{ color: 'white' }}
            style={{ color: 'white' }}
            {...register('author', { required: true })}
          />

          <MDBRow className="mb-4">
            <MDBCol xs="12" md="5" className="mb-md-0 mb-4">
              <div className="bg-secondary rounded-5 p-3" style={{ width: '100%' }}>
                <h5 className="mb-3">Tags</h5>
                <div className="mb-3">
                  <MDBCheckbox
                    name="tags.update"
                    id="update"
                    label="Update"
                    onChange={(e) => {
                      setTags({ ...tags, update: !tags.update })
                    }}
                    checked={tags.update}
                  />
                </div>
                <div className="mb-2">
                  <MDBCheckbox
                    name="tags.news"
                    id="news"
                    label="News"
                    onChange={(e) => {
                      setTags({ ...tags, news: !tags.news })
                    }}
                    checked={tags.news}
                  />
                </div>
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
            onChange={(e) => {
              setContent(e.target.value)
            }}
            value={content}
            required
            rows={4}
          />

          <div className="d-flex justify-content-center">
            <MDBBtn
              className="mb-2"
              type="submit"
              style={{ fontSize: '1rem', padding: '0.5rem 3rem', textTransform: 'none' }}
            >
              Add Article
            </MDBBtn>
          </div>
        </form>

        {isSubmitted && (
          <div className="mt-4 text-center" style={{ color: 'limegreen' }}>
            Article successfully submitted!
          </div>
        )}
      </MDBContainer>
    </MDBContainer>
  )
}

export default CreateNewsArticle