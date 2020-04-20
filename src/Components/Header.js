import React from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBNavLink
    } from "mdbreact";
import { BrowserRouter as Router} from 'react-router-dom';
import app from "../base";

class Header extends React.Component{

      constructor(){
        super();
        this.state={
          isOpen: false,
          stcourses:[],
        }
      }

      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }


      courseList = ()=>{     
        const copy = {...this.state.stcourses}
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
            stcourses: allDocs["students"]["student"]["courses"]
          })
        })
      }

      render(){
          return(
            <Router>
              <MDBNavbar className="pinkColor" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text mr-3">EDISTANCE</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem >
                      <MDBNavLink to={this.props.home}>Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Messages</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Favorites</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Discussion room</MDBNavLink>
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