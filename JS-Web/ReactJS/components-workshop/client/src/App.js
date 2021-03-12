import { Component } from 'react'

import postService from './services/postService'

import components from './components/index'

import style from './App.module.css'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({posts})
            })
    }

    render() {
        return (
            <div className={style.app}>
                <components.Header />

                <div className={style.container}>
                    <components.Menu />

                    <components.Main posts={this.state.posts} />
                </div>
            </div>
        );
    }
}

export default App
