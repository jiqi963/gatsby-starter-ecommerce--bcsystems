import React from 'react'
import {Image} from 'semantic-ui-react'

import bcsystems from '../../images/BC-Systems-Logo.png'

const Logo = () => (
  <Image
    size="mini"
    src={bcsystems}
    style={{marginRight: '1.5em'}}
    alt="Technology Under Control"
  />
)

export default Logo
