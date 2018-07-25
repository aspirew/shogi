function InicjacjaGry(){
		
		// tworzenie nowych obiektów	

		for (var i = 0; i < 9; i++){
			for (var j = 0; j < 9; j++){
				plansza[i][j] = new pole(window.innerWidth / 4 + rozmiar / 5 + rozmiar * j, rozmiar /5 + rozmiar * i, false);	//stworzenie obiektów dla każdego pola na planszy - X, Y, czy_zapelniony, jaki_pionek, kolor, co_przechowuje
		}}
		
		for (j = 0; j < 9; j++){
		pionki[j+20] = new pawn(1, true, true, 2, j, 0, false);	// nadanie klas zwykłym pionkom -> tablice pionków o id 0-8 i 20-28 to zwykły pionek; na początku są pionki twoje, od 20 są pionki wroga
		pionki[j] = new pawn(0, true, true, 6, j, 0, false);	// czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony
		plansza[2][j].Jaki_pionek = j + 20;	// należy określić id pionka jakie przechowuje dane pole (plansza.jaki_pionek)
		plansza[6][j].Jaki_pionek = j;
		}

		
		pionki[29] = new lanca(1, true, true, 0, 0, 1, false);
		plansza[0][0].Jaki_pionek = 29;
		pionki[30] = new lanca(1, true, true, 0, 8, 1, false);			// lance
		plansza[0][8].Jaki_pionek = 30;
		pionki[9] = new lanca(0, true, true, 8, 0, 1, false);
		plansza[8][0].Jaki_pionek = 9;
		pionki[10] = new lanca(0, true, true, 8, 8, 1, false);
		plansza[8][8].Jaki_pionek = 10;
		
		pionki[31] = new kon(1, true, true, 0, 1, 2, false);
		plansza[0][1].Jaki_pionek = 31;
		pionki[32] = new kon(1, true, true, 0, 7, 2, false);			// konie
		plansza[0][7].Jaki_pionek = 32;
		pionki[11] = new kon(0, true, true, 8, 1, 2, false);
		plansza[8][1].Jaki_pionek = 11;
		pionki[12] = new kon(0, true, true, 8, 7, 2, false);
		plansza[8][7].Jaki_pionek = 12;
		
		pionki[33] = new generalS(1, true, true, 0, 2, 3, false);
		plansza[0][2].Jaki_pionek = 33;
		pionki[34] = new generalS(1, true, true, 0, 6, 3, false);			// srebrni generałowie
		plansza[0][6].Jaki_pionek = 34;
		pionki[13] = new generalS(0, true, true, 8, 2, 3, false);
		plansza[8][2].Jaki_pionek = 13;
		pionki[14] = new generalS(0, true, true, 8, 6, 3, false);
		plansza[8][6].Jaki_pionek = 14;
		
		pionki[35] = new generalZ(1, true, true, 0, 3, 4);
		plansza[0][3].Jaki_pionek = 35;
		pionki[36] = new generalZ(1, true, true, 0, 5, 4);			// złoci generałowie
		plansza[0][5].Jaki_pionek = 36;
		pionki[15] = new generalZ(0, true, true, 8, 3, 4);			// złoty generał nie może być promowany
		plansza[8][3].Jaki_pionek = 15;
		pionki[16] = new generalZ(0, true, true, 8, 5, 4);
		plansza[8][5].Jaki_pionek = 16;
		
		pionki[37] = new goniec(1, true, true, 1, 7, 5, false);		//gońce
		plansza[1][7].Jaki_pionek = 37;
		pionki[17] = new goniec(0, true, true, 7, 1, 5, false);
		plansza[7][1].Jaki_pionek = 17;

		pionki[38] = new wieza(1, true, true, 1, 1, 6, false);		//wieże
		plansza[1][1].Jaki_pionek = 38;
		pionki[18] = new wieza(0, true, true, 7, 7, 6, false);
		plansza[7][7].Jaki_pionek = 18;
		
		pionki[39] = new krol(1, true, true, 0, 4, 7, false);		//królowie
		plansza[0][4].Jaki_pionek = 39;
		pionki[19] = new krol(0, true, true, 8, 4, 7, false);			// ostatnia wartość: czy_zagrozony
		plansza[8][4].Jaki_pionek = 19;
		
		
		for (i = 0; i < 9; i++){
			for (j = 0; j < 4; j++){
				zbiteATwoje[i][j] = new cmentarz((window.innerWidth / 4) - rozmiar * 4 + rozmiar * j + rozmiar / 5, rozmiar / 5 + rozmiar * i, false);	//każde pole (choć niewidoczne) jest na cmentarzu osobnym obiektem - cmentarz wroga, a od teraz twoje pionki
				zbiteAWroga[i][j] = new cmentarz((window.innerWidth / 4)  + rozmiar * 10 + rozmiar * j, rozmiar / 5 + rozmiar * i, false);	// twój cmentarz, a od teraz pionki wroga
			}}
		
		c.fillStyle = "brown";	//wypełnienie tła
		c.fillRect(0, 0, canvas.width, canvas.height);
		c.font = rozmiar/3 + "px Arial";
		
		Sprawdzenie_czy_w_grze();	// funkcja ta sprawdza, czy pionek jest w grze - czy ma się ustawić na polu, czy na cmentarzu
		PlanszyMalowanie();	// maluje planszę
		CmentarzaMalowanie((window.innerWidth / 4) - rozmiar * 4);
		CmentarzaMalowanie((window.innerWidth / 4) + rozmiar * 10);
		MalowanieDynamiczne();	// maluje pionki na planszy lub cmentarzu
		enduring = true;
	}	
	
		function mousePos(event) {	//co się dzieje po kliknięciu
		
		if (enduring == true){
			stage = canvas.getBoundingClientRect();
			mouseX = event.clientX - stage.left;
			mouseY = event.clientY - stage.top;
			
			wspolrzedne();	//pobiera wpsołrzędne naciśniętego pola

						
		if (faza_gry == false && plansza[wspolrzednaY][wspolrzednaX].Przechowywanie == CZYJ_RUCH && mouseX >= window.innerWidth / 4 + rozmiar / 5 && mouseX <= window.innerWidth / 4 + rozmiar / 5 + rozmiar * 9){	//wybranie pionka znajdującego się na polu - jeżeli faza gry to wybieranie pionka, a naciśnięte pole przechowuje odpowiedni pionek, a także czy naciśnieto na pole (po położeniu myszy)
		wybieranie_z_pola();
		}
		
		else if (faza_gry == false && zbiteATwoje[wspolrzednaY][wspolrzednaX].Zapelnienie == true && mouseX > window.innerWidth / 4 + rozmiar * 9 && CZYJ_RUCH == 0){		// wybranie pionka na cmentarzu
			wybieranie_z_cmentarza(zbiteATwoje[wspolrzednaY][wspolrzednaX].Jaki_pionek);
		}
		
		else if (faza_gry == false && zbiteAWroga[wspolrzednaY][wspolrzednaX].Zapelnienie == true && mouseX < window.innerWidth / 4 && CZYJ_RUCH == 1){
			wybieranie_z_cmentarza(zbiteAWroga[wspolrzednaY][wspolrzednaX].Jaki_pionek);
		}
		
		else if (faza_gry == true){
			oczekiwanie_na_ruch();
		}
		
		if (pionki[19].Czygra == false){
			enduring = false;
			if (confirm("Wygrał gracz " + pionki[39].Czyj + ". Czy chcesz zagrać jeszcze raz?") == true){
				tablicaRuchow[wspolrzednaY][wspolrzednaX] = false;
				InicjacjaGry();
			}
		}
		else if (pionki[39].Czygra == false){
			enduring = false;
			if (confirm("Wygrał gracz " + pionki[19].Czyj + ". Czy chcesz zagrać jeszcze raz?") == true){
				tablicaRuchow[wspolrzednaY][wspolrzednaX] = false;
				InicjacjaGry();
			}
		}
	
		}}
	
	function Sprawdzenie_czy_w_grze(){	//funkcja przydziela również miejsce na cmentarzu
	var bool = true;	// zmienna bool zapewnia tylko jednorazowe wstawienie pionka na cmentarz
		
	for (var u = 0; u < 40; u++){	// pionki zbite, a należące teraz do wroga
		if(pionki[u].Czyj == 1){
		if(pionki[u].Czygra == false && pionki[u].Gdzie == true){	// jeżeli pionek nie gra, a znajduje się nadal na polu
			for (i = 0; i < 9; i++){
				for (j = 0; j < 4; j++){
					if (zbiteAWroga[i][j].Zapelnienie == false && bool == true){
						pionki[u].Wiersz = i;
						pionki[u].Kolumna = j;
						zbiteAWroga[pionki[u].Wiersz][pionki[u].Kolumna].Zapelnienie = true;	
						zbiteAWroga[pionki[u].Wiersz][pionki[u].Kolumna].Jaki_pionek = id_zbitego;	
						pionki[u].Gdzie = false;
					bool = false;
		}}}bool = true;}
			else if(pionki[u].Czygra == true){	// jeżeli pionek gra to znajduje, lub będzie znajdować się na planszy, odpowiedniej planszy zostają nadane wymagane parametry
				plansza[pionki[u].Wiersz][pionki[u].Kolumna].Zapelnienie = true;
				plansza[pionki[u].Wiersz][pionki[u].Kolumna].Przechowywanie = 1;}
	}
	else{
		if (pionki[u].Czygra == false && pionki[u].Gdzie == true){		
			for (i = 0; i < 9; i++){
				for (j = 0; j < 4; j++){	
					if (zbiteATwoje[i][j].Zapelnienie == false && bool == true){
						pionki[u].Wiersz = i;
						pionki[u].Kolumna = j;
							zbiteATwoje[pionki[u].Wiersz][pionki[u].Kolumna].Zapelnienie = true;
							zbiteATwoje[pionki[u].Wiersz][pionki[u].Kolumna].Jaki_pionek = id_zbitego;
							pionki[u].Gdzie = false;
					bool = false;
		}}}bool = true;}
				else if(pionki[u].Czygra == true){
					plansza[pionki[u].Wiersz][pionki[u].Kolumna].Zapelnienie = true;
					plansza[pionki[u].Wiersz][pionki[u].Kolumna].Przechowywanie = 0;}
	}}
	
	id_zbitego = undefined;
	}

	function wspolrzedne(){	// wyznacza tradycyjne współrzędne dla pól
	
		if ((mouseX < (window.innerWidth / 4) && CZYJ_RUCH == 1) || (mouseX > (window.innerWidth / 4)  + rozmiar * 10 && CZYJ_RUCH == 0)){	
		
			for (var j = 0; j < 4; j++){
				if (mouseX < window.innerWidth / 4){ var pozycjaX = (window.innerWidth / 4) - rozmiar * 4 + rozmiar * j;}
				else if  (mouseX > (window.innerWidth / 4)  + rozmiar * 10){ var pozycjaX = (window.innerWidth / 4) + rozmiar * (10 + j);}

					if (mouseX  > pozycjaX && mouseX < pozycjaX + rozmiar){
							wspolrzednaX = j;
					}}
					
			if (mouseY >= 10 && mouseY <= 10 + rozmiar * 9){
			for (j = 0; j < 9; j++){
				var pozycjaY = 10 + rozmiar * j;
				if (mouseY > pozycjaY && mouseY < pozycjaY + rozmiar){
					wspolrzednaY = j;
				}}}
				else {wspolrzednaX = undefined; wspolrzednaY = undefined;}
				}
			
			else if (mouseX >= window.innerWidth / 4 && mouseX <= window.innerWidth / 4 + rozmiar * 9){

				for (var j = 0; j < 9; j++){
					var pozycjaX = window.innerWidth / 4 + rozmiar * j
					if (mouseX  > pozycjaX && mouseX < pozycjaX + rozmiar){
							wspolrzednaX = j;
					}}
					
			if (mouseY >= 10 && mouseY <= 10 + rozmiar * 9){
				for (j = 0; j < 9; j++){
					var pozycjaY = 10 + rozmiar * j;
					if (mouseY > pozycjaY && mouseY < pozycjaY + rozmiar){
						wspolrzednaY = j;
				}}}
				else {wspolrzednaX = undefined; wspolrzednaY = undefined;}
				}
			
			else {wspolrzednaX = undefined; wspolrzednaY = undefined;}
	}

		function sprawdzenie(){
			for (var i = 0; i < 9; i++){
				for (var j = 0; j < 4; j++){
			document.write(i + " " + j + " " + zbiteATwoje[i][j].czy_zapelniony + ", " + zbiteATwoje[i][j].Jaki_pionek + " ::: " + zbiteAWroga[i][j].czy_zapelniony + ", " + zbiteATwoje[i][j].Jaki_pionek + "<br />");}}	
				
				for (var i = 0; i < 9; i++){
							for (var j = 0; j < 9; j++){
				document.write(i + " " + j + " " + tablicaRuchow[i][j] + " __ " + plansza[i][j].Zapelnienie + "<br />");}}
				
							for (var a = 0; a < 20; a++){
				document.write(pionki[a].Czygra + ", " + pionki[a].Wiersz + ", " + pionki[a].Kolumna + ", " + pionki[a].Czerwony + " || " + pionki[a+20].Czygra + ", " + pionki[a+20].Wiersz + ", " + pionki[a+20].Kolumna +  ", " + pionki[a+20].Czerwony + "<br />");
			}
		}
		
		