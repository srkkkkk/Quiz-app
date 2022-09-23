import QuestionsData from "../data/QuestionData";

const Quiz = ()=>{ //การสร้าง component แบบ function component ชื่อว่า Quiz
    console.log(QuestionsData)
    return(
        <div className="quiz">
            <h1>Quiz Component</h1>
        </div>
    )
}

export default Quiz;