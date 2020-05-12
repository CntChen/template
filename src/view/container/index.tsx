import React from 'react';
import ReactDOM from 'react-dom';

import Example from 'src/view/components/example';
import ImageExample from 'src/view/components/image-example';

const App = function App() {
    return (
        <div>
            <Example title="Index" />
            <ImageExample />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
