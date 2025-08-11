import React from "react";
import "./FeatureMovie.css";

export default ({ item }) => {
   let firstDate = new Date(item.first_air_date);
  
   let generos = [];
   for (let i in item.genres) {
       generos.push(item.genres[i].name); 
   }

   
   const maxLengthDescription = 450;
   let description = item.overview.length > maxLengthDescription 
        ? item.overview.substring(0, maxLengthDescription) + "..." 
        : item.overview;

   return (
       <section 
           className="featured" 
           style={{
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundImage: `url(http://image.tmdb.org/t/p/original${item.backdrop_path})`
           }}
       >
          <div className="featured--vertical">
            <div className="featured--horizontal">
              

          <div className="featured--content"> 
             <div className="featured--name">{item.original_name}</div>

             <div className="info">
                <div className="score">{item.vote_average.toFixed(1)}</div>
                <div className="year">{firstDate.getFullYear()}</div>
                <div className="seasson">{item.number_of_seasons} temporada{item.number_of_seasons === 1 ? '' : 's'}</div>
             </div>

             <div className="description">{description}</div>
          </div>

          <div className="buttons">
             < a href="" className="button--view"> ▶ Assitir</a>
             <a href="" className="button--list"> + Minha Lista</a>
          </div>

          <div className="generos"><strong>Gênero:</strong> {generos.join(', ')}</div>
          
            </div>
          </div>
       </section>
   );
};
