import dark from '@/shared/assets/img/close.svg';
import { useEffect, useState } from 'react';
import brightnes from '@/shared/assets/img/brightnes.svg';
import { Icon } from '@/shared/ui/Icon';
import * as cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {

  const [open, setOpen] = useState<Boolean>(false);
  // open mode
  const openDarkLight = () => {
    setOpen(!open)
  }

  // default dark mode 
  // const [activeMode, setActiveMode] = useState('dark');
  const [activeMode, setActiveMode] = useState('light');

  // const [activeMode, setActiveMode] = useState(() => { 
  //   return localStorage.getItem('mode') || 'light';
  // });

  useEffect(() => {
    if (activeMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Save the selected mode in localStorage
    localStorage.setItem('mode', activeMode);

  }, [activeMode]);
  const handleModeChange = (mode: string) => {
    setActiveMode(mode);
  };

  return (
    <>
      <div className="cs_toggle">
        <div className="setting_mode" style={{ right: open ? '120px' : '0px' }}>
          <button id="open" onClick={openDarkLight} style={{ display: open ? 'none' : 'block' }}>
            <Icon Svg={brightnes} className={cls.Btn} />
          </button>
          <button id="clecel" onClick={openDarkLight} style={{ display: open ? 'inline-block' : 'none' }}>
            <Icon Svg={dark} className={cls.Btn} />
          </button>
        </div>
        <div className="cs_mode_btn js-mode-type" style={{ right: open ? '0px' : '-120px' }}>
          <button
            className={activeMode === 'light' ? 'active' : ''}
            onClick={() => handleModeChange('light')}
            data-mode="light">Light</button>

          <button
            className={activeMode === 'dark' ? 'active' : ''}
            onClick={() => handleModeChange('dark')}
            data-mode="dark">Dark</button>
        </div>
      </div>
    </>
  );
};
