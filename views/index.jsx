import React from 'react';

export default class TodoBox extends React.Component {
	render() {
		return (
			<div className="todoBox">
				<h1>Todos</h1>
				<TodoList/>
				<TodoForm/>
			</div>
		)
	}
}

class TodoList extends React.Component {

	render() {
		return (
			<div className="todoList">
				<table style={style.table}>
					<tbody>
						<Todo title="Shopping">Milk</Todo>
						<Todo title="Hair cut">13:00</Todo>
						<Todo title="Learn React">15:00</Todo>
					</tbody>
				</table>
			</div>
		)
	}

}

class Todo extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			checked: false
		};

		this.handleChange = function() {
			this.setState(function(prev, curr) {
				return {
					checked: !prev.state.checked
				}
			});
		};

	};



	render() {
		return (
			<tr>
				<td style={{border: "1px solid black"}}>
					<input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}></input>
				</td>
				<td style={style.tableContent}>{this.props.title}</td>
				<td style={style.tableContent}>{this.props.children}</td>
			</tr>
		)
	}

}
Todo.propTypes = {
	title: React.PropTypes.number.isRequired
}

class TodoForm extends React.Component {
	render() {
		return (
			<div className="todoForm">
				I am a TodoForm.
			</div>
		)
	}
}

let style = {
	tableContent: {
		border: "1px solid black"
	},
	table: {
		border:"2px solid black"
	}
}
