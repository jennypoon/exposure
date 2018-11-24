import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import SearchBar from './SearchBar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Dashboard from './Dashboard.jsx';
import SearchResults from './SearchResults.jsx';
import ErrorPath from './Error404.jsx';
import Profile from './Profile.jsx';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Opportunities from './Opportunities.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Settings from './Settings.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchWord: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      websiteUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      twitterUrl: "",
      location: "",
      redirect: false,
      availability: {
        start_date: null,
        end_date: null
      },
      artistId: null,
      usertype: null
    };

    this.loginInfo = this.loginInfo.bind(this);
    this.logout = this.logout.bind(this);
    this.signupInfo = this.signupInfo.bind(this);
    this.editProfileInfo = this.editProfileInfo.bind(this);
    this.searchResult = this.searchResult.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.changeAccountInfo = this.changeAccountInfo.bind(this);
  }

  //LOGIN FEATURE
  loginInfo(email, password) {
    axios.post("/login", { email: email, password: password })
      .then((res) => {
        localStorage.setItem('currentUser', res.data[0].id);
        localStorage.setItem('user_type_id', res.data[0].user_type_id)
        localStorage.setItem('currentUserFirstName', res.data[0].first_name);
        localStorage.setItem('currentUserLastName', res.data[0].last_name);
        this.setState({ redirect: true, usertype: res.data[0].user_type_id });
      });

  }

  //LOGOUT FEATURE
  logout(event) {
    axios.post("/logout")
      .then((res) => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserFirstName');
        localStorage.removeItem('currentUserLastName');
        this.setState({ redirect: true });
      });
  }


  //REGISTER FEATURE
  signupInfo(firstName, lastName, email, password, userType) {
    axios.post("/register", { firstName: firstName, lastName: lastName, email: email, password: password, userType: userType })
      .then((res) => {
        localStorage.setItem('currentUser', res.data[0].id);
        this.setState({ redirect: true });
      });
  }

  //EDIT ACCOUNT FEATURE
  changeAccountInfo(firstName, lastName, email, password) {
    axios.post('/settings', { firstName: firstName, lastName: lastName, email: email, password: password })
      .then((res) => {
          let newFirstName = res.data[0].first_name;
          let newLastName = res.data[0].last_name;
          let newEmail = res.data[0].email;
          this.setState({ redirect: true, firstName: newFirstName, lastName: newLastName, email: newEmail })
          localStorage.removeItem('currentUserFirstName');
          localStorage.removeItem('currentUserLastName');
          localStorage.setItem('currentUserFirstName', newFirstName);
          localStorage.setItem('currentUserLastName', newLastName);
    });
  }

  //EDIT PROFILE FEATURE
  editProfileInfo(firstName, lastName, email, password, website, instagram, facebook, twitter, location) {
    axios.post('/artists/:id/edit', { firstName: firstName, lastName: lastName, email: email, password: password, website: website, instagram: instagram, facebook: facebook, twitter: twitter, location: location })
      .then((res) => {
        this.setState({ redirect: true });
      });
  }

  //SEARCH FEATURE
  searchResult(word) {
    axios.get("/search", {
      params: {
        searchWord: word
      }
    })
     .then((res) => {
        this.setState({redirect: true, searchWord: word, searchimages: res.data});
      });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      this.setState({ redirect: false })
      return <Redirect to='/search' />
    }
  }

  componentDidMount() {
    //This is how you use axios for get requests! Axios is like an ajax library

    axios.get("/homephotos")
      .then(res => this.setState({ homephotos: res.data }));

    // axios.get("/artist/:id/dashboard")
    //   .then(res => console.log(res.data));

    // axios.get("/opportunity")
    //   .then(res => console.log(res.data));

    // axios.get("/client/:id/dashboard")
    //   .then(res => console.log(res.data));

    // <Availability saveAvailability = {this.saveAvailability }/>

  }

  render() {
    const currentUser = localStorage.getItem('currentUser');
    const user_type_id = localStorage.getItem('user_type_id');
    const currentUserName = localStorage.getItem('currentUserFirstName') + ' ' + localStorage.getItem('currentUserLastName');
    return (
      <BrowserRouter>
        <div>
          {this.renderRedirect()}
          <Navbar loginInfo={this.loginInfo}
            signupInfo={this.signupInfo}
            currentUser={currentUser}
            logout={this.logout} />
          <SearchBar searchResult={this.searchResult}/>
          <Switch>
            <Route path='/home' render={() => <Home homephotos={this.state.homephotos}/>} />
            <Route path='/artists/:id' render={props => <Profile
              {...props}
              currentUser={currentUser} />} />
            <Route path='/opportunities' name='opportunities' render={(props) =>
                <Opportunities {...props}
                  currentUser={currentUser}
                  usertype={user_type_id}
                  currentUserName={currentUserName}/>
                }
            />
            <Route path='/dashboard' name='dashboard' render={(props) => <Dashboard {...props} currentUser={currentUser} />} />
            <Route path='/search' name='search' render={props => <SearchResults
              {...props}
              searchWord={this.state.searchWord}
              searchimages={this.state.searchimages} />} />
            <Route path ='/about' name='about' render={() => <About />} />
            <Route path ='/contact' name='contact' render={() => <Contact />} />
            <Route path ='/settings' name='settings' render={(props) => <Settings {...props} 
              currentUserName={currentUserName}
              changeAccountInfo={this.changeAccountInfo} />} />
            <Route exact path="/" render={() => (<Redirect to="/home" />)} />
            <Route component={ErrorPath} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
