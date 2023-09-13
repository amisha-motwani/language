import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className = "contact_us" style ={{textAlign:"justify"}}>
      <h1 className='mx-3 pt-2'>{t('contact')}</h1>
      <p className='mx-3 pb-2'>{t('contactInfo')}</p>
    </div>
  );
}

export default Contact;
