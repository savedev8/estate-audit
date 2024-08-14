import ScrollToTop from '@/components/common/ScrollToTop';
import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/ThemeSwitcher';

export const Wrapper = ({ children }: any) => {

  return (
    <>
      <ScrollToTop />
      <ThemeSwitcher />
      {children}
    </>
  );
};
