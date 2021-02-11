// Add your Circle class here

class Circle {

    constructor (radius){
        this.radius = radius
    }

    set diameter(diameter) {
        this.radius = diameter/2 
    }

    get diameter() {
        return this.radius * 2
    }

    set circumference(circumference) {
        this.radius = circumference/2/Math.PI
    }

    get circumference() {
        return 2 * Math.PI * (this.radius)
    }

    get area() {
        return Math.PI * (this.radius)**2
    }

}