import React from 'react';
import TargetList from '../../components/TargetList';
import { withStorage } from '../withStorage';
import { columns, data } from '../../data/index';
import { TARGET_LIST } from '../../const/storage';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    let selectedKeys = [];

    const { storage } = props;
    selectedKeys = Array.isArray(storage) ? storage : [];

    this.state = { selectedKeys, page: 1 };
  }

  onStorageUpdate = () => this.props.onStorageChange(this.state.selectedKeys);

  onPageChange = page => this.setState({ page });

  onSelectedChange = selectedKeys => this.setState({ selectedKeys }, this.onStorageUpdate);

  render() {
    const { selectedKeys, page } = this.state;
    const pagination = { current: page, onChange: this.onPageChange };
    const rowSelection = { selectedRowKeys: selectedKeys, onChange: this.onSelectedChange };

    return (
      <div className="App">
        <TargetList data={data} columns={columns} rowSelection={rowSelection} pagination={pagination} />
      </div>
    );
  }
}

export default withStorage(TARGET_LIST)(ListContainer);
