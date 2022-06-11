import React from 'react'
import HomeScreen from './HomeScreen';
import LastScreen from './LastScreen';
import Question1 from './Question/Question1';
import Question2 from './Question/Question2';
import Question3 from './Question/Question3';
import Question4 from './Question/Question4';
import Question5 from './Question/Question5';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <>
        <Provider store={store}>
        <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/1" element={<Question1 />} />
    <Route path="/2" element={<Question2 />} />
    <Route path="/3" element={<Question3/>} />
    <Route path="/4" element={<Question4/>} />
    <Route path="/5" element={<Question5/>} />
    <Route path="/last" element={<LastScreen/>} />
    </Routes>
    </BrowserRouter>
        </Provider>

 

  
    </>
  )
}

export default App