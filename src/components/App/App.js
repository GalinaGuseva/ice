import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import BuyPopup from '../BuyPopup/BuyPopup';
import IngredientsIce from '../Ingredients/IngredientsIce';
import IngredientsCoffee from '../Ingredients/IngredientsCoffee';
import IngredientsShake from '../Ingredients/IngredientsShake';
import Read from '../Read/Read';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false),
    navigate = useNavigate(),
    [isPopupOpen, setIsPopupOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handlePopupClick(e) {
    setIsPopupOpen(true);
  }

  function closeAllPopups() {
    setIsPopupOpen(false);
  }

  function handleSend(data) {
    console.log(data);
    setIsPopupOpen(false);
  }

  function handleSendIng(data) {
    console.log(data);
    setTimeout(() => navigate('/'), 3000);
  }

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Main onShow={toggleMenu} handlePopup={handlePopupClick} />}
        />
        <Route
          exact
          path='/ingredients-ice'
          element={<IngredientsIce onSubmit={handleSendIng} />}
        />
        <Route
          exact
          path='/ingredients-coffee'
          element={<IngredientsCoffee onSubmit={handleSendIng} />}
        />
        <Route
          exact
          path='/ingredients-shake'
          element={<IngredientsShake onSubmit={handleSendIng} />}
        />
        <Route exact path='/read' element={<Read />} />
      </Routes>
      <Footer />
      <Menu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        openPopup={handlePopupClick}
      />
      <BuyPopup
        isOpen={isPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleSend}
      />
    </div>
  );
}

export default App;
