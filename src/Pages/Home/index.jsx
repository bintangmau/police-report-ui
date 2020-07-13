import React from 'react'

// COMPONENTS
import Navbar from '../../Components/Navbar'

// MATERIAL UI
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useTheme } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// MATERIAL UI ICON
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import SettingsIcon from "@material-ui/icons/Settings";
// import ContactsIcon from '@material-ui/icons/Contacts';
// import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

// STYLE
import './style.css'
import useStyles from './style'


function Home () {

    const classes = useStyles();
    const theme = useTheme();


    const drawer = (
        <div >
        <div className={classes.toolbar} />
            <div className={classes.imgContainer}>
            {/* <img src={logoSgu} className={classes.logosgu} alt="img" /> */}
                <div className="logo-acaraku-img-1">
                    {/* <img onClick={()=>{toHome()}} src={logo} style={{ width: 150, cursor: "pointer"}} alt="logo"/> */}
                </div>
            </div>

            <List>
                
                <ListItem 
                    button 
                    className={classes.sidebar}
                    // style={
                    //         {
                    //             backgroundColor: cekPathname() ? '#fff9f6' : '',
                    //             // borderLeft : history.location.pathname === dataRouter[1] ?"4px solid #f16821" : ""
                    //         }
                    //     }
                    // onClick={() => [handleClick(dataRouter[1]), localStorage.setItem('from', dataRouter[1])] }
                >
                    <ListItemIcon>
                        {/* <ContactsIcon  style={{color : cekPathname() ? "#f16821" : "" , marginLeft : "5px" , marginRight : "8px"}}/> */}
                    </ListItemIcon>
                    <p 
                        className={classes.sidebarText}
                        // style={{color : cekPathname() ? '#f16821' : "#888888"}}
                    > 
                        Lihat Daftar Undangan 
                    </p>
                </ListItem>

            </List>
        </div>
    );


    return (
        <div 
            className={classes.root} 
        >
            <CssBaseline />
            <nav className={classes.drawer} aria-label="mailbox folders" >
                <Hidden smUp implementation="css">
                    <Drawer
                        // container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        // open={mobileOpen}
                        // onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                        paper: classes.drawerPaper
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

        </div>
    )

}

export default Home