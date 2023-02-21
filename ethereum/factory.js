import web3 from './web3';
import FoodSupplyChain from './build/FoodSupplyChain.json';

const instance = new web3.eth.Contract(
  JSON.parse(FoodSupplyChain.interface),
  '0x07fb680F595A515419bfb5dDbd8e9477f4f2e94e'
);

export default instance;
