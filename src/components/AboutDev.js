import Header from "./Header"


const AboutDev = () =>{
    return(
        <div>
            <Header pageName={"About dev team"} arrow={true} />
            <div className="d-flex align-items-center justify-content-center main-wind">
                <div className="wind">
                    <p className="">Команда "AIhub" створює АІ чати на різні галузі для покраще спілкування з користувачем.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutDev;