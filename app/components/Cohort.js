import React from 'react';
import { Link } from 'react-router';
export default function Cohort({profiles, members}){
  return (
    <div className="columns is-multiline">
      {members.map(student => {
        if (profiles[student]) {
        return (
          <div key={student} className="column is-quarter">
          <div className="card">
            <header className="card-header">
              <div className="card-header-title">
                <p className="is-text-centered"><strong>{profiles[student].wordCount || 'N/A'}</strong></p>
              </div>
            </header>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={profiles[student].profile.image_192} alt="" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-5">{profiles[student].name}</p>
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
