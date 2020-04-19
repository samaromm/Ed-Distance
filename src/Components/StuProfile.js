import React from "react";
import Header from './Header'
import firebase from '../base'
import Card from './card'

class StuProfile extends React.Component {
  constructor(){
    super()
    this.state={
      students:{},
      student:{},
      videos:{},
      ann:{},
      documents:{}
    }
  }

  componentDidMount(){
    firebase.firestore().collection("university").onSnapshot(snapshots=>{
      const allDocs ={}
      snapshots.docs.map(doc=>{
        return allDocs[doc.id]={...doc.data()}
      })
      this.setState({
        students: allDocs["students"],
        student: allDocs["students"]["student"],
        videos:allDocs["videos"],
        ann:allDocs["Announcements"],
        documents:allDocs["documents"]
      })
    })
  }

  /**React.useEffect(()=>{
      firebase.firestore().collection("university").onSnapshot(snapshots=>{
        const allDocs ={}
        snapshots.docs.map(doc=>{
          return allDocs[doc.id]={...doc.data()}
        })
        setDb(allDocs)
      })
  },[])

  let students ={...db["students"]}
  let studentInfo = {...students["student"]}
  let courses = studentInfo["courses"]**/

  render(){
    return (
      <div>
        <Header home="student" courses={this.state.student["courses"]}/>
        <Card info={this.state.student} type="Student" videos={this.state.videos} ann={this.state.ann} docs={this.state.documents}/>
      </div>
    ) 
  }

};
export default StuProfile;