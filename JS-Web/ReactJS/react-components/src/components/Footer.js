import { Component } from 'react'
import refreshComponent from '../hoc/refreshComponent'
import Message from './Message'

class Footer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showFooter: true
        }
    }

    render() {
        return this.props.refreshCount === 0 ? <Message text="All rights reserved &copy;" /> : null
    }

}

export default refreshComponent(Footer)