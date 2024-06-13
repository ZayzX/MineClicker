document.addEventListener("DOMContentLoaded", function() {
    let score = 0;
    let increment = 1;
    const scoreDisplay = document.getElementById("score");
    const cookie = document.getElementById("cookie");
    const upgrade1 = document.getElementById("upgrade1");
    const upgrade2 = document.getElementById("upgrade2");
    const upgrade3 = document.getElementById("upgrade3");
    const upgrade4 = document.getElementById("upgrade4");
    const upgrade5 = document.getElementById("upgrade5");
    const upgrade6 = document.getElementById("upgrade6");
    const upgrade7 = document.getElementById("upgrade7");
    const cost1 = document.getElementById("cost1");
    const cost2 = document.getElementById("cost2");
    const cost3 = document.getElementById("cost3");
    const cost4 = document.getElementById("cost4");
    const cost5 = document.getElementById("cost5");
    const cost6 = document.getElementById("cost6");
    const cost7 = document.getElementById("cost7");
    
    

    let costUpgrade1 = 10;
    let costUpgrade2 = 50;
    let costUpgrade3 = 100;
    let costUpgrade4 = 150;
    let costUpgrade5 = 200;
    let costUpgrade6 = 500;
    let costUpgrade7 = 1000;
    

    cookie.addEventListener("click", function() {
        score += increment;
        scoreDisplay.textContent = score;
        checkUpgrades();
    });

    upgrade1.addEventListener("click", function() {
        if (score >= costUpgrade1) {
            score -= costUpgrade1;
            increment += 1;
            costUpgrade1 *= 2;
            cost1.textContent = costUpgrade1;
            scoreDisplay.textContent = score;
            checkUpgrades();
        }
    });

    upgrade2.addEventListener("click", function() {
        if (score >= costUpgrade2) {
            score -= costUpgrade2;
            increment += 5;
            costUpgrade2 *= 2;
            cost2.textContent = costUpgrade2;
            scoreDisplay.textContent = score;
            checkUpgrades();
        }
    });

    upgrade3.addEventListener("click", function() {
        if (score >= costUpgrade3) {
            score -= costUpgrade3;
            increment += 10;
            costUpgrade3 *= 2;
            cost3.textContent = costUpgrade3;
            scoreDisplay.textContent = score;
            checkUpgrades();
        }
    });
    
    upgrade4.addEventListener("click", function() {
        if (score >= costUpgrade4) {
            score -= costUpgrade4;
            increment += 150;
            costUpgrade4 *= 2;
            cost4.textContent = costUpgrade4;
            scoreDisplay.textContent = score;
            checkUpgrades();
        }
    });
    
    upgrade5.addEventListener("click", function() {
        if (score >= costUpgrade5) {
            score -= costUpgrade5;
            increment += 200;
            costUpgrade5 *= 2;
            cost5.textContent = costUpgrade5;
            scoreDisplay.textContent = score;
            checkUpgrades();
        }
    });
    
    upgrade6.addEventListener("click", function() {
        if (score >= costUpgrade6) {
            score -= costUpgrade6;
            increment += 500;
            costUpgrade6 *= 2;
            cost6.textContent = costUpgrade6;
            scoreDisplay.textContent = score;
            checkUpgrades();
        }
    });
    
    upgrade7.addEventListener("click", function() {
        if (score >= costUpgrade7) {
            score -= costUpgrade7;
            increment += 1000;
            costUpgrade7 *= 2;
            cost7.textContent = costUpgrade7;
            scoreDisplay.textContent = score;
            checkUpgrades();
        }
    });
    
    function checkUpgrades() {
        upgrade1.disabled = score < costUpgrade1;
        upgrade2.disabled = score < costUpgrade2;
        upgrade3.disabled = score < costUpgrade3;
        upgrade4.disabled = score < costUpgrade4;
        upgrade5.disabled = score < costUpgrade5;
        upgrade6.disabled = score < costUpgrade6;
        upgrade7.disabled = score < costUpgrade7;
    }

    checkUpgrades();
});
