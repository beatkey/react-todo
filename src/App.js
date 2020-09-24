import React, {useState} from 'react';
import {Button, InputGroup, FormControl, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [inputValue, setInputValue] = useState("")
    const [items, setItems] = useState([
        "React mı? O da ne?",
        "O adamın dibi!",
        "Eveeettt!",
        "Commit test"
    ])
    const [editing, setEditing] = useState(false)
    const [lastValue, setLastValue] = useState(0)

    const addItem = () => {
        if (inputValue !== "") {
            if (editing) {
                items[lastValue] = inputValue
                setEditing(false)
            } else {
                setItems(items.concat(inputValue))
            }
            setInputValue("")
        } else {
            alert("Please type something!")
        }
    }

    const deleteItem = (value) => {
        setItems(items.filter((val, index) => (index !== value)))
    }

    const editItem = (value) => {
        setEditing(true)
        setLastValue(value)
        setInputValue(items[value])
    }

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Type something and press add"
                            aria-describedby="basic-addon2"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyPress={e => {
                                if (e.key === "Enter") {
                                    addItem()
                                }
                            }}
                        />
                        <InputGroup.Append>
                            <Button type={"submit"}
                                    variant={(editing ? "warning" : "success")}
                                    onClick={() => addItem()}> {editing ? "Edit" : "Add"}</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div className="row">
                    <ListGroup>
                        {
                            items.map((item, value) =>
                                <div key={value}>
                                    <ListGroup.Item>{value}. {item}</ListGroup.Item>
                                    <Button variant="warning" onClick={() => editItem(value)}>Edit</Button>
                                    <Button variant="danger" onClick={() => deleteItem(value)}>Delete</Button>
                                </div>
                            )
                        }
                    </ListGroup>
                </div>
            </div>
        </div>
    );
}

export default App;
