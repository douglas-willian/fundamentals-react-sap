const searchOrder = (database, item) => {
  const searchOrderInDataBase = database.find((searchedItem) => searchedItem.pedido == item);
  const rowData = searchOrderInDataBase ? Object.values(searchOrderInDataBase) : [];

  return [
    {
      rowData,
    },
  ];
};
export default searchOrder;
