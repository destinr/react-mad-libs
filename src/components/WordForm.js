function WordForm(props) {
  // render
  function handleChange(index,value){
    console.log(index, value)
    props.updateMadLibWord(index,value)
  }
    
  
  return (
    <div id="div-words">
      {props.words.map((word,index) => {
        return (<input key={word.key} placeholder={word.label} onChange={event=>props.updateMadLibWord(index,event.target.value)}/>)
      })}
    </div>
  )
}

export default WordForm
