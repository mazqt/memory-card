function SetPicker(props) {
  return (
    <div>
      <select onChange={props.onChangeSet} value={props.selectedSet}>
        {props.magicSets.map((set) => {
          return <option value={set.code}>{set.name}</option>;
        })}
      </select>
    </div>
  );
}

export default SetPicker;
