/*The following are the typescript code

class Circle {
    private radius: number;
    private color: string;

    constructor(radius: number = 1.0, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }
    getRadius(): number {
        return this.radius;
    }
    setRadius(radius: number): void {
        this.radius = radius;
    }
    getColor(): string {
        return this.color;
    }
    setColor(color: string): void {
        this.color = color;
    }
    toString(): string {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}
const myCircle = new Circle(3.0, "blue");
console.log(myCircle.toString());
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference());
*/

//The same code in javascript
class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const myCircle = new Circle(3.0, "blue");
console.log(myCircle.toString());
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference());

// Output:
// Circle[radius=3, color=blue]
// Area: 28.274333882308138
// Circumference: 18.84955592153876