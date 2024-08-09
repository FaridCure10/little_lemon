import { Link } from 'react-router-dom';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({active, setActive, showMenu ,setShowMenu, className = '', mobile}) => {

  const scrollToSection = (sectionId) => {
    const sectionF = document.querySelector(`#${sectionId}`);
    setActive(sectionId);

    if(sectionId){
      sectionF.scrollIntoView({behavior: 'smooth'});
    }
  };

    return (
        <ul className={className}>
          <li className="app__flex p-text" key={'link-home'}>
            <Link to='/'>Home</Link>
          </li>
        {[
          "About",
          "Menu",
          "Testimonials"
        ].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            {
                mobile ?
                    <button
                      className={`poppins-regular`}
                      onClick={() => {setShowMenu(!showMenu); scrollToSection(item)}}>
                        {item}
                    </button>
                :
                <button
                  className={`poppins-regular`}
                  onClick={() => scrollToSection(item)}>
                    {item}
                </button>

            }
          </li>
        ))}
        <li className="app__flex p-text" key={'link-reservations'}>
          <Link to='/reservations'>Reservations</Link>
        </li>
      </ul>
    )
}