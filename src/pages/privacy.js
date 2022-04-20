import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Privacy = ({location}) => (
  <Layout location={location}>
    <SEO title="Privacy" />
    <h1>Privacy</h1>
    <p>
    We collect personal information from you, including information about your:
name
contact information
location
computer or network
interactions with us
billing or purchase information
We collect your personal information in order to:
shipping your good
You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong. If you d like to ask for a copy of your information, or to have it corrected, please contact us at .
    </p>
  </Layout>
)

export default Privacy
