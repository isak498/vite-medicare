import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { CommonRouter } from "./router/commonRouter";
import { Suspense } from "react";
import Header from "./layout/Header";
import Loader from "./component/Loader";
import "./App.css";

const AppContent = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/log-in", "/sign-up"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Routes>
        {CommonRouter.map((c) => (
          <Route key={c.path} path={c.path} element={<c.element />} />
        ))}
      </Routes>
    </>
  );
};

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;