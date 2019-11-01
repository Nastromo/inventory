import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrdersList from './OrdersList';
import Kits from './Kits';



export class Efunc extends Component {
    render() {
        return (
            <div className="main-div flex">
                <OrdersList />
                <Kits />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Efunc)
