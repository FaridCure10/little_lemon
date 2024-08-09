import { useEffect, useState } from 'react';
import './BackToTop.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [showBtn, setShowBtn] = useState(true);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth" });
    };

    useEffect(()=>{
        if(window.scrollY > 20){
            setShowBtn(true);
        };
    }, [showBtn]);

    return  (
        showBtn && (
            <button
                onClick={scrollToTop}
                className="back-to-top">
                    <i className="material-icons">arrow_upward</i>
            </button>
        )
    );
};