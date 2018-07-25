function animacja_przesuniecia_pionka(aktualne_pole){

	var odleglosc = Math.sqrt(Math.pow((aktualne_pole.PozycjaX - plansza[wspolrzednaY][wspolrzednaX].PozycjaX), 2) + Math.pow((aktualne_pole.PozycjaY - plansza[wspolrzednaY][wspolrzednaX].PozycjaY), 2));	// odległość jaką ma poruszyć się pionek
				
				var i = 0;
				
	var interval = setInterval(function () {
		

				var a, b, jazda;
				var y = aktualne_pole.PozycjaY;
				var x = aktualne_pole.PozycjaX;
				var y2 = plansza[wspolrzednaY][wspolrzednaX].PozycjaY;
				var x2 = plansza[wspolrzednaY][wspolrzednaX].PozycjaX;
				
				if (odleglosc/75 < 4) {jazda = 4;}
				else{jazda = odleglosc/75;}
				
				
				a = (y2 - y) / (x2 - x);
				b = y - a*x;
				
				if (x > x2){
					
					malowanie_pionka(x - i, a*(x-i) + b, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czyj, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czerwony, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Rysunek, 0);
					
					i += jazda;
					
					c.fillStyle = "brown";	//wypełnienie tła
					c.fillRect(0, 0, canvas.width, canvas.height);
					PlanszyMalowanie();
					CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
					CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
					MalowanieDynamiczne(plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek);
					
					malowanie_pionka(x - i - jazda, a*(x - i - jazda) + b, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czyj, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czerwony, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Rysunek, 0);
					
						if (x - i <= x2) {
					window.clearInterval(interval);
					
					c.fillStyle = "brown";	//wypełnienie tła
					c.fillRect(0, 0, canvas.width, canvas.height);
					PlanszyMalowanie();
					CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
					CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
					MalowanieDynamiczne();
						}

				}
				
				else if (x < x2){
					
					malowanie_pionka(x + i, a*(x+i) + b, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czyj, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czerwony, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Rysunek, 0);
					
					i += jazda;
					
					c.fillStyle = "brown";	//wypełnienie tła
					c.fillRect(0, 0, canvas.width, canvas.height);
					PlanszyMalowanie();
					CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
					CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
					MalowanieDynamiczne(plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek);
					
					malowanie_pionka(x + i + jazda, a*(x + i + jazda) + b, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czyj, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czerwony, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Rysunek, 0);
					
						if (x + i >= x2) {
							window.clearInterval(interval);
					c.fillStyle = "brown";	//wypełnienie tła
					c.fillRect(0, 0, canvas.width, canvas.height);
					PlanszyMalowanie();
					CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
					CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
					MalowanieDynamiczne();
						}

				}//}
				
				else if (x == x2){
					if(y < y2){

					malowanie_pionka(x, y + i, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czyj, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czerwony, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Rysunek, 0);
					
					i += jazda;
					
					c.fillStyle = "brown";	//wypełnienie tła
					c.fillRect(0, 0, canvas.width, canvas.height);
					PlanszyMalowanie();
					CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
					CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
					MalowanieDynamiczne(plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek);
					
					malowanie_pionka(x, y + i + jazda, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czyj, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czerwony, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Rysunek, 0);
					
						if (y + i >= y2) {
							window.clearInterval(interval);
					c.fillStyle = "brown";	//wypełnienie tła
					c.fillRect(0, 0, canvas.width, canvas.height);
					PlanszyMalowanie();
					CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
					CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
					MalowanieDynamiczne();
						}

				}
				
					else if(y > y2){
					
					malowanie_pionka(x, y - i, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czyj, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czerwony, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Rysunek, 0);
					
					i += jazda;
					
					PlanszyMalowanie();
					CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
					CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
					MalowanieDynamiczne(plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek);
					
					malowanie_pionka(x, y - i - jazda, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czyj, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czerwony, pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Rysunek, 0);
					
						if (y - i <= y2) {
							window.clearInterval(interval);
							
					c.fillStyle = "brown";	//wypełnienie tła
					c.fillRect(0, 0, canvas.width, canvas.height);
					PlanszyMalowanie();
					CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
					CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
					MalowanieDynamiczne();
						}
				}
				
				}	
			
			}, 1);	
				
			}

function animacja_wybrania(posX, posY, idpionka){
	
			var v = 0;

			var intervalID = setInterval(function () {
				
				malowanie_pionka(posX, posY, pionki[idpionka].Czyj, pionki[idpionka].Czerwony, pionki[idpionka].Rysunek, v);
					
					v++;
					
					c.fillStyle = "brown";	//wypełnienie tła
					c.fillRect(0, 0, canvas.width, canvas.height);
					PlanszyMalowanie();
					CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
					CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
					MalowanieDynamiczne(idpionka);

					malowanie_pionka(posX, posY, pionki[idpionka].Czyj, pionki[idpionka].Czerwony, pionki[idpionka].Rysunek, v);
					
			if (v === 20) {
			window.clearInterval(intervalID);
		}
			}, 5);	
		
		
}

function animacja_anulowania(posX, posY, idpionka){
	
			var v = 20;

			var intervalID = setInterval(function () {
				
				malowanie_pionka(posX, posY, pionki[idpionka].Czyj, pionki[idpionka].Czerwony, pionki[idpionka].Rysunek, v);
					
					v--;
					
					c.fillStyle = "brown";	//wypełnienie tła
					c.fillRect(0, 0, canvas.width, canvas.height);
					PlanszyMalowanie();
					CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
					CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
					MalowanieDynamiczne(idpionka);

					malowanie_pionka(posX, posY, pionki[idpionka].Czyj, pionki[idpionka].Czerwony, pionki[idpionka].Rysunek, v);
					
			if (v === 0) {
			window.clearInterval(intervalID);
			z_cmentarza = false;
			Sprawdzenie_czy_w_grze();
				
		}
			}, 5);	
	
}