import './App.css';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SingleMovie from './SingleMovie';
import Error from './Error';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/movie/:id' element={<SingleMovie></SingleMovie>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
