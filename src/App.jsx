import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import UserListComponent from './components/UserListComponent'
import UserComponent from './components/UserComponent'
import UserVIewComponent from './components/UserVIewComponent'
import SignUpUserComponent from './components/SignUpUserComponent'
import LoginComponent from './components/LoginComponent'
import PrivateRoute from './security/PrivateRoute'
import HomeComponent from './components/HomeComponent'
import NavbarComponent from './components/NavbarComponent'
import LogoutComponent from './components/LogoutComponent'


function App() {

  return (
    <>
    <BrowserRouter>
        <HeaderComponent />
        <NavbarComponent />

        <Routes>

          {/* 🔓 PUBLIC ROUTES */}
          <Route path='/' element={<HomeComponent />}></Route>
          <Route path='/home' element={<HomeComponent />}></Route>
          <Route path='/loginuser' element={<LoginComponent />} />
          <Route path='/signupuser' element={<SignUpUserComponent />} />

          {/* 🔐 PROTECTED ROUTES */}
          
          <Route
            path='/userlist'
            element={
              <PrivateRoute>
                <UserListComponent />
              </PrivateRoute>
            }
          />

          <Route
            path='/adduser'
            element={
              <PrivateRoute>
                <UserComponent />
              </PrivateRoute>
            }
          />

          <Route
            path='/edituser/:userId'
            element={
              <PrivateRoute>
                <UserComponent />
              </PrivateRoute>
            }
          />

          <Route
            path='/viewuser/:userId'
            element={
              <PrivateRoute>
                <UserVIewComponent />
              </PrivateRoute>
            }
          />
          <Route path='/logout' 
          element={
            <PrivateRoute>
              <LogoutComponent />
            </PrivateRoute>
          }
          />

        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
