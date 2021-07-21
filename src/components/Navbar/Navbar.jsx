import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import MoreIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import { Link } from 'gatsby'

import logoImg from "../../assets/img/logo.png"
import MenuLeftImg from "../../assets/img/menu-left.png"
import styles from "../../assets/jss/components/navbarStyles"

const useStyles = makeStyles(styles)

function Navbar() {

    const classes = useStyles();
    
    const [ openMenu, setOpenMenu ] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setOpenMenu(open)
    }

    return (
        <div className={ classes.grow }>
            <AppBar position="absolute" className={ classes.navbarWrapper }>
                <Toolbar className={ classes.toolbar }>
                    <Link to="/" >
                        <img src={ logoImg } alt="Logo" decoding="async" className={ classes.logo } />
                    </Link>
                    
                    <div className={ classes.grow } />
                    <div className={ classes.sectionDesktop }>
                        <Link to="/out-story" className={ window.location.href.indexOf('out-story') > -1 ? classes.active + " " + classes.navLink : classes.navLink }>About us</Link>
                        <Link to="/contact" className={ window.location.href.indexOf('contact') > -1 ? classes.active + " " + classes.navLink : classes.navLink }>Contact us</Link>
                        <Link to="/#" className={ classes.navLink}>Get the app</Link>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            color="inherit"
                            className={ classes.searchBtn }
                        >
                            <SearchIcon fontSize="large" className={ classes.searchIcon } />
                        </IconButton>
                        <img src={ MenuLeftImg } className={ classes.menuLeft } />
                    </div>
                    <div className={ classes.sectionMobile }>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={ toggleDrawer(true) }
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>  
            <Drawer anchor='left' open={ openMenu } onClose={ toggleDrawer(false) }>
                <div
                    className={ classes.list }
                    role="presentation"
                    onClick={ toggleDrawer(false) }
                    onKeyDown={ toggleDrawer(false) }
                    >
                    <Link to="/" >
                        <img src={ logoImg } alt="Logo" decoding="async" className={ classes.logoMobile } />
                    </Link>
                    
                    <List>
                        <ListItem button>
                            <Link to="/out-story"className={ classes.navLink } >About us</Link>
                        </ListItem>
                        <ListItem button>
                            <Link to="/contact"className={ classes.navLink } >contact us</Link>
                        </ListItem>
                        <ListItem button>
                            <Link to="#"className={ classes.navLink } >get the app</Link>
                        </ListItem>
                        <ListItem button>
                            <SearchIcon fontSize="large"/>
                        </ListItem>
                        <ListItem button>
                            <img src={ MenuLeftImg } className={ classes.menuLeft } />
                        </ListItem>
                    </List>
                </div>
            </Drawer>        
        </div>
    )
}

export default Navbar

