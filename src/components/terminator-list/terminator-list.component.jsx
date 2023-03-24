import React from "react";
import Terminator from '../terminator/terminator.component';

const TerminatorList = ({models}) => {
  
  return(
    <div>
      {
        
      
      models.map((model) => {
        let index = 0;
        return(
          <Terminator
            key={model.id}
            id={model.id}
            name={model.name}
            serialNumber={model.serialNumber}
          />
        );
      })}

    </div>
  )
}

export default TerminatorList