import { useEffect, useRef, useState } from 'react';
import Header from './component/header/Header';
import Routes from './routes';
import { user } from './services/user';

const headerComponents = { '/': true, '/landing': true, '/contact': true, '/why': true, '/rates': true, '/about': true, '/faq': true, '/contact': true, '/faqs': true }

const originPath = window.location.pathname;
const App = () => {
  const [authed, setAuthed] = useState(null);
  const [landing, setLanding] = useState(true);
  const scrollToRef = useRef(null);

  function handleScrollToRef() {
    if (window.location.pathname !== '/') redirect('/');
    if (scrollToRef.current) scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  }


  function redirect(path) {
    window.location.href = `${window.location.origin}${path}`;
  }

  async function init() {
    const isAuthenticated = await user.isAuthenticated();
    setAuthed(isAuthenticated);
  }

  useEffect(() => {
    if (landing) {
      init();
      setLanding(false);
    }
  }, [landing])

  return (
    <>
      {headerComponents[originPath] && <Header redirect={redirect} handleScrollToRef={handleScrollToRef} />}
      {authed !== null && <Routes path={originPath} redirect={redirect} authed={authed} scrollToRef={scrollToRef} />}
    </>
  );
}

export default App;
