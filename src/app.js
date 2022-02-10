import React, { Component } from "react";

class App extends Component {
  state = {
    items: [],
    loading: false,
  };

  onClickHandler() {
    window.location.reload(false);
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let items = data.results.map((user) => {
          return (
            <div>
              <img src={user.picture.large}></img>
              <p>
                Name: {user.name.first} {user.name.last}
              </p>
              <p>Birthday: {user.dob.date}</p>
              <p>Age: {user.dob.age}</p>
              <p></p>
              <p>
                Address: {user.location.street.number},{" "}
                {user.location.street.name}
              </p>
              <p>Postcode: {user.location.postcode}</p>
              <p>City: {user.location.city}</p>
              <p>State: {user.location.state}</p>
              <p>Country: {user.location.country}</p>
              <p></p>
              <p>Phone: {user.phone}</p>
              <p>Email: {user.email}</p>
              <p>User: {user.login.username}</p>
              <p>Password: {user.login.salt}</p>
            </div>
          );
        });
        this.setState({ items: items });
        console.log(this.state.items);
      });
  }

 
  render() {
    return (
      <div className="App">
        <h1>uGEN</h1>
        <h2>
          A free, simple and quick open-source API for generating random user
          data. Like Lorem Ipsum, but for user data.
        </h2>

        {this.state.items}

        <button onClick={this.onClickHandler}>Generate a new user</button>

        <h4>
          Discover the advantages of generative media and generate your own data
          clicking<u>here</u>
        </h4>
      </div>
    );
  }
}

export default App;
