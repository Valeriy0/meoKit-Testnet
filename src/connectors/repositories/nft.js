import { requestApi } from "../api";
import { BaseRepository } from "./base";

class Repository extends BaseRepository {
  getNft = (txHash) => requestApi("get", `${this.path}/puma/${txHash}`);
  getListNft = (params) => requestApi('get', `${this.path}`, params);
}

export const NftRepository = new Repository("/nft");
