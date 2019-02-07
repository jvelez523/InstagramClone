import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <section className="App-main">
            <Post
              nickname="Justin"
              avatar="https://media.licdn.com/dms/image/C4D03AQGZtqP74_XMgw/profile-displayphoto-shrink_100_100/0?e=1554940800&v=beta&t=2d5KXvlVVr9NIT7jH35zH3EKx5KJARIHTIGs6Ro-eLo"
              caption="That's a mighty fine beach!"
              image="https://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ace23929-4f1e-11e8-a5fd-018c7d910674_600x400.jpg"
            />
            <Post
              nickname="Blark"
              avatar="https://media.licdn.com/dms/image/C4E03AQEtBed4fkxp6A/profile-displayphoto-shrink_200_200/0?e=1551312000&v=beta&t=r0737AKI8UWzVuHmLwSUcaUbEMxbmotwJeYSrm_NkDI"
              caption="Holding a mic"
              image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
            />

            {/* more posts */}
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
