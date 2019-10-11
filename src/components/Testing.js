import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import NewDropDown from './NewDropDown';
import { showPopupLot, renderPopup } from '../store/actions/Popup';



export class Testing extends Component {
    constructor(props) {
        super(props);
        this.tests = [`Lot to Lot`, `MICQC`, `N/A`];
        this.resus = [`option1`];
    }

    initColumns = () => {
        return [
            {
                Header: 'Rec Date',
                accessor: 'recDate',
            },
            {
                Header: 'Lot #',
                accessor: 'lot',
            },
            {
                Header: 'Exp Date',
                accessor: 'extDate',
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
                width: 500
            },
            {
                Header: 'Quantity',
                accessor: 'qty',
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
            <div className="main-sde">
                <div className="content-table small-t basis50">
                    <h2>Lot Testing</h2>
                    <ReactTable
                        data={list}
                        getTdProps={this.handleRowClick}
                        columns={this.initColumns()}
                        resizable={false}
                        filterable={true}
                        defaultPageSize={17}
                        noDataText={text}
                    />
                </div>
                {this.props.isPopup ? (
                    <div onClick={this.closePopup} className="popup" id="shadow">
                        <div className="back-pop flex al-cntr" id="pop">

                            <p className="derts">{`In Service Date: `} <span className="terf">
                                {this.props.lot.servDate} asdf</span></p>


                            <p className="derts">{`Test Date: `} <span className="terf">
                                {this.props.lot.testDate} asdf</span></p>


                            <div className="flex bas22 al-cntr">
                                <p className="derts">Test Method:</p>
                                <NewDropDown
                                    id="test"
                                    actionType="SET_TEST_OPTION"
                                    height="30px"
                                    status={this.props.isOpenTes}
                                    menu={this.tests}
                                    option={this.props.lot.optionLot} />
                            </div>


                            <div className="flex bas22 al-cntr">
                                <p className="derts">Test Result:</p>
                                <NewDropDown
                                    id="resu"
                                    actionType="SET_RES_OPTION"
                                    height="30px"
                                    status={this.props.isOpenRes}
                                    menu={this.resus}
                                    option={this.props.lot.optionRes} />
                            </div>


                            <div className="flex bas22 al-cntr">
                                <p className="derts">Location:</p>
                                <input
                                    type="number"
                                    className="row-input hdfgr"
                                    value={this.props.lot.loc ? this.props.lot.loc : ""} onChange={this.props.changeLoc} />
                            </div>

                            <div className="green-btn hfger">SAVE</div>

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
        recDate: `recDate`,
        lot: `lot`,
    }],
    selected: state.activeTestRow,
    isPopup: state.usePopup,
    lot: {

    },
})

const mapDispatchToProps = dispatch => ({
    showPopup: (i) => dispatch(showPopupLot(i)),
    renderPopup: (bool) => dispatch(renderPopup(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Testing)
