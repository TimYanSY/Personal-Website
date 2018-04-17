import React from 'react';
import './Resume.css';
import pdf from './assets/CVSYY.pdf';

class Resume extends React.Component {
      
    render() {
        return(
            <div>
                <object data={pdf} style={{width:"100%", height:"1000px"}}type="application/pdf">
                <embed src={pdf} type="application/pdf" />
                </object>
            </div>
        );
    }
}

export default Resume;