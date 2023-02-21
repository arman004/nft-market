import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import Layout from './Layout';
import Explore from './components/explore';
import ItemDetails from './components/itemDetails';
import Author from './components/author'
import CreateYours from './components/createYours'

export default function Router() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Layout/>}>
            <Route path='explore' element={<Explore/>}/>
            <Route path='item' element={<ItemDetails/>}/>
            <Route path='author' element={<Author/>}/>
            <Route path='create' element={<CreateYours/>}/>
          </Route>
        </Routes>
    </div>
  )
}
