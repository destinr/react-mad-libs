function Selector(props) {
  // render

  function handleChange(e){
    props.setSelectedMadLib(props.data[e.target.value])
  }

  return (
    <div id="div-selector">
      <span>Select Story: </span>
      <select onChange = {handleChange}>
        {props.data.map((madLib,index) => {
        return (<option key={madLib.title} value={index}>{madLib.title}</option>)
      })}
      </select>
    </div>
  )
}

export default Selector

