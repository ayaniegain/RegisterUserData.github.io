import React from 'react'

function MyProfile({ fullname, email, password, phone, dob, pic }) {
    console.log(fullname)
    return (
        <div>
        <h1>my data</h1>
            <h2>{fullname}</h2>
            <h2>{email}</h2>
        </div>
    )
}

export default MyProfile
