import React, { Component } from 'react';
import AppCard from './components/Opportunity_AppliedCard.jsx';
import axios from 'axios';


//DISPLAY APPLIED OPPORTUNITIES

class AppliedCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appliedopportunities: [],
    };

    this.displayAppliedEvents = this.displayAppliedEvents.bind(this)
    this.deleteApplication = this.deleteApplication.bind(this)
  }

  deleteApplication(app_id) {
    axios.post(`/opportunities/applied/${this.props.currentUser}`, {
      application_id: app_id,
      currentUser: this.props.currentUser
    })
    .then((res) => {
      let updatedAppList = res.data;
      this.setState({appliedopportunities: updatedAppList});
    });
      this.props.refreshApplybutton();
  }

  displayAppliedEvents(events) {
    if (!events || events.length === 0 ) {
      return (
        <p style={{marginLeft:'10%'}}>You haven't applied to anything! Why not checkout the opportunities board? </p> )
    } else {
      return events.map((event) => {
        let date = event.event_date.toString().split('T')[0];
        return (
          <AppCard deleteApplication={this.deleteApplication} event={event} date={date} usertype={this.props.usertype} currentUser={this.props.currentUser}/>
          )
      })
    }
  }

  componentDidMount() {
    axios.get(`/opportunities/applied/${this.props.currentUser}`)
      .then(res => {
        this.setState({'appliedopportunities': res.data });
    });
  }

  render () {
    return (
      <section className="opportunities">
        <div className="oppHeader">
          <h2> Events You Applied To: </h2>
        </div>
        {this.displayAppliedEvents(this.state.appliedopportunities.reverse())}
      </section>
      )
  }
}

export default AppliedCard;
