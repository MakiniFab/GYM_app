import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

function Workout(props) {
    const {workout} = props

    return (
        <div className="gym__workout-container">
            <SectionWrapper id={'workout'} header="Welcome to" title={["The", "Danger", "zone"]} >
                <div>
                    {workout.map((exercise, i) => {
                        return (
                            <ExerciseCard i={i} exercise={exercise} key={i} />
                        )
                    })}
                </div>
            </SectionWrapper>
        </div>
    )
}

export default Workout;