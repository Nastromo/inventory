import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import LineSpinner from './LineSpinner';
import Navigation from './Navigation';
import Main from './Main';
import Order from './Order';
import Items from './Items';
import Vendors from './Vendors';
import Tests from './Tests';
import Reports from './Reports';
import Users from './Users';





export class PrivateRoute extends Component {


    render() {
        if (this.props.isLoading) return <LineSpinner />

        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/account/in-use" component={Main} />
                    <Route exact path="/account/order" component={Order} />
                    <Route exact path="/account/items" component={Items} />
                    <Route exact path="/account/vendors" component={Vendors} />
                    <Route exact path="/account/tests" component={Tests} />
                    <Route exact path="/account/reports" component={Reports} />
                    <Route exact path="/account/users" component={Users} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute))

