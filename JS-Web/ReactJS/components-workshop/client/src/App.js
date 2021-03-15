import { Component } from 'react'
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom'

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
                this.setState({ posts })
            })
    }

    render() {
        return (
            <div className={style.app}>
                <components.Header />

                <div className={style.container}>
                    <components.Menu />

                    <Switch>
                        <Route path="/about/:name" component={components.About} exact/>
                        <Route path="/contactus" component={components.Contactus} exact/>
                        <Route path="/" exact>
                            <components.Main posts={this.state.posts} />
                        </Route>
                    </Switch>

                </div>
            </div>
        );
    }
}

export default App
