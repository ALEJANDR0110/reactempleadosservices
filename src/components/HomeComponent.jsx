import React, { Component } from 'react'
import ServicesEmpleados from '../services/ServicesEmpleados'

export default class HomeComponent extends Component {
    services = new ServicesEmpleados();

    state = {
        empleados: []
    }

    loadEmpleados = () => {
        this.services.getEmpleados().then(result => {
            this.setState({
                empleados: result
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    render() {
        return (
            <div>
                <h1>Home Component</h1>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleados.map((empleado, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{empleado.apellido}</td>
                                        <td>{empleado.oficio}</td>
                                        <td>{empleado.salario}</td>
                                        <td>{empleado.departamento}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
