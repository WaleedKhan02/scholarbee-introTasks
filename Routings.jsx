import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}

function About() {
  return <h2>About Page</h2>;
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="stats">Stats</Link>{" | "}
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="stats" element={<h3>Stats Section</h3>} />
        <Route path="settings" element={<h3>Settings Section</h3>} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}