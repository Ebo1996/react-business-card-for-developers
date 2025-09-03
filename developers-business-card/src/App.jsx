import "./App.css";
import Card from "./Components/Card/Card.jsx";
function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>Our Team</h1>
        <p className="subtitle">
          Meet our talented team members. Feel free to connect with them.
        </p>
      </header>
      <div class="filter-container">
        <button class="filter-btn active" data-filter="all">
          All
        </button>
        <button class="filter-btn" data-filter="development">
          Development
        </button>
        <button class="filter-btn" data-filter="design">
          Design
        </button>
        <button class="filter-btn" data-filter="management">
          Management
        </button>
      </div>

      <Card />
    </div>
  );
}

export default App;
