import React from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBNavLink
    } from "mdbreact";
import { BrowserRouter as Router, withRouter} from 'react-router-dom';
import app from "../base";
import logo from "../images/laptop.svg"

class Header extends React.Component{

      constructor(){
        super();
        this.state={
          stcourses:[],
          tcourses:[]
        }
      }


      courseList = ()=>{ 
        let copy={}
        if(this.props.home=="student") copy = {...this.state.stcourses}
        else copy={...this.state.tcourses}
        let a=Object.keys(copy).map(element=>{
          return(
            <MDBDropdownItem href={`${this.props.home}/courses/${copy[element]}`}>
                {copy[element]}
            </MDBDropdownItem>
          )
        })
        return a;
      } 

      componentDidMount(){
        app.firestore().collection("university").onSnapshot(snapshots=>{
          const allDocs ={}
          snapshots.docs.map(doc=>{
            return allDocs[doc.id]={...doc.data()}
          })
          this.setState({
            stcourses: allDocs["students"]["student"]["courses"],
            tcourses:allDocs["Teachers"]["teacher"]["courses"]
          })
        })
      }

      render(){
          return(
            <Router>
              <MDBNavbar className="pinkColor fixHeader" dark expand="md">
                  <img src={logo} alt="logo" className="mr-3" width="7%" />
                <MDBNavbarToggler />
                <MDBCollapse id="navbarCollapse3" navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem >
                      <a className="forLinks" href={this.props.home}>Home</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a className="forLinks" href={`${this.props.home}/messages`}>Messages</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a className="forLinks" href={`${this.props.home}/favorites`}>Favorites</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a className="forLastLink" href={`${this.props.home}/discussion`}>Discussion room</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                          <span className="mr-2">Courses</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            {this.courseList()}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem >
                      <MDBBtn color="#FFD9EF" className="text-white submitBtn" onClick={() => app.auth().signOut()}>Sign out</MDBBtn>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className="md-form my-0">
                          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
            </Router>
          )
      }
}
export default Header