/////////////////////////////////// KLASY PODSTAWOWE ////////////////////////////

// KLASA CMENTARZ
// Klasa cmentarz jest rodzicem klasy pole (na planszy)

class cmentarz{
	constructor(pozycjaX, pozycjaY, czy_zapelniony, polozenieX, polozenieY, jaki_pionek){
	this.pozycjaX = pozycjaX;	// pozycja w pixelach
    this.pozycjaY = pozycjaY;
	this.czy_zapelniony = czy_zapelniony;
	this.jaki_pionek = jaki_pionek;
}
	
	get PozycjaX(){
		return this.pozycjaX;
	}

	set PozycjaX(wartosc){
		this.pozycjaX = wartosc;		
	}
	
	get PozycjaY(){
		return this.pozycjaY;
	}

	set PozycjaY(wartosc){
		this.pozycjaY = wartosc;	
	}
	get Zapelnienie(){
		return this.czy_zapelniony;
	}

	set Zapelnienie(wartosc){
		this.czy_zapelniony = wartosc;		
}

get Jaki_pionek(){
		return this.jaki_pionek
	}

set Jaki_pionek(wartosc){
		this.jaki_pionek = wartosc;		
	}
}

// KLASA PIONEK
// czyj: 0 - twoj, 1 - wroga
//rysunki pionków:
// 0 - basic	1 - lanca	2 - koń 	3 - s generał 	4 - z generał 	5 - goniec 	6 - wieża 	7 - krol

class pionek{
  constructor(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek) {
	this.czyj = czyj;	// 0 - twój, 1 - wroga
	this.czy_w_grze = czy_w_grze;
	this.gdzie_jest = gdzie_jest;	// true = pole, false = cmentarz
	this.wiersz = wiersz;
	this.kolumna = kolumna;	
	this.rysunek = rysunek;
}

	get Czyj(){
		return this.czyj;
	}

	set Czyj(wartosc){
		this.czyj = wartosc;
	}
	
	get Czygra(){
		return this.czy_w_grze;
	}

	set Czygra(wartosc){
		this.czy_w_grze = wartosc;	
	}
	
	get Gdzie(){
		return this.gdzie_jest;
	}

	set Gdzie(wartosc){
		this.gdzie_jest = wartosc;	
	}
	
	get Wiersz(){
		return this.wiersz;
	}

	set Wiersz(wartosc){
		this.wiersz = wartosc;	
	}
	
	get Kolumna(){
		return this.kolumna;
	}

	set Kolumna(wartosc){
		this.kolumna = wartosc;
	}
	
	get Rysunek(){
		return this.rysunek;
	}

	set Rysunek(wartosc){
		this.rysunek = wartosc;	
	}
	
	pionek_z_cmentarza(){
		for (var i = 0; i < 9; i++){
				for (var j = 0; j < 9; j++){
					if (plansza[i][j].Zapelnienie == false){tablicaRuchow[i][j] = true;}
					else{tablicaRuchow[i][j] = false;}
		}}
		
	}
}

/////////////// KLASY DZIEDZICZĄCE /////////////////////

class pole extends cmentarz{
  constructor(rodzaj, pozycjaX, pozycjaY, czy_zapelniony, jaki_pionek, kolor, co_przechowuje) {
    super(rodzaj, pozycjaX, pozycjaY,czy_zapelniony, jaki_pionek);
	this.kolor = kolor;
	this.co_przechowuje;	// czyj pionek przechowuje 0 - twój, 1 - wroga
}

	get Kolor(){
		return this.kolor;
	}

	set Kolor(wartosc){
		this.kolor = wartosc;
	}
	
	get Przechowywanie(){
		return this.co_przechowuje;
	}

	set Przechowywanie(wartosc){
		this.co_przechowuje = wartosc;
}}

//////////////////////////////////////////////////////////////

class promowany extends pionek{	// klasa ta dziedziczy po klasie pionek - niektóre pionki dziedziczą po niej, a niektóre (te które nie mogą być promowane) dziedziczą po klasie "pionek"
	constructor(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek)
	{super(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek);}
	
// jedyną różnicą pomiędzy tym a "pionkiem" jest poniższa funkcja

	ruchy_czerwone(czyje){	// definuje jak czerwony może się ruszać - nie dotyczy czerwonego gońca i wieży

		if (czyje == 0){	// twoje
			for (var i = 0; i < 9; i++){
				for (var j = 0; j < 9; j++){
			
			if (((i == super.Wiersz && j == super.Kolumna - 1)
			|| (i == super.Wiersz - 1 && j == super.Kolumna - 1)
			|| (i == super.Wiersz - 1 && j == super.Kolumna)
			|| (i == super.Wiersz - 1 && j == super.Kolumna + 1)
			|| (i == super.Wiersz && j == super.Kolumna + 1)
			|| (i == super.Wiersz + 1 && j == super.Kolumna)) && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 1))
			{tablicaRuchow[i][j] = true;}
		
		else{tablicaRuchow[i][j] = false;}
		}}}
		
		else{	// wroga
			for (var i = 0; i < 9; i++){
				for (var j = 0; j < 9; j++){
			
			if (((i == super.Wiersz && j == super.Kolumna - 1)
			|| (i == super.Wiersz + 1 && j == super.Kolumna - 1)
			|| (i == super.Wiersz + 1 && j == super.Kolumna)
			|| (i == super.Wiersz + 1 && j == super.Kolumna + 1)
			|| (i == super.Wiersz && j == super.Kolumna + 1)
			|| (i == super.Wiersz - 1 && j == super.Kolumna)) && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 0))
			{tablicaRuchow[i][j] = true;}
		
		else{tablicaRuchow[i][j] = false;}
		}}}}}
			
//////////////////////////////////////////////////////////////

class pionek_czerwony extends promowany{
constructor(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie){
	super(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek);
			this.czy_czerwony = czy_czerwony;
			this.promowanie = promowanie;	// pozwala na zapytanie, czy pionek ma być promowany
}

	get Czerwony(){
		return this.czy_czerwony;
	}

	set Czerwony(wartosc){
		this.czy_czerwony = wartosc;
	}
	
	get Promowanie(){
		return this.promowanie;
	}

	set Promowanie(wartosc){
		this.promowanie = wartosc;
}}



//////////////////////////////////////////////////////////////

//Klasy poszczególnych pionków

// w mozliwych ruchach zawsze najpierw twoje, potem wroga są sprawdzane


/////////////////////////////////////////PODSTAWOWY PIONEK //////////////////////////////////////////////////

class pawn extends pionek_czerwony{
	constructor(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie){
		super(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie);
}
	
	mozliweRuchy(){
		
				if (super.Czygra == true){
				if (super.Czyj == 0 && this.Czerwony == false){
					for (var i = 0; i < 9; i++){
							for (var j = 0; j < 9; j++){
								if (i == super.Wiersz - 1 && j==super.Kolumna && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 1)){tablicaRuchow[i][j] = true;}
								else {tablicaRuchow[i][j] = false;}
				}}}
				
				else if (super.Czyj == 1 && this.Czerwony == false){
					for (var i = 0; i < 9; i++){
							for (var j = 0; j < 9; j++){
								if (i == super.Wiersz + 1 && j==super.Kolumna && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 0)){tablicaRuchow[i][j] = true;}
								else{tablicaRuchow[i][j] = false;}
				}}}
				
				else{super.ruchy_czerwone(super.Czyj);}
			}
				
			else{
				
				if (super.Czyj == 0){
					for (var i = 0; i < 9; i++){
							for (var j = 0; j < 9; j++){
								if (((j == pionki[j].Kolumna && i < pionki[j].Wiersz) && pionki[j].Czygra == true) || plansza[i][j].Zapelnienie == true){tablicaRuchow[i][j] = false;}
								else{tablicaRuchow[i][j] = true;}
						}
					}
				}
				else{
					for (var i = 0; i < 9; i++){
						for (var j = 0; j < 9; j++){
							if (((j == pionki[j+20].Kolumna && i > pionki[j+20].Wiersz) && pionki[j+20].Czygra == true) || plansza[i][j].Zapelnienie == true){tablicaRuchow[i][j] = false;}
								else{tablicaRuchow[i][j] = true;}
				}}}}}
	}

	
////////////////////////////////////////////////////////////// LANCA ///////////////////////////////////////////////////////////

	class lanca extends pionek_czerwony{
	constructor(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie){
	super(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie);
}
	
	mozliweRuchy(){
		
		var bool = true,
		przerwanie_jazdy;
		
		if (super.Czygra == true){
			
			if (super.Czyj == 0 && this.Czerwony == false){
				przerwanie_jazdy = 0;
				
				for (var b = 0; b < super.Wiersz; b++){
					 if (plansza[b][super.Kolumna].Zapelnienie == true){przerwanie_jazdy = b;}	
				}
			
				for (var i = 0; i < 9; i++){
					if(i >= przerwanie_jazdy){bool = true;}
					else{bool = false;}
					for (var j = 0; j < 9; j++){
						if(j == super.Kolumna && i < super.Wiersz && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 1) && bool == true){tablicaRuchow[i][j] = true;}
						else{tablicaRuchow[i][j] = false;
						if (j == super.Kolumna && plansza[i][j].Zapelnienie == true){bool = false;}
						}
			}}
		}
		
		else if(super.Czyj == 1 && this.Czerwony == false){
			przerwanie_jazdy = 8;
			
			for (var b = 8; b > super.Wiersz; b--){
					 if (plansza[b][super.Kolumna].Zapelnienie == true){przerwanie_jazdy = b;}	
				}
			
			for (var i = 0; i < 9; i++){
				if(i <= przerwanie_jazdy){bool = true;}
				else{bool = false;}
					for (var j = 0; j < 9; j++){
						if(j == super.Kolumna && i > super.Wiersz && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 0) && bool == true){tablicaRuchow[i][j] = true;}
						else{tablicaRuchow[i][j] = false;
						if (j == super.Kolumna && plansza[i][j].Zapelnienie == true){bool = false;}
						}
			}}
		}
		
		else{super.ruchy_czerwone(super.Czyj);}
		}
		
		else{super.pionek_z_cmentarza();}
		
		
	}}
	
	
//////////////////////////////////////////////////////////////// KOŃ ///////////////////////////////////////////////////////

	class kon extends pionek_czerwony{
	constructor(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie){
		super(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie);
}
	
	mozliweRuchy(){
		
		if (super.Czygra == true){
				if (super.Czyj == 0 && this.Czerwony == false){
					for (var i = 0; i < 9; i++){
							for (var j = 0; j < 9; j++){
								if ((j == super.Kolumna - 1 && i == super.Wiersz - 2 && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 1))
								|| (j == super.Kolumna + 1 && i == super.Wiersz - 2 && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 1)))
								{tablicaRuchow[i][j] = true;}
								else{tablicaRuchow[i][j] = false;}
				}}}
				
				else if (super.Czyj == 1 && this.Czerwony == false){
					for (var i = 0; i < 9; i++){
							for (var j = 0; j < 9; j++){
								if ((j == super.Kolumna - 1 && i == super.Wiersz + 2 && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 0))
								|| (j == super.Kolumna + 1 && i == super.Wiersz + 2 && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 0)))
								{tablicaRuchow[i][j] = true;}
								else{tablicaRuchow[i][j] = false;}
				}}}
				
				else{super.ruchy_czerwone(super.Czyj);}
		}
		
		else{super.pionek_z_cmentarza();}

			}
			
		}
	
///////////////////////////////////////////////////////////////////////////////// SREBRNY GENERAŁ ////////////////////////////////////////////////////////////////
	
	class generalS extends pionek_czerwony{
		constructor(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie){
			super(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie);
}
	
	mozliweRuchy(){

		if (super.Czygra == true){
			if (super.Czyj == 0 && this.Czerwony == false){
				for (var i = 0; i < 9; i++){
					for (var j = 0; j < 9; j++){
			
			if (((i == super.Wiersz + 1 && j == super.Kolumna - 1)
			|| (i == super.Wiersz - 1 && j == super.Kolumna - 1)
			|| (i == super.Wiersz - 1 && j == super.Kolumna)
			|| (i == super.Wiersz - 1 && j == super.Kolumna + 1)
			|| (i == super.Wiersz + 1 && j == super.Kolumna + 1)) && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 1))
			{tablicaRuchow[i][j] = true;}
		
		else{tablicaRuchow[i][j] = false;}
		}}}
		
		else if (super.Czyj == 1 && this.Czerwony == false){	// wroga
			for (var i = 0; i < 9; i++){
				for (var j = 0; j < 9; j++){
			
			if(((i == super.Wiersz - 1 && j == super.Kolumna - 1)
			|| (i == super.Wiersz + 1 && j == super.Kolumna - 1)
			|| (i == super.Wiersz + 1 && j == super.Kolumna)
			|| (i == super.Wiersz + 1 && j == super.Kolumna + 1)
			|| (i == super.Wiersz - 1 && j == super.Kolumna + 1)) && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie == 0))
			{tablicaRuchow[i][j] = true;}
			
			else{tablicaRuchow[i][j] = false;}
		}}}
				
			else{super.ruchy_czerwone(super.Czyj);}
		}
		
		else{super.pionek_z_cmentarza();}

			}
			
		}

///////////////////////////////////////////////////////////////////////// ZŁOTY GENERAŁ ////////////////////////////////////////////////////////////
		
	class generalZ extends promowany{	// ten pionek nie może być promowany, ale ma dokładnie te same ruchy co pionek czerwony
		constructor(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek) {
			super(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek);
}
	
	mozliweRuchy(){

		if (super.Czygra == true){super.ruchy_czerwone(super.Czyj);}
		else{super.pionek_z_cmentarza();}
		
	}}


///////////////////////////////////////////////////////////////////// GONIEC ////////////////////////////////////////////////////////////////
	
	class goniec extends pionek_czerwony{
		constructor(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie){
			super(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie);
		}
	
	ruchy_normalne(wiersz, kolumna, czyj){
		
		var lewagorna = new Array();	// index tablicy to nr wiersza, a wartość w nim to nr kolumny
		var prawagorna = new Array();
		var lewadolna = new Array();
		var prawadolna = new Array();
		
		function lewygorny(wiersz, kolumna){
			
			for (var i = 0; i < wiersz; i++){
				
				var nrKolumny = (kolumna - wiersz) + i;
				
				if (nrKolumny >= 0){
					lewagorna[i] = nrKolumny;				
				}}
		}
		
		function prawygorny(wiersz, kolumna){
			
			for (var i = 0; i < wiersz; i++){
				
				var nrKolumny = (kolumna + wiersz) - i;
				
				if (nrKolumny <= 8){
					prawagorna[i] = nrKolumny;				
				}}
		}
		
			function lewydolny(wiersz, kolumna){
			
			for (var i = kolumna + wiersz; i > wiersz; i--){
				
				var nrKolumny = (kolumna + wiersz) - i;
				
					lewadolna[i] = nrKolumny;				
			}
		}
		
		function prawydolny(wiersz, kolumna){
			
			for (var i = 8 - (kolumna - wiersz); i > wiersz; i--){
				
				var nrKolumny = (kolumna - wiersz) + i;
				
					prawadolna[i] = nrKolumny;			
				}
		}

		lewygorny(wiersz, kolumna);
		prawygorny(wiersz, kolumna);
		prawydolny(wiersz, kolumna);
		lewydolny(wiersz, kolumna);
		
		var przerwanie_lewagorna = 0,
		przerwanie_prawagorna = 0,
		przerwanie_lewadolna = 8,
		przerwanie_prawadolna = 8;

					for (var a = 1; a < wiersz; a++){
						for (var b = 0; b < kolumna; b++){
							if(b == lewagorna[a] && plansza[a][b].Zapelnienie == true){przerwanie_lewagorna = a;
							}
						}
					}
					for (var a = 1; a < wiersz; a++){
						for (var b = kolumna + 1; b < 9; b++){
							if(b == prawagorna[a] && plansza[a][b].Zapelnienie == true){przerwanie_prawagorna = a;
							}
						}
					}
					for (var a = 7; a > wiersz; a--){
						for (var b = 0; b < kolumna; b++){
							if(b == lewadolna[a] && plansza[a][b].Zapelnienie == true){przerwanie_lewadolna = a;}
						}
					}
					for (var a = 7; a > wiersz; a--){
						for (var b = kolumna + 1; b < 9; b++){
							if(b == prawadolna[a] && plansza[a][b].Zapelnienie == true){przerwanie_prawadolna = a;}
						}
					}
					
				for (var i = 0; i < 9; i++){
					for (var j = 0; j < 9; j++){
						if (((j == prawagorna[i] && przerwanie_prawagorna <= i) 
							|| (j == lewagorna[i] && przerwanie_lewagorna <= i)
							|| (j==prawadolna[i] && przerwanie_prawadolna >= i) 
							|| (j==lewadolna[i] && przerwanie_lewadolna >= i))
							&& (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie != czyj))
							{tablicaRuchow[i][j] = true;}
							
				else{tablicaRuchow[i][j] = false;}}}
	}
	
	ruchy_czerwone(wiersz, kolumna, czyj){		
		
		for (var i = 0; i < 9; i++){
				for (var j = 0; j < 9; j++){
			
			if (((i == wiersz && j == kolumna - 1)
			|| (i == wiersz + 1 && j == kolumna)
			|| (i == wiersz && j == kolumna + 1)
			|| (i == wiersz - 1 && j == kolumna)) && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie != czyj))
			{tablicaRuchow[i][j] = true;}

		}}}
	
	mozliweRuchy(){
		
		if (super.Czygra == true){
			
				this.ruchy_normalne(super.Wiersz, super.Kolumna, super.Czyj);	//funkcje w sumie są niepotrzebne ostatecznie ale nie chce mi się tego zmieniać kek
			
			if (this.Czerwony == true){
				
				this.ruchy_czerwone(super.Wiersz, super.Kolumna, super.Czyj);	
			}}	
			else{super.pionek_z_cmentarza();}
			}
	}

//////////////////////////////////////////////////////////////////////// WIEŻA //////////////////////////////////////////////////////////////
						
	class wieza extends pionek_czerwony{
		constructor(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie){
		super(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_czerwony, promowanie);
}

	mozliweRuchy(){
		
if (super.Czygra == true){
		var bool = true,
		przerwanie_jazdy = 0;
				
		for (var b = 0; b < super.Wiersz; b++){
					 if (plansza[b][super.Kolumna].Zapelnienie == true){przerwanie_jazdy = b;}	
				}
			
			for (var i = 0; i < 9; i++){
				if(i >= przerwanie_jazdy){bool = true;}
				else{bool = false;}
					for (var j = 0; j < 9; j++){
						if(j == super.Kolumna && i < super.Wiersz && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie != super.Czyj) && bool == true){tablicaRuchow[i][j] = true;}
						else{tablicaRuchow[i][j] = false;
						if (j == super.Kolumna && plansza[i][j].Zapelnienie == true){bool = false;}
						}
			}}
		
		bool = true;
		przerwanie_jazdy = 8;
		
		for (b = 8; b > super.Wiersz; b--){
					 if (plansza[b][super.Kolumna].Zapelnienie == true){przerwanie_jazdy = b;}	
				}
			
			for (i = 8; i > super.Wiersz; i--){
				if(i <= przerwanie_jazdy){bool = true;}
				else{bool = false;}
						if(i > super.Wiersz && (plansza[i][super.Kolumna].Zapelnienie == false || plansza[i][super.Kolumna].Przechowywanie != super.Czyj) && bool == true){tablicaRuchow[i][super.Kolumna] = true;}
						}
			
			przerwanie_jazdy = 0;
			
			for (b = 0; b < super.Kolumna; b++){
				if(plansza[super.Wiersz][b].Zapelnienie == true){przerwanie_jazdy = b;}
			}
			
			
				for (var j = 0; j < super.Kolumna; j++){
					if(j >= przerwanie_jazdy){bool = true;}
					else{bool = false;}
						if(j < super.Kolumna && (plansza[super.Wiersz][j].Zapelnienie == false || plansza[super.Wiersz][j].Przechowywanie != super.Czyj) && bool == true){tablicaRuchow[super.Wiersz][j] = true;}
						}

			przerwanie_jazdy = 8;
			
			for (b = 8; b > super.Kolumna; b--){
				if(plansza[super.Wiersz][b].Zapelnienie == true){przerwanie_jazdy = b;}
			}
			
					for (var j = 8; j > super.Kolumna; j--){
					if(j <= przerwanie_jazdy){bool = true;}
					else{bool = false;}
						if(j > super.Kolumna && (plansza[super.Wiersz][j].Zapelnienie == false || plansza[super.Wiersz][j].Przechowywanie != super.Czyj) && bool == true){tablicaRuchow[super.Wiersz][j] = true;}
						}
						
			if (this.Czerwony == true){
				
				for (var i = 0; i < 9; i++){
					for (var j = 0; j < 9; j++){
			
						if (((i == super.Wiersz + 1 && j == super.Kolumna - 1)
						|| (i == super.Wiersz - 1 && j == super.Kolumna - 1)
						|| (i == super.Wiersz - 1 && j == super.Kolumna + 1)
						|| (i == super.Wiersz + 1 && j == super.Kolumna + 1)) && (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie != super.Czyj))
						{tablicaRuchow[i][j] = true;}
			}}}
	}
else{super.pionek_z_cmentarza();}
	
	}}
	
	///////////////////////////////////////////////////////////////// KROL ///////////////////////////////////////////////////////////
	
	class krol extends pionek{
		constructor(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek, czy_zagrozony) {
			super(czyj, czy_w_grze, gdzie_jest, wiersz, kolumna, rysunek);
			this.czy_zagrozony = czy_zagrozony;
}

	get Zagrozenie(){
		return this.czy_zagrozony;
	}

	set Zagrozenie(wartosc){
		this.czy_zagrozony = wartosc;
	}
	
	szach(){
		
		
	}
	
	mozliweRuchy(){
		
			for (var i = 0; i < 9; i++){
				for (var j = 0; j < 9; j++){
			
			if ((i == super.Wiersz + 1 || i == super.Wiersz || i == super.Wiersz - 1)
			&& (j == super.Kolumna + 1 || j == super.Kolumna || j == super.Kolumna - 1)
			&& (plansza[i][j].Zapelnienie == false || plansza[i][j].Przechowywanie != super.Czyj))
			{tablicaRuchow[i][j] = true;}
		
		else{tablicaRuchow[i][j] = false;}
		}}}
	}
						
						
						
						
						
						
						
						
						

		
		
		
