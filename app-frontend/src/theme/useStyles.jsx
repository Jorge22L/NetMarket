import { createTheme } from '@mui/material';
import {makeStyles} from '@mui/styles';

const theme = createTheme();

const useStyles = makeStyles({
    containermt: {
        marginTop: 30
    },
    card: {
        padding: 30
    },
    avatar: {
        backgroundColor: '#3a0ca3 !important',
        width: '80px !important',
        height: '80px !important',
    },
    icon: {
        fontSize: '26px !important',
    },
    form: {
        marginTop: 40,
        marginBottom: 10
    },
    gridmb: {
        marginBottom: '20px !important'
    },
    link: {
        marginTop: '8px !important',
        fontSize: "1.1rem !important",
        fontFamily: "Roboto !important",
        lineHeight: "1.5",
        color: theme.palette.primary.main,
        textDecoration: "none !important",
    },
    appBar: {
        paddingTop: '8px !important',
        paddingBottom: '8px !important',
        backgroundColor: '#430B86 !important'
    },
    grow: {
        flexGrow: 0,
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
        }
    },
    linkAppBarLogo: {
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: "1.1rem !important",
        fontFamily: "Roboto",
        color: "#fff",
        textDecoration: "none",
    },
    mr: {
        marginRight: '3px !important'
    },
    buttonIcon: {
        fontSize: '14px !important',
        padding : '0px !important',
    },
    linkAppBarDesktop: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 16px !important',
        fontSize: "1.1rem !important",
        fontFamily: "Roboto",
        textDecoration: "none",
        color: "#fff",
    },
    list: {
        width: 250,
    },
    listItem: {
        padding: 0,
    },
    linkAppBarMobile: {
        display: 'inline-flex',
        alignItems: 'center',
        width: '100%',
        padding: '8px 16px !important',
        fontSize: "1.1rem !important",
        fontFamily: "Roboto",
        textDecoration: "none",
    },
    listItemIcon: {
        minWidth: '35px !important',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },

    text_title: {
        fontWeight: '600',
        color: '#fff',
        marginBottom: '10px'
    },
    media: {
        height: 250,
        backgroundColor: "#f2f2f2",
        margin:"15px 15px 0px 15px"
    },
    text_card: {
        fontWeight: 'bold',
        color: "#656565",
        marginBottom: '8px'
    },
    price: {
        float: 'right',
        padding: '0px 20px 0px 20px',
        backgroundColor: "#0f80aa"
    }
})

export default useStyles;