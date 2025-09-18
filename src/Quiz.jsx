import './styles/styles.css';
import Header from './components/Header';
import QuestionSection from './components/QuestionSection'
export default function Quiz({startClickBtnHandler}) {
    console.log('APP COMPONENT EXECUTING');

    return(
      <main id="quiz-app">
          <Header/>
          <QuestionSection startClickBtnHandler={startClickBtnHandler}/>
      </main>
    )

}