import React, { useState, useEffect } from "react";
import "./styles.css";
import "font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function List() {
  const [item, setItems] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleInput = e => {
    setItems(e.target.value);
  };

  const addAccomplishments = e => {
    setItemList([...itemList, item]);
    setItems("");
  };

  const editItem = e => {
    console.log("Test");
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("Item");
    const JSONObject = JSON.parse(storedItems);
    console.log(JSONObject);
    if (storedItems !== null) {
      setItemList(JSONObject);
    }
  }, []);

  useEffect(() => {
    const string = JSON.stringify(itemList);
    localStorage.setItem("Item", string);
  }, [itemList]);

  return (
    <div className="List">
      <div className="listHeader">
        <span className="listHeaderLeft">Accomplishments</span>
        <div className="listHeaderRight">
          <input
            className="inputText"
            type="text"
            placeholder="Add Accomplishments"
            onChange={handleInput}
            value={item}
          />
          <span onClick={addAccomplishments} className="addIcon">
            &#8853;
          </span>
        </div>
      </div>
      <div className="listBody">
        <ul className="items">
          {itemList.map(item => (
            <li className="listItem">
              {item}{" "}
              <span
                class="glyphicon glyphicon-pencil editIcon"
                onClick={editItem}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
