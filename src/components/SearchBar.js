import React, { Component } from 'react';


class SearchBar extends Component{
    state={
        term:" "
    };
    inputChangeHandler=(input)=>{
        this.setState({term:input.target.value});
        // console.log(this.state.term);
    };
    onFormSubmitHandler=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };
    render(){
        return (
            <div className="search-bar ui segment" style={{marginTop:"10px"}}>
            
                <form className="ui form" onSubmit={this.onFormSubmitHandler}>
                    <div className="field">
                    <label>Search for video</label>
                    <div className="ui icon input">
                        <input className="prompt" type="text" value={this.state.term} onChange={this.inputChangeHandler}/>
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                    </div>
                </form>
                
                
            </div>
        )
    }
}
export default SearchBar;