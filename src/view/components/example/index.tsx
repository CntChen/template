import React, { useState } from 'react';

interface IProp {
    title: string;
}

export default function Example(props: IProp) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Title: {props.title}</div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
