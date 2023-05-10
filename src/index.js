import ReactDOM from 'react-dom/client';
// import components
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.css';

function App()
{
    return (
        <div className="container-flex">
            <nav className="navbar justify-content-center sticky-top navbar-light bg-dark">
                <h1 className="px-auto text-light">
                    SPA : Rick & Morty
                </h1>
            </nav>
            <div className="container">
                <List/>
            </div>
        </div>
    )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App />)