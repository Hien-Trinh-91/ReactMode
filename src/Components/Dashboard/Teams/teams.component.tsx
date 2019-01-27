import * as React from 'React';
import './teams.component.scss';
// class TeamsComponent extends React.Component<{}, any> {
//     private teamsRender: any;
//     constructor(props: any) {
//         super(props)
//         this.state = {
//             teams: [
//                 {
//                     name: 'Desginers',
//                     members: 3,
//                     projects: 4,
//                     avatar: 'team01.svg'
//                 },
//                 {
//                     name: 'Basic Front-end',
//                     members: 15,
//                     projects: 1,
//                     avatar: 'team02.svg'
//                 },
//                 {
//                     name: 'Operation',
//                     members: 15,
//                     projects: 1,
//                     avatar: 'team03.svg'
//                 },
//                 {
//                     name: 'Android Developers',
//                     members: 3,
//                     projects: 6,
//                     avatar: 'team04.svg'
//                 }
//             ]
//         }
//         this.teamsRender = this.state.teams.map((team: any, index: number) => {
//             return (
//                 <div className="d-flex">
//                     <img src={require(`../../../Assets/Images/Teams/${team.avatar}`)} alt="" className="d-inline" />
//                     <div className="d-flex align-items-center">
//                         <div>
//                             <h4>
//                                 {team.name}
//                             </h4>
//                             <div>
//                                 {team.members} members, {team.projects} projects
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )


//         });
//     }
//     render() {
//         return (
//             <div className="col-md-6 col-lg-4 dashboard-teams mt-2">
//                 <div className="row justify-content-between">
//                     <div className="col-auto align-items-center d-flex">
//                         <h3 className="mb-0">
//                             Teams
//                         </h3>
//                     </div>
//                     <div className="col-auto">
//                         <button className="btn btn-success">
//                             View All
//                         </button>
//                     </div>
//                 </div>
//                 <div className="teams">
//                     {this.teamsRender}
//                 </div>

//             </div>
//         )
//     }
// }

// export default TeamsComponent
