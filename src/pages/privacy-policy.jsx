import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import CustomButton from "../components/CustomButtons/CustomButton"

import styles from "../assets/jss/pages/privacyTermsPagesStyles"

const useStyles = makeStyles(styles)

const PrivacyPolicy = () => {

    const classes = useStyles()

    return (
        <Layout>
            <Seo title="Contact Us" />
            <div className={ classes.wrapper }>
                <div className={ classes.contentWrapper }>
                    <h1 className={ classes.pageTitle }>Privacy Policy</h1>
                    <div className={ classes.textWrapper + " " + "themeScroll" }>
                        <p>
                            Last updated: March 01, 2021<br/>
                            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.<br/>
                            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. <br/>
                            This Privacy Policy has been created<br/>
                            with the help of the Privacy Policy Generator.
                        </p>
                        <div className={ classes.groupText }>
                            <p className={ classes.groupTitle }>
                                Interpretation and Definitions
                            </p>
                            <div className="subGroup">
                                <p className={ classes.subTitle }>
                                    Interpretation
                                </p>
                                <p>
                                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                </p>
                            </div>
                            <div className="subGroup">
                                <p className={ classes.subTitle }>
                                    Definitions
                                </p>
                                <p>
                                    For the purposes of this Privacy Policy:
                                </p>
                            </div>
                            <p>
                                <span className={ classes.subTitle }>Account</span> means a unique account created for You to access our Service or parts of our Service.<br />
                                Affiliate means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote
                                for election of directors or other managing authority.<br />
                            </p>
                            <p>
                                <span className={ classes.subTitle }>Application</span> means the software program provided by the Company downloaded by You on any electronic device, named I Am Your Human
                            </p>
                            <p>
                                <span className={ classes.subTitle }>Company</span> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to I Am Your Human.
                            </p>
                        </div>


                        <p>
                            Last updated: March 01, 2021
                            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created
                            with the help of the Privacy Policy Generator.
                        </p>
                        <div className="groupText">
                            <p className="groupTitle">
                                Interpretation and Definitions
                            </p>
                            <div className="subGroup">
                                <p className="subTitle">
                                    Interpretation
                                </p>
                                <p>
                                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                </p>
                            </div>
                            <div className="subGroup">
                                <p className="subTitle">
                                    Definitions
                                </p>
                                <p>
                                    For the purposes of this Privacy Policy:
                                </p>
                            </div>
                            <p>
                                <span className={ classes.optionTitle }>Account</span> means a unique account created for You to access our Service or parts of our Service.
                                Affiliate means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest or other securities entitled to vote
                                for election of directors or other managing authority.
                                <span className={ classes.optionTitle }>Application</span> means the software program provided by the Company downloaded by You on any electronic device, named I Am Your Human
                                <span className={ classes.optionTitle }>Company</span> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to I Am Your Human.
                            </p>
                        </div>
                    </div>
                    <div className={ classes.buttonGroup }>
                        <CustomButton className={ classes.button }>Latest Adventures</CustomButton>
                        <CustomButton className={ classes.button }>The Memories</CustomButton>
                        <CustomButton className={ classes.button }>Where to next?</CustomButton>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}

export default PrivacyPolicy
