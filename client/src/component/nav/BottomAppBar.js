import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import theme from '../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from '../../components/navbar';
import { Button } from '@material-ui/core';
import Pagebar from '../../components/pagebar';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "white",
        flexGrow: 1,
    },
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    typography: {
        fontFamily: [
            'Shrikhand',
            'cursive',
        ]
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },

        flexGrow: 1,
        alignSelf: 'flex-end',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: (theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
}),
)

export default function BottomAppBar() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorel2, setAnchorel2] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isPageMenuOpen = Boolean(anchorel2);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuOpen = (event) => {
        setAnchorel2(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setAnchorel2(null);
    };
    const menuId = 'primary-search-account-menu';
    const menuPage = 'primary-page-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}><Navbar /></MenuItem>
        </Menu>
    );

    return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    edge="end"
                    aria-label="show more"
                    aria-haspopup="true"
                    aria-controls={menuPage}
                    color="inherit"
                    onClick={handleMenuOpen}
                >
                <MenuIcon />
                </IconButton>
                <Menu 
                    id="pageMenu"
                    open={isPageMenuOpen}
                    anchorel2={anchorel2}
                    keepMounted
                    onClose={handleMenuClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{
                        left: 0,
                        top: 650,
                    }}
                >
                <MenuItem onClick={handleMenuClose}><Pagebar/></MenuItem>
                </Menu>
                <IconButton color="inherit">
                    <div className={classes.searchIcon}></div>
                     

                </IconButton>
                <ThemeProvider theme={theme}>
                    <Button 
                        className={classes.root}
                        href={`/home`}
                        variant="primary"
                        type="submit">
                        <Typography className={classes.title} variant="h3">
                            Train of Thought
                        </Typography>
                            </Button>
                        </ThemeProvider>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            aria-controls={menuId}
                            color="inherit"
                            onClick={handleProfileMenuOpen}
                        >
                            <AccountCircle />
                            Account
                        </IconButton>
                      </Toolbar>
                </AppBar>
                {renderMenu}
            </ThemeProvider>
        </React.Fragment>
    );
}

