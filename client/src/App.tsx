import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const Research = lazy(() => import('./pages/Research'));
const CV = lazy(() => import('./pages/CV'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Gallery = lazy(() => import('./pages/Gallery'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="research" element={<Research />} />
            <Route path="cv" element={<CV />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
