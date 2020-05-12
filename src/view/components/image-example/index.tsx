import React from 'react';

import './index.less';

export default function ImageExample() {
    return (
        <div className="image-example">
            <p>Image Example</p>
            <div className="image-base jpeg-image" />
            <div className="image-base png-image" />
            <div className="image-base jpg-image" />
            <div className="image-base svg-image" />
        </div>
    );
}
