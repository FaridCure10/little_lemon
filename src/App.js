import { lazy, Suspense } from 'react';
import './App.css';
const Header = lazy(() => import('./components/header/Header.jsx'));
const Nav = lazy(() => import('./components/nav/Nav.jsx'));
const Main = lazy(() => import('./components/main/Main.jsx'));
const Footer = lazy(() => import('./components/footer/Footer.jsx'));

function App() {
  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </Suspense>
    </>
  );
}

export default App;
