import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import web3 from "../../ethereum/web3";
import { Link, Router } from "../../routes";
import factory from "../../ethereum/factory";

class ItemShow extends Component{
    state = {
        message: "",
        loading: false,
        errorMessage: "",
        disabling: false
      };
    
    static async getInitialProps(props){
        const id = props.query.id;
        
        const states = ["ProduceByFarmer","RequestByManufacturer","AcceptRequestByFarmer","RejectRequestByFarmer",
        "PurchasedByManufacturer","PurchasedByDistributor","ShippedByFarmer","ReceivedByDistributor",
        "ProcessedByDistributor","PackageByDistributor","ForSaleByDistributor",
        "PurchasedByRetailer","ShippedByDistributor","ReceivedByRetailer",
        "ForSaleByRetailer","PurchasedByConsumer"];

        const itemData = await factory.methods.items(parseInt(id)).call();
        
        return {itemData, id, states};
    }

    onRequest = async () => {  
        this.setState({ loading: true, errorMessage: "", message:"" });
        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods.purchasedByManufacturer(parseInt(this.props.id)).send({
            from: accounts[0],
            });

            Router.pushRoute(`/Manager/${this.props.id}`);
            this.setState({loading: false});
            if (this.props.itemData.itemState == 4){
                this.setState({disabling: true});
            }


            // this.setState({loading:false, message: "Request Sent Successfully !!!"}); 
            
        } catch(err){
            this.setState({ errorMessage: err.message ,loading: false});
        }

        if(this.props.itemData.itemState == 4){
            this.setState({disabling: true});
        }
         
        
      };
    
    render(){
        return (
            <Layout>
                <div> 
                    <h1> {this.props.itemData.productName} </h1>
                    <br></br>           
                    <h3><b>Farmar Id:</b> {this.props.itemData.originFarmerID}</h3>
                    <h3><b>Farmar Location:</b> {this.props.itemData.originFarmName}</h3>
                    <h3><b>Quantity:</b> {this.props.itemData.quantity} kg.</h3>
                    <h3><b>Price:</b> Rs. {this.props.itemData.productPrice}</h3>
                    <h3><b>State:</b> {this.props.states[this.props.itemData.itemState]}</h3>
                    <h3><b>Manufacturer's Address:</b> {this.props.itemData.manufacturerID}</h3>
                    <br></br>
                    
                    <Button onClick={this.onRequest} primary loading={this.state.loading} disabled= {this.state.disabling}>
                    Purchase
                    </Button>
                    
                    <h3 color="Green">{this.state.errorMessage}</h3>
                </div>
            </Layout>
        );
    }
}

export default ItemShow;