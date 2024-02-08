import { useEffect, useState } from 'react';
import './Game.css';

export default function Game() {
    const [count, setcount] = useState(0);
    const [pokemon, setPokemon] = useState([]);




    useEffect(() => {

        const urls = [];
        async function catchem() {

            for (let i = 1; i <= 106; i += 3) {


                try {

                    const data = await fetch(`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${i}.svg`);
                    const datablob = await data.blob();

                    urls.push(URL.createObjectURL(datablob))

                } catch (error) {
                    console.log(error)
                }

            }
            setPokemon(urls);
        }


        catchem()



        return () => { urls.forEach((url) => { URL.revokeObjectURL(url) }) }
    }, []);



    return (
        <>
            <div className="score-board">
                <h1>Score Board</h1>
                <div className="borderoutline">
                    <div className="innerdiv1">
                        <h2>count</h2>
                        <h2>high score</h2>
                    </div>
                    <div className="innerdiv2">
                        <h2>{count}</h2>
                        <h2>2</h2>
                    </div>
                </div>
            </div>
            <div className='pokediv'>
                {pokemon.map((item, index) => (
                    <img src={item} key={index} />
                ))}
                <footer><h3>Made with ❤️ in lusaka</h3></footer>
            </div>

        </>
    );
}
