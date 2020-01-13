import React from 'react';
import { Link } from 'react-router-dom';
import './ReceptionPage.css';

const ReceptionPage = () => {
  return (
    <section className='reception-page'>
      <p className='reception-text'>
        Pokemon is a game based loosely off of natural history. Its many fictional creatures emulate those found
        in the real world. In playing pokemon, we encounter the fundamental joy of exploring the mysterious bounties of nature, of lifting up a rock to encounter
        the hidden world of what may lay beneath. To any outdoorsman, Pokemon offers this experience anew via fictional and fantastical ecosystems. You can once again, for the first time,
        explore a new world of earth-like possibilites. Except here, rodents emit lightning.

        It's important to understand that pokemon are type-based creatures powered by natural, elemental powers. Collecting these beings and pitting their skills against each other is the essence
        of the PokeWorld. Pokemon battles involve making the right stylistic matchups where having the appropriate
        elemental type to counter a specific foe confers a massive advantage. This app will help you leverage these natural balancing forces (water vs fire, fire vs grass) to optimize your Poke Battles.
        Search for any pokemon to find its types, the types best suited to exploit it, and a list of suggested pokemon wielding those particular skills.

        Step forward into the world of pokemon, where picking the RIGHT pokemon is key.
      </p>
      <Link to ='/pokesearch'>
        <button className='home'>Enter</button>
      </Link>
    </section>
  )
}

export default ReceptionPage;
