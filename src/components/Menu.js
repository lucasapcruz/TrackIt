import { Link } from "react-router-dom"
import styled from "styled-components"
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext, useEffect, useState } from "react";
import { Progress } from "../Context";

export default function Menu() {

    const {percentage, setPercentage} = useContext(Progress)

    return (
        <Container>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <ProgressCircleContainer>
                <CircularProgressbar
                    value={percentage}
                    text={"Hoje"}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </ProgressCircleContainer>
            <Link to="/habitos">
                <p>Histórico</p>
            </Link>
        </Container>
    )

}

const Container = styled.div`
    height: 70px;
    width: 100%;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 26px 31px 22px 31px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;

    a{
        text-decoration: none;
    }

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
`

const ProgressCircleContainer = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 45.5px;
`