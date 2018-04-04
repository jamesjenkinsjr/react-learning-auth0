import React from 'react';

const Profile = props => (

    <div>
        <h1>Welcome {props.profile.nickname}!</h1>
        <img src={props.profile.picture} alt="profile_pic"/>
    </div>
);

export default Profile;