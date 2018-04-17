import React from 'react';
import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';

class MainPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        footerVisible: true,
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
        footerVisible: true,
        content: 'Home'
      });
    }

    setContentAbout(e) {
      e.preventDefault();
      this.setState({
        footerVisible: true,
        content: 'About'
      });
    }

    setContentProfile(e) {
      e.preventDefault();
      this.setState({
        footerVisible: true,
        content: 'Profile'
      })
    }

    setContentResume(e) {
      e.preventDefault();
      this.setState({
        footerVisible: false,
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
                {this.state.footerVisible && <Footer/>}
            </div>
        );
    }
}

export default MainPage;
