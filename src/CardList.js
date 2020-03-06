//import robots from './robots'; --> you don't need to import this bc it is accessed through the props (passed by index.html)

import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
     <div>
        {
          robots.map((user, i) => {
            return (
              <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
              />
            );
          })
        }
      </div>
    );
}

export default CardList;
