// Endpoint 1: Retrieve a list of items (e.g., books, products) from a predefined array.
import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())


let items = [
    {
        id: 1,
        name: 'Atomic habits',
        price: '$100'
    },
    {
        id: 2,
        name: 'Before the coffee gets cold',
        price: '$160'
    },{
        id: 3,
        name: 'Mewo',
        price: '$400'
    },
]

app.get("/api/books", (req, res)=>{
    res.send(items).json(items)
    console.log("/Home end point");
})


// Endpoint 2: Add a new item to the list.


app.post("/api/create", (req, res)=>{
    console.log("req hitting this end point???");
    console.log(req.body);
    // creating logic 
            // DB or simple array "items" ?
    // Using array to store the new items
    let {name, price} = req.body
    const newItem = {
        id: items.length +1,
        name: name,
        price: `$${price}`,
    }
    items.push(newItem);

    console.log(items);
    res.status(201).json(newItem, name, price)
})








app.listen(3000, ()=>{
    console.log("listning on port 3000");
})



















