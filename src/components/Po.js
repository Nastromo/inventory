import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';
import PoList from './PoList';




export class Order extends Component {
    constructor(props) {
        super(props);
        this.deps = [`All Departments`, `Chemistry`, `Cytology`, `Hematology`, `Histology`, `Immunology`, `Mass Spec`, `Microbiology`, `Molecular`, `Order Desk`, `Warehouse`, `IT [New York]`, `IT [Florida]`, `Administration`, `R&D`]
    }

    render() {
        return (
            <div className="main-sde">
                <h2>PO Manager</h2>
                <div className="flex mafgji">
                    <div className="flex al-cntr bas25">
                        <div className="derty">Create PO#</div>
                        <div className="bas48">
                            <NewDropDown
                                id="deps"
                                actionType="SET_DEPS_OPTION"
                                height="30px"
                                status={this.props.isOpenDep}
                                menu={this.deps}
                                option={this.props.optionDep} />
                        </div>

                    </div>
                    <div className="flex al-cntr">
                        <div className="all manbgg">All</div>
                        <div className="all pre-order manbgg">Pre-Order</div>
                        <div className="all pen-del manbgg">Pending Delivery</div>
                        <div className="all pen-tes manbgg">Pending Lot Testing</div>
                        <div className="all in-use manbgg">In Use</div>
                        <div className="derty">In Use</div>
                    </div>
                </div>
                <PoList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpenDep: state.newDDStatus.deps,
    optionDep: {}.deps,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
