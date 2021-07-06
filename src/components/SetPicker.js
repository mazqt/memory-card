import React, { useState, useEffect } from "react";

function SetPicker(props) {
  return (
    <div>
      <select onChange={props.onChangeSet} value={props.selectedSet}>
        <option value="DOM">Dominaria</option>
        <option value="LEA">Alpha</option>
        <option value="LEB">Beta</option>
      </select>
    </div>
  );
}

export default SetPicker;
