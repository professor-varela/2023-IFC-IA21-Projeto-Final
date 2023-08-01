import { Route, Routes } from "react-router-dom";
import Login from "./templates/Login";
import Home from "./templates/Home";

export default () => <>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
    </Routes>
</>