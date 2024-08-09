import { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { listTestimonials } from '../../../utils/constants';
import './Testimonial.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    }

    useEffect(()=>{
        setTestimonials(listTestimonials);
    }, []);

  const test = testimonials[currentIndex];

    return (
        <section id='Testimonials'>
            <div className='Testimonials_section-title'>
                <h2>Testimonials</h2>
                <p>What they're saying about us</p>
            </div>
            {testimonials.length && (
                <>
                <div className='app__testimonial-item app__flex'>
                    <img src={test.img} alt="testimonial" />
                    <div className='app__testimonial-content'>
                        <p className='p-text'>{test.feedback}</p>
                        <div>
                        <h4 className='bold-text'>{test.name}</h4>
                        <h5 className='p-text'>{test.profession}</h5>
                        </div>
                    </div>
                </div>

                <div className='app__testimonial-btns app__flex'>
                    <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                    <HiChevronLeft/>
                    </div>
                    <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                    <HiChevronRight/>
                    </div>
                </div>
                </>
            )}
        </section>
    )
}