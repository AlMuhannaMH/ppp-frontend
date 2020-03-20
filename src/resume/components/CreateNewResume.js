import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { addResumes } from '../apiResume'
// import messages from '../messages'

class CreateNewResume extends Component {
  constructor() {
    super()
    this.state = {
      work: {},
      volunteer: {},
      education: {},
      skills: {},
      language: {},
    }
  }

  handleChange = (event, parentObj) => {
    let newName = event.target.value
    let changedKey = event.target.name
    this.setState({
      [parentObj]: { ...this.state[parentObj], [changedKey]: newName }
    })
  }

  onCreateNewResume = event => {
    event.preventDefault()
    // // alert,  history, 
    const { setResumes, history } = this.props

    addResumes({
      "resume": {
        ...this.state.work,
        ...this.state.volunteer,
        ...this.state.education,
        ...this.state.skills,
        ...this.state.language,
      }
    })
      .then(res => {
        console.log('RES', res);
        setResumes(res.data.resume)
      })
      // .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/show-resumes'))
      .catch(error => {
        console.error(error)
        this.setState({
          work: {},
          volunteer: {},
          education: {},
          skills: {},
          language: {},
        })
        //     // alert(messages.signUpFailure, 'danger')
      })
  }

  render() {
    const { work, education, volunteer, skills, language } = this.state
    return (
      <>
        <form className='auth-form' onSubmit={this.onCreateNewResume}>
          <h3>Work Expirance</h3>
          <br />
          <label htmlFor="workCompany">Company Name</label>
          <input
            type="text"
            name="workCompany"
            value={work.workCompany || ""}
            placeholder="work Company"
            onChange={(e) => { this.handleChange(e, 'work') }}
          />
          <br />
          <label htmlFor="workPosition">Position Name</label>
          <input
            type="text"
            name="workPosition"
            value={work.workPosition || ""}
            placeholder="workPosition"
            onChange={(e) => { this.handleChange(e, 'work') }}
          />
          <br />
          <label htmlFor="workWebsite">Website Name</label>
          <input
            type="text"
            name="workWebsite"
            value={work.workWebsite || ""}
            placeholder="workWebsite"
            onChange={(e) => { this.handleChange(e, 'work') }}
          />
          <br />
          <label htmlFor="workStartDate">Start Date</label>
          <input
            type="date"
            name="workStartDate"
            value={work.workStartDate || ""}
            placeholder="workStartDate"
            onChange={(e) => { this.handleChange(e, 'work') }}
          />
          <br />
          <label htmlFor="workEndDate">End Date</label>
          <input
            type="date"
            name="workEndDate"
            value={work.workEndDate || ""}
            placeholder="workEndDate"
            onChange={(e) => { this.handleChange(e, 'work') }}
          />
          <br />
          <label htmlFor="workSummary">Summary</label>
          <input
            type="text"
            name="workSummary"
            value={work.workSummary || ""}
            placeholder="workSummary"
            onChange={(e) => { this.handleChange(e, 'work') }}
          />
          <br />
          <hr />
          <h3>Volunteer</h3>
          <br />
          <label htmlFor="volunteerOrganization">Company Name</label>
          <input
            type="text"
            name="volunteerOrganization"
            value={volunteer.volunteerOrganization || ""}
            placeholder="volunteerOrganization"
            onChange={(e) => { this.handleChange(e, 'volunteer') }}
          />
          <br />
          <label htmlFor="volunteerPosition">Position Name</label>
          <input
            type="text"
            name="volunteerPosition"
            value={volunteer.volunteerPosition || ""}
            placeholder="volunteerPosition"
            onChange={(e) => { this.handleChange(e, 'volunteer') }}
          />
          <br />
          <label htmlFor="volunteerWebsite">Website Name</label>
          <input
            type="text"
            name="volunteerWebsite"
            value={volunteer.volunteerWebsite || ""}
            placeholder="website"
            onChange={(e) => { this.handleChange(e, 'volunteer') }}
          />
          <br />
          <label htmlFor="volunteerStartDate">Start Date</label>
          <input
            type="date"
            name="volunteerStartDate"
            value={volunteer.volunteerStartDate || ""}
            placeholder="startDate"
            onChange={(e) => { this.handleChange(e, 'volunteer') }}
          />
          <br />
          <label htmlFor="volunteerEndDate">End Date</label>
          <input
            type="date"
            name="volunteerEndDate"
            value={volunteer.volunteerEndDate || ""}
            placeholder="volunteerEndDate"
            onChange={(e) => { this.handleChange(e, 'volunteer') }}
          />
          <br />
          <label htmlFor="volunteerSummary">Summary</label>
          <input
            type="text"
            name="volunteerSummary"
            value={volunteer.volunteerSummary || ""}
            placeholder="volunteerSummary"
            onChange={(e) => { this.handleChange(e, 'volunteer') }}
          />
          <br />
          <hr />
          <h3>Education</h3>
          <br />
          <label htmlFor="educationInstitution">Institution</label>
          <input
            type="text"
            name="educationInstitution"
            value={education.educationInstitution || ""}
            placeholder="educationInstitution"
            onChange={(e) => { this.handleChange(e, 'education') }}
          />
          <br />
          <label htmlFor="educationMajor">Major</label>
          <input
            type="text"
            name="educationMajor"
            value={education.educationMajor || ""}
            placeholder="educationMajor"
            onChange={(e) => { this.handleChange(e, 'education') }}
          />
          <br />
          <label htmlFor="educationStudyType">Study Type</label>
          <input
            type="text"
            name="educationStudyType"
            value={education.educationStudyType || ""}
            placeholder="educationStudyType"
            onChange={(e) => { this.handleChange(e, 'education') }}
          />
          <br />
          <label htmlFor="educationStartDate">Start Date</label>
          <input
            type="date"
            name="educationStartDate"
            value={education.educationStartDate || ""}
            placeholder="educationStartDate"
            onChange={(e) => { this.handleChange(e, 'education') }}
          />
          <br />
          <label htmlFor="educationEndDate">End Date</label>
          <input
            type="date"
            name="educationEndDate"
            value={education.educationEndDate || ""}
            placeholder="educationEndDate"
            onChange={(e) => { this.handleChange(e, 'education') }}
          />
          <br />
          <label htmlFor="educationEndDate">Gpa</label>
          <input
            type="text"
            name="educationGpa"
            value={education.educationGpa || ""}
            placeholder="educationEndDate"
            onChange={(e) => { this.handleChange(e, 'education') }}
          />
          <br />
          <label htmlFor="educationSummary">Summary</label>
          <input
            type="text"
            name="educationSummary"
            value={education.educationSummary || ""}
            placeholder="educationSummary"
            onChange={(e) => { this.handleChange(e, 'education') }}
          />
          <br />
          <label>Skills</label>
          <br />
          <label htmlFor="skillsName">Skills Name</label>
          <input
            type="text"
            name="skillsName"
            value={skills.skillsName || ""}
            placeholder="skills Name"
            onChange={(e) => { this.handleChange(e, 'skills') }}
          />
          <br />
          <label htmlFor="skillsLevel">Skills Level</label>
          <input
            type="text"
            name="skillsLevel"
            value={skills.skillsLevel || ""}
            placeholder="skills skillsLevel"
            onChange={(e) => { this.handleChange(e, 'skills') }}
          />
          <br />
          <hr />
          <h3>Languages</h3>
          <br />
          <label htmlFor="languageName">Languages</label>
          <input
            type="text"
            name="languageName"
            value={language.languageName || ""}
            placeholder="languageName"
            onChange={(e) => { this.handleChange(e, 'language') }}
          />
          <br />
          <label htmlFor="languagesFluency">Fluency</label>
          <input
            type="text"
            name="languagesFluency"
            value={language.languagesFluency || ""}
            placeholder="languagesFluency"
            onChange={(e) => { this.handleChange(e, 'language') }}
          />
          <br />
          <button className="btn btn-outline-secondary" type="submit">Create</button>
        </form>
      </>
    )
  }
}
//17
export default withRouter(CreateNewResume)
