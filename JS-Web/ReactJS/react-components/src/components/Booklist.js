import { Component } from 'react'
import Book from './Book'
import style from './Booklist.module.css'
import bookService from '../services/bookService'


class Booklist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }

    bookClicked(title) {
        console.log(`The book ${title} has been added to basket`)
    }

    componentDidMount() {
        bookService.getAll()
            .then(books => this.setState({books}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className={style.booklist}>
                <h2>Our Book Collection</h2>

                {this.state.books?.map(x =>
                    <Book
                        key={x.id}
                        title={x.title}
                        description={x.description}
                        clickHandler={() => this.bookClicked(x.title)}
                    />
                )}
            </div>
        )
    }
}

export default Booklist;