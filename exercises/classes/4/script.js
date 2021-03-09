class Point {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;

    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }

    addToX(x) {
        this.x += x;
    }
    addToY(y) {
        this.y += y;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    addPoint(point) {
        this.x += point.getX();
        this.y += point.getY();
    }

    isSame(point) {
        return this.x === point.getX() && this.y === point.getY();
    }

    print() {
        console.log(`(${this.x},${this.y})`);
    }
}

class PointWorld {
    constructor() {
        this.points = [];
    }

    sortPoints() {
        return this.points.sort((pointA, pointB) => pointB.getY() - pointA.getY());
    }

    removeDuplicates() {
        const temp = [];
        this.points.forEach((point) => {
            const dup = temp.find((elem) => point.isSame(elem));
            if (!dup) temp.push(point);
        })
        return temp;
    }

    sumX() {
        return this.points.reduce((sum, current) => sum + current.getX(), 0);
    }

    findPoint(point) {
        return this.points.find((elem) => point.isSame(elem)) ? true : false;
    }
}