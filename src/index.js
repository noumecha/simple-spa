import ReactDOM from 'react-dom/client'
// import components
import List from './components/List'

function App()
{
    return (
        <div>
            <h1>The SPA app</h1>
            <List/>
        </div>
    )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App />)