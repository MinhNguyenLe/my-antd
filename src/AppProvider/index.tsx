import { PropsWithChildren } from "react";
import ThemeProvider from "./ThemeProvider";

const AppProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
