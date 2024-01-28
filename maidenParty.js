function maidenParty(input) {
    let partyPrice = Number(input[0]);

    let loveLetter = Number(input[1]);
    let moneyFromLoveLetters = loveLetter * 0.60;
    let waxRoses = Number(input[2]);
    let moneyFromWaxRoses = waxRoses * 7.20;
    let keyHolders = Number(input[3]);
    let moneyFromKeyHolders = keyHolders * 3.60;
    let caricature = Number(input[4]);
    let moneyFromCaricature = caricature * 18.20;
    let surprises = Number(input[5]);
    let moneyFromSurprises = surprises * 22
    let itemCount = loveLetter + waxRoses + keyHolders + caricature + surprises

    let totalMoney = moneyFromLoveLetters + moneyFromWaxRoses + moneyFromKeyHolders + moneyFromCaricature + moneyFromSurprises

    if (itemCount >= 25) {
        totalMoney = totalMoney * 0.65
    }else {
        totalMoney = totalMoney;
    }
    let finalMoney = (totalMoney * 0.9)
    if (finalMoney >= partyPrice) {
        console.log(`Yes! ${(finalMoney - partyPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(Math.abs(finalMoney - partyPrice).toFixed(2))} lv needed.`)
    }
    }
maidenParty(["320", "8", "2", "5", "5", "1"])