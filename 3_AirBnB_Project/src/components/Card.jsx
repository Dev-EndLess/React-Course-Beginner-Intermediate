import star from "./images/star.png"

function Card(props) {
  let status = props.item.online ? 'Online' : 'Offline'

  const styles = {
    backgroundColor: props.item.online ? '#32FF00' : '#FF0000'
  }
  
  return (
    <div className="card">
      <div 
      className="card--badge"
      style={styles}
      >{status}</div>
      <img className="card--image" src={props.item.coverImg} alt="" />
      <div className="card--stats">
        <img className="card--star" src={star} />
        <h2>{props.item.stats.rating}</h2>
        <hr />
        <h4 className="gray">({props.item.stats.reviewCount})</h4>
        <hr />
        <h3>{props.item.location}</h3>
      </div>
      <h2 className="blue">{props.item.title}</h2>
      <h3>
        Desciption <br />
        {props.item.description}
      </h3>
      <h2>
        <span className="price">Price: {props.item.price} $</span>
      </h2>
    </div>
  );
}

export default Card;