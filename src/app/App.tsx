import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { History } from './pages/History';
import { Events } from './pages/Events';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { SharjahCulture } from './pages/SharjahCulture';
import { SearchResults } from './pages/SearchResults';
import { TagsResults } from './pages/TagsResults';
import { Authors } from './pages/Authors';
import { AuthorDetail } from './pages/AuthorDetail';
import { Toaster } from 'sonner';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background selection:bg-club-purple selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/tags/:tagName" element={<TagsResults />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/authors/:id" element={<AuthorDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sharjah-culture" element={<SharjahCulture />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
};

export default App;
