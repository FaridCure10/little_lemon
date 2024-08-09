import { lazy } from 'react';

const Header = lazy(() => import('../../organisms/header/Header'));
const Main = lazy(() => import('../../organisms/main/Main.jsx'));
const Footer = lazy(() => import('../../molecules/footer/Footer.jsx'));
const BackToTop = lazy(() => import('../../atoms/back-to-top/BackToTop.jsx'));

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <>
            <Header showMenu={true} />
            <Main />
            <Footer />
            <BackToTop />
        </>
    )
}