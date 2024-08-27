import { ReactNode, useMemo } from 'react';
import { useRefAction } from '../lib/useRefAction';
import { ScrollContext } from '../lib/ScrollContext';

// Типизация ScrollContext
export interface ScrollContextType {
    firstRef: React.RefObject<HTMLDivElement>;
    scrollToRefFirst: () => void;
    secondRef: React.RefObject<HTMLDivElement>;
    scrollToRefSecond: () => void;
    thirdRef: React.RefObject<HTMLDivElement>;
    scrollToRefThird: () => void;
    fourthRef: React.RefObject<HTMLDivElement>;
    scrollToRefFourth: () => void;
    fifthRef: React.RefObject<HTMLDivElement>;
    scrollToRefFifth: () => void;
  }
  
  // Пропсы для ScrollProvider
  interface ScrollProviderProps {
    children: ReactNode;
  }

  export const ScrollProvider = ({ children }: ScrollProviderProps) => {
    const sections = ['first', 'second', 'third', 'fourth', 'fifth'] as const;
    const refsAndScrollFns = sections.reduce((acc, section) => {
      const [ref, scrollToRef] = useRefAction();
      return {
        ...acc,
        [`${section}Ref`]: ref,
        [`scrollToRef${section.charAt(0).toUpperCase() + section.slice(1)}`]: scrollToRef,
      };
    }, {} as ScrollContextType);
  
    return (
      <ScrollContext.Provider value={refsAndScrollFns}>
        {children}
      </ScrollContext.Provider>
    );
  };