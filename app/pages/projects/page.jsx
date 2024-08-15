import { getRepos } from '@/service/api'
import * as React from 'react'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import MuiButton from '@/components/Uİ/MuiButton'
const page = async () => {
  const repos = await getRepos()

  return (
    <section className="project-page container mx-auto mt-32">
      <Typography variant="div" className="cardWrapper flex gap-10 flex-wrap justify-center">
        {repos.map((repos) => (
          <div className=" card border w-[300px] text-center" key={repos.id}>
            <CardContent>
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                {repos.name}
              </Typography>
              <Typography variant="p" component="div">
                {repos.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="div" className="mx-auto">
                <MuiButton link={repos.html_url} variant={'outlined'} text={'View Project'} />
              </Typography>
            </CardActions>
          </div>
        ))}
      </Typography>
    </section>
  )
}

export default page
