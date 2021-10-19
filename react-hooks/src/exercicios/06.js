import * as React from 'react'

import {PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView} from '../pokemon'

function PokemonInfo({pokemonName}) {
  // 🐨 Have state for the pokemon (null)
  /*
  const [pokemon, setPokemon] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [status, setStatus] = React.useState('idle') // ocioso
  */

  const [state, setState] = React.useState({
    pokemon: null,
    error : null,
    status: 'idle'
  })

  // criando variáveis avulsas somente-leitura para facilitar
  // o trabalho com variáveis de estado objeto
  // (usando desestruturação)
  const { pokemon, error, status } = state

  // 🐨 use React.useEffect where the callback should be called whenever the
  // pokemon name changes.
  // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!

  React.useEffect(() => {

    // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
    if(! pokemonName) return

    // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null
    /// setPokemon(null)
    /// setError(null)
    /// setStatus('pending') // pendente
    setState({pokemon:null, error: null, status: 'pending'})

    // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
    //   fetchPokemon('Pikachu').then(
    //     pokemonData => { /* update all the state here */},
    //   )
    fetchPokemon(pokemonName).then( // deu certo
      pokemonData => {
        /// setPokemon(pokemonData)
        /// setStatus('resolved') // requisição resolvida com sucesso

        /// let stateTemp = {...state} // copia objeto state
        /// stateTemp.pokemon = pokemonData
        /// stateTemp.status = 'resolved'
        /// setState(stateTemp)
        setState({...state, pokemon: pokemonData, status: 'resolved'})
      }
    ).catch( // deu errado
      error => {
        /// setError(error)
        /// setStatus('rejected') // requisição foi rejeitada (com erro)
        setState({...state, error: error, status: 'rejected'})
      }
    )

    // fetchPokemon(pokemonName).then(f1).catch(f2)

  }, [pokemonName])

  // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
  //   1. no pokemonName: 'Submit a pokemon'
  //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
  //   3. pokemon: <PokemonDataView pokemon={pokemon} />
  /*
  if(error) return (
    <div role="alert">
      There was an error: <pre style={{whiteSpace: 'normal'}
      }>{error.message}</pre>
    </div>
  )

  if(!pokemonName) return 'Submit a pokemon'
  else if(pokemonName && ! pokemon) return (
    <PokemonInfoFallback name={pokemonName} />
  )
  else return (
    <PokemonDataView pokemon={pokemon} />  
  )
  */

  switch(status) {
    case 'rejected':
      return (
        <div role="alert">
          There was an error: <pre style={{whiteSpace: 'normal'}
          }>{error.message}</pre>
        </div>
      )
      
    case 'idle':
      return 'Submit a pokemon'
    
    case 'pending':
      return (
        <PokemonInfoFallback name={pokemonName} />
      )

    case 'resolved':
      return (
        <PokemonDataView pokemon={pokemon} />
      )
  }

}

export default function Exercicio06() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}