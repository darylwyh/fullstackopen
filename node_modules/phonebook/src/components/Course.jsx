const Course = (props) => {
    console.log(props)
    const { course } = props
    return (
      <div>
        <Header course={course} />
      </div>
    )
  }

  export default Course