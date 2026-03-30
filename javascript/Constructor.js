class Player {
    constructor(name, runs) {
        this.name = name;
        this.runs = runs;
    }
    details() {
        return `${this.name} has batted in ${this.runs.length} matches.`;
    }
    totalRuns() {
        return this.runs.reduce((acc, cv) => acc + cv, 0);
    }
}
const p1 = new Player("Virat", [40, 50, 60]);
console.log(p1.details());
console.log(p1.totalRuns());