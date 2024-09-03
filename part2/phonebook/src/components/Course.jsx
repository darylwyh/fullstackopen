import Content from './Content'
import Header from './Header'
 
const Course = (props) => {
    console.log(props) 
    const { course } = props
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0); //2.2 2.3
 
    return (
      <div>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <p><strong>total of {totalExercises} exercises</strong></p>
      </div>
    )
  }


export default Course

/*
2.5: Separate module step 10
Declare the Course component as a separate module, 
which is imported by the App component. 
You can include all subcomponents of the course in the same module.
*/