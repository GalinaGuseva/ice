import React from 'react';
import Header from '../Header/Header';
import Prod from '../Prod/Prod';
import How from '../How/How';
import Callback from '../Callback/Callback';
import Contacts from '../Contacts/Contacts';

export default function Main({ onShow, handlePopup, handleMapPopup }) {
  return (
    <>
      <Header onShowMenu={onShow} openPopup={handlePopup} />
      <Prod />
      <How />
      <Callback />
      <Contacts openMapPopup={handleMapPopup} />
    </>
  );
}
