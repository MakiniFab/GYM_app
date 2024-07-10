import { useState, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "../utils/swoldier";
import Buttons from "./Buttons";

function Header(props) {
    const {index, title, description} = props
    return (
        <div className="flex flex-col gap-" >
            <div className="flex items-center justify-center gap-2" >
                <p  className="text-3xl sm:text-4xl md:text-5xl font-semibold 
                text-slate-400">{index}</p>
                <h4 className="text-xl sm:text-2xl md:text-3xl " >{title}</h4>
            </div>
            <p className="text-sm sm:text-base mx-auto" >{description}</p>
        </div>
    )
}

function Geneartor(props) {
    const [showModal, setShowModal] = useState(false)
    const {muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout} = props

    function toggleModal() {
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== 
                muscleGroup))
                return
        }

        if (muscles.length > 3) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)}
    }
    

    return (
        <div className="gym__generator-container">
            <SectionWrapper id={"generate"}header="generate your workout" title={["It\'s", "Bazenga", "O\'clock"]} >
                <Header index={'01'} title={'Select category'} description={'Pick out the work out you want.'} />
                    <div>
                    {Object.keys(WORKOUTS).map((type, typeIndex) => {
                        return (
                            <button onClick={() => {
                                setMuscles([])
                                setPoison(type)
                            }} 
                            key={typeIndex} >
                                <p>{type.replaceAll('_', ' ')}</p>
                            </button>
                        )
                    })}
                    </div>
                <Header index={'02'} title={'Lock on target'} description={'Select muscles to completely rip up.'} />
                    
                    <div>
                        <button onClick={toggleModal} >{muscles.length == 0 ? "Select muscle groups" : 
                            muscles.join('-')}</button>
                        {showModal && (
                            <div>
                                {(poison === 'individual' ? WORKOUTS
                                [poison] : Object.keys(WORKOUTS
                                [poison])).map((muscleGroup,
                                muscleGroupIndex) => {
                                    return (
                                        <button onClick={() => {
                                            updateMuscles(muscleGroup)
                                        }} 
                                        key={muscleGroupIndex}>
                                            <p>{muscleGroup}</p>
                                        </button>
                                        )
                                })}
                            </div>
                        )}
                    </div>

                <Header index={'03'} title={'HULKanization'} description={'Select your ultimate objective.'} />
                    <div>
                        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                            return (
                                <button onClick={() => {
                                    setGoal(scheme)
                                }} 
                                key={schemeIndex} >
                                    <p>{scheme.replaceAll('_', ' ')}</p>
                                </button>
                                )
                                })}
                    </div>
                    <Buttons func={updateWorkout} text={"Formulate"}/>
            </SectionWrapper>
        </div>
    )
}

export default Geneartor;