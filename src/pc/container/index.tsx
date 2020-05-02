import React from 'react';
import ReactDOM from 'react-dom';

import Example from '../view/example';

const App = function App() {
    return (
        <div>
            <Example title="Index" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
