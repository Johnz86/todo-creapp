import * as React from 'react';

import AppBar from '@material-ui/core/AppBar/AppBar';
import Divider from '@material-ui/core/Divider/Divider';
import Drawer from '@material-ui/core/Drawer/Drawer';
import Hidden from '@material-ui/core/Hidden/Hidden';
import IconButton from '@material-ui/core/IconButton/IconButton';
import List from '@material-ui/core/List/List';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Todos from '../features/todos/components/todo-view';
import withRoot from '../withRoot';
import { mailFolderListItems } from './list-items';
import { Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import LogoImage from '../logo_bright.png';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    logo: {
        maxHeight: '40px',
        margin: '10px 35px 0px 35px'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
});

export interface AppState {
    mobileOpen: boolean;
}


type AppStyled = WithStyles<typeof styles>;


class App extends React.Component<AppStyled, AppState> {
    public state = {
        mobileOpen: true,
    };

    public render() {
        const { classes } = this.props;
        const drawer = (
            <div>
                <div className={classes.toolbar}>
                    <Link to="/" title="Go to Application Home page">
                        <img src={LogoImage} className={classes.logo} alt="Siemens Healthineers logo" />
                    </Link>
                </div>
                <Divider />
                <List>{mailFolderListItems}</List>
            </div>
        );
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap={true}>Simple ToDo</Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    <Hidden smUp implementation="css">
                        <Drawer variant="temporary"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{ paper: classes.drawerPaper }}
                            ModalProps={{ keepMounted: true }}>
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            variant="permanent"
                            open={true}
                            classes={{ paper: classes.drawerPaper }}>
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Todos />
                </main>
            </div>
        );
    }
    private handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
}

export default withRoot(withStyles(styles)(App));