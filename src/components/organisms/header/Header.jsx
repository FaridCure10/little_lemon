import './Header.scss';
import { LogoF } from '../../../utils/constants';
import Nav from '../../molecules/nav/Nav';
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({showMenu}) => {

    return (
        <header>
            <Link to={'/'} className='container-logo'>
                <img className='mob-logo' src={LogoF.mobile} alt="logo" />
                <img className='desk-logo' src={LogoF.desk} alt="logo" />
            </Link>
            {
                showMenu ? <Nav /> : <Link to={'/'} className='btnHome'>Home</Link>
            }
        </header>
    )
}