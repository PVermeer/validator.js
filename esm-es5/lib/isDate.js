var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function isValidFormat(format) {
    return /(^(y{4}|y{2})[\/-](m{1,2})[\/-](d{1,2})$)|(^(m{1,2})[\/-](d{1,2})[\/-]((y{4}|y{2})$))|(^(d{1,2})[\/-](m{1,2})[\/-]((y{4}|y{2})$))/gi.test(format);
}
function zip(date, format) {
    var zippedArr = [], len = Math.min(date.length, format.length);
    for (var i = 0; i < len; i++) {
        zippedArr.push([date[i], format[i]]);
    }
    return zippedArr;
}
export default function isDate(input, format) {
    var e_1, _a;
    if (format === void 0) { format = 'YYYY/MM/DD'; }
    if (typeof input === 'string' && isValidFormat(format)) {
        var splitter = /[-/]/, dateAndFormat = zip(input.split(splitter), format.toLowerCase().split(splitter)), dateObj = {};
        try {
            for (var dateAndFormat_1 = __values(dateAndFormat), dateAndFormat_1_1 = dateAndFormat_1.next(); !dateAndFormat_1_1.done; dateAndFormat_1_1 = dateAndFormat_1.next()) {
                var _b = __read(dateAndFormat_1_1.value, 2), dateWord = _b[0], formatWord = _b[1];
                if (dateWord.length !== formatWord.length) {
                    return false;
                }
                dateObj[formatWord.charAt(0)] = dateWord;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (dateAndFormat_1_1 && !dateAndFormat_1_1.done && (_a = dateAndFormat_1.return)) _a.call(dateAndFormat_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return new Date(dateObj.m + "/" + dateObj.d + "/" + dateObj.y).getDate() === +dateObj.d;
    }
    return Object.prototype.toString.call(input) === '[object Date]' && isFinite(input);
}
