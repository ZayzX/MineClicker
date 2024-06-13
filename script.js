document.addEventListener("DOMContentLoaded", function() {
    let score = 0;
    let increment = 1;
    const scoreDisplay = document.getElementById("score");
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
    ];
    const autoClicker = document.getElementById("auto-clicker");
    const autoCost = document.getElementById("autoCost");
    let costAutoClicker = 100;
    let autoClickerActive = false;

    block.addEventListener("click", function() {
        score += increment;
        scoreDisplay.textContent = score;
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

    autoClicker.addEventListener("click", function() {
        if (score >= costAutoClicker && !autoClickerActive) {
            score -= costAutoClicker;
            costAutoClicker *= 2;
            autoCost.textContent = costAutoClicker;
            scoreDisplay.textContent = score;
            autoClickerActive = true;
            startAutoClicker();
            checkUpgrades();
        }
    });

    function startAutoClicker() {
        setInterval(function() {
            score += 1;
            scoreDisplay.textContent = score;
            checkUpgrades();
        }, 1000);
    }

    function checkUpgrades() {
        upgrades.forEach(upgrade => {
            const button = document.getElementById(upgrade.id);
            button.disabled = score < upgrade.cost;
        });
        autoClicker.disabled = score < costAutoClicker || autoClickerActive;
    }

    checkUpgrades();
});
