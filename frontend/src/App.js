import './App.css';

function App() {
  return (
      <div className="container">
        <Heading className="header-box"/>
        <Input className="input-box" />
        <div className="content-box">
          <Todo-Field className="open-box"/>
          <Todo-Field className="progress-box"/>
          <Todo-Field className="done-box"/>
        </div>
      </div>
  );
}

export default App;
