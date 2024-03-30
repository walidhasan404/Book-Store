import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
    { bookName: "The Catcher in the Rye", numOfBooksRead: 3 },
    { bookName: "The Mystery of Oakwood Manor", numOfBooksRead: 5 },
    { bookName: "The Wizard's Apprentice", numOfBooksRead: 7 },
    { bookName: "Love in Paris", numOfBooksRead: 10 },
    { bookName: "The Silent Killer", numOfBooksRead: 12 },
    { bookName: "The Secret Diary of Anne Frank", numOfBooksRead: 15 },
    { bookName: "The Maze Runner", numOfBooksRead: 18 },
    { bookName: "The Haunted House", numOfBooksRead: 20 },
    { bookName: "The Last Survivor", numOfBooksRead: 22 }
];

const Chart = () => {
    return (
        <div className="flex justify-center">
            <div className="chart-container p-4 rounded-3xl shadow-lg bg-green-100">
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="numOfBooksRead" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    );
};

export default Chart;
