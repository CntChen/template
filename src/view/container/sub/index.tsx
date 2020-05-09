import React from 'react';
import ReactDOM from 'react-dom';

import Example from 'src/view/components/example';

const App = function App() {
    return (
        <div>
            <Example title="Sub Index" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
