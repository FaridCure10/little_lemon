import { lazy, Suspense } from 'react';
import './App.css';
const Header = lazy(() => import('./components/organisms/header/Header.jsx'));
const Main = lazy(() => import('./components/organisms/main/Main.jsx'));
const Footer = lazy(() => import('./components/molecules/footer/Footer.jsx'));

function App() {

  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
      <Main />
      <Footer />
    </Suspense>
    </>
  );
}

export default App;
