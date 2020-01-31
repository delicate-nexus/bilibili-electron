import React, { useEffect } from 'react'
import { Helmet } from '@/components-pro'
import { userServices } from '@/services'

export default () => {
  useEffect(() => {
    userServices.getLoginUrl()
  }, [])
  return (
    <div>
      <Helmet>
        <h1>个人中心</h1>
      </Helmet>
    </div>
  )
}
