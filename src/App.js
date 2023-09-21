import { useEffect, useState } from 'react';
import Header from './component/header/Header';
import Routes from './routes';
import { user } from './services/user';

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

  return (
    <>
      <Header />
      {authed !== null && <Routes path={originPath} redirect={redirect} authed={authed} />}
    </>
  );
}

export default App;
