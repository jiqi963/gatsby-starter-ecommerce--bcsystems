import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'

const linkedinLink = (
  <a href="https://www.linkedin.com/company/bc-systems-consultancy-ltd_2/" alt="linkedin link">
    Lindein
  </a>
)
const facebookLink = (
  <a href="https://www.facebook.com/BC-Systems-Consultancy-Ltd-396563354094538/" alt="facebook link">
    Facebook
  </a>
)
const emailLink = (
  <a href="mailto:info@bcsystems.co.nz" alt="email link">
    Email
  </a>
)

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="About" />
            <List>
              <List.Item as={Link} to="/privacy/">
                Privacy
              </List.Item>
              {/* <List.Item as={Link} to="/terms/">
                Terms
              </List.Item> */}
            </List>
          </Grid.Column>
          {/* <Grid.Column width={5}>
            <Header as="h4" content="Services" />
            <List>
              <List.Item as={Link} to="/">
                Our Products
              </List.Item>
            </List>
          </Grid.Column> */}
          <Grid.Column width={7}>
            <Header as="h4">Find more details</Header>
            <p>
              Phone: 03 489 3915
              Address: 107 Gordon Road. Mosgiel
            </p>
            <List horizontal style={{display: 'flex'}}>
              <List.Item
                icon="linkedin"
                style={{display: 'flex'}}
                content={linkedinLink}
              />
              <List.Item
                icon="facebook"
                style={{display: 'flex'}}
                content={facebookLink}
              />
              <List.Item
                icon="mail"
                style={{display: 'flex'}}
                content={emailLink}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
