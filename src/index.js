import ReactDOM from 'react-dom/client'

function App()
{
    return <h1>The SPA app</h1>
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App />)