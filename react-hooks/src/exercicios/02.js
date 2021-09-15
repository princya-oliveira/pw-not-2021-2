import * as React from 'react'

export default function Exercicio02({initialName = ''}) {
    // 🐨 initialize the state to the value from localStorage  
    // 💰 window.localStorage.getItem('name') || initialName  
    const [name, setName] = React.useState(
        // recuperação de um valor inicialmente salvo no localStorage
        // ou usa o valor de initialName, caso o item so localStorage não exista
        
        // retornando uma função para criar um lazy initializer, que
        // é executado apenas uma vez, no carregamento inicial da página
        () => readStorage() || initialName
    )

    const [count, setCount] = React.useState(() => 0)

    function readStorage() {
        console.count('Lido localStorage')
        return  window.localStorage.getItem('name')
    }

    // 🐨 Here's where you'll use `React.useEffect`.  
    // The callback should set the `name` in localStorage.  
    // 💰 window.localStorage.setItem('name', name)

    // armazenando em um item do localStorage chamado "name" o valor 
    // da variável de estado name
    React.useEffect(() =>  {
        window.localStorage.setItem('name', name)
        setCount(count + 1)
    }, [name])
    // useEffect() tem dois parâmetros:
    // 1) é uma função que será atualizada depois de uma atualização do componente
    // 2) vetor de dependência: qual ou quais as variáveis de estado que serão
    // monitoradas para a execução do useEffect()

    function handleChange(event) {
        // atualização da variável de estado "name" vai desencadear
        // um atualização do componente. Após a atualização ter sido
        // processada, será executado o useEffect()
        setName(event.target.value)
    }

    return (
      <div>      
          <form>        
                <label htmlFor="name">Name: </label>        
                <input value={name} onChange={handleChange} id="name" />      
            </form>      
                {name ? <strong>Hello {name}</strong> : 'Please type your name'}
                <div>Quantidade de atualizações: {count} </div>
      
      </div>  
    )
}