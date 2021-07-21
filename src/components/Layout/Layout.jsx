import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../Navbar/Navbar"

import "../../assets/scss/main.scss"
import styles from '../../assets/jss/components/layoutStyles'

const useStyles = makeStyles(styles)

const Layout = ({ children }) => {
    
	const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    const classes = useStyles()

    return (
        <div className={ classes.wrapper }>     
            <Navbar /> 
            <main>{ children }</main>           
        </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
