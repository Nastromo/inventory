import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { getPayments, showClientData } from '../store/actions/EPayments';



export class OrdersList extends Component {
    componentDidMount() {
        this.props.getPayments();
    }

    initColumns = () => {
        return [
            {
                Header: 'Name',
                accessor: 'clientName',
            },
            {
                Header: 'Date',
                accessor: 'date',
            },
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showClientData(Number(rowInfo.index)),
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
            <div className="bas30">
                <h4>Orders:</h4>
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
        )
    }

    render() {
        if (this.props.isLoading) return this.renderList([], `Loading list...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `No any items...`);
    }
}

const mapStateToProps = (state) => ({
    selected: state.paymentSelected,
    list: state.epayments,
})

const mapDispatchToProps = dispatch => ({
    showClientData: (index) => dispatch(showClientData(index)),
    getPayments: () => dispatch(getPayments())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList)
