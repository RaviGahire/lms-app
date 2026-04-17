import { ToastContainer } from 'react-toastify';
import { AppRoutes } from './routers/AppRoutes'

const App = () => {
  return (
    <>
      <AppRoutes />
      <ToastContainer/>
    </>
  )
}
export default App;