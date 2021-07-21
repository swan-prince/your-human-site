import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import TwoColumnsWrapper from "../components/CustomWrapper/TwoColumnsWrapper"
import LeftContentWrapper from "../components/CustomWrapper/LeftContentWrapper"
import RightContentWrapper from "../components/CustomWrapper/RightContentWrapper"
import CustomButton from "../components/CustomButtons/CustomButton"

import rightBgImg from "../assets/img/contact_page_bg.png"

import styles from "../assets/jss/pages/contactPageStyles"

const useStyles = makeStyles(styles)

const ContactUs = () => {

    const classes = useStyles()

    return (
        <Layout>
            <Seo title="Contact Us" />
            <TwoColumnsWrapper classNames={ classes.wrapper }>
                <LeftContentWrapper pageTitle="Contact Us">
                    <p className={ classes.description }>Send Us a Message</p>
                    <div className={ classes.formWrapper }>
                        <TextField 
                            variant="outlined" 
                            fullWidth 
                            className={ classes.textField }
                            placeholder="Name" />
                        <TextField 
                            variant="outlined" 
                            fullWidth 
                            className={ classes.textField }
                            placeholder="Email" />
                        <TextField 
                            variant="outlined" 
                            fullWidth 
                            className={ classes.textField }
                            placeholder="Message"
                            multiline
                            rows={ 4 } />
                        <CustomButton color="white" className={ classes.sendBtn }>
                            Send
                        </CustomButton>
                    </div>
                </LeftContentWrapper>
                <RightContentWrapper backgroundImg={ rightBgImg } />
            </TwoColumnsWrapper>
        </Layout>
    )
}

export default ContactUs
