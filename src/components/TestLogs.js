import React, { Component } from 'react'
import { connect } from 'react-redux'
import LogList from './LogList';



export class TestLogs extends Component {
    render() {
        return (
            <div className="main-sde">
                <h2>Reagent Usage Report</h2>
                <div className="flex mafgji">
                    <div className="flex al-cntr bas48">
                        <input type="text" className="simple-input-n" placeholder="mm/dd/yyyy"/>
                        <input type="text" className="simple-input-n" placeholder="mm/dd/yyyy"/>
                    </div>
                </div>
                <LogList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TestLogs)
