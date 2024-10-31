const lvl2Trailer = document.createElement('div');
lvl2Trailer.setAttribute('class', 'tschikaTrailers');
lvl2Trailer.style.backgroundImage = "url('docs/assets/trailer\ 1.png')";
const lvl3Trailer = document.createElement('div');
lvl3Trailer.setAttribute('class', 'tschikaTrailers');
lvl3Trailer.style.backgroundImage = "url('docs/assets/trailer\ 2.png')";
const lvl4Trailer = document.createElement('div');
lvl4Trailer.setAttribute('class', 'tschikaTrailers');
lvl4Trailer.style.backgroundImage = "url('docs/assets/trailer\ 3.png')";
const lvl5Trailer = document.createElement('div');
lvl5Trailer.setAttribute('class', 'tschikaTrailers');
lvl5Trailer.style.backgroundImage = "url('docs/assets/tschika\ 16by16\ icon.png')";
const lvl6Trailer = document.createElement('div');
lvl6Trailer.setAttribute('class', 'tschikaTrailers');
lvl6Trailer.style.backgroundImage = "url(docs/assets/key1.png)";
let i = 0;
setInterval(() =>{i++; lvl6Trailer.style.backgroundImage = `url(docs/assets/key${(i%2)+1}.png)`}, 100);

function setIntervalX(callback, delay, repetitions) {
	let x = 0;
	let intervalID = window.setInterval(function () {
		callback();
		if (++x === repetitions) {
			window.clearInterval(intervalID);
		}
	}, delay);
}
class inconvenienceTschika extends HTMLElement {
    constructor(level){
        super();
		this._level = level;
		this._exp = this._level*100 - 100;
		this.UltimatelevelUp();
		this.stats();
		this.moving();
		this.addEventListener('click', () => {this.menu()})
		this.setAttribute('class', 'inconvenienceTschikas'); 
		this.setAttribute('draggable', 'true');
		document.querySelector('body').appendChild(this);
    }
	connectedCallback() {
        console.log("inconvenience!tschika has been added to the page");
    }
    disconnectedCallback() {
		console.log("*commits a programming war crime* GOODBYE, WORLD!");
    }
	get exp(){
		return this._exp;
	}
	get level(){
		return this._level;
	}
	stats(){
		let _this = this;
		let expCountElement = document.createElement('p');
		expCountElement.style.display = 'none';
		expCountElement.style.color = 'red';
		expCountElement.style.backgroundColor = 'rgba(0,0,0,0.7)';
		expCountElement.style.textAlign = 'center';
		expCountElement.style.fontSize = '1em';
		this.appendChild(expCountElement);
		_this.addEventListener('mouseover', () => {expCountElement.style.display = 'block'; expCountElement.innerHTML = `exp: ${this._exp.toFixed(2)}  lvl: ${this._level}`;});
		_this.addEventListener('mouseout', () => {expCountElement.style.display = 'none'});
	}
	levelUp(){
		if (this._exp == 0 && this._exp < 100){this._level = 1; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '2s');}
		else if (this._exp >= 100 && this._exp < 200 && document.getElementsByClassName('tschikaTrailers').length < 1){this._level = 2; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '1s'); document.body.appendChild(lvl2Trailer);}
		else if (this._exp >= 200 && this._exp < 300 && document.getElementsByClassName('tschikaTrailers').length < 2){this._level = 3; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '0.5s'); document.body.appendChild(lvl3Trailer);}
		else if (this._exp >= 300 && this._exp < 400 && document.getElementsByClassName('tschikaTrailers').length < 3){this._level = 4; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '0.2s'); document.body.appendChild(lvl4Trailer);}
		else if (this._exp >= 400 && this._exp < 1000000 && document.getElementsByClassName('tschikaTrailers').length < 4){this._level = 5; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '0.0001s'); document.body.appendChild(lvl5Trailer);}
		else if (this._exp >= 1000000  && document.getElementsByClassName('tschikaTrailers').length < 5){this._level = 6; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '0.0001s'); document.body.appendChild(lvl6Trailer);}
	}
	UltimatelevelUp(){
		if (this._exp == 0 && this._exp < 100){this._level = 1; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '2s');}
		else if (this._exp >= 100 && this._exp < 200 && document.getElementsByClassName('tschikaTrailers').length < 1){this._level = 2; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '1s'); document.body.appendChild(lvl2Trailer);}
		else if (this._exp >= 200 && this._exp < 300 && document.getElementsByClassName('tschikaTrailers').length < 2){this._level = 3; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '0.5s'); document.body.appendChild(lvl2Trailer); document.body.appendChild(lvl3Trailer);}
		else if (this._exp >= 300 && this._exp < 400 && document.getElementsByClassName('tschikaTrailers').length < 3){this._level = 4; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '0.2s'); document.body.appendChild(lvl2Trailer); document.body.appendChild(lvl3Trailer); document.body.appendChild(lvl4Trailer);}
		else if (this._exp >= 400 && this._exp < 1000000 && document.getElementsByClassName('tschikaTrailers').length < 4){this._level = 5; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '0.0001s'); document.body.appendChild(lvl2Trailer); document.body.appendChild(lvl3Trailer); document.body.appendChild(lvl4Trailer); document.body.appendChild(lvl5Trailer);}
		else if (this._exp >= 1000000  && document.getElementsByClassName('tschikaTrailers').length < 5){this._level = 6; document.querySelector('html').style.setProperty('--tschikaMovementSpeed', '0.0001s'); document.body.appendChild(lvl2Trailer); document.body.appendChild(lvl3Trailer); document.body.appendChild(lvl4Trailer); document.body.appendChild(lvl5Trailer); document.body.appendChild(lvl6Trailer);}
	}
	moving(){
		let _this = this;
		let moving = true;
		this.addEventListener("dragstart", initialClick, false);
		this.addEventListener("dragend", ()=>{this.levelUp()})
		function move(e){
			let newX = e.clientX - 100;
			let newY = e.clientY - 100;
			_this.style.left = newX + "px";
			_this.style.top = newY + "px";
			_this._exp += 0.025;
		}
		function initialClick(e) {
			if(moving){
				document.removeEventListener("mousemove", move);
				moving = !moving;
				return;
			}
			moving = !moving;
				_this = this;
				document.addEventListener("mousemove", move, false);
		}
	}
	selfDestruct(){
		let _this = this;
		let backgroundFramesCount = 0;
		function backgroundFrames(){
			_this.style.backgroundImage = `url('docs/assets/explosionGif/frame_${backgroundFramesCount}_delay-0.1s.png')`;
			backgroundFramesCount++;
			if (backgroundFramesCount > 11){
				const explosionAudioElement = document.createElement('audio');
				const explosionAudioSound = document.createElement('source');
				explosionAudioSound.setAttribute('src', 'docs/assets/selfdestructSFX.ogg');
				explosionAudioSound.setAttribute('type', 'audio/ogg');
				explosionAudioElement.appendChild(explosionAudioSound);
				_this.appendChild(explosionAudioElement);
				explosionAudioElement.play();
				_this._exp =- 5;
				_this.remove();
			}
		}
		setIntervalX(backgroundFrames,30,12);
	}
	editingElementText(){
		let selectedElement = null;
		let possibleElement = document.querySelectorAll('*:not(html, body, inconvenience-tschika, head, script, link, title, head, svg, .foodItems, .tschikaMenuElements');
		for (let i = 0; i < possibleElement.length; i++) {
			possibleElement[i].addEventListener('click', () => {
				if (selectedElement == null){
					let self = possibleElement[i];
					selectedElement = self;
					selectedElement.setAttribute('id', 'selectedElement');
					console.log(selectedElement);
					let editedText = prompt('what will you change the text to?');
					this._exp += 10;
					this.levelUp();
					// //language compatibility and filters
					if(/nigger/i.test(editedText) && this._level < 6 || /nigga/i.test(editedText) && this._level < 6){alert('don\'t be racist, i am a tschika, and i\'ve got news for you!\n (NO, BITCH)');}
					else if(/sigma/i.test(editedText) || /skibidi/i.test(editedText) || /rizz/i.test(editedText) || /simga/i.test(editedText) || /tiktok/i.test(editedText)||/gyat/i.test(editedText)){alert('fuck off back to satan\'s left testicle. You\'re literally the cum equivelant of the British museum. (Don\'t be cringe)');this._exp = 0; window.close(); for (let i=0; i<document.querySelectorAll('*').length; i++){document.querySelectorAll[i].remove()}; inconvenienceTschikaElement.selfDestruct(); selectedElement.remove()}
					else if (editedText == "INTERNAL COMBUSTION ENGINE" && this._exp > 200){this._exp = 1000000; this.levelUp(); alert('you have unlocked the final level, which is pretty cool, isn\'t it? (ULTIMATE POWER, AT LAST!!!)')}
					else {selectedElement.innerHTML = editedText;}
				}
			});	
		}
		
	}
	theivery(){	
		let _this = this;
		let selectedElement = null;
		let possibleElement = document.querySelectorAll('*:not(html, body, inconvenience-tschika, head, script, link, title, head, svg, .foodItems, .tschikaMenuElements');
		for (let i = 0; i < possibleElement.length; i++) {
			possibleElement[i].addEventListener('click', () => {
				if (selectedElement == null){
					let self = possibleElement[i];
					selectedElement = self;
					selectedElement.setAttribute('id', 'selectedElement');
					console.log(selectedElement);
					let selectedElementCompStyle = window.getComputedStyle(selectedElement);
					_this.style.left = selectedElementCompStyle.getPropertyValue('left');
					_this.style.top = selectedElementCompStyle.getPropertyValue('top');
					selectedElement.remove();
					_this._exp += 7;
					_this.levelUp();
				}
			});	
		}	
	}
	menu(){
		if (document.getElementsByClassName('tschikaMenuElements').length < 5){
			let _this = this;
			const tschikaElementCompStyle = window.getComputedStyle(_this);
			const menuContainer = document.createElement('div');
			menuContainer.setAttribute('class', 'tschikaMenuElements');
			menuContainer.style.marginLeft = tschikaElementCompStyle.getPropertyValue('width');
			menuContainer.style.width = 10 + "em";
			menuContainer.setAttribute('id', 'tschikaMenuContainer');
			const menuButton1 = document.createElement('button');
			menuButton1.setAttribute('class', 'tschikaMenuElements');
			const menuButton2 = document.createElement('button');
			menuButton2.setAttribute('class', 'tschikaMenuElements');
			const menuButton3 = document.createElement('button');
			menuButton3.setAttribute('class', 'tschikaMenuElements');
			const menuButton4 = document.createElement('button');
			menuButton4.setAttribute('class', 'tschikaMenuElements');
			const menuButton5 = document.createElement('button');
			menuButton5.setAttribute('class', 'tschikaMenuElements');
			_this.appendChild(menuContainer);
			menuContainer.appendChild(menuButton1);
			menuContainer.appendChild(menuButton2);
			menuContainer.appendChild(menuButton3);
			menuContainer.appendChild(menuButton4);
			menuContainer.appendChild(menuButton5);
			menuContainer.insertAdjacentText("afterbegin", "they call this thing \"hax\".");
			menuButton1.innerHTML = "remove stuff";
			menuButton2.innerHTML = "edit text";
			menuButton3.innerHTML = "self destruct";
			menuButton4.innerHTML = "how to use this";
			menuButton5.innerHTML = "for emergencies(ᵒᵗʰᵉʳʷᶦˢᵉ ʸᵒᵘ ʷᶦˡˡ ʳᵉᵍʳᵉᵗ ᶦᵗ)";
			menuButton1.addEventListener('click', () => {this.theivery()});
			menuButton2.addEventListener('click', () => {this.editingElementText()});
			menuButton3.addEventListener('click', () => {this.selfDestruct()});
			menuButton4.addEventListener('click', () => {})
			menuButton5.addEventListener('click', () => {open('https://youtu.be/dQw4w9WgXcQ'); alert('a fire is an emergency. I hope you used it for that. if not, then you probably shoudn\'t'); if(_this._level == 5){alert('unless you were looking for secrets. Hint 2: fire is involved');}});
		}
		else{
			for (let i = 0; i < document.querySelectorAll('.tschikaMenuElements').length; i++) {
				document.querySelectorAll('.tschikaMenuElements')[i].remove();
			}
		}
	}
}
customElements.define("inconvenience-tschika", inconvenienceTschika);
const inconvenienceTschikaElement = new inconvenienceTschika(3);
