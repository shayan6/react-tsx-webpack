import React from 'react'
import ReactDom from 'react-dom'

export default function App():JSX.Element{
    const sum = (a:number, b:number) => a + b
    return (
        <h1>
            H{sum(1,2)}llo Typescript!!!
        </h1>
    );
}

const root = document.getElementById('app-root')

ReactDom.render( <App/>, root)