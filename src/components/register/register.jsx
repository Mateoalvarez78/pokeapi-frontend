import './register.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [userRegister, setUserRegister] = useState({
        nombre : "",
        apellido : "",
        mail : "",
        password : ""
    })

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleNombreInputChange = (e) => {
        setUserRegister({... userRegister, nombre : e.target.value})
    }
    const handleApellidoInputChange = (e) => {
        setUserRegister({... userRegister, apellido : e.target.value})
    }
    const handleMailInputChange = (e) => {
        setUserRegister({... userRegister, mail : e.target.value})
    }
    const handlePasswordInputChange = (e) => {
        setUserRegister({... userRegister, password : e.target.value})
    }

    const handleSubmitted = (e) => {

        e.preventDefault();

        if (userRegister.nombre && userRegister.apellido && userRegister.mail && userRegister.password){
            setValid(true)
        }

        setSubmitted(true)

    }

    useEffect(() => {
        if(valid && submitted){
            navigate('/pokemones')
        }
    }, [valid, submitted])
    
    const ingresarUsuario = () => {
        navigate('/pokemones')
    }
    
    const regresarLogin = () => {
        navigate('/')
    }

    return (
        <section className="container-register">
            <form action="registrar" className="formulario-registrar" onSubmit={handleSubmitted}>
                <h2>Registrate!!</h2>

                {submitted && valid && (
                    <div className='registro-aprovado'>REGISTRO EXITOSO!!</div>
                )}
                <br />
                {submitted && !userRegister.nombre && (
                    <span><p>Favor de completar los datos</p></span>
                )}
                Nombre :
                <input type="text" placeholder="Nombre" onChange={handleNombreInputChange}/>
                <br />
                {submitted && !userRegister.apellido && (
                    <span><p>Favor de completar los datos</p></span>
                )}
                Apellido :
                <input type="text" placeholder='Apellido' onChange={handleApellidoInputChange} />
                <br />
                {submitted && !userRegister.mail && (
                    <span><p>Favor de completar los datos</p></span>
                )}
                Mail : 
                <input type="email" placeholder='ejemplo@gmail.com' onChange={handleMailInputChange} />
                <br />
                {submitted && !userRegister.password && (
                    <span><p>Favor de completar los datos</p></span>
                )}
                Password : 
                <input type="password" placeholder='Password' onChange={handlePasswordInputChange} />
                <br />
                <button  className="botonAgregar" type="submit" >Enviar</button>
                <button  className="botonRegresar" onClick={regresarLogin}>Regresar</button>
            </form>
        </section>
    )
}

export default Register