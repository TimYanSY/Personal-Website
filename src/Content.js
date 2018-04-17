import React from 'react'

class Content extends React.Component {
    getContent() {
      const content = this.props.ctnt;
      console.log(content);
      if (content === 'About') {
        return 'About';
      }
      if (content === 'Profile') {
        return 'Profile';
      }
      if (content === 'Resume') {
        return 'Resume';
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
