"use strict";

import React from 'react';
var $ = require('jquery');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputText: undefined};
    }

    render() {
        var $this = this;

        return (

            <div className="panel panel-default">

                <div className="panel-header"></div>

                <div className="row">
                    <div className="col-md-12">

                        <form onSubmit={$this.onSubmit.bind($this)}>

                            <div className="row">

                                <div className="col-md-10">

                                    <input type="text" className="form-control"
                                           name="text" value={$this.state.inputText}
                                           onChange={$this.onChange.bind($this)}/>

                                </div>

                                <div className="col-md-2">
                                    <input className="btn btn-primary btn-block" type="submit" value="Submit"/>
                                </div>

                            </div>

                        </form>

                        <div className="form-group">
                        <textarea style={{width: '100%', minHeight: '600px'}} className="form-control"
                                  value={$this.state.outputText}></textarea>
                        </div>

                    </div>
                </div>

            </div>
        );
    }

    onChange(e) {
        this.setState({inputText: e.target.value});
    }

    onSubmit(e) {

        var $this = this;
        e.preventDefault();

        if (!$this.state.inputText) {
            return;
        }

        $.ajax({
            url: '/',
            method: 'post',
            data: $this.state.inputText,
            success: function (rsp) {
                $this.setState({
                    outputText: rsp
                });
            },
            error: function () {
                alert(e);
            }
        });
    }
}

module.exports = App;