import { ProcessAction, ProcessActionsService } from "../../../contracts/kernel/process-actions";
export declare class Pm2ProcessActionsService implements ProcessActionsService {
    register(remoteAction: ProcessAction): void;
}
