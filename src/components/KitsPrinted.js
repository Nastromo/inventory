import React, { Component } from 'react';
import { connect } from 'react-redux';
import KitsListPrinted from './KitsListPrinted';
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
                    <div className="flex">
                        <KitsListPrinted />
                        <div className="ffnj">
                            <div className="flex">
                                <p>Patinet First Name:</p>
                                <p>{this.props.pat.firstName}</p>
                            </div>
                            <div className="flex">
                                <p>Patinet Last Name:</p>
                                <p>{this.props.pat.lastName}</p>
                            </div>
                            <div className="flex">
                                <p>Patinet DOB:</p>
                                <p>{this.props.pat.dob}</p>
                            </div>
                            <div className="flex">
                                <p>Patinet Gender:</p>
                                <p>{this.props.pat.gender}</p>
                            </div>
                            <div className="flex">
                                <p>Patinet Phone:</p>
                                <p>{this.props.pat.phone}</p>
                            </div>

                            <div className="flex">
                                <p>Patinet Street:</p>
                                <p>{this.props.pat.street}</p>
                            </div>

                            <div className="flex">
                                <p>Patinet City:</p>
                                <p>{this.props.pat.city}</p>
                            </div>

                            <div className="flex">
                                <p>Patinet State:</p>
                                <p>{this.props.pat.state}</p>
                            </div>
                            <div className="flex">
                                <p>Patinet Zip:</p>
                                <p>{this.props.pat.zip}</p>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="flex ju-end asddd">
                        <div className="blue-btn">Print</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pat: state.patient || {},
    sel: state.paymentSelected,
    payments: state.epayments,
    type: state.kits.type,
    kits: state.kits.list,
})

const mapDispatchToProps = dispatch => ({
    printBarcodes: (e) => dispatch(printBarcodes(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Kits)
