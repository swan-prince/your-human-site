const contactPageStyles = theme => ({
    description: {
        fontSize: "20px",
        marginTop: '8px'
    },
    formWrapper: {
        marginTop: "70px"
    },
    textField: {
        backgroundColor: "#1C1C1C",
        borderRadius: "0px",
        marginBottom: "20px",
        "& .MuiInputBase-root": {
            fontSize: "20px",
            color: "white",
            borderRadius: "0"
        },
        "& input": {
            '&::placeholder': {            
              color: '#fff'
            }
        }
    },
    sendBtn: {
        marginTop: "45px",
        width: "170px",
        height: "44px",
    }
})

export default contactPageStyles
