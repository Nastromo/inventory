import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { showPopup, renderPopup } from '../store/actions/Popup';




export class Testing extends Component {

    initColumns = () => {
        return [
            {
                Header: 'Order Date',
                accessor: 'orderDate',
            },
            {
                Header: 'Department',
                accessor: 'dep',
            },
            {
                Header: 'PO #',
                accessor: 'po',
            },
            {
                Header: 'Ref #',
                accessor: 'ref',
            },
            {
                Header: 'Company',
                accessor: 'company',
            },
            {
                Header: 'Title',
                accessor: 'title',
            },
            {
                Header: 'Quantity',
                accessor: 'qty',
            },
            {
                Header: 'Unit of Measure',
                accessor: 'qty',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showPopup(Number(rowInfo.index)),
                style: {
                    fontWeight: rowInfo.index === this.props.selected ? '700' : '600',
                    color: rowInfo.index === this.props.selected ? '#1ab394' : '#4e4e4e',
                    background: rowInfo.index === this.props.selected ? '#e2fff9' : '',
                }
            }
        } else {
            return {}
        }
    }

    handleCreate = () => {
        this.props.createMode(true);
    }

    renderList = (list, text) => {
        return (
            <div className="content-table small-t basis50">
                <ReactTable
                    data={list}
                    getTdProps={this.handleRowClick}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={true}
                    defaultPageSize={17}
                    noDataText={text}
                />
                {this.props.isPopup ? (
                    <div onClick={this.closePopup} className="popup" id="shadow">
                        <div className="back-pop wifht" id="pop">
                            <div className="flex">
                                <div className="bas10">
                                    <p className="oiuh">Lot:</p>
                                    <p className="oiuh">Expiration Date:</p>
                                    <p className="oiuh">Barcode:</p>
                                    <p className="oiuh">Comments:</p>
                                </div>
                                <div className="bas15">
                                    <input
                                        className="row-input"
                                        value={this.props.order.lot ? this.props.order.lot : ""}
                                        onChange={this.props.changeQty} />
                                    <input
                                        className="row-input"
                                        value={this.props.order.expDate ? this.props.order.expDate : ""}
                                        onChange={this.props.changeQty} />
                                    <input
                                        className="row-input"
                                        value={this.props.order.barcode ? this.props.order.barcode : ""}
                                        onChange={this.props.changeQty} />
                                    <input
                                        className="row-input"
                                        value={this.props.order.comment ? this.props.order.comment : ""}
                                        onChange={this.props.changeQty} />
                                </div>

                                <div className="bas10">
                                    <p className="oiuh">Ordered quantity:</p>
                                    <p className="oiuh">Quantity in use:</p>
                                    <p className="oiuh">Status:</p>
                                    <p className="oiuh">Department:</p>
                                </div>
                                <div className="bas15">
                                    {/* <p>{this.props.order.ordQty}</p> */}
                                    <p>asdfa</p>
                                    <input
                                        className="row-input"
                                        value={this.props.order.useQty ? this.props.order.useQty : ""}
                                        onChange={this.props.changeQty} />
                                    <input
                                        className="row-input"
                                        value={this.props.order.status ? this.props.order.status : ""}
                                        onChange={this.props.changeQty} />
                                    <input
                                        className="row-input"
                                        value={this.props.order.dep ? this.props.order.dep : ""}
                                        onChange={this.props.changeQty} />
                                </div>

                                <div className="bas10">
                                    <p className="oiuh">PO #:</p>
                                    <p className="oiuh">Print:</p>
                                </div>
                                <div className="bas15">
                                    <input
                                        className="row-input"
                                        value={this.props.order.useQty ? this.props.order.useQty : ""}
                                        onChange={this.props.changeQty} />
                                    <input
                                        className="row-input"
                                        value={this.props.order.status ? this.props.order.status : ""}
                                        onChange={this.props.changeQty} />
                                    <div className="flex">
                                        <div className="prtyu">#1</div>
                                        <div className="prtyu">#1</div>
                                        <div className="prtyu">#1</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                ) : null}
            </div>
        )
    }

    closePopup = (e) => {
        if (e.target.id === `shadow`) {
            this.props.renderPopup(false);
        }
    }

    render() {
        if (this.props.isLoading) return this.renderList([], `Loading list...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `No any items...`);
    }
}

const mapStateToProps = (state) => ({
    list: [{
        id: `id`,
        ref: `ref`,
        company: `company`,
        title: `title`,
        inUse: `inUse`,
        ofLots: `ofLots`
    }],
    selected: state.activeTestRow,
    isPopup: state.usePopup,
    order: {},
})

const mapDispatchToProps = dispatch => ({
    showPopup: (i) => dispatch(showPopup(i)),
    renderPopup: (bool) => dispatch(renderPopup(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Testing)
