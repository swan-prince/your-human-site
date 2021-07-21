import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import styles from "../../assets/jss/components/twoColumnsWrapper"

const useStyles = makeStyles(styles)

const TwoColumnsWrapper = (props) => {

    const { children, classNames } = props
    const classes = useStyles()

    return (
        <div className={ classes.wrapper + " " + classNames }>
            { children }
        </div>
    )
}

TwoColumnsWrapper.propTypes = {
    children: PropTypes.node,
    classNames: PropTypes.string
}

export default TwoColumnsWrapper
