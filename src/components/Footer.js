import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../Navbar.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <motion.footer className="footer-container">
      <motion.div
        className="copyright"
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }} 
      >
        {t('copyright')}
      </motion.div>
      <motion.div
        className="social-links"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('find')}
        <a href="https://www.facebook.com">{t('facebook')}</a>
        <a href="https://www.LinkedIn.com">{t('linkedIn')}</a>
        <a href="https://www.twitter.com">{t('twitter')}</a>
        <a href="https://in.indeed.com/">{t('indeed')}</a>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
