import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 footerSection copyRight pt-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d548.7970776876208!2d91.78441879474195!3d22.283596889418803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acdefa3f94d927%3A0x3b9ac1ef884d0302!2sSinger%20Bondortila%20EPZ%20Chittagong!5e0!3m2!1sen!2sbd!4v1637332586406!5m2!1sen!2sbd"
        style={{
          width: "100%",
          height: "300px",
          border: "0",
          loading: "lazy",
        }}
      ></iframe>
      <div className="container">
        <div className="row pt-3">
          <div className="copyRight pt-2">
            <div className="row">
              <div className="col-md-4 text-center text-secondary ">
                <h5>Social Link</h5>
                <div className="socialLink">
                  <a href="https://www.facebook.com/aponfoodltd/?ref=pages_you_manage">
                 
                    <i class="fa fa-facebook-square" id="facebook" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCdxfeW3BguBwR5uwFymmbWw">
                    
                    <i class="fa fa-youtube" id="apple" aria-hidden="true"></i>
                  </a>
                  <a href="https://linkedin.com">
                   
                    <i class="fa fa-linkedin-square" id="github" aria-hidden="true"></i>
                  </a>
                  <a href="https://twitter.com">
                   
                    <i class="fa fa-instagram" id="twitter" aria-hidden="true"></i>
                  </a>{" "}
                </div>
              </div>
              <div className="col-md-4 text-center text-secondary">
                {/* <h5>Address </h5>
                <p>Bondortila,EPZ,Chittagong</p>
                <p>S-islam plaza,2nd floor</p> */}
                <h5>Contact Number : </h5>
                <p>
                  <span>Me.pa - </span>0130559906
                </p>
                <p>
                  <span>Office - </span>0187335006
                </p>
              </div>
              <div className="col-md-4 text-center text-secondary pb-2">
                <h5>Email : </h5>
                <p>Aponfoodandveberage@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
