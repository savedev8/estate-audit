import DarkLight from '@/components/common/DarkLight';
import ScrollToTop from '@/components/common/ScrollToTop';

export const Wrapper = ({ children }: any) => {

  return (
    <>
      <ScrollToTop />
      <DarkLight />
      {children}
    </>
  );
};
