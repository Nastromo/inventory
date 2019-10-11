import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { showPopup, renderPopup } from '../store/actions/Popup';




export class GroupList extends Component {

    initColumns = () => {
        return [
            {
                Header: 'Ref#',
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
                Header: '# In Use',
                accessor: 'inUse',
            },
            {
                Header: '# Of Lots',
                accessor: 'ofLots',
            }
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

    handleCreate = (e) => {
        this.props.createMode(true);
    }

    renderList = (list, text) => {
        return (
            <div className="main-sde">
                <div className="content-table small-t basis50">
                    <h2>In Use</h2>
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
                        <div className="back-pop" id="pop">
                            <div className="flex titoo">
                                <p className="tit-pop-r bas5">Lot #</p>
                                <p className="tit-pop-r">Rec. Date</p>
                                <p className="tit-pop-r">Exp. Date</p>
                                <p className="tit-pop-r">Test Date</p>
                                <p className="tit-pop-r bas19">In Service Date</p>
                                <p className="tit-pop-r">Test Method</p>
                                <p className="tit-pop-r">Test Result</p>
                                <p className="tit-pop-r">Qty</p>
                                <p className="tit-pop-r">Location</p>
                            </div>

                            {
                                this.props.useList.map((item, i) => {
                                    return (
                                        <div className="flex rowwf" key={i}>
                                            <p className="redf bas5">{item.lot}</p>
                                            <p className="redf">{item.recDate}</p>
                                            <p className="redf">{item.expDate}</p>
                                            <p className="redf">{item.testDate}</p>
                                            <p className="redf bas19">{item.serDate}</p>
                                            <p className="redf">{item.testMeth}</p>
                                            <p className="redf">{item.testRes}</p>
                                            
                                            <input
                                                id={i}
                                                type="number"
                                                className="row-input"
                                                value={item.qty ? item.qty : ""} onChange={this.props.changeQty} />
                                            <p className="redf">{item.location}</p>
                                        </div>
                                    )
                                })
                            }

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
    useList: [
        {
            lot: `test`,
            recDate: `test`,
            expDate: `test`,
            testDate: `test`,
            serDate: `test`,
            testMeth: `test`,
            testRes: `test`,
            qty: `test`,
            location: `test`,
        },
        {
            lot: `test`,
            recDate: `test`,
            expDate: `test`,
            testDate: `test`,
            serDate: `test`,
            testMeth: `test`,
            testRes: `test`,
            qty: `test`,
            location: `test`,
        },
        {
            lot: `test`,
            recDate: `test`,
            expDate: `test`,
            testDate: `test`,
            serDate: `test`,
            testMeth: `test`,
            testRes: `test`,
            qty: `test`,
            location: `test`,
        },
        {
            lot: `test`,
            recDate: `test`,
            expDate: `test`,
            testDate: `test`,
            serDate: `test`,
            testMeth: `test`,
            testRes: `test`,
            qty: `test`,
            location: `test`,
        },
    ]
})

const mapDispatchToProps = dispatch => ({
    showPopup: (i) => dispatch(showPopup(i)),
    renderPopup: (bool) => dispatch(renderPopup(bool)),

})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
