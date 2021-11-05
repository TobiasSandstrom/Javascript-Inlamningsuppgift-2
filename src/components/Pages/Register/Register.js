import React from 'react'
import './register.css'
import { useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"


const schema = yup.object().shape({
    firstname: yup.string().min(2, "Förnamnet måste vara minst två bokstäver långt").required("Förnamnet är obligatoriskt"),
    lastname: yup.string().min(2, "Efternamnet måste vara minst två bokstäver långt").required("Efternamnet är obligatioriskt"),
    email: yup.string().email("Måste vara en gilltig email").default(false).required("Epost är obligatorisk")
})

const Register = () => {
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });
    
    const SubmitForm = (data) => {
        axios.post("https://ecexam-webapi.azurewebsites.net/api/customers", data)
    }

    return (
        <div className="register-container">
            <div className="form-container">
                <form id="formen" onSubmit={handleSubmit(SubmitForm)}>
                    <h1 className="register-header">Ange kundens uppgifter för att kunna registrera denne</h1>

                    <div className="formInput-container">
                        <input id="firstname" type="text" placeholder="Förnamn" name="firstname" className="formInput" {...register("firstname")}/>
                        <div id="error-firstname" className="error-msg">{errors.firstname?.message}</div>
                    </div>
                    
                    <div className="formInput-container">
                        <input id="lastname" type="text" placeholder="Efternamn" name="lastname" className="formInput" {...register("lastname")}/>
                        <div id="error-lastname" className="error-msg"> {errors.lastname?.message} </div>
                    </div>
                    
                    <div className="formInput-container">
                        <input id="email" type="email" placeholder="Epostadress" name="email" className="formInput" {...register("email")} />
                        <div id="error-email" className="error-msg"> {errors.email?.message} </div>
                    </div>
                    <button className="registerBtn" type="submit" formNoValidate={true}>Registrera <i className="fas fa-chevron-right"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Register
