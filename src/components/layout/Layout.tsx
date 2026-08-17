import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import { ScrollToTop } from "../shared/ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
