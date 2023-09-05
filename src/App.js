import Header from './component/header/Header';
import Routes from './routes';

const App = () => {
  const path = window.location.pathname;
  return (
    <>
      <Header />
      <Routes path={path} />
    </>
  );
}

export default App;
