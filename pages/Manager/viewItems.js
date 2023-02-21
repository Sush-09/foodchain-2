import React, { Component } from "react";
import { Card,Button } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import Layout from '../../components/Layout';

class ItemList extends Component {
    static async getInitialProps() {
      // const address = '0xA2Ec9c4c87769748D2E4DB8E4647f2e793bc5eFf';
      //const fsc = FoodSupplyChain(address);
      const states = ["ProduceByFarmer","RequestByManufacturer","AcceptRequestByFarmer","RejectRequestByFarmer",
      "PurchasedByManufacturer","PurchasedByDistributor","ShippedByFarmer","ReceivedByDistributor",
      "ProcessedByDistributor","PackageByDistributor","ForSaleByDistributor",
      "PurchasedByRetailer","ShippedByDistributor","ReceivedByRetailer",
      "ForSaleByRetailer","PurchasedByConsumer"]
      
      const item_length = await factory.methods.getItemsLength().call();
      
      const items = await Promise.all(
        Array(parseInt(item_length))
          .fill()
          .map((element, index) => {
            return factory.methods.items(index).call();
          })
      );
  
      return { items, item_length, states };
    }
    renderItems() {
      const item_data = this.props.items.map((item) => {
        
        return {
          href: `/Manager/${item.id}`,
          header: item.productName,
          description: "Rs. "+item.productPrice+"===>"+item.quantity+" Kg." ,
          meta: this.props.states[item.itemState],
          fluid: true,
          
        };
      });
      return <Card.Group items={item_data} />;
    }
    render() {
      return (
        <Layout>
          <div> 
            <h3> Available Items </h3>           
            {this.renderItems()}
          </div>
        </Layout>
      );
    }
  }
export default ItemList;