"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type = mail indicates a receive transaction. this displays a mail icon on home page.
var Transaction = /** @class */ (function () {
    function Transaction(_a) {
        var _b = _a === void 0 ? {} : _a, type = _b.type, amount = _b.amount, toAddress = _b.toAddress, fromAddress = _b.fromAddress, transactionHash = _b.transactionHash;
        this.type = type;
        this.amount = amount;
        this.toAddress = toAddress;
        this.fromAddress = fromAddress;
        this.transactionHash = transactionHash;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVGQUF1RjtBQUN2RjtJQU9JLHFCQUFZLEVBTU47WUFOTSw0QkFNTixFQU5RLGNBQUksRUFBRSxrQkFBTSxFQUFFLHdCQUFTLEVBQUUsNEJBQVcsRUFBRSxvQ0FBZTtRQVEvRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUN6QyxDQUFDO0lBQ1Asa0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHlwZSA9IG1haWwgaW5kaWNhdGVzIGEgcmVjZWl2ZSB0cmFuc2FjdGlvbi4gdGhpcyBkaXNwbGF5cyBhIG1haWwgaWNvbiBvbiBob21lIHBhZ2UuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb24ge1xuICAgIHR5cGU6IFN0cmluZztcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICB0b0FkZHJlc3M6IFN0cmluZztcbiAgICBmcm9tQWRkcmVzczogU3RyaW5nO1xuICAgIHRyYW5zYWN0aW9uSGFzaDogU3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoeyB0eXBlLCBhbW91bnQsIHRvQWRkcmVzcywgZnJvbUFkZHJlc3MsIHRyYW5zYWN0aW9uSGFzaCB9OiB7IFxuICAgICAgICB0eXBlPzogU3RyaW5nLCBcbiAgICAgICAgYW1vdW50PzogbnVtYmVyLCBcbiAgICAgICAgdG9BZGRyZXNzPzogU3RyaW5nLFxuICAgICAgICBmcm9tQWRkcmVzcz86IFN0cmluZyxcbiAgICAgICAgdHJhbnNhY3Rpb25IYXNoPzogU3RyaW5nXG4gICAgfSA9IHt9KSBcbiAgICB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xuICAgICAgICB0aGlzLnRvQWRkcmVzcyA9IHRvQWRkcmVzcztcbiAgICAgICAgdGhpcy5mcm9tQWRkcmVzcyA9IGZyb21BZGRyZXNzO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uSGFzaCA9IHRyYW5zYWN0aW9uSGFzaDtcbiAgICAgIH1cbn0iXX0=