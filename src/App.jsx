import React, { useState } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from '@/components'
import { Sider, Header, Content, StoreProvider } from '@/components-pro'
import * as stores from '@/stores'
import * as pages from '@/pages'
import './App.css'

function App() {
  const [siderCollapsed, setSiderCollapsed] = useState(false)
  const toggleSiderCollapse = () => setSiderCollapsed(!siderCollapsed)
  return (
    <Router>
      <StoreProvider {...stores}>
        <Layout className='app-layout'>
          <Sider collapsed={siderCollapsed} onCollapse={toggleSiderCollapse} />
          <Layout>
            <Header
              collapsed={siderCollapsed}
              onCollapseClick={toggleSiderCollapse}
            />
            <Content>
              <Switch>
                <Route path='/anime' component={pages.Anime} />
                <Route path='/home' component={pages.Home} />
                <Route path='/hot' component={pages.Hot} />
                <Route path='/player' component={pages.Player} />
                <Route path='/setting' component={pages.Setting} />
                <Route path='*' component={pages.Redirects} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </StoreProvider>
    </Router>
  )
}

export default App
