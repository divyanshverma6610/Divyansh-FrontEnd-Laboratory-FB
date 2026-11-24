function Hello() {
  return <h1>Hello World!</h1>;
}

function App() {
  let a = 10;
  let b = 20;

  return (
    <div>
      <Hello />
      <p>Sum: {a + b}</p>
    </div>
  );
}

export default App;