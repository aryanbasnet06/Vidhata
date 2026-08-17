import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import PartnersPage from "./pages/PartnersPage";
import RecognitionsPage from "./pages/RecognitionsPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import JoinUsPage from "./pages/JoinUsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/recognitions" element={<RecognitionsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
