import Buttons from "./Buttons";

function Hero() {
    return (
        <div className="gym__hero-container" >
            <div className="gym__hero-title" >
                <p>GET TO EXPERIENCE...</p>
                <h1 >BAZENGA<span className="text-purple-400" > fitness</span></h1>
            </div>
            <p>I hereby acknowledge that i may become <span className="text-purple-400 
            font-medium" >MR FLEX</span> 
             and accept all the risks of becoming <span className="text-purple-400 
             font-medium" >A BAZENGA</span>. 
            Nikienda juu nduru, nikirudi chini mayowe, and mostly unable to fit through doors.</p>
            <Buttons func={() => {
                window.location.href = '#generate'
            }} text={"Accept and begin"}/>
        </div>
    )
}

export default Hero;