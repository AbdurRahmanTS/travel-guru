import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageWhite from '../../Image/Logo-white.png';
import imageBlack from '../../Image/Logo-black.png';
import SearchIcon from '@material-ui/icons/Search';
import { fade, InputBase, makeStyles } from '@material-ui/core';
import './Header.css';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const loginImageStyle = {
  width: '40%'
}
const logoutImageStyle = {
  width: '70%'
}

const Header = ({ title }) => {
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);
  const classes = useStyles();
  return (
    <div className={'header'}>
      {
        title ? (
          <Navbar>
            <Navbar.Brand href="/">{loggedinUser.email ? <img style = {loginImageStyle} src={imageWhite} alt="" /> : <img style = {logoutImageStyle} src={imageWhite} alt="" />}</Navbar.Brand>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search your Destination..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Nav className="mr-auto navlist">
              <Nav.Link href="#" style={{ color: 'white' }}>News</Nav.Link>
              <Nav.Link href="#" style={{ color: 'white' }}>Destination</Nav.Link>
              <Nav.Link href="#" style={{ color: 'white' }}>Blog</Nav.Link>
              <Nav.Link href="#" style={{ color: 'white' }}>Contact</Nav.Link>
              {
                loggedinUser.name ? <h6 style={{ width: '140%' }}>{loggedinUser.name || loggedinUser.firstName + ' ' + loggedinUser.lastName}</h6> : <Nav.Link href="/signin"><Button variant="warning" style={{ width: '140%' }}>Sign In</Button></Nav.Link>
              }
            </Nav>
          </Navbar>
        ) : (
            <Navbar>
              <Navbar.Brand href="/">{loggedinUser.email ? <img style = {loginImageStyle} src={imageBlack} alt="" /> : <img style = {logoutImageStyle} src={imageBlack} alt="" />}</Navbar.Brand>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search your Destination..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <Nav className="mr-auto navlist">
                <Nav.Link href="#">News</Nav.Link>
                <Nav.Link href="#">Destination</Nav.Link>
                <Nav.Link href="#">Blog</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
                {
                loggedinUser.name ? <h6 style={{ width: '140%' }}>{loggedinUser.name || loggedinUser.firstName + ' ' + loggedinUser.lastName}</h6> : <Nav.Link href="/signin"><Button variant="warning" style={{ width: '140%' }}>Sign In</Button></Nav.Link>
              }
              </Nav>
            </Navbar>
          )
      }
    </div>
  );
};

export default Header;