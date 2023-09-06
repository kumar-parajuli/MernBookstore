import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateBooks from './pages/CreateBooks'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
const App = () => {
  return (
   <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/books/create' element= {<CreateBooks/>}/>
    <Route path='/book/details/:id' element= {<ShowBook/>}/>
    <Route path='/book/edit/:id' element= {<EditBook/>}/>
    <Route path='/book/delete/:id' element= {<DeleteBook/>}/>




   </Routes>
  )
}

export default App