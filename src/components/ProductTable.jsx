import React from "react";
import Table from "./Table";
import ProductItem from "./products/ProductItem";

const ProductTable = () => {
  return (
    <div>
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>

        <Table.TBody>
          <Table.Row>
            <Table.ColumnHeader colspan="2">Sporting Goods</Table.ColumnHeader>
          </Table.Row>
          <ProductItem name="Tennis" price={99.9} />
          <ProductItem name="Badminton" price={59.9} />
          <ProductItem name="Baskteball" price={29.9} />
          <Table.Row>
            <Table.ColumnHeader colspan="2">Electronics</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.Column>Ipod Touch</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>Iphone 5</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>Nexus 7</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
        </Table.TBody>
      </Table.TableContainer>
    </div>
  );
};

export default ProductTable;
