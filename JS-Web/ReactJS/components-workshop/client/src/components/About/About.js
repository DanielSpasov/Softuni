const About = ({
    match,
    location,
    history,
}) => {

    return (
        <div className="main-container">
            <h1>About {match.params.name} Page</h1>
        </div>
    )
}

export default About