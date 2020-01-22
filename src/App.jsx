import React, { useState } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from '@/components'
import { Sider, Header, Content } from '@/components-pro'
import './App.css'

function App() {
  const [siderCollapsed, setSiderCollapsed] = useState(false)
  const toggleSiderCollapse = () => setSiderCollapsed(!siderCollapsed)
  return (
    <Router>
      <Layout className='app-layout'>
        <Sider collapsed={siderCollapsed} onCollapse={toggleSiderCollapse} />
        <Layout>
          <Header
            collapsed={siderCollapsed}
            onCollapseClick={toggleSiderCollapse}
          />
          <Content>11111</Content>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
