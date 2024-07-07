import { useState } from "react";

function ExerciseCard(props) {
    const {exercise, i} = props
    const [setsCompleted, setSetsCompleted] = useState(0)

    function handleSetIncrement() {
        setSetsCompleted((setsCompleted + 1) % 6)
    }

    return (
        <>
            <div>
                <h4>0{i + 1}</h4>
                <h2>{exercise.name.replaceAll('-', ' ')}</h2>
                <p>{exercise.type}</p>
            </div>
            <div>
                <h3>Muscle Groups</h3>
                <p>{exercise.muscles.join(' & ')}</p>
            </div>
            <div>
                {exercise.description.split('_').map((val) => {
                    return (
                        <div>
                            {val}
                        </div>
                    )
                })}
            </div>
            <div>
                {['reps', 'rest', 'tempo'].map(info => {
                    return (
                        <div key={info}>
                            <h3>{info === 'reps' ? `${exercise.unit}` : info}</h3>
                            <p>{exercise[info]}</p>
                        </div>
                    )
                })}
                <button onClick={handleSetIncrement} >
                    <h3>Sets completed</h3>
                    <p>{setsCompleted} / 5</p>
                </button>
            </div>
        </>
    )
}

export default ExerciseCard;