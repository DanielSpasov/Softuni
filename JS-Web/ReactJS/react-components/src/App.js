import './App.css';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
    return (
        <div className="site-wrapper">
            <Navbar />

            <Booklist />

            <Counter />

            <Footer />
        </div>
    );
}

export default App;
