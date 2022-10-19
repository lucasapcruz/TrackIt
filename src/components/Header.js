import styled from "styled-components"
import logo2 from "../images/logo2.png"

export default function Header({image}){

    return(
        <Container>
            <img src={logo2} alt="TrackIt"/>
            <img src={image} className="user-img" alt="Imagem do usuário"/>
        </Container>
    )

}

const Container = styled.div`
    height: 70px;
    width: 100%;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 18px;
    box-sizing: border-box;
    position: absolute;
    top: 0px;

    .user-img{
        width: 51px;
        height: 51px;
        border-radius: 25.5px;
    }
`