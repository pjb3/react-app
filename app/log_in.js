import React, {Component} from 'react'
import config from './config.json'
import styles from './log_in.scss'

export default class LogIn extends Component{
  render() {
    return (
      <div className={styles.root}>
        <div className="container">
          <main role="main">
            <form>
              <h2>Please Log In</h2>
              <input type="text" name="username" placeholder="Username" className="form-control" required="true" autofocus="true" />
              <input type="password" name="password" placeholder="Password" className="form-control" required="true" />
              <button className="btn btn-lg btn-primary btn-block" type="submit">
                Log In
              </button>
            </form>
          </main>
        </div>
      </div>
    );
  }
}
