import logo from './logo.svg';
import './App.css';
import useCount from "./hooks/useCount";

function App() {
    const [count, add, minus] = useCount(0)
    return (
        <div className="App">
            <main>
                <div>这个值是：{count}</div>
                <button onClick={() => add(9)}>加发</button>
                <button onClick={() => minus(9)}>减发</button>
            </main>
        </div>
    );
}

export default App;
