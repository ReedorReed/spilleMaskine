// Array med ikoner og deres destination, så de kan blive sat ind i DOM
const slotIcons = [
	'icons/appelsin.png',
	'icons/blomme.png',
	'icons/citron.png',
	'icons/jordbaer.png',
	'icons/kirsebaer.png',
	'icons/klokker.png',
	'icons/melon.png',
	'icons/diamant.png',
	'icons/bar.png',
	'icons/syv.png'
];

const iconWeights = [11, 12, 18, 10, 10, 10, 10, 5, 7, 7];

const totalWeight = iconWeights.reduce((sum, weight) => sum + weight, 0);

console.log(totalWeight);

// Kredit variable
let credits = 100;
slotCredit.innerHTML = credits; // indsæt kredit variablen i DOM

// Function for at genrere tilfældigt ikon jeg bruger .length for at få alle elementer i arrayet.
function getRandomIcon() {
	let randomWeight = Math.random() * totalWeight;

	let weightSum = 0;
	for (let i = 0; i < slotIcons.length; i++) {
		weightSum += iconWeights[i];
		if (randomWeight <= weightSum) {
			return slotIcons[i];
		}
	}
	return slotIcons[0];
}

// Funktion til at animere ikonerne til at "spinde"
function shuffleIcons(slot) {
	let currentIconIndex = 0;
	// interval for hvor hurtigt ikonerne skal blandes for at skabe spinde effekten
	const shuffleInterval = setInterval(() => {
		slot.src = slotIcons[currentIconIndex];
		currentIconIndex = (currentIconIndex + 1) % slotIcons.length;
	}, 70);

	return shuffleInterval;
}

//variabel for at tjekke hvor mange spin man har brugt efter at holdt slot 
let holdSpins = 0;

// Spin ikonerne funktion
function spin() {
	// Se om der er kredit nok
	if (credits == 0) {
		gameOverAudio.play();
		alert('Spillet er slut, der er ikke mere kredit!');
		location.reload();
		return;
	}

	// træk kredit fra
	credits += -10;
	slotCredit.innerHTML = credits;

	// Hent alle slot elementerne
	const slots = [slot1, slot2, slot3];
	const holdSlots = [holdSlot1, holdSlot2, holdSlot3];

	//hvis ét slot bliver holdt lægger vi 1 til holdSpins variablen
	if (holdSlot1.checked || holdSlot2.checked || holdSlot3.checked) {
		holdSpins++;
	}
	//hvis der bliver spinnet 3x fjerner vi checket fra checkboxene og holdSpins bliver sat til 0
	if (holdSpins >= 4) {
		holdSlot1.checked = false;
		holdSlot2.checked = false;
		holdSlot3.checked = false;
		holdSpins = 0;
	}

	let finalResults = [];

	if (holdSlot1.checked) {
		finalResults.push(slot1.src);
	} else {
		finalResults.push(getRandomIcon());
	}
	if (holdSlot2.checked) {
		finalResults.push(slot2.src);
	} else {
		finalResults.push(getRandomIcon());
	}
	if (holdSlot3.checked) {
		finalResults.push(slot3.src);
	} else {
		finalResults.push(getRandomIcon());
	}

	// begynd blande animation for ikke holdt vinduer
	const shuffleAnimation = [];

	slots.forEach((slot, index) => {
		if (holdSlots[index].checked === false) {
			// start animationen
			shuffleAnimation[index] = shuffleIcons(slot);
		}
	});

	// stop blanding animation
	setTimeout(() => {
		// stop alle blande intervaller
		shuffleAnimation.forEach((interval, index) => {
			if (interval) clearInterval(interval);
		});

		// vis resultat af slot blanding
		slots.forEach((slot, index) => {
			if (holdSlots[index].checked === false) {
				slot.src = finalResults[index];
			}
		});

		// tjek om der er ens ikoner
		const imageResult1 = slot1.src.split('/').pop(); //fjerner '/' for at kunne sammenligne fil-navne for at se om de er ens
		const imageResult2 = slot2.src.split('/').pop();
		const imageResult3 = slot3.src.split('/').pop();

		//Vinder besked baseret på om det er de sværeste eller letteste at få
		if (
			imageResult1 === 'bar.png' &&
			imageResult2 === 'bar.png' &&
			imageResult3 === 'bar.png'
		) {
			credits += 100;
			slotCredit.innerHTML = credits;
			winAudio.play();
			holdSlot1.checked = false;
			holdSlot2.checked = false;
			holdSlot3.checked = false;
			setTimeout(() => {
				alert('Du fik 3 BAR! +100 kredit!');
			}, 100);
		} else if (
			imageResult1 === 'diamant.png' &&
			imageResult2 === 'diamant.png' &&
			imageResult3 === 'diamant.png'
		) {
			credits += 80;
			slotCredit.innerHTML = credits;
			winAudio.play();
			holdSlot1.checked = false;
			holdSlot2.checked = false;
			holdSlot3.checked = false;
			setTimeout(() => {
				alert('Du fik 3 DIAMANTER! +80 kredit!');
			}, 100);
		} else if (
			imageResult2 === 'syv.png' &&
			imageResult1 === 'syv.png' &&
			imageResult3 === 'syv.png'
		) {
			credits += 77;
			slotCredit.innerHTML = credits;
			winAudio.play();
			holdSlot1.checked = false;
			holdSlot2.checked = false;
			holdSlot3.checked = false;
			setTimeout(() => {
				alert('Du fik 3x7! +77 kredit!');
			}, 100);
		} else if (
			imageResult2 === 'citron.png' &&
			imageResult1 === 'citron.png' &&
			imageResult3 === 'citron.png'
		) {
			credits += 10;
			slotCredit.innerHTML = credits;
			winAudio.play();
			holdSlot1.checked = false;
			holdSlot2.checked = false;
			holdSlot3.checked = false;
			setTimeout(() => {
				alert('Du fik 3 citroner! +10 kredit!');
			}, 100);
		} else if (imageResult1 === imageResult2 && imageResult1 === imageResult3) {
			credits += 20;
			slotCredit.innerHTML = credits;
			winAudio.play();
			holdSlot1.checked = false;
			holdSlot2.checked = false;
			holdSlot3.checked = false;
			setTimeout(() => {
				alert('Du vandt! +20 kredit!');
			}, 100);
		}
	}, 2000); // kører animationen i 2sekunder
}

// Klik event for spin knappen
spinSlot.addEventListener('click', spin);

// Tilføj kredit og klik event for dette samt lyd
function creditSound() {
	creditUpAudio.cloneNode().play();
}

document.getElementById('add-credit').addEventListener('click', () => {
	credits += 10;
	creditSound();
	slotCredit.innerHTML = credits;
});


