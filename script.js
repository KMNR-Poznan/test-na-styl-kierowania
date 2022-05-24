var tab = Array.from(Array(8), () => new Array(8));
var pytanie = 0;
var wiersz = 0;
var kolumna = 0;
var pytanie = 0;
var pytania_A = ["Kiedy Twój szef wydaje niepopularną decyzję, z którą się zgadzasz, przekazujesz ją pod nazwiskiem szefa, a nie własnym.", "Jeśli dostaniesz naganę od szefa, przerzucasz własną winę na podwładnych.", "Pozwalasz dyskusji dowolnie zbaczać z tematu.", "Zwykle uważasz, że Twoje własne odczucia i postawy są tak samo ważne jak praca.", "Kiedy jakość, czy ilość pracy jednostki kierowanej nie jest zadawalająca, wyjaśniasz podwładnym, że to Twój szef nie jest zadowolony z ich pracy i że muszą ją poprawić.", "Oznajmiając swoim podwładnym niepopularną decyzję, wyjaśniasz, że jest to decyzja Twojego szefa.", "Zlecasz trudne zadania niedoświadczonym pracownikom, ale kiedy widzisz, że nie dają sobie rady, zwalniasz ich od odpowiedzialności.", "Okazujesz zainteresowanie prywatnym życiem podwładnych, ponieważ czujesz, że oczekują tego.", "Uważasz, że stosowanie sankcji dyscyplinarnych w stosunku do podwładnych nie przyczyni się w przyszłości do poprawnej jakości czy ilości pracy.", "Kiedy niektórzy z Twoich podwładnych są niezadowoleni, starasz się iść im na rękę.", "Czujesz, że twoi podwładni byliby zdolni do ciężkiej pracy ze względu na sympatię do ciebie.", "Pozwalasz ludziom samodzielnie zajmować się ich pracą, nawet jeśli wiesz, że mogą popełnić wiele błędów.", "Jeśli jeden z twoich podwładnych nie może się zaaklimatyzować w grupie, robisz wszystko, aby go grupa przyjęła.", "Uważasz, że jednym z celów stosowania sankcji dyscyplinarnych jest dawanie przykładu innym pracownikom.", "Nie aprobujesz niepotrzebnych rozmów między podwładnymi w czasie pracy.", "Uważasz, że organizacje takie jak związki zawodowe często podważają autorytet kierownictwa.", "Jesteś zawsze zorientowany we wszystkich spóźnieniach i nieobecnościach.", "Istotne jest dla ciebie zyskanie poparcia dla swoich pomysłów i inicjatyw.", "Wymagasz przestrzegania formalnej dyscypliny pracy.", "Zwykle sam podejmujesz decyzje, a następnie informujesz o nich podwładnych.", "Popierasz indywidualne stosowanie bodźców płacowych.", "Postawiony przed trudnym problemem usiłujesz znaleźć rozwiązanie, które przynajmniej częściowo będzie zaakceptowane przez zainteresowanych.", "Możesz zlecić pilną, dobrze płatną pracę, nie zważając na zachowanie warunków BHP.", "Uważasz, że skargi są nieuniknione i starasz się je sam załatwiać.", "Starasz się o wykonanie pracy bez zbędnego zrażania sobie ludzi.", "Jesteś dumny z faktu, że nigdy nie obarczasz ludzi zadaniami, których sam byś nie potrafił wykonać.", "Zawsze przydzielasz najtrudniejsze zadania najbardziej doświadczonym pracownikom.", "Wierzysz, że konflikty powstające wśród pracowników rozwiążą się bez twojej interwencji.", "Nie interesujesz się tym, co twoi pracownicy robią poza godzinami pracy.", "Przekazujesz swoim przełożonym tylko te informacje, o które proszą.", "Wahasz się przed podjęciem decyzji, jeśli czujesz, że nie będzie ona dobrze przyjęta przez podwładnych.", "Wygłaszasz publicznie swoje poglądy tylko wtedy, kiedy czujesz, że inni się z tobą zgodzą.", "Zajmujesz się swoją pracą i uważasz, że wprowadzanie innowacji nie należy do twoich obowiązków.", "Słuchasz cierpliwie skarg i zażaleń, ale często niewiele robisz, by naprawić krzywdę.", "W dyskusji prezentujesz fakty tak, jak je widzisz, pozostawiając innym wyciąganie własnych wniosków.", "Kiedy należy wykonać jakąś dodatkową pracę, zanim ją komuś przydzielisz, prosisz najpierw ochotników.", "Zabiegasz zarówno o utrzymanie dobrego nastroju wśród swoich podwładnych, jak i o dobre wykonanie przez nich pracy.", "Jeśliby zaszła potrzeba, większość twoich podwładnych mogłaby obejść się bez twojej pomocy w wykonywaniu swoich obowiązków.", "Jesteś pewny, że twoi podwładni wykonują pracę należycie bez żadnych nacisków z twojej strony.", "Troszczysz się o podnoszenie poziomu wiedzy ogólnej i zawodowej podwładnych, nawet jeśli to nie jest potrzebne w obecnej sytuacji.", "Uważasz, że częste narady z pracownikami przyczyniają się do ich rozwoju.", "Uważasz, że wszyscy podwładni wykonujący taką samą pracę powinni otrzymywać jednakowe wynagrodzenie, niezależnie od stażu pracy i wykształcenia." , "Uważasz, że cele załogi i kierownictwa są rozbieżne, ale starasz się nie ujawniać swojego punktu widzenia.", "Decyzje podejmujesz samodzielnie, ale bierzesz również pod uwagę odpowiadające ci propozycje swoich podwładnych.", "Kiedy wydajesz polecenia, ustalasz limit czasu na ich wykonanie.", "Uważasz, że szkolenie przez doświadczenia praktyczne jest bardziej użyteczne niż szkolenie teoretyczne.", "Przywiązujesz dużą wagę do formalnej dyscypliny pracy.", "Decyzje podejmujesz samodzielnie, a następnie starasz się je „sprzedać” podwładnym.", "Nie zawahałbyś się zatrudnić niepełnosprawnego pracownika, gdybyś wiedział, że może się on nauczyć pracy.", "Kiedy to możliwe, tworzysz zespoły robocze z ludźmi, którzy już są dobrymi przyjaciółmi.", "Zmuszasz podwładnych do ciężkiej harówki, ale starasz się im zapewnić zwiększoną zapłatę za poprawę wyników całego zespołu.", "W rozmowie z pracownikami starasz się wytworzyć swobodny nastrój.", "Za wyłączne kryterium awansów uważasz możliwości awansowanego.", "Uważasz, że związki zawodowe i kierownictwo pracują dla osiągnięcia podobnych celów.", "Kiedy podwładny nie umie rozwiązać problemu, pomagasz mu w tym."];
var pytania_B = ["Zwykle sam podejmujesz decyzje, a następnie informujesz o nich swoich podwładnych.", "Zawsze przydzielasz najtrudniejsze zadania najbardziej doświadczonym pracownikom.", "Zachęcasz podwładnych do zgłaszania propozycji, lecz nie skłaniasz ich do działania.", "Zachęcasz podwładnych do udziału w podejmowaniu decyzji i zawsze obstajesz przy decyzji większości.", "Pozwalasz podwładnym uczestniczyć w podejmowaniu decyzji, ale prawo do podjęcia ostatecznej decyzji rezerwujesz dla siebie.", "Pozwalasz podwładnym uczestniczyć w podejmowaniu decyzji, ale prawo do podjęcia ostatecznej decyzji rezerwujesz dla siebie.", "Kiedy jakość, czy ilość pracy jednostki kierowanej nie jest zadawalająca, wyjaśniasz  podwładnym, że to Twój szef nie jest zadowolony z ich pracy i że muszą ją poprawić.", "Uważasz, że podwładni niekoniecznie muszą wiedzieć, dlaczego coś robią, jeśli to robią dobrze.", "Kiedy staniesz przed trudnym problemem, usiłujesz znaleźć rozwiązanie, które będzie przynajmniej częściowo zaakceptowane przez podwładnych.", "Zajmujesz się swoimi zadaniami i uważasz, że wprowadzanie innowacji nie należy do Twoich obowiązków.", "Troszczysz się o podnoszenie poziomu wiedzy ogólnej i zawodowej podwładnych, nawet jeśli to nie jest im potrzebne w obecnej pracy.", "Sam podejmujesz decyzję, ale bierzesz również pod uwagę rozsądne propozycje swoich podwładnych dotyczące usprawnienia decyzji.", "Kiedy podwładny nie jest w stanie rozwiązać problemu, pomagasz mu w tym.", "Zwykle uważasz, że twoje własne odczucia i postawy są tak samo ważne jak praca.", "Dbasz o poprawę warunków socjalno-bytowych załogi.", "Uważasz, że skargi są nieuniknione i starasz się je sam załatwiać.", "Wygłaszasz publicznie swoje opinie tylko wtedy, kiedy jesteś pewny, że inni się z tobą zgodzą.", "Uważasz, że narady z pracownikami są często pomocne w ich rozwoju.", "Uważasz, że podwładni niekoniecznie muszą wiedzieć dlaczego coś robią, jeśli to robią dobrze.", "Uważasz, że organizacje takie jak związki zawodowe oraz kierownictwo pracują dla osiągnięcia podobnych celów.", "Pozwalasz dyskusji odbiegać od tematu.", "Kiedy niektórzy z twoich podwładnych są niezadowoleni, starasz się iść im na rękę.", "Istotne jest dla Ciebie zyskanie poparcia dla swoich pomysłów i inicjatyw.", "Słuchasz cierpliwie skarg i zażaleń, ale na ogół niewiele robisz, aby naprawić krzywdę.", "Jesteś pewny, że twoi podwładni wykonują pracę należycie bez żadnych nacisków z twojej strony.", "Uważasz, że wiedza uzyskana przez doświadczenia praktyczne jest bardziej użyteczna niż wiedza teoretyczna.", "Uważasz, że awanse powinny odpowiadać możliwościom awansowanego.", "Jeżeli otrzymasz naganę od przełożonych stawiasz zarzuty podwładnym.", "Uważasz, że karanie podwładnych nie przyczyni się do poprawy jakości i efektywności ich pracy.", "Czasem przeciwstawiasz się żądaniom związków zawodowych dla utrzymania swojego autorytetu.", "Zabiegasz o wykonanie pracy bez zrażania sobie ludzi.", "Jeśliby zaszła potrzeba, większość twoich podwładnych mogłaby obejść się bez twojej pomocy w wykonywaniu swoich obowiązków.", "Kiedy wydajesz polecenia, ustalasz terminy ich wykonania. ", "Nie zawahałbyś się zatrudnić niepełnosprawnego pracownika, gdybyś wiedział, że może się on nauczyć pracy.", "Kiedy szef wydaje niepopularną decyzję, z którą się zgadzasz, przekazujesz ją pod nazwiskiem szefa, a nie własnym.", "Okazujesz zainteresowanie prywatnym życiem swoich podwładnych, ponieważ czujesz, że tego od ciebie oczekują.", "Jesteś zawsze dobrze zorientowany we wszystkich spóźnieniach i nieobecnościach podwładnych.", "Uważasz, że jeżeli pracownicy chcą wykonać pilną, dobrze płatną pracę, nie zważając na zachowanie warunków BHP, to można im na to pozwolić.", "Przekazujesz naczelnemu kierownictwu tylko te informacje, o które prosi.", "Obserwujesz uważnie pracowników, którzy niezadowalająco wykonują swoją pracę.", "Zmuszasz podwładnych do ciężkiej harówki, ale starasz się zapewnić im należytą zapłatę.", "Nie zwracasz uwagi na naruszanie przepisów, jeśli jesteś pewny, że nikt się o tym nie dowie.", "Czujesz, że twoi pracownicy byliby zdolni do ciężkiej pracy ze względu na sympatię do ciebie.", "Nie aprobujesz niepotrzebnych rozmów między podwładnymi w czasie pracy.", "Jesteś dumny z faktu, że nie prosiłbyś nikogo o wykonanie pracy, której byś sam nie potrafił zrobić.", "Nie obchodzi cię co twoi pracownicy robią poza godzinami pracy.", "Czujesz, że twoi pracownicy byliby zdolni do ciężkiej pracy ze względu na sympatię do ciebie.", "Kiedy to możliwe, tworzysz zespoły robocze z ludźmi, którzy już są dobrymi przyjaciółmi.", "Nie zwracasz uwagi na naruszanie przepisów, jeśli jesteś pewny, że nikt się o tym nie dowie.", "Możesz dawać trudne zadania niedoświadczonym pracownikom, ale kiedy widzisz, że nie dają sobie rady, zwalniasz ich od odpowiedzialności.", "Uważasz, że jednym z celów stosowania sankcji dyscyplinarnych jest dawanie przykładu innym pracownikom.", "Popierasz stosowanie indywidualnych bodźców płacowych.", "Uważasz, że konflikty wśród pracowników najlepiej rozwiążą się bez twojej interwencji.", "W dyskusji prezentujesz fakty tak, jak je widzisz, pozostawiając innym wyciąganie własnych wniosków.", "Uważasz, że wszyscy pracownicy wykonujący taką samą pracę powinni otrzymywać jednakowe wynagrodzenie."];

function licz_pkt(wynik) {
    let zapis_wektorowy = 0;
    if (wynik <= 29) {
        zapis_wektorowy = 0;
    } 
    else {
        if (wynik <= 31) {
            zapis_wektorowy = 0.6;
        }
        else 
        {
            if (wynik == 32) {
                zapis_wektorowy = 1.2;
            }
            else {
                if (wynik == 33) {
                    zapis_wektorowy = 1.8;
                }
                else {
                    if (wynik == 34) {
                        zapis_wektorowy = 2.4;
                    }
                    else {
                        if (wynik == 35) {
                            zapis_wektorowy = 3.0;
                        }
                        else {
                            if (wynik <= 37) {
                                zapis_wektorowy = 3.6;
                            }
                            else {
                                if (wynik >= 38) {
                                    zapis_wektorowy = 4.0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return zapis_wektorowy;
}

function wykonaj(odpowiedz) {
    if (wiersz == kolumna) {
        tab[wiersz][kolumna] = '-';
        if (kolumna == 7) {
            kolumna = 0;
            wiersz++;
        }
        else kolumna++;
    }
    tab[wiersz][kolumna] = odpowiedz.value;
    document.getElementById("texta").innerHTML = pytania_A[pytanie];
    document.getElementById("textb").innerHTML = pytania_B[pytanie];
    pytanie++;
    document.getElementById("pkt").innerHTML = (pytanie + 1) + "/56";
    if (kolumna == 7) {
        kolumna = 0;
        wiersz++;
    }
    else {
        kolumna++;
        if (wiersz == kolumna) tab[wiersz][kolumna] = '-';
    }

    if (kolumna == 7 && wiersz == 7) {
        suma_a = new Array(8);
        suma_a.fill(0);
        suma_b = new Array(8);
        suma_b.fill(0);
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (tab[i][j] == 'A') suma_a[i]++;
                else if (tab[i][j] == 'B') suma_b[j]++;
            }
        }

        let ile2 = [2, 3, 2, 1, 4, 0, 1, -3];
        let tmp_suma_a_i_b2 = new Array(8);
        let wynik = new Array(8);
        for (let i = 0; i < 8; i++) {
            tmp_suma_a_i_b2[i] = suma_a[i] + suma_b[i];
        }
        for (let i = 0; i < 8; i++) {
            wynik[i] = tmp_suma_a_i_b2[i] + ile2[i];
        }
        let z = wynik[2] + wynik[3] + wynik[6] + wynik[7];
        let l = wynik[1] + wynik[3] + wynik[5] + wynik[7];
        let e = wynik[4] + wynik[5] + wynik[6] + wynik[7];

        let z2 = licz_pkt(z);
        let l2 = licz_pkt(l);
        let e2 = licz_pkt(e);

        let box = document.getElementById("box");
        box.innerHTML = "";
        let wyniki = document.createElement("div");
        wyniki.id = "wyniki";
        box.appendChild(wyniki);
        let wynik_zle = document.createElement("div");
        wynik_zle.id = "zle"
        wyniki.appendChild(wynik_zle);
        let wypiszz = document.createElement("p");
        wypiszz.innerHTML = "Z: " + z2;
        wynik_zle.appendChild(wypiszz);
        let orientacjaz = document.createElement("span");
        orientacjaz.innerHTML = "<br />(Orientacja na zadanie)";
        wypiszz.appendChild(orientacjaz);

        let wypiszl = document.createElement("p");
        wypiszl.innerHTML = "L: " + l2;
        wynik_zle.appendChild(wypiszl);
        let orientacjal = document.createElement("span");
        orientacjal.innerHTML = "<br />(Orientacja na ludzi)";
        wypiszl.appendChild(orientacjal);

        let wypisze = document.createElement("p");
        wypisze.innerHTML = "E: " + e2;
        wynik_zle.appendChild(wypisze);
        let orientacjae = document.createElement("span");
        orientacjae.innerHTML = "<br />(Orientacja na efektywność)";
        wypisze.appendChild(orientacjae);
        
        let wynik_styl = document.createElement("div");
        wynik_styl.id = "box_styl";
        box.appendChild(wynik_styl)
        let styl_drzewo = document.createElement("img");
        styl_drzewo.id = "drzewo_styl";
        let styl_kierownia;
        if (z2 > 2) {
            if (l2 > 2) {
                if (e2 > 2) {
                    styl_kierownia = "Administrator";
                    styl_drzewo.src = "img/administrator.png";
                }
                else {
                    styl_kierownia = "Kompromista";
                    styl_drzewo.src = "img/kompromista.png";
                }
            }
            else {
                if (e2 > 2) {
                    styl_kierownia = "życzliwy autokrata";
                    styl_drzewo.src = "img/zyczliwy.png";
                }
                else {
                    styl_kierownia = "autokrata";
                    styl_drzewo.src = "img/autokrata.png";
                }
            }
        }
        else {
            if (l2 > 2) {
                if (e2 > 2) {
                    styl_kierownia = "Rozwojowiec";
                    styl_drzewo.src = "img/rozwojowiec.png";
                }
                else {
                    styl_kierownia = "misjonarz";
                    styl_drzewo.src = "img/misjonarz.png";
                }
            }
            else {
                if (e2 > 2) {
                    styl_kierownia = "biurokrata";
                    styl_drzewo.src = "img/biurokrata.png";
                }
                else {
                    styl_kierownia = "dezerter";
                    styl_drzewo.src = "img/dezerter.png";
                }
            }
        }


        let wypisz = document.createElement("p");
        wypisz.id = "styl_k"
        wypisz.innerHTML = "Styl kierowania:  " + styl_kierownia;
        wyniki.appendChild(wypisz);
        wynik_styl.appendChild(styl_drzewo);
    }
}