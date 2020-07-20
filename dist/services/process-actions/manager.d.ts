import { ProcessActionsService } from "../../contracts/kernel/process-actions";
import { InstanceManager } from "../../support/instance-manager";
/**
 * @export
 * @class RemoteActionManager
 * @extends {InstanceManager<ProcessActionsService>}
 */
export declare class ProcessActionsManager extends InstanceManager<ProcessActionsService> {
    protected createPm2Driver(): ProcessActionsService;
    protected getDefaultDriver(): string;
}
