import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import appBarBackgroundImg from '../img/img2.jpg'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Links  from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundImage: `url(${'../img/img1.jpg'})`,
        backgroundSize: 'cover'
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    // cardHeader: {
    //     backgroundColor: 'white'
    //     // theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[100],
    // },
    // cardPricing: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'baseline',
    //     marginBottom: theme.spacing(2),
    // },
    // footer: {
    //     borderTop: `1px solid ${theme.palette.divider}`,
    //     marginTop: theme.spacing(8),
    //     paddingTop: theme.spacing(3),
    //     paddingBottom: theme.spacing(3),
    //     [theme.breakpoints.up('sm')]: {
    //         paddingTop: theme.spacing(6),
    //         paddingBottom: theme.spacing(6),
    //     },
    // },
}));


export const Header = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            {/* <Typography variant="h3" style={{ fontWeight: 'bold' }} color="inherit" noWrap className={classes.toolbarTitle}>
                ТОВ "ПРОМ ВДМ"
            </Typography> */}
            <AppBar position="static" style={{ backgroundImage: "url(" + appBarBackgroundImg + ")", backgroundBlendMode: 'soft-light' }}/*color="default"*/ elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h3" style={{ fontWeight: 'bold' }} color="inherit" noWrap className={classes.toolbarTitle}>
                        ТОВ "ПРОМ ВДМ"
                    </Typography>
                    <nav>
                        <Links variant="button" color="inherit" href="/" className={classes.link}>
                            УТИЛИЗАЦИЯ
                        </Links>
                        <Links variant="button" color="inherit" href="/buy" className={classes.link}>
                            ПОКУПАЕМ
                        </Links>
                        <Links variant="button" color="inherit" href="/about" className={classes.link}>
                            О НАС
                        </Links>
                    </nav>
                    <Button href="/contacts" color="inherit" variant="outlined" className={classes.link}>
                        КОНТАКТЫ
                    </Button>
                </Toolbar>
            </AppBar>



        </React.Fragment>
    )
}
