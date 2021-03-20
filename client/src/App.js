import React, {useState} from 'react'
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import Scoreboard from './pages/Scoreboard'
import Exercise from './pages/Exercise'
import Createpost from './pages/Createpost'
import Login from './pages/Login'
import Post_tag from './pages/Post_tag'
import Goal from './pages/Goal'
import Notification from './components/Notification'
import Navbar from './components/Navbar'

const App = () => {

    const [isLogedin, setIsLogedin] = useState(true)
    
    if(!isLogedin)
        return (
            <Login />
        )

    return (

        <div className={styles.container}>
            <Notification visible={false}/>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/scoreboard">
                        <Scoreboard />
                    </Route>
                    <Route path="/exercise">
                        <Exercise />
                    </Route>
                    <Route path="/createpost">
                        <Createpost />
                    </Route>
                    <Route path="/goal">
                        <Goal />
                    </Route>
                    <Route path="/post/:postid" component={Post_tag}/>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
