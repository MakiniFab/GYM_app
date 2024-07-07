function SectionWrapper(props) {
    const {children, header, title, id} = props

    return (
        <section id={id}>
            <div>
                <p>{header}</p>
                <h2>{title[0]} <span className="uppercase 
                text-purple-400" >{title[1]}</span> {title[2]}</h2>
            </div>
            <div >
                {children}
            </div>
        </section>
    )
}

export default SectionWrapper;