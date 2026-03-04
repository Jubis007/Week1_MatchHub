import React from 'react';
import './App.css';
import MatchCard from './components/MatchCard';

const App = () => {
  // We'll use placeholder image URLs for the team logos
  const barcaLogo = "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png";
  
  const matches = [
    {
      id: 1,
      competition: "Copa del Rey • Semi-final • Leg 2 of 2",
      homeTeam: "Barcelona",
      awayTeam: "Atlético Madrid",
      homeLogo: barcaLogo,
      awayLogo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Atletico_Madrid_Logo_2024.svg",
      date: "Today",
      time: "3:00 PM",
      link: "https://www.fcbarcelona.com/en/football/first-team/schedule"
    },
    {
      id: 2,
      competition: "La Liga",
      homeTeam: "Athletic Club",
      awayTeam: "Barcelona",
      homeLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/1200px-Club_Athletic_Bilbao_logo.svg.png",
      awayLogo: barcaLogo,
      date: "Sat, Mar 7",
      time: "3:00 PM",
      link: "https://www.fcbarcelona.com/en/football/first-team/schedule"
    },
    {
      id: 3,
      competition: "UEFA Champions League • Round of 16 • Leg 1 of 2",
      homeTeam: "Newcastle",
      awayTeam: "Barcelona",
      homeLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png",
      awayLogo: barcaLogo,
      date: "Tue, Mar 10",
      time: "4:00 PM",
      link: "https://www.fcbarcelona.com/en/football/first-team/schedule"
    },
    {
      id: 4,
      competition: "La Liga",
      homeTeam: "Barcelona",
      awayTeam: "Sevilla",
      homeLogo: barcaLogo,
      awayLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png",
      date: "Sun, Mar 15",
      time: "11:15 AM",
      link: "https://www.fcbarcelona.com/en/football/first-team/schedule"
    },
    {
      id: 5,
      competition: "UEFA Champions League • Round of 16 • Leg 2 of 2",
      homeTeam: "Barcelona",
      awayTeam: "Newcastle",
      homeLogo: barcaLogo,
      awayLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png",
      date: "Mar 18",
      time: "1:45 PM",
      link: "https://www.fcbarcelona.com/en/football/first-team/schedule"
    },
    {
      id: 6,
      competition: "La Liga",
      homeTeam: "Barcelona",
      awayTeam: "Rayo Vallecano",
      homeLogo: barcaLogo,
      awayLogo: "https://ssl.gstatic.com/onebox/media/sports/logos/i5LifmxEVIl0sbvIysiyhw_96x96.png",
      date: "Mar 22",
      time: "9:00 AM",
      link: "https://www.fcbarcelona.com/en/football/first-team/schedule"
    },
    {
      id: 7,
      competition: "La Liga",
      homeTeam: "Atlético Madrid",
      awayTeam: "Barcelona",
      homeLogo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Atletico_Madrid_Logo_2024.svg",
      awayLogo: barcaLogo,
      date: "Apr 5",
      time: "TBD",
      link: "https://www.fcbarcelona.com/en/football/first-team/schedule"
    },
    {
      id: 8,
      competition: "La Liga",
      homeTeam: "Barcelona",
      awayTeam: "Espanyol",
      homeLogo: barcaLogo,
      awayLogo: "https://ssl.gstatic.com/onebox/media/sports/logos/TKitIqelDyN6M-kYt4Uc0g_96x96.png",
      date: "Apr 12",
      time: "TBD",
      link: "https://www.fcbarcelona.com/en/football/first-team/schedule"
    },
    {
      id: 9,
      competition: "La Liga",
      homeTeam: "Barcelona",
      awayTeam: "Celta Vigo",
      homeLogo: barcaLogo,
      awayLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/1200px-RC_Celta_de_Vigo_logo.svg.png",
      date: "Apr 22",
      time: "TBD",
      link: "https://www.fcbarcelona.com/en/football/first-team/schedule"
    },
    {
      id: 10,
      competition: "La Liga",
      homeTeam: "Getafe",
      awayTeam: "Barcelona",
      homeLogo: "https://ssl.gstatic.com/onebox/media/sports/logos/1UDHZMdKZD15W5gus7dJyg_96x96.png",
      awayLogo: barcaLogo,
      date: "Apr 26",
      time: "TBD",
      link: "https://www.fcbarcelona.com/en/football/first-team/schedule"
    }
  ];

  return (
    <div className="App">
      <header className="board-header">
        <img src={barcaLogo} alt="FC Barcelona" className="header-logo" />
        <h1>FC Barcelona Match Hub</h1>
        <h2>Upcoming Fixtures & Schedule</h2>
      </header>
      
      <div className="board-container">
        {matches.map((match) => (
          <MatchCard 
            key={match.id}
            competition={match.competition}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            homeLogo={match.homeLogo}
            awayLogo={match.awayLogo}
            date={match.date}
            time={match.time}
            link={match.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;