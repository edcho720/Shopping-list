import React, {useState} from 'react'
import ListItem from "./ListItem"
// import {useContext} from 'react'
// import {Context} from "./Context"
import {nanoid} from 'nanoid'

function Form() {
    // const {listItems, formData, handleSubmit, handleChange} = useContext(Context)

    const [listItems, setListItems] = useState([])

    const [formData, setFormData] = useState(
        {
            itemName: "", 
            quantity: "", 
            comments: "",
            inCart: false
        }
    )

    function addToCart(id) {

        setListItems(oldItems => oldItems.map( item => {
            return item.id === id ? {...item, inCart: !item.inCart} : item })
        ) 
    }

    function handleDelete(id){
        setListItems(oldItems => oldItems.filter( item => item.id !== id))
    }

    function handleChange(e){
        // const {name, value} = e.target
        setFormData(oldData => {
            return {...oldData, 
                    [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(event){
      event.preventDefault();
      setListItems(oldList => {
        return [...oldList, {...formData, id: nanoid()}]
      })
      setFormData({
        itemName: "", quantity: "", comments: ""
    })
}

    const preList = listItems.map( (item, index) => (
        <ListItem 
        key={index} 
        item={item} 
        inCart={item.inCart}
        handleDelete={handleDelete}
        addToCart={addToCart}
        /> 
    ))

  return (
    <div className="form-container">
        <div>
            <form className="input-box" onSubmit={handleSubmit}>

                <label htmlFor="item-input"></label>
                <input 
                    id="item-input" 
                    type="text" 
                    name="itemName" 
                    value={formData.itemName} 
                    onChange={handleChange} 
                    placeholder="item description"
                    ></input>
                
                <label htmlFor="qty"></label>
                <input 
                    id="qty" 
                    type="text" 
                    name="quantity" 
                    value={formData.quantity} 
                    onChange={handleChange} 
                    placeholder="quantity"
                    ></input>
                
                <label htmlFor="comments"></label>
                <textarea  
                    id="comments" 
                    type="text" 
                    name="comments" 
                    value={formData.comments} 
                    onChange={handleChange} 
                    placeholder="notes"
                    />
                
                <button className="add-button">Add item</button>

            </form>
        </div>
        <div className="pre-list">
            {preList}
        </div>
    </div>
  )

}

export default Form
