import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({
  onAddPoke,
}) {


  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
        hp: hp,
        sprites: {
          front: front,
          back: back
        }
      }),
    })
      .then((resp) => resp.json())
      .then((newPoke) => onAddPoke(newPoke))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={
          handleSubmit
        }
      >
        <Form.Group 
          widths="equal">
          <Form.Input
            fluid
            label="Pokedex Number"
            placeholder="#"
            name="Pokedex Number"
            value={id}
            onChange={(e) =>
              setId(parseInt(e.target.value))
            }
          />
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hp}
            onChange={(e) =>
              setHp(e.target.value)
            }
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={(e) =>
              setFront(e.target.value)
            }
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) =>
              setBack(e.target.value)
            }
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
