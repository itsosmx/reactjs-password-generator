import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components";
import Main from "./routes/main";
export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
