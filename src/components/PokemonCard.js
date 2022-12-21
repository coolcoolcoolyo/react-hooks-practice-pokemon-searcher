import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({
  name, 
  hp, 
  sprites
}) {

  const [flipSprite, setFlipSprite] = useState(true)

  function handleFlipSpriteClick() {
    setFlipSprite((flipSprite) => 
      !flipSprite)
  }

  return (
    <Card>
      <div>
        <br />
        <div 
          className="image" 
          onClick={handleFlipSpriteClick}>
            {flipSprite 
              ? 
                <img 
                  src={sprites.front} 
                  alt="oh no!"
                /> 
              : 
                <img 
                  src={sprites.back}
                  alt="oh yeah!"
                />
            }
        </div>
        <div 
          className="content">
          <div 
            className="header">
              {name.toUpperCase()}
          </div>
        </div>
        <div 
          className="extra content">
          <span>
            <i 
              className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
