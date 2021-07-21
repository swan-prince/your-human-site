import homePageBgImg from "../../img/home_page_bg.png"

const homePageStyles = (theme) => ({
    homeWrapper: {
        width: "100%",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundImage: `url(${ homePageBgImg })`,
        paddingBottom: "60px",
        [theme.breakpoints.down('xs')]: {
            paddingBottom: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }
    },
    contentWrapper: {
        paddingLeft: "11.3vw",
        paddingTop: "350px",
        [theme.breakpoints.down('xs')]: {
            paddingTop: "200px"
        }
    },
    firstLine: {
        color: "#C6782A",
        fontSize: "93px",
        marginTop: "0px",
        marginBottom: "0px",
        [theme.breakpoints.down('xs')]: {
            fontSize: "50px"
        }
    },
    secondLine: {
        fontSize: "93px",
        color: "white",
        marginTop: "0px",
        marginBottom: "0px",
        [theme.breakpoints.down('xs')]: {
            fontSize: "50px"
        }
    },
    subtitle: {
       fontSize: "21px",
       color: "#A8A8A8",
       [theme.breakpoints.down('xs')]: {
           fontSize: "16px"
       }
    },
    optioinsWrapper: {
        marginTop: "100px",
        [theme.breakpoints.down('xs')]: {
            marginTop: "50px"
        }
    },
    optionItem: {
        fontSize: "18px",
        color: "#C6782A",
        marginTop: "0",
        textTransform: "uppercase",
        position: "relative",
        paddingLeft: "66px",
        marginBottom: "34px",
        [theme.breakpoints.down('xs')]: {
            marginBottom: "18px",
            paddingLeft: "40px"
        },
        "&::after": {
            content: `''`,
            width: "45px",
            height: "2px",
            background: "#C6782A",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            position: "absolute",
            [theme.breakpoints.down('xs')]: {
                width: "20px",
            }
        }
    },
    followText: {
        fontSize: "18px",
        color: "#C6782A",
        position: "relative",
        "&::after": {
            content: `''`,
            position: "absolute",
            width: "45px",
            height: "2px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "#C6782A",
            right: "-53px",
            [theme.breakpoints.down('xs')]: {
                width: "20px",
                right: "-33px"
            }
        }
    },
    footerWrapper: {
        paddingLeft: "76px",
        marginTop: "140px",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            marginBottom: "20px",
            paddingLeft: "20px",
            marginTop: "30px"
        }
    },
    socialIcons: {
        marginLeft: "83px",
        display: "flex",
        [theme.breakpoints.down('xs')]: {
            marginLeft: "60px",
            alignItems: "center"
        }
    },
    socialIcon: {
        marginRight: "24px",
        [theme.breakpoints.down('xs')]: {
            width: "20px",
            height: "20px"
        }     
    }
})

export default homePageStyles
