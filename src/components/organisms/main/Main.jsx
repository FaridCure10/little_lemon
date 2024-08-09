import './Main.scss';
import { lazy } from 'react';

const Hero = lazy(() => import('../../molecules/hero/Hero'));
const About = lazy(() => import('../../molecules/about/About'));
const Menu = lazy(() => import('../../molecules/menu/Menu'));
const Testimonial = lazy(() => import('../../molecules/testimonial/Testimonial'));

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    
    return (
        <main>
            <Hero />
            <About />
            <Menu />
            <Testimonial />
        </main>
    )
}