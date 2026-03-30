const p1 = {
    name: "virat",
    scores: [60, 70, 80],
    totalRuns: function() {
         let sum = 0;
         for (let n of this.scores) {
            sum += n;
         }
         return sum;
    },
    highestRuns: function() {
        // let max = 0;
        let max = this.scores[0];
        for (let n of this.scores) {
            if (n > max) {
                max = n;
            }
        }
        return max;
    }
}
console.log(p1.totalRuns());
console.log(p1.highestRuns());