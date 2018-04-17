import React from 'react'

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
    getContent() {
      const content = this.props.ctnt;
      console.log(content);
      if (content === 'About') {
        return 'About';
      }
      if (content === 'Profile') {
        return 'Profile';
      }
      if (content === 'Profile') {
        return 'Profile';
      }
      return "Home";
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
