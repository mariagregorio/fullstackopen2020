import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
};

const Statistic = ({value, text}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
};

const Statistics = ({stats}) => {
    const title = 'statistics';
    const all = stats.good + stats.neutral + stats.bad;
    if(all > 0) {
        return (
            <>
                <h1>{title}</h1>
                <table>
                    <tbody>
                        <Statistic text={'good'} value={stats.good}/>
                        <Statistic text={'neutral'} value={stats.neutral}/>
                        <Statistic text={'bad'} value={stats.bad}/>
                        <Statistic text={'all'} value={all}/>
                        <Statistic text={'average'} value={all > 0 ? stats.score / all : 0}/>
                        <Statistic text={'positive'} value={all > 0 ? `${stats.good * 100 / all} %` : ''}/>
                    </tbody>
                </table>

            </>
        )
    }
    return (
        <>
            <h1>{title}</h1>
            <h2>No feedback given</h2>
        </>
    )

};

const Feedback = ({handleClicks}) => {
    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={() => handleClicks('good')} text={'good'}/>
            <Button onClick={() => handleClicks('neutral')} text={'neutral'}/>
            <Button onClick={() => handleClicks('bad')} text={'bad'}/>
        </div>
    )
};

const App = () => {
    const [stats, setStats] = useState({good: 0, neutral: 0, bad: 0, score: 0});

    const handleClicks = (value) => {
        switch(value) {
            case 'good':
                setStats({...stats, good: stats.good + 1, score: stats.score + 1});
                break;
            case 'neutral':
                setStats({...stats, neutral: stats.neutral + 1});
                break;
            case 'bad':
                setStats({...stats, bad: stats.bad + 1, score: stats.score - 1});
                break;
            default:
                return
        }
    };

    return (
        <>
            <Feedback handleClicks={handleClicks}/>
            <Statistics stats={stats} />
        </>
    )
};

ReactDOM.render(<App />,
    document.getElementById('root')
);
