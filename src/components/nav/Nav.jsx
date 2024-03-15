import './Nav.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <nav>
            <ul>
            {['home', 'about', 'menu', 'reservations', 'order online', 'login'].map((item)=>(
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
            </ul>
        </nav>
    )
}