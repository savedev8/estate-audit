import { HeaderOne } from "@/widgets/Header/HeaderOne";
import { Wrapper } from "@/widgets/Wrapper";
import AppRouter from "./providers/router/ui/AppRouter";
import { FooterOne } from "@/widgets/Footer/FooterOne";

export const App = () => {
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
