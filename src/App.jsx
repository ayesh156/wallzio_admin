import React, {useState, useEffect} from 'react';
import LoadingScreen from './components/LoadingScreen';
import './constants/style.css';
import AdminHome from './admin/AdminHome';
import Login from './admin/Login';
import Backgound from './components/backgound';
import styles from './style';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
  // route

  let component
  switch (window.location.pathname) {
    case "/":
      component = <Login />
      break
    case "/dashboard":
      component = <AdminHome />
      break
  }

  if (window.location.pathname === "/dashboard") {
    return (

      <div>

        {isLoading ? <LoadingScreen /> : ""}


        <div className='w-full overflow-hidden'>

        <Backgound />

          {component}
        </div>
      </div>
    );
  } else {

    return (

      <div>

        {isLoading ? <LoadingScreen /> : ""}

        <div className='w-full overflow-hidden'>

        <Backgound />

          {component}
        </div>
      </div>


    )

  }



};


export default App