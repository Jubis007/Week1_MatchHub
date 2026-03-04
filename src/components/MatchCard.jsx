import React from 'react';
import './MatchCard.css';

const MatchCard = (props) => {
  return (
    <div className="MatchCard">
      <p className="competition">{props.competition}</p>
      
      <div className="match-info">
        <div className="team">
          <img src={props.homeLogo} alt={props.homeTeam} className="team-logo" />
          <h4>{props.homeTeam}</h4>
        </div>
        
        <div className="vs">VS</div>
        
        <div className="team">
          <img src={props.awayLogo} alt={props.awayTeam} className="team-logo" />
          <h4>{props.awayTeam}</h4>
        </div>
      </div>

      <div className="time-info">
        <p>{props.date} • {props.time}</p>
      </div>

      {/* Stretch Goal: Button link */}
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button className="tickets-btn">Match Center</button>
      </a>
    </div>
  );
};

export default MatchCard;