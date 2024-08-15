import React from 'react'
import { Container, Typography, Box } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '16px 0',
        position: 'absolute',
        bottom: '-10%',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()}|| Eğer ruhun şarkı söylemeye devam ederse hayat seni her
          zaman dansa kaldırır. Hepimiz çukurdayız ama bazılarımız yıldızlara bakıyor...
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
