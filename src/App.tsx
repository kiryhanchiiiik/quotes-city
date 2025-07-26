import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const HeroSection = lazy(() => import("./components/HeroSection/HeroSection"));
const BurjKhalifaPage = lazy(
  () => import("./pages/BurjKhalifaPage/BurjKhalifaPage")
);
const EiffelTowerPage = lazy(
  () => import("./pages/EiffelTowerPage/EiffelTowerPage")
);
const ShanghaiSkylinePage = lazy(
  () => import("./pages/ShanghaiSkylinePage/ShanghaiSkylinePage")
);
const ShibuyaCrossing = lazy(
  () => import("./pages/ShibuyaCrossing/ShibuyaCrossing")
);
const TimeSquarePage = lazy(
  () => import("./pages/TimeSquarePage/TimeSquarePage")
);
const TokyoTowerPage = lazy(
  () => import("./pages/TokyoTowerPage/TokyoTowerPage")
);

import "./App.scss";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/burj-khalifa" element={<BurjKhalifaPage />} />
        <Route path="/eiffel-tower" element={<EiffelTowerPage />} />
        <Route path="/shanghai-skyline" element={<ShanghaiSkylinePage />} />
        <Route path="/shibuya-crossing" element={<ShibuyaCrossing />} />
        <Route path="/time-square" element={<TimeSquarePage />} />
        <Route path="/tokyo-tower" element={<TokyoTowerPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
