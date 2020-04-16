import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
// import FirstComponent from './components/FirstComponent';
// import SecondComponent from './components/SecondComponent';
import User from './models/User';
// import UserList from './components/UserList';
// import Glossary from './components/Glossary';
import GlossaryTerm from './models/GlossaryTerm';
// import OldLifecycleComponent from './components/OldLifecycleComponent';
import NewLifecycleComponent from './components/NewLifecycleComponent';
// import BasicForm from './components/BasicForm';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './router/Home';
import Topics from './router/Topics';
import About from './router/About';
import NoMatch from './router/NoMatch';
import TopicDetail from './router/TopicDetail';
import Search from './router/Search';
import TicketList from './components/TicketList';

// era FUNCTION COMPONENT
// ora CLASS COMPONENT

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    
    this.state = { unmount: false };
  }

  appTitle = 'First App';
  nome = 'Alberto';

  myUser = new User(1, 'ajolfir', 'Roberto', 'Ajolfi', 'admin');

  usersList: User[] = [
    new User(1, 'ajolfir', 'Roberto', 'Ajolfi', 'admin'),
    new User(2, 'ajolfir2', 'Roberto', 'Ajolfi1', 'user'),
    new User(3, 'ajolfir3', 'Roberto', 'Ajolfi5', 'user'),
    new User(4, 'ajolfir4', 'Roberto', 'Ajolfi7', 'guest'),
    new User(5, 'ajolfir5', 'Roberto', 'Ajolfi13', 'user')
  ];

  listOfTerms: GlossaryTerm[] = [
    new GlossaryTerm("Term1", "Definition 1"),
    new GlossaryTerm("Term2", "Definition 2"),
    new GlossaryTerm("Term3", "Definition 3"),
  ];

  handleCommit = (message: string) => alert('Data Committed => ' + message);

  toggleComponent = (e: any) => {
    
    e.preventDefault();

    this.setState({ unmount: !this.state.unmount });
  }

  render() {
    const newLifecycleComp = !this.state.unmount && 
      <NewLifecycleComponent name={this.nome} />;
      // <OldLifecycleComponent name={this.nome} />;

    const topics = [
      { id: "1", title:"Title 1"},
      { id: "13", title:"Title 13"},
      { id: "130", title:"Title 130"},
    ];

    const listOfTopics = topics.map(
      t => <li><Link to={"/topic/" + t.id}>{t.title}</Link></li>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TicketList />
          {/* <BrowserRouter>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/about">About</Link></li>
                {listOfTopics}
              </ul>
            </div>

            <hr/>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/topics" component={Topics}/>
              <Route path="/topic/:id?/:pageSize?" component={TopicDetail}/>
              <Route path="/search/:id" component={Search}/>
              <Route path="/about" component={About}/>
              <Route component={NoMatch}/>
            </Switch>
          </BrowserRouter> */}
          {/* <BasicForm /> */}
          {/* <button onClick={this.toggleComponent}>Toggle Component</button> */}
          {/* <OldLifecycleComponent name={this.nome} /> */}
          {/* {newLifecycleComp} */}
          {/* <Header title={appTitle} /> */}
          {/* <FirstComponent name={name} onCommit={handleCommit} /> */}
          {/* <SecondComponent user={myUser} /> */}
          {/* <UserList users={usersList}>
            <div className='box'>
              <Header title={appTitle} />
            </div>
            <hr/>
          </UserList> */}
          {/* <Glossary terms={listOfTerms}/> */}
        </header>
      </div>
    );
  }
}

export default App;
