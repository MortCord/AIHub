import Header from "./Header"


const AboutBot = () =>{
    return(
        <div>
            <Header pageName={"About Aysik"} arrow={true} />
            <div className="d-flex align-items-center justify-content-center main-wind">
                <div className="wind">
                    <p className="">Це АІ чат для військових,який спеціалізується на військвій галузі. За допомогою цього чати військвий може покращувати свої знання.Він буде надавати достовірну інформацію своїми словами,тобто у нього буде завантажена бібліотека з різними військовими для навчання даними.АІ буде мати змогу працювати он-лайн та оф-лайн</p>
                </div>
            </div>
        </div>
    )
}

export default AboutBot;