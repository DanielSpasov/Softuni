import { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 11
        }

        this.resetCounter = this.resetCounter.bind(this)
    }

    decrementCounter(e) {
        // this.setState({ count: this.state.count - 1 }) // Syncronous
        this.setState(oldState => ({ count: oldState.count - 1 })) // Asyncronous
    }

    incrementCounter(e) {
        // this.setState({ count: this.state.count + 1 }) // Syncronous
        this.setState(oldState => ({ count: oldState.count + 1 })) // Asyncronous
    }

    resetCounter(e) {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div>
                <h3>Book Counter</h3>
                <button onClick={(e) => this.decrementCounter(e)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.incrementCounter.bind(this)}>+</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        )
    }
}

export default Counter