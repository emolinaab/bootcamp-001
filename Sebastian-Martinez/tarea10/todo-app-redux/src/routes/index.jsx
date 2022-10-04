import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailItem from '../components/DetailItem/DetailItem';
import Home from '../containers/Home/Home';


const index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<DetailItem/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default index