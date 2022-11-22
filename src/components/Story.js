function Story(props) {
  // render
  const renderStory = () => {
    return props.text // implement changes
  }

  return (
    <div id="div-story">
      { renderStory() }
    </div>
  )
}

export default Story
