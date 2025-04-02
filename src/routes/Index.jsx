import { Routes, Route } from 'react-router-dom'
import Home from '../views/Index';
import Showpost from '../views/Post/Show';
const RoutesIndex = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:slug" element={<Showpost />} />
        </Routes>
    )
}


export default RoutesIndex
