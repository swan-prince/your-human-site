import React from "react"
import { makeStyles } from '@material-ui/core/styles'

//import FacebookIcon from '@material-ui/icons/Facebook'

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

import styles from "../assets/jss/pages/homePageStyles"

import facebookIcon from "../assets/img/facebook-square.png"
import instagramkIcon from "../assets/img/instagram-square.png"
import twitterIcon from "../assets/img/twitter-square.png"

const useStyles = makeStyles(styles)

const IndexPage = () => {

  const classes = useStyles()

  return (
    <Layout>
      <Seo title="Home" />
      <div className={ classes.homeWrapper }>   
        <div className={ classes.contentWrapper }>
          <p className={ classes.firstLine }>I am your</p>
          <p className={ classes.secondLine }>Human</p>
          <p className={ classes.subtitle }>Capturing the world of dogs.</p>
          <div className={ classes.optioinsWrapper }>
            <p className={ classes.optionItem }>
              Latest adventures
            </p>
            <p className={ classes.optionItem }>
              The Memories
            </p>
            <p className={ classes.optionItem }>
              Where To Next?
            </p>
          </div>
        </div>
        <div className={ classes.footerWrapper }>
          <span className={ classes.followText }>Follow us</span>
          <div className={ classes.socialIcons }>
            <img src={ facebookIcon } decoding="async" alt="Facebook" className={ classes.socialIcon } />
            <img src={ instagramkIcon } decoding="async" alt="Instagram" className={ classes.socialIcon } />
            <img src={ twitterIcon } decoding="async" alt="Twitter" className={ classes.socialIcon } />
          </div>
        </div> 
      </div>
    </Layout>
  )
}
  
export default IndexPage
