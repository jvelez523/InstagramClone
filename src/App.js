import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Post from './components/Post'
class App extends Component {
  render() {
    return <div className="App">
            <Header />
            <section className="App-main">
              <Post nickname="Justin" avatar="https://media.licdn.com/dms/image/C4D03AQGZtqP74_XMgw/profile-displayphoto-shrink_100_100/0?e=1554940800&v=beta&t=2d5KXvlVVr9NIT7jH35zH3EKx5KJARIHTIGs6Ro-eLo" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
              <Post nickname="OG" avatar="https://media.licdn.com/dms/image/C4D03AQGZtqP74_XMgw/profile-displayphoto-shrink_100_100/0?e=1554940800&v=beta&t=2d5KXvlVVr9NIT7jH35zH3EKx5KJARIHTIGs6Ro-eLo" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />

              {/* more posts */}
            </section>
          </div>;
      }
    }

    export default App;
