import { Component } from 'react'
import Book from './Book'


class Booklist extends Component {
    constructor(props) {
        super(props)
    }

    bookClicked(title) {
        console.log(`The book ${title} has been added to basket`)
    }

    render() {
        return (
            <div className="book-list">
                <h2>Our Book Collection</h2>

                {this.props.books.map(x => {
                    return <Book
                        title={x.title}
                        description={x.description}
                        clickHandler={() => this.bookClicked(x.title)}
                    />
                })}
            </div>
        )
    }
}

export default Booklist;