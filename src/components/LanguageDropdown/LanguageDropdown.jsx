import { useState } from 'react';
import styles from './LanguageDropdown.module.scss';
import { useLangChange } from '../../context/LanguageContext';

import deFlag from '../../assets/de.svg';
import enFlag from '../../assets/en.svg';

const LANGS = {
  eng: { label: 'EN', flag: enFlag },
  deu: { label: 'DE', flag: deFlag },
};

const LanguageDropdown = () => {
  const { lang, changeLang } = useLangChange();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.lang}>
      <button
        className={styles.current}
        onClick={() => setOpen(!open)}
      >
        <img src={LANGS[lang].flag} alt={lang} />
        <span className={styles.curr_lang}>{LANGS[lang].label}</span>
      </button>

      {open && (
        <div className={styles.dropdown}>
          {Object.entries(LANGS).map(([key, item]) => (
            <button
              key={key}
              className={styles.item}
              onClick={() => {
                changeLang(key);
                setOpen(false);
              }}
            >
              <img src={item.flag} alt={item.label} />
              <span className={styles.choose_lang}>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
