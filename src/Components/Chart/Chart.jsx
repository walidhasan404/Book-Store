import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

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

const getPath = (x, y, width, height) => (
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const RenderBarChart = () => (
    <div className='flex justify-center bg-green-100 p-6'>
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar dataKey="numOfBooksRead" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
    </div>
);

export default RenderBarChart; 
