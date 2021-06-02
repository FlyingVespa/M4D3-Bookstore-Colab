import React, { Component } from 'react'


class FilterBooksList extends Component {
    state= {
        query: ""
    }
    InputChange = (e) => {
        console.log(e);
        this.setState({query:e.target.value})
        this.props.passQuery(e.target.value)
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.InputChange}/>
            </div>
        )
    }
}



export default FilterBooksList
