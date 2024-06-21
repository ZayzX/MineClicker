document.addEventListener("DOMContentLoaded", function() {
    let score = 0;
    let totalScore = 0;
    let increment = 1;
    const scoreDisplay = document.getElementById("score");
    const totalScoreDisplay = document.getElementById("totalScore");
    const block = document.getElementById("block");
    const upgrades = [
        { id: "upgrade1", cost: 10, increase: 1 },
        { id: "upgrade2", cost: 50, increase: 5 },
        { id: "upgrade3", cost: 100, increase: 10 },
        { id: "upgrade4", cost: 500, increase: 50 },
        { id: "upgrade5", cost: 1000, increase: 100 },
        { id: "upgrade6", cost: 5000, increase: 500 },
        { id: "upgrade7", cost: 10000, increase: 1000 },
        { id: "upgrade8", cost: 50000, increase: 5000 },
        { id: "upgrade9", cost: 75000, increase: 10000 },
        { id: "upgrade10", cost: 100000, increase: 50000 },
        { id: "upgrade11", cost: 500000, increase: 100000 },
        { id: "upgrade12", cost: 2500000, increase: 500000 },
        { id: "upgrade13", cost: 5000000, increase: 1000000 },
        { id: "upgrade14", cost: 50000000, increase: 10000000 },
        { id: "upgrade15", cost: 500000000, increase: 100000000 },
        { id: "upgrade16", cost: 500000000, increase: 100000000 },
        { id: "upgrade17", cost: 500000000, increase: 100000000 },
        { id: "upgrade18", cost: 500000000, increase: 100000000 },
        { id: "upgrade19", cost: 500000000, increase: 100000000 },
        { id: "upgrade20", cost: 500000000, increase: 100000000 },
    ];
    const autoClickers = [
        { id: "auto-clicker1", cost: 100, increase: 1 },
        { id: "auto-clicker2", cost: 500, increase: 5 },
        { id: "auto-clicker3", cost: 1000, increase: 10 },
        { id: "auto-clicker4", cost: 5000, increase: 50 },
        { id: "auto-clicker5", cost: 10000, increase: 100 },
        { id: "auto-clicker6", cost: 50000, increase: 500 },
        { id: "auto-clicker7", cost: 100000, increase: 1000 },
        { id: "auto-clicker8", cost: 250000, increase: 5000 },
        { id: "auto-clicker9", cost: 500000, increase: 10000 },
        { id: "auto-clicker10", cost: 1000000, increase: 50000},
        { id: "auto-clicker11", cost: 2500000, increase: 1000000},
        { id: "auto-clicker12", cost: 5000000, increase: 10000000},
        { id: "auto-clicker13", cost: 50000000, increase: 100000000},
        { id: "auto-clicker14", cost: 750000000, increase: 1000000000},
        { id: "auto-clicker15", cost: 5000000000, increase: 10000000000},
        
        
    ];
    let autoClickerActive = [false, false, false, false, false, false];

    block.addEventListener("click", function() {
        score += increment;
        totalScore += increment;
        scoreDisplay.textContent = score;
        totalScoreDisplay.textContent = totalScore;
        checkUpgrades();
    });

    upgrades.forEach(upgrade => {
        const button = document.getElementById(upgrade.id);
        const costDisplay = document.getElementById(`cost${upgrade.id.replace('upgrade', '')}`);

        button.addEventListener("click", function() {
            if (score >= upgrade.cost) {
                score -= upgrade.cost;
                increment += upgrade.increase;
                upgrade.cost *= 2;
                costDisplay.textContent = upgrade.cost;
                scoreDisplay.textContent = score;
                checkUpgrades();
            }
        });
    });

    autoClickers.forEach((autoClicker, index) => {
        const button = document.getElementById(autoClicker.id);
        const costDisplay = document.getElementById(`autoCost${index + 1}`);

        button.addEventListener("click", function() {
            if (score >= autoClicker.cost && !autoClickerActive[index]) {
                score -= autoClicker.cost;
                autoClicker.cost *= 2;
                costDisplay.textContent = autoClicker.cost;
                scoreDisplay.textContent = score;
                autoClickerActive[index] = true;
                startAutoClicker(autoClicker.increase);
                checkUpgrades();
            }
        });
    });

    function startAutoClicker(increase) {
        setInterval(function() {
            score += increase;
            totalScore += increase;
            scoreDisplay.textContent = score;
            totalScoreDisplay.textContent = totalScore;
            checkUpgrades();
        }, 1000);
    }

    function checkUpgrades() {
        upgrades.forEach(upgrade => {
            const button = document.getElementById(upgrade.id);
            button.disabled = score < upgrade.cost;
        });
        autoClickers.forEach((autoClicker, index) => {
            const button = document.getElementById(autoClicker.id);
            button.disabled = score < autoClicker.cost || autoClickerActive[index];
        });
    }

    checkUpgrades();
});

        var modal = document.getElementById("myModal");
        var btn = document.getElementById("openModalBtn");
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
