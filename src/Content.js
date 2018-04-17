import React from 'react';
import Resume from './Resume';
import About from './About';
import Home from './Home';
import Profile from './Profile';

class Content extends React.Component {
    getContent() {
      const content = this.props.ctnt;
      console.log(content);
      if (content === 'About') {
        return <About/>;
      }
      if (content === 'Profile') {
        return <Profile/>;
      }
      if (content === 'Resume') {
        return <Resume/>;
      }
      return <Home/>;
    }

    render() {
        return (
            <div>
              {this.getContent()}
            </div>
        );
    }
}

export default Content;
