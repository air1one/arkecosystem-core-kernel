import { Peer } from "./peer";
export interface AcceptNewPeerOptions {
    seed?: boolean;
    lessVerbose?: boolean;
}
export interface PeerProcessor {
    initialize(): any;
    validateAndAcceptPeer(peer: Peer, options?: AcceptNewPeerOptions): Promise<void>;
    validatePeerIp(peer: any, options?: AcceptNewPeerOptions): boolean;
    isWhitelisted(peer: any): boolean;
}
