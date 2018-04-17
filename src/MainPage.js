import React from 'react';
import NavBar from './NavBar';
import Content from './Content'

class MainPage extends React.Component {
    
    render() {
        const condition = 1;
        return (
            <div>
                <NavBar/>
                <Content/>
            </div>
        );
    }
}

export default MainPage;