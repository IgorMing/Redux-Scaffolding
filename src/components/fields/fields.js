import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/fields';

import _ from 'lodash';

class Fields extends Component {

  componentWillMount() {
    this.props.getFieldTypes();
  }

  render() {
    const { fields } = this.props;
    const options = _.map(fields, (field, index) => {
      return <option key={index}>{field.name}</option>
    })
    return(
      <div>
        <h1>Home</h1>

        <select defaultValue="default">
          <option value="default"> -- Selecione -- </option>
        {options}
        </select>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    fields: state.fields
  };
}

export default connect(mapStateToProps, actions)(Fields);
