import { useEffect } from 'react'
import { HeaderOne } from "@/widgets/Header/HeaderOne";
import { Wrapper } from "@/widgets/Wrapper";
import AppRouter from "./providers/router/ui/AppRouter";
import { FooterOne } from "@/widgets/Footer/FooterOne";
// @ts-ignore
import WOW from 'wow.js';
import { ScrollProvider } from './providers/ScrollProvider';


export const App = () => {

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //       new WOW({ live: false }).init();
  //   }
  // }, []);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <AppRouter />
        <FooterOne />
      </div>
    </Wrapper>
  );
};
