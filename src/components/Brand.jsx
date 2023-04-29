import React from 'react'

import google from '../assets/google.png'
import slack from '../assets/slack.png'
import atlassian from '../assets/atlassian.png'
import dropbox from '../assets/dropbox.png'
import shopify from '../assets/shopify.png'

export default function Brand() {
  return (
    <div className='bg-black'>

        <div className='p-6 md:w-[90%] m-auto flex justify-between py-16'> 
            <div><img src={google} /></div>
      <div><img src={slack}/></div>
      <div><img src={atlassian} /></div>
      <div><img src={dropbox} /></div>
      <div><img src={shopify} /></div>
      </div>

      

    </div>
  )
}
