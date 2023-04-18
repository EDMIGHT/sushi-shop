import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import Header from './layouts/Header/Header';
import { Cart, Home, NotFound, Sushi } from './pages';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='sushi/:id' element={<Sushi />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
