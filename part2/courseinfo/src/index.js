import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
    return (
        <h2>{course}</h2>
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
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
};

const Courses = ({courses}) => {
    return (
        <>
            {courses.map(course => <Course key={course.id} course={course} />)}
        </>
    )
};

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ];

    return (
        <>
            <h1>Web development curriculum</h1>
            <Courses courses={courses} />
        </>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
