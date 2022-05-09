/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import user from '../images/download.png';

function ContactCard(props) {
    // eslint-disable-next-line react/destructuring-assignment
    const { name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>

            <i
                className="trash alternate outline icon"
                style={{
                    color: 'red',
                    marginLeft: '60%',
                    display: 'inline-block',
                    marginTop: '10px',
                }}
            />
        </div>
    );
}
export default ContactCard;
