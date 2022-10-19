import styled from "styled-components"
import {BsCheckLg} from 'react-icons/bs'
import BASE_URL from "../baseUrl"
import axios from "axios"

export default function HabitCard({id, name, done, currentSequence, highestSequence, config, setReload}){

    function checkHabit(id){
        const promise = axios.post(`${BASE_URL}/habits/${id}/check`,{}, config)

        promise.then((response) => {
            setReload(true)
        })

        promise.catch((error) => {
            alert(error.response.data.message)
        })
    }
    
    return(
        <Container>
            <p>{name}</p>
            <CheckBox done={done} onClick={() => checkHabit(id)}>
                <BsCheckLg/>
            </CheckBox>    
        </Container>
    )
}

const Container = styled.div`
    height: 94px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const CheckBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 69px;
    width: 69px;
    background-color: ${props => props.done?'#8FC549':'#E7E7E7'};

    svg{
        color:#FFFFFF;
    }
`