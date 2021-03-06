import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListAccountAliasesCommand,
  ListAccountAliasesCommandInput,
  ListAccountAliasesCommandOutput,
} from "../commands/ListAccountAliasesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListAccountAliasesCommandInput,
  ...args: any
): Promise<ListAccountAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountAliasesCommand(input, ...args));
};
const makePagedRequest = async (
  client: IAM,
  input: ListAccountAliasesCommandInput,
  ...args: any
): Promise<ListAccountAliasesCommandOutput> => {
  // @ts-ignore
  return await client.listAccountAliases(input, ...args);
};
export async function* listAccountAliasesPaginate(
  config: IAMPaginationConfiguration,
  input: ListAccountAliasesCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountAliasesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAccountAliasesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
