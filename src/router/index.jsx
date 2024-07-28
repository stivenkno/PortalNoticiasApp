import { Route, Routes } from 'react-router-dom';
import Search from '../views/Search';
import Home from '../views/Home';
import Details from '../views/Details';
import NavBar from '../components/navBar';


const Router = () => {

  return (
    <>
    <NavBar />
    <Routes>
      <Route
        path='/'
        element={
          <Home />
        }
      />
      <Route
        path='/search'
        element={
          <Search />
        }
      />
      <Route
        path='/details/:articleUri'
        element={
          <Details/>
        }
        />

    </Routes>
    </>
  )
}

export default Router;