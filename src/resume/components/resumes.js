import React from 'react';
import Resume from './resume';
import { getResumes, deleteResumes } from '../apiResume';
// import { Link } from 'react-router-dom';

class Resumes extends React.Component {
    componentDidMount() {
        getResumes()
            .then((response) => {
                console.log(response.data.resumes);

                this.props.setResumes(response.data.resumes);
            })
            .catch((error) => {
                console.log('API ERROR:', error);
            });
    }

    // Make an API Call to Delete an Resume
    deleteResume = (id) => {
        console.log('The Resume ID to Delete', id);

        deleteResumes(id)
            .then((response) => {
                console.log(`The Resume with the ID ${id} has been deleted.`);

                const newResumesList = this.props.resumes.filter((resume) => {
                    return resume._id !== id;
                });

                this.props.setResumes(newResumesList);
            })
            .catch((error) => {
                console.log('API ERROR:', error);
            });
    }

    render() {
        let allResumes = <h4>No Resumes!</h4>;

        if (this.props.resumes.length > 0) {
            allResumes = this.props.resumes.map((resume, index) => {
                return <Resume workCompany={resume.workCompany}
                    workPosition={resume.workPosition}
                    workWebsite={resume.workWebsite}
                    workStartDate={resume.workStartDate}
                    workEndDate={resume.workEndDate}
                    workSummary={resume.workSummary}
                    volunteerOrganization={resume.volunteerOrganization}
                    volunteerPosition={resume.volunteerPosition}
                    volunteerWebsite={resume.volunteerWebsite}
                    volunteerStartDate={resume.volunteerStartDate}
                    volunteerEndDate={resume.volunteerEndDate}
                    volunteerSummary={resume.volunteerSummary}
                    educationInstitution={resume.educationInstitution}
                    educationMajor={resume.educationMajor}
                    educationStudyType={resume.educationStudyType}
                    educationStartDate={resume.educationStartDate}
                    educationEndDate={resume.educationEndDate}
                    educationGpa={resume.educationGpa}
                    educationSummary={resume.educationSummary}
                    skillsName={resume.skillsName}
                    skillsLevel={resume.skillsLevel}
                    languageName={resume.languageName}
                    languageFluency={resume.languageFluency}
                    id={resume._id}
                    deleteResume={this.deleteResume}
                    key={index} />;
            });
        }

        return (
            <>
                <div className="all-resumes">
                    <h3 className="badge badge-light">All Resumes</h3>
                    {allResumes}
                </div>
            </>
        );
    }
}

export default Resumes;