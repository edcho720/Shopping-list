import React, {useState} from 'react'
// import {useContext} from 'react'
// import {Context} from './Context'

function ListItem({id, item, inCart, handleDelete, addToCart}) {
  // const {listItems} = useContext(Context)
  // const [hovered, setHovered] = useState(false)
  const styles = {
    backgroundColor: !inCart ? "darkseagreen" : "honeydew",
    color: !inCart ? "darkslategrey" : "darkgrey",
    border: !inCart ? "none" : "1px solid darkseagreen"
  }
  const styles2 = {
    backgroundColor: !inCart ? "honeydew" : "darkseagreen",
  }
  const styles3 = {
    color: !inCart ? "honeydew" : "darkgrey",
  }

  return (
    <div className="list-item" style={styles}>
        <button style={styles2} type="radio" id="qty-list">{item.quantity}</button>
        <p style={styles3} id="item-list">{item.itemName}</p>
        <p id="notes-list">{item.comments}</p>

        <h2 
          onClick={() => addToCart(item.id)}
          id="cart"
        >✔️</h2>

        <h2 
          onClick={() => handleDelete(item.id)}
          id="delete"
        >✖️</h2>
    </div>
  )
}

export default ListItem