import Global from "../Global";
import axios from "axios";

export default class ServicesEmpleados {
    getOficios() {
        return new Promise(function(resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados/oficios"

            axios.get(url + request).then((response) => {
                console.log("Leyendo Oficios");
                resolve(response.data)
            })
        })
    }

    getEmpleados() {
        return new Promise(function(resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados";

            axios.get(url + request).then((response) => {
                console.log("Leyendo empleados...")
                resolve(response.data)
            })
        })
    }

    getEmpleadosOficio(oficio) {
        return new Promise(function(resolve) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados/EmpleadosOficio/" + oficio

            axios.get(url + request).then((response) => {
                console.log("Leyendo empleados por oficio...")
                resolve(response.data)
                console.log(response.data)
            })
        })
    }
}
