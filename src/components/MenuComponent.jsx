import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServicesEmpleados from '../services/ServicesEmpleados'

export default class MenuComponent extends Component {
    services = new ServicesEmpleados();
    state = {
        oficios: []
    }

    loadOficios = () => {
        this.services.getOficios().then(result => {
            this.setState({
                oficios: result
            })
        });
    }

    componentDidMount = () => {
        this.loadOficios();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    New Hospital
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Oficios
                                </a>
                                <ul className="dropdown-menu">            
                                    {
                                        this.state.oficios.map((oficio, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink className="dropdown-item" to={"/empleados/" + oficio} >
                                                        {oficio}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
