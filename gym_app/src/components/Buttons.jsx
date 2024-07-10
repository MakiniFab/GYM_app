function Buttons(props) {
    const {text, func} = props

    return (
        <div className="gym__buttons-container" >
            <button onClick={func}>
                <p>{text}</p>
            </button>
        </div>
    )
}

export default Buttons;