import React, { Component } from 'react'
import ServicesEmpleados from '../services/ServicesEmpleados'

export default class EmpleadosComponent extends Component {
    service = new ServicesEmpleados();
    state = {
        empleados: []
    }

    loadEmpleados = () => {
        this.service.getEmpleadosOficio(this.props.oficio).then(result => {
            this.setState({
                empleados: result
            })
            console.log(result)
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.oficio != this.props.oficio) {
            this.loadEmpleados();
        }
    }

    render() {
        return (
            <div>
                <h1>Empleados Component</h1>
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
