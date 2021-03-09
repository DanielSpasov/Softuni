import { Component } from 'react'

class Message extends Component {

    constructor(props) {
        super(props)

        this.state = {
            company: 'SoftUni'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ company: 'Software University' })
        }, 1000)
    }

    render() {
        return <span>{this.props.text} | {this.state.company}</span>
    }

}

export default Message