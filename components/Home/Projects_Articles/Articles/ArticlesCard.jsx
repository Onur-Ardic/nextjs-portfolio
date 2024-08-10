import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import MuiButton from '@/components/Uİ/MuiButton'

export default function ArticleCard({ article }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
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
