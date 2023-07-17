import { useRoutes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import routes from './routes'

function App() {
  console.log(routes);
  const router = useRoutes(routes)

  return (
    <>
      <Header />
      <div className="container px-0">
        <main className="main">
          <div className="row justify-content-between mx-0">
            <Sidebar />

            {router}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
