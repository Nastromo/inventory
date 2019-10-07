import React, { Component } from 'react'
import { connect } from 'react-redux'
import VendorList from './VendorList';


export class Vendors extends Component {
    render() {
        return (
            <div className="main-sde">
                <h2>Vendors</h2>
                <div className="flex mafgji">
                    <div className="flex al-cntr bas25">
                        <div className="derty">Add Vendor</div>
                    </div>
                </div>
                <VendorList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Vendors)
