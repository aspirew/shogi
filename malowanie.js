	function MalowanieDynamiczne(pominiety){
	
	for (i = 0; i < 40; i++){	// dwuwymiarowa plansza -> 1 element to przechowywany w tablicy pionków Wiersz, a drugi to Kolumna
	
	if(i != pominiety){
	
	if (pionki[i].Czygra == true){
		malowanie_pionka(plansza[pionki[i].Wiersz][pionki[i].Kolumna].PozycjaX, plansza[pionki[i].Wiersz][pionki[i].Kolumna].PozycjaY, pionki[i].Czyj, pionki[i].Czerwony, pionki[i].Rysunek, 0, 0);
	}
	else if(pionki[i].Czygra == false && pionki[i].Czyj == 0){
		malowanie_pionka(zbiteAWroga[pionki[i].Wiersz][pionki[i].Kolumna].PozycjaX, zbiteAWroga[pionki[i].Wiersz][pionki[i].Kolumna].PozycjaY, pionki[i].Czyj, pionki[i].Czerwony, pionki[i].Rysunek, 0 , 0);
	}
	else if (pionki[i].Czygra == false && pionki[i].Czyj == 1){
		malowanie_pionka(zbiteATwoje[pionki[i].Wiersz][pionki[i].Kolumna].PozycjaX, zbiteATwoje[pionki[i].Wiersz][pionki[i].Kolumna].PozycjaY, pionki[i].Czyj, pionki[i].Czerwony, pionki[i].Rysunek, 0, 0);
		
	}}}}
	
	function PlanszyMalowanie(){
		
		for (var i = 0; i < 9; i++){
			for (var j = 0; j < 9; j++){
				if (tablicaRuchow[i][j] == true){plansza[i][j].Kolor = "#ffbf80";}
				else{plansza[i][j].Kolor = "beige";}
				c.fillStyle = plansza[i][j].Kolor;
				c.fillRect(window.innerWidth / 4 +  j * rozmiar , 10 + i * rozmiar, rozmiar, rozmiar);
				c.strokeRect(window.innerWidth / 4 +  j * rozmiar , 10 + i * rozmiar, rozmiar, rozmiar);
	}}}
	
	function CmentarzaMalowanie(pozY){
		c.fillStyle = "brown";
		c.fillRect(pozY, 10, rozmiar * 4, rozmiar * 9);
	}

	function malowanie_pionka(pozycjax, positiony, kierunek, promowanie, rysunek, interval, przesuniecie){
		
		pozycjay = positiony + interval;
		
		if (kierunek == 0){	//skierowany w górę
		var pozy = pozycjay + (75 * rozmiar / 100) - 2*interval;
		
		c.beginPath();
		c.moveTo(pozycjax + rozmiar / 100, pozy + rozmiar / 100);
		c.lineTo(pozycjax + 56 * rozmiar / 100, pozy + rozmiar / 100);
		c.lineTo(pozycjax + 56 * rozmiar / 100, pozy - 60 * rozmiar / 100);
		c.lineTo(pozycjax+ 28 * rozmiar / 100, pozy - 75 * rozmiar / 100);
		c.lineTo(pozycjax + rozmiar / 100, pozy - 60 * rozmiar / 100);
		c.lineTo(pozycjax + rozmiar / 100, pozy + rozmiar / 100);
		c.fillStyle = "#e4bf9a";
		c.fill();
		c.fillStyle = "black";
		if (promowanie == true){ c.fillStyle = "red";}
		c.fillText(symbol(rysunek), pozycjax + 13  * rozmiar / 100, pozy - 20 * rozmiar / 100);
		c.stroke();}
		
		if (kierunek == 1){ // skierowany w dół
			
		c.beginPath();
		c.moveTo(pozycjax + rozmiar / 100, pozycjay + rozmiar / 100);
		c.lineTo(pozycjax + 56 * rozmiar / 100, pozycjay + rozmiar / 100);
		c.lineTo(pozycjax + 56* rozmiar / 100, pozycjay + 60 * rozmiar / 100);
		c.lineTo(pozycjax+ 28 * rozmiar / 100, pozycjay + 75 * rozmiar / 100);
		c.lineTo(pozycjax + rozmiar / 100, pozycjay + 60 * rozmiar / 100);
		c.lineTo(pozycjax + rozmiar / 100, pozycjay + rozmiar / 100);
		c.fillStyle = "#e4bf9a";
		c.fill();
		c.fillStyle = "black";
		if (promowanie == true){ c.fillStyle = "red";}
		c.fillText(symbol(rysunek), pozycjax + 13 * rozmiar / 100, pozycjay + 45 * rozmiar / 100);
		c.stroke();}}
		
function symbol(numer){
		
		switch (numer) {
    case 0:
        text = "♙";
        break;
   case 1:
        text = "Ѧ"
        break;
    case 2:
        text = "♘";
        break;
     case 3:
        text = "Ẋ";
        break;
	case 4:
        text = "ᴪ";
        break;
     case 5:
        text = "♗";
        break;
	case 6:
		text = "♖";
		break;
	case 7:
		text = "♔";
		break;
}

	return text;
		
	}
	
	