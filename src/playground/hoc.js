import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    // The component returned here is the HOC
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};


const requireAuthenication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? (
                    <WrappedComponent {...props} />
                    ) : (
                    <p>You must log in to view this message.</p>
                )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthenication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));