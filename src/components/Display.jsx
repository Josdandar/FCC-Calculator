import React from "react";
/*We normally use arrow functions on comonents when they are more simple, and we use function when they have some type of logic behind it */
import "../styles/Display.css"
const Display = ({ input }) => {
  return(
    <div className="input">
      {input}
    </div>
  )
};

export default Display