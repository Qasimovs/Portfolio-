import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            Logo
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, gap: 4 }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              <Typography variant="h6">Home</Typography>
            </Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
              <Typography variant="h6">About</Typography>
            </Link>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
              <Typography variant="h6">Contact</Typography>
            </Link>
          </Box>

          <Box sx={{display:"flex",maxWidth:"1400px", flexWrap:"wrap",gap:"40px",justifyContent:"center"}}>
            <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>
              Admin
            </Link>
            <Link to="/wishlist" style={{ color: 'white' }}>
              <FavoriteIcon />
            </Link>
            <Link to="/basket" style={{ color: 'white' }}>
              <ShoppingCartIcon />
            </Link>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}