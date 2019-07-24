import React from 'react';

function Contact() {
  return (
    <div className="Contact">
       <div className="profile-contact">
          <h3>CONTACT</h3>
        </div>

        <div className="profile-contact-list">
          <div className="profile-contact-list-tittle">
            <h4>PHONE </h4>
          </div>
          <div className="profile-contact-list-details">
            <p>: +123 654 30 33 15</p>
          </div>
          <div className="profile-contact-list-tittle">
              <h4>E-MAIL </h4>
          </div>
          <div className="profile-contact-list-details">
            <p>: yourmail@exa mple.com</p>
          </div>
          <div className="profile-contact-list-tittle">
              <h4>WEB</h4>
          </div>
          <div className="profile-contact-list-details">
            <p>: yourweb@example.com</p>
          </div>
          <div className="profile-contact-list-tittle">
              <h4>ADDRESS</h4>
          </div>
          <div className="profile-contact-list-details">
            <p>: Street address, country Zip.</p>
          </div>
        </div>
    </div>
  );
}

export default Contact;
