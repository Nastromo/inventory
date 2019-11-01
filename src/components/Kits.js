import React, { Component } from 'react';
import { connect } from 'react-redux';
import KitsList from './KitsList';



export class Kits extends Component {
    render() {
        return (
            <div className="fdfe">
                <h4>Kits:</h4>

                <div className="sec-dov">
                    <p>{`Client: ${this.props.client.name}`}</p>
                    <div className="flex dfdfS">
                        <p className={this.props.isActive ? "adhgy actgg" : "adhgy"}>{`Weight Management: ${0}`}</p>
                        <p className={this.props.isActive ? "adhgy" : "adhgy actgg"}>{`Nutritional Deficiency: ${0}`}</p>
                    </div>
                    <KitsList />
                    <div className="flex ju-end asddd">
                        <div className="blue-btn">Generate Barcodes</div>
                        <div className="grn-btn">Submit</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    client: {}
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Kits)
