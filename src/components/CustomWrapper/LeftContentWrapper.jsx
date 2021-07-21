import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import styles from "../../assets/jss/components/leftContentWrapperStyles"

const useStyles = makeStyles(styles)

const LeftContentWrapper = (props) => {

    const { 
        children, 
        pageTitle,
        classNames       
    } = props
    const classes = useStyles()

    return (
        <div className={ classes.leftContentWrapper + " " + classNames }>            
            <div className={ classes.contentWrapper }>
                <h1 className={ classes.pageTitle }>
                    { pageTitle }
                </h1>
                <div>
                    { children }
                </div>                
            </div>
        </div>
    )
}

LeftContentWrapper.propTypes = {
    chilren: PropTypes.node,
    pageTitle: PropTypes.string,
    classNames: PropTypes.string
}

export default LeftContentWrapper
