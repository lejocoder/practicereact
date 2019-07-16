import React , { useState } from 'react'
import ReactDOM from 'react-dom';
function App() {
    const [items, setItems] = useState([])
    const addItem = () => [
        setItems([... items, {
            id: items.length,
            value: Math.floor(Math.random()* 10) + 1
        }])
    ]
    const modify = () => {
        let itemsTwo = [...items]
        itemsTwo[0] = items[0] + 1
        setItems(itemsTwo)
    }
    
    return (
        <div>
            <button onClick = {addItem}> Add a number</button>
            <button onClick = {modify}> modify </button>
            <ul>
                {
                    items.map(item => (
                        <li key= {item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

// this is how you work through a normal push. now try to figure how to modify
//export default App
ReactDOM.render(<App/>, document.getElementById('root'));