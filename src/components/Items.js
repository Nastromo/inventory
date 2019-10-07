import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';
import ItemList from './ItemList';



export class Items extends Component {
    constructor(props) {
        super(props);
        this.deps = [`All Departments`, `Chemistry`, `Cytology`, `Hematology`, `Histology`, `Immunology`, `Mass Spec`, `Microbiology`, `Molecular`, `Order Desk`, `Warehouse`, `IT [New York]`, `IT [Florida]`, `Administration`, `R&D`]
    }

    render() {
        return (
            <div className="main-sde">
                <h2>Items</h2>
                <div className="flex mafgji">
                    <div className="flex al-cntr bas25">
                        <div className="bas48 mar0g-rty">
                            <p className="desdf">Departments</p>
                            <NewDropDown
                                id="deps"
                                actionType="SET_DEPS_OPTION"
                                height="30px"
                                status={this.props.isOpenDep}
                                menu={this.deps}
                                option={this.props.optionDep} />
                        </div>
                        <div className="bas48">
                            <p className="desdf">Companies</p>
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
                        <div className="derty">Create Item</div>
                    </div>
                </div>
                <ItemList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
