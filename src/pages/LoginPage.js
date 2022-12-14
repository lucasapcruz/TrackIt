import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import BASE_URL from "../baseUrl"
import { AuthContext } from "../Context"
import logo from "../images/logo.png"

export default function LoginPage() {

    const {currentUser, setCurrentUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function login(event){
        event.preventDefault()

        const user ={
            email:email,
            password:password
        }
        const promise = axios.post(`${BASE_URL}/auth/login`, user)

        promise.then((response) => {
            console.log(response)
            setCurrentUser(response.data)
            navigate("/hoje")
        })

        promise.catch((response) => {
            alert("Ops, login e/ou senha incorretos")
        })

    }

    return (
        <Container>
            <img src={logo} alt="Logo from TrackIt" />
            <LoginForm>
                <form onSubmit={login}>
                    <input name="email" type="email" placeholder="email" required onChange={e => setEmail(e.target.value)}/>
                    <input name="password" type="password" placeholder="senha" required onChange={e => setPassword(e.target.value)}/>
                    <button type="submit">Entrar</button>
                </form>
            </LoginForm>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se</p>
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