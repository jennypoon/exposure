import React, {Component} from 'react';


class Portfolio extends React.Component {

  constructor(props) {
    super(props);

    // this.displayPortfolio = this.displayPortfolio.bind(this)
  }

  // displayPortofio(images) {
  //   console.log("displayPortofio", images)
  //   if (!images || images.length === 0 ) {
  //     return (<p> Sorry! No photos to share!</p>)
  //   } else {
  //     return images.map(function(image) {
  //       return <img className="searchResult" src={image.src} />
  //     })
  //   }
  // }

  render() {
    console.log("Portfolio", this.props.match)

  return (

  <div className="profile__portfolio">
    <h1>Steve Irwin's Portfolio</h1>
    <section className="wrapper">
    </section>
  </div>
  );
 }
}

export default Portfolio;