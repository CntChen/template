import React, { useState } from 'react';

import './index.less';

interface IProp {
    title: string;
}

export default function Example(props: IProp) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Title: {props.title}</div>
            <p className="count-number">
                You clicked <span>{count}</span> times
            </p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
