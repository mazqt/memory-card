function ColourPicker(props) {
  return (
    <div>
      <select onChange={props.onChangeColour} value={props.selectedColour}>
        <option value="White">White</option>
        <option value="Black">Black</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>
    </div>
  );
}

export default ColourPicker;
