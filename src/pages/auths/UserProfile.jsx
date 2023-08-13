import React, { useContext, useEffect } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { RootContext } from '../../App';
import ChangePassword from './ChangePassword'
import ChangeInfo from './ChangInfor'
import "./auth.scss"

export default function ProfilePage() {
    const {userStore} = useContext(RootContext)
    useEffect(()=>{
        console.log("userStore",userStore.data);
    })
  return (
    <section style={{ backgroundColor: 'rgb(255, 244, 248)', marginTop:"130px" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='/'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={userStore?.data?.avatar || ""}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ height: '250px' }}
                  fluid />
              
                <p className="text-muted mb-4">{userStore?.data?.first_name}{userStore?.data?.last_name} </p>
                <div className="d-flex justify-content-center mb-2">
                 
                  <MDBBtn outline className="ms-1"><ChangeInfo/></MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8" >
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>First Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userStore?.data?.first_name} </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Last Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userStore?.data?.last_name} </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userStore?.data?.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />     
              <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">42 Tu Cuong, Tan Binh</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <button type="button" className="btn btn-secondary"><ChangePassword/></button>
              </MDBCardBody>
             
            </MDBCard>

         
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}