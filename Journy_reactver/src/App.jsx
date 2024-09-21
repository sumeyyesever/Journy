import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home"
import Profile from './pages/profile/Profile';
import CreatePost from './pages/createPost/CreatePost';
import Post from './pages/post/Post';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {

  return (
    <Router>
    <>
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path='/create-post' element={<CreatePost />} />
      <Route path='/post' element={<Post />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </>

    </Router>
    
  )
}

export default App
