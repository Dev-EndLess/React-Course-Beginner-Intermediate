function Box(props) {
  
  const styles = {
    backgroundColor: props.on ? "#222222" : "#40ff00",
  };

  return (
    <div
      className="box"
      style={styles}
      onClick={() => props.handleClick(props.id)}
    ></div>
  );
}

export default Box;
