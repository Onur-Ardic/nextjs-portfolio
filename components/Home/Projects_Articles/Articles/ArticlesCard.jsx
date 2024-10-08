'use client'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import MuiButton from '@/components/Uİ/MuiButton'
import ClearIcon from '@mui/icons-material/Clear'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'

export default function ArticleCard({ article }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    setUser(storedUser)
  }, [])
  const deleteHandler = (id) => {
    fetch(`https://nextjs-portfolio-db.vercel.app/Articles/${id}`, {
      method: 'DELETE',
    }).then(() => {
      toast.success('Article deleted successfully')
    })
  }
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      {user && (
        <button onClick={() => deleteHandler(article.id)}>
          <ClearIcon />
        </button>
      )}
      <img src={article.img} alt="" />
      <CardContent>
        <Typography gutterBottom variant="p" component="p">
          {article.title}
        </Typography>
      </CardContent>
      <CardActions>
        <MuiButton link={article.link} text={'Read Article'} variant={'outlined'} />
      </CardActions>
    </Card>
  )
}
