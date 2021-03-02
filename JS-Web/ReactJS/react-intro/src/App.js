import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Lorem from './components/Lorem'

function App() {
    return (
        <div className="site-wrapper">

            <Header>Hello from app Component</Header>

            <main>
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
            </main>

            <Footer />
        </div>
    )
}

export default App;
