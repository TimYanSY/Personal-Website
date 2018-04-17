import React from 'react';
import NavBar from './NavBar';
import Content from './Content'

class MainPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        content: 'Home'
      }
      this.setContentHome = this.setContentHome.bind(this);
      this.setContentAbout = this.setContentAbout.bind(this);
      this.setContentProfile = this.setContentProfile.bind(this);
      this.setContentResume = this.setContentResume.bind(this);
    }

    setContentHome(e) {
      e.preventDefault();
      this.setState({
        content: 'Home'
      });
    }

    setContentAbout(e) {
      e.preventDefault();
      this.setState({
        content: 'About'
      });
    }

    setContentProfile(e) {
      e.preventDefault();
      this.setState({
        content: 'Profile'
      })
    }

    setContentResume(e) {
      e.preventDefault();
      this.setState({
        content: 'Resume'
      })
    }
    render() {
        return (
            <div>
                <NavBar
                setContentHome={this.setContentHome}
                setContentAbout={this.setContentAbout}
                setContentResume={this.setContentResume}
                setContentProfile={this.setContentProfile}
                />
                <Content ctnt={this.state.content}/>
            </div>
        );
    }
}

export default MainPage;
