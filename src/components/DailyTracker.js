import styled from "styled-components"
import HabitCard from "./HabitCard"

export default function DailyTracker({dailyHabits, config, setReload}){
    return(
        <Container>
            {dailyHabits.map((habit) => <HabitCard 
                                                key={habit.id} 
                                                id={habit.id} 
                                                name={habit.name} 
                                                done={habit.done} 
                                                currentSequence={habit.currentSequence} 
                                                highestSequence={habit.highestSequence} 
                                                config={config}
                                                setReload={setReload} />)}
        </Container>
    )
}

const Container = styled.div`
    width: 330px;
    margin: 70px auto;
`