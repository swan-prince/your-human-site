import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import CustomButton from "../CustomButtons/CustomButton"

import styles from "../../assets/jss/components/rightContentWrapperStyles"

const useStyles = makeStyles(styles)

const RightContentWrapper = props => {

    const {       
        backgroundImg,
        classNames
    } = props

    const classes = useStyles()

    return (
        <div className={ classes.rightContentWrapper + " " + classNames } style={{ backgroundImage: `url(${ backgroundImg })` }}>
            <div className={ classes.buttonGroup }>
                <CustomButton className={ classes.button }>Latest Adventures</CustomButton>
                <CustomButton className={ classes.button }>The Memories</CustomButton>
                <CustomButton className={ classes.button }>Where to next?</CustomButton>
            </div>
        </div>
    )
}

RightContentWrapper.propTypes = {    
    backgroundImg: PropTypes.node,
    classNames: PropTypes.string
}

export default RightContentWrapper
