pragma solidity ^0.4.17;

contract FoodSupplyChain {

    address admin;
    uint256 item_id=0;

    struct Item {
        uint256 id; 
        address ownerID; // Metamask-Ethereum address of the current owner as the product moves through 8 stages
        address originFarmerID; // Metamask-Ethereum address of the Farmer // ADDED PAYABLE
        string originFarmName; // Farmer Name
        //string originFarmInformation; // Farmer Information
        // string originFarmLatitude; // Farm Latitude
        // string originFarmLongitude; // Farm Longitude
        //uint256 productID; // Product ID potentially a combination of productCode + stockUnit
        
        string productName; // Product Notes
        //uint256 productDate; // Product Date NOTE: MIGHT NEED TO CHANGE type
        uint256 quantity;
        uint256 productPrice; // Product Price
        
        //uint256 productSliced; // Parent cheese
        State itemState; // Product State as represented in the enum above
        address manufacturerID;
        mapping(address => bool) requestByManufacturer;
        // address distributorID; // Metamask-Ethereum address of the Distributor
        // address retailerID; // Metamask-Ethereum address of the Retailer
        // address consumerID; // Metamask-Ethereum address of the Consumer // ADDED payable
    }

    enum State {
        ProduceByFarmer, // 0
        RequestByManufacturer, // 1
        AcceptRequestByFarmer,
        RejectRequestByFarmer,
        PurchasedByManufacturer,
        PurchasedByDistributor, // 2
        ShippedByFarmer, // 3
        ReceivedByDistributor, // 4
        ProcessedByDistributor, // 5
        PackageByDistributor, // 6
        ForSaleByDistributor, // 7
        PurchasedByRetailer, // 8
        ShippedByDistributor, // 9
        ReceivedByRetailer, // 10
        ForSaleByRetailer, // 11
        PurchasedByConsumer // 12
    }

    State constant defaultState = State.ProduceByFarmer;


    Item[] public item_list;

    mapping(address => bool) public Farmers;
    mapping(address => bool) public Manufacturers;
    mapping (uint256 => Item) public items;

    function FoodSupplyChain() public {
        admin = msg.sender;
    }
    
    modifier restricted() {
        require(msg.sender == admin);
        _;
    }

    modifier onlyFarmer() {
        require(Farmers[msg.sender]);
        _;
    }

    modifier onlyManufacturer() {
        require(Manufacturers[msg.sender]);
        _;
    }


    
    function addFarmer(address accAdd) public restricted{
        Farmers[accAdd] = true;
    } 

    function addManufacturer(address accAdd) public restricted{
        Manufacturers[accAdd] = true;
    } 

    function addItem(
      string originFarmName,
    //   string originFarmLatitude,
    //   string originFarmLongitude,
      string productName,
      uint256 quantity,
      uint256 productPrice

    ) public onlyFarmer {
        address manufacturerID;
        Item memory new_item = Item(item_id,msg.sender,msg.sender,originFarmName,productName,quantity,productPrice,defaultState,manufacturerID);
        items[item_id]=(new_item);
        item_list.push(new_item);
        item_id++;
    }

    function requestByManufacturer(uint256 id) public onlyManufacturer{
        items[id].requestByManufacturer[msg.sender]=true;
        items[id].itemState = State.RequestByManufacturer;
    }

    function acceptRequestByFarmer(uint256 id) public onlyFarmer{
        require(items[id].itemState == State.RequestByManufacturer);
        items[id].itemState = State.AcceptRequestByFarmer;
    }

    function purchasedByManufacturer(uint256 id) public onlyManufacturer{
        require(items[id].itemState == State.ProduceByFarmer);
        //require(msg.value>items[id].productPrice);
        //uint farmerbalance = items[id].originFarmerID.balance;
        //items[id].originFarmerID.transfer(msg.value);
        // if (items[id].originFarmerID.balance>farmerbalance){
        //     items[id].itemState = State.PurchasedByManufacturer;
        //     items[id].manufacturerID = msg.sender;
        //     items[id].ownerID = msg.sender;
        // }

        items[id].itemState = State.PurchasedByManufacturer;
        items[id].manufacturerID = msg.sender;
        items[id].ownerID = msg.sender;
        
    }

    function getItemsLength() public view returns(uint){
        return item_list.length;
    }

    
    



}