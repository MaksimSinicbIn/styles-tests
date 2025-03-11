import { HashRouter } from 'react-router'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { Pages } from './routes/Pages'

export const App = () => {
  return (
    <>
      <HashRouter>
        <Layout>
          <div className="container">
            <Pages />
          </div>
        </Layout>
      </HashRouter>
    </>
  )
}
