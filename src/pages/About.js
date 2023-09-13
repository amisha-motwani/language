import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className = " about_page mb-0" style ={{textAlign:"justify"}} >
      <h1 className='mx-3 pt-2'>{t('about')}</h1>
      <p className='mx-3 pb-3'>{t('aboutUsText')}</p>
    </div>
  );
}

export default About;

