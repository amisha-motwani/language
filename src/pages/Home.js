import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className = "home" style ={{textAlign:"justify"}}>
      <h1 className='mx-3 pt-2'>{t('home')}</h1>
      <p className='mx-3 pb-2'>{t('welcomeMessage')}</p> 
    </div>  
  );
}

export default Home;

