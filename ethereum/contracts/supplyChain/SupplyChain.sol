pragma solidity ^0.4.17;

contract FoodSupplyChain {

    address admin;
    uint256 item_id=0;
    uint256 finalItemId = 0;

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
        uint256 FinalProductId;
        //mapping(address => bool) requestByManufacturer;
        // address distributorID; // Metamask-Ethereum address of the Distributor
        // address retailerID; // Metamask-Ethereum address of the Retailer
        // address consumerID; // Metamask-Ethereum address of the Consumer // ADDED payable
    }

    struct FinalProduct {
        uint256 f_id; 
        uint256 originalId;
        address ownerID; // Metamask-Ethereum address of the current owner as the product moves through 8 stages
        address originManufacturerID; // Metamask-Ethereum address of the Farmer // ADDED PAYABLE
        string originFactory; // Farmer Name
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
        address distributerID;
        address retailerID;
        //mapping(address => bool) requestByManufacturer;
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
        ProducedByManufacturer,
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
    FinalProduct[] public product_list;


    mapping(address => bool) public Farmers;
    mapping(address => bool) public Manufacturers;
    mapping(address => bool) public Distributers;
    mapping(address => bool) public Retailers;
    mapping (uint256 => Item) public items;
    mapping(uint256 => FinalProduct) public products;
    mapping(address => uint[]) public itemsByManufacturer;
    mapping(address => uint[]) public itemsByRetailer; 

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

    modifier onlyDistributer() {
        require(Distributers[msg.sender]);
        _;
    }

    modifier onlyRetailer() {
        require(Retailers[msg.sender]);
        _;
    }


    
    function addFarmer(address accAdd) public restricted{
        Farmers[accAdd] = true;
    } 

    function addManufacturer(address accAdd) public restricted{
        Manufacturers[accAdd] = true;
    }

    function addDistributer(address accAdd) public restricted{
        Distributers[accAdd] = true;
    } 

    function addRetailer(address accAdd) public restricted{
        Retailers[accAdd] = true;
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
        uint256 FinalProductId;
        Item memory new_item = Item(item_id,msg.sender,msg.sender,originFarmName,productName,quantity,productPrice,defaultState,manufacturerID,FinalProductId);
        items[item_id]=(new_item);
        item_list.push(new_item);
        item_id++;
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
        itemsByManufacturer[msg.sender].push(id);
        
    }

    function getItemsLength() public view returns(uint){
        return item_list.length;
    }

    function getProductsLength() public view returns(uint){
        return product_list.length;
    }

    function addProductByManufacturer( 
        uint256 originalId, 
        string originFactory, 
        string productName,
        uint256 quantity,
        uint256 productPrice
        ) public onlyManufacturer {
            address distrbuterID;
            address retailerID;
            FinalProduct memory new_product = FinalProduct(finalItemId,originalId,msg.sender,msg.sender,originFactory,productName,quantity,productPrice,State.ProducedByManufacturer,distrbuterID,retailerID);
            products[finalItemId]=(new_product);
            product_list.push(new_product);
            items[originalId].FinalProductId = finalItemId;
            finalItemId++;
    }

    function purchasedByRetailer(uint256 f_id) public onlyRetailer{
        require(products[f_id].itemState == State.ProducedByManufacturer);

        products[f_id].itemState = State.PurchasedByRetailer;
        products[f_id].retailerID = msg.sender;
        products[f_id].ownerID = msg.sender;
        itemsByRetailer[msg.sender].push(f_id);
        
    }

    
    



}