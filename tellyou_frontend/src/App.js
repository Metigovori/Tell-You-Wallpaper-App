
import { useEffect } from 'react';
import { Route, Routes , useNavigate } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Container/Home';
import './index.css';
import { fetchUser } from './utils/fetchUser';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if(!user) navigate('/login');
  }, [])
  
  return (
    <h1 className="text-3xl font-bold ">
          <Routes>
            <Route path="login" element={<Login/>} />
            <Route path="/*" element={<Home/>} />
          </Routes>
    </h1>
  );
}

export default App;
