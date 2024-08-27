import { useCallback, useRef } from 'react';

export const useRefAction = (): [React.RefObject<HTMLDivElement>, () => void] => {
    const ref = useRef<HTMLDivElement>(null);
    const scrollToRef = useCallback(() => {
        if (ref.current !== null) {
            const offsetTop = ref.current?.getBoundingClientRect().top + window.scrollY;
            const offset = 40;
            window.scrollTo({
                top: offsetTop - offset,
                behavior: 'smooth',
            });
        }
    }, [ref]);

    return [ref, scrollToRef];
};