import Content from './Content'
import Header from './Header'
 
const Course = (props) => {
    console.log(props) 
    const { course } = props
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
 
    return (
      <div>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <p><strong>total of {totalExercises} exercises</strong></p>
      </div>
    )
  }


export default Course