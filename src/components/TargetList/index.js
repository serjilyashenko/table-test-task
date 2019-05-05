import React from 'react';
import { Button, Table } from 'antd';
import './styles.css';

export const TargetList = ({ columns, data, rowSelection, pagination }) => {
  const selectedKeys = rowSelection.selectedRowKeys;
  const hasSelected = selectedKeys.length > 0;
  const onReset = () => rowSelection.onChange([]);

  return (
    <div>
      <div className="target-list-button">
        <Button type="primary" onClick={onReset} disabled={!hasSelected}>
          Reload
        </Button>
        <span className="target-list-button-title">{hasSelected ? `Selected ${selectedKeys.length} items` : ''}</span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination} />
    </div>
  );
};

export default TargetList;
