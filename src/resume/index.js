import React from 'react';
import Resumes from './components/resumes.js';
import { withRouter } from 'react-router-dom'

class Index extends React.Component {
    render() {
        return (
            <div className="App">
                <Resumes resumes={this.props.resumes} setResumes={this.props.setResumes} />
            </div>
        );
    }
}

export default withRouter(Index);