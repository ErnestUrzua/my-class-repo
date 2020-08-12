import React from "react";

function List(props) {
  let list = "";
    props.groceries.map(item => {
      list += "<li>{item.name}</li>";
    })

  return (
    <ul className="list-group">
    
      {list}
    </ul>
  );
}

export default List;
