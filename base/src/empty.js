import userEvent from '@testing-library/user-event';
import React from 'react'
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';


function mapStateToProps(state) {
    debugger;
    return { User: { ...state.USERS } };
} 


export default withRouter(connect(mapStateToProps)(function Empty(props) {

    const { history} = props;

    function exit() {
        history.push('./Login');
    }

    return <><div>
        {/* <div>שלום {user.userName}</div> */}
        <input type="button" value="חזרה לדף ההתחברות" onClick={exit}></input>
    </div>
    </>
}))



