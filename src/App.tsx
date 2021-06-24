import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/themes/theme";
import "./styles/App.css";
import Loader from "./components/shared/Loader";

const AppRoutes = React.lazy(() => import("./components/AppRoutes"));

export const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <ChakraProvider theme={theme}>
        <AppRoutes />
      </ChakraProvider>
    </React.Suspense>
  );
};
