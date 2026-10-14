import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import EmpleadosComponent from './EmpleadosComponent';

export default class Router extends Component {
    render() {
        function EmpleadosElement() {
            let {oficio} = useParams();
            return(<EmpleadosComponent oficio={oficio} />)
        }

        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path='/empleados/:oficio' element={<EmpleadosElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
