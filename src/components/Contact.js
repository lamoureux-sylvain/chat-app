import React from "react";
import PropTypes from 'prop-types';
import "./Contact.css";

// function Contact() {
//     return (
//         <div className="Contact">
//             <img
//                 className="avatar"
//                 src="https://randomuser.me/api/portraits/men/58.jpg"
//                 alt="Mike Oxlong"
//             />
//             <div>
//                 <p className="name">Mike Oxlong</p>
//                 <div className="status">
//                     <div className="status-online" />
//                     <p className="status-text">online</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

function Contact(props) {
    return (
        <div className="Contact">
            <img
                className="avatar"
                src={props.avatar}
                alt={props.name}
            />
            <div>
                <p className="name">{props.name}</p>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline'} />
                    <p className="status-text">{props.online ? 'online' : 'offline'}</p>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;
