const rightContentWrapperStyles = theme => ({
    rightContentWrapper: {
        width: "52.45%",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: "50px",
        "&::before": {
            content: `''`,
            position: "absolute",
            width: "100%",
            height: "144px",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0))",
            left: "0",
            top: "0"
        },
        "&::after": {
            content: `''`,
            position: "absolute",
            width: "100%",
            height: "144px",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73))",
            left: "0",
            bottom: "0"
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            minHeight: "100vh"
        }
    },
    buttonGroup: {
        display: "flex",
        flexWrap: "wrap",
        paddingLeft: "20px",
        paddingRight: "20px",
        justifyContent: "space-around",
        width: "100%"
    },
    button: {
        [theme.breakpoints.down('md')]: {
            width: "100%",
        }
    }
})

export default rightContentWrapperStyles
