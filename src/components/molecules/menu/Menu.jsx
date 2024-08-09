import { useEffect, useState } from 'react';
import { listMenu, menuFilters } from '../../../utils/constants';
import './Menu.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [filterMenu, setFilterMenu] = useState([]);

    useEffect(()=>{
        setFilterMenu(listMenu);
    },[]);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setTimeout(()=>{

          if(item === 'All'){
            setFilterMenu(listMenu);
          }else{
            setFilterMenu(listMenu.filter((p) => p.tags === item));
          }
        }, 500)
    }

    return (
        <section id="Menu">
            <div className='Menu_section-title'>
                <h2>MENU</h2>
                <p>Check Our Tasty Menu</p>
            </div>
            <ul className='Menu-filters'>
                {
                    menuFilters.map((item, index) => (
                        <li key={index}
                            className={`Menu_filters-item ${activeFilter === item ? 'active' : ''}`}
                            onClick={() => handleWorkFilter(item)}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
            <ul className='Menu-container'>
            {
                filterMenu.map((item, index) => (
                    <li key={index} className='Menu_container-item'>
                        <div className='Container_item-p'>
                            <p>{item.title}</p>
                            <b>{item.price}</b>
                        </div>
                        <span className='Container_item-span'>{item.description}</span>
                    </li>
                ))
            }
            </ul>
        </section>
    )
}