import logo from './logo.svg';
import './App.css';

function Box(props) {
  const myStyle = {
    backgroundColor:props.color,
    height:props.height,
    width:props.width,
    display: 'flex',
    margin:'10px 0',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }
  return (
    <div className="box" style={myStyle}>{props.children}</div>
  );
}

export default Box;
