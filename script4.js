class UberCalculator {
    constructor(baseRatePerKm, ratePerMinute, bookingFee) {
        this.baseRatePerKm = baseRatePerKm;
        this.ratePerMinute = ratePerMinute;
        this.bookingFee = bookingFee;
    }
    calculatePrice(distanceInKm, timeInMinutes) {
        const distanceCost = distanceInKm * this.baseRatePerKm;
        const timeCost = timeInMinutes * this.ratePerMinute;
        const totalCost = distanceCost + timeCost + this.bookingFee;

        return totalCost;
    }
}


const uberCalculator = new UberCalculator(1.5, 0.2, 5); // Sample rates and fee
const distanceTraveled = 10; // in kilometers
const timeTaken = 15; // in minutes

const totalPrice = uberCalculator.calculatePrice(distanceTraveled, timeTaken);

console.log(`Uber Price: ₹${totalPrice.toFixed(2)}`);
//Output:
//Uber Price: ₹23.00