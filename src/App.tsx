import Loading from "components/Loading";
import LoginPage from "pages/Auth/LoginPage";
import MovieGalleryPage from "pages/Movies/MovieGalleryPage";
import MovieWatchlistPage from "pages/Movies/MovieWatchlistPage";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <div className="app">
        <MainLayout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<MovieGalleryPage />} />
              <Route path="/watch-list" element={<MovieWatchlistPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
