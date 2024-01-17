import React from 'react';
import "../../styles/playerStats.css";

const PlayerStats = () =>{
    return (
        <header id='playerStats'>
            <h1>Hugo Vega Level 23</h1>
            <section id='playerStats__lines'>
                <span id='playerStats__lines__thick'></span>
                <span id='playerStats__lines__thin'></span>
            </section>
            <h2>Fullstack Developer, Data Analyst, Machine/AI Engineer, UI/UX Designer, Marketing Expert</h2>
        </header>
    )
}

export default PlayerStats;