import React from 'react';
import { Link } from 'react-router';
export default function Cohort({profiles, members}){
  return (
    <div className="columns is-multiline">
      {members.map(student => {
        if (profiles[student]) {
        return (
          <div className="column is-quarter">
          <div key={student} className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={profiles[student].profile.image_192} alt="" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-5">{profiles[student].name}</p>
                  <p className="title is-5">{profiles[student].wordCount}</p>
                   <Link className="subtitle is-6" to={`/user/${profiles[student].id}`}> Details </Link>
                  <p className="subtitle is-6">{profiles[student].profile.email}</p>
                </div>
              </div>

              <div className="content">
                <small>{profiles[student].tz}</small>
              </div>
            </div>
          </div>
          </div>
        )
      }
      })}
    </div>
    )
  }
