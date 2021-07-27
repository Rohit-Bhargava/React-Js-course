const element = React.createElement(
    'div',
    {},
    'Hello World',
    React.createElement('h2', { className: 'rohit' }, 'rohit web dev'),
);

const channelName = 'How are you?';

function getChannelName() {
    if (channelName === 'How are you?')
    return <div>{channelName}</div>;
    else return <div>Else Part</div>;
}

const element2 = (
    <div>
        <div>Hello Rohit!</div>
        {getChannelName()}
    </div>
);

//ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element2, document.getElementById('app'));
