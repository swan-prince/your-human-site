import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from "classnames"

import Button from "@material-ui/core/Button"

import styles from "../../assets/jss/components/customButtonStyles"

const useStyles = makeStyles(styles)

const CustomButton = React.forwardRef((props, ref) => {

    const { 
        className, 
        children,
        muiClasses,
        color,
        fullWidth,
        ...rest
    } = props

    const classes = useStyles()

    const btnClasses = classNames({
        [classes.button]: true,
        [classes[color]]: color,        
        [className]: className
    });

    return (
        <Button {...rest} ref={ref} classes={ muiClasses } className={ btnClasses }>
            {children}
        </Button>
    )
})

CustomButton.propTypes = {
    color: PropTypes.oneOf([
        "white",                
      ]),
    className: PropTypes.string,
    muiClasses: PropTypes.object,
    fullWidth: PropTypes.bool,
    children: PropTypes.node
}

export default CustomButton
