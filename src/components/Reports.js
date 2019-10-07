import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';
import PurchaseList from './PurchaseList';


export class Reports extends Component {
    constructor(props) {
        super(props);
        this.deps = [`All Departments`, `Chemistry`, `Cytology`, `Hematology`, `Histology`, `Immunology`, `Mass Spec`, `Microbiology`, `Molecular`, `Order Desk`, `Warehouse`, `IT [New York]`, `IT [Florida]`, `Administration`, `R&D`]
    }

    render() {
        return (
            <div className="main-sde">
                <h2>Purchase Order Report</h2>
                <div className="flex mafgji">
                    <div className="flex al-cntr bas48">
                        <div className="bas48 mar0g-rty">
                            <NewDropDown
                                id="deps"
                                actionType="SET_DEPS_OPTION"
                                height="30px"
                                status={this.props.isOpenDep}
                                menu={this.deps}
                                option={this.props.optionDep} />
                        </div>
                        <input type="text" className="simple-input-n" placeholder="mm/dd/yyyy"/>
                        <input type="text" className="simple-input-n" placeholder="mm/dd/yyyy"/>

                    </div>
                    <div className="flex al-cntr">
                        <div className="derty">Download</div>
                    </div>
                </div>
                <PurchaseList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
