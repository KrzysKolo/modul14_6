var Counter = React.createClass({
	
	getInitialState: function(){
		return {
		
			counter: 0
		};
		
	},
	
	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},
	
	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	},
	
	componentWillReceiveProps: function(){
		console.log('asdfghn');
	},
	
	componentWillMount: function() {
		console.log('Operacje');
	},
	componentDidUpdate: function() {
		console.log('Operacje na załadowanym DOM');
	},
	componentDidMount: function() {
		console.log('aaa');
	},
	
	componentWillReceiveProps: function(){
		console.log('sdf');
	},
	
	shouldComponentUpdate: function(){
		console.log('asdfghjk');
		return true;
	},
	componentWillUnmount: function(){
		console.log('jkl;');
	},
	
	componentWillUpdate: function(){
		console.log('lkjv');
	},
	
	render: function(){
		return (
				React.createElement('div', {className: 'licznik'},
					React.createElement('h2', {}, 'Licznik'),
					React.createElement('p', {}, 'klik: ' + this.state.counter),
					React.createElement('div', {className: 'przycisk'}, 
						React.createElement('button', {
							className: 'dodaj', 
							onClick: this.increment},'+'),
							
						React.createElement('button', {
							className: 'usun',
                            onClick: this.decrement}, '-')
					)
				)
		);
	}
});

var element = React.createElement('div', {className: 'container'},
		React.createElement('h1', {}, 'Lista liczników:'),
		React.createElement(Counter),
		React.createElement(Counter),
        React.createElement(Counter),
		React.createElement(Counter)
	);

ReactDOM.render(element, document.getElementById('app'));