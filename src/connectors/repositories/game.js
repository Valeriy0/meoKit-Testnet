import { requestApi } from "../api";
import { BaseRepository } from "./base";

class Repository extends BaseRepository {
  inviteCode = (data) => requestApi("post", `https://puma-nakama-prod.meo.world/v2/rpc/rpcGetReferalLinkByWallet`);
}

export const GameRepository = new Repository("/game");
