import "./App.css";
import logo from "./logo.svg";
import MyComponent from "./MyComponent";
import MyList from "./MyList";

function App() {
    const name = "Youssef";
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hallo {name.toUpperCase()}!</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <MyComponent isLoggedIn={false} />
                <MyList items={["Apple", "Banana", "Orange"]} />
            </header>
        </div>
    );
}

export default App;
