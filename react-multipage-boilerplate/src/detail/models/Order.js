export default class Order {
    constructor(orderNo, hotelName, roomType, cellPhone, bookingPerson, operation) {
        this.orderNo = orderNo;
        this.hotelName = hotelName;
        this.roomType = roomType;
        this.cellPhone = cellPhone;
        this.bookingPerson = bookingPerson;
        this.operation = operation;
    }
}