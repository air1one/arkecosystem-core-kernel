"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyAncestorOrTargetTaggedFirst = void 0;
exports.anyAncestorOrTargetTaggedFirst = (key, value) => {
    return (req) => {
        for (;;) {
            const targetTags = req.target.getCustomTags();
            if (targetTags) {
                const targetTag = targetTags.find((t) => t.key === key);
                if (targetTag) {
                    return targetTag.value === value;
                }
            }
            if (!req.parentRequest) {
                return false;
            }
            req = req.parentRequest;
        }
    };
};
//# sourceMappingURL=selectors.js.map