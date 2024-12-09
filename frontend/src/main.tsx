import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <ToastContainer />
    </QueryClientProvider>
  </StrictMode>
);
