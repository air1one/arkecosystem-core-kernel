import { Peer, PeerState, PeerVerificationResult } from "./peer";
import { PeerCommunicator } from "./peer-communicator";
export interface PeerVerifier {
    initialize(communicator: PeerCommunicator, peer: Peer): any;
    checkState(claimedState: PeerState, deadline: number): Promise<PeerVerificationResult | undefined>;
}
