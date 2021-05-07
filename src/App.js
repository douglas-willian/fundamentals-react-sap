import React, { useState } from 'react';
import { FormInput } from 'fundamental-react/lib/Forms';
import { Button } from 'fundamental-react/lib/Button';
import { Table } from 'fundamental-react/lib/Table';
import database from './database'
import searchOrder from './searchOrder'

function App() {
  const [item, setItem] = useState();
  let [tableItems, setTableItems] = useState([{ rowData: [] }]);

  return (
    <div className='App'>
      <FormInput
        placeholder='N° Pedido'
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />

      <Button
        onClick={() => {
          setTableItems(searchOrder(database, item));
        }}
      >
        Pesquisar
      </Button>
      <div>
        <br></br>
        <Table compact headers={Object.keys(database[0])} tableData={tableItems} />
      </div>
    </div>
  );
}

export default App;
