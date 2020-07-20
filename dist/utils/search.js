"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNumericCriteria = exports.handleOrCriteria = exports.handleAndCriteria = exports.hasOrCriteria = exports.everyOrCriteria = exports.someOrCriteria = exports.optimizeExpression = void 0;
exports.optimizeExpression = (expression) => {
    switch (expression.op) {
        case "and": {
            const optimized = expression.expressions.map(exports.optimizeExpression);
            const flattened = optimized.reduce((acc, e) => {
                return e.op === "and" ? [...acc, ...e.expressions] : [...acc, e];
            }, []);
            if (flattened.every((e) => e.op === "true")) {
                return { op: "true" };
            }
            if (flattened.some((e) => e.op === "false")) {
                return { op: "false" };
            }
            const expressions = flattened.filter((e) => e.op !== "true");
            return expressions.length === 1 ? expressions[0] : { op: "and", expressions };
        }
        case "or": {
            const optimized = expression.expressions.map(exports.optimizeExpression);
            const flattened = optimized.reduce((acc, e) => {
                return e.op === "or" ? [...acc, ...e.expressions] : [...acc, e];
            }, []);
            if (flattened.every((e) => e.op === "false")) {
                return { op: "false" };
            }
            if (flattened.some((e) => e.op === "true")) {
                return { op: "true" };
            }
            const expressions = flattened.filter((e) => e.op !== "false");
            return expressions.length === 1 ? expressions[0] : { op: "or", expressions };
        }
        default:
            return expression;
    }
};
exports.someOrCriteria = (criteria, predicate) => {
    if (typeof criteria === "undefined") {
        return false;
    }
    if (Array.isArray(criteria)) {
        return criteria.some(predicate);
    }
    return predicate(criteria);
};
exports.everyOrCriteria = (criteria, predicate) => {
    if (typeof criteria === "undefined") {
        return true;
    }
    if (Array.isArray(criteria)) {
        return criteria.every(predicate);
    }
    return predicate(criteria);
};
exports.hasOrCriteria = (criteria) => {
    return exports.someOrCriteria(criteria, () => true);
};
exports.handleAndCriteria = async (criteria, cb) => {
    const promises = Object.keys(criteria)
        .filter((key) => typeof criteria[key] !== "undefined")
        .map((key) => cb(key));
    const expressions = await Promise.all(promises);
    return { op: "and", expressions };
};
exports.handleOrCriteria = async (criteria, cb) => {
    if (Array.isArray(criteria)) {
        const promises = criteria.map((c) => cb(c));
        const expressions = await Promise.all(promises);
        return { op: "or", expressions };
    }
    else {
        const expression = await cb(criteria);
        return { op: "or", expressions: [expression] };
    }
};
exports.handleNumericCriteria = async (property, criteria) => {
    if (typeof criteria === "object") {
        if ("from" in criteria && "to" in criteria) {
            return { op: "between", property, from: criteria.from, to: criteria.to };
        }
        if ("from" in criteria) {
            return { op: "greaterThanEqual", property, value: criteria.from };
        }
        if ("to" in criteria) {
            return { op: "lessThanEqual", property, value: criteria.to };
        }
    }
    return { op: "equal", property, value: criteria };
};
//# sourceMappingURL=search.js.map