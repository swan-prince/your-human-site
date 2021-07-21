const navbarStyles = (theme) => ({
    grow: {
        flexGrow: 1,
    },
        menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    navbarWrapper: {
        paddingTop: "38px",
        background: "unset",
        boxShadow: "none"
    },
    toolbar: {
        paddingRight: "70px",
        paddingLeft: "70px",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "30px",
            paddingRight: "20px"
        }
    },
    logo: {
        width: "154px",
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            width: "80px"
        }
    },
    navLink: {
        fontSize: "21px",
        color: "white",
        textDecoration: "none",
        position: "relative",
        textTransform: "uppercase",
        marginLeft: "45px",
        [theme.breakpoints.down('sm')]: {
            color: "black",
            marginLeft: "0"
        },
    },
    active: {
        '&::after': {
            content: `''`,
            position: "absolute",
            width: "100%",
            height: "3px",
            borderRadius: "2px",
            left: "0",
            bottom: "-8px",
            backgroundColor: "#DA832C"
        }
    },
    searchBtn: {
        padding: "0",
        marginLeft: "82PX",
        marginRight: "48px",
        "& .MuiIconButton-label": {
            width: "30px",
            height: "25px"
        }
    },
    menuLeft: {
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            filter: "invert(1)",
            marginLeft: "4px"
        }
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    logoMobile: {
        width: "80px",
        marginLeft: "16px",
        marginTop: "20px"
    }
})

export default navbarStyles
