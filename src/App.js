import { useEffect, useState } from 'react';
import Header from './component/header/Header';
import Routes from './routes';
import { user } from './services/user';

const headerComponents = { '/': true, '/landing': true, '/contact': true, '/why': true, '/rates': true, '/about': true, '/faq': true, '/contact': true }

const App = () => {
  const [authed, setAuthed] = useState(null);
  const [landing, setLanding] = useState(true);
  const originPath = window.location.pathname;

  function redirect(path) {
    window.location.replace(`${window.location.origin}${path}`);
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
  console.log(headerComponents[originPath])
  return (
    <>
      {headerComponents[originPath] && <Header />}
      {authed !== null && <Routes path={originPath} redirect={redirect} authed={authed} />}
    </>
  );
}

export default App;
