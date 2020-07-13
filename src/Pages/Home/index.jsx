import React from 'react'
import { Switch, Route ,  useHistory } from 'react-router-dom'

// MATERIAL UI
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useTheme } from "@material-ui/core/styles";

// MATERIAL UI ICON
import AssignmentIcon from '@material-ui/icons/Assignment';

// STYLE
import './style.css'
import useStyles from './style'

// IMAGE
import Logo from '../../Images/Sidebar/musito.jpeg'


function Home () {

    const classes = useStyles();
    const theme = useTheme();


    const drawer = (
        <div >
        <div className={classes.toolbar} />
            <div className={classes.imgContainer}>
            {/* <img src={logoSgu} className={classes.logosgu} alt="img" /> */}
                <div style={{marginBottom : 30}}>
                    {/* <img onClick={()=>{toHome()}} src={logo} style={{ width: 150, cursor: "pointer"}} alt="logo"/> */}
                    <img src={Logo} style={{ width: 120, cursor: "pointer"}} alt="logo"/>
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
                        <AssignmentIcon />
                    </ListItemIcon>
                    <p 
                        className={classes.sidebarText}
                        // style={{color : cekPathname() ? '#f16821' : "#888888"}}
                    > 
                        Lihat Laporan
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
            <AppBar position="fixed" className={classes.appBar} style={{ boxShadow: 'none' }}>
                {/* NAVBAR DISINI <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<, */}
                <div style={{width : "100%" ,height : 100 , backgroundColor : "black"}}>

                </div>
            </AppBar>
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

            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Switch>
                    <Route path="/" />
                </Switch>
            </main>

        </div>
    )

}

export default Home