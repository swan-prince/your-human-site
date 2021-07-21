const leftContentWrapperStyles = theme => ({
    leftContentWrapper: {
        width: "47.55%",
        backgroundColor: "#000",
        height: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            minHeight: "100vh"
        }
    },
    pageTitle: {
        color: "white",
        fontSize: "60px",
        marginTop: "0px",
        marginBottom: "0px",
        [theme.breakpoints.down('xs')]: {
            fontSize: "50px"
        }
    },
    contentWrapper: {
        color: "white",
        paddingLeft: "5.2vw",
        paddingRight: "4.2vw",
        paddingTop: "210px",
        paddingBottom: "100px",
        [theme.breakpoints.down('sm')]: {
            paddingTop: "150px",
            paddingBottom: "40px",
        }
    }
})

export default leftContentWrapperStyles
