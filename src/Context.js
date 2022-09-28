import React from 'react'
// import {useState} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    // const [listItems, setListItems] = useState([])

    // const [formData, setFormData] = useState(
    //     {itemName: "", quantity: "", comments: ""}
    // )

    // // console.log(listItems)

    // function handleChange(e){
    //     // const {name, value} = e.target
    //     setFormData(oldData => {
    //         return {...oldData, 
    //                 [e.target.name]: e.target.value
    //         }
    //     })
    // }

    // function handleSubmit(event){
    //   event.preventDefault();

    // //   console.log(formData);

    //   setListItems(oldList => {
    //     return [...oldList, formData]
    //   })

    // //   setFormData({
    // //     itemName: "", quantity: "", comments: ""
    // // })
//   }

  return (
    <Context.Provider value={{}}>
        {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}