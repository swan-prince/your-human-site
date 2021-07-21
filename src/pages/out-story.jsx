import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import TwoColumnsWrapper from "../components/CustomWrapper/TwoColumnsWrapper"
import LeftContentWrapper from "../components/CustomWrapper/LeftContentWrapper"
import RightContentWrapper from "../components/CustomWrapper/RightContentWrapper"

import rightBgImg from "../assets/img/out_story_page_bg.png"

import styles from "../assets/jss/pages/outStoryPageStyles"

const useStyles = makeStyles(styles)

const OurStory = () => {

    const classes = useStyles()

    return (
        <Layout>
            <Seo title="Contact Us" />
            <TwoColumnsWrapper classNames={ classes.wrapper }>
                <LeftContentWrapper pageTitle="Our Story">
                    <p className={ classes.storyText }>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt.<br/><br/>

                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.Lorem ipsum dolor 
                        sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.<br/><br/>

                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                    </p>
                </LeftContentWrapper>
                <RightContentWrapper backgroundImg={ rightBgImg } />
            </TwoColumnsWrapper>
        </Layout>
    )
}

export default OurStory
