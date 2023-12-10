import { NavLink } from 'react-router-dom';
import aiAvatar from '../images/aiAvatar.png';
import arrow from '../images/arrow.png';

const Header = (props) =>{
    return(
        <header className='d-flex'>
            <div className='d-flex avatar align-items-center'>
                {props.arrow === true ? <NavLink to="/"><img className='arrow' src={arrow} alt='arrow'/></NavLink> : null}
                <img src={aiAvatar} alt="aiAvatar" />
                <h4 className='mt-4 pb-3'>BOT</h4>
            </div>
            <div className='d-flex justify-content-center textHere align-items-center'>
                <span>{props.pageName}</span>
            </div>
        </header>
    )
}

export default Header;