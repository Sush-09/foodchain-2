import React, {Component} from 'react';
import Layout from '../components/Layout';
import {Card, Grid, Button} from 'semantic-ui-react';
// import web3 from '../ethereum/web3';
// import {Link} from '../routes';

class ShowEntity extends Component {
    
    static async getInitialProps(props){
        const Farmer = "Farmer";
        const Manufacturer = "Manufacturer";
        const Distributer = "Distributer";
        const Retailer = "Retailer";
        const Customer = "Customer";
        
        return { Farmer, Manufacturer, Distributer, Retailer, Customer };
    }

    renderCards(){

        const {
            Farmer,
            Manufacturer,
            Distributer,
            Retailer,
            Customer
        } = this.props;

        const items = [
            {
                href: "/Farmer/signInOrSignUp",
                header: Farmer,
                style: {overflowWrap: 'break-word'},
                extra: [<Button basic color='blue'>Sign Up</Button> ,<Button basic color='green'>Sign In</Button>]
            },
            {
                href: "/Manager/signInOrSignUp",
                header: Manufacturer,
                style: {overflowWrap: 'break-word'},
                extra: [<Button basic color='blue'>Sign Up</Button> ,<Button basic color='green'>Sign In</Button>]            
            },
            {
                header: Distributer,
                style: {overflowWrap: 'break-word'},
                extra: [<Button basic color='blue'>Sign Up</Button> ,<Button basic color='green'>Sign In</Button>]
            },
            {
                header: Retailer,
                style: {overflowWrap: 'break-word'},
                extra: [<Button basic color='blue'>Sign Up</Button> ,<Button basic color='green'>Sign In</Button>]            
            },
            {
                header: Customer,
                style: {overflowWrap: 'break-word'},
                extra: [<Button basic color='blue'>Sign Up</Button> ,<Button basic color='green'>Sign In</Button>]            
            }
        ];

        return <Card.Group centered items={items} />;

    }
    
    render (){
        return (
            <Layout>
                <center>
                    <br></br><br></br>
                <h3>Users</h3>
                <br></br>
                
                        {this.renderCards()}
                    
                </center>
            </Layout>
        );
    }
}

export default ShowEntity;

