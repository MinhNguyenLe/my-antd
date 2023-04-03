import { ConfigProvider, theme } from "antd";
import { PropsWithChildren } from "react";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          fontFamily: "Poppins",
        },
        // algorithm: theme.darkAlgorithm,
        // components: {
        //   Button: {
        //     colorText: "#00b96b",
        //   },
        // },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
