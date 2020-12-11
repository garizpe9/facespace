import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles((theme) => ({
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
        typography: {
            fontFamily: [
              'Shrikhand',
              'cursive',
            ]
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
    }),
)

export default function BottomAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const menuId = 'primary-search-account-menu';
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
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="open drawer">
                    <MenuIcon />
                </IconButton>
                <IconButton color="inherit">
                    <div className={classes.searchIcon}></div>
                        <SearchIcon />
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                </IconButton>
                <div className={classes.grow} />
                <ThemeProvider theme={theme}>
                    <Typography className={classes.title} variant="h3">
                        Train of Thought
                    </Typography>
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
                </IconButton>
                <IconButton
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                >
                </IconButton>
            </Toolbar>
            </AppBar>
            {renderMenu}
        </ThemeProvider>
    </React.Fragment>
    );
}
