import React from 'react';
import './grid.css';

const Grid = () => {
    return(
        <section className='grid-container'>
                <article className="container-left"> 
                    <p>
                    Would have been {"\n"} years 44 old today
                    </p>
                    <p>
                        Historic night with {"\n"} 81 points in a game
                    </p>
                </article>
                <article className="container-right">
                    <p>
                        5 Championship {"\n"} rings during his career 
                    </p>
                    <p>
                        4th most points {"\n"} scored in NBA history
                    </p>
                </article>
            </section>
    );
};

export default Grid;