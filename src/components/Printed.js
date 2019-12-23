import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrdersListPrinted from './OrdersListPrinted';
import KitsPrinted from './KitsPrinted';



export class Printed extends Component {
    render() {
        return (
            <div className="main-div flex">
                <OrdersListPrinted />
                <KitsPrinted />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Printed)
