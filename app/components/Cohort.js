import React from 'react';
import { Link } from 'react-router';
export default function Cohort({members, profiles}){
  return (
    <div className="columns is-multiline">
      {profiles.map(student => {
        return members.indexOf(student.id) === -1
        ? null
        : (
          <div key={student.id} className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={student.profile.image_192} alt="" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-5">{student.name}</p>
                   <Link className="subtitle is-6" to={`/user/${student.id}`}> Details </Link>
                  <p className="subtitle is-6">{student.profile.email}</p>
                </div>
              </div>

              <div className="content">
                <small>{student.tz}</small>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    )
  }
