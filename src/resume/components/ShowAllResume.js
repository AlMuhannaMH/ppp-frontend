// import React from 'react';
// // import Article from './article';
// import { getResumes } from '../apiResume';
// import { withRouter } from "react-router-dom";

// import Resume from './resume'

// // // import messages from '../messages'

// class ShowAllResume extends React.Component {
//     componentDidMount() {
//         getResumes()
//             .then((response) => {
//                 this.props.setResume(response.data.resumes);
//             })
//             .catch((error) => {
//                 console.log('API ERROR:', error);
//             });
//     }

//     // // Make an API Call to Delete an Article
//     // deleteArticle = (id) => {
//     //     console.log('The Article ID to Delete', id);

//     //     deleteArticleByID(id)
//     //         .then((response) => {
//     //             console.log(`The Article with the ID ${id} has been deleted.`);
//     //             const newArticlesList = this.props.articles.filter((article) => {
//     //                 return article._id !== id;
//     //             });
//     //             this.props.setArticles(newArticlesList);
//     //         })
//     //         .catch((error) => {
//     //             console.log('API ERROR:', error);
//     //         });
//     // }

//     render() {
//         let allResumes = <h4>No Rsume Found!</h4>;

//         if (this.props.resume.length > 0) {
//             allResumes = this.props.resume.map((resume, index) => {
//                 return <Resume workCompany={resume.workCompany}
//                     key={index} />;
//             });
//         }

//         return (
//             <>
//                 <main className="mainIfo" >
//                     <div className="inner">
//                         <h3>All Resumes</h3>
//                         <ul className="list-group">
//                             <li className="list-group-item" > {allResumes}</li>
//                         </ul>
//                     </div>
//                 </main>
//             </>
//         );
//     }
// }

// export default withRouter(ShowAllResume);