import { BaseWsClient, BaseWsClientOptions, defaultBaseWsClientOptions } from "../../baseclient";
import { BaseServiceType, ServiceProto } from "../../proto";
import { getClassObjectId } from "../../models/getClassObjectId";
import { WebSocketProxy } from "./WebSocketProxy";

/**
 * Client for TSGServer WebSocket Server.
 * @typeParam ServiceType - `ServiceType` from generated `proto.ts`
 */
export class WsClient<ServiceType extends BaseServiceType> extends BaseWsClient<ServiceType> {

    readonly options!: Readonly<WsClientOptions>;

    constructor(proto: ServiceProto<ServiceType>, options?: Partial<WsClientOptions>) {
        let wsp = new WebSocketProxy();
        super(proto, wsp, {
            customObjectIdClass: getClassObjectId(),
            ...defaultWsClientOptions,
            ...options
        })
    }

}

const defaultWsClientOptions: WsClientOptions = {
    ...defaultBaseWsClientOptions,
}

export interface WsClientOptions extends BaseWsClientOptions {

}