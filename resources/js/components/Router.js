import React from 'react';
import ReactDOM from 'react-dom';

function RouterLoader() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">RouterLoader Component</div>

                        <div className="card-body">I'm an RouterLoader component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RouterLoader;

if (document.getElementById('router')) {
    ReactDOM.render(<RouterLoader />, document.getElementById('router'));
}
