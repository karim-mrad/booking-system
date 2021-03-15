import React, { useState } from 'react';

function Dropdown({title, items = [], multiSelect = false}){
    const [open, setOpen] = useState(true);
    const [selection, setSelection] = useState([]);
    

    function handleOnClick(item){}

    function isItemInSelection(item) {
        if (selection.some(current => current.id === item.id)) {
          return true;
        }
        return false;
      }

    return (
        <div className="dd-wrapper">
  {/*        <div
            tabIndex={0}
            className="dd-header"
            role="button"
           
          >
            <div className="dd-header__title">
              <p className="dd-header__title--bold">{title}</p>
            </div>
            <div className="dd-header__action">
              
    </div>
          </div>*/}
          {open && (
            <ul className="dd-list">
              {items.map(item => (
                <li className="dd-list-item" key={item.id}>
                  <button type="button" onClick={() => handleOnClick(item)}>
                    <span>{item.value}</span>
                    <span>{isItemInSelection(item) && 'Selected'}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

export default Dropdown;