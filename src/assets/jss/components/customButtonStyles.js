const whiteColor = "#FFF"

const blackColor = "#000";
const hexToRgb = input => {
    input = input + "";
    input = input.replace("#", "");
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
      throw new Error("input is not a valid hex color.");
    }
    if (input.length === 3) {
      let first = input[0];
      let second = input[1];
      let last = input[2];
      input = first + first + second + second + last + last;
    }
    input = input.toUpperCase(input);
    let first = input[0] + input[1];
    let second = input[2] + input[3];
    let last = input[4] + input[5];
    return (
      parseInt(first, 16) +
      ", " +
      parseInt(second, 16) +
      ", " +
      parseInt(last, 16)
    );
};
const customButtonStyles = theme => ({
    button: {
        minHeight: "auto",
        minWidth: "auto",
        backgroundColor: "transparent",
        color: whiteColor,
        boxShadow: "none",
        border: "1px solid #ED6A43 !important",        
        borderRadius: "0px",
        position: "relative",
        padding: "12px 30px",
        zIndex: "1",
        margin: ".3125rem 1px",
        fontSize: "19px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition:
          "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover,&:focus": {
          color: whiteColor,
          backgroundColor: "#ED6A43",
          boxShadow:
            "0 14px 26px -12px rgba(#ED6A43, 0.42), 0 4px 23px 0px rgba(" +
            hexToRgb(blackColor) +
            ", 0.12), 0 8px 10px -5px rgba(#ED6A43, 0.2)"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          position: "relative",
          display: "inline-block",
          top: "0",
          marginTop: "-1em",
          marginBottom: "-1em",
          fontSize: "1.1rem",
          marginRight: "4px",
          verticalAlign: "middle"
        },
        "& svg": {
          position: "relative",
          display: "inline-block",
          top: "0",
          width: "18px",
          height: "18px",
          marginRight: "4px",
          verticalAlign: "middle"
        },
        "&$justIcon": {
          "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            marginTop: "0px",
            position: "absolute",
            width: "100%",
            transform: "none",
            left: "0px",
            top: "0px",
            height: "100%",
            lineHeight: "41px",
            fontSize: "20px"
          }
        },
        [theme.breakpoints.down('sm')]: {
          width: "100%",
        }
      },
      white: {
        backgroundColor: "transparent",
        borderColor: "#fff !important"
      },
    fullWidth: {
        width: "100%"
    },
})

export default customButtonStyles
