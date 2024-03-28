
// eslint-disable-next-line import/no-anonymous-default-export
export default ({active, setActive, showMenu ,setShowMenu, className = '', mobile}) => {

    return (
        <ul className={className}>
        {[
          "Home",
          "About",
          "Menu",
          "Reservations",
          "Order",
          "Login",
        ].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            {
                mobile ?
                    <a className={`poppins-regular ${active === item ? 'active' : ''}`}
                        onClick={() => {setShowMenu(!showMenu); setActive(item)}}
                        href={`#${item}`}>{item}
                    </a>
                :
                <a className={`poppins-regular ${active === item ? 'active' : ''}`}
                    onClick={() => setActive(item)}
                    href={`#${item}`}>
                    {item}
                </a>

            }
          </li>
        ))}
      </ul>
    )
}