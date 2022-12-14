import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import BASE_URL from "../baseUrl"
import logo from "../images/logo.png"

export default function RegistrationPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")

    function register(){
        const userInfo ={
            email:email,
            name: name,
            image: photo, 
            password:password
        }
        const promise = axios.post(`${BASE_URL}/auth/sign-up`, userInfo)

        promise.then(() => navigate("/"))

        promise.catch(() => alert("Não foi possível registrar, tente novamente"))

    }

    return (
        <Container>
            <img src={logo} alt="Logo from TrackIt" />
            <LoginForm>
                <form onSubmit={register}>
                    <input name="email" type="email" placeholder="email" required onChange={e => setEmail(e.target.value)}/>
                    <input name="password" type="password" placeholder="senha" required onChange={e => setPassword(e.target.value)}/>
                    <input name="name" type="text" placeholder="nome" required onChange={e => setName(e.target.value)}/>
                    <input name="photo" type="url" placeholder="foto" required onChange={e => setPhoto(e.target.value)}/>
                    <button type="submit">Cadastrar</button>
                </form>
            </LoginForm>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 305px;
    margin: 68px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        color:#52B6FF;
        text-decoration: underline;
        margin-top: 25px;
        font-size: 14px;
        line-height: 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
    }
`

const LoginForm = styled.div`
    width: 305px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        margin: 3px 0;
    }
    button{
        margin: 3px 0;
    }
`