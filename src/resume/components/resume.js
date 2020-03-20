import React from 'react';

class Resume extends React.Component {

        deleteResume = (event) => {
                event.preventDefault();
                this.props.deleteResume(this.props.id);
        }

        render() {
                return (
                        <div className="resume">
                                <div className="work">
                                        <h1>Work</h1>
                                        <label>Company: {this.props.workCompany}</label>
                                        <br /><label>Position: {this.props.workPosition}</label>
                                        <br /><label>Website: {this.props.workWebsite}</label>
                                        {/* <br /><label>StartDa: {this.props.workStartDate.slice(0, 10)}</label> */}
                                        {/* <br /><label>EndDate: {this.props.workEndDate.slice(0, 10)}</label> */}
                                        <br /><label>Summary: {this.props.workSummary}</label>
                                </div>

                                <div className="volunteer">
                                        <h1>Volunteer</h1>
                                        <br /><label>Organization: {this.props.volunteerOrganization}</label>
                                        <br /><label>Position: {this.props.volunteerPosition}</label>
                                        <br /><label>Website: {this.props.volunteerWebsite}</label>
                                        {/* <br /><label>StartDate: {this.props.volunteerStartDate.slice(0, 10)}</label> */}
                                        {/* <br /><label>EndDate: {this.props.volunteerEndDate.slice(0, 10)}</label> */}
                                        <br /><label>Summary: {this.props.volunteerSummary}</label>
                                </div>

                                <div className="education">
                                        <h1>Education</h1>
                                        <br /><label>Institution: {this.props.educationInstitution}</label>
                                        <br /><label>Major: {this.props.educationMajor}</label>
                                        <br /><label>Study Type: {this.props.educationStudyType}</label>
                                        {/* <br /><label>StartDate: {this.props.educationStartDate.slice(0, 10)}</label> */}
                                        {/* <br /><label>EndDate: {this.props.educationEndDate.slice(0, 10)}</label> */}
                                        <br /><label>Gpa: {this.props.educationGpa}</label>
                                        <br /><label>Summary: {this.props.educationSummary}</label>
                                </div>

                                <div className="skills">
                                        <h1>Skills</h1>
                                        <br /><label>Name: {this.props.skillsName}</label>
                                        <br /><label>Level: {this.props.skillsLevel}</label>
                                </div>

                                <div className="language">
                                        <h1>Language</h1>
                                        <br /><label>Name: {this.props.languageName}</label>
                                        <br /><label>Fluency: {this.props.languageFluency}</label>
                                </div>
                                <hr />
                                <br />
                                {/* <h6><a href="/#" onClick={this.deleteResume}>Delete</a> |||| <a href="/#" onClick={this.deleteResume}>Edit</a></h6> */}
                                <h6><a href="/#" onClick={this.deleteResume}>Delete</a></h6>
                                <br />
                                <hr />
                                <hr />
                        </div>
                );
        }
}

export default Resume;