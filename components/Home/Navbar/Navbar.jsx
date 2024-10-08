'use client'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import Link from 'next/link'

const drawerWidth = 240

function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Onur Ardıç
      </Typography>
      <Divider />
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography component={Link} href="/" fontWeight={600} color="purple">
          Home
        </Typography>

        <Typography component={Link} href="/pages/projects" fontWeight={600} color="purple">
          Projects
        </Typography>

        <Typography component={Link} href="/pages/articles" fontWeight={600} color="purple">
          Articles
        </Typography>
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Onur Ardıç
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '20px' }}>
            <ListItem disablePadding>
              <Typography component={Link} href="/" fontWeight={600} color="white">
                Home
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography component={Link} href="/pages/projects" fontWeight={600} color="white">
                Projects
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography component={Link} href="/pages/articles" fontWeight={600} color="white">
                Articles
              </Typography>
            </ListItem>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="secondary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

export default DrawerAppBar
