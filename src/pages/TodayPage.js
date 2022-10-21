import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import BASE_URL from "../baseUrl"
import DailyTracker from "../components/DailyTracker"
import Header from "../components/Header"
import Menu from "../components/Menu"
import { AuthContext, Progress } from "../Context"

export default function TodayPage() {

    const { currentUser, setCurrentUser } = useContext(AuthContext)

    const { image, token } = currentUser

    const {percentage, setPercentage} = useContext(Progress)
    
    const [dailyHabits, setDailyHabits] = useState([])

    const [reload, setReload] = useState(false)

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promise = axios.get(`${BASE_URL}/habits/today`, config)

        promise.then((response) => {
            setDailyHabits([...response.data])

            const activitiesDone = response.data.filter(activity => activity.done)
            const nrDone = activitiesDone.length
            const nrNotDone = response.data.length

            const p = nrNotDone !== 0? (nrDone/nrNotDone)*100: 0

            setPercentage(p)
        })

        promise.catch((response) => {
            alert("Ocorreu um erro")
        })
    }, [reload])


    return (
        <>
                <Header image={image} />
                <DailyTracker
                    dailyHabits={dailyHabits} config={config} setReload={setReload}/>
                <Menu/>
        </>
    )
}