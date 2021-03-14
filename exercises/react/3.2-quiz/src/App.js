import logo from './logo.svg';
import './App.css';


function QuizTitle(props) {
  return (
    <h1>{props.quizTitle}</h1>
  );
}
function QuestionTitle(props) {
  return (
    <p>{props.questionText}</p>
  );
}

function QuestionInput(props) {
  return (
    <input type={props.inputType}/>
  );
}

function Question(props) {
  const mystyle={
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems: 'center'
  };
  return (
    <div style={mystyle}>
      <QuestionTitle questionText={props.questionText}/>
      <QuestionInput inputType={props.inputType}/>
    </div>
  );
}

  export default function Quiz(props) {
    const mystyle={
      width:'100%',
      display:'flex',
      flexDirection:'column',
      alignItems: 'center'
    };
    return (
      <div style={mystyle}>
        <QuizTitle quizTitle='How Do You Like Front End?'/>
        <Question questionText='How much you love front end?' inputType='range'/>
        <Question questionText='What is your favorite front end feature/topic?' inputType='text'/>
      </div>
    );
  }


