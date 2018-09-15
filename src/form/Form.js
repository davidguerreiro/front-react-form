import React, { Component } from 'react';
import FormRow from './FormRow';
import './Form.css';

//this.refs.nombreComponente.nombreMetodo;
class Form extends Component {
    constructor() {
        super();

        this.state = {
            labelLegend: '',
        };

        this.onSubmit =  this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let nombre = this.refs.nombre.getValue();
        let apellido = this.refs.apellidos.getValue();
        let email = this.refs.correo.getValue();
        let pwd = this.refs.password.getValue();
        let conf_pwd = this.refs.confirm_password.getValue();

        if ( pwd === conf_pwd ) {
            this.setState(
                {
                    labelLegend: 'Bien !',
                }
            );
        } else {
            this.setState(
                {
                    labelLegend: 'Mal !',
                }
            );
        }
    }
    render() {
        return(
            <div className="Form">
                <form onSubmit={this.onSubmit} className="Form-form">
                    <h2 className="Form-title">Registro</h2>
                    <FormRow
                        inputType="text"
                        labelText="Nombre: "
                        isRequired={true}
                        ref="nombre"
                    />

                    <FormRow
                        inputType="text"
                        labelText="Apellidos: "
                        isRequired={true}
                        ref="apellidos"
                    />

                    <FormRow
                        inputType="email"
                        labelText="Correo Electrónico: "
                        isRequired={true}
                        ref="correo"
                    />

                    <FormRow
                        inputType="password"
                        labelText="Password: "
                        isRequired={true}
                        ref="password"
                    />

                    <FormRow
                        inputType="password"
                        labelText="Confirmar Password: "
                        isRequired={true}
                        ref="confirm_password"
                    />

                    <button className="Form-button">Registro</button>
                    <label className="Form-label">{this.state.labelLegend}</label>
                </form>
            </div>
        );
    }
}

export default Form;