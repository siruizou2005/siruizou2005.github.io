import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar currentPath={location.pathname} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
