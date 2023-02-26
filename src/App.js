import "./App.css";

function Header() {
  return <div className="header">Header</div>;
}
function Footer() {
  return <div className="footer">Footer</div>;
}
function App() {
  return (
    <div className="App">
      <Header />
      Hello World!
      <Footer />
    </div>
  );
}

export default App;
