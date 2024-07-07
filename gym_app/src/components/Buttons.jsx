function Buttons(props) {
    const {text, func} = props

    return (
        <>
            <button onClick={func}>
                <p>{text}</p>
            </button>
        </>
    )
}

export default Buttons;