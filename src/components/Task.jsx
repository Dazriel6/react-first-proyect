import "../css/TaskStyles.css";
export function TaskCard() {
  const h1Style = { color: "yellow" };

  return (
    <div style={{ padding: "10px", backgroundColor: "#606060" }}>
      <h1>Mi primer proyecto</h1>
      <p style={h1Style}>Proyecto de react</p>
    </div>
  );
}

export function Navbar({ ready }) {
  return (
    <div className="Navbar">
      <ul>
        <li className={ready ? "green" : "blue"}>Home</li>
        <li>Us</li>
        <li>Contact</li>
        <li>Support</li>
      </ul>
    </div>
  );
}
