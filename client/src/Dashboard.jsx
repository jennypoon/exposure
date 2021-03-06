import React from 'react';
import AvatarProfile from './components/Avatar_Profile.jsx';
import CreateEvent from './CreateEvent';
import OpportunityEventCard from './components/Opportunity_EventCard.jsx'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import './styles/Dashboard.css';
import SearchBar from './SearchBar.jsx';
import Applicants from './components/Opportunity_MyEvents_Applicants.jsx'

const left = {
  width: '30%',
  margin: '0px',
  float: 'left',
  overflow: 'hidden'
};

const right = {
  width: '70%',
  float: 'left',
  overflow: 'hidden'
};

const tabStyle = {
  width: '100%',
  margin: '50px auto',
  fontSize: '25px'
};

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      avatar: null,
      type: null,
      events: [],
      userevents: []
    }

    this.createEvent = this.createEvent.bind(this);
    this.renderLikedPhotographer = this.renderLikedPhotographer.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this)
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    let currentUser = this.props.currentUser;
    axios.get(`/dashboard`, {
      params: {
        currentUser: currentUser
      }
    }).then(response => {
      this.setState({
          likedPhotographers: response.data.likes,
          userevents: response.data.events.reverse()
      });
    });
  }

  deleteEvent(event, creator) {
    let currentUser = parseInt(this.props.currentUser)
    if (creator === currentUser) {
      axios.post(`/opportunities/${event}/delete`,
        { event_id: event,
          creatorid: creator} )
      .then((res) => {
        let newEvents = res.data;
        this.setState({ opportunities: newEvents });
      })

      axios.get(`/opportunities/applied/${this.props.currentUser}`).then(res => {
        this.setState({'appliedopportunities': res.data })
      });
    } this.refresh();
  }

   createEvent(title, description, date, price, location) {
    axios.post(`/opportunities/${this.props.currentUser}/add`, {
        title: title,
        description: description,
        date: date,
        price: price,
        location: location,
        creator_id: this.props.currentUser
      })
      .then((res) => {
        let newEvents = res.data.reverse();
        this.setState({events: newEvents});
        newEvents.map((event) => {
          let date = event.event_date.toString().split('T')[0]
          return (
            <OpportunityEventCard
              key={event.event_id}
              deleteEvent={this.deleteEvent}
              event={event}
              date={date}
              currentUser={this.props.currentUser}
              />
            );
        });
      })
      this.refresh()
  }

  displayEvents(events) {
    if (!events || events.length === 0 ) {
      return (
        <p>You have no events yet! Why not create one?</p> )
    } else {
      return events.map((event) => {
        let date = event.event_date.toString().split('T')[0]
        return (
          <OpportunityEventCard
              key={event.event_id}
              deleteEvent={this.deleteEvent}
              event={event}
              date={date}
              currentUser={this.props.currentUser}
              />
        )
      })
    }
  }

  componentDidMount() {
    const pathName = this.props.location.pathname

    let currentUser = this.props.currentUser;
    axios.get(`/dashboard`, {
      params: {
        currentUser: currentUser
      }
    }).then(response => {
      this.setState({
          name: response.data.user[0].first_name + " " + response.data.user[0].last_name,
          avatar: response.data.user[0].profile_image,
          type: response.data.user[0].user_type_id,
          likedPhotographers: response.data.likes,
          userevents: response.data.events
      });
    });
  }

  renderLikedPhotographer(photographers=[]) {
    const starredPhotographer = {
      width: '150px',
      height: '170px',
      overflow: 'hidden'
    };

    const starredPhotographer__img = {
      width: '90%',
      float: 'left',
      margin: '10px',
      borderRadius: '50%'
    };
    return photographers.map((photographer) => {
      return (
        <div className="photographerContainer" key={photographer.artist_id}>
        <div style={starredPhotographer}>
          <Link to={`/artists/${ photographer.artist_id }`}>
            <img style={starredPhotographer__img} alt="profileimg" src={photographer.profile_image} /><br/>
          </Link>

        </div>
        <h3>{photographer.first_name + ' ' + photographer.last_name}</h3>
        </div>
      )
    })
  }

  render() {
    const userType = this.state.type;

    const tabs = (
      <div style={tabStyle}>
        <Tabs>
          <TabList>
            <Tab style={{textTransform : "uppercase", fontFamily: "Assistant, sansSerif", letterSpacing: "2px", fontWeight: "700"} }>Favorite Photographers</Tab>
            <Tab style={{textTransform : "uppercase", fontFamily: "Assistant, sansSerif", letterSpacing: "2px", fontWeight: "700"} }>My Events ({this.state.userevents.length}) </Tab>
            <Tab style={{textTransform : "uppercase", fontFamily: "Assistant, sansSerif", letterSpacing: "2px", fontWeight: "700"} }>Applicants</Tab>
          </TabList>

          <TabPanel>
          <h2>YOUR FAVORITE PHOTOGRAPHERS</h2>
            <div className="starredContainer">
            { (this.state.likedPhotographers) ? this.renderLikedPhotographer(this.state.likedPhotographers) : "You haven't saved any photographers!" }
            </div>
          </TabPanel>

          <TabPanel>
            <h2> YOUR EVENTS </h2>
            <p>Check out other postings on the<NavLink to="/opportunities">Job Board</NavLink></p>
            <CreateEvent createEvent={this.createEvent}/>

            { this.displayEvents(this.state.userevents) }
          </TabPanel>

          <TabPanel>
            <Applicants
              saveApplicants = {this.saveApplicants}
              currentUser={this.props.currentUser}
              refresh={this.refresh}
              />
          </TabPanel>
        </Tabs>
      </div>
    );

    let search;
    if(this.props.search){
      search = <SearchBar searchResult={this.props.searchResult} />
    }

    return (
      <div className='contentWrapper'>
        {search}
        {/* start left */}
        <h1 style={{fontSize: '3.5em'}}>Your Dashboard</h1>
        <div className='left' style={left}>
          <AvatarProfile name={this.state.name} avatar={this.state.avatar} />
        </div>
        {/* start right */}
        {userType === 2 ? (
          <div className='right' style={right}>
            {tabs}
          </div>
        ) : (
            <div className='right' style={right}>
            </div>
          )}
      </div>
    );
  }
}

export default Dashboard;