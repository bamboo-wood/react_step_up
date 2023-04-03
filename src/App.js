import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import { StyledConponents } from "./components/StyledComponents";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledConponents />
      </div>
    </>
  );
}
