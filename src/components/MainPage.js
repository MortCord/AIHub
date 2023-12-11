import Header from "./Header";
import { NavLink } from "react-router-dom";

const MainPage = () =>{
    return(
        <div>
            <Header pageName={'Main page'} />
            <h1 className="mt-5 main-text">Hi there. What do you like to do?</h1>
            <div className="d-flex flex-column align-items-center justify-content-center main-buts">
                <NavLink to="/chat"><button className="main-but">Start conversation</button></NavLink>
                <NavLink to="/about-bot"><button className="main-but">About Aysik</button></NavLink>
                <NavLink to="/about-dev"><button className="main-but">About dev team</button></NavLink>
            </div>
        </div>
    )
    
    
    
}


export default MainPage;