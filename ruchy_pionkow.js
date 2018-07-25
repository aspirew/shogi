function wybieranie_z_pola(){

				for (var i = 0; i < 9; i++){
						for (var j = 0; j < 9; j++){
							tablicaRuchow[i][j] = false;	//następuje przed wybraniem pionka - zeruje tablicę możliwych ruchów			
					}}
				aktualneX = wspolrzednaX;	// współrzędne aktualnie wybranego pionka
				aktualneY = wspolrzednaY;
				pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].mozliweRuchy();
				Sprawdzenie_czy_w_grze();
				c.fillStyle = "brown";	//wypełnienie tła
				c.fillRect(0, 0, canvas.width, canvas.height);
				PlanszyMalowanie();
				CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
				CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
				MalowanieDynamiczne();
				faza_gry = true;	// zmiana fazy gry na "oczekiwanie na ruch"	
			
				animacja_wybrania(plansza[pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Wiersz][pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Kolumna].PozycjaX, 
				plansza[pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Wiersz][pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Kolumna].PozycjaY, plansza[aktualneY][aktualneX].Jaki_pionek);
}

function wybieranie_z_cmentarza(wybrany_pionek){	// wybrany pionek = zbiteATwoje[wspolrzednaY][wspolrzednaX].Jaki_pionek || zbiteAWroga[wspolrzednaY][wspolrzednaX].Jaki_pionek

			// CMENTARZE MAJĄ RÓŻNE POŁOŻENIE Y!!
			
				for (var i = 0; i < 9; i++){
						for (var j = 0; j < 9; j++){
							tablicaRuchow[i][j] = false; // zerowanie tablicy ruchów			
					}}
				aktualneX = wspolrzednaX;	// współrzędne aktualnie wybranego pionka
				aktualneY = wspolrzednaY;
				z_cmentarza = true;
				pionki[wybrany_pionek].mozliweRuchy();
				Sprawdzenie_czy_w_grze();
				c.fillStyle = "brown";	//wypełnienie tła
				c.fillRect(0, 0, canvas.width, canvas.height);
				PlanszyMalowanie();
				CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
				CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
				MalowanieDynamiczne();
				faza_gry = true; // zmiana fazy gry na "oczekiwanie na ruch"		
				
				if(CZYJ_RUCH == 0){
				animacja_wybrania(zbiteAWroga[pionki[wybrany_pionek].Wiersz][pionki[wybrany_pionek].Kolumna].PozycjaX, zbiteAWroga[pionki[wybrany_pionek].Wiersz][pionki[wybrany_pionek].Kolumna].PozycjaY, wybrany_pionek);}
				else if(CZYJ_RUCH == 1){animacja_wybrania(zbiteATwoje[pionki[wybrany_pionek].Wiersz][pionki[wybrany_pionek].Kolumna].PozycjaX, zbiteATwoje[pionki[wybrany_pionek].Wiersz][pionki[wybrany_pionek].Kolumna].PozycjaY, wybrany_pionek);}
}


function oczekiwanie_na_ruch(){
	
		if(tablicaRuchow[wspolrzednaY][wspolrzednaX] == true && mouseX >= window.innerWidth / 4 && mouseX <= window.innerWidth / 4 + rozmiar * 9){
			if (plansza[wspolrzednaY][wspolrzednaX].Przechowywanie != CZYJ_RUCH && plansza[wspolrzednaY][wspolrzednaX].Przechowywanie != undefined){	//czy następuje bicie
							pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czygra = false;
							pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czerwony = false;
							pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Promowanie = false;
							pionki[plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek].Czyj = plansza[aktualneY][aktualneX].Przechowywanie; // przynależność jest taka sama, jak pionka, który go zbił
							id_zbitego = plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek;
					// od teraz ten pionek nie gra - zostanie wkrótce przeniesiony na cmentarz (Sprawdzenie_czy_w_grze())
			}
				
				if(z_cmentarza == true){	// zmiana współrzędnych gdy pobrana zostaje z cmentarza
					if(CZYJ_RUCH == 0){
							pionki[zbiteATwoje[aktualneY][aktualneX].Jaki_pionek].Wiersz = wspolrzednaY;
							pionki[zbiteATwoje[aktualneY][aktualneX].Jaki_pionek].Kolumna = wspolrzednaX;
							pionki[zbiteATwoje[aktualneY][aktualneX].Jaki_pionek].Czygra = true;	// od teraz gra
							pionki[zbiteATwoje[aktualneY][aktualneX].Jaki_pionek].Gdzie = true;		// od teraz znajduje się również na polu
							plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek = zbiteATwoje[aktualneY][aktualneX].Jaki_pionek;
							plansza[wspolrzednaY][wspolrzednaX].Przechowywanie = CZYJ_RUCH;
							zbiteATwoje[aktualneY][aktualneX].Zapelnienie = false;
							zbiteATwoje[aktualneY][aktualneX].Jaki_pionek = undefined;
							if(wspolrzednaX <= 2){pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Promowanie = true;}
							
							animacja_przesuniecia_pionka(zbiteAWroga[aktualneY][aktualneX]);
							}
							
					else if(CZYJ_RUCH == 1){
							pionki[zbiteAWroga[aktualneY][aktualneX].Jaki_pionek].Wiersz = wspolrzednaY;
							pionki[zbiteAWroga[aktualneY][aktualneX].Jaki_pionek].Kolumna = wspolrzednaX;
							pionki[zbiteAWroga[aktualneY][aktualneX].Jaki_pionek].Czygra = true;	// od teraz gra
							pionki[zbiteAWroga[aktualneY][aktualneX].Jaki_pionek].Gdzie = true;		// od teraz znajduje się również na polu
							plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek = zbiteAWroga[aktualneY][aktualneX].Jaki_pionek;
							plansza[wspolrzednaY][wspolrzednaX].Przechowywanie = CZYJ_RUCH;
							zbiteAWroga[aktualneY][aktualneX].Zapelnienie = false;
							zbiteAWroga[aktualneY][aktualneX].Jaki_pionek = undefined;
							if(wspolrzednaX >= 6){pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Promowanie = true;}
							
							animacja_przesuniecia_pionka(zbiteATwoje[aktualneY][aktualneX]);
							
				}
					z_cmentarza = false;
					for (var i = 0; i < 9; i++){
					for (var j = 0; j < 9; j++){
								tablicaRuchow[i][j] = false;		// czyszczona jest cała tablica ruchów, z wyjątkiem pola, które zostało wybrane
					}}
					tablicaRuchow[wspolrzednaY][wspolrzednaX] = true;
					
				}
				
				else{		// zmiana współrzędnych gdy pobrana zostaje z pola
							pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Wiersz = wspolrzednaY;
							pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Kolumna = wspolrzednaX;
							if((wspolrzednaY <= 2 && CZYJ_RUCH == 0) || (wspolrzednaY >= 6 && CZYJ_RUCH == 1)){					
							pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Promowanie = true;}
							if(pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Promowanie == true && pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Czerwony == false
							&& plansza[aktualneY][aktualneX].Jaki_pionek != 15 && plansza[aktualneY][aktualneX].Jaki_pionek != 16 
							&& plansza[aktualneY][aktualneX].Jaki_pionek != 36 && plansza[aktualneY][aktualneX].Jaki_pionek != 35 &&plansza[aktualneY][aktualneX].Jaki_pionek != 19 && plansza[aktualneY][aktualneX].Jaki_pionek != 39){ // jeżeli nie jest złotym generałem lub królem		
								if (confirm("Czy chcesz aby pionek był promowany?") == true){
								pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Czerwony = true;}}
							plansza[aktualneY][aktualneX].Zapelnienie = false;
							plansza[wspolrzednaY][wspolrzednaX].Jaki_pionek = plansza[aktualneY][aktualneX].Jaki_pionek;	// wybrane pole od teraz przechowuje pionek o id takim samym co wybrane wcześniej pole
							plansza[wspolrzednaY][wspolrzednaX].Przechowywanie = CZYJ_RUCH;
							plansza[aktualneY][aktualneX].Jaki_pionek = undefined;	// aktualne pole przechowuje od teraz niezdefiniowane id pionka
							plansza[aktualneY][aktualneX].Przechowywanie = undefined;	
							
							animacja_przesuniecia_pionka(plansza[aktualneY][aktualneX]);
							
				}
				
			for (var i = 0; i < 9; i++){
						for (var j = 0; j < 9; j++){
								tablicaRuchow[i][j] = false;		// czyszczona jest cała tablica ruchów, z wyjątkiem pola, które zostało wybrane
					}}
					tablicaRuchow[wspolrzednaY][wspolrzednaX] = true;
					Sprawdzenie_czy_w_grze();
					if (CZYJ_RUCH == 0){CZYJ_RUCH = 1;}	// zmiana ruchu na ruch przeciwnika
					else{CZYJ_RUCH = 0;}
					faza_gry = false;	// faza gry to wybieranie pionka	
	
	}
		else{	// jeżeli klikniesz tam, gdzie pionek nie może się ruszyć - ruch pionka zostaje anulowany
			faza_gry = false;	// zmiana fazy gry na poprzednią (wybieranie pionka), bez zmiany ruchu
				for (var i = 0; i < 9; i++){
					for (var j = 0; j < 9; j++){
						tablicaRuchow[i][j] = false;	// tablica ruchów zostaje wyczyszczona		
					}}
				
				if (z_cmentarza == true){
					if(CZYJ_RUCH == 0){
					animacja_anulowania(zbiteAWroga[pionki[zbiteATwoje[aktualneY][aktualneX].Jaki_pionek].Wiersz][pionki[zbiteATwoje[aktualneY][aktualneX].Jaki_pionek].Kolumna].PozycjaX,
				zbiteAWroga[pionki[zbiteATwoje[aktualneY][aktualneX].Jaki_pionek].Wiersz][pionki[zbiteATwoje[aktualneY][aktualneX].Jaki_pionek].Kolumna].PozycjaY, zbiteATwoje[aktualneY][aktualneX].Jaki_pionek);}
					
					else if (CZYJ_RUCH == 1){
					animacja_anulowania(zbiteATwoje[pionki[zbiteAWroga[aktualneY][aktualneX].Jaki_pionek].Wiersz][pionki[zbiteAWroga[aktualneY][aktualneX].Jaki_pionek].Kolumna].PozycjaX, 
				zbiteATwoje[pionki[zbiteAWroga[aktualneY][aktualneX].Jaki_pionek].Wiersz][pionki[zbiteAWroga[aktualneY][aktualneX].Jaki_pionek].Kolumna].PozycjaY, zbiteAWroga[aktualneY][aktualneX].Jaki_pionek);}}
					
					
				else{
					animacja_anulowania(plansza[pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Wiersz][pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Kolumna].PozycjaX, 
					plansza[pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Wiersz][pionki[plansza[aktualneY][aktualneX].Jaki_pionek].Kolumna].PozycjaY, plansza[aktualneY][aktualneX].Jaki_pionek);} // znajduje się tam również malowanie planszy, cmentarza i innych pionków

					//z_cmentarza = false;
					Sprawdzenie_czy_w_grze();
			}		
}
	

			
