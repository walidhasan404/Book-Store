import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const data = [
    { bookName: "The Catcher in the Rye", numOfPagesRead: 224 },
    { bookName: "The Mystery of Oakwood Manor", numOfPagesRead: 368 },
    { bookName: "The Wizard's Apprentice", numOfPagesRead: 416 },
    { bookName: "Love in Paris", numOfPagesRead: 352 },
    { bookName: "The Silent Killer", numOfPagesRead: 288 },
    { bookName: "The Secret Diary of Anne Frank", numOfPagesRead: 352 },
    { bookName: "The Maze Runner", numOfPagesRead: 384 },
    { bookName: "The Haunted House", numOfPagesRead: 320 },
    { bookName: "The Last Survivor", numOfPagesRead: 416 }
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
    <div className='flex justify-center bg-green-100 m-4 p-6'>
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar dataKey="numOfPagesRead" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
    </div>
);

export default RenderBarChart; 
