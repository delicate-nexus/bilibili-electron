import React, { useEffect } from 'react'
import { Helmet } from '@/components-pro'
import { getLoginUrl } from '@/services'

export default () => {
  // useLoginUrl(console.log)
  useEffect(() => {
    getLoginUrl().then(console.log)
  }, [])
  return (
    <div>
      <Helmet>
        <h1>个人中心</h1>
      </Helmet>
    </div>
  )
}
