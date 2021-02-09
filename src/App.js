import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
  
  state = { 
    isLoggedIn: false
  }
  
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              {/* exact в NavLink говорит, что эта ссылка будет активной только в том случае,
              если пути полностью совпадают */}
              {/* activeClassName меняет название класса с active на тот, который нам нужен */}
              <NavLink 
                to="/" 
                exact 
                activeClassName={'wfm-active'}
              >Home</NavLink>
              {/* Заменили обычные ссылки а на роут компонент и ссылка как параметр указывается не через
              href, а через to */}
            </li>
            <li>
            {/* activeStyle с его помощью можно добавить объект с параметрами по типу color и тд. */}
              <NavLink 
                to="/about"
                activeStyle={{
                  color: 'blue'
                }}
              >About</NavLink>
            </li>
            <li>
            {/* Также в параметр to мы можем передовать не строку, а объект 
            почитать про search и hash*/}
              <NavLink to={{
                pathname: '/cars'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr />
            <div style={{textAlign: 'center'}}>
              <h3>Is logged in {this.state.isLoggedIn ? 'true' : 'false'}</h3>
              <button onClick={() => this.setState({isLoggedIn: true})}>Login</button>
            </div>


        <hr/>
        <Switch>

        {/* localhost:3000 */}
        <Route path="/" exact render={() => <h1>Home Page</h1>} />
          {/* Мы зарегестрировали с помощью path='/' весь путь, то-есть будет выводится всё, что совпадает
          а параметр exact говорит, что выводить надо только то, что совпадает целиком, то-есть только  localhost:3000
          без /about */}
        
          { this.state.isLoggedIn ? <Route path="/about" component={About} /> : null}


          <Route path="/cars/:name" component={CarDetail}/>
          <Route path="/cars" component={Cars}/>
          <Redirect to={'/'} />
          {/* <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/> */}

        </Switch>

      </div>
    );
  }
}

export default App
