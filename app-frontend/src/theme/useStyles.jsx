import { createTheme } from '@mui/material';
import {makeStyles} from '@mui/styles';

const theme = createTheme();

const useStyles = makeStyles({
    containermt: {
        marginTop: 30
    },
    containermt_white: {
        marginTop: "30px !important",
        paddingTop: "30px !important",
        backgroundColor: '#f2f2f2',
        paddingBottom: "30px !important",
        
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
    iconSize: {
        paddingBottom: '4px !important',
    },
    form: {
        marginTop: 40,
        marginBottom: 10
    },
    gridmb: {
        marginBottom: '20px !important'
    },
    gridmbOrden: {
        marginBottom: '20px !important',
        backgroundColor: '#f2f2f2',
    },
    flexgrid:{
        display: "flex !important",
        alignItems: "center !important",
        justifyContent: "space-between !important",
        marginBottom: "20px !important"
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
    appBarDesktop: {
        paddingTop: '0px !important',
        paddingBottom: '8px !important',
        backgroundColor: '#430B86 !important',
        color: '#fff !important',
        textDecoration: "none !important",
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
    adminBar:{
        marginTop: '-10px !important',
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
        marginTop: '-8px !important',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    text_title: {
        fontWeight: '600 !important',
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
    },
    PaperImg: {
        backgroundColor: '#f2f2f2',
    },
    mediaDetalle:{
        width: 380,
        height: 380,
        margin: "auto"
    },
    text_detalle:{
        fontWeight: '500',
        color: '#fff',
        marginBottom: 5
    },
    imgProductoCC:{
        backgroundColor: '#f2f2f2',
        width: 80,
        height: 70
    },
    paperPadding:{
        padding: 20
    },
    paperPaddingOrden:{
        marginTop: "20px !important",
        padding: 20,
        backgroundColor: '#f2f2f2'
    },
    text_carrito:{
        fontWeight: '600',
        color: '#000',
        marginBottom: '10px'
    },
    gridPC : {
        margin: 'auto',
        marginTop: 20,
        backgroundColor: '#f2f2f2',
        color: '#000',
        padding: 20
    },
    buttonAnterior:{
        marginRight: "8px !important",
    },
    formControl:{
        margin: theme.spacing(1) + " !important",
        minWidth: "120px !important",
    },
    gridLR:{
        paddingLeft: 30,
        paddingBottom: 20,
        paddingRight: 30
    },
    divider : {
        marginTop:12,
        marginBottom:12
    },
    imgProductoPC : {
        backgroundColor: "#f2f2f2",
        width: 50,
        height:40,
    },
    text_envio : {
        lineHeight: 3
    },
    alertNotDelivered : {
        marginTop: 5,
        padding: "15px 15px 15px 15px",
        marginBottom: 20,
        backgroundColor: "#d98d8d",
    },
    alertDelivered :{
        marginTop: 5,
        padding: "15px 15px 15px 15px",
        marginBottom: 20,
        backgroundColor: "#9bc190",
        color: "#0f80aa"
    },
    imageUploader : {
        padding: 0,
        margin: "-25px auto 15px",
        width: 0
    },
    imageUploaderPerfil : {
        width: 0 + " !important",
    },
    avatarPerfil : {
        width: 80 + "px !important",
        height: 80 + "px !important",
        backgroundColor: "#0f80aa !important"
    },
    perfilSection:{
        backgroundColor: "#f2f2f2",
        marginTop: 30
    },
    table: {
        border: "1px solid #e0e0e0",

    },
    iconDelivered : {
        color: "#9bc190",
        fontWeight: "900 !important",
    },
    iconNotDelivered : {
        color: "#d98d8d",
        fontWeight: "900 !important",
    },
    avatarPerfilAppBar : {
        marginRight: 8,
        backgroundColor: "#f2f2f2",
    },
    listSubItem : {
        padding: "0 0 0 30px",
    },
    checkbox: {
        display: "block !important",
        padding: "0px !important",
        marginTop: "5px !important",
        marginBottom: "5px !important",
    },
    buttonAgregar : {
        float: "right !important",

    },
    avatarProducto: {
        width: "175px !important",
        height: "175px !important",
        backgroundColor: "#0f80aa"
    }
})

export default useStyles;