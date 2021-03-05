import './App.css';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import Counter from './components/Counter';

const booksData = [
    { title: 'Harry Potter', description: 'Wizards and stuff' },
    { title: 'The Witcher', description: 'Swords and Signs' },
    { title: 'Programming with JS', description: 'Isus da ni e na pomosht' },
    { title: 'The Bible', description: 'Isus' },
]

function App() {
    return (
        <div className="site-wrapper">
            <Navbar />

            <Counter />

            <Booklist books={booksData} />
        </div>
    );
}

export default App;
