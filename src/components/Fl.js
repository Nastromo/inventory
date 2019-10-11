import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { showPopup, renderPopup } from '../store/actions/Popup';




export class Testing extends Component {

    initColumns = () => {
        return [
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

    handleCreate = () => {
        this.props.createMode(true);
    }

    renderList = (list, text) => {
        return (
            <div className="main-sde">
                <div className="content-table small-t basis50">
                    <h2>In Use Florida</h2>
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
                                <p className="tit-pop-r">Rec. Date</p>
                                <p className="tit-pop-r">Qty</p>

                            </div>

                            {
                                this.props.useList.map((item, i) => {
                                    return (
                                        <div className="flex rowwf" key={i}>
                                            <p className="redf">{item.recDate}</p>
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
        company: `company`,
        title: `title`,
        qty: `qty`,

    }],
    selected: state.activeTestRow,
    isPopup: state.usePopup,
    useList: [
        {
            recDate: `test`,
            qty: 4,
        },
    ]
})

const mapDispatchToProps = dispatch => ({
    showPopup: (i) => dispatch(showPopup(i)),
    renderPopup: (bool) => dispatch(renderPopup(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Testing)
