import Homepage from './pages/Homepage';
import SignupPage from './pages/SignupPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PostPage from './pages/PostPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/post" element={<PostPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
