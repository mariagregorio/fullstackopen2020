import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    )
};

const Content = ({parts}) => {
    return (
        <>
            {parts.map(part =>
                <Part key={part.id} part={part.name} exercises={part.exercises}/>
            )}
        </>
    )
};

const Part = ({part, exercises}) => {
  return (
      <p>
          {part} {exercises}
      </p>
  )
};

const Total = ({parts}) => {
    const reducer = (acc, current) => acc + current.exercises;
    return (
        <p><b>total of {parts.reduce(reducer, 0)} exercises</b></p>
    )
};

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
};

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    };

    return <Course course={course} />
};

ReactDOM.render(<App />, document.getElementById('root'));
