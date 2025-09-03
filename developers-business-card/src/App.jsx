import "./App.css";
import Card from "./Components/Card/Card.jsx";
function App() {
  return (
    <body>
      <div class="wrapper">
        <header>
          <h1>Our Team</h1>
          <p class="subtitle">
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

        <Card
          number={1}
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
          alt="Michael Chen"
          name="Michael Chen"
          position="Senior Developer"
          company="TechSolutions Inc."
          email="michael.chen@techsolutions.com"
          phone="+1 (555) 123-4567"
          location="San Francisco, CA"
          skills={["JavaScript", "React", "Node.js"]}
          contactText="Contact Michael"
        />

        <Card
          number={2}
          image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=100&q=80"
          alt="Sarah Johnson"
          name="Sarah Johnson"
          position="UX/UI Designer"
          company="CreativeMind Studios"
          email="sarah@creativemind.com"
          phone="+1 (555) 987-6543"
          location="New York, NY"
          skills={["UI Design", "Illustration", "Prototyping"]}
          contactText="Contact Sarah"
        />

        <Card
          number={3}
          image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
          alt="David Wilson"
          name="David Wilson"
          position="Project Manager"
          company="NextGen Innovations"
          email="david.wilson@nextgen.com"
          phone="+1 (444) 555-6789"
          location="Austin, TX"
          skills={["Agile", "Scrum", "Product Management"]}
          contactText="Contact David"
        />

        <Card
          number={4}
          image="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
          alt="Emma Rodriguez"
          name="Emma Rodriguez"
          position="Frontend Developer"
          company="WebCraft Inc."
          email="emma@webcraft.com"
          phone="+1 (777) 888-9999"
          location="Seattle, WA"
          skills={["Vue.js", "CSS", "Responsive Design"]}
          contactText="Contact Emma"
        />

        <Card
          number={5}
          image="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
          alt="James Anderson"
          name="James Anderson"
          position="Graphic Designer"
          company="DesignHub Agency"
          email="james@designhub.com"
          phone="+1 (333) 444-5555"
          location="Chicago, IL"
          skills={["Branding", "Typography", "Print Design"]}
          contactText="Contact James"
        />

        <Card
          number={6}
          image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
          alt="Sophia Williams"
          name="Sophia Williams"
          position="Product Manager"
          company="InnovateTech"
          email="sophia@innovatetech.com"
          phone="+1 (222) 333-4444"
          location="Boston, MA"
          skills={["Product Strategy", "Analytics", "UX Research"]}
          contactText="Contact Sophia"
        />
      </div>
    </body>
  );
}
export default App;
