import './navigationBar.css';

const NavigationBar = () => {
    const handleClick = () => {
        let navigationNameId = document.getElementById("navigation");
        
        if (navigationNameId.className === "navigation") {
            navigationNameId.className += " responsive";
        } else {

            navigationNameId.className = "navigation";
        }
    }

    return (
        <div className="container-navigation sticky">
            <div className="navigation" id="navigation" style={{position: "sticky"}}>
                <a href="#hero" className="item-active">Ricardo Ferreira</a>
                <a href="#contact">Contact</a>
                <a href="#projects">Projects</a>
                <a href="#technologies">Technologies</a>
                <a href="#about">About</a>

                <a className="icon" onClick={handleClick}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    )
}

export default NavigationBar;