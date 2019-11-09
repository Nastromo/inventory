import React, { Component } from 'react';
import { connect } from 'react-redux';
import KitsList from './KitsList';
import { printBarcodes } from '../store/actions/EPayments';


export class Kits extends Component {
    render() {
        const name = this.props.payments[this.props.sel] ? this.props.payments[this.props.sel].clientName : "";
        return (
            <div className="fdfe">
                <h4>Kits:</h4>

                <div className="sec-dov">
                    <p>{`Client: ${name}`}</p>
                    <div className="flex dfdfS">
                        {/* <p className={this.props.isActive ? "adhgy actgg" : "adhgy"}>{`Weight Management: ${this.props.weight.length}`}</p> */}
                        <p className={true ? "adhgy" : "adhgy actgg"}>{`${this.props.type}: ${this.props.kits ? this.props.kits.length : 0}`}</p>
                    </div>
                    <KitsList />
                    <div className="flex ju-end asddd">
                        <div onClick={this.props.printBarcodes} className="blue-btn">Print</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sel: state.paymentSelected,
    payments: state.epayments,
    type: state.kits.type,
    kits: state.kits.list,
})

const mapDispatchToProps = dispatch => ({
    printBarcodes: (e) => dispatch(printBarcodes(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Kits)
