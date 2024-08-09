import { lazy, Suspense } from 'react';
import './App.css';

const LandingPage = lazy(() => import('./components/pages/landing/LandingPage'));

function App() {

  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <LandingPage />
    </Suspense>
    </>
  );
}

export default App;
