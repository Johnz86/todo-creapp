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
import Home from '@material-ui/icons/Home';
import Todos from '../features/todos/components/todo-view';
import withRoot from '../withRoot';
import { mailFolderListItems } from './list-items';
import { Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
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
                <div className={classes.toolbar} />
                <Divider />
                <List>{mailFolderListItems}</List>
            </div>
        );
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle} className={classes.navIconHide}>
                            <Home />
                        </IconButton>
                        <Typography variant="subtitle1" color="inherit" noWrap={true}>Simple ToDo</Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    <Hidden mdUp={true}>
                        <Drawer variant="temporary"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{ paper: classes.drawerPaper }}
                            ModalProps={{ keepMounted: true }}>
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden smDown={true} implementation="css">
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