export default function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}


export default function Input(props) {
  return <input {...props} />;
}


export default function Card({ children }) {
  return <div>{children}</div>;
}

// Reusable.jsx(we assuming all three components above are from seprate files)
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

export default function App() {
  return (
    <div>
      <Card>
        <h2>Reusable Card</h2>
        <Input placeholder="Type here..." />
        <Button onClick={() => alert("Clicked!")}>Click Me</Button>
      </Card>
    </div>
  );
}
