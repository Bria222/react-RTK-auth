import { useSelector } from 'react-redux'
import {  Outlet } from 'react-router-dom'
import SplashScreen from '../components/Splash/Splash'

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <SplashScreen />
    )
  }

  return <Outlet />
}

export default ProtectedRoute;
