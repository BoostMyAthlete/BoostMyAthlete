import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./testimonials.css";

function UserTestimonials() {
  return (
    <MDBContainer className="py-5" id="container">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4" id="testimonials">
            Testimonials
          </h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0" id="user-testimonials">
            See what our satisfied users have to say!
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://cdn.shopify.com/s/files/1/0277/5836/2723/articles/noora_1024x.jpg?v=1673316842"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Noora Kaisa</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Since joining BoostMyAthlete platform, my athletic performance
                has improved significantly. The personalized training plans and
                nutrition guidance have been a game-changer for me. The
                platform's user-friendly interface made it easy for me to track
                my progress and stay motivated towards my fitness goals. The
                support from the trainers and the community has been phenomenal.
                I highly recommend BoostMyAthlete to anyone who wants to take
                their athletic journey to the next level.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#7a81a8" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://rowingaustralia.com.au/wp-content/uploads/2019/04/SamHardy.jpg"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Sam Hardy</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />I had been
                struggling to find the right resources to help me reach my
                athletic goals, but BoostMyAthlete changed everything. The
                platform provided me with access to top-notch training programs,
                personalized nutrition plans, and a supportive community of
                like-minded athletes. With BoostMyAthlete, I was able to not
                only reach my goals but surpass them. I couldn't recommend this
                platform enough to anyone serious about taking their athletic
                performance to the next level.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://rowingaustralia.com.au/wp-content/uploads/2019/06/AlexViney.jpg"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Alexandra Viney</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />I have been
                using BoostMyAthlete for several months now, and I can
                confidently say that it has helped me take my training and
                performance to the next level. The platform is incredibly
                user-friendly, and I love being able to track my progress and
                connect with other athletes. The personalized training plans
                have been instrumental in helping me reach my goals, and I
                appreciate the constant support and encouragement from my coach.
                BoostMyAthlete has truly helped me become a stronger, more
                confident athlete.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default UserTestimonials;
