import web3 from './web3';
import FoodSupplyChain from './build/FoodSupplyChain.json';

const instance = new web3.eth.Contract(
  JSON.parse(FoodSupplyChain.interface),
  '0xb79D381064C51A37183c2D762a7eb60f21E06d94'
);

export default instance;
