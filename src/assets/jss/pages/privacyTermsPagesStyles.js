const privacyTermsPagesStyles = theme => ({
    wrapper: {
        minHeight: "100vh",
        backgroundColor: "#000",
        paddingLeft: "5.2vw",
        paddingRight: "7.3vw"
    },
    contentWrapper: {
        paddingTop: "210px",    
        paddingBottom: "60px",
        [theme.breakpoints.down('sm')]: {
            paddingTop: "150px",
            paddingBottom: "40px",
        }  
    },
    pageTitle: {
        fontSize: "60px",
        color: "white",
        marginTop: "0px",
        marginBottom: "0px",
        [theme.breakpoints.down('xs')]: {
            fontSize: "50px"
        }
    },
    textWrapper: {
        marginTop: "14px",
        height: "575px",
        overflowY: "auto",
        color: "rgba(255, 255, 255, 0.7)",
        paddingRight: '40px',
        "& p": {
            marginBottom: "0",
            marginTop: "0",
            fontSize: "20px",
            lineHeight: "28px"
        }        
    },
    groupText: {
        marginTop: "20px"
    },
    groupTitle: {
        fontSize: "27px !important",
        fontWeight: "bold"
    },
    subTitle: {
        fontWeight: "bold"
    },
    buttonGroup: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "66px",
        flexWrap: "wrap",
        "& button": {
            marginLeft: "37px",
            marginRight: "37px",
            [theme.breakpoints.down('sm')]: {
                marginLeft: "0px",
                marginRight: "0px",
            }
        }
    }
})

export default privacyTermsPagesStyles
