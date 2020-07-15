import React from 'react'
import { Switch, Route ,  useHistory } from 'react-router-dom'

// COMPONENTS
import Navbar from '../../Components/Navbar'
import ViewReport from '../../Components/ViewReport'
import ViewReportB from '../../Components/ViewReportB'
import InputReportA from '../../Components/InputReportA'
import InputReportB from '../../Components/InputReportB'
import InputPersonil from '../../Components/InputPersonil'
import Profile from '../Profile'

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
    const history = useHistory()
    const route = history.location.pathname

    const drawer = (
        <div >
        <div className={classes.toolbar} />
            <div className={classes.imgContainer}>
            {/* <img src={logoSgu} className={classes.logosgu} alt="img" /> */}
                <div style={{marginBottom : 30}}>
                    <img src={Logo} style={{ width: 120, cursor: "pointer"}} alt="logo"/>
                </div>
            </div>

            <List>
                
                <ListItem 
                    button 
                    className={classes.sidebar}
                    style={
                        {
                            backgroundColor : route === "/" ? "#00698C" : null
                        }
                    }
                    onClick={() => history.push('/') }
                >
                    <ListItemIcon>
                        <AssignmentIcon style={{color : route === "/" ? "white" : null}} />
                    </ListItemIcon>
                    <p 
                        className={classes.sidebarText}
                        // style={{color : cekPathname() ? '#f16821' : "#888888"}}
                        style={{ color : route === "/" ? 'white' : null }}
                    > 
                        Lihat Laporan A
                    </p>
                </ListItem>

                <ListItem 
                    button 
                    className={classes.sidebar}
                    style={
                        {
                            backgroundColor : route === "/viewreportb" ? "#00698C" : null
                        }
                    }
                    onClick={() => history.push('/viewreportb') }
                >
                    <ListItemIcon>
                        <AssignmentIcon style={{color : route === "/viewreportb" ? "white" : null}} />
                    </ListItemIcon>
                    <p 
                        className={classes.sidebarText}
                        // style={{color : cekPathname() ? '#f16821' : "#888888"}}
                        style={{ color : route === "/viewreportb" ? 'white' : null }}
                    > 
                        Lihat Laporan B
                    </p>
                </ListItem>

                <ListItem 
                    button 
                    className={classes.sidebar}
                    style={
                        {
                            backgroundColor : route === "/inputa" ? "#00698C" : null
                        }
                    }
                    onClick={() => history.push('/inputa') }
                >
                    <ListItemIcon>
                        <AssignmentIcon style={{color : route === "/inputa" ? "white" : null}} />
                    </ListItemIcon>
                    <p 
                        className={classes.sidebarText}
                        // style={{color : cekPathname() ? '#f16821' : "#888888"}}
                        style={{ color : route === "/inputa" ? 'white' : null }}
                    > 
                        Input Laporan A
                    </p>
                </ListItem>

                <ListItem 
                    button 
                    className={classes.sidebar}
                    style={
                        {
                            backgroundColor : route === "/inputb" ? "#00698C" : null
                        }
                    }
                    onClick={() => history.push('/inputb') }
                >
                    <ListItemIcon>
                        <AssignmentIcon style={{color : route === "/inputb" ? "white" : null}} />
                    </ListItemIcon>
                    <p 
                        className={classes.sidebarText}
                        // style={{color : cekPathname() ? '#f16821' : "#888888"}}
                        style={{ color : route === "/inputb" ? 'white' : null }}
                    > 
                        Input Laporan B
                    </p>
                </ListItem>

                <ListItem 
                    button 
                    className={classes.sidebar}
                    style={
                        {
                            backgroundColor : route === "/inputpersonil" ? "#00698C" : null
                        }
                    }
                    onClick={() => history.push('/inputpersonil') }
                >
                    <ListItemIcon>
                        <AssignmentIcon style={{color : route === "/inputpersonil" ? "white" : null}} />
                    </ListItemIcon>
                    <p 
                        className={classes.sidebarText}
                        // style={{color : cekPathname() ? '#f16821' : "#888888"}}
                        style={{ color : route === "/inputpersonil" ? 'white' : null }}
                    > 
                        Input Personil
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
                <Navbar />
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
                    <Route path="/" component={ViewReport} exact />
                    <Route path="/viewreportb" component={ViewReportB} />
                    <Route path="/inputa" component={InputReportA}/>
                    <Route path='/inputb' component={InputReportB} />
                    <Route path="/inputpersonil" component={InputPersonil}/>
                    <Route path='/profile' component={Profile}/>
                </Switch>
            </main>

        </div>
    )

}

export default Home