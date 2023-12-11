import Header from "./Header"


const AboutBot = () =>{
    return(
        <div>
            <Header pageName={"About war bot"} arrow={true} />
            <div className="d-flex align-items-center justify-content-center main-wind">
                <div className="wind">
                    <p className="">Це АІ чат для  військових,який спеціалізуєтьс на військвій галузі. Задопомогою цього чати війський може покращувати свої знання.Він буде надавати достовірну інформацію своїми словами,тобто у нього буде завантажена бібліотека для з різними війсьвими для навчання даними.АІ буде мати змогу працювати онлайн та офлайн</p>
                </div>
            </div>
        </div>
    )
}

export default AboutBot;