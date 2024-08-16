'use client'
import SimpleSnackbar from '@/components/Uİ/Snackbar'

import { TextField } from '@mui/material'
import { useState } from 'react'

const AddArticleForm = () => {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [result, setResult] = useState(null)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const newArticle = {
      img: image,
      title: title,
      link: link,
    }

    fetch('https://nextjs-portfolio-db.vercel.app/Articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newArticle),
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data)
        setSnackbarOpen(true)
      })
      .catch((error) => console.error('Error:', error))
  }

  return (
    <form onSubmit={handleSubmit} className="add-article-form mt-3 bg-slate-800 p-3 rounded-md">
      <h6 className="text-xl mb-3">Add Article Form</h6>
      <div className="form-inputs flex flex-col">
        <TextField
          id="outlined-basic"
          label="Article Image Url"
          variant="filled"
          sx={{ borderColor: 'white' }}
          onChange={(event) => setImage(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Article Title"
          variant="filled"
          className="mt-2"
          sx={{ borderColor: 'white' }}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Article Url Link"
          variant="filled"
          className="my-2"
          sx={{ borderColor: 'white' }}
          onChange={(event) => setLink(event.target.value)}
        />
        <button className="border p-1" type="submit">
          Add Article
        </button>
      </div>

      <SimpleSnackbar
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        text="Article added successfully!"
      />
    </form>
  )
}

export default AddArticleForm
