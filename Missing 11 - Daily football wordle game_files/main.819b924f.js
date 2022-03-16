/*! For license information please see main.819b924f.js.LICENSE.txt */
!(function () {
    "use strict";
    var e = {
            545: function (e, n, t) {
                var r = t(313),
                    a = t(168);
                function i(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                function l(e, n) {
                    if (e) {
                        if ("string" === typeof e) return i(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(e, n) : void 0;
                    }
                }
                function o(e, n) {
                    return (
                        (function (e) {
                            if (Array.isArray(e)) return e;
                        })(e) ||
                        (function (e, n) {
                            var t = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                            if (null != t) {
                                var r,
                                    a,
                                    i = [],
                                    l = !0,
                                    o = !1;
                                try {
                                    for (t = t.call(e); !(l = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                                } catch (u) {
                                    (o = !0), (a = u);
                                } finally {
                                    try {
                                        l || null == t.return || t.return();
                                    } finally {
                                        if (o) throw a;
                                    }
                                }
                                return i;
                            }
                        })(e, n) ||
                        l(e, n) ||
                        (function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        })()
                    );
                }
                var u = new Date(2022, 1, 2, 0, 0, 0, 0);
                var s = Number(new Date().toISOString().replace(/-/g, "").slice(0, 8)),
                    c = function () {
                        return s
                            ? ((e = s),
                              function () {
                                  var n = (e += 1831565813);
                                  return (n = Math.imul(n ^ (n >>> 15), 1 | n)), (((n ^= n + Math.imul(n ^ (n >>> 7), 61 | n)) ^ (n >>> 14)) >>> 0) / 4294967296;
                              })
                            : function () {
                                  return Math.random();
                              };
                        var e;
                    };
                c();
                function d(e) {
                    return (
                        (function (e) {
                            if (Array.isArray(e)) return i(e);
                        })(e) ||
                        (function (e) {
                            if (("undefined" !== typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                        })(e) ||
                        l(e) ||
                        (function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        })()
                    );
                }
                function f(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
                }
                function p(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n &&
                            (r = r.filter(function (n) {
                                return Object.getOwnPropertyDescriptor(e, n).enumerable;
                            })),
                            t.push.apply(t, r);
                    }
                    return t;
                }
                function m(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {};
                        n % 2
                            ? p(Object(t), !0).forEach(function (n) {
                                  f(e, n, t[n]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                            : p(Object(t)).forEach(function (n) {
                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                              });
                    }
                    return e;
                }
                var h,
                    g = JSON.parse(
                        '[{"title":"Real Madrid\'s 3-1 win vs Liverpool","team":"Real Madrid","homeOrAway":"home","opponent":"Liverpool","competition":"Champions League","location":"NSC Olimpiysky","date":"26/5/2018","players":[["","","",{"id":1,"name":"Navas"},"","",""],[{"id":2,"name":"Carvajal"},"",{"id":3,"name":"Varane"},"",{"id":4,"name":"Ramos"},"",{"id":5,"name":"Marcelo"}],["","","","","","",""],["",{"id":6,"name":"Modric"},"",{"id":7,"name":"Casemiro"},"",{"id":8,"name":"Kroos"},""],["","","","","","",""],["",{"id":9,"name":"Benzema"},"",{"id":10,"name":"Isco"},"",{"id":11,"name":"Ronaldo"},""]]},{"title":"England\'s 1-2 loss to Iceland","team":"England","homeOrAway":"home","opponent":"Iceland","competition":"Euro 2016","location":"Allianz Riviera","date":"27/6/2016","players":[["","","",{"id":1,"name":"Hart"},"","",""],[{"id":2,"name":"Walker"},"",{"id":3,"name":"Cahill"},"",{"id":4,"name":"Smalling"},"",{"id":5,"name":"Rose"}],["","","","","","",""],["",{"id":6,"name":"Alli"},"",{"id":7,"name":"Dier"},"",{"id":8,"name":"Rooney"},""],["","","","","","",""],["",{"id":9,"name":"Sterling"},"",{"id":10,"name":"Kane"},"",{"id":11,"name":"Sturridge"},""]]},{"title":"Man Utd\'s 2-1 win against Middlesbrough","team":"Man Utd","homeOrAway":"home","opponent":"Middlesbrough","competition":"Premier League","location":"Old Trafford","date":"31/12/2016","players":[["","","",{"id":1,"name":"De Gea"},"","",""],[{"id":2,"name":"Valencia"},"",{"id":3,"name":"Bailly"},"",{"id":4,"name":"Smalling"},"",{"id":5,"name":"Blind"}],["","","","","","",""],["",{"id":6,"name":"Fellaini"},"",{"id":7,"name":"Herrera"},"",{"id":8,"name":"Pogba"},""],["","","","","","",""],["",{"id":9,"name":"Mkhitaryan"},"",{"id":10,"name":"Ibrahimovic"},"",{"id":11,"name":"Martial"},""]]},{"title":"AC Milan\'s 1-1 draw with Inter Milan","team":"AC Milan","homeOrAway":"away","opponent":"Inter Milan","competition":"Champions League","location":"San Siro","date":"13/5/2003","players":[["","","",{"id":1,"name":"Abbiati"},"","",""],[{"id":2,"name":"Costacurta"},"",{"id":3,"name":"Nesta"},"",{"id":4,"name":"Maldini"},"",{"id":5,"name":"Kaladze"}],["","","",{"id":6,"name":"Pirlo"},"","",""],["","",{"id":7,"name":"Gattuso"},"",{"id":8,"name":"Seedorf"},"",""],["","","",{"id":9,"name":"Rui Costa"},"","",""],["","",{"id":10,"name":"Inzaghi"},"",{"id":11,"name":"Shevchenko"},"",""]]},{"title":"Atletico Madrid\'s 3-2 win against Barcelona","team":"Atletico Madrid","homeOrAway":"away","opponent":"Barcelona","competition":"Supercopa de Espa\xf1a","location":"King Abdullah Sport City Stadium","date":"9/1/2020","players":[["","","",{"id":1,"name":"Oblak"},"","",""],[{"id":2,"name":"Trippier"},"",{"id":3,"name":"Savic"},"",{"id":4,"name":"Felipe"},"",{"id":5,"name":"Renan Lodi"}],["","","","","","",""],[{"id":6,"name":"Correa"},"",{"id":7,"name":"Herrera"},"",{"id":8,"name":"Partey"},"",{"id":9,"name":"Saul"}],["","","","","","",""],["","",{"id":10,"name":"Morata"},"",{"id":11,"name":"Felix"},"",""]]},{"title":"Tottenham\'s 2-1 win against Arsenal","team":"Tottenham","homeOrAway":"home","opponent":"Arsenal","competition":"Premier League","location":"White Hart Lane","date":"7/2/2015","players":[["","","",{"id":1,"name":"Lloris"},"","",""],[{"id":2,"name":"Walker"},"",{"id":3,"name":"Dier"},"",{"id":4,"name":"Vertonghen"},"",{"id":5,"name":"Rose"}],["","","","","","",""],["","",{"id":6,"name":"Mason"},"",{"id":7,"name":"Bentaleb"},"",""],[{"id":8,"name":"Lamela"},"","",{"id":9,"name":"Dembele"},"","",{"id":10,"name":"Eriksen"}],["","","",{"id":11,"name":"Kane"},"","",""]]},{"title":"Inter Milan\'s 3-3 draw against Roma","team":"Inter Milan","homeOrAway":"away","opponent":"Roma","competition":"Serie A","location":"Olimpico di Roma","date":"3/10/2004","players":[["","","",{"id":1,"name":"Toldo"},"","",""],[{"id":2,"name":"Ze Maria"},"",{"id":3,"name":"Burdisso"},"",{"id":4,"name":"Cordoba"},"",{"id":5,"name":"Zanetti"}],["","","",{"id":6,"name":"Cambiasso"},"","",""],["","",{"id":7,"name":"Veron"},"",{"id":8,"name":"Stankovic"},"",""],["","","",{"id":9,"name":"Recoba"},"","",""],["","",{"id":10,"name":"Adriano"},"",{"id":11,"name":"Martins"},"",""]]},{"title":"Leeds United\'s 2-1 win against Aston Villa","team":"Leeds United","homeOrAway":"away","opponent":"Aston Villa","competition":"Premier League","location":"Villa Park","date":"24/1/2001","players":[["","","",{"id":1,"name":"Robinson"},"","",""],[{"id":2,"name":"Kelly"},"",{"id":3,"name":"Ferdinand"},"",{"id":4,"name":"Woodgate"},"",{"id":5,"name":"Harte"}],["","","",{"id":6,"name":"Dacourt"},"","",""],["",{"id":7,"name":"Bowyer"},"","","",{"id":8,"name":"Matteo"},""],["","","",{"id":9,"name":"Bakke"},"","",""],["","",{"id":10,"name":"Viduka"},"",{"id":11,"name":"Keane"},"",""]]},{"title":"Leicester City\'s 2-0 win against Liverpool","team":"Leicester City","homeOrAway":"home","opponent":"Liverpool","competition":"Premier League","location":"King Power Stadium","date":"2/2/2016","players":[["","","",{"id":1,"name":"Schmeichel"},"","",""],[{"id":2,"name":"Simpson"},"",{"id":3,"name":"Morgan"},"",{"id":4,"name":"Huth"},"",{"id":5,"name":"Fuchs"}],["","","","","","",""],[{"id":6,"name":"Mahrez"},"",{"id":7,"name":"Drinkwater"},"",{"id":8,"name":"Kante"},"",{"id":9,"name":"Albrighton"}],["","","","","","",""],["","",{"id":10,"name":"Okazaki"},"",{"id":11,"name":"Vardy"},"",""]]},{"title":"PSG\'s 1-0 win against Rennes","team":"PSG","homeOrAway":"home","opponent":"Rennes","competition":"Ligue 1","location":"Le Parc des Princes","date":"30/1/2015","players":[["","","",{"id":1,"name":"Sirigu"},"","",""],[{"id":2,"name":"Marquinhos"},"",{"id":3,"name":"David Luiz"},"",{"id":4,"name":"Thiago Silva"},"",{"id":5,"name":"Digne"}],["","","","","","",""],["",{"id":6,"name":"Cabaye"},"",{"id":7,"name":"Rabiot"},"",{"id":8,"name":"Pastore"},""],["","","","","","",""],["",{"id":9,"name":"Lavezzi"},"",{"id":10,"name":"Ibrahimovic"},"",{"id":11,"name":"Cavani"},""]]},{"title":"Napoli\'s 2-1 win against Inter","team":"Napoli","homeOrAway":"home","opponent":"Inter","competition":"Serie A","location":"Stadio Diego Armando Maradona","date":"30/11/2015","players":[["","","",{"id":1,"name":"Reina"},"","",""],[{"id":2,"name":"Hysaj"},"",{"id":3,"name":"Albiol"},"",{"id":4,"name":"Koulibaly"},"",{"id":5,"name":"Ghoulam"}],["","","","","","",""],["",{"id":6,"name":"Allan"},"",{"id":7,"name":"Jorginho"},"",{"id":8,"name":"Hamsik"},""],["","","","","","",""],["",{"id":9,"name":"Callejon"},"",{"id":10,"name":"Higuain"},"",{"id":11,"name":"Insigne"},""]]},{"title":"Juventus\'s 5-2 win against Atalanta","team":"Juventus","homeOrAway":"away","opponent":"Atalanta","competition":"Serie A","location":"Stadio Atleti Azzurri d\'Italia","date":"7/11/2009","players":[["","","",{"id":1,"name":"Buffon"},"","",""],[{"id":2,"name":"Caceres"},"",{"id":3,"name":"Cannavaro"},"",{"id":4,"name":"Chiellini"},"",{"id":5,"name":"Grosso"}],["","","","","","",""],["","",{"id":6,"name":"Melo"},"",{"id":7,"name":"Poulsen"},"",""],["",{"id":8,"name":"Camoranesi"},"",{"id":9,"name":"Diego"},"",{"id":10,"name":"Giovinco"},""],["","","",{"id":11,"name":"Trezeguet"},"","",""]]},{"title":"Blackburn\'s 2-0 win against West Bromwich Albion","team":"Blackburn","homeOrAway":"home","opponent":"West Bromwich Albion","competition":"Premier League","location":"Ewood Park","date":"23/1/2011","players":[["","","",{"id":1,"name":"Robinson"},"","",""],[{"id":2,"name":"Salgado"},"",{"id":3,"name":"Samba"},"",{"id":4,"name":"Givet"},"",{"id":5,"name":"Olsson"}],["","","","","","",""],[{"id":6,"name":"Hoilett"},"",{"id":7,"name":"Jones"},"",{"id":8,"name":"Dunn"},"",{"id":9,"name":"Pedersen"}],["","","","","","",""],["","",{"id":10,"name":"Santa Cruz"},"",{"id":11,"name":"Kalinic"},"",""]]},{"title":"PSG\'s 3-0 win against Real Madrid","team":"PSG","homeOrAway":"home","opponent":"Real Madrid","competition":"Champions League","location":"Le Parc des Princes","date":"18/9/2019","players":[["","","",{"id":1,"name":"Navas"},"","",""],[{"id":2,"name":"Meunier"},"",{"id":3,"name":"Thiago Silva"},"",{"id":4,"name":"Kimpembe"},"",{"id":5,"name":"Bernat"}],["","","","","","",""],["",{"id":6,"name":"Gueye"},"",{"id":7,"name":"Marquinhos"},"",{"id":8,"name":"Verratti"},""],["","","","","","",""],["",{"id":9,"name":"Sarabia"},"",{"id":10,"name":"Icardi"},"",{"id":11,"name":"Di Maria"},""]]},{"title":"Liverpool\'s 1-0 win against Inter","team":"Liverpool","homeOrAway":"away","opponent":"Inter","competition":"Champions League","location":"San Siro","date":"11/3/2008","players":[["","","",{"id":1,"name":"Reina"},"","",""],[{"id":2,"name":"Carragher"},"",{"id":3,"name":"Skrtel"},"",{"id":4,"name":"Hyypia"},"",{"id":5,"name":"Fabio Aurelio"}],["","","","","","",""],["","",{"id":6,"name":"Mascherano"},"",{"id":7,"name":"Lucas"},"",""],["",{"id":8,"name":"Babel"},"",{"id":9,"name":"Gerrard"},"",{"id":10,"name":"Kuyt"},""],["","","",{"id":11,"name":"Torres"},"","",""]]},{"title":"Porto\'s 4-1 win against Lazio","team":"Porto","homeOrAway":"home","opponent":"Lazio","competition":"UEFA Cup Semi Final","location":"Est\xe1dio do Drag\xe3o","date":"10/4/2003","players":[["","","",{"id":1,"name":"Vitor Baia"},"","",""],[{"id":2,"name":"Ferreira"},"",{"id":3,"name":"Costa"},"",{"id":4,"name":"Carvalho"},"",{"id":5,"name":"Valente"}],["","","",{"id":6,"name":"Costinha"},"","",""],["",{"id":7,"name":"Maniche"},"","","",{"id":8,"name":"Alenichev"},""],["","","",{"id":9,"name":"Deco"},"","",""],["","",{"id":10,"name":"Derlei"},"",{"id":11,"name":"Postiga"},"",""]]},{"title":"Juventus\'s 4-0 win against Torino","team":"Juventus","homeOrAway":"home","opponent":"Torino","competition":"Coppa Italia","location":"Allianz Stadium","date":"16/12/2015","players":[["","","",{"id":1,"name":"Neto"},"","",""],["",{"id":2,"name":"Rugani"},"",{"id":3,"name":"Bonucci"},"",{"id":4,"name":"Chiellini"},""],[{"id":5,"name":"Lichtsteiner"},"","","","","",{"id":6,"name":"Alex Sandro"}],["",{"id":7,"name":"Marchisio"},"",{"id":8,"name":"Khedira"},"",{"id":9,"name":"Pogba"},""],["","","","","","",""],["","",{"id":10,"name":"Zaza"},"",{"id":11,"name":"Morata"},"",""]]},{"title":"Man City\'s 3-0 loss against Tottenham","team":"Man City","homeOrAway":"away","opponent":"Tottenham","competition":"Premier League","location":"White Hart Lane","date":"16/12/2009","players":[["","","",{"id":1,"name":"Given"},"","",""],[{"id":2,"name":"Richards"},"",{"id":3,"name":"Toure"},"",{"id":4,"name":"Onuoha"},"",{"id":5,"name":"Sylvinho"}],["","","","","","",""],["",{"id":6,"name":"Ireland"},"",{"id":7,"name":"de Jong"},"",{"id":8,"name":"Barry"},""],["","","","","","",""],["",{"id":9,"name":"Robinho"},"",{"id":10,"name":"Adebayor"},"",{"id":11,"name":"Tevez"},""]],"url":"https://www.transfermarkt.co.uk/spielbericht/index/spielbericht/961021"},{"title":"Man Utd\'s 4-3 win against Leeds","team":"Man Utd","homeOrAway":"away","opponent":"Leeds","competition":"Premier League","location":"Elland Road","date":"30/3/2002","players":[["","","",{"id":1,"name":"Barthez"},"","",""],[{"id":2,"name":"Neville"},"",{"id":3,"name":"Johnsen"},"",{"id":4,"name":"Blanc"},"",{"id":5,"name":"Silvestre"}],["","","","","","",""],[{"id":6,"name":"Beckham"},"",{"id":7,"name":"Butt"},"",{"id":8,"name":"Keane"},"",{"id":9,"name":"Giggs"}],["","","",{"id":10,"name":"Scholes"},"","",""],["","","",{"id":11,"name":"Solskjaer"},"","",""]],"url":"https://www.football-lineups.com/match/60976/"},{"title":"Bayern Munich\'s 5-1 win against Aberdeen","team":"Bayern Munich","homeOrAway":"home","opponent":"Aberdeen","competition":"UEFA Cup","location":"Fu\xdfball Arena M\xfcnchen","date":"21/2/2008","players":[["","","",{"id":1,"name":"Kahn"},"","",""],[{"id":2,"name":"Sagnol"},"",{"id":3,"name":"Lucio"},"",{"id":4,"name":"Van Buyten"},"",{"id":5,"name":"Jansen"}],["","","","","","",""],[{"id":6,"name":"Altintop"},"",{"id":7,"name":"Ottl"},"",{"id":8,"name":"Van Bommel"},"",{"id":9,"name":"Kroos"}],["","","","","","",""],["","",{"id":10,"name":"Toni"},"",{"id":11,"name":"Podolski"},"",""]],"url":"https://www.uefa.com/uefaeuropaleague/match/301931--bayern-vs-aberdeen/"},{"title":"Middlesbrough\'s 4-0 win against West Brom","team":"Middlesbrough","homeOrAway":"home","opponent":"West Brom","competition":"Premier League","location":"Riverside Stadium","date":"23/4/2005","players":[["","","",{"id":1,"name":"Jones"},"","",""],[{"id":2,"name":"Southgate"},"",{"id":3,"name":"Cooper"},"",{"id":4,"name":"Ehiogu"},"",{"id":5,"name":"Queudrue"}],["","","","","","",""],[{"id":6,"name":"Zenden"},"",{"id":7,"name":"Boateng"},"",{"id":8,"name":"Doriva"},"",{"id":9,"name":"Downing"}],["","","","","","",""],["","",{"id":10,"name":"Nemeth"},"",{"id":11,"name":"Hasselbaink"},"",""]],"url":"https://www.footballtoday.net/livescore/7164471047006223727-middlesbrough-vs-west-bromwich-albion"},{"title":"Liverpools\'s 1-1 draw against Leeds","team":"Liverpool","homeOrAway":"home","opponent":"Leeds","competition":"Premier League","location":"Anfield","date":"13/10/2001","players":[["","","",{"id":1,"name":"Dudek"},"","",""],[{"id":2,"name":"Carragher"},"",{"id":3,"name":"Henchoz"},"",{"id":4,"name":"Hyypia"},"",{"id":5,"name":"Riise"}],["","","","","","",""],["",{"id":6,"name":"Murphy"},"",{"id":7,"name":"McAllister"},"",{"id":8,"name":"Gerrard"},""],["","",{"id":9,"name":"Smicer"},"","","",""],["","",{"id":10,"name":"Heskey"},"",{"id":11,"name":"Fowler"},"",""]],"url":"https://youtu.be/1LR2Jpz9KPc?t=20"},{"title":"Arsenal\'s 1-1 draw against Wolves","team":"Arsenal","homeOrAway":"home","opponent":"Wolves","competition":"Premier League","location":"Emirates Stadium","date":"27/12/2011","players":[["","","",{"id":1,"name":"Szczesny"},"","",""],[{"id":2,"name":"Djourou"},"",{"id":3,"name":"Mertesacker"},"",{"id":4,"name":"Koscielny"},"",{"id":5,"name":"Vermaelen"}],["","","","","","",""],["","",{"id":6,"name":"Song"},"",{"id":7,"name":"Arteta"},"",""],["",{"id":8,"name":"Benayoun"},"",{"id":9,"name":"Rosicky"},"",{"id":10,"name":"Gervinho"},""],["","","",{"id":11,"name":"van Persie"},"","",""]],"url":"https://www.premierleague.com/match/7643"},{"title":"Inter\'s 4-0 win against Genoa","team":"Inter","homeOrAway":"away","opponent":"Genoa","competition":"Serie A","location":"Stadio Comunale Luigi Ferraris","date":"3/4/2019","players":[["","","",{"id":1,"name":"Handanovic"},"","",""],[{"id":2,"name":"D\'Ambrosio"},"",{"id":3,"name":"Miranda"},"",{"id":4,"name":"Skriniar"},"",{"id":5,"name":"Asamoah"}],["","","","","","",""],["","",{"id":6,"name":"Gagliardini"},"",{"id":7,"name":"Brozovic"},"",""],["",{"id":8,"name":"Politano"},"",{"id":9,"name":"Nainggolan"},"",{"id":10,"name":"Perisic"},""],["","","",{"id":11,"name":"Icardi"},"","",""]],"url":"https://www.footballcritic.com/serie-a-genoa-cfc-fc-internazionale-milano/lineups/1398198"},{"title":"Everton\'s 4-0 win against Man City","team":"Everton","homeOrAway":"home","opponent":"Man City","competition":"Premier League","location":"Goodison Park","date":"15/1/2017","players":[["","","",{"id":1,"name":"Robles"},"","",""],["",{"id":2,"name":"Holgate"},"",{"id":3,"name":"Williams"},"",{"id":4,"name":"Funes Mori"},""],[{"id":5,"name":"Coleman"},"","","","","",{"id":6,"name":"Baines"}],["",{"id":7,"name":"Davies"},"",{"id":8,"name":"Barry"},"",{"id":9,"name":"Barkley"},""],["","","","","","",""],["","",{"id":10,"name":"Mirallas"},"",{"id":11,"name":"Lukaku"},"",""]]},{"title":"Chelsea\'s 3-2 win against Liverpol AET","team":"Chelsea","homeOrAway":"away","opponent":"Liverpool","competition":"2005 Football League Cup Final","location":"Millennium Stadium","date":"27/2/2005","players":[["","","",{"id":1,"name":"Cech"},"","",""],[{"id":2,"name":"Ferreira"},"",{"id":3,"name":"Carvalho"},"",{"id":4,"name":"Terry"},"",{"id":5,"name":"Gallas"}],["","","",{"id":6,"name":"Makelele"},"","",""],["","",{"id":7,"name":"Jarosik"},"",{"id":8,"name":"Lampard"},"",""],["",{"id":9,"name":"Cole"},"","","",{"id":10,"name":"Duff"},""],["","","",{"id":11,"name":"Drogba"},"","",""]],"url":"https://en.wikipedia.org/wiki/2005_Football_League_Cup_Final"},{"title":"Dortmund\'s 3-0 win against Schalke","team":"Dortmund","homeOrAway":"home","opponent":"Schalke","competition":"Bundesliga","location":"Signal Iduna Park","date":"28/2/2015","players":[["","","",{"id":1,"name":"Weidenfeller"},"","",""],[{"id":2,"name":"Kirch"},"",{"id":3,"name":"Subotic"},"",{"id":4,"name":"Hummels"},"",{"id":5,"name":"Schmelzer"}],["","","","","","",""],["","",{"id":6,"name":"Sahin"},"",{"id":7,"name":"Gundogan"},"",""],["",{"id":8,"name":"Mkhitaryan"},"",{"id":9,"name":"Kagawa"},"",{"id":10,"name":"Reus"},""],["","","",{"id":11,"name":"Aubameyang"},"","",""]],"url":"https://www.transfermarkt.co.uk/borussia-dortmund_fc-schalke-04/index/spielbericht/2460825"},{"title":"Tottenham\'s 3-3 draw against Middlesbrough","team":"Tottenham","homeOrAway":"away","opponent":"Middlesbrough","competition":"Premier League","location":"Riverside Stadium","date":"18/12/2005","players":[["","","",{"id":1,"name":"Robinson"},"","",""],[{"id":2,"name":"Stalteri"},"",{"id":3,"name":"King"},"",{"id":4,"name":"Dawson"},"",{"id":5,"name":"Lee"}],["","","","","","",""],[{"id":6,"name":"Jenas"},"",{"id":7,"name":"Carrick"},"",{"id":8,"name":"Davids"},"",{"id":9,"name":"Reid"}],["","","","","","",""],["","",{"id":10,"name":"Mido"},"",{"id":11,"name":"Keane"},"",""]],"url":"https://www.transfermarkt.my/spielbericht/index/spielbericht/37902"},{"title":"Southampton\'s 1-0 win against West Ham","team":"Southampton","homeOrAway":"home","opponent":"West Ham","competition":"Premier League","location":"St Mary\'s","date":"6/2/2016","players":[["","","",{"id":1,"name":"Forster"},"","",""],["",{"id":2,"name":"van Dijk"},"",{"id":3,"name":"Fonte"},"",{"id":4,"name":"Yoshida"},""],[{"id":5,"name":"Cedric"},"","","","","",{"id":6,"name":"Bertrand"}],["","",{"id":7,"name":"Wanyama"},"",{"id":8,"name":"Clasie"},"",""],["",{"id":9,"name":"Long"},"","","",{"id":10,"name":"Mane"},""],["","","",{"id":11,"name":"Pelle"},"","",""]]},{"title":"Roma\'s 4-2 win against Napoli","team":"Roma","homeOrAway":"away","opponent":"Napoli","competition":"Serie A","location":"Stadio Diego Armando Maradona","date":"3/3/2018","players":[["","","",{"id":1,"name":"Alisson"},"","",""],[{"id":2,"name":"Florenzi"},"",{"id":3,"name":"Manolas"},"",{"id":4,"name":"Fazio"},"",{"id":5,"name":"Kolarov"}],["","","","","","",""],["",{"id":6,"name":"Nainggolan"},"",{"id":7,"name":"De Rossi"},"",{"id":8,"name":"Strootman"},""],["","","","","","",""],["",{"id":9,"name":"Under"},"",{"id":10,"name":"Dzeko"},"",{"id":11,"name":"Perotti"},""]],"url":"https://int.soccerway.com/matches/2018/03/03/italy/serie-a/ssc-napoli/as-roma/2539044/"},{"title":"Lyon\'s 3-1 win against Lorient","team":"Lyon","homeOrAway":"away","opponent":"Lorient","competition":"Ligue 1","location":"Stade du Moustoir","date":"3/4/2016","players":[["","","",{"id":1,"name":"Lopes"},"","",""],[{"id":2,"name":"Jallet"},"",{"id":3,"name":"Yanga-Mbiwa"},"",{"id":4,"name":"Umtiti"},"",{"id":5,"name":"Morel"}],["","","","","","",""],["",{"id":6,"name":"Ferri"},"",{"id":7,"name":"Tolisso"},"",{"id":8,"name":"Darder"},""],["","","","","","",""],["",{"id":9,"name":"Ghezzal"},"",{"id":10,"name":"Lacazette"},"",{"id":11,"name":"Cornet"},""]],"url":"https://www.sofascore.com/lorient-olympique-lyonnais/ZHsgI"},{"title":"Aston Villa\'s 4-2 loss against Southampton","team":"Aston Villa","homeOrAway":"home","opponent":"Southampton","competition":"Premier League","location":"Villa Park","date":"23/4/2016","players":[["","","",{"id":1,"name":"Guzan"},"","",""],[{"id":2,"name":"Hutton"},"",{"id":3,"name":"Richards"},"",{"id":4,"name":"Lescott"},"",{"id":5,"name":"Cissokho"}],["","","","","","",""],["",{"id":6,"name":"Westwood"},"",{"id":7,"name":"Gueye"},"",{"id":8,"name":"Sanchez"},""],[{"id":9,"name":"Bacuna"},"","","","","",{"id":10,"name":"Sinclair"}],["","","",{"id":11,"name":"Ayew"},"","",""]],"hashtags":"#AVLSOU #AVFC","url":"https://www.transfermarkt.co.uk/spielbericht/index/spielbericht/2578278"},{"title":"Man Utd\'s 3-2 win against Man City","team":"Man Utd","homeOrAway":"away","opponent":"Man City","competition":"Premier League","location":"Etihad Stadium","date":"9/12/2012","players":[["","","",{"id":1,"name":"de Gea"},"","",""],[{"id":2,"name":"Rafael"},"",{"id":3,"name":"Ferdinand"},"",{"id":4,"name":"Evans"},"",{"id":5,"name":"Evra"}],["","","","","","",""],[{"id":6,"name":"Valencia"},"",{"id":7,"name":"Carrick"},"",{"id":8,"name":"Cleverley"},"",{"id":9,"name":"Young"}],["","","","","","",""],["","",{"id":10,"name":"van Persie"},"",{"id":11,"name":"Rooney"},"",""]],"hashtags":"#MCIMUN #MUFC","url":"https://www.transfermarkt.co.uk/spielbericht/index/spielbericht/1131432"},{"title":"Atletico Madrid\'s 5-0 win against Real Betis","team":"Atletico Madrid","homeOrAway":"home","opponent":"Real Betis","competition":"La Liga","location":"Vicente Calder\xf3n","date":"27/10/2013","players":[["","","",{"id":1,"name":"Courtois"},"","",""],[{"id":2,"name":"Juanfran"},"",{"id":3,"name":"Godin"},"",{"id":4,"name":"Miranda"},"",{"id":5,"name":"Filipe Luis"}],["","","","","","",""],[{"id":6,"name":"Koke"},"",{"id":7,"name":"Tiago"},"",{"id":8,"name":"Gabi"},"",{"id":9,"name":"Oliver Torres"}],["","","","","","",""],["","",{"id":10,"name":"Diego Costa"},"",{"id":11,"name":"David Villa"},"",""]],"url":"https://www.transfermarkt.co.uk/spielbericht/index/spielbericht/2341161"},{"title":"Bayern Munich\'s 3-1 win against Red Bull Salzburg","team":"Bayern Munich","homeOrAway":"home","opponent":"Red Bull Salzburg","competition":"Champions League","location":"Allianz Arena","date":"25/11/2020","players":[["","","",{"id":1,"name":"Neuer"},"","",""],[{"id":2,"name":"Pavard"},"",{"id":3,"name":"Boateng"},"",{"id":4,"name":"Alaba"},"",{"id":5,"name":"Richards"}],["","","","","","",""],["","",{"id":6,"name":"Roca"},"",{"id":7,"name":"Goretzka"},"",""],["",{"id":8,"name":"Gnabry"},"",{"id":9,"name":"Muller"},"",{"id":10,"name":"Coman"},""],["","","",{"id":11,"name":"Lewandowski"},"","",""]],"hashtags":"#FCBSAL #FCBayern #UCL","url":"https://www.sofascore.com/bayern-munchen-red-bull-salzburg/WPsxdb"},{"title":"Man City\'s 1-0 loss against Sporting CP","team":"Man City","homeOrAway":"away","opponent":"Sporting CP","competition":"Europa League","location":"Est\xe1dio Jos\xe9 Alvalade","date":"8/3/2012","players":[["","","",{"id":1,"name":"Hart"},"","",""],[{"id":2,"name":"Clichy"},"",{"id":3,"name":"Toure"},"",{"id":4,"name":"Kompany"},"",{"id":5,"name":"Kolarov"}],["","","","","","",""],[{"id":6,"name":"Milner"},"",{"id":7,"name":"de Jong"},"",{"id":8,"name":"Barry"},"",{"id":9,"name":"Silva"}],["","","","","","",""],["","",{"id":10,"name":"Aguero"},"",{"id":11,"name":"Dzeko"},"",""]],"url":"https://www.uefa.com/uefaeuropaleague/match/2007453--sporting-cp-vs-man-city/lineups/"},{"title":"Barcelona\'s 2-0 win against Galatasaray","team":"Barcelona","homeOrAway":"away","opponent":"Galatasaray","competition":"Champions League","location":"Ali Sami Yen","date":"24/9/2002","players":[["","","",{"id":1,"name":"Valdes"},"","",""],["",{"id":2,"name":"Puyol"},"",{"id":3,"name":"de Boer"},"",{"id":4,"name":"Navarro"},""],["","","","","","",""],[{"id":5,"name":"Mendieta"},"",{"id":6,"name":"Xavi"},"",{"id":7,"name":"Cocu"},"",{"id":8,"name":"Thiago Motta"}],["","","","","","",""],["",{"id":9,"name":"Saviola"},"",{"id":10,"name":"Kluivert"},"",{"id":11,"name":"Luis Enrique"},""]],"url":"https://www.uefa.com/uefachampionsleague/match/70152--galatasaray-vs-barcelona/lineups/"},{"title":"Brazil\'s 0-0 draw against England","team":"Brazil","homeOrAway":"away","opponent":"England","competition":"Friendly","location":"Wembley Stadium","date":"14/11/2017","players":[["","","",{"id":1,"name":"Alisson"},"","",""],[{"id":2,"name":"Dani Alves"},"",{"id":3,"name":"Marquinhos"},"",{"id":4,"name":"Miranda"},"",{"id":5,"name":"Marcelo"}],["","","","","","",""],["",{"id":6,"name":"Paulinho"},"",{"id":7,"name":"Casemiro"},"",{"id":8,"name":"Renato Augusto"},""],["","","","","","",""],["",{"id":9,"name":"Coutinho"},"",{"id":10,"name":"Jesus"},"",{"id":11,"name":"Neymar"},""]],"url":"https://www.google.com/search?q=brazil+vs+england&rlz=1C5CHFA_enGB846GB846&oq=brazil+vs+en&aqs=chrome.1.69i57j0i512l9.6367j0j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11hczch107;2;/g/11b66jrs60;ln;fp;1;;"},{"title":"Juventus\' 2-0 loss against Sampdoria","team":"Juventus","homeOrAway":"away","opponent":"Sampdoria","competition":"Serie A","location":"Stadio Luigi Ferraris","date":"26/5/2019","players":[["","","",{"id":1,"name":"Pinsoglio"},"","",""],[{"id":2,"name":"Caceres"},"",{"id":3,"name":"Rugani"},"",{"id":4,"name":"Chiellini"},"",{"id":5,"name":"De Sciglio"}],["","","","","","",""],[{"id":6,"name":"Cuadrado"},"",{"id":7,"name":"Can"},"",{"id":8,"name":"Bentancur"},"",{"id":9,"name":"Pereira"}],["","","","","","",""],["","",{"id":10,"name":"Dybala"},"",{"id":11,"name":"Kean"},"",""]],"url":"https://www.sofascore.com/sampdoria-juventus/Mdbsleb"},{"title":"Marseille\'s 2-1 win against Brest","team":"Marseille","homeOrAway":"home","opponent":"Brest","competition":"Ligue 1","location":"Stade V\xe9lodrome","date":"30/11/2019","players":[["","","",{"id":1,"name":"Mandanda"},"","",""],[{"id":2,"name":"Sakai"},"",{"id":3,"name":"Kamara"},"",{"id":4,"name":"Caleta-Car"},"",{"id":5,"name":"Amavi"}],["","","","","","",""],["",{"id":6,"name":"Rongier"},"",{"id":7,"name":"Strootman"},"",{"id":8,"name":"Sanson"},""],["","","","","","",""],["",{"id":9,"name":"Sarr"},"",{"id":10,"name":"Benedetto"},"",{"id":11,"name":"Payet"},""]],"url":"https://www.transfermarkt.co.uk/spielbericht/index/spielbericht/3199503"},{"title":"Real Madrid\'s 5-0 win against Mallorca","team":"Real Madrid","homeOrAway":"away","opponent":"Mallorca","competition":"La Liga","location":"Son Moix","date":"28/10/2012","players":[["","","",{"id":1,"name":"Casillas"},"","",""],[{"id":2,"name":"Ramos"},"",{"id":3,"name":"Varane"},"",{"id":4,"name":"Pepe"},"",{"id":5,"name":"Essien"}],["","","","","","",""],["","",{"id":6,"name":"Modric"},"",{"id":7,"name":"Alonso"},"",""],["",{"id":8,"name":"Di Maria"},"",{"id":9,"name":"Ozil"},"",{"id":10,"name":"Ronaldo"},""],["","","",{"id":11,"name":"Higuain"},"","",""]],"url":"https://www.transfermarkt.co.uk/spielbericht/index/spielbericht/2242888"},{"title":"Atletico Madrid\'s 0-0 draw against Leverkusen","team":"Atletico Madrid","homeOrAway":"home","opponent":"Leverkusen","competition":"Champions League","location":"Vicente Calder\xf3n","date":"15/3/2017","players":[["","","",{"id":1,"name":"Oblak"},"","",""],[{"id":2,"name":"Vrsaljko"},"",{"id":3,"name":"Gimenez"},"",{"id":4,"name":"Godin"},"",{"id":5,"name":"Hernandez"}],["","","","","","",""],[{"id":6,"name":"Saul"},"",{"id":7,"name":"Partey"},"",{"id":8,"name":"Koke"},"",{"id":9,"name":"Carrasco"}],["","","","","","",""],["","",{"id":10,"name":"Correa"},"",{"id":11,"name":"Griezmann"},"",""]],"url":"https://www.uefa.com/uefachampionsleague/match/2019626--atletico-vs-leverkusen/"},{"title":"Internacional 1-0 win vs Barcelona","team":"Internacional","homeOrAway":"home","opponent":"Barcelona","competition":"World Cup","location":"Yokohama","date":"17/12/2006","players":[["","","",{"id":1,"name":"Clemer"},"","",""],[{"id":2,"name":"Ceara"},"",{"id":3,"name":"Indio"},"",{"id":4,"name":"Fabiano Eller"},"",{"id":5,"name":"Rubens Cardoso"}],["","","","","","",""],["",{"id":6,"name":"Wellington Monteiro"},"",{"id":7,"name":"Edinho"},"",{"id":8,"name":"Alex"},""],["","","","","","",""],["",{"id":9,"name":"Iarley"},"",{"id":10,"name":"Fernandao"},"",{"id":11,"name":"Pato"},""]],"url": "https://en.wikipedia.org/wiki/2006_FIFA_Club_World_Cup_Final"},{"title":"Newcastle\'s 3-1 loss against Everton","team":"Newcastle","homeOrAway":"away","opponent":"Everton","competition":"Premier League","location":"Goodison Park","date":"13/5/2012","players":[["","","",{"id":1,"name":"Krul"},"","",""],[{"id":2,"name":"Perch"},"",{"id":3,"name":"Williamson"},"",{"id":4,"name":"Coloccini"},"",{"id":5,"name":"Santon"}],["","","","","","",""],[{"id":6,"name":"Ben Arfa"},"",{"id":7,"name":"Cabaye"},"",{"id":8,"name":"Tiote"},"",{"id":9,"name":"Gutierrez"}],["","","","","","",""],["","",{"id":10,"name":"Ba"},"",{"id":11,"name":"Cisse"},"",""]],"url":"https://www.transfermarkt.com/spielbericht/index/spielbericht/1131718"}]'
                    ),
                    y = ["title", "titleId"];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                function b(e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                r,
                                a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, n);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
                    }
                    return a;
                }
                function w(e, n) {
                    var t = e.title,
                        a = e.titleId,
                        i = b(e, y);
                    return r.createElement(
                        "svg",
                        v({ viewBox: "0 0 434 552", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ref: n, "aria-labelledby": a }, i),
                        t ? r.createElement("title", { id: a }, t) : null,
                        h ||
                            (h = r.createElement(
                                "g",
                                null,
                                r.createElement("path", {
                                    className: "detail",
                                    d:
                                        "M214.403593,17.9214781 C191.227663,17.9214781 166.796384,19.5057737 161,19.9076212 C161.451542,19.4457275 161.9255,19.0207852 162.361029,18.5681293 C167.532941,10.7575058 168.794696,5.31177829 171.430289,4.79445727 C186.143987,1.85043982 200.971869,0.24910274 215.825468,0 L216.786195,0 C231.632309,0.25045006 246.452674,1.85178399 261.158957,4.79445727 C263.79455,5.31177829 265.056304,10.7575058 270.228216,18.5681293 C270.436374,18.7852194 270.663746,18.9884527 270.868701,19.2055427 L271,20 C271,20 240.926053,17.9214781 214.403593,17.9214781 Z",
                                    id: "Path",
                                }),
                                r.createElement("path", {
                                    className: "shirt-colour",
                                    d:
                                        "M271,20 C273.800994,21.5708683 277.619887,24.7968836 285.908867,28.4804975 C317.861867,45.2964975 378.400867,63.7964975 403.628867,73.8864975 C433.898867,107.519497 432.218867,189.926497 433.898867,237.006497 C428.851967,247.096497 363.269867,250.459497 354.859867,238.690097 L353.176267,201.694097 C314.496267,341.274097 338.039267,400.134097 344.766067,495.984097 C349.812967,569.976097 82.4260672,569.976097 87.4660672,495.984097 C94.1926672,400.129097 119.419067,341.274097 79.0558672,201.694097 L79.0558672,238.690097 C68.9658672,250.463097 3.37986724,247.100297 0.0168672434,237.006497 C0.0168672434,189.920497 -1.66673276,107.516497 28.6068672,73.8864975 C55.5128672,63.7964975 114.372867,45.2964975 146.326867,28.4804975 C156.915552,23.7750837 157.166616,20.7592441 161,20 C161.407928,19.9192053 201.375109,14.0722267 218,13.9979487 C236.849805,13.9181071 268.686135,18.7023258 271,20 Z",
                                    id: "Shape",
                                })
                            ))
                    );
                }
                var k,
                    S = r.forwardRef(w);
                t.p;
                function x(e, n) {
                    var t = ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (!t) {
                        if (Array.isArray(e) || (t = l(e)) || (n && e && "number" === typeof e.length)) {
                            t && (e = t);
                            var r = 0,
                                a = function () {};
                            return {
                                s: a,
                                n: function () {
                                    return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                },
                                e: function (e) {
                                    throw e;
                                },
                                f: a,
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var i,
                        o = !0,
                        u = !1;
                    return {
                        s: function () {
                            t = t.call(e);
                        },
                        n: function () {
                            var e = t.next();
                            return (o = e.done), e;
                        },
                        e: function (e) {
                            (u = !0), (i = e);
                        },
                        f: function () {
                            try {
                                o || null == t.return || t.return();
                            } finally {
                                if (u) throw i;
                            }
                        },
                    };
                }
                function E(e, n) {
                    var t = [];
                    return (
                        n.split("").forEach(function (n, r) {
                            e[r] !== n && t.push(n);
                        }),
                        e.split("").map(function (e, r) {
                            var a;
                            return n[r] === e ? { clue: k.Correct, letter: e } : (a = t.indexOf(e)) > -1 ? ((t[a] = ""), { clue: k.Elsewhere, letter: e }) : { clue: k.Absent, letter: e };
                        })
                    );
                }
                function C(e) {
                    return e === k.Absent ? "letter-absent" : e === k.Elsewhere ? "letter-elsewhere" : "letter-correct";
                }
                function _(e) {
                    return e === k.Absent ? "no" : e === k.Elsewhere ? "elsewhere" : "correct";
                }
                function L(e, n) {
                    var t,
                        r,
                        a = 0,
                        i = x(e);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var l = t.value,
                                o = l.letter,
                                u = l.clue;
                            if (u === k.Absent);
                            else if (u === k.Correct) {
                                if (n[a] !== o) return (r = a + 1) + ([, "st", "nd", "rd"][(r % 100 >> 3) ^ 1 && r % 10] || "th") + " letter must be " + o.toUpperCase();
                            } else if (u === k.Elsewhere && !n.includes(o)) return "Guess must contain " + o.toUpperCase();
                            ++a;
                        }
                    } catch (s) {
                        i.e(s);
                    } finally {
                        i.f();
                    }
                }
                !(function (e) {
                    (e[(e.Absent = 0)] = "Absent"), (e[(e.Elsewhere = 1)] = "Elsewhere"), (e[(e.Correct = 2)] = "Correct");
                })(k || (k = {}));
                var P,
                    N,
                    M = t(417);
                function O(e) {
                    var n = new RegExp("[^A-Za-z]", "g"),
                        t = e.playerName.matchAll(n),
                        a = Array.from(t),
                        i = e.rowState === P.LockedIn,
                        l = e.rowState === P.Editing,
                        o = e.cluedLetters
                            .concat(Array(e.wordLength).fill({ clue: k.Absent, letter: "" }))
                            .slice(0, e.wordLength)
                            .map(function (e, n) {
                                var t = e.clue,
                                    o = e.letter,
                                    u =
                                        null === a || void 0 === a
                                            ? void 0
                                            : a.find(function (e, t) {
                                                  var r = e.index || 0;
                                                  return t > 0 ? (console.log("g", n + (t - 1)), r === n + 1 + t) : r === n + 1;
                                              }),
                                    s = "Row-letter";
                                return (
                                    i && void 0 !== t && (s += " " + C(t)),
                                    (0, M.jsxs)(
                                        r.Fragment,
                                        {
                                            children: [
                                                (0, M.jsx)("td", { className: s, "aria-live": l ? "assertive" : "off", "aria-label": i ? o.toUpperCase() + (void 0 === t ? "" : ": " + _(t)) : "", children: o }),
                                                u ? (0, M.jsx)("td", { className: "Row-special-letter", children: u[0].replace(/ /g, "\xa0") }) : null,
                                            ],
                                        },
                                        n
                                    )
                                );
                            }),
                        u = "Row";
                    return i && (u += " Row-locked-in"), (0, M.jsxs)("tr", { className: u, children: [o, e.annotation && (0, M.jsx)("span", { className: "Row-annotation", children: e.annotation })] });
                }
                function j(e) {
                    var n = ["q w e r t y u i o p".split(" "), "a s d f g h j k l".split(" "), "Backspace z x c v b n m Enter".split(" ")];
                    return (0, M.jsx)("div", {
                        className: "Game-keyboard",
                        "aria-hidden": "true",
                        children: n.map(function (n, t) {
                            return (0, M.jsx)(
                                "div",
                                {
                                    className: "Game-keyboard-row",
                                    children: n.map(function (n, t) {
                                        var r = "Game-keyboard-button",
                                            a = e.letterInfo.get(n);
                                        return (
                                            void 0 !== a && (r += " " + C(a)),
                                            n.length > 1 && (r += " Game-keyboard-button-wide"),
                                            (0, M.jsx)(
                                                "div",
                                                {
                                                    tabIndex: -1,
                                                    role: "button",
                                                    className: r,
                                                    onClick: function () {
                                                        e.onKey(n);
                                                    },
                                                    children: n.replace("Backspace", "\u232b"),
                                                },
                                                t
                                            )
                                        );
                                    }),
                                },
                                t
                            );
                        }),
                    });
                }
                !(function (e) {
                    (e[(e.LockedIn = 0)] = "LockedIn"), (e[(e.Editing = 1)] = "Editing"), (e[(e.Pending = 2)] = "Pending");
                })(P || (P = {})),
                    (function (e) {
                        (e[(e.Playing = 0)] = "Playing"), (e[(e.Won = 1)] = "Won"), (e[(e.Lost = 2)] = "Lost");
                    })(N || (N = {}));
                var T = function (e) {
                    window.dataLayer = window.dataLayer || [];
                    var n = o((0, r.useState)(N.Playing), 2),
                        t = n[0],
                        a = n[1],
                        i = o((0, r.useState)(""), 2),
                        l = i[0],
                        u = i[1],
                        s = o((0, r.useState)("Make your first guess!"), 2),
                        c = s[0],
                        f = s[1],
                        p = e.player.name.toLowerCase(),
                        m = p.replaceAll(/[^A-Za-z]/gi, ""),
                        h = m.length,
                        g = m,
                        y = e.player.guesses || [],
                        v = function (n) {
                            if (t === N.Playing && y.length !== e.maxGuesses)
                                if (/^[a-z]$/i.test(n)) {
                                    u(function (e) {
                                        return (e + n.toLowerCase()).slice(0, h);
                                    });
                                    var r = document.activeElement;
                                    r && ["A", "BUTTON"].includes(r.tagName) && r.blur(), f("");
                                } else if ("Backspace" === n)
                                    u(function (e) {
                                        return e.slice(0, -1);
                                    }),
                                        f("");
                                else if ("Enter" === n) {
                                    if (l.length !== h) return void f("Too short");
                                    if (e.hard) {
                                        var i,
                                            o = x(y);
                                        try {
                                            for (o.s(); !(i = o.n()).done; ) {
                                                var s = L(E(i.value, g), l);
                                                if (s) return void f(s);
                                            }
                                        } catch (c) {
                                            o.e(c);
                                        } finally {
                                            o.f();
                                        }
                                    }
                                    u(function (e) {
                                        return "";
                                    }),
                                        e.addPlayerGuess(e.player.id, l);
                                    l === g
                                        ? (e.setPlayerSolved(e.player.id, !0),
                                          a(N.Won),
                                          window.dataLayer.push({ event: "player_correct", guesses: y.length + 1, game_count: e.gameCount, player_id: e.player.id }),
                                          setTimeout(function () {
                                              return e.closeGame();
                                          }, 350))
                                        : y.length + 1 === e.maxGuesses
                                        ? (e.setPlayerSolved(e.player.id, !1), a(N.Lost), window.dataLayer.push({ event: "player_incorrect", game_count: e.gameCount, player_id: e.player.id }), e.closeGame())
                                        : (f(""),
                                          (function (e) {
                                              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "assertive",
                                                  t = document.createElement("div"),
                                                  r = "speak-" + Date.now();
                                              t.setAttribute("id", r),
                                                  t.setAttribute("aria-live", n || "polite"),
                                                  t.classList.add("sr-only"),
                                                  document.body.appendChild(t),
                                                  window.setTimeout(function () {
                                                      document.getElementById(r).innerHTML = e;
                                                  }, 100),
                                                  window.setTimeout(function () {
                                                      document.body.removeChild(document.getElementById(r));
                                                  }, 1e3);
                                          })(
                                              (function (e) {
                                                  return e
                                                      .map(function (e) {
                                                          var n = e.letter,
                                                              t = e.clue;
                                                          return n.toUpperCase() + " " + _(t);
                                                      })
                                                      .join(", ");
                                              })(E(l, g))
                                          ));
                                }
                        };
                    (0, r.useEffect)(
                        function () {
                            var e = function (e) {
                                e.ctrlKey || e.metaKey || v(e.key), "Backspace" === e.key && e.preventDefault();
                            };
                            return (
                                document.addEventListener("keydown", e),
                                function () {
                                    document.removeEventListener("keydown", e);
                                }
                            );
                        },
                        [l, t]
                    );
                    var b = new Map(),
                        w = Array(e.maxGuesses)
                            .fill(void 0)
                            .map(function (e, n) {
                                var t,
                                    r = E(null !== (t = [].concat(d(y), [l])[n]) && void 0 !== t ? t : "", g),
                                    a = n < y.length;
                                if (a) {
                                    var i,
                                        o = x(r);
                                    try {
                                        for (o.s(); !(i = o.n()).done; ) {
                                            var u = i.value,
                                                s = u.clue,
                                                c = u.letter;
                                            if (void 0 === s) break;
                                            var f = b.get(c);
                                            (void 0 === f || s > f) && b.set(c, s);
                                        }
                                    } catch (m) {
                                        o.e(m);
                                    } finally {
                                        o.f();
                                    }
                                }
                                return (0, M.jsx)(O, { wordLength: h, rowState: a ? P.LockedIn : n === y.length ? P.Editing : P.Pending, cluedLetters: r, playerName: p }, n);
                            });
                    return (0, M.jsx)("div", {
                        className: "Game",
                        children: (0, M.jsxs)("div", {
                            className: "game-inner",
                            children: [
                                (0, M.jsx)("a", { href: "#", onClick: e.closeGame, style: { marginBottom: 10, fontSize: 20 }, children: "Back" }),
                                (0, M.jsx)("table", { className: "Game-rows", tabIndex: 0, "aria-label": "Table of guesses", children: (0, M.jsx)("tbody", { children: w }) }),
                                (0, M.jsx)("p", { role: "alert", style: { userSelect: /http:/.test(c) ? "text" : "none" }, children: c || "\xa0" }),
                                (0, M.jsx)(j, { letterInfo: b, onKey: v }),
                            ],
                        }),
                    });
                };
                function z(e) {
                    window.dataLayer = window.dataLayer || [];
                    var n = o((0, r.useState)(!1), 2),
                        t = n[0],
                        a = n[1],
                        i = function () {
                            return e.players
                                .map(function (e) {
                                    return e.guesses.length;
                                })
                                .reduce(function (e, n) {
                                    return e + n;
                                }, 0);
                        };
                    return (0, M.jsxs)("div", {
                        className: "share-container",
                        children: [
                            (0, M.jsx)("div", {
                                style: { marginBottom: 30 },
                                children: e.won
                                    ? (0, M.jsxs)("div", { children: ["You WON! In ", i(), " guesses"] })
                                    : (0, M.jsxs)("div", {
                                          children: [
                                              "Better luck next time. You got ",
                                              e.players.filter(function (e) {
                                                  return e.solved;
                                              }).length,
                                              " players correct",
                                          ],
                                      }),
                            }),
                            (0, M.jsx)("button", {
                                style: { marginBottom: "30px", fontSize: "24px", backgroundColor: "#00acee", color: "white", border: "2px solid rgba(0, 0, 0, 0.3)", padding: "10px", fontWeight: "bold" },
                                onClick: function () {
                                    var n = ""
                                            .concat(e.interval.hours ? "".concat(e.interval.hours, ":") : "")
                                            .concat(e.interval.minutes, ":")
                                            .concat(e.interval.seconds < 10 ? "0".concat(e.interval.seconds) : e.interval.seconds),
                                        t = "Missing 11 "
                                            .concat(e.gameCount, " ")
                                            .concat(
                                                e.players.filter(function (e) {
                                                    return e.solved;
                                                }).length,
                                                "/11 "
                                            )
                                            .concat(i(), " ")
                                            .concat(n, "\n"),
                                        r = e.matchInfo.team.toUpperCase(),
                                        l = e.matchInfo.home ? r : e.matchInfo.opponent,
                                        o = e.matchInfo.home ? e.matchInfo.opponent : r;
                                    (t += "".concat(l, " \ud83c\udd9a ").concat(o, "\n").concat(e.matchInfo.competition, " ").concat(e.matchInfo.date, "\n\n")),
                                        e.playerGrid.forEach(function (n) {
                                            n.forEach(function (n, r, a) {
                                                if (("" === n && (t += "\ud83d\udfe9"), n.id)) {
                                                    if (
                                                        !1 ===
                                                        e.players.find(function (e) {
                                                            return e.id === n.id;
                                                        }).solved
                                                    )
                                                        return (t += "\u2753"), void (r + 1 === a.length && (t += "\n"));
                                                    switch (
                                                        e.players.find(function (e) {
                                                            return e.id === n.id;
                                                        }).guesses.length
                                                    ) {
                                                        case 1:
                                                        default:
                                                            t += "1\ufe0f\u20e3";
                                                            break;
                                                        case 2:
                                                            t += "2\ufe0f\u20e3";
                                                            break;
                                                        case 3:
                                                            t += "3\ufe0f\u20e3";
                                                            break;
                                                        case 4:
                                                            t += "4\ufe0f\u20e3";
                                                            break;
                                                        case 5:
                                                            t += "5\ufe0f\u20e3";
                                                            break;
                                                        case 6:
                                                            t += "6\ufe0f\u20e3";
                                                    }
                                                }
                                                r + 1 === a.length && (t += "\n");
                                            });
                                        });
                                    var u,
                                        s = { text: "".concat(t, "\n").concat(e.hashtags ? "".concat(e.hashtags, "\n") : ""), url: "https://missing11.com" };
                                    (u = s),
                                        navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(u)
                                            ? (navigator.clipboard.writeText(s.text + "https://missing11.com"), a(!0), window.dataLayer.push({ event: "share_copied", game_count: e.gameCount }))
                                            : navigator.share(s).then(function () {
                                                  return window.dataLayer.push({ event: "share", game_count: e.gameCount });
                                              });
                                },
                                children: "SHARE",
                            }),
                            (0, M.jsx)("div", { children: (0, M.jsx)("a", { style: { fontWeight: "bold", fontSize: 20 }, target: "_blank", href: "https://missing11.com/who-are-ya/", children: "Play Who Are Ya?" }) }),
                            t ? (0, M.jsx)("h3", { children: "Copied results to your clipboard" }) : null,
                        ],
                    });
                }
                function A(e, n) {
                    if (n.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + n.length + " present");
                }
                function R(e) {
                    A(1, arguments);
                    var n = Object.prototype.toString.call(e);
                    return e instanceof Date || ("object" === typeof e && "[object Date]" === n)
                        ? new Date(e.getTime())
                        : "number" === typeof e || "[object Number]" === n
                        ? new Date(e)
                        : (("string" !== typeof e && "[object String]" !== n) ||
                              "undefined" === typeof console ||
                              (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn(new Error().stack)),
                          new Date(NaN));
                }
                function D(e, n) {
                    A(2, arguments);
                    var t = R(e),
                        r = R(n),
                        a = t.getTime() - r.getTime();
                    return a < 0 ? -1 : a > 0 ? 1 : a;
                }
                function I(e, n) {
                    A(2, arguments);
                    var t = R(e),
                        r = R(n);
                    return t.getFullYear() - r.getFullYear();
                }
                function F(e, n) {
                    A(2, arguments);
                    var t = R(e),
                        r = R(n),
                        a = D(t, r),
                        i = Math.abs(I(t, r));
                    t.setFullYear(1584), r.setFullYear(1584);
                    var l = D(t, r) === -a,
                        o = a * (i - Number(l));
                    return 0 === o ? 0 : o;
                }
                function B(e, n) {
                    A(2, arguments);
                    var t = R(e),
                        r = R(n),
                        a = t.getFullYear() - r.getFullYear(),
                        i = t.getMonth() - r.getMonth();
                    return 12 * a + i;
                }
                function U(e) {
                    A(1, arguments);
                    var n = R(e);
                    return n.setHours(23, 59, 59, 999), n;
                }
                function V(e) {
                    A(1, arguments);
                    var n = R(e),
                        t = n.getMonth();
                    return n.setFullYear(n.getFullYear(), t + 1, 0), n.setHours(23, 59, 59, 999), n;
                }
                function H(e) {
                    A(1, arguments);
                    var n = R(e);
                    return U(n).getTime() === V(n).getTime();
                }
                function W(e, n) {
                    A(2, arguments);
                    var t,
                        r = R(e),
                        a = R(n),
                        i = D(r, a),
                        l = Math.abs(B(r, a));
                    if (l < 1) t = 0;
                    else {
                        1 === r.getMonth() && r.getDate() > 27 && r.setDate(30), r.setMonth(r.getMonth() - i * l);
                        var o = D(r, a) === -i;
                        H(R(e)) && 1 === l && 1 === D(e, a) && (o = !1), (t = i * (l - Number(o)));
                    }
                    return 0 === t ? 0 : t;
                }
                function G(e) {
                    var n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                    return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
                }
                function K(e) {
                    A(1, arguments);
                    var n = R(e);
                    return n.setHours(0, 0, 0, 0), n;
                }
                var $ = 864e5;
                function Q(e, n) {
                    A(2, arguments);
                    var t = K(e),
                        r = K(n),
                        a = t.getTime() - G(t),
                        i = r.getTime() - G(r);
                    return Math.round((a - i) / $);
                }
                function q(e, n) {
                    var t =
                        e.getFullYear() - n.getFullYear() ||
                        e.getMonth() - n.getMonth() ||
                        e.getDate() - n.getDate() ||
                        e.getHours() - n.getHours() ||
                        e.getMinutes() - n.getMinutes() ||
                        e.getSeconds() - n.getSeconds() ||
                        e.getMilliseconds() - n.getMilliseconds();
                    return t < 0 ? -1 : t > 0 ? 1 : t;
                }
                function Y(e, n) {
                    A(2, arguments);
                    var t = R(e),
                        r = R(n),
                        a = q(t, r),
                        i = Math.abs(Q(t, r));
                    t.setDate(t.getDate() - a * i);
                    var l = Number(q(t, r) === -a),
                        o = a * (i - l);
                    return 0 === o ? 0 : o;
                }
                Math.pow(10, 8);
                var J = 36e5;
                function X(e, n) {
                    return A(2, arguments), R(e).getTime() - R(n).getTime();
                }
                var Z,
                    ee = {
                        ceil: Math.ceil,
                        round: Math.round,
                        floor: Math.floor,
                        trunc: function (e) {
                            return e < 0 ? Math.ceil(e) : Math.floor(e);
                        },
                    };
                function ne(e) {
                    return e ? ee[e] : ee.trunc;
                }
                function te(e, n, t) {
                    A(2, arguments);
                    var r = X(e, n) / J;
                    return ne(null === t || void 0 === t ? void 0 : t.roundingMethod)(r);
                }
                function re(e, n, t) {
                    A(2, arguments);
                    var r = X(e, n) / 6e4;
                    return ne(null === t || void 0 === t ? void 0 : t.roundingMethod)(r);
                }
                function ae(e, n, t) {
                    A(2, arguments);
                    var r = X(e, n) / 1e3;
                    return ne(null === t || void 0 === t ? void 0 : t.roundingMethod)(r);
                }
                function ie(e) {
                    return A(1, arguments), e instanceof Date || ("object" === typeof e && "[object Date]" === Object.prototype.toString.call(e));
                }
                function le(e) {
                    if ((A(1, arguments), !ie(e) && "number" !== typeof e)) return !1;
                    var n = R(e);
                    return !isNaN(Number(n));
                }
                function oe(e) {
                    if (null === e || !0 === e || !1 === e) return NaN;
                    var n = Number(e);
                    return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
                }
                function ue(e, n) {
                    A(2, arguments);
                    var t = R(e),
                        r = oe(n);
                    return isNaN(r) ? new Date(NaN) : r ? (t.setDate(t.getDate() + r), t) : t;
                }
                function se(e, n) {
                    A(2, arguments);
                    var t = oe(n);
                    return ue(e, -t);
                }
                function ce(e, n) {
                    A(2, arguments);
                    var t = R(e),
                        r = oe(n);
                    if (isNaN(r)) return new Date(NaN);
                    if (!r) return t;
                    var a = t.getDate(),
                        i = new Date(t.getTime());
                    i.setMonth(t.getMonth() + r + 1, 0);
                    var l = i.getDate();
                    return a >= l ? i : (t.setFullYear(i.getFullYear(), i.getMonth(), a), t);
                }
                function de(e, n) {
                    A(2, arguments);
                    var t = oe(n);
                    return ce(e, -t);
                }
                function fe(e, n) {
                    if ((A(2, arguments), !n || "object" !== typeof n)) return new Date(NaN);
                    var t = n.years ? oe(n.years) : 0,
                        r = n.months ? oe(n.months) : 0,
                        a = n.weeks ? oe(n.weeks) : 0,
                        i = n.days ? oe(n.days) : 0,
                        l = n.hours ? oe(n.hours) : 0,
                        o = n.minutes ? oe(n.minutes) : 0,
                        u = n.seconds ? oe(n.seconds) : 0,
                        s = de(e, r + 12 * t),
                        c = se(s, i + 7 * a),
                        d = o + 60 * l,
                        f = u + 60 * d,
                        p = 1e3 * f,
                        m = new Date(c.getTime() - p);
                    return m;
                }
                function pe(e) {
                    var n = e.start,
                        t = e.end;
                    A(1, arguments);
                    var r = R(n),
                        a = R(t);
                    if (!le(r)) throw new RangeError("Start Date is invalid");
                    if (!le(a)) throw new RangeError("End Date is invalid");
                    var i = { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 },
                        l = D(r, a);
                    i.years = Math.abs(F(r, a));
                    var o = fe(r, { years: l * i.years });
                    i.months = Math.abs(W(o, a));
                    var u = fe(o, { months: l * i.months });
                    i.days = Math.abs(Y(u, a));
                    var s = fe(u, { days: l * i.days });
                    i.hours = Math.abs(te(s, a));
                    var c = fe(s, { hours: l * i.hours });
                    i.minutes = Math.abs(re(c, a));
                    var d = fe(c, { minutes: l * i.minutes });
                    return (i.seconds = Math.abs(ae(d, a))), i;
                }
                !(function (e) {
                    (e[(e.Playing = 0)] = "Playing"), (e[(e.Won = 1)] = "Won"), (e[(e.Lost = 2)] = "Lost");
                })(Z || (Z = {}));
                var me = g,
                    he = (function () {
                        var e = new Date().setHours(0, 0, 0, 0) - u.setHours(0, 0, 0, 0);
                        return Math.round(e / 864e5);
                    })();
                var ge,
                    ye = function (e) {
                        window.dataLayer = window.dataLayer || [];
                        var n = o((0, r.useState)(Z.Playing), 2),
                            t = n[0],
                            a = n[1],
                            i = o((0, r.useState)([]), 2),
                            l = (i[0], i[1], o((0, r.useState)(""), 2)),
                            u =
                                (l[0],
                                l[1],
                                o(
                                    (0, r.useState)(function () {
                                        return me[he];
                                    }),
                                    2
                                )),
                            s = u[0],
                            c = (u[1], o((0, r.useState)([]), 2)),
                            f = c[0],
                            p = c[1],
                            h = o((0, r.useState)([]), 2),
                            g = h[0],
                            y = h[1],
                            v = o((0, r.useState)(-1), 2),
                            b = v[0],
                            w = v[1],
                            k = o((0, r.useState)(1), 2),
                            x = (k[0], k[1], o((0, r.useState)(!0), 2)),
                            E = x[0],
                            C = x[1],
                            _ = o((0, r.useState)(!1), 2),
                            L = _[0],
                            P = _[1],
                            N = o((0, r.useState)(), 2),
                            O = N[0],
                            j = N[1],
                            A = o((0, r.useState)(), 2),
                            R = A[0],
                            D = A[1],
                            I = he + 1;
                        return (
                            (0, r.useEffect)(
                                function () {
                                    s.players &&
                                        (y(s.players),
                                        p(
                                            s.players
                                                .flatMap(function (e) {
                                                    return e;
                                                })
                                                .filter(function (e) {
                                                    return e;
                                                })
                                        ));
                                },
                                [s]
                            ),
                            (0, r.useEffect)(
                                function () {
                                    0 !== f.length &&
                                        (f.every(function (e) {
                                            return e.solved;
                                        })
                                            ? (a(Z.Won),
                                              D(pe({ start: O, end: Date.now() })),
                                              window.dataLayer.push({
                                                  event: "game_won",
                                                  total_guesses: f
                                                      .map(function (e) {
                                                          return e.guesses.length;
                                                      })
                                                      .reduce(function (e, n) {
                                                          return e + n;
                                                      }, 0),
                                                  game_count: I,
                                              }))
                                            : f.every(function (e) {
                                                  return void 0 !== e.solved;
                                              }) &&
                                              (a(Z.Lost),
                                              D(pe({ start: O, end: Date.now() })),
                                              window.dataLayer.push({
                                                  event: "game_lost",
                                                  correct_players: f.filter(function (e) {
                                                      return e.solved;
                                                  }).length,
                                                  total_guesses: f
                                                      .map(function (e) {
                                                          return e.guesses.length;
                                                      })
                                                      .reduce(function (e, n) {
                                                          return e + n;
                                                      }, 0),
                                                  game_count: I,
                                              })));
                                },
                                [f]
                            ),
                            (0, M.jsxs)("div", {
                                className: "Team",
                                style: { display: e.hidden ? "none" : "block" },
                                children: [
                                    (0, M.jsxs)("div", {
                                        className: "match-info-container",
                                        style: { display: b > 0 ? "none" : "" },
                                        children: [
                                            (0, M.jsx)("a", {
                                                href: "#",
                                                onClick: function () {
                                                    return P(!0);
                                                },
                                                children: "Match Info",
                                            }),
                                            (0, M.jsx)("a", {
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https://twitter.com/search?q=Missing%2011%20".concat(I, "%20").concat(s.team, "%20").concat(encodeURIComponent(s.date), "&f=live"),
                                                children: "Twitter Scores",
                                            }),
                                        ],
                                    }),
                                    (0, M.jsxs)("div", {
                                        className: "pitch",
                                        style: { display: b > 0 ? "none" : "block" },
                                        children: [
                                            (0, M.jsx)("div", {
                                                className: "players",
                                                children: g.map(function (e, n) {
                                                    return (0, M.jsx)(
                                                        "div",
                                                        {
                                                            className: "player-row",
                                                            children:
                                                                null === e || void 0 === e
                                                                    ? void 0
                                                                    : e.map(function (e, n) {
                                                                          var t = e.id,
                                                                              r = e.name,
                                                                              a =
                                                                                  (e.guesses,
                                                                                  f.find(function (e) {
                                                                                      return e.id === t;
                                                                                  }));
                                                                          return (0, M.jsx)(
                                                                              "div",
                                                                              {
                                                                                  className: "player-container",
                                                                                  children: t
                                                                                      ? (0, M.jsxs)("div", {
                                                                                            className: "player ".concat(!1 === a.solved ? "unsolved" : a.solved ? "solved" : ""),
                                                                                            onClick: function () {
                                                                                                return (function (e) {
                                                                                                    void 0 ===
                                                                                                        f.find(function (n) {
                                                                                                            return n.id === e;
                                                                                                        }).solved && w(e);
                                                                                                })(t);
                                                                                            },
                                                                                            children: [
                                                                                                (0, M.jsxs)("div", {
                                                                                                    className: "shirt-container",
                                                                                                    children: [
                                                                                                        (0, M.jsx)(S, { className: "Shirt" }),
                                                                                                        (0, M.jsx)("div", { className: "number", children: !1 !== a.solved && a.guesses ? a.guesses.length : "?" }),
                                                                                                        (0, M.jsx)("div", {
                                                                                                            className: "player-name-length",
                                                                                                            children: r.split(" ").map(function (e, n, t) {
                                                                                                                return "".concat(e.length).concat(t.length !== n + 1 ? "," : "");
                                                                                                            }),
                                                                                                        }),
                                                                                                    ],
                                                                                                }),
                                                                                                (0, M.jsx)("div", {
                                                                                                    className: "player-name",
                                                                                                    children: a.solved
                                                                                                        ? r
                                                                                                        : r.split("").map(function (e) {
                                                                                                              return /[A-Za-z]/.test(e) ? "*" : e;
                                                                                                          }),
                                                                                                }),
                                                                                            ],
                                                                                        })
                                                                                      : null,
                                                                              },
                                                                              "player-".concat(n)
                                                                          );
                                                                      }),
                                                        },
                                                        "row-".concat(n)
                                                    );
                                                }),
                                            }),
                                            (0, M.jsx)("div", {
                                                className: "Footer",
                                                children: (0, M.jsx)("p", {
                                                    children: (0, M.jsxs)("small", {
                                                        children: [
                                                            (0, M.jsxs)("span", {
                                                                children: [
                                                                    (0, M.jsx)("span", { style: { paddingRight: 10 }, children: "\xa92022" }),
                                                                    (0, M.jsx)("a", { style: { paddingRight: 10 }, href: "/privacy-policy.html", target: "_blank", children: "Privacy" }),
                                                                ],
                                                            }),
                                                            (0, M.jsx)("a", { style: { paddingRight: 10 }, href: "mailto:%64%61%6E%40%6D%69%73%73%69%6E%67%31%31%2E%63%6F%6D", target: "_blank", children: "Contact" }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    b > 0
                                        ? (0, M.jsx)(T, {
                                              maxGuesses: e.maxGuesses,
                                              closeGame: function () {
                                                  return w(-1);
                                              },
                                              hard: e.hard,
                                              dark: e.dark,
                                              player: f.find(function (e) {
                                                  return e.id === b;
                                              }),
                                              setPlayerSolved: function (e, n) {
                                                  p(function (t) {
                                                      return t.map(function (t) {
                                                          return e === t.id ? m(m({}, t), {}, { solved: n }) : t;
                                                      });
                                                  });
                                              },
                                              gameCount: I,
                                              addPlayerGuess: function (e, n) {
                                                  p(function (t) {
                                                      return t.map(function (t) {
                                                          return t.id === e ? m(m({}, t), {}, { guesses: [].concat(d(t.guesses || []), [n]) }) : t;
                                                      });
                                                  });
                                              },
                                          })
                                        : null,
                                    t !== Z.Playing
                                        ? (0, M.jsx)(z, {
                                              dark: e.dark,
                                              players: f,
                                              playerGrid: g,
                                              gameCount: he + 1,
                                              won: t === Z.Won,
                                              matchInfo: { team: s.team, opponent: s.opponent, competition: s.competition, date: s.date, home: "home" === s.homeOrAway },
                                              hashtags: s.hashtags,
                                              interval: R,
                                          })
                                        : null,
                                    L
                                        ? (0, M.jsxs)(M.Fragment, {
                                              children: [
                                                  (0, M.jsx)("div", { className: "backdrop" }),
                                                  (0, M.jsxs)("div", {
                                                      className: "intro",
                                                      children: [
                                                          (0, M.jsx)("h2", { children: "This Game" }),
                                                          (0, M.jsx)("div", { children: s.title }),
                                                          (0, M.jsx)("div", { children: s.competition }),
                                                          (0, M.jsx)("div", { children: s.location }),
                                                          (0, M.jsx)("div", { children: s.date }),
                                                          (0, M.jsx)("button", {
                                                              style: {
                                                                  marginTop: "20px",
                                                                  fontSize: "20px",
                                                                  backgroundColor: "rgb(30 116 33)",
                                                                  color: "white",
                                                                  border: "2px solid rgba(0, 0, 0, 0.3)",
                                                                  padding: "10px 30px",
                                                                  fontWeight: "bold",
                                                                  cursor: "pointer",
                                                              },
                                                              onClick: function () {
                                                                  P(!1);
                                                              },
                                                              children: "BACK",
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : null,
                                    E
                                        ? (0, M.jsxs)(M.Fragment, {
                                              children: [
                                                  (0, M.jsx)("div", { className: "backdrop" }),
                                                  (0, M.jsxs)("div", {
                                                      className: "intro",
                                                      children: [
                                                          (0, M.jsx)("h2", { children: "Kick Off" }),
                                                          (0, M.jsx)("div", { style: { marginBottom: 10 }, children: "Can you guess the players in this Missing 11?" }),
                                                          (0, M.jsx)("div", { children: s.title }),
                                                          (0, M.jsx)("div", { children: s.competition }),
                                                          (0, M.jsx)("div", { children: s.location }),
                                                          (0, M.jsx)("div", { children: s.date }),
                                                          (0, M.jsx)("button", {
                                                              style: {
                                                                  marginTop: "20px",
                                                                  fontSize: "20px",
                                                                  backgroundColor: "rgb(30 116 33)",
                                                                  color: "white",
                                                                  border: "2px solid rgba(0, 0, 0, 0.3)",
                                                                  padding: "10px 30px",
                                                                  fontWeight: "bold",
                                                                  cursor: "pointer",
                                                              },
                                                              onClick: function () {
                                                                  C(!1), j(new Date());
                                                              },
                                                              children: "PLAY",
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            })
                        );
                    };
                function ve() {
                    return (0, M.jsxs)("div", {
                        className: "App-about",
                        children: [
                            (0, M.jsxs)("p", {
                                children: [
                                    "Can you remember all 11 football players that played in a specific football game in history? ",
                                    (0, M.jsx)("i", { children: "Missing 11" }),
                                    " is a game that challenges you to complete the starting lineup. Each player you select in the lineup becomes a mini football wordle style game based on the viral word game\xa0",
                                    (0, M.jsxs)("a", { href: "https://www.powerlanguage.co.uk/wordle/", children: [(0, M.jsx)("i", { children: "Wordle" }), "."] }),
                                ],
                            }),
                            (0, M.jsxs)("p", { children: ["You get ", 6, " tries to guess each footballer.", (0, M.jsx)("br", {}), "After each guess, you get Mastermind-style feedback."] }),
                            (0, M.jsx)("hr", {}),
                            (0, M.jsx)(O, {
                                rowState: P.LockedIn,
                                wordLength: 5,
                                cluedLetters: [
                                    { clue: k.Absent, letter: "j" },
                                    { clue: k.Absent, letter: "o" },
                                    { clue: k.Correct, letter: "n" },
                                    { clue: k.Elsewhere, letter: "e" },
                                    { clue: k.Absent, letter: "s" },
                                ],
                                playerName: "jones",
                            }),
                            (0, M.jsxs)("p", { children: [(0, M.jsx)("b", { children: "J" }), " and ", (0, M.jsx)("b", { children: "O" }), " aren't in the target word at all."] }),
                            (0, M.jsxs)("p", {
                                children: [
                                    (0, M.jsx)("b", { className: "green-bg", children: "N" }),
                                    " is correct! The third letter is",
                                    " ",
                                    (0, M.jsx)("b", { className: "green-bg", children: "N" }),
                                    ".",
                                    (0, M.jsx)("br", {}),
                                    (0, M.jsx)("strong", { children: "(There may still be a second N in the word.)" }),
                                ],
                            }),
                            (0, M.jsxs)("p", {
                                children: [
                                    (0, M.jsx)("b", { className: "yellow-bg", children: "E" }),
                                    " occurs ",
                                    (0, M.jsx)("em", { children: "elsewhere" }),
                                    " in the target word.",
                                    (0, M.jsx)("br", {}),
                                    (0, M.jsx)("strong", { children: "(Perhaps more than once. \ud83e\udd14)" }),
                                ],
                            }),
                            (0, M.jsx)("hr", {}),
                            (0, M.jsxs)("p", { children: ["Let's change the ", (0, M.jsx)("b", { children: "K" }), " in our next guess:"] }),
                            (0, M.jsx)(O, {
                                rowState: P.LockedIn,
                                wordLength: 4,
                                cluedLetters: [
                                    { clue: k.Correct, letter: "d" },
                                    { clue: k.Correct, letter: "a" },
                                    { clue: k.Correct, letter: "r" },
                                    { clue: k.Absent, letter: "k" },
                                ],
                                annotation: "So close!",
                                playerName: "dart",
                            }),
                            (0, M.jsx)(O, {
                                rowState: P.LockedIn,
                                wordLength: 4,
                                cluedLetters: [
                                    { clue: k.Correct, letter: "d" },
                                    { clue: k.Correct, letter: "a" },
                                    { clue: k.Correct, letter: "r" },
                                    { clue: k.Correct, letter: "t" },
                                ],
                                annotation: "Got it!",
                                playerName: "dart",
                            }),
                        ],
                    });
                }
                var be = ["title", "titleId"];
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                function ke(e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                r,
                                a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, n);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
                    }
                    return a;
                }
                function Se(e, n) {
                    var t = e.title,
                        a = e.titleId,
                        i = ke(e, be);
                    return r.createElement(
                        "svg",
                        we({ xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ref: n, "aria-labelledby": a }, i),
                        t ? r.createElement("title", { id: a }, t) : null,
                        ge ||
                            (ge = r.createElement("path", {
                                d:
                                    "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                            }))
                    );
                }
                var xe = r.forwardRef(Se);
                t.p;
                function Ee(e, n) {
                    var t = o(
                            (0, r.useState)(function () {
                                try {
                                    var t = window.localStorage.getItem(e);
                                    return t ? JSON.parse(t) : n;
                                } catch (r) {
                                    return n;
                                }
                            }),
                            2
                        ),
                        a = t[0],
                        i = t[1];
                    return [
                        a,
                        function (n) {
                            try {
                                var t = n instanceof Function ? n(a) : n;
                                i(t), window.localStorage.setItem(e, JSON.stringify(t));
                            } catch (r) {}
                        },
                    ];
                }
                var Ce = function () {
                    var e = o((0, r.useState)("game"), 2),
                        n = e[0],
                        t = e[1],
                        a = o(Ee("dark", window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches), 2),
                        i = a[0],
                        l = a[1],
                        u = o(Ee("hard", !1), 2),
                        s = u[0],
                        c = u[1];
                    return (
                        (0, r.useEffect)(
                            function () {
                                (document.body.className = i ? "dark" : ""),
                                    setTimeout(function () {
                                        document.body.style.transition = "0.3s background-color ease-out";
                                    }, 1);
                            },
                            [i]
                        ),
                        (0, M.jsxs)("div", {
                            className: "App-container",
                            children: [
                                (0, M.jsx)("div", {
                                    className: "Header",
                                    children: (0, M.jsxs)("div", {
                                        className: "header-inner",
                                        children: [
                                            (0, M.jsx)("div", { className: "top-left", children: (0, M.jsx)("a", { href: "https://twitter.com/missing11_", target: "_blank", rel: "noreferrer", children: (0, M.jsx)(xe, {}) }) }),
                                            (0, M.jsx)("h1", { children: "Bagual 11" }),
                                            (0, M.jsx)("div", {
                                                className: "top-right",
                                                children:
                                                    "game" !== n
                                                        ? (0, M.jsx)("a", {
                                                              className: "emoji-link",
                                                              href: "#",
                                                              onClick: function () {
                                                                  return t("game");
                                                              },
                                                              title: "Close",
                                                              "aria-label": "Close",
                                                              children: "\u274c",
                                                          })
                                                        : (0, M.jsxs)(M.Fragment, {
                                                              children: [
                                                                  (0, M.jsx)("a", {
                                                                      className: "emoji-link",
                                                                      href: "#",
                                                                      onClick: function () {
                                                                          return t("about");
                                                                      },
                                                                      title: "About",
                                                                      "aria-label": "About",
                                                                      children: "\u2753",
                                                                  }),
                                                                  (0, M.jsx)("a", {
                                                                      className: "emoji-link",
                                                                      href: "#",
                                                                      onClick: function () {
                                                                          return t("settings");
                                                                      },
                                                                      title: "Settings",
                                                                      "aria-label": "Settings",
                                                                      children: "\u2699\ufe0f",
                                                                  }),
                                                              ],
                                                          }),
                                            }),
                                        ],
                                    }),
                                }),
                                "about" === n && (0, M.jsx)(ve, {}),
                                "settings" === n &&
                                    (0, M.jsx)("div", {
                                        className: "Settings",
                                        children: (0, M.jsxs)("div", {
                                            className: "Settings-content",
                                            children: [
                                                (0, M.jsxs)("div", {
                                                    className: "Settings-setting",
                                                    children: [
                                                        (0, M.jsx)("input", {
                                                            id: "dark-setting",
                                                            type: "checkbox",
                                                            checked: i,
                                                            onChange: function () {
                                                                return l(function (e) {
                                                                    return !e;
                                                                });
                                                            },
                                                        }),
                                                        (0, M.jsx)("label", { htmlFor: "dark-setting", children: "Dark theme" }),
                                                    ],
                                                }),
                                                (0, M.jsxs)("div", {
                                                    className: "Settings-setting",
                                                    children: [
                                                        (0, M.jsx)("input", {
                                                            id: "hard-setting",
                                                            type: "checkbox",
                                                            checked: s,
                                                            onChange: function () {
                                                                return c(function (e) {
                                                                    return !e;
                                                                });
                                                            },
                                                        }),
                                                        (0, M.jsx)("label", { htmlFor: "hard-setting", children: "Hard mode (must use all clues)" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, M.jsx)(ye, { maxGuesses: 6, hidden: "game" !== n, hard: s, dark: i }),
                            ],
                        })
                    );
                };
                a.render((0, M.jsx)(r.StrictMode, { children: (0, M.jsx)(Ce, {}) }), document.getElementById("root"));
            },
            843: function (e) {
                var n = Object.getOwnPropertySymbols,
                    t = Object.prototype.hasOwnProperty,
                    r = Object.prototype.propertyIsEnumerable;
                function a(e) {
                    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e);
                }
                e.exports = (function () {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
                        for (var n = {}, t = 0; t < 10; t++) n["_" + String.fromCharCode(t)] = t;
                        if (
                            "0123456789" !==
                            Object.getOwnPropertyNames(n)
                                .map(function (e) {
                                    return n[e];
                                })
                                .join("")
                        )
                            return !1;
                        var r = {};
                        return (
                            "abcdefghijklmnopqrst".split("").forEach(function (e) {
                                r[e] = e;
                            }),
                            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                        );
                    } catch (a) {
                        return !1;
                    }
                })()
                    ? Object.assign
                    : function (e, i) {
                          for (var l, o, u = a(e), s = 1; s < arguments.length; s++) {
                              for (var c in (l = Object(arguments[s]))) t.call(l, c) && (u[c] = l[c]);
                              if (n) {
                                  o = n(l);
                                  for (var d = 0; d < o.length; d++) r.call(l, o[d]) && (u[o[d]] = l[o[d]]);
                              }
                          }
                          return u;
                      };
            },
            534: function (e, n, t) {
                var r = t(313),
                    a = t(843),
                    i = t(224);
                function l(e) {
                    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
                    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
                }
                if (!r) throw Error(l(227));
                var o = new Set(),
                    u = {};
                function s(e, n) {
                    c(e, n), c(e + "Capture", n);
                }
                function c(e, n) {
                    for (u[e] = n, e = 0; e < n.length; e++) o.add(n[e]);
                }
                var d = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = Object.prototype.hasOwnProperty,
                    m = {},
                    h = {};
                function g(e, n, t, r, a, i, l) {
                    (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
                        (this.attributeName = r),
                        (this.attributeNamespace = a),
                        (this.mustUseProperty = t),
                        (this.propertyName = e),
                        (this.type = n),
                        (this.sanitizeURL = i),
                        (this.removeEmptyString = l);
                }
                var y = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
                    y[e] = new g(e, 0, !1, e, null, !1, !1);
                }),
                    [
                        ["acceptCharset", "accept-charset"],
                        ["className", "class"],
                        ["htmlFor", "for"],
                        ["httpEquiv", "http-equiv"],
                    ].forEach(function (e) {
                        var n = e[0];
                        y[n] = new g(n, 1, !1, e[1], null, !1, !1);
                    }),
                    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
                        y[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
                    }),
                    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
                        y[e] = new g(e, 2, !1, e, null, !1, !1);
                    }),
                    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
                        .split(" ")
                        .forEach(function (e) {
                            y[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
                        }),
                    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
                        y[e] = new g(e, 3, !0, e, null, !1, !1);
                    }),
                    ["capture", "download"].forEach(function (e) {
                        y[e] = new g(e, 4, !1, e, null, !1, !1);
                    }),
                    ["cols", "rows", "size", "span"].forEach(function (e) {
                        y[e] = new g(e, 6, !1, e, null, !1, !1);
                    }),
                    ["rowSpan", "start"].forEach(function (e) {
                        y[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
                    });
                var v = /[\-:]([a-z])/g;
                function b(e) {
                    return e[1].toUpperCase();
                }
                function w(e, n, t, r) {
                    var a = y.hasOwnProperty(n) ? y[n] : null;
                    (null !== a ? 0 === a.type : !r && 2 < n.length && ("o" === n[0] || "O" === n[0]) && ("n" === n[1] || "N" === n[1])) ||
                        ((function (e, n, t, r) {
                            if (
                                null === n ||
                                "undefined" === typeof n ||
                                (function (e, n, t, r) {
                                    if (null !== t && 0 === t.type) return !1;
                                    switch (typeof n) {
                                        case "function":
                                        case "symbol":
                                            return !0;
                                        case "boolean":
                                            return !r && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                        default:
                                            return !1;
                                    }
                                })(e, n, t, r)
                            )
                                return !0;
                            if (r) return !1;
                            if (null !== t)
                                switch (t.type) {
                                    case 3:
                                        return !n;
                                    case 4:
                                        return !1 === n;
                                    case 5:
                                        return isNaN(n);
                                    case 6:
                                        return isNaN(n) || 1 > n;
                                }
                            return !1;
                        })(n, t, a, r) && (t = null),
                        r || null === a
                            ? (function (e) {
                                  return !!p.call(h, e) || (!p.call(m, e) && (f.test(e) ? (h[e] = !0) : ((m[e] = !0), !1)));
                              })(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
                            : a.mustUseProperty
                            ? (e[a.propertyName] = null === t ? 3 !== a.type && "" : t)
                            : ((n = a.attributeName), (r = a.attributeNamespace), null === t ? e.removeAttribute(n) : ((t = 3 === (a = a.type) || (4 === a && !0 === t) ? "" : "" + t), r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
                    .split(" ")
                    .forEach(function (e) {
                        var n = e.replace(v, b);
                        y[n] = new g(n, 1, !1, e, null, !1, !1);
                    }),
                    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
                        var n = e.replace(v, b);
                        y[n] = new g(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
                    }),
                    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
                        var n = e.replace(v, b);
                        y[n] = new g(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
                    }),
                    ["tabIndex", "crossOrigin"].forEach(function (e) {
                        y[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
                    }),
                    (y.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
                    ["src", "href", "action", "formAction"].forEach(function (e) {
                        y[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
                    });
                var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    S = 60103,
                    x = 60106,
                    E = 60107,
                    C = 60108,
                    _ = 60114,
                    L = 60109,
                    P = 60110,
                    N = 60112,
                    M = 60113,
                    O = 60120,
                    j = 60115,
                    T = 60116,
                    z = 60121,
                    A = 60128,
                    R = 60129,
                    D = 60130,
                    I = 60131;
                if ("function" === typeof Symbol && Symbol.for) {
                    var F = Symbol.for;
                    (S = F("react.element")),
                        (x = F("react.portal")),
                        (E = F("react.fragment")),
                        (C = F("react.strict_mode")),
                        (_ = F("react.profiler")),
                        (L = F("react.provider")),
                        (P = F("react.context")),
                        (N = F("react.forward_ref")),
                        (M = F("react.suspense")),
                        (O = F("react.suspense_list")),
                        (j = F("react.memo")),
                        (T = F("react.lazy")),
                        (z = F("react.block")),
                        F("react.scope"),
                        (A = F("react.opaque.id")),
                        (R = F("react.debug_trace_mode")),
                        (D = F("react.offscreen")),
                        (I = F("react.legacy_hidden"));
                }
                var B,
                    U = "function" === typeof Symbol && Symbol.iterator;
                function V(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = (U && e[U]) || e["@@iterator"]) ? e : null;
                }
                function H(e) {
                    if (void 0 === B)
                        try {
                            throw Error();
                        } catch (t) {
                            var n = t.stack.trim().match(/\n( *(at )?)/);
                            B = (n && n[1]) || "";
                        }
                    return "\n" + B + e;
                }
                var W = !1;
                function G(e, n) {
                    if (!e || W) return "";
                    W = !0;
                    var t = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (n)
                            if (
                                ((n = function () {
                                    throw Error();
                                }),
                                Object.defineProperty(n.prototype, "props", {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                "object" === typeof Reflect && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(n, []);
                                } catch (u) {
                                    var r = u;
                                }
                                Reflect.construct(e, [], n);
                            } else {
                                try {
                                    n.call();
                                } catch (u) {
                                    r = u;
                                }
                                e.call(n.prototype);
                            }
                        else {
                            try {
                                throw Error();
                            } catch (u) {
                                r = u;
                            }
                            e();
                        }
                    } catch (u) {
                        if (u && r && "string" === typeof u.stack) {
                            for (var a = u.stack.split("\n"), i = r.stack.split("\n"), l = a.length - 1, o = i.length - 1; 1 <= l && 0 <= o && a[l] !== i[o]; ) o--;
                            for (; 1 <= l && 0 <= o; l--, o--)
                                if (a[l] !== i[o]) {
                                    if (1 !== l || 1 !== o)
                                        do {
                                            if ((l--, 0 > --o || a[l] !== i[o])) return "\n" + a[l].replace(" at new ", " at ");
                                        } while (1 <= l && 0 <= o);
                                    break;
                                }
                        }
                    } finally {
                        (W = !1), (Error.prepareStackTrace = t);
                    }
                    return (e = e ? e.displayName || e.name : "") ? H(e) : "";
                }
                function K(e) {
                    switch (e.tag) {
                        case 5:
                            return H(e.type);
                        case 16:
                            return H("Lazy");
                        case 13:
                            return H("Suspense");
                        case 19:
                            return H("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return (e = G(e.type, !1));
                        case 11:
                            return (e = G(e.type.render, !1));
                        case 22:
                            return (e = G(e.type._render, !1));
                        case 1:
                            return (e = G(e.type, !0));
                        default:
                            return "";
                    }
                }
                function $(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case E:
                            return "Fragment";
                        case x:
                            return "Portal";
                        case _:
                            return "Profiler";
                        case C:
                            return "StrictMode";
                        case M:
                            return "Suspense";
                        case O:
                            return "SuspenseList";
                    }
                    if ("object" === typeof e)
                        switch (e.$$typeof) {
                            case P:
                                return (e.displayName || "Context") + ".Consumer";
                            case L:
                                return (e._context.displayName || "Context") + ".Provider";
                            case N:
                                var n = e.render;
                                return (n = n.displayName || n.name || ""), e.displayName || ("" !== n ? "ForwardRef(" + n + ")" : "ForwardRef");
                            case j:
                                return $(e.type);
                            case z:
                                return $(e._render);
                            case T:
                                (n = e._payload), (e = e._init);
                                try {
                                    return $(e(n));
                                } catch (t) {}
                        }
                    return null;
                }
                function Q(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "object":
                        case "string":
                        case "undefined":
                            return e;
                        default:
                            return "";
                    }
                }
                function q(e) {
                    var n = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n);
                }
                function Y(e) {
                    e._valueTracker ||
                        (e._valueTracker = (function (e) {
                            var n = q(e) ? "checked" : "value",
                                t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
                                r = "" + e[n];
                            if (!e.hasOwnProperty(n) && "undefined" !== typeof t && "function" === typeof t.get && "function" === typeof t.set) {
                                var a = t.get,
                                    i = t.set;
                                return (
                                    Object.defineProperty(e, n, {
                                        configurable: !0,
                                        get: function () {
                                            return a.call(this);
                                        },
                                        set: function (e) {
                                            (r = "" + e), i.call(this, e);
                                        },
                                    }),
                                    Object.defineProperty(e, n, { enumerable: t.enumerable }),
                                    {
                                        getValue: function () {
                                            return r;
                                        },
                                        setValue: function (e) {
                                            r = "" + e;
                                        },
                                        stopTracking: function () {
                                            (e._valueTracker = null), delete e[n];
                                        },
                                    }
                                );
                            }
                        })(e));
                }
                function J(e) {
                    if (!e) return !1;
                    var n = e._valueTracker;
                    if (!n) return !0;
                    var t = n.getValue(),
                        r = "";
                    return e && (r = q(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== t && (n.setValue(e), !0);
                }
                function X(e) {
                    if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body;
                    } catch (n) {
                        return e.body;
                    }
                }
                function Z(e, n) {
                    var t = n.checked;
                    return a({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != t ? t : e._wrapperState.initialChecked });
                }
                function ee(e, n) {
                    var t = null == n.defaultValue ? "" : n.defaultValue,
                        r = null != n.checked ? n.checked : n.defaultChecked;
                    (t = Q(null != n.value ? n.value : t)), (e._wrapperState = { initialChecked: r, initialValue: t, controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value });
                }
                function ne(e, n) {
                    null != (n = n.checked) && w(e, "checked", n, !1);
                }
                function te(e, n) {
                    ne(e, n);
                    var t = Q(n.value),
                        r = n.type;
                    if (null != t) "number" === r ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    n.hasOwnProperty("value") ? ae(e, n.type, t) : n.hasOwnProperty("defaultValue") && ae(e, n.type, Q(n.defaultValue)), null == n.checked && null != n.defaultChecked && (e.defaultChecked = !!n.defaultChecked);
                }
                function re(e, n, t) {
                    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
                        var r = n.type;
                        if (!(("submit" !== r && "reset" !== r) || (void 0 !== n.value && null !== n.value))) return;
                        (n = "" + e._wrapperState.initialValue), t || n === e.value || (e.value = n), (e.defaultValue = n);
                    }
                    "" !== (t = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== t && (e.name = t);
                }
                function ae(e, n, t) {
                    ("number" === n && X(e.ownerDocument) === e) || (null == t ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
                }
                function ie(e, n) {
                    return (
                        (e = a({ children: void 0 }, n)),
                        (n = (function (e) {
                            var n = "";
                            return (
                                r.Children.forEach(e, function (e) {
                                    null != e && (n += e);
                                }),
                                n
                            );
                        })(n.children)) && (e.children = n),
                        e
                    );
                }
                function le(e, n, t, r) {
                    if (((e = e.options), n)) {
                        n = {};
                        for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
                        for (t = 0; t < e.length; t++) (a = n.hasOwnProperty("$" + e[t].value)), e[t].selected !== a && (e[t].selected = a), a && r && (e[t].defaultSelected = !0);
                    } else {
                        for (t = "" + Q(t), n = null, a = 0; a < e.length; a++) {
                            if (e[a].value === t) return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
                            null !== n || e[a].disabled || (n = e[a]);
                        }
                        null !== n && (n.selected = !0);
                    }
                }
                function oe(e, n) {
                    if (null != n.dangerouslySetInnerHTML) throw Error(l(91));
                    return a({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
                }
                function ue(e, n) {
                    var t = n.value;
                    if (null == t) {
                        if (((t = n.children), (n = n.defaultValue), null != t)) {
                            if (null != n) throw Error(l(92));
                            if (Array.isArray(t)) {
                                if (!(1 >= t.length)) throw Error(l(93));
                                t = t[0];
                            }
                            n = t;
                        }
                        null == n && (n = ""), (t = n);
                    }
                    e._wrapperState = { initialValue: Q(t) };
                }
                function se(e, n) {
                    var t = Q(n.value),
                        r = Q(n.defaultValue);
                    null != t && ((t = "" + t) !== e.value && (e.value = t), null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)), null != r && (e.defaultValue = "" + r);
                }
                function ce(e) {
                    var n = e.textContent;
                    n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n);
                }
                var de = "http://www.w3.org/1999/xhtml",
                    fe = "http://www.w3.org/2000/svg";
                function pe(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml";
                    }
                }
                function me(e, n) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(n) : "http://www.w3.org/2000/svg" === e && "foreignObject" === n ? "http://www.w3.org/1999/xhtml" : e;
                }
                var he,
                    ge,
                    ye =
                        ((ge = function (e, n) {
                            if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = n;
                            else {
                                for ((he = he || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = he.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
                                for (; n.firstChild; ) e.appendChild(n.firstChild);
                            }
                        }),
                        "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
                            ? function (e, n, t, r) {
                                  MSApp.execUnsafeLocalFunction(function () {
                                      return ge(e, n);
                                  });
                              }
                            : ge);
                function ve(e, n) {
                    if (n) {
                        var t = e.firstChild;
                        if (t && t === e.lastChild && 3 === t.nodeType) return void (t.nodeValue = n);
                    }
                    e.textContent = n;
                }
                var be = {
                        animationIterationCount: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0,
                    },
                    we = ["Webkit", "ms", "Moz", "O"];
                function ke(e, n, t) {
                    return null == n || "boolean" === typeof n || "" === n ? "" : t || "number" !== typeof n || 0 === n || (be.hasOwnProperty(e) && be[e]) ? ("" + n).trim() : n + "px";
                }
                function Se(e, n) {
                    for (var t in ((e = e.style), n))
                        if (n.hasOwnProperty(t)) {
                            var r = 0 === t.indexOf("--"),
                                a = ke(t, n[t], r);
                            "float" === t && (t = "cssFloat"), r ? e.setProperty(t, a) : (e[t] = a);
                        }
                }
                Object.keys(be).forEach(function (e) {
                    we.forEach(function (n) {
                        (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (be[n] = be[e]);
                    });
                });
                var xe = a({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
                function Ee(e, n) {
                    if (n) {
                        if (xe[e] && (null != n.children || null != n.dangerouslySetInnerHTML)) throw Error(l(137, e));
                        if (null != n.dangerouslySetInnerHTML) {
                            if (null != n.children) throw Error(l(60));
                            if ("object" !== typeof n.dangerouslySetInnerHTML || !("__html" in n.dangerouslySetInnerHTML)) throw Error(l(61));
                        }
                        if (null != n.style && "object" !== typeof n.style) throw Error(l(62));
                    }
                }
                function Ce(e, n) {
                    if (-1 === e.indexOf("-")) return "string" === typeof n.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0;
                    }
                }
                function _e(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
                }
                var Le = null,
                    Pe = null,
                    Ne = null;
                function Me(e) {
                    if ((e = ra(e))) {
                        if ("function" !== typeof Le) throw Error(l(280));
                        var n = e.stateNode;
                        n && ((n = ia(n)), Le(e.stateNode, e.type, n));
                    }
                }
                function Oe(e) {
                    Pe ? (Ne ? Ne.push(e) : (Ne = [e])) : (Pe = e);
                }
                function je() {
                    if (Pe) {
                        var e = Pe,
                            n = Ne;
                        if (((Ne = Pe = null), Me(e), n)) for (e = 0; e < n.length; e++) Me(n[e]);
                    }
                }
                function Te(e, n) {
                    return e(n);
                }
                function ze(e, n, t, r, a) {
                    return e(n, t, r, a);
                }
                function Ae() {}
                var Re = Te,
                    De = !1,
                    Ie = !1;
                function Fe() {
                    (null === Pe && null === Ne) || (Ae(), je());
                }
                function Be(e, n) {
                    var t = e.stateNode;
                    if (null === t) return null;
                    var r = ia(t);
                    if (null === r) return null;
                    t = r[n];
                    e: switch (n) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
                            break e;
                        default:
                            e = !1;
                    }
                    if (e) return null;
                    if (t && "function" !== typeof t) throw Error(l(231, n, typeof t));
                    return t;
                }
                var Ue = !1;
                if (d)
                    try {
                        var Ve = {};
                        Object.defineProperty(Ve, "passive", {
                            get: function () {
                                Ue = !0;
                            },
                        }),
                            window.addEventListener("test", Ve, Ve),
                            window.removeEventListener("test", Ve, Ve);
                    } catch (ge) {
                        Ue = !1;
                    }
                function He(e, n, t, r, a, i, l, o, u) {
                    var s = Array.prototype.slice.call(arguments, 3);
                    try {
                        n.apply(t, s);
                    } catch (c) {
                        this.onError(c);
                    }
                }
                var We = !1,
                    Ge = null,
                    Ke = !1,
                    $e = null,
                    Qe = {
                        onError: function (e) {
                            (We = !0), (Ge = e);
                        },
                    };
                function qe(e, n, t, r, a, i, l, o, u) {
                    (We = !1), (Ge = null), He.apply(Qe, arguments);
                }
                function Ye(e) {
                    var n = e,
                        t = e;
                    if (e.alternate) for (; n.return; ) n = n.return;
                    else {
                        e = n;
                        do {
                            0 !== (1026 & (n = e).flags) && (t = n.return), (e = n.return);
                        } while (e);
                    }
                    return 3 === n.tag ? t : null;
                }
                function Je(e) {
                    if (13 === e.tag) {
                        var n = e.memoizedState;
                        if ((null === n && null !== (e = e.alternate) && (n = e.memoizedState), null !== n)) return n.dehydrated;
                    }
                    return null;
                }
                function Xe(e) {
                    if (Ye(e) !== e) throw Error(l(188));
                }
                function Ze(e) {
                    if (
                        ((e = (function (e) {
                            var n = e.alternate;
                            if (!n) {
                                if (null === (n = Ye(e))) throw Error(l(188));
                                return n !== e ? null : e;
                            }
                            for (var t = e, r = n; ; ) {
                                var a = t.return;
                                if (null === a) break;
                                var i = a.alternate;
                                if (null === i) {
                                    if (null !== (r = a.return)) {
                                        t = r;
                                        continue;
                                    }
                                    break;
                                }
                                if (a.child === i.child) {
                                    for (i = a.child; i; ) {
                                        if (i === t) return Xe(a), e;
                                        if (i === r) return Xe(a), n;
                                        i = i.sibling;
                                    }
                                    throw Error(l(188));
                                }
                                if (t.return !== r.return) (t = a), (r = i);
                                else {
                                    for (var o = !1, u = a.child; u; ) {
                                        if (u === t) {
                                            (o = !0), (t = a), (r = i);
                                            break;
                                        }
                                        if (u === r) {
                                            (o = !0), (r = a), (t = i);
                                            break;
                                        }
                                        u = u.sibling;
                                    }
                                    if (!o) {
                                        for (u = i.child; u; ) {
                                            if (u === t) {
                                                (o = !0), (t = i), (r = a);
                                                break;
                                            }
                                            if (u === r) {
                                                (o = !0), (r = i), (t = a);
                                                break;
                                            }
                                            u = u.sibling;
                                        }
                                        if (!o) throw Error(l(189));
                                    }
                                }
                                if (t.alternate !== r) throw Error(l(190));
                            }
                            if (3 !== t.tag) throw Error(l(188));
                            return t.stateNode.current === t ? e : n;
                        })(e)),
                        !e)
                    )
                        return null;
                    for (var n = e; ; ) {
                        if (5 === n.tag || 6 === n.tag) return n;
                        if (n.child) (n.child.return = n), (n = n.child);
                        else {
                            if (n === e) break;
                            for (; !n.sibling; ) {
                                if (!n.return || n.return === e) return null;
                                n = n.return;
                            }
                            (n.sibling.return = n.return), (n = n.sibling);
                        }
                    }
                    return null;
                }
                function en(e, n) {
                    for (var t = e.alternate; null !== n; ) {
                        if (n === e || n === t) return !0;
                        n = n.return;
                    }
                    return !1;
                }
                var nn,
                    tn,
                    rn,
                    an,
                    ln = !1,
                    on = [],
                    un = null,
                    sn = null,
                    cn = null,
                    dn = new Map(),
                    fn = new Map(),
                    pn = [],
                    mn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                        " "
                    );
                function hn(e, n, t, r, a) {
                    return { blockedOn: e, domEventName: n, eventSystemFlags: 16 | t, nativeEvent: a, targetContainers: [r] };
                }
                function gn(e, n) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            un = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            sn = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            cn = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            dn.delete(n.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            fn.delete(n.pointerId);
                    }
                }
                function yn(e, n, t, r, a, i) {
                    return null === e || e.nativeEvent !== i
                        ? ((e = hn(n, t, r, a, i)), null !== n && null !== (n = ra(n)) && tn(n), e)
                        : ((e.eventSystemFlags |= r), (n = e.targetContainers), null !== a && -1 === n.indexOf(a) && n.push(a), e);
                }
                function vn(e) {
                    var n = ta(e.target);
                    if (null !== n) {
                        var t = Ye(n);
                        if (null !== t)
                            if (13 === (n = t.tag)) {
                                if (null !== (n = Je(t)))
                                    return (
                                        (e.blockedOn = n),
                                        void an(e.lanePriority, function () {
                                            i.unstable_runWithPriority(e.priority, function () {
                                                rn(t);
                                            });
                                        })
                                    );
                            } else if (3 === n && t.stateNode.hydrate) return void (e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null);
                    }
                    e.blockedOn = null;
                }
                function bn(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var n = e.targetContainers; 0 < n.length; ) {
                        var t = et(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                        if (null !== t) return null !== (n = ra(t)) && tn(n), (e.blockedOn = t), !1;
                        n.shift();
                    }
                    return !0;
                }
                function wn(e, n, t) {
                    bn(e) && t.delete(n);
                }
                function kn() {
                    for (ln = !1; 0 < on.length; ) {
                        var e = on[0];
                        if (null !== e.blockedOn) {
                            null !== (e = ra(e.blockedOn)) && nn(e);
                            break;
                        }
                        for (var n = e.targetContainers; 0 < n.length; ) {
                            var t = et(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                            if (null !== t) {
                                e.blockedOn = t;
                                break;
                            }
                            n.shift();
                        }
                        null === e.blockedOn && on.shift();
                    }
                    null !== un && bn(un) && (un = null), null !== sn && bn(sn) && (sn = null), null !== cn && bn(cn) && (cn = null), dn.forEach(wn), fn.forEach(wn);
                }
                function Sn(e, n) {
                    e.blockedOn === n && ((e.blockedOn = null), ln || ((ln = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, kn)));
                }
                function xn(e) {
                    function n(n) {
                        return Sn(n, e);
                    }
                    if (0 < on.length) {
                        Sn(on[0], e);
                        for (var t = 1; t < on.length; t++) {
                            var r = on[t];
                            r.blockedOn === e && (r.blockedOn = null);
                        }
                    }
                    for (null !== un && Sn(un, e), null !== sn && Sn(sn, e), null !== cn && Sn(cn, e), dn.forEach(n), fn.forEach(n), t = 0; t < pn.length; t++) (r = pn[t]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < pn.length && null === (t = pn[0]).blockedOn; ) vn(t), null === t.blockedOn && pn.shift();
                }
                function En(e, n) {
                    var t = {};
                    return (t[e.toLowerCase()] = n.toLowerCase()), (t["Webkit" + e] = "webkit" + n), (t["Moz" + e] = "moz" + n), t;
                }
                var Cn = { animationend: En("Animation", "AnimationEnd"), animationiteration: En("Animation", "AnimationIteration"), animationstart: En("Animation", "AnimationStart"), transitionend: En("Transition", "TransitionEnd") },
                    _n = {},
                    Ln = {};
                function Pn(e) {
                    if (_n[e]) return _n[e];
                    if (!Cn[e]) return e;
                    var n,
                        t = Cn[e];
                    for (n in t) if (t.hasOwnProperty(n) && n in Ln) return (_n[e] = t[n]);
                    return e;
                }
                d &&
                    ((Ln = document.createElement("div").style),
                    "AnimationEvent" in window || (delete Cn.animationend.animation, delete Cn.animationiteration.animation, delete Cn.animationstart.animation),
                    "TransitionEvent" in window || delete Cn.transitionend.transition);
                var Nn = Pn("animationend"),
                    Mn = Pn("animationiteration"),
                    On = Pn("animationstart"),
                    jn = Pn("transitionend"),
                    Tn = new Map(),
                    zn = new Map(),
                    An = [
                        "abort",
                        "abort",
                        Nn,
                        "animationEnd",
                        Mn,
                        "animationIteration",
                        On,
                        "animationStart",
                        "canplay",
                        "canPlay",
                        "canplaythrough",
                        "canPlayThrough",
                        "durationchange",
                        "durationChange",
                        "emptied",
                        "emptied",
                        "encrypted",
                        "encrypted",
                        "ended",
                        "ended",
                        "error",
                        "error",
                        "gotpointercapture",
                        "gotPointerCapture",
                        "load",
                        "load",
                        "loadeddata",
                        "loadedData",
                        "loadedmetadata",
                        "loadedMetadata",
                        "loadstart",
                        "loadStart",
                        "lostpointercapture",
                        "lostPointerCapture",
                        "playing",
                        "playing",
                        "progress",
                        "progress",
                        "seeking",
                        "seeking",
                        "stalled",
                        "stalled",
                        "suspend",
                        "suspend",
                        "timeupdate",
                        "timeUpdate",
                        jn,
                        "transitionEnd",
                        "waiting",
                        "waiting",
                    ];
                function Rn(e, n) {
                    for (var t = 0; t < e.length; t += 2) {
                        var r = e[t],
                            a = e[t + 1];
                        (a = "on" + (a[0].toUpperCase() + a.slice(1))), zn.set(r, n), Tn.set(r, a), s(a, [r]);
                    }
                }
                (0, i.unstable_now)();
                var Dn = 8;
                function In(e) {
                    if (0 !== (1 & e)) return (Dn = 15), 1;
                    if (0 !== (2 & e)) return (Dn = 14), 2;
                    if (0 !== (4 & e)) return (Dn = 13), 4;
                    var n = 24 & e;
                    return 0 !== n
                        ? ((Dn = 12), n)
                        : 0 !== (32 & e)
                        ? ((Dn = 11), 32)
                        : 0 !== (n = 192 & e)
                        ? ((Dn = 10), n)
                        : 0 !== (256 & e)
                        ? ((Dn = 9), 256)
                        : 0 !== (n = 3584 & e)
                        ? ((Dn = 8), n)
                        : 0 !== (4096 & e)
                        ? ((Dn = 7), 4096)
                        : 0 !== (n = 4186112 & e)
                        ? ((Dn = 6), n)
                        : 0 !== (n = 62914560 & e)
                        ? ((Dn = 5), n)
                        : 67108864 & e
                        ? ((Dn = 4), 67108864)
                        : 0 !== (134217728 & e)
                        ? ((Dn = 3), 134217728)
                        : 0 !== (n = 805306368 & e)
                        ? ((Dn = 2), n)
                        : 0 !== (1073741824 & e)
                        ? ((Dn = 1), 1073741824)
                        : ((Dn = 8), e);
                }
                function Fn(e, n) {
                    var t = e.pendingLanes;
                    if (0 === t) return (Dn = 0);
                    var r = 0,
                        a = 0,
                        i = e.expiredLanes,
                        l = e.suspendedLanes,
                        o = e.pingedLanes;
                    if (0 !== i) (r = i), (a = Dn = 15);
                    else if (0 !== (i = 134217727 & t)) {
                        var u = i & ~l;
                        0 !== u ? ((r = In(u)), (a = Dn)) : 0 !== (o &= i) && ((r = In(o)), (a = Dn));
                    } else 0 !== (i = t & ~l) ? ((r = In(i)), (a = Dn)) : 0 !== o && ((r = In(o)), (a = Dn));
                    if (0 === r) return 0;
                    if (((r = t & (((0 > (r = 31 - Gn(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== n && n !== r && 0 === (n & l))) {
                        if ((In(n), a <= Dn)) return n;
                        Dn = a;
                    }
                    if (0 !== (n = e.entangledLanes)) for (e = e.entanglements, n &= r; 0 < n; ) (a = 1 << (t = 31 - Gn(n))), (r |= e[t]), (n &= ~a);
                    return r;
                }
                function Bn(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
                }
                function Un(e, n) {
                    switch (e) {
                        case 15:
                            return 1;
                        case 14:
                            return 2;
                        case 12:
                            return 0 === (e = Vn(24 & ~n)) ? Un(10, n) : e;
                        case 10:
                            return 0 === (e = Vn(192 & ~n)) ? Un(8, n) : e;
                        case 8:
                            return 0 === (e = Vn(3584 & ~n)) && 0 === (e = Vn(4186112 & ~n)) && (e = 512), e;
                        case 2:
                            return 0 === (n = Vn(805306368 & ~n)) && (n = 268435456), n;
                    }
                    throw Error(l(358, e));
                }
                function Vn(e) {
                    return e & -e;
                }
                function Hn(e) {
                    for (var n = [], t = 0; 31 > t; t++) n.push(e);
                    return n;
                }
                function Wn(e, n, t) {
                    e.pendingLanes |= n;
                    var r = n - 1;
                    (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(n = 31 - Gn(n))] = t);
                }
                var Gn = Math.clz32
                        ? Math.clz32
                        : function (e) {
                              return 0 === e ? 32 : (31 - ((Kn(e) / $n) | 0)) | 0;
                          },
                    Kn = Math.log,
                    $n = Math.LN2;
                var Qn = i.unstable_UserBlockingPriority,
                    qn = i.unstable_runWithPriority,
                    Yn = !0;
                function Jn(e, n, t, r) {
                    De || Ae();
                    var a = Zn,
                        i = De;
                    De = !0;
                    try {
                        ze(a, e, n, t, r);
                    } finally {
                        (De = i) || Fe();
                    }
                }
                function Xn(e, n, t, r) {
                    qn(Qn, Zn.bind(null, e, n, t, r));
                }
                function Zn(e, n, t, r) {
                    var a;
                    if (Yn)
                        if ((a = 0 === (4 & n)) && 0 < on.length && -1 < mn.indexOf(e)) (e = hn(null, e, n, t, r)), on.push(e);
                        else {
                            var i = et(e, n, t, r);
                            if (null === i) a && gn(e, r);
                            else {
                                if (a) {
                                    if (-1 < mn.indexOf(e)) return (e = hn(i, e, n, t, r)), void on.push(e);
                                    if (
                                        (function (e, n, t, r, a) {
                                            switch (n) {
                                                case "focusin":
                                                    return (un = yn(un, e, n, t, r, a)), !0;
                                                case "dragenter":
                                                    return (sn = yn(sn, e, n, t, r, a)), !0;
                                                case "mouseover":
                                                    return (cn = yn(cn, e, n, t, r, a)), !0;
                                                case "pointerover":
                                                    var i = a.pointerId;
                                                    return dn.set(i, yn(dn.get(i) || null, e, n, t, r, a)), !0;
                                                case "gotpointercapture":
                                                    return (i = a.pointerId), fn.set(i, yn(fn.get(i) || null, e, n, t, r, a)), !0;
                                            }
                                            return !1;
                                        })(i, e, n, t, r)
                                    )
                                        return;
                                    gn(e, r);
                                }
                                Ar(e, n, r, null, t);
                            }
                        }
                }
                function et(e, n, t, r) {
                    var a = _e(r);
                    if (null !== (a = ta(a))) {
                        var i = Ye(a);
                        if (null === i) a = null;
                        else {
                            var l = i.tag;
                            if (13 === l) {
                                if (null !== (a = Je(i))) return a;
                                a = null;
                            } else if (3 === l) {
                                if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                                a = null;
                            } else i !== a && (a = null);
                        }
                    }
                    return Ar(e, n, r, a, t), null;
                }
                var nt = null,
                    tt = null,
                    rt = null;
                function at() {
                    if (rt) return rt;
                    var e,
                        n,
                        t = tt,
                        r = t.length,
                        a = "value" in nt ? nt.value : nt.textContent,
                        i = a.length;
                    for (e = 0; e < r && t[e] === a[e]; e++);
                    var l = r - e;
                    for (n = 1; n <= l && t[r - n] === a[i - n]; n++);
                    return (rt = a.slice(e, 1 < n ? 1 - n : void 0));
                }
                function it(e) {
                    var n = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : (e = n), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
                }
                function lt() {
                    return !0;
                }
                function ot() {
                    return !1;
                }
                function ut(e) {
                    function n(n, t, r, a, i) {
                        for (var l in ((this._reactName = n), (this._targetInst = r), (this.type = t), (this.nativeEvent = a), (this.target = i), (this.currentTarget = null), e))
                            e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]));
                        return (this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? lt : ot), (this.isPropagationStopped = ot), this;
                    }
                    return (
                        a(n.prototype, {
                            preventDefault: function () {
                                this.defaultPrevented = !0;
                                var e = this.nativeEvent;
                                e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = lt));
                            },
                            stopPropagation: function () {
                                var e = this.nativeEvent;
                                e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), (this.isPropagationStopped = lt));
                            },
                            persist: function () {},
                            isPersistent: lt,
                        }),
                        n
                    );
                }
                var st,
                    ct,
                    dt,
                    ft = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function (e) {
                            return e.timeStamp || Date.now();
                        },
                        defaultPrevented: 0,
                        isTrusted: 0,
                    },
                    pt = ut(ft),
                    mt = a({}, ft, { view: 0, detail: 0 }),
                    ht = ut(mt),
                    gt = a({}, mt, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: Pt,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function (e) {
                            return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
                        },
                        movementX: function (e) {
                            return "movementX" in e ? e.movementX : (e !== dt && (dt && "mousemove" === e.type ? ((st = e.screenX - dt.screenX), (ct = e.screenY - dt.screenY)) : (ct = st = 0), (dt = e)), st);
                        },
                        movementY: function (e) {
                            return "movementY" in e ? e.movementY : ct;
                        },
                    }),
                    yt = ut(gt),
                    vt = ut(a({}, gt, { dataTransfer: 0 })),
                    bt = ut(a({}, mt, { relatedTarget: 0 })),
                    wt = ut(a({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    kt = a({}, ft, {
                        clipboardData: function (e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
                        },
                    }),
                    St = ut(kt),
                    xt = ut(a({}, ft, { data: 0 })),
                    Et = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified",
                    },
                    Ct = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta",
                    },
                    _t = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
                function Lt(e) {
                    var n = this.nativeEvent;
                    return n.getModifierState ? n.getModifierState(e) : !!(e = _t[e]) && !!n[e];
                }
                function Pt() {
                    return Lt;
                }
                var Nt = a({}, mt, {
                        key: function (e) {
                            if (e.key) {
                                var n = Et[e.key] || e.key;
                                if ("Unidentified" !== n) return n;
                            }
                            return "keypress" === e.type ? (13 === (e = it(e)) ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? Ct[e.keyCode] || "Unidentified" : "";
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: Pt,
                        charCode: function (e) {
                            return "keypress" === e.type ? it(e) : 0;
                        },
                        keyCode: function (e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                        },
                        which: function (e) {
                            return "keypress" === e.type ? it(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                        },
                    }),
                    Mt = ut(Nt),
                    Ot = ut(a({}, gt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })),
                    jt = ut(a({}, mt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pt })),
                    Tt = ut(a({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    zt = a({}, gt, {
                        deltaX: function (e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
                        },
                        deltaY: function (e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
                        },
                        deltaZ: 0,
                        deltaMode: 0,
                    }),
                    At = ut(zt),
                    Rt = [9, 13, 27, 32],
                    Dt = d && "CompositionEvent" in window,
                    It = null;
                d && "documentMode" in document && (It = document.documentMode);
                var Ft = d && "TextEvent" in window && !It,
                    Bt = d && (!Dt || (It && 8 < It && 11 >= It)),
                    Ut = String.fromCharCode(32),
                    Vt = !1;
                function Ht(e, n) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Rt.indexOf(n.keyCode);
                        case "keydown":
                            return 229 !== n.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1;
                    }
                }
                function Wt(e) {
                    return "object" === typeof (e = e.detail) && "data" in e ? e.data : null;
                }
                var Gt = !1;
                var Kt = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
                function $t(e) {
                    var n = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === n ? !!Kt[e.type] : "textarea" === n;
                }
                function Qt(e, n, t, r) {
                    Oe(r), 0 < (n = Dr(n, "onChange")).length && ((t = new pt("onChange", "change", null, t, r)), e.push({ event: t, listeners: n }));
                }
                var qt = null,
                    Yt = null;
                function Jt(e) {
                    Nr(e, 0);
                }
                function Xt(e) {
                    if (J(aa(e))) return e;
                }
                function Zt(e, n) {
                    if ("change" === e) return n;
                }
                var er = !1;
                if (d) {
                    var nr;
                    if (d) {
                        var tr = "oninput" in document;
                        if (!tr) {
                            var rr = document.createElement("div");
                            rr.setAttribute("oninput", "return;"), (tr = "function" === typeof rr.oninput);
                        }
                        nr = tr;
                    } else nr = !1;
                    er = nr && (!document.documentMode || 9 < document.documentMode);
                }
                function ar() {
                    qt && (qt.detachEvent("onpropertychange", ir), (Yt = qt = null));
                }
                function ir(e) {
                    if ("value" === e.propertyName && Xt(Yt)) {
                        var n = [];
                        if ((Qt(n, Yt, e, _e(e)), (e = Jt), De)) e(n);
                        else {
                            De = !0;
                            try {
                                Te(e, n);
                            } finally {
                                (De = !1), Fe();
                            }
                        }
                    }
                }
                function lr(e, n, t) {
                    "focusin" === e ? (ar(), (Yt = t), (qt = n).attachEvent("onpropertychange", ir)) : "focusout" === e && ar();
                }
                function or(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Xt(Yt);
                }
                function ur(e, n) {
                    if ("click" === e) return Xt(n);
                }
                function sr(e, n) {
                    if ("input" === e || "change" === e) return Xt(n);
                }
                var cr =
                        "function" === typeof Object.is
                            ? Object.is
                            : function (e, n) {
                                  return (e === n && (0 !== e || 1 / e === 1 / n)) || (e !== e && n !== n);
                              },
                    dr = Object.prototype.hasOwnProperty;
                function fr(e, n) {
                    if (cr(e, n)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof n || null === n) return !1;
                    var t = Object.keys(e),
                        r = Object.keys(n);
                    if (t.length !== r.length) return !1;
                    for (r = 0; r < t.length; r++) if (!dr.call(n, t[r]) || !cr(e[t[r]], n[t[r]])) return !1;
                    return !0;
                }
                function pr(e) {
                    for (; e && e.firstChild; ) e = e.firstChild;
                    return e;
                }
                function mr(e, n) {
                    var t,
                        r = pr(e);
                    for (e = 0; r; ) {
                        if (3 === r.nodeType) {
                            if (((t = e + r.textContent.length), e <= n && t >= n)) return { node: r, offset: n - e };
                            e = t;
                        }
                        e: {
                            for (; r; ) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e;
                                }
                                r = r.parentNode;
                            }
                            r = void 0;
                        }
                        r = pr(r);
                    }
                }
                function hr(e, n) {
                    return !(!e || !n) && (e === n || ((!e || 3 !== e.nodeType) && (n && 3 === n.nodeType ? hr(e, n.parentNode) : "contains" in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n)))));
                }
                function gr() {
                    for (var e = window, n = X(); n instanceof e.HTMLIFrameElement; ) {
                        try {
                            var t = "string" === typeof n.contentWindow.location.href;
                        } catch (r) {
                            t = !1;
                        }
                        if (!t) break;
                        n = X((e = n.contentWindow).document);
                    }
                    return n;
                }
                function yr(e) {
                    var n = e && e.nodeName && e.nodeName.toLowerCase();
                    return n && (("input" === n && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === n || "true" === e.contentEditable);
                }
                var vr = d && "documentMode" in document && 11 >= document.documentMode,
                    br = null,
                    wr = null,
                    kr = null,
                    Sr = !1;
                function xr(e, n, t) {
                    var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                    Sr ||
                        null == br ||
                        br !== X(r) ||
                        ("selectionStart" in (r = br) && yr(r)
                            ? (r = { start: r.selectionStart, end: r.selectionEnd })
                            : (r = { anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }),
                        (kr && fr(kr, r)) || ((kr = r), 0 < (r = Dr(wr, "onSelect")).length && ((n = new pt("onSelect", "select", null, n, t)), e.push({ event: n, listeners: r }), (n.target = br))));
                }
                Rn(
                    "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
                        " "
                    ),
                    0
                ),
                    Rn(
                        "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
                            " "
                        ),
                        1
                    ),
                    Rn(An, 2);
                for (var Er = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Cr = 0; Cr < Er.length; Cr++) zn.set(Er[Cr], 0);
                c("onMouseEnter", ["mouseout", "mouseover"]),
                    c("onMouseLeave", ["mouseout", "mouseover"]),
                    c("onPointerEnter", ["pointerout", "pointerover"]),
                    c("onPointerLeave", ["pointerout", "pointerover"]),
                    s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
                    s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
                    s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
                    s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
                    s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
                    s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
                        " "
                    ),
                    Lr = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
                function Pr(e, n, t) {
                    var r = e.type || "unknown-event";
                    (e.currentTarget = t),
                        (function (e, n, t, r, a, i, o, u, s) {
                            if ((qe.apply(this, arguments), We)) {
                                if (!We) throw Error(l(198));
                                var c = Ge;
                                (We = !1), (Ge = null), Ke || ((Ke = !0), ($e = c));
                            }
                        })(r, n, void 0, e),
                        (e.currentTarget = null);
                }
                function Nr(e, n) {
                    n = 0 !== (4 & n);
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var i = void 0;
                            if (n)
                                for (var l = r.length - 1; 0 <= l; l--) {
                                    var o = r[l],
                                        u = o.instance,
                                        s = o.currentTarget;
                                    if (((o = o.listener), u !== i && a.isPropagationStopped())) break e;
                                    Pr(a, o, s), (i = u);
                                }
                            else
                                for (l = 0; l < r.length; l++) {
                                    if (((u = (o = r[l]).instance), (s = o.currentTarget), (o = o.listener), u !== i && a.isPropagationStopped())) break e;
                                    Pr(a, o, s), (i = u);
                                }
                        }
                    }
                    if (Ke) throw ((e = $e), (Ke = !1), ($e = null), e);
                }
                function Mr(e, n) {
                    var t = la(n),
                        r = e + "__bubble";
                    t.has(r) || (zr(n, e, 2, !1), t.add(r));
                }
                var Or = "_reactListening" + Math.random().toString(36).slice(2);
                function jr(e) {
                    e[Or] ||
                        ((e[Or] = !0),
                        o.forEach(function (n) {
                            Lr.has(n) || Tr(n, !1, e, null), Tr(n, !0, e, null);
                        }));
                }
                function Tr(e, n, t, r) {
                    var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        i = t;
                    if (("selectionchange" === e && 9 !== t.nodeType && (i = t.ownerDocument), null !== r && !n && Lr.has(e))) {
                        if ("scroll" !== e) return;
                        (a |= 2), (i = r);
                    }
                    var l = la(i),
                        o = e + "__" + (n ? "capture" : "bubble");
                    l.has(o) || (n && (a |= 4), zr(i, e, a, n), l.add(o));
                }
                function zr(e, n, t, r) {
                    var a = zn.get(n);
                    switch (void 0 === a ? 2 : a) {
                        case 0:
                            a = Jn;
                            break;
                        case 1:
                            a = Xn;
                            break;
                        default:
                            a = Zn;
                    }
                    (t = a.bind(null, n, t, e)),
                        (a = void 0),
                        !Ue || ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) || (a = !0),
                        r ? (void 0 !== a ? e.addEventListener(n, t, { capture: !0, passive: a }) : e.addEventListener(n, t, !0)) : void 0 !== a ? e.addEventListener(n, t, { passive: a }) : e.addEventListener(n, t, !1);
                }
                function Ar(e, n, t, r, a) {
                    var i = r;
                    if (0 === (1 & n) && 0 === (2 & n) && null !== r)
                        e: for (;;) {
                            if (null === r) return;
                            var l = r.tag;
                            if (3 === l || 4 === l) {
                                var o = r.stateNode.containerInfo;
                                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                                if (4 === l)
                                    for (l = r.return; null !== l; ) {
                                        var u = l.tag;
                                        if ((3 === u || 4 === u) && ((u = l.stateNode.containerInfo) === a || (8 === u.nodeType && u.parentNode === a))) return;
                                        l = l.return;
                                    }
                                for (; null !== o; ) {
                                    if (null === (l = ta(o))) return;
                                    if (5 === (u = l.tag) || 6 === u) {
                                        r = i = l;
                                        continue e;
                                    }
                                    o = o.parentNode;
                                }
                            }
                            r = r.return;
                        }
                    !(function (e, n, t) {
                        if (Ie) return e(n, t);
                        Ie = !0;
                        try {
                            Re(e, n, t);
                        } finally {
                            (Ie = !1), Fe();
                        }
                    })(function () {
                        var r = i,
                            a = _e(t),
                            l = [];
                        e: {
                            var o = Tn.get(e);
                            if (void 0 !== o) {
                                var u = pt,
                                    s = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === it(t)) break e;
                                    case "keydown":
                                    case "keyup":
                                        u = Mt;
                                        break;
                                    case "focusin":
                                        (s = "focus"), (u = bt);
                                        break;
                                    case "focusout":
                                        (s = "blur"), (u = bt);
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        u = bt;
                                        break;
                                    case "click":
                                        if (2 === t.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        u = yt;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        u = vt;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        u = jt;
                                        break;
                                    case Nn:
                                    case Mn:
                                    case On:
                                        u = wt;
                                        break;
                                    case jn:
                                        u = Tt;
                                        break;
                                    case "scroll":
                                        u = ht;
                                        break;
                                    case "wheel":
                                        u = At;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        u = St;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        u = Ot;
                                }
                                var c = 0 !== (4 & n),
                                    d = !c && "scroll" === e,
                                    f = c ? (null !== o ? o + "Capture" : null) : o;
                                c = [];
                                for (var p, m = r; null !== m; ) {
                                    var h = (p = m).stateNode;
                                    if ((5 === p.tag && null !== h && ((p = h), null !== f && null != (h = Be(m, f)) && c.push(Rr(m, h, p))), d)) break;
                                    m = m.return;
                                }
                                0 < c.length && ((o = new u(o, s, null, t, a)), l.push({ event: o, listeners: c }));
                            }
                        }
                        if (0 === (7 & n)) {
                            if (
                                ((u = "mouseout" === e || "pointerout" === e),
                                (!(o = "mouseover" === e || "pointerover" === e) || 0 !== (16 & n) || !(s = t.relatedTarget || t.fromElement) || (!ta(s) && !s[ea])) &&
                                    (u || o) &&
                                    ((o = a.window === a ? a : (o = a.ownerDocument) ? o.defaultView || o.parentWindow : window),
                                    u ? ((u = r), null !== (s = (s = t.relatedTarget || t.toElement) ? ta(s) : null) && (s !== (d = Ye(s)) || (5 !== s.tag && 6 !== s.tag)) && (s = null)) : ((u = null), (s = r)),
                                    u !== s))
                            ) {
                                if (
                                    ((c = yt),
                                    (h = "onMouseLeave"),
                                    (f = "onMouseEnter"),
                                    (m = "mouse"),
                                    ("pointerout" !== e && "pointerover" !== e) || ((c = Ot), (h = "onPointerLeave"), (f = "onPointerEnter"), (m = "pointer")),
                                    (d = null == u ? o : aa(u)),
                                    (p = null == s ? o : aa(s)),
                                    ((o = new c(h, m + "leave", u, t, a)).target = d),
                                    (o.relatedTarget = p),
                                    (h = null),
                                    ta(a) === r && (((c = new c(f, m + "enter", s, t, a)).target = p), (c.relatedTarget = d), (h = c)),
                                    (d = h),
                                    u && s)
                                )
                                    e: {
                                        for (f = s, m = 0, p = c = u; p; p = Ir(p)) m++;
                                        for (p = 0, h = f; h; h = Ir(h)) p++;
                                        for (; 0 < m - p; ) (c = Ir(c)), m--;
                                        for (; 0 < p - m; ) (f = Ir(f)), p--;
                                        for (; m--; ) {
                                            if (c === f || (null !== f && c === f.alternate)) break e;
                                            (c = Ir(c)), (f = Ir(f));
                                        }
                                        c = null;
                                    }
                                else c = null;
                                null !== u && Fr(l, o, u, c, !1), null !== s && null !== d && Fr(l, d, s, c, !0);
                            }
                            if ("select" === (u = (o = r ? aa(r) : window).nodeName && o.nodeName.toLowerCase()) || ("input" === u && "file" === o.type)) var g = Zt;
                            else if ($t(o))
                                if (er) g = sr;
                                else {
                                    g = or;
                                    var y = lr;
                                }
                            else (u = o.nodeName) && "input" === u.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (g = ur);
                            switch ((g && (g = g(e, r)) ? Qt(l, g, t, a) : (y && y(e, o, r), "focusout" === e && (y = o._wrapperState) && y.controlled && "number" === o.type && ae(o, "number", o.value)), (y = r ? aa(r) : window), e)) {
                                case "focusin":
                                    ($t(y) || "true" === y.contentEditable) && ((br = y), (wr = r), (kr = null));
                                    break;
                                case "focusout":
                                    kr = wr = br = null;
                                    break;
                                case "mousedown":
                                    Sr = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    (Sr = !1), xr(l, t, a);
                                    break;
                                case "selectionchange":
                                    if (vr) break;
                                case "keydown":
                                case "keyup":
                                    xr(l, t, a);
                            }
                            var v;
                            if (Dt)
                                e: {
                                    switch (e) {
                                        case "compositionstart":
                                            var b = "onCompositionStart";
                                            break e;
                                        case "compositionend":
                                            b = "onCompositionEnd";
                                            break e;
                                        case "compositionupdate":
                                            b = "onCompositionUpdate";
                                            break e;
                                    }
                                    b = void 0;
                                }
                            else Gt ? Ht(e, t) && (b = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (b = "onCompositionStart");
                            b &&
                                (Bt && "ko" !== t.locale && (Gt || "onCompositionStart" !== b ? "onCompositionEnd" === b && Gt && (v = at()) : ((tt = "value" in (nt = a) ? nt.value : nt.textContent), (Gt = !0))),
                                0 < (y = Dr(r, b)).length && ((b = new xt(b, e, null, t, a)), l.push({ event: b, listeners: y }), v ? (b.data = v) : null !== (v = Wt(t)) && (b.data = v))),
                                (v = Ft
                                    ? (function (e, n) {
                                          switch (e) {
                                              case "compositionend":
                                                  return Wt(n);
                                              case "keypress":
                                                  return 32 !== n.which ? null : ((Vt = !0), Ut);
                                              case "textInput":
                                                  return (e = n.data) === Ut && Vt ? null : e;
                                              default:
                                                  return null;
                                          }
                                      })(e, t)
                                    : (function (e, n) {
                                          if (Gt) return "compositionend" === e || (!Dt && Ht(e, n)) ? ((e = at()), (rt = tt = nt = null), (Gt = !1), e) : null;
                                          switch (e) {
                                              case "paste":
                                              default:
                                                  return null;
                                              case "keypress":
                                                  if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
                                                      if (n.char && 1 < n.char.length) return n.char;
                                                      if (n.which) return String.fromCharCode(n.which);
                                                  }
                                                  return null;
                                              case "compositionend":
                                                  return Bt && "ko" !== n.locale ? null : n.data;
                                          }
                                      })(e, t)) &&
                                    0 < (r = Dr(r, "onBeforeInput")).length &&
                                    ((a = new xt("onBeforeInput", "beforeinput", null, t, a)), l.push({ event: a, listeners: r }), (a.data = v));
                        }
                        Nr(l, n);
                    });
                }
                function Rr(e, n, t) {
                    return { instance: e, listener: n, currentTarget: t };
                }
                function Dr(e, n) {
                    for (var t = n + "Capture", r = []; null !== e; ) {
                        var a = e,
                            i = a.stateNode;
                        5 === a.tag && null !== i && ((a = i), null != (i = Be(e, t)) && r.unshift(Rr(e, i, a)), null != (i = Be(e, n)) && r.push(Rr(e, i, a))), (e = e.return);
                    }
                    return r;
                }
                function Ir(e) {
                    if (null === e) return null;
                    do {
                        e = e.return;
                    } while (e && 5 !== e.tag);
                    return e || null;
                }
                function Fr(e, n, t, r, a) {
                    for (var i = n._reactName, l = []; null !== t && t !== r; ) {
                        var o = t,
                            u = o.alternate,
                            s = o.stateNode;
                        if (null !== u && u === r) break;
                        5 === o.tag && null !== s && ((o = s), a ? null != (u = Be(t, i)) && l.unshift(Rr(t, u, o)) : a || (null != (u = Be(t, i)) && l.push(Rr(t, u, o)))), (t = t.return);
                    }
                    0 !== l.length && e.push({ event: n, listeners: l });
                }
                function Br() {}
                var Ur = null,
                    Vr = null;
                function Hr(e, n) {
                    switch (e) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!n.autoFocus;
                    }
                    return !1;
                }
                function Wr(e, n) {
                    return (
                        "textarea" === e ||
                        "option" === e ||
                        "noscript" === e ||
                        "string" === typeof n.children ||
                        "number" === typeof n.children ||
                        ("object" === typeof n.dangerouslySetInnerHTML && null !== n.dangerouslySetInnerHTML && null != n.dangerouslySetInnerHTML.__html)
                    );
                }
                var Gr = "function" === typeof setTimeout ? setTimeout : void 0,
                    Kr = "function" === typeof clearTimeout ? clearTimeout : void 0;
                function $r(e) {
                    1 === e.nodeType ? (e.textContent = "") : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
                }
                function Qr(e) {
                    for (; null != e; e = e.nextSibling) {
                        var n = e.nodeType;
                        if (1 === n || 3 === n) break;
                    }
                    return e;
                }
                function qr(e) {
                    e = e.previousSibling;
                    for (var n = 0; e; ) {
                        if (8 === e.nodeType) {
                            var t = e.data;
                            if ("$" === t || "$!" === t || "$?" === t) {
                                if (0 === n) return e;
                                n--;
                            } else "/$" === t && n++;
                        }
                        e = e.previousSibling;
                    }
                    return null;
                }
                var Yr = 0;
                var Jr = Math.random().toString(36).slice(2),
                    Xr = "__reactFiber$" + Jr,
                    Zr = "__reactProps$" + Jr,
                    ea = "__reactContainer$" + Jr,
                    na = "__reactEvents$" + Jr;
                function ta(e) {
                    var n = e[Xr];
                    if (n) return n;
                    for (var t = e.parentNode; t; ) {
                        if ((n = t[ea] || t[Xr])) {
                            if (((t = n.alternate), null !== n.child || (null !== t && null !== t.child)))
                                for (e = qr(e); null !== e; ) {
                                    if ((t = e[Xr])) return t;
                                    e = qr(e);
                                }
                            return n;
                        }
                        t = (e = t).parentNode;
                    }
                    return null;
                }
                function ra(e) {
                    return !(e = e[Xr] || e[ea]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
                }
                function aa(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(l(33));
                }
                function ia(e) {
                    return e[Zr] || null;
                }
                function la(e) {
                    var n = e[na];
                    return void 0 === n && (n = e[na] = new Set()), n;
                }
                var oa = [],
                    ua = -1;
                function sa(e) {
                    return { current: e };
                }
                function ca(e) {
                    0 > ua || ((e.current = oa[ua]), (oa[ua] = null), ua--);
                }
                function da(e, n) {
                    ua++, (oa[ua] = e.current), (e.current = n);
                }
                var fa = {},
                    pa = sa(fa),
                    ma = sa(!1),
                    ha = fa;
                function ga(e, n) {
                    var t = e.type.contextTypes;
                    if (!t) return fa;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
                    var a,
                        i = {};
                    for (a in t) i[a] = n[a];
                    return r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n), (e.__reactInternalMemoizedMaskedChildContext = i)), i;
                }
                function ya(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e;
                }
                function va() {
                    ca(ma), ca(pa);
                }
                function ba(e, n, t) {
                    if (pa.current !== fa) throw Error(l(168));
                    da(pa, n), da(ma, t);
                }
                function wa(e, n, t) {
                    var r = e.stateNode;
                    if (((e = n.childContextTypes), "function" !== typeof r.getChildContext)) return t;
                    for (var i in (r = r.getChildContext())) if (!(i in e)) throw Error(l(108, $(n) || "Unknown", i));
                    return a({}, t, r);
                }
                function ka(e) {
                    return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fa), (ha = pa.current), da(pa, e), da(ma, ma.current), !0;
                }
                function Sa(e, n, t) {
                    var r = e.stateNode;
                    if (!r) throw Error(l(169));
                    t ? ((e = wa(e, n, ha)), (r.__reactInternalMemoizedMergedChildContext = e), ca(ma), ca(pa), da(pa, e)) : ca(ma), da(ma, t);
                }
                var xa = null,
                    Ea = null,
                    Ca = i.unstable_runWithPriority,
                    _a = i.unstable_scheduleCallback,
                    La = i.unstable_cancelCallback,
                    Pa = i.unstable_shouldYield,
                    Na = i.unstable_requestPaint,
                    Ma = i.unstable_now,
                    Oa = i.unstable_getCurrentPriorityLevel,
                    ja = i.unstable_ImmediatePriority,
                    Ta = i.unstable_UserBlockingPriority,
                    za = i.unstable_NormalPriority,
                    Aa = i.unstable_LowPriority,
                    Ra = i.unstable_IdlePriority,
                    Da = {},
                    Ia = void 0 !== Na ? Na : function () {},
                    Fa = null,
                    Ba = null,
                    Ua = !1,
                    Va = Ma(),
                    Ha =
                        1e4 > Va
                            ? Ma
                            : function () {
                                  return Ma() - Va;
                              };
                function Wa() {
                    switch (Oa()) {
                        case ja:
                            return 99;
                        case Ta:
                            return 98;
                        case za:
                            return 97;
                        case Aa:
                            return 96;
                        case Ra:
                            return 95;
                        default:
                            throw Error(l(332));
                    }
                }
                function Ga(e) {
                    switch (e) {
                        case 99:
                            return ja;
                        case 98:
                            return Ta;
                        case 97:
                            return za;
                        case 96:
                            return Aa;
                        case 95:
                            return Ra;
                        default:
                            throw Error(l(332));
                    }
                }
                function Ka(e, n) {
                    return (e = Ga(e)), Ca(e, n);
                }
                function $a(e, n, t) {
                    return (e = Ga(e)), _a(e, n, t);
                }
                function Qa() {
                    if (null !== Ba) {
                        var e = Ba;
                        (Ba = null), La(e);
                    }
                    qa();
                }
                function qa() {
                    if (!Ua && null !== Fa) {
                        Ua = !0;
                        var e = 0;
                        try {
                            var n = Fa;
                            Ka(99, function () {
                                for (; e < n.length; e++) {
                                    var t = n[e];
                                    do {
                                        t = t(!0);
                                    } while (null !== t);
                                }
                            }),
                                (Fa = null);
                        } catch (t) {
                            throw (null !== Fa && (Fa = Fa.slice(e + 1)), _a(ja, Qa), t);
                        } finally {
                            Ua = !1;
                        }
                    }
                }
                var Ya = k.ReactCurrentBatchConfig;
                function Ja(e, n) {
                    if (e && e.defaultProps) {
                        for (var t in ((n = a({}, n)), (e = e.defaultProps))) void 0 === n[t] && (n[t] = e[t]);
                        return n;
                    }
                    return n;
                }
                var Xa = sa(null),
                    Za = null,
                    ei = null,
                    ni = null;
                function ti() {
                    ni = ei = Za = null;
                }
                function ri(e) {
                    var n = Xa.current;
                    ca(Xa), (e.type._context._currentValue = n);
                }
                function ai(e, n) {
                    for (; null !== e; ) {
                        var t = e.alternate;
                        if ((e.childLanes & n) === n) {
                            if (null === t || (t.childLanes & n) === n) break;
                            t.childLanes |= n;
                        } else (e.childLanes |= n), null !== t && (t.childLanes |= n);
                        e = e.return;
                    }
                }
                function ii(e, n) {
                    (Za = e), (ni = ei = null), null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & n) && (Rl = !0), (e.firstContext = null));
                }
                function li(e, n) {
                    if (ni !== e && !1 !== n && 0 !== n)
                        if ((("number" === typeof n && 1073741823 !== n) || ((ni = e), (n = 1073741823)), (n = { context: e, observedBits: n, next: null }), null === ei)) {
                            if (null === Za) throw Error(l(308));
                            (ei = n), (Za.dependencies = { lanes: 0, firstContext: n, responders: null });
                        } else ei = ei.next = n;
                    return e._currentValue;
                }
                var oi = !1;
                function ui(e) {
                    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
                }
                function si(e, n) {
                    (e = e.updateQueue), n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
                }
                function ci(e, n) {
                    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
                }
                function di(e, n) {
                    if (null !== (e = e.updateQueue)) {
                        var t = (e = e.shared).pending;
                        null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)), (e.pending = n);
                    }
                }
                function fi(e, n) {
                    var t = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && t === (r = r.updateQueue)) {
                        var a = null,
                            i = null;
                        if (null !== (t = t.firstBaseUpdate)) {
                            do {
                                var l = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
                                null === i ? (a = i = l) : (i = i.next = l), (t = t.next);
                            } while (null !== t);
                            null === i ? (a = i = n) : (i = i.next = n);
                        } else a = i = n;
                        return (t = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: r.shared, effects: r.effects }), void (e.updateQueue = t);
                    }
                    null === (e = t.lastBaseUpdate) ? (t.firstBaseUpdate = n) : (e.next = n), (t.lastBaseUpdate = n);
                }
                function pi(e, n, t, r) {
                    var i = e.updateQueue;
                    oi = !1;
                    var l = i.firstBaseUpdate,
                        o = i.lastBaseUpdate,
                        u = i.shared.pending;
                    if (null !== u) {
                        i.shared.pending = null;
                        var s = u,
                            c = s.next;
                        (s.next = null), null === o ? (l = c) : (o.next = c), (o = s);
                        var d = e.alternate;
                        if (null !== d) {
                            var f = (d = d.updateQueue).lastBaseUpdate;
                            f !== o && (null === f ? (d.firstBaseUpdate = c) : (f.next = c), (d.lastBaseUpdate = s));
                        }
                    }
                    if (null !== l) {
                        for (f = i.baseState, o = 0, d = c = s = null; ; ) {
                            u = l.lane;
                            var p = l.eventTime;
                            if ((r & u) === u) {
                                null !== d && (d = d.next = { eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                                e: {
                                    var m = e,
                                        h = l;
                                    switch (((u = n), (p = t), h.tag)) {
                                        case 1:
                                            if ("function" === typeof (m = h.payload)) {
                                                f = m.call(p, f, u);
                                                break e;
                                            }
                                            f = m;
                                            break e;
                                        case 3:
                                            m.flags = (-4097 & m.flags) | 64;
                                        case 0:
                                            if (null === (u = "function" === typeof (m = h.payload) ? m.call(p, f, u) : m) || void 0 === u) break e;
                                            f = a({}, f, u);
                                            break e;
                                        case 2:
                                            oi = !0;
                                    }
                                }
                                null !== l.callback && ((e.flags |= 32), null === (u = i.effects) ? (i.effects = [l]) : u.push(l));
                            } else (p = { eventTime: p, lane: u, tag: l.tag, payload: l.payload, callback: l.callback, next: null }), null === d ? ((c = d = p), (s = f)) : (d = d.next = p), (o |= u);
                            if (null === (l = l.next)) {
                                if (null === (u = i.shared.pending)) break;
                                (l = u.next), (u.next = null), (i.lastBaseUpdate = u), (i.shared.pending = null);
                            }
                        }
                        null === d && (s = f), (i.baseState = s), (i.firstBaseUpdate = c), (i.lastBaseUpdate = d), (Uo |= o), (e.lanes = o), (e.memoizedState = f);
                    }
                }
                function mi(e, n, t) {
                    if (((e = n.effects), (n.effects = null), null !== e))
                        for (n = 0; n < e.length; n++) {
                            var r = e[n],
                                a = r.callback;
                            if (null !== a) {
                                if (((r.callback = null), (r = t), "function" !== typeof a)) throw Error(l(191, a));
                                a.call(r);
                            }
                        }
                }
                var hi = new r.Component().refs;
                function gi(e, n, t, r) {
                    (t = null === (t = t(r, (n = e.memoizedState))) || void 0 === t ? n : a({}, n, t)), (e.memoizedState = t), 0 === e.lanes && (e.updateQueue.baseState = t);
                }
                var yi = {
                    isMounted: function (e) {
                        return !!(e = e._reactInternals) && Ye(e) === e;
                    },
                    enqueueSetState: function (e, n, t) {
                        e = e._reactInternals;
                        var r = fu(),
                            a = pu(e),
                            i = ci(r, a);
                        (i.payload = n), void 0 !== t && null !== t && (i.callback = t), di(e, i), mu(e, a, r);
                    },
                    enqueueReplaceState: function (e, n, t) {
                        e = e._reactInternals;
                        var r = fu(),
                            a = pu(e),
                            i = ci(r, a);
                        (i.tag = 1), (i.payload = n), void 0 !== t && null !== t && (i.callback = t), di(e, i), mu(e, a, r);
                    },
                    enqueueForceUpdate: function (e, n) {
                        e = e._reactInternals;
                        var t = fu(),
                            r = pu(e),
                            a = ci(t, r);
                        (a.tag = 2), void 0 !== n && null !== n && (a.callback = n), di(e, a), mu(e, r, t);
                    },
                };
                function vi(e, n, t, r, a, i, l) {
                    return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, l) : !n.prototype || !n.prototype.isPureReactComponent || !fr(t, r) || !fr(a, i);
                }
                function bi(e, n, t) {
                    var r = !1,
                        a = fa,
                        i = n.contextType;
                    return (
                        "object" === typeof i && null !== i ? (i = li(i)) : ((a = ya(n) ? ha : pa.current), (i = (r = null !== (r = n.contextTypes) && void 0 !== r) ? ga(e, a) : fa)),
                        (n = new n(t, i)),
                        (e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null),
                        (n.updater = yi),
                        (e.stateNode = n),
                        (n._reactInternals = e),
                        r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a), (e.__reactInternalMemoizedMaskedChildContext = i)),
                        n
                    );
                }
                function wi(e, n, t, r) {
                    (e = n.state),
                        "function" === typeof n.componentWillReceiveProps && n.componentWillReceiveProps(t, r),
                        "function" === typeof n.UNSAFE_componentWillReceiveProps && n.UNSAFE_componentWillReceiveProps(t, r),
                        n.state !== e && yi.enqueueReplaceState(n, n.state, null);
                }
                function ki(e, n, t, r) {
                    var a = e.stateNode;
                    (a.props = t), (a.state = e.memoizedState), (a.refs = hi), ui(e);
                    var i = n.contextType;
                    "object" === typeof i && null !== i ? (a.context = li(i)) : ((i = ya(n) ? ha : pa.current), (a.context = ga(e, i))),
                        pi(e, t, a, r),
                        (a.state = e.memoizedState),
                        "function" === typeof (i = n.getDerivedStateFromProps) && (gi(e, n, i, t), (a.state = e.memoizedState)),
                        "function" === typeof n.getDerivedStateFromProps ||
                            "function" === typeof a.getSnapshotBeforeUpdate ||
                            ("function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount) ||
                            ((n = a.state),
                            "function" === typeof a.componentWillMount && a.componentWillMount(),
                            "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                            n !== a.state && yi.enqueueReplaceState(a, a.state, null),
                            pi(e, t, a, r),
                            (a.state = e.memoizedState)),
                        "function" === typeof a.componentDidMount && (e.flags |= 4);
                }
                var Si = Array.isArray;
                function xi(e, n, t) {
                    if (null !== (e = t.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (t._owner) {
                            if ((t = t._owner)) {
                                if (1 !== t.tag) throw Error(l(309));
                                var r = t.stateNode;
                            }
                            if (!r) throw Error(l(147, e));
                            var a = "" + e;
                            return null !== n && null !== n.ref && "function" === typeof n.ref && n.ref._stringRef === a
                                ? n.ref
                                : ((n = function (e) {
                                      var n = r.refs;
                                      n === hi && (n = r.refs = {}), null === e ? delete n[a] : (n[a] = e);
                                  }),
                                  (n._stringRef = a),
                                  n);
                        }
                        if ("string" !== typeof e) throw Error(l(284));
                        if (!t._owner) throw Error(l(290, e));
                    }
                    return e;
                }
                function Ei(e, n) {
                    if ("textarea" !== e.type) throw Error(l(31, "[object Object]" === Object.prototype.toString.call(n) ? "object with keys {" + Object.keys(n).join(", ") + "}" : n));
                }
                function Ci(e) {
                    function n(n, t) {
                        if (e) {
                            var r = n.lastEffect;
                            null !== r ? ((r.nextEffect = t), (n.lastEffect = t)) : (n.firstEffect = n.lastEffect = t), (t.nextEffect = null), (t.flags = 8);
                        }
                    }
                    function t(t, r) {
                        if (!e) return null;
                        for (; null !== r; ) n(t, r), (r = r.sibling);
                        return null;
                    }
                    function r(e, n) {
                        for (e = new Map(); null !== n; ) null !== n.key ? e.set(n.key, n) : e.set(n.index, n), (n = n.sibling);
                        return e;
                    }
                    function a(e, n) {
                        return ((e = Ku(e, n)).index = 0), (e.sibling = null), e;
                    }
                    function i(n, t, r) {
                        return (n.index = r), e ? (null !== (r = n.alternate) ? ((r = r.index) < t ? ((n.flags = 2), t) : r) : ((n.flags = 2), t)) : t;
                    }
                    function o(n) {
                        return e && null === n.alternate && (n.flags = 2), n;
                    }
                    function u(e, n, t, r) {
                        return null === n || 6 !== n.tag ? (((n = Yu(t, e.mode, r)).return = e), n) : (((n = a(n, t)).return = e), n);
                    }
                    function s(e, n, t, r) {
                        return null !== n && n.elementType === t.type ? (((r = a(n, t.props)).ref = xi(e, n, t)), (r.return = e), r) : (((r = $u(t.type, t.key, t.props, null, e.mode, r)).ref = xi(e, n, t)), (r.return = e), r);
                    }
                    function c(e, n, t, r) {
                        return null === n || 4 !== n.tag || n.stateNode.containerInfo !== t.containerInfo || n.stateNode.implementation !== t.implementation
                            ? (((n = Ju(t, e.mode, r)).return = e), n)
                            : (((n = a(n, t.children || [])).return = e), n);
                    }
                    function d(e, n, t, r, i) {
                        return null === n || 7 !== n.tag ? (((n = Qu(t, e.mode, r, i)).return = e), n) : (((n = a(n, t)).return = e), n);
                    }
                    function f(e, n, t) {
                        if ("string" === typeof n || "number" === typeof n) return ((n = Yu("" + n, e.mode, t)).return = e), n;
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case S:
                                    return ((t = $u(n.type, n.key, n.props, null, e.mode, t)).ref = xi(e, null, n)), (t.return = e), t;
                                case x:
                                    return ((n = Ju(n, e.mode, t)).return = e), n;
                            }
                            if (Si(n) || V(n)) return ((n = Qu(n, e.mode, t, null)).return = e), n;
                            Ei(e, n);
                        }
                        return null;
                    }
                    function p(e, n, t, r) {
                        var a = null !== n ? n.key : null;
                        if ("string" === typeof t || "number" === typeof t) return null !== a ? null : u(e, n, "" + t, r);
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case S:
                                    return t.key === a ? (t.type === E ? d(e, n, t.props.children, r, a) : s(e, n, t, r)) : null;
                                case x:
                                    return t.key === a ? c(e, n, t, r) : null;
                            }
                            if (Si(t) || V(t)) return null !== a ? null : d(e, n, t, r, null);
                            Ei(e, t);
                        }
                        return null;
                    }
                    function m(e, n, t, r, a) {
                        if ("string" === typeof r || "number" === typeof r) return u(n, (e = e.get(t) || null), "" + r, a);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case S:
                                    return (e = e.get(null === r.key ? t : r.key) || null), r.type === E ? d(n, e, r.props.children, a, r.key) : s(n, e, r, a);
                                case x:
                                    return c(n, (e = e.get(null === r.key ? t : r.key) || null), r, a);
                            }
                            if (Si(r) || V(r)) return d(n, (e = e.get(t) || null), r, a, null);
                            Ei(n, r);
                        }
                        return null;
                    }
                    function h(a, l, o, u) {
                        for (var s = null, c = null, d = l, h = (l = 0), g = null; null !== d && h < o.length; h++) {
                            d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
                            var y = p(a, d, o[h], u);
                            if (null === y) {
                                null === d && (d = g);
                                break;
                            }
                            e && d && null === y.alternate && n(a, d), (l = i(y, l, h)), null === c ? (s = y) : (c.sibling = y), (c = y), (d = g);
                        }
                        if (h === o.length) return t(a, d), s;
                        if (null === d) {
                            for (; h < o.length; h++) null !== (d = f(a, o[h], u)) && ((l = i(d, l, h)), null === c ? (s = d) : (c.sibling = d), (c = d));
                            return s;
                        }
                        for (d = r(a, d); h < o.length; h++) null !== (g = m(d, a, h, o[h], u)) && (e && null !== g.alternate && d.delete(null === g.key ? h : g.key), (l = i(g, l, h)), null === c ? (s = g) : (c.sibling = g), (c = g));
                        return (
                            e &&
                                d.forEach(function (e) {
                                    return n(a, e);
                                }),
                            s
                        );
                    }
                    function g(a, o, u, s) {
                        var c = V(u);
                        if ("function" !== typeof c) throw Error(l(150));
                        if (null == (u = c.call(u))) throw Error(l(151));
                        for (var d = (c = null), h = o, g = (o = 0), y = null, v = u.next(); null !== h && !v.done; g++, v = u.next()) {
                            h.index > g ? ((y = h), (h = null)) : (y = h.sibling);
                            var b = p(a, h, v.value, s);
                            if (null === b) {
                                null === h && (h = y);
                                break;
                            }
                            e && h && null === b.alternate && n(a, h), (o = i(b, o, g)), null === d ? (c = b) : (d.sibling = b), (d = b), (h = y);
                        }
                        if (v.done) return t(a, h), c;
                        if (null === h) {
                            for (; !v.done; g++, v = u.next()) null !== (v = f(a, v.value, s)) && ((o = i(v, o, g)), null === d ? (c = v) : (d.sibling = v), (d = v));
                            return c;
                        }
                        for (h = r(a, h); !v.done; g++, v = u.next())
                            null !== (v = m(h, a, g, v.value, s)) && (e && null !== v.alternate && h.delete(null === v.key ? g : v.key), (o = i(v, o, g)), null === d ? (c = v) : (d.sibling = v), (d = v));
                        return (
                            e &&
                                h.forEach(function (e) {
                                    return n(a, e);
                                }),
                            c
                        );
                    }
                    return function (e, r, i, u) {
                        var s = "object" === typeof i && null !== i && i.type === E && null === i.key;
                        s && (i = i.props.children);
                        var c = "object" === typeof i && null !== i;
                        if (c)
                            switch (i.$$typeof) {
                                case S:
                                    e: {
                                        for (c = i.key, s = r; null !== s; ) {
                                            if (s.key === c) {
                                                if (7 === s.tag) {
                                                    if (i.type === E) {
                                                        t(e, s.sibling), ((r = a(s, i.props.children)).return = e), (e = r);
                                                        break e;
                                                    }
                                                } else if (s.elementType === i.type) {
                                                    t(e, s.sibling), ((r = a(s, i.props)).ref = xi(e, s, i)), (r.return = e), (e = r);
                                                    break e;
                                                }
                                                t(e, s);
                                                break;
                                            }
                                            n(e, s), (s = s.sibling);
                                        }
                                        i.type === E ? (((r = Qu(i.props.children, e.mode, u, i.key)).return = e), (e = r)) : (((u = $u(i.type, i.key, i.props, null, e.mode, u)).ref = xi(e, r, i)), (u.return = e), (e = u));
                                    }
                                    return o(e);
                                case x:
                                    e: {
                                        for (s = i.key; null !== r; ) {
                                            if (r.key === s) {
                                                if (4 === r.tag && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                                                    t(e, r.sibling), ((r = a(r, i.children || [])).return = e), (e = r);
                                                    break e;
                                                }
                                                t(e, r);
                                                break;
                                            }
                                            n(e, r), (r = r.sibling);
                                        }
                                        ((r = Ju(i, e.mode, u)).return = e), (e = r);
                                    }
                                    return o(e);
                            }
                        if ("string" === typeof i || "number" === typeof i)
                            return (i = "" + i), null !== r && 6 === r.tag ? (t(e, r.sibling), ((r = a(r, i)).return = e), (e = r)) : (t(e, r), ((r = Yu(i, e.mode, u)).return = e), (e = r)), o(e);
                        if (Si(i)) return h(e, r, i, u);
                        if (V(i)) return g(e, r, i, u);
                        if ((c && Ei(e, i), "undefined" === typeof i && !s))
                            switch (e.tag) {
                                case 1:
                                case 22:
                                case 0:
                                case 11:
                                case 15:
                                    throw Error(l(152, $(e.type) || "Component"));
                            }
                        return t(e, r);
                    };
                }
                var _i = Ci(!0),
                    Li = Ci(!1),
                    Pi = {},
                    Ni = sa(Pi),
                    Mi = sa(Pi),
                    Oi = sa(Pi);
                function ji(e) {
                    if (e === Pi) throw Error(l(174));
                    return e;
                }
                function Ti(e, n) {
                    switch ((da(Oi, n), da(Mi, e), da(Ni, Pi), (e = n.nodeType))) {
                        case 9:
                        case 11:
                            n = (n = n.documentElement) ? n.namespaceURI : me(null, "");
                            break;
                        default:
                            n = me((n = (e = 8 === e ? n.parentNode : n).namespaceURI || null), (e = e.tagName));
                    }
                    ca(Ni), da(Ni, n);
                }
                function zi() {
                    ca(Ni), ca(Mi), ca(Oi);
                }
                function Ai(e) {
                    ji(Oi.current);
                    var n = ji(Ni.current),
                        t = me(n, e.type);
                    n !== t && (da(Mi, e), da(Ni, t));
                }
                function Ri(e) {
                    Mi.current === e && (ca(Ni), ca(Mi));
                }
                var Di = sa(0);
                function Ii(e) {
                    for (var n = e; null !== n; ) {
                        if (13 === n.tag) {
                            var t = n.memoizedState;
                            if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data)) return n;
                        } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
                            if (0 !== (64 & n.flags)) return n;
                        } else if (null !== n.child) {
                            (n.child.return = n), (n = n.child);
                            continue;
                        }
                        if (n === e) break;
                        for (; null === n.sibling; ) {
                            if (null === n.return || n.return === e) return null;
                            n = n.return;
                        }
                        (n.sibling.return = n.return), (n = n.sibling);
                    }
                    return null;
                }
                var Fi = null,
                    Bi = null,
                    Ui = !1;
                function Vi(e, n) {
                    var t = Wu(5, null, null, 0);
                    (t.elementType = "DELETED"), (t.type = "DELETED"), (t.stateNode = n), (t.return = e), (t.flags = 8), null !== e.lastEffect ? ((e.lastEffect.nextEffect = t), (e.lastEffect = t)) : (e.firstEffect = e.lastEffect = t);
                }
                function Hi(e, n) {
                    switch (e.tag) {
                        case 5:
                            var t = e.type;
                            return null !== (n = 1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n) && ((e.stateNode = n), !0);
                        case 6:
                            return null !== (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) && ((e.stateNode = n), !0);
                        default:
                            return !1;
                    }
                }
                function Wi(e) {
                    if (Ui) {
                        var n = Bi;
                        if (n) {
                            var t = n;
                            if (!Hi(e, n)) {
                                if (!(n = Qr(t.nextSibling)) || !Hi(e, n)) return (e.flags = (-1025 & e.flags) | 2), (Ui = !1), void (Fi = e);
                                Vi(Fi, t);
                            }
                            (Fi = e), (Bi = Qr(n.firstChild));
                        } else (e.flags = (-1025 & e.flags) | 2), (Ui = !1), (Fi = e);
                    }
                }
                function Gi(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
                    Fi = e;
                }
                function Ki(e) {
                    if (e !== Fi) return !1;
                    if (!Ui) return Gi(e), (Ui = !0), !1;
                    var n = e.type;
                    if (5 !== e.tag || ("head" !== n && "body" !== n && !Wr(n, e.memoizedProps))) for (n = Bi; n; ) Vi(e, n), (n = Qr(n.nextSibling));
                    if ((Gi(e), 13 === e.tag)) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
                        e: {
                            for (e = e.nextSibling, n = 0; e; ) {
                                if (8 === e.nodeType) {
                                    var t = e.data;
                                    if ("/$" === t) {
                                        if (0 === n) {
                                            Bi = Qr(e.nextSibling);
                                            break e;
                                        }
                                        n--;
                                    } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                                }
                                e = e.nextSibling;
                            }
                            Bi = null;
                        }
                    } else Bi = Fi ? Qr(e.stateNode.nextSibling) : null;
                    return !0;
                }
                function $i() {
                    (Bi = Fi = null), (Ui = !1);
                }
                var Qi = [];
                function qi() {
                    for (var e = 0; e < Qi.length; e++) Qi[e]._workInProgressVersionPrimary = null;
                    Qi.length = 0;
                }
                var Yi = k.ReactCurrentDispatcher,
                    Ji = k.ReactCurrentBatchConfig,
                    Xi = 0,
                    Zi = null,
                    el = null,
                    nl = null,
                    tl = !1,
                    rl = !1;
                function al() {
                    throw Error(l(321));
                }
                function il(e, n) {
                    if (null === n) return !1;
                    for (var t = 0; t < n.length && t < e.length; t++) if (!cr(e[t], n[t])) return !1;
                    return !0;
                }
                function ll(e, n, t, r, a, i) {
                    if (((Xi = i), (Zi = n), (n.memoizedState = null), (n.updateQueue = null), (n.lanes = 0), (Yi.current = null === e || null === e.memoizedState ? jl : Tl), (e = t(r, a)), rl)) {
                        i = 0;
                        do {
                            if (((rl = !1), !(25 > i))) throw Error(l(301));
                            (i += 1), (nl = el = null), (n.updateQueue = null), (Yi.current = zl), (e = t(r, a));
                        } while (rl);
                    }
                    if (((Yi.current = Ol), (n = null !== el && null !== el.next), (Xi = 0), (nl = el = Zi = null), (tl = !1), n)) throw Error(l(300));
                    return e;
                }
                function ol() {
                    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
                    return null === nl ? (Zi.memoizedState = nl = e) : (nl = nl.next = e), nl;
                }
                function ul() {
                    if (null === el) {
                        var e = Zi.alternate;
                        e = null !== e ? e.memoizedState : null;
                    } else e = el.next;
                    var n = null === nl ? Zi.memoizedState : nl.next;
                    if (null !== n) (nl = n), (el = e);
                    else {
                        if (null === e) throw Error(l(310));
                        (e = { memoizedState: (el = e).memoizedState, baseState: el.baseState, baseQueue: el.baseQueue, queue: el.queue, next: null }), null === nl ? (Zi.memoizedState = nl = e) : (nl = nl.next = e);
                    }
                    return nl;
                }
                function sl(e, n) {
                    return "function" === typeof n ? n(e) : n;
                }
                function cl(e) {
                    var n = ul(),
                        t = n.queue;
                    if (null === t) throw Error(l(311));
                    t.lastRenderedReducer = e;
                    var r = el,
                        a = r.baseQueue,
                        i = t.pending;
                    if (null !== i) {
                        if (null !== a) {
                            var o = a.next;
                            (a.next = i.next), (i.next = o);
                        }
                        (r.baseQueue = a = i), (t.pending = null);
                    }
                    if (null !== a) {
                        (a = a.next), (r = r.baseState);
                        var u = (o = i = null),
                            s = a;
                        do {
                            var c = s.lane;
                            if ((Xi & c) === c) null !== u && (u = u.next = { lane: 0, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null }), (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
                            else {
                                var d = { lane: c, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null };
                                null === u ? ((o = u = d), (i = r)) : (u = u.next = d), (Zi.lanes |= c), (Uo |= c);
                            }
                            s = s.next;
                        } while (null !== s && s !== a);
                        null === u ? (i = r) : (u.next = o), cr(r, n.memoizedState) || (Rl = !0), (n.memoizedState = r), (n.baseState = i), (n.baseQueue = u), (t.lastRenderedState = r);
                    }
                    return [n.memoizedState, t.dispatch];
                }
                function dl(e) {
                    var n = ul(),
                        t = n.queue;
                    if (null === t) throw Error(l(311));
                    t.lastRenderedReducer = e;
                    var r = t.dispatch,
                        a = t.pending,
                        i = n.memoizedState;
                    if (null !== a) {
                        t.pending = null;
                        var o = (a = a.next);
                        do {
                            (i = e(i, o.action)), (o = o.next);
                        } while (o !== a);
                        cr(i, n.memoizedState) || (Rl = !0), (n.memoizedState = i), null === n.baseQueue && (n.baseState = i), (t.lastRenderedState = i);
                    }
                    return [i, r];
                }
                function fl(e, n, t) {
                    var r = n._getVersion;
                    r = r(n._source);
                    var a = n._workInProgressVersionPrimary;
                    if ((null !== a ? (e = a === r) : ((e = e.mutableReadLanes), (e = (Xi & e) === e) && ((n._workInProgressVersionPrimary = r), Qi.push(n))), e)) return t(n._source);
                    throw (Qi.push(n), Error(l(350)));
                }
                function pl(e, n, t, r) {
                    var a = To;
                    if (null === a) throw Error(l(349));
                    var i = n._getVersion,
                        o = i(n._source),
                        u = Yi.current,
                        s = u.useState(function () {
                            return fl(a, n, t);
                        }),
                        c = s[1],
                        d = s[0];
                    s = nl;
                    var f = e.memoizedState,
                        p = f.refs,
                        m = p.getSnapshot,
                        h = f.source;
                    f = f.subscribe;
                    var g = Zi;
                    return (
                        (e.memoizedState = { refs: p, source: n, subscribe: r }),
                        u.useEffect(
                            function () {
                                (p.getSnapshot = t), (p.setSnapshot = c);
                                var e = i(n._source);
                                if (!cr(o, e)) {
                                    (e = t(n._source)), cr(d, e) || (c(e), (e = pu(g)), (a.mutableReadLanes |= e & a.pendingLanes)), (e = a.mutableReadLanes), (a.entangledLanes |= e);
                                    for (var r = a.entanglements, l = e; 0 < l; ) {
                                        var u = 31 - Gn(l),
                                            s = 1 << u;
                                        (r[u] |= e), (l &= ~s);
                                    }
                                }
                            },
                            [t, n, r]
                        ),
                        u.useEffect(
                            function () {
                                return r(n._source, function () {
                                    var e = p.getSnapshot,
                                        t = p.setSnapshot;
                                    try {
                                        t(e(n._source));
                                        var r = pu(g);
                                        a.mutableReadLanes |= r & a.pendingLanes;
                                    } catch (i) {
                                        t(function () {
                                            throw i;
                                        });
                                    }
                                });
                            },
                            [n, r]
                        ),
                        (cr(m, t) && cr(h, n) && cr(f, r)) ||
                            (((e = { pending: null, dispatch: null, lastRenderedReducer: sl, lastRenderedState: d }).dispatch = c = Ml.bind(null, Zi, e)),
                            (s.queue = e),
                            (s.baseQueue = null),
                            (d = fl(a, n, t)),
                            (s.memoizedState = s.baseState = d)),
                        d
                    );
                }
                function ml(e, n, t) {
                    return pl(ul(), e, n, t);
                }
                function hl(e) {
                    var n = ol();
                    return (
                        "function" === typeof e && (e = e()),
                        (n.memoizedState = n.baseState = e),
                        (e = (e = n.queue = { pending: null, dispatch: null, lastRenderedReducer: sl, lastRenderedState: e }).dispatch = Ml.bind(null, Zi, e)),
                        [n.memoizedState, e]
                    );
                }
                function gl(e, n, t, r) {
                    return (
                        (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
                        null === (n = Zi.updateQueue)
                            ? ((n = { lastEffect: null }), (Zi.updateQueue = n), (n.lastEffect = e.next = e))
                            : null === (t = n.lastEffect)
                            ? (n.lastEffect = e.next = e)
                            : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
                        e
                    );
                }
                function yl(e) {
                    return (e = { current: e }), (ol().memoizedState = e);
                }
                function vl() {
                    return ul().memoizedState;
                }
                function bl(e, n, t, r) {
                    var a = ol();
                    (Zi.flags |= e), (a.memoizedState = gl(1 | n, t, void 0, void 0 === r ? null : r));
                }
                function wl(e, n, t, r) {
                    var a = ul();
                    r = void 0 === r ? null : r;
                    var i = void 0;
                    if (null !== el) {
                        var l = el.memoizedState;
                        if (((i = l.destroy), null !== r && il(r, l.deps))) return void gl(n, t, i, r);
                    }
                    (Zi.flags |= e), (a.memoizedState = gl(1 | n, t, i, r));
                }
                function kl(e, n) {
                    return bl(516, 4, e, n);
                }
                function Sl(e, n) {
                    return wl(516, 4, e, n);
                }
                function xl(e, n) {
                    return wl(4, 2, e, n);
                }
                function El(e, n) {
                    return "function" === typeof n
                        ? ((e = e()),
                          n(e),
                          function () {
                              n(null);
                          })
                        : null !== n && void 0 !== n
                        ? ((e = e()),
                          (n.current = e),
                          function () {
                              n.current = null;
                          })
                        : void 0;
                }
                function Cl(e, n, t) {
                    return (t = null !== t && void 0 !== t ? t.concat([e]) : null), wl(4, 2, El.bind(null, n, e), t);
                }
                function _l() {}
                function Ll(e, n) {
                    var t = ul();
                    n = void 0 === n ? null : n;
                    var r = t.memoizedState;
                    return null !== r && null !== n && il(n, r[1]) ? r[0] : ((t.memoizedState = [e, n]), e);
                }
                function Pl(e, n) {
                    var t = ul();
                    n = void 0 === n ? null : n;
                    var r = t.memoizedState;
                    return null !== r && null !== n && il(n, r[1]) ? r[0] : ((e = e()), (t.memoizedState = [e, n]), e);
                }
                function Nl(e, n) {
                    var t = Wa();
                    Ka(98 > t ? 98 : t, function () {
                        e(!0);
                    }),
                        Ka(97 < t ? 97 : t, function () {
                            var t = Ji.transition;
                            Ji.transition = 1;
                            try {
                                e(!1), n();
                            } finally {
                                Ji.transition = t;
                            }
                        });
                }
                function Ml(e, n, t) {
                    var r = fu(),
                        a = pu(e),
                        i = { lane: a, action: t, eagerReducer: null, eagerState: null, next: null },
                        l = n.pending;
                    if ((null === l ? (i.next = i) : ((i.next = l.next), (l.next = i)), (n.pending = i), (l = e.alternate), e === Zi || (null !== l && l === Zi))) rl = tl = !0;
                    else {
                        if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = n.lastRenderedReducer))
                            try {
                                var o = n.lastRenderedState,
                                    u = l(o, t);
                                if (((i.eagerReducer = l), (i.eagerState = u), cr(u, o))) return;
                            } catch (s) {}
                        mu(e, a, r);
                    }
                }
                var Ol = {
                        readContext: li,
                        useCallback: al,
                        useContext: al,
                        useEffect: al,
                        useImperativeHandle: al,
                        useLayoutEffect: al,
                        useMemo: al,
                        useReducer: al,
                        useRef: al,
                        useState: al,
                        useDebugValue: al,
                        useDeferredValue: al,
                        useTransition: al,
                        useMutableSource: al,
                        useOpaqueIdentifier: al,
                        unstable_isNewReconciler: !1,
                    },
                    jl = {
                        readContext: li,
                        useCallback: function (e, n) {
                            return (ol().memoizedState = [e, void 0 === n ? null : n]), e;
                        },
                        useContext: li,
                        useEffect: kl,
                        useImperativeHandle: function (e, n, t) {
                            return (t = null !== t && void 0 !== t ? t.concat([e]) : null), bl(4, 2, El.bind(null, n, e), t);
                        },
                        useLayoutEffect: function (e, n) {
                            return bl(4, 2, e, n);
                        },
                        useMemo: function (e, n) {
                            var t = ol();
                            return (n = void 0 === n ? null : n), (e = e()), (t.memoizedState = [e, n]), e;
                        },
                        useReducer: function (e, n, t) {
                            var r = ol();
                            return (
                                (n = void 0 !== t ? t(n) : n),
                                (r.memoizedState = r.baseState = n),
                                (e = (e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }).dispatch = Ml.bind(null, Zi, e)),
                                [r.memoizedState, e]
                            );
                        },
                        useRef: yl,
                        useState: hl,
                        useDebugValue: _l,
                        useDeferredValue: function (e) {
                            var n = hl(e),
                                t = n[0],
                                r = n[1];
                            return (
                                kl(
                                    function () {
                                        var n = Ji.transition;
                                        Ji.transition = 1;
                                        try {
                                            r(e);
                                        } finally {
                                            Ji.transition = n;
                                        }
                                    },
                                    [e]
                                ),
                                t
                            );
                        },
                        useTransition: function () {
                            var e = hl(!1),
                                n = e[0];
                            return yl((e = Nl.bind(null, e[1]))), [e, n];
                        },
                        useMutableSource: function (e, n, t) {
                            var r = ol();
                            return (r.memoizedState = { refs: { getSnapshot: n, setSnapshot: null }, source: e, subscribe: t }), pl(r, e, n, t);
                        },
                        useOpaqueIdentifier: function () {
                            if (Ui) {
                                var e = !1,
                                    n = (function (e) {
                                        return { $$typeof: A, toString: e, valueOf: e };
                                    })(function () {
                                        throw (e || ((e = !0), t("r:" + (Yr++).toString(36))), Error(l(355)));
                                    }),
                                    t = hl(n)[1];
                                return (
                                    0 === (2 & Zi.mode) &&
                                        ((Zi.flags |= 516),
                                        gl(
                                            5,
                                            function () {
                                                t("r:" + (Yr++).toString(36));
                                            },
                                            void 0,
                                            null
                                        )),
                                    n
                                );
                            }
                            return hl((n = "r:" + (Yr++).toString(36))), n;
                        },
                        unstable_isNewReconciler: !1,
                    },
                    Tl = {
                        readContext: li,
                        useCallback: Ll,
                        useContext: li,
                        useEffect: Sl,
                        useImperativeHandle: Cl,
                        useLayoutEffect: xl,
                        useMemo: Pl,
                        useReducer: cl,
                        useRef: vl,
                        useState: function () {
                            return cl(sl);
                        },
                        useDebugValue: _l,
                        useDeferredValue: function (e) {
                            var n = cl(sl),
                                t = n[0],
                                r = n[1];
                            return (
                                Sl(
                                    function () {
                                        var n = Ji.transition;
                                        Ji.transition = 1;
                                        try {
                                            r(e);
                                        } finally {
                                            Ji.transition = n;
                                        }
                                    },
                                    [e]
                                ),
                                t
                            );
                        },
                        useTransition: function () {
                            var e = cl(sl)[0];
                            return [vl().current, e];
                        },
                        useMutableSource: ml,
                        useOpaqueIdentifier: function () {
                            return cl(sl)[0];
                        },
                        unstable_isNewReconciler: !1,
                    },
                    zl = {
                        readContext: li,
                        useCallback: Ll,
                        useContext: li,
                        useEffect: Sl,
                        useImperativeHandle: Cl,
                        useLayoutEffect: xl,
                        useMemo: Pl,
                        useReducer: dl,
                        useRef: vl,
                        useState: function () {
                            return dl(sl);
                        },
                        useDebugValue: _l,
                        useDeferredValue: function (e) {
                            var n = dl(sl),
                                t = n[0],
                                r = n[1];
                            return (
                                Sl(
                                    function () {
                                        var n = Ji.transition;
                                        Ji.transition = 1;
                                        try {
                                            r(e);
                                        } finally {
                                            Ji.transition = n;
                                        }
                                    },
                                    [e]
                                ),
                                t
                            );
                        },
                        useTransition: function () {
                            var e = dl(sl)[0];
                            return [vl().current, e];
                        },
                        useMutableSource: ml,
                        useOpaqueIdentifier: function () {
                            return dl(sl)[0];
                        },
                        unstable_isNewReconciler: !1,
                    },
                    Al = k.ReactCurrentOwner,
                    Rl = !1;
                function Dl(e, n, t, r) {
                    n.child = null === e ? Li(n, null, t, r) : _i(n, e.child, t, r);
                }
                function Il(e, n, t, r, a) {
                    t = t.render;
                    var i = n.ref;
                    return ii(n, a), (r = ll(e, n, t, r, i, a)), null === e || Rl ? ((n.flags |= 1), Dl(e, n, r, a), n.child) : ((n.updateQueue = e.updateQueue), (n.flags &= -517), (e.lanes &= ~a), ao(e, n, a));
                }
                function Fl(e, n, t, r, a, i) {
                    if (null === e) {
                        var l = t.type;
                        return "function" !== typeof l || Gu(l) || void 0 !== l.defaultProps || null !== t.compare || void 0 !== t.defaultProps
                            ? (((e = $u(t.type, null, r, n, n.mode, i)).ref = n.ref), (e.return = n), (n.child = e))
                            : ((n.tag = 15), (n.type = l), Bl(e, n, l, r, a, i));
                    }
                    return (
                        (l = e.child), 0 === (a & i) && ((a = l.memoizedProps), (t = null !== (t = t.compare) ? t : fr)(a, r) && e.ref === n.ref) ? ao(e, n, i) : ((n.flags |= 1), ((e = Ku(l, r)).ref = n.ref), (e.return = n), (n.child = e))
                    );
                }
                function Bl(e, n, t, r, a, i) {
                    if (null !== e && fr(e.memoizedProps, r) && e.ref === n.ref) {
                        if (((Rl = !1), 0 === (i & a))) return (n.lanes = e.lanes), ao(e, n, i);
                        0 !== (16384 & e.flags) && (Rl = !0);
                    }
                    return Hl(e, n, t, r, i);
                }
                function Ul(e, n, t) {
                    var r = n.pendingProps,
                        a = r.children,
                        i = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
                        if (0 === (4 & n.mode)) (n.memoizedState = { baseLanes: 0 }), Su(n, t);
                        else {
                            if (0 === (1073741824 & t)) return (e = null !== i ? i.baseLanes | t : t), (n.lanes = n.childLanes = 1073741824), (n.memoizedState = { baseLanes: e }), Su(n, e), null;
                            (n.memoizedState = { baseLanes: 0 }), Su(n, null !== i ? i.baseLanes : t);
                        }
                    else null !== i ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t), Su(n, r);
                    return Dl(e, n, a, t), n.child;
                }
                function Vl(e, n) {
                    var t = n.ref;
                    ((null === e && null !== t) || (null !== e && e.ref !== t)) && (n.flags |= 128);
                }
                function Hl(e, n, t, r, a) {
                    var i = ya(t) ? ha : pa.current;
                    return (i = ga(n, i)), ii(n, a), (t = ll(e, n, t, r, i, a)), null === e || Rl ? ((n.flags |= 1), Dl(e, n, t, a), n.child) : ((n.updateQueue = e.updateQueue), (n.flags &= -517), (e.lanes &= ~a), ao(e, n, a));
                }
                function Wl(e, n, t, r, a) {
                    if (ya(t)) {
                        var i = !0;
                        ka(n);
                    } else i = !1;
                    if ((ii(n, a), null === n.stateNode)) null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)), bi(n, t, r), ki(n, t, r, a), (r = !0);
                    else if (null === e) {
                        var l = n.stateNode,
                            o = n.memoizedProps;
                        l.props = o;
                        var u = l.context,
                            s = t.contextType;
                        "object" === typeof s && null !== s ? (s = li(s)) : (s = ga(n, (s = ya(t) ? ha : pa.current)));
                        var c = t.getDerivedStateFromProps,
                            d = "function" === typeof c || "function" === typeof l.getSnapshotBeforeUpdate;
                        d || ("function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps) || ((o !== r || u !== s) && wi(n, l, r, s)), (oi = !1);
                        var f = n.memoizedState;
                        (l.state = f),
                            pi(n, r, l, a),
                            (u = n.memoizedState),
                            o !== r || f !== u || ma.current || oi
                                ? ("function" === typeof c && (gi(n, t, c, r), (u = n.memoizedState)),
                                  (o = oi || vi(n, t, o, r, f, u, s))
                                      ? (d ||
                                            ("function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount) ||
                                            ("function" === typeof l.componentWillMount && l.componentWillMount(), "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()),
                                        "function" === typeof l.componentDidMount && (n.flags |= 4))
                                      : ("function" === typeof l.componentDidMount && (n.flags |= 4), (n.memoizedProps = r), (n.memoizedState = u)),
                                  (l.props = r),
                                  (l.state = u),
                                  (l.context = s),
                                  (r = o))
                                : ("function" === typeof l.componentDidMount && (n.flags |= 4), (r = !1));
                    } else {
                        (l = n.stateNode),
                            si(e, n),
                            (o = n.memoizedProps),
                            (s = n.type === n.elementType ? o : Ja(n.type, o)),
                            (l.props = s),
                            (d = n.pendingProps),
                            (f = l.context),
                            "object" === typeof (u = t.contextType) && null !== u ? (u = li(u)) : (u = ga(n, (u = ya(t) ? ha : pa.current)));
                        var p = t.getDerivedStateFromProps;
                        (c = "function" === typeof p || "function" === typeof l.getSnapshotBeforeUpdate) ||
                            ("function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps) ||
                            ((o !== d || f !== u) && wi(n, l, r, u)),
                            (oi = !1),
                            (f = n.memoizedState),
                            (l.state = f),
                            pi(n, r, l, a);
                        var m = n.memoizedState;
                        o !== d || f !== m || ma.current || oi
                            ? ("function" === typeof p && (gi(n, t, p, r), (m = n.memoizedState)),
                              (s = oi || vi(n, t, s, r, f, m, u))
                                  ? (c ||
                                        ("function" !== typeof l.UNSAFE_componentWillUpdate && "function" !== typeof l.componentWillUpdate) ||
                                        ("function" === typeof l.componentWillUpdate && l.componentWillUpdate(r, m, u), "function" === typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, m, u)),
                                    "function" === typeof l.componentDidUpdate && (n.flags |= 4),
                                    "function" === typeof l.getSnapshotBeforeUpdate && (n.flags |= 256))
                                  : ("function" !== typeof l.componentDidUpdate || (o === e.memoizedProps && f === e.memoizedState) || (n.flags |= 4),
                                    "function" !== typeof l.getSnapshotBeforeUpdate || (o === e.memoizedProps && f === e.memoizedState) || (n.flags |= 256),
                                    (n.memoizedProps = r),
                                    (n.memoizedState = m)),
                              (l.props = r),
                              (l.state = m),
                              (l.context = u),
                              (r = s))
                            : ("function" !== typeof l.componentDidUpdate || (o === e.memoizedProps && f === e.memoizedState) || (n.flags |= 4),
                              "function" !== typeof l.getSnapshotBeforeUpdate || (o === e.memoizedProps && f === e.memoizedState) || (n.flags |= 256),
                              (r = !1));
                    }
                    return Gl(e, n, t, r, i, a);
                }
                function Gl(e, n, t, r, a, i) {
                    Vl(e, n);
                    var l = 0 !== (64 & n.flags);
                    if (!r && !l) return a && Sa(n, t, !1), ao(e, n, i);
                    (r = n.stateNode), (Al.current = n);
                    var o = l && "function" !== typeof t.getDerivedStateFromError ? null : r.render();
                    return (n.flags |= 1), null !== e && l ? ((n.child = _i(n, e.child, null, i)), (n.child = _i(n, null, o, i))) : Dl(e, n, o, i), (n.memoizedState = r.state), a && Sa(n, t, !0), n.child;
                }
                function Kl(e) {
                    var n = e.stateNode;
                    n.pendingContext ? ba(0, n.pendingContext, n.pendingContext !== n.context) : n.context && ba(0, n.context, !1), Ti(e, n.containerInfo);
                }
                var $l,
                    Ql,
                    ql,
                    Yl = { dehydrated: null, retryLane: 0 };
                function Jl(e, n, t) {
                    var r,
                        a = n.pendingProps,
                        i = Di.current,
                        l = !1;
                    return (
                        (r = 0 !== (64 & n.flags)) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
                        r ? ((l = !0), (n.flags &= -65)) : (null !== e && null === e.memoizedState) || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (i |= 1),
                        da(Di, 1 & i),
                        null === e
                            ? (void 0 !== a.fallback && Wi(n),
                              (e = a.children),
                              (i = a.fallback),
                              l
                                  ? ((e = Xl(n, e, i, t)), (n.child.memoizedState = { baseLanes: t }), (n.memoizedState = Yl), e)
                                  : "number" === typeof a.unstable_expectedLoadTime
                                  ? ((e = Xl(n, e, i, t)), (n.child.memoizedState = { baseLanes: t }), (n.memoizedState = Yl), (n.lanes = 33554432), e)
                                  : (((t = qu({ mode: "visible", children: e }, n.mode, t, null)).return = n), (n.child = t)))
                            : (e.memoizedState,
                              l
                                  ? ((a = eo(e, n, a.children, a.fallback, t)),
                                    (l = n.child),
                                    (i = e.child.memoizedState),
                                    (l.memoizedState = null === i ? { baseLanes: t } : { baseLanes: i.baseLanes | t }),
                                    (l.childLanes = e.childLanes & ~t),
                                    (n.memoizedState = Yl),
                                    a)
                                  : ((t = Zl(e, n, a.children, t)), (n.memoizedState = null), t))
                    );
                }
                function Xl(e, n, t, r) {
                    var a = e.mode,
                        i = e.child;
                    return (
                        (n = { mode: "hidden", children: n }),
                        0 === (2 & a) && null !== i ? ((i.childLanes = 0), (i.pendingProps = n)) : (i = qu(n, a, 0, null)),
                        (t = Qu(t, a, r, null)),
                        (i.return = e),
                        (t.return = e),
                        (i.sibling = t),
                        (e.child = i),
                        t
                    );
                }
                function Zl(e, n, t, r) {
                    var a = e.child;
                    return (
                        (e = a.sibling),
                        (t = Ku(a, { mode: "visible", children: t })),
                        0 === (2 & n.mode) && (t.lanes = r),
                        (t.return = n),
                        (t.sibling = null),
                        null !== e && ((e.nextEffect = null), (e.flags = 8), (n.firstEffect = n.lastEffect = e)),
                        (n.child = t)
                    );
                }
                function eo(e, n, t, r, a) {
                    var i = n.mode,
                        l = e.child;
                    e = l.sibling;
                    var o = { mode: "hidden", children: t };
                    return (
                        0 === (2 & i) && n.child !== l
                            ? (((t = n.child).childLanes = 0), (t.pendingProps = o), null !== (l = t.lastEffect) ? ((n.firstEffect = t.firstEffect), (n.lastEffect = l), (l.nextEffect = null)) : (n.firstEffect = n.lastEffect = null))
                            : (t = Ku(l, o)),
                        null !== e ? (r = Ku(e, r)) : ((r = Qu(r, i, a, null)).flags |= 2),
                        (r.return = n),
                        (t.return = n),
                        (t.sibling = r),
                        (n.child = t),
                        r
                    );
                }
                function no(e, n) {
                    e.lanes |= n;
                    var t = e.alternate;
                    null !== t && (t.lanes |= n), ai(e.return, n);
                }
                function to(e, n, t, r, a, i) {
                    var l = e.memoizedState;
                    null === l
                        ? (e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: a, lastEffect: i })
                        : ((l.isBackwards = n), (l.rendering = null), (l.renderingStartTime = 0), (l.last = r), (l.tail = t), (l.tailMode = a), (l.lastEffect = i));
                }
                function ro(e, n, t) {
                    var r = n.pendingProps,
                        a = r.revealOrder,
                        i = r.tail;
                    if ((Dl(e, n, r.children, t), 0 !== (2 & (r = Di.current)))) (r = (1 & r) | 2), (n.flags |= 64);
                    else {
                        if (null !== e && 0 !== (64 & e.flags))
                            e: for (e = n.child; null !== e; ) {
                                if (13 === e.tag) null !== e.memoizedState && no(e, t);
                                else if (19 === e.tag) no(e, t);
                                else if (null !== e.child) {
                                    (e.child.return = e), (e = e.child);
                                    continue;
                                }
                                if (e === n) break e;
                                for (; null === e.sibling; ) {
                                    if (null === e.return || e.return === n) break e;
                                    e = e.return;
                                }
                                (e.sibling.return = e.return), (e = e.sibling);
                            }
                        r &= 1;
                    }
                    if ((da(Di, r), 0 === (2 & n.mode))) n.memoizedState = null;
                    else
                        switch (a) {
                            case "forwards":
                                for (t = n.child, a = null; null !== t; ) null !== (e = t.alternate) && null === Ii(e) && (a = t), (t = t.sibling);
                                null === (t = a) ? ((a = n.child), (n.child = null)) : ((a = t.sibling), (t.sibling = null)), to(n, !1, a, t, i, n.lastEffect);
                                break;
                            case "backwards":
                                for (t = null, a = n.child, n.child = null; null !== a; ) {
                                    if (null !== (e = a.alternate) && null === Ii(e)) {
                                        n.child = a;
                                        break;
                                    }
                                    (e = a.sibling), (a.sibling = t), (t = a), (a = e);
                                }
                                to(n, !0, t, null, i, n.lastEffect);
                                break;
                            case "together":
                                to(n, !1, null, null, void 0, n.lastEffect);
                                break;
                            default:
                                n.memoizedState = null;
                        }
                    return n.child;
                }
                function ao(e, n, t) {
                    if ((null !== e && (n.dependencies = e.dependencies), (Uo |= n.lanes), 0 !== (t & n.childLanes))) {
                        if (null !== e && n.child !== e.child) throw Error(l(153));
                        if (null !== n.child) {
                            for (t = Ku((e = n.child), e.pendingProps), n.child = t, t.return = n; null !== e.sibling; ) (e = e.sibling), ((t = t.sibling = Ku(e, e.pendingProps)).return = n);
                            t.sibling = null;
                        }
                        return n.child;
                    }
                    return null;
                }
                function io(e, n) {
                    if (!Ui)
                        switch (e.tailMode) {
                            case "hidden":
                                n = e.tail;
                                for (var t = null; null !== n; ) null !== n.alternate && (t = n), (n = n.sibling);
                                null === t ? (e.tail = null) : (t.sibling = null);
                                break;
                            case "collapsed":
                                t = e.tail;
                                for (var r = null; null !== t; ) null !== t.alternate && (r = t), (t = t.sibling);
                                null === r ? (n || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
                        }
                }
                function lo(e, n, t) {
                    var r = n.pendingProps;
                    switch (n.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return null;
                        case 1:
                        case 17:
                            return ya(n.type) && va(), null;
                        case 3:
                            return (
                                zi(),
                                ca(ma),
                                ca(pa),
                                qi(),
                                (r = n.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                                (null !== e && null !== e.child) || (Ki(n) ? (n.flags |= 4) : r.hydrate || (n.flags |= 256)),
                                null
                            );
                        case 5:
                            Ri(n);
                            var i = ji(Oi.current);
                            if (((t = n.type), null !== e && null != n.stateNode)) Ql(e, n, t, r), e.ref !== n.ref && (n.flags |= 128);
                            else {
                                if (!r) {
                                    if (null === n.stateNode) throw Error(l(166));
                                    return null;
                                }
                                if (((e = ji(Ni.current)), Ki(n))) {
                                    (r = n.stateNode), (t = n.type);
                                    var o = n.memoizedProps;
                                    switch (((r[Xr] = n), (r[Zr] = o), t)) {
                                        case "dialog":
                                            Mr("cancel", r), Mr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Mr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (e = 0; e < _r.length; e++) Mr(_r[e], r);
                                            break;
                                        case "source":
                                            Mr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Mr("error", r), Mr("load", r);
                                            break;
                                        case "details":
                                            Mr("toggle", r);
                                            break;
                                        case "input":
                                            ee(r, o), Mr("invalid", r);
                                            break;
                                        case "select":
                                            (r._wrapperState = { wasMultiple: !!o.multiple }), Mr("invalid", r);
                                            break;
                                        case "textarea":
                                            ue(r, o), Mr("invalid", r);
                                    }
                                    for (var s in (Ee(t, o), (e = null), o))
                                        o.hasOwnProperty(s) &&
                                            ((i = o[s]),
                                            "children" === s
                                                ? "string" === typeof i
                                                    ? r.textContent !== i && (e = ["children", i])
                                                    : "number" === typeof i && r.textContent !== "" + i && (e = ["children", "" + i])
                                                : u.hasOwnProperty(s) && null != i && "onScroll" === s && Mr("scroll", r));
                                    switch (t) {
                                        case "input":
                                            Y(r), re(r, o, !0);
                                            break;
                                        case "textarea":
                                            Y(r), ce(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof o.onClick && (r.onclick = Br);
                                    }
                                    (r = e), (n.updateQueue = r), null !== r && (n.flags |= 4);
                                } else {
                                    switch (
                                        ((s = 9 === i.nodeType ? i : i.ownerDocument),
                                        e === de && (e = pe(t)),
                                        e === de
                                            ? "script" === t
                                                ? (((e = s.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                                                : "string" === typeof r.is
                                                ? (e = s.createElement(t, { is: r.is }))
                                                : ((e = s.createElement(t)), "select" === t && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                                            : (e = s.createElementNS(e, t)),
                                        (e[Xr] = n),
                                        (e[Zr] = r),
                                        $l(e, n),
                                        (n.stateNode = e),
                                        (s = Ce(t, r)),
                                        t)
                                    ) {
                                        case "dialog":
                                            Mr("cancel", e), Mr("close", e), (i = r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Mr("load", e), (i = r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (i = 0; i < _r.length; i++) Mr(_r[i], e);
                                            i = r;
                                            break;
                                        case "source":
                                            Mr("error", e), (i = r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Mr("error", e), Mr("load", e), (i = r);
                                            break;
                                        case "details":
                                            Mr("toggle", e), (i = r);
                                            break;
                                        case "input":
                                            ee(e, r), (i = Z(e, r)), Mr("invalid", e);
                                            break;
                                        case "option":
                                            i = ie(e, r);
                                            break;
                                        case "select":
                                            (e._wrapperState = { wasMultiple: !!r.multiple }), (i = a({}, r, { value: void 0 })), Mr("invalid", e);
                                            break;
                                        case "textarea":
                                            ue(e, r), (i = oe(e, r)), Mr("invalid", e);
                                            break;
                                        default:
                                            i = r;
                                    }
                                    Ee(t, i);
                                    var c = i;
                                    for (o in c)
                                        if (c.hasOwnProperty(o)) {
                                            var d = c[o];
                                            "style" === o
                                                ? Se(e, d)
                                                : "dangerouslySetInnerHTML" === o
                                                ? null != (d = d ? d.__html : void 0) && ye(e, d)
                                                : "children" === o
                                                ? "string" === typeof d
                                                    ? ("textarea" !== t || "" !== d) && ve(e, d)
                                                    : "number" === typeof d && ve(e, "" + d)
                                                : "suppressContentEditableWarning" !== o &&
                                                  "suppressHydrationWarning" !== o &&
                                                  "autoFocus" !== o &&
                                                  (u.hasOwnProperty(o) ? null != d && "onScroll" === o && Mr("scroll", e) : null != d && w(e, o, d, s));
                                        }
                                    switch (t) {
                                        case "input":
                                            Y(e), re(e, r, !1);
                                            break;
                                        case "textarea":
                                            Y(e), ce(e);
                                            break;
                                        case "option":
                                            null != r.value && e.setAttribute("value", "" + Q(r.value));
                                            break;
                                        case "select":
                                            (e.multiple = !!r.multiple), null != (o = r.value) ? le(e, !!r.multiple, o, !1) : null != r.defaultValue && le(e, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof i.onClick && (e.onclick = Br);
                                    }
                                    Hr(t, r) && (n.flags |= 4);
                                }
                                null !== n.ref && (n.flags |= 128);
                            }
                            return null;
                        case 6:
                            if (e && null != n.stateNode) ql(0, n, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === n.stateNode) throw Error(l(166));
                                (t = ji(Oi.current)),
                                    ji(Ni.current),
                                    Ki(n) ? ((r = n.stateNode), (t = n.memoizedProps), (r[Xr] = n), r.nodeValue !== t && (n.flags |= 4)) : (((r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(r))[Xr] = n), (n.stateNode = r));
                            }
                            return null;
                        case 13:
                            return (
                                ca(Di),
                                (r = n.memoizedState),
                                0 !== (64 & n.flags)
                                    ? ((n.lanes = t), n)
                                    : ((r = null !== r),
                                      (t = !1),
                                      null === e ? void 0 !== n.memoizedProps.fallback && Ki(n) : (t = null !== e.memoizedState),
                                      r &&
                                          !t &&
                                          0 !== (2 & n.mode) &&
                                          ((null === e && !0 !== n.memoizedProps.unstable_avoidThisFallback) || 0 !== (1 & Di.current)
                                              ? 0 === Io && (Io = 3)
                                              : ((0 !== Io && 3 !== Io) || (Io = 4), null === To || (0 === (134217727 & Uo) && 0 === (134217727 & Vo)) || vu(To, Ao))),
                                      (r || t) && (n.flags |= 4),
                                      null)
                            );
                        case 4:
                            return zi(), null === e && jr(n.stateNode.containerInfo), null;
                        case 10:
                            return ri(n), null;
                        case 19:
                            if ((ca(Di), null === (r = n.memoizedState))) return null;
                            if (((o = 0 !== (64 & n.flags)), null === (s = r.rendering)))
                                if (o) io(r, !1);
                                else {
                                    if (0 !== Io || (null !== e && 0 !== (64 & e.flags)))
                                        for (e = n.child; null !== e; ) {
                                            if (null !== (s = Ii(e))) {
                                                for (
                                                    n.flags |= 64,
                                                        io(r, !1),
                                                        null !== (o = s.updateQueue) && ((n.updateQueue = o), (n.flags |= 4)),
                                                        null === r.lastEffect && (n.firstEffect = null),
                                                        n.lastEffect = r.lastEffect,
                                                        r = t,
                                                        t = n.child;
                                                    null !== t;

                                                )
                                                    (e = r),
                                                        ((o = t).flags &= 2),
                                                        (o.nextEffect = null),
                                                        (o.firstEffect = null),
                                                        (o.lastEffect = null),
                                                        null === (s = o.alternate)
                                                            ? ((o.childLanes = 0), (o.lanes = e), (o.child = null), (o.memoizedProps = null), (o.memoizedState = null), (o.updateQueue = null), (o.dependencies = null), (o.stateNode = null))
                                                            : ((o.childLanes = s.childLanes),
                                                              (o.lanes = s.lanes),
                                                              (o.child = s.child),
                                                              (o.memoizedProps = s.memoizedProps),
                                                              (o.memoizedState = s.memoizedState),
                                                              (o.updateQueue = s.updateQueue),
                                                              (o.type = s.type),
                                                              (e = s.dependencies),
                                                              (o.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                                                        (t = t.sibling);
                                                return da(Di, (1 & Di.current) | 2), n.child;
                                            }
                                            e = e.sibling;
                                        }
                                    null !== r.tail && Ha() > Ko && ((n.flags |= 64), (o = !0), io(r, !1), (n.lanes = 33554432));
                                }
                            else {
                                if (!o)
                                    if (null !== (e = Ii(s))) {
                                        if (((n.flags |= 64), (o = !0), null !== (t = e.updateQueue) && ((n.updateQueue = t), (n.flags |= 4)), io(r, !0), null === r.tail && "hidden" === r.tailMode && !s.alternate && !Ui))
                                            return null !== (n = n.lastEffect = r.lastEffect) && (n.nextEffect = null), null;
                                    } else 2 * Ha() - r.renderingStartTime > Ko && 1073741824 !== t && ((n.flags |= 64), (o = !0), io(r, !1), (n.lanes = 33554432));
                                r.isBackwards ? ((s.sibling = n.child), (n.child = s)) : (null !== (t = r.last) ? (t.sibling = s) : (n.child = s), (r.last = s));
                            }
                            return null !== r.tail
                                ? ((t = r.tail), (r.rendering = t), (r.tail = t.sibling), (r.lastEffect = n.lastEffect), (r.renderingStartTime = Ha()), (t.sibling = null), (n = Di.current), da(Di, o ? (1 & n) | 2 : 1 & n), t)
                                : null;
                        case 23:
                        case 24:
                            return xu(), null !== e && (null !== e.memoizedState) !== (null !== n.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (n.flags |= 4), null;
                    }
                    throw Error(l(156, n.tag));
                }
                function oo(e) {
                    switch (e.tag) {
                        case 1:
                            ya(e.type) && va();
                            var n = e.flags;
                            return 4096 & n ? ((e.flags = (-4097 & n) | 64), e) : null;
                        case 3:
                            if ((zi(), ca(ma), ca(pa), qi(), 0 !== (64 & (n = e.flags)))) throw Error(l(285));
                            return (e.flags = (-4097 & n) | 64), e;
                        case 5:
                            return Ri(e), null;
                        case 13:
                            return ca(Di), 4096 & (n = e.flags) ? ((e.flags = (-4097 & n) | 64), e) : null;
                        case 19:
                            return ca(Di), null;
                        case 4:
                            return zi(), null;
                        case 10:
                            return ri(e), null;
                        case 23:
                        case 24:
                            return xu(), null;
                        default:
                            return null;
                    }
                }
                function uo(e, n) {
                    try {
                        var t = "",
                            r = n;
                        do {
                            (t += K(r)), (r = r.return);
                        } while (r);
                        var a = t;
                    } catch (i) {
                        a = "\nError generating stack: " + i.message + "\n" + i.stack;
                    }
                    return { value: e, source: n, stack: a };
                }
                function so(e, n) {
                    try {
                        console.error(n.value);
                    } catch (t) {
                        setTimeout(function () {
                            throw t;
                        });
                    }
                }
                ($l = function (e, n) {
                    for (var t = n.child; null !== t; ) {
                        if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
                        else if (4 !== t.tag && null !== t.child) {
                            (t.child.return = t), (t = t.child);
                            continue;
                        }
                        if (t === n) break;
                        for (; null === t.sibling; ) {
                            if (null === t.return || t.return === n) return;
                            t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                    }
                }),
                    (Ql = function (e, n, t, r) {
                        var i = e.memoizedProps;
                        if (i !== r) {
                            (e = n.stateNode), ji(Ni.current);
                            var l,
                                o = null;
                            switch (t) {
                                case "input":
                                    (i = Z(e, i)), (r = Z(e, r)), (o = []);
                                    break;
                                case "option":
                                    (i = ie(e, i)), (r = ie(e, r)), (o = []);
                                    break;
                                case "select":
                                    (i = a({}, i, { value: void 0 })), (r = a({}, r, { value: void 0 })), (o = []);
                                    break;
                                case "textarea":
                                    (i = oe(e, i)), (r = oe(e, r)), (o = []);
                                    break;
                                default:
                                    "function" !== typeof i.onClick && "function" === typeof r.onClick && (e.onclick = Br);
                            }
                            for (d in (Ee(t, r), (t = null), i))
                                if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && null != i[d])
                                    if ("style" === d) {
                                        var s = i[d];
                                        for (l in s) s.hasOwnProperty(l) && (t || (t = {}), (t[l] = ""));
                                    } else
                                        "dangerouslySetInnerHTML" !== d &&
                                            "children" !== d &&
                                            "suppressContentEditableWarning" !== d &&
                                            "suppressHydrationWarning" !== d &&
                                            "autoFocus" !== d &&
                                            (u.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
                            for (d in r) {
                                var c = r[d];
                                if (((s = null != i ? i[d] : void 0), r.hasOwnProperty(d) && c !== s && (null != c || null != s)))
                                    if ("style" === d)
                                        if (s) {
                                            for (l in s) !s.hasOwnProperty(l) || (c && c.hasOwnProperty(l)) || (t || (t = {}), (t[l] = ""));
                                            for (l in c) c.hasOwnProperty(l) && s[l] !== c[l] && (t || (t = {}), (t[l] = c[l]));
                                        } else t || (o || (o = []), o.push(d, t)), (t = c);
                                    else
                                        "dangerouslySetInnerHTML" === d
                                            ? ((c = c ? c.__html : void 0), (s = s ? s.__html : void 0), null != c && s !== c && (o = o || []).push(d, c))
                                            : "children" === d
                                            ? ("string" !== typeof c && "number" !== typeof c) || (o = o || []).push(d, "" + c)
                                            : "suppressContentEditableWarning" !== d &&
                                              "suppressHydrationWarning" !== d &&
                                              (u.hasOwnProperty(d)
                                                  ? (null != c && "onScroll" === d && Mr("scroll", e), o || s === c || (o = []))
                                                  : "object" === typeof c && null !== c && c.$$typeof === A
                                                  ? c.toString()
                                                  : (o = o || []).push(d, c));
                            }
                            t && (o = o || []).push("style", t);
                            var d = o;
                            (n.updateQueue = d) && (n.flags |= 4);
                        }
                    }),
                    (ql = function (e, n, t, r) {
                        t !== r && (n.flags |= 4);
                    });
                var co = "function" === typeof WeakMap ? WeakMap : Map;
                function fo(e, n, t) {
                    ((t = ci(-1, t)).tag = 3), (t.payload = { element: null });
                    var r = n.value;
                    return (
                        (t.callback = function () {
                            Yo || ((Yo = !0), (Jo = r)), so(0, n);
                        }),
                        t
                    );
                }
                function po(e, n, t) {
                    (t = ci(-1, t)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var a = n.value;
                        t.payload = function () {
                            return so(0, n), r(a);
                        };
                    }
                    var i = e.stateNode;
                    return (
                        null !== i &&
                            "function" === typeof i.componentDidCatch &&
                            (t.callback = function () {
                                "function" !== typeof r && (null === Xo ? (Xo = new Set([this])) : Xo.add(this), so(0, n));
                                var e = n.stack;
                                this.componentDidCatch(n.value, { componentStack: null !== e ? e : "" });
                            }),
                        t
                    );
                }
                var mo = "function" === typeof WeakSet ? WeakSet : Set;
                function ho(e) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" === typeof n)
                            try {
                                n(null);
                            } catch (t) {
                                Bu(e, t);
                            }
                        else n.current = null;
                }
                function go(e, n) {
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            return;
                        case 1:
                            if (256 & n.flags && null !== e) {
                                var t = e.memoizedProps,
                                    r = e.memoizedState;
                                (n = (e = n.stateNode).getSnapshotBeforeUpdate(n.elementType === n.type ? t : Ja(n.type, t), r)), (e.__reactInternalSnapshotBeforeUpdate = n);
                            }
                            return;
                        case 3:
                            return void (256 & n.flags && $r(n.stateNode.containerInfo));
                    }
                    throw Error(l(163));
                }
                function yo(e, n, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            if (null !== (n = null !== (n = t.updateQueue) ? n.lastEffect : null)) {
                                e = n = n.next;
                                do {
                                    if (3 === (3 & e.tag)) {
                                        var r = e.create;
                                        e.destroy = r();
                                    }
                                    e = e.next;
                                } while (e !== n);
                            }
                            if (null !== (n = null !== (n = t.updateQueue) ? n.lastEffect : null)) {
                                e = n = n.next;
                                do {
                                    var a = e;
                                    (r = a.next), 0 !== (4 & (a = a.tag)) && 0 !== (1 & a) && (Du(t, e), Ru(t, e)), (e = r);
                                } while (e !== n);
                            }
                            return;
                        case 1:
                            return (
                                (e = t.stateNode),
                                4 & t.flags &&
                                    (null === n ? e.componentDidMount() : ((r = t.elementType === t.type ? n.memoizedProps : Ja(t.type, n.memoizedProps)), e.componentDidUpdate(r, n.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
                                void (null !== (n = t.updateQueue) && mi(t, n, e))
                            );
                        case 3:
                            if (null !== (n = t.updateQueue)) {
                                if (((e = null), null !== t.child))
                                    switch (t.child.tag) {
                                        case 5:
                                        case 1:
                                            e = t.child.stateNode;
                                    }
                                mi(t, n, e);
                            }
                            return;
                        case 5:
                            return (e = t.stateNode), void (null === n && 4 & t.flags && Hr(t.type, t.memoizedProps) && e.focus());
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 20:
                        case 21:
                        case 23:
                        case 24:
                            return;
                        case 13:
                            return void (null === t.memoizedState && ((t = t.alternate), null !== t && ((t = t.memoizedState), null !== t && ((t = t.dehydrated), null !== t && xn(t)))));
                    }
                    throw Error(l(163));
                }
                function vo(e, n) {
                    for (var t = e; ; ) {
                        if (5 === t.tag) {
                            var r = t.stateNode;
                            if (n) "function" === typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : (r.display = "none");
                            else {
                                r = t.stateNode;
                                var a = t.memoizedProps.style;
                                (a = void 0 !== a && null !== a && a.hasOwnProperty("display") ? a.display : null), (r.style.display = ke("display", a));
                            }
                        } else if (6 === t.tag) t.stateNode.nodeValue = n ? "" : t.memoizedProps;
                        else if (((23 !== t.tag && 24 !== t.tag) || null === t.memoizedState || t === e) && null !== t.child) {
                            (t.child.return = t), (t = t.child);
                            continue;
                        }
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                            if (null === t.return || t.return === e) return;
                            t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                    }
                }
                function bo(e, n) {
                    if (Ea && "function" === typeof Ea.onCommitFiberUnmount)
                        try {
                            Ea.onCommitFiberUnmount(xa, n);
                        } catch (i) {}
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if (null !== (e = n.updateQueue) && null !== (e = e.lastEffect)) {
                                var t = (e = e.next);
                                do {
                                    var r = t,
                                        a = r.destroy;
                                    if (((r = r.tag), void 0 !== a))
                                        if (0 !== (4 & r)) Du(n, t);
                                        else {
                                            r = n;
                                            try {
                                                a();
                                            } catch (i) {
                                                Bu(r, i);
                                            }
                                        }
                                    t = t.next;
                                } while (t !== e);
                            }
                            break;
                        case 1:
                            if ((ho(n), "function" === typeof (e = n.stateNode).componentWillUnmount))
                                try {
                                    (e.props = n.memoizedProps), (e.state = n.memoizedState), e.componentWillUnmount();
                                } catch (i) {
                                    Bu(n, i);
                                }
                            break;
                        case 5:
                            ho(n);
                            break;
                        case 4:
                            Co(e, n);
                    }
                }
                function wo(e) {
                    (e.alternate = null),
                        (e.child = null),
                        (e.dependencies = null),
                        (e.firstEffect = null),
                        (e.lastEffect = null),
                        (e.memoizedProps = null),
                        (e.memoizedState = null),
                        (e.pendingProps = null),
                        (e.return = null),
                        (e.updateQueue = null);
                }
                function ko(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
                }
                function So(e) {
                    e: {
                        for (var n = e.return; null !== n; ) {
                            if (ko(n)) break e;
                            n = n.return;
                        }
                        throw Error(l(160));
                    }
                    var t = n;
                    switch (((n = t.stateNode), t.tag)) {
                        case 5:
                            var r = !1;
                            break;
                        case 3:
                        case 4:
                            (n = n.containerInfo), (r = !0);
                            break;
                        default:
                            throw Error(l(161));
                    }
                    16 & t.flags && (ve(n, ""), (t.flags &= -17));
                    e: n: for (t = e; ; ) {
                        for (; null === t.sibling; ) {
                            if (null === t.return || ko(t.return)) {
                                t = null;
                                break e;
                            }
                            t = t.return;
                        }
                        for (t.sibling.return = t.return, t = t.sibling; 5 !== t.tag && 6 !== t.tag && 18 !== t.tag; ) {
                            if (2 & t.flags) continue n;
                            if (null === t.child || 4 === t.tag) continue n;
                            (t.child.return = t), (t = t.child);
                        }
                        if (!(2 & t.flags)) {
                            t = t.stateNode;
                            break e;
                        }
                    }
                    r ? xo(e, t, n) : Eo(e, t, n);
                }
                function xo(e, n, t) {
                    var r = e.tag,
                        a = 5 === r || 6 === r;
                    if (a)
                        (e = a ? e.stateNode : e.stateNode.instance),
                            n
                                ? 8 === t.nodeType
                                    ? t.parentNode.insertBefore(e, n)
                                    : t.insertBefore(e, n)
                                : (8 === t.nodeType ? (n = t.parentNode).insertBefore(e, t) : (n = t).appendChild(e), (null !== (t = t._reactRootContainer) && void 0 !== t) || null !== n.onclick || (n.onclick = Br));
                    else if (4 !== r && null !== (e = e.child)) for (xo(e, n, t), e = e.sibling; null !== e; ) xo(e, n, t), (e = e.sibling);
                }
                function Eo(e, n, t) {
                    var r = e.tag,
                        a = 5 === r || 6 === r;
                    if (a) (e = a ? e.stateNode : e.stateNode.instance), n ? t.insertBefore(e, n) : t.appendChild(e);
                    else if (4 !== r && null !== (e = e.child)) for (Eo(e, n, t), e = e.sibling; null !== e; ) Eo(e, n, t), (e = e.sibling);
                }
                function Co(e, n) {
                    for (var t, r, a = n, i = !1; ; ) {
                        if (!i) {
                            i = a.return;
                            e: for (;;) {
                                if (null === i) throw Error(l(160));
                                switch (((t = i.stateNode), i.tag)) {
                                    case 5:
                                        r = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        (t = t.containerInfo), (r = !0);
                                        break e;
                                }
                                i = i.return;
                            }
                            i = !0;
                        }
                        if (5 === a.tag || 6 === a.tag) {
                            e: for (var o = e, u = a, s = u; ; )
                                if ((bo(o, s), null !== s.child && 4 !== s.tag)) (s.child.return = s), (s = s.child);
                                else {
                                    if (s === u) break e;
                                    for (; null === s.sibling; ) {
                                        if (null === s.return || s.return === u) break e;
                                        s = s.return;
                                    }
                                    (s.sibling.return = s.return), (s = s.sibling);
                                }
                            r ? ((o = t), (u = a.stateNode), 8 === o.nodeType ? o.parentNode.removeChild(u) : o.removeChild(u)) : t.removeChild(a.stateNode);
                        } else if (4 === a.tag) {
                            if (null !== a.child) {
                                (t = a.stateNode.containerInfo), (r = !0), (a.child.return = a), (a = a.child);
                                continue;
                            }
                        } else if ((bo(e, a), null !== a.child)) {
                            (a.child.return = a), (a = a.child);
                            continue;
                        }
                        if (a === n) break;
                        for (; null === a.sibling; ) {
                            if (null === a.return || a.return === n) return;
                            4 === (a = a.return).tag && (i = !1);
                        }
                        (a.sibling.return = a.return), (a = a.sibling);
                    }
                }
                function _o(e, n) {
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            var t = n.updateQueue;
                            if (null !== (t = null !== t ? t.lastEffect : null)) {
                                var r = (t = t.next);
                                do {
                                    3 === (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
                                } while (r !== t);
                            }
                            return;
                        case 1:
                        case 12:
                        case 17:
                            return;
                        case 5:
                            if (null != (t = n.stateNode)) {
                                r = n.memoizedProps;
                                var a = null !== e ? e.memoizedProps : r;
                                e = n.type;
                                var i = n.updateQueue;
                                if (((n.updateQueue = null), null !== i)) {
                                    for (t[Zr] = r, "input" === e && "radio" === r.type && null != r.name && ne(t, r), Ce(e, a), n = Ce(e, r), a = 0; a < i.length; a += 2) {
                                        var o = i[a],
                                            u = i[a + 1];
                                        "style" === o ? Se(t, u) : "dangerouslySetInnerHTML" === o ? ye(t, u) : "children" === o ? ve(t, u) : w(t, o, u, n);
                                    }
                                    switch (e) {
                                        case "input":
                                            te(t, r);
                                            break;
                                        case "textarea":
                                            se(t, r);
                                            break;
                                        case "select":
                                            (e = t._wrapperState.wasMultiple),
                                                (t._wrapperState.wasMultiple = !!r.multiple),
                                                null != (i = r.value) ? le(t, !!r.multiple, i, !1) : e !== !!r.multiple && (null != r.defaultValue ? le(t, !!r.multiple, r.defaultValue, !0) : le(t, !!r.multiple, r.multiple ? [] : "", !1));
                                    }
                                }
                            }
                            return;
                        case 6:
                            if (null === n.stateNode) throw Error(l(162));
                            return void (n.stateNode.nodeValue = n.memoizedProps);
                        case 3:
                            return void ((t = n.stateNode).hydrate && ((t.hydrate = !1), xn(t.containerInfo)));
                        case 13:
                            return null !== n.memoizedState && ((Go = Ha()), vo(n.child, !0)), void Lo(n);
                        case 19:
                            return void Lo(n);
                        case 23:
                        case 24:
                            return void vo(n, null !== n.memoizedState);
                    }
                    throw Error(l(163));
                }
                function Lo(e) {
                    var n = e.updateQueue;
                    if (null !== n) {
                        e.updateQueue = null;
                        var t = e.stateNode;
                        null === t && (t = e.stateNode = new mo()),
                            n.forEach(function (n) {
                                var r = Vu.bind(null, e, n);
                                t.has(n) || (t.add(n), n.then(r, r));
                            });
                    }
                }
                function Po(e, n) {
                    return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && null !== (n = n.memoizedState) && null === n.dehydrated;
                }
                var No = Math.ceil,
                    Mo = k.ReactCurrentDispatcher,
                    Oo = k.ReactCurrentOwner,
                    jo = 0,
                    To = null,
                    zo = null,
                    Ao = 0,
                    Ro = 0,
                    Do = sa(0),
                    Io = 0,
                    Fo = null,
                    Bo = 0,
                    Uo = 0,
                    Vo = 0,
                    Ho = 0,
                    Wo = null,
                    Go = 0,
                    Ko = 1 / 0;
                function $o() {
                    Ko = Ha() + 500;
                }
                var Qo,
                    qo = null,
                    Yo = !1,
                    Jo = null,
                    Xo = null,
                    Zo = !1,
                    eu = null,
                    nu = 90,
                    tu = [],
                    ru = [],
                    au = null,
                    iu = 0,
                    lu = null,
                    ou = -1,
                    uu = 0,
                    su = 0,
                    cu = null,
                    du = !1;
                function fu() {
                    return 0 !== (48 & jo) ? Ha() : -1 !== ou ? ou : (ou = Ha());
                }
                function pu(e) {
                    if (0 === (2 & (e = e.mode))) return 1;
                    if (0 === (4 & e)) return 99 === Wa() ? 1 : 2;
                    if ((0 === uu && (uu = Bo), 0 !== Ya.transition)) {
                        0 !== su && (su = null !== Wo ? Wo.pendingLanes : 0), (e = uu);
                        var n = 4186112 & ~su;
                        return 0 === (n &= -n) && 0 === (n = (e = 4186112 & ~e) & -e) && (n = 8192), n;
                    }
                    return (
                        (e = Wa()),
                        0 !== (4 & jo) && 98 === e
                            ? (e = Un(12, uu))
                            : (e = Un(
                                  (e = (function (e) {
                                      switch (e) {
                                          case 99:
                                              return 15;
                                          case 98:
                                              return 10;
                                          case 97:
                                          case 96:
                                              return 8;
                                          case 95:
                                              return 2;
                                          default:
                                              return 0;
                                      }
                                  })(e)),
                                  uu
                              )),
                        e
                    );
                }
                function mu(e, n, t) {
                    if (50 < iu) throw ((iu = 0), (lu = null), Error(l(185)));
                    if (null === (e = hu(e, n))) return null;
                    Wn(e, n, t), e === To && ((Vo |= n), 4 === Io && vu(e, Ao));
                    var r = Wa();
                    1 === n ? (0 !== (8 & jo) && 0 === (48 & jo) ? bu(e) : (gu(e, t), 0 === jo && ($o(), Qa()))) : (0 === (4 & jo) || (98 !== r && 99 !== r) || (null === au ? (au = new Set([e])) : au.add(e)), gu(e, t)), (Wo = e);
                }
                function hu(e, n) {
                    e.lanes |= n;
                    var t = e.alternate;
                    for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; ) (e.childLanes |= n), null !== (t = e.alternate) && (t.childLanes |= n), (t = e), (e = e.return);
                    return 3 === t.tag ? t.stateNode : null;
                }
                function gu(e, n) {
                    for (var t = e.callbackNode, r = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
                        var u = 31 - Gn(o),
                            s = 1 << u,
                            c = i[u];
                        if (-1 === c) {
                            if (0 === (s & r) || 0 !== (s & a)) {
                                (c = n), In(s);
                                var d = Dn;
                                i[u] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
                            }
                        } else c <= n && (e.expiredLanes |= s);
                        o &= ~s;
                    }
                    if (((r = Fn(e, e === To ? Ao : 0)), (n = Dn), 0 === r)) null !== t && (t !== Da && La(t), (e.callbackNode = null), (e.callbackPriority = 0));
                    else {
                        if (null !== t) {
                            if (e.callbackPriority === n) return;
                            t !== Da && La(t);
                        }
                        15 === n
                            ? ((t = bu.bind(null, e)), null === Fa ? ((Fa = [t]), (Ba = _a(ja, qa))) : Fa.push(t), (t = Da))
                            : 14 === n
                            ? (t = $a(99, bu.bind(null, e)))
                            : ((t = (function (e) {
                                  switch (e) {
                                      case 15:
                                      case 14:
                                          return 99;
                                      case 13:
                                      case 12:
                                      case 11:
                                      case 10:
                                          return 98;
                                      case 9:
                                      case 8:
                                      case 7:
                                      case 6:
                                      case 4:
                                      case 5:
                                          return 97;
                                      case 3:
                                      case 2:
                                      case 1:
                                          return 95;
                                      case 0:
                                          return 90;
                                      default:
                                          throw Error(l(358, e));
                                  }
                              })(n)),
                              (t = $a(t, yu.bind(null, e)))),
                            (e.callbackPriority = n),
                            (e.callbackNode = t);
                    }
                }
                function yu(e) {
                    if (((ou = -1), (su = uu = 0), 0 !== (48 & jo))) throw Error(l(327));
                    var n = e.callbackNode;
                    if (Au() && e.callbackNode !== n) return null;
                    var t = Fn(e, e === To ? Ao : 0);
                    if (0 === t) return null;
                    var r = t,
                        a = jo;
                    jo |= 16;
                    var i = _u();
                    for ((To === e && Ao === r) || ($o(), Eu(e, r)); ; )
                        try {
                            Nu();
                            break;
                        } catch (u) {
                            Cu(e, u);
                        }
                    if ((ti(), (Mo.current = i), (jo = a), null !== zo ? (r = 0) : ((To = null), (Ao = 0), (r = Io)), 0 !== (Bo & Vo))) Eu(e, 0);
                    else if (0 !== r) {
                        if ((2 === r && ((jo |= 64), e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)), 0 !== (t = Bn(e)) && (r = Lu(e, t))), 1 === r)) throw ((n = Fo), Eu(e, 0), vu(e, t), gu(e, Ha()), n);
                        switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = t), r)) {
                            case 0:
                            case 1:
                                throw Error(l(345));
                            case 2:
                            case 5:
                                ju(e);
                                break;
                            case 3:
                                if ((vu(e, t), (62914560 & t) === t && 10 < (r = Go + 500 - Ha()))) {
                                    if (0 !== Fn(e, 0)) break;
                                    if (((a = e.suspendedLanes) & t) !== t) {
                                        fu(), (e.pingedLanes |= e.suspendedLanes & a);
                                        break;
                                    }
                                    e.timeoutHandle = Gr(ju.bind(null, e), r);
                                    break;
                                }
                                ju(e);
                                break;
                            case 4:
                                if ((vu(e, t), (4186112 & t) === t)) break;
                                for (r = e.eventTimes, a = -1; 0 < t; ) {
                                    var o = 31 - Gn(t);
                                    (i = 1 << o), (o = r[o]) > a && (a = o), (t &= ~i);
                                }
                                if (((t = a), 10 < (t = (120 > (t = Ha() - t) ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3e3 > t ? 3e3 : 4320 > t ? 4320 : 1960 * No(t / 1960)) - t))) {
                                    e.timeoutHandle = Gr(ju.bind(null, e), t);
                                    break;
                                }
                                ju(e);
                                break;
                            default:
                                throw Error(l(329));
                        }
                    }
                    return gu(e, Ha()), e.callbackNode === n ? yu.bind(null, e) : null;
                }
                function vu(e, n) {
                    for (n &= ~Ho, n &= ~Vo, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
                        var t = 31 - Gn(n),
                            r = 1 << t;
                        (e[t] = -1), (n &= ~r);
                    }
                }
                function bu(e) {
                    if (0 !== (48 & jo)) throw Error(l(327));
                    if ((Au(), e === To && 0 !== (e.expiredLanes & Ao))) {
                        var n = Ao,
                            t = Lu(e, n);
                        0 !== (Bo & Vo) && (t = Lu(e, (n = Fn(e, n))));
                    } else t = Lu(e, (n = Fn(e, 0)));
                    if ((0 !== e.tag && 2 === t && ((jo |= 64), e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)), 0 !== (n = Bn(e)) && (t = Lu(e, n))), 1 === t)) throw ((t = Fo), Eu(e, 0), vu(e, n), gu(e, Ha()), t);
                    return (e.finishedWork = e.current.alternate), (e.finishedLanes = n), ju(e), gu(e, Ha()), null;
                }
                function wu(e, n) {
                    var t = jo;
                    jo |= 1;
                    try {
                        return e(n);
                    } finally {
                        0 === (jo = t) && ($o(), Qa());
                    }
                }
                function ku(e, n) {
                    var t = jo;
                    (jo &= -2), (jo |= 8);
                    try {
                        return e(n);
                    } finally {
                        0 === (jo = t) && ($o(), Qa());
                    }
                }
                function Su(e, n) {
                    da(Do, Ro), (Ro |= n), (Bo |= n);
                }
                function xu() {
                    (Ro = Do.current), ca(Do);
                }
                function Eu(e, n) {
                    (e.finishedWork = null), (e.finishedLanes = 0);
                    var t = e.timeoutHandle;
                    if ((-1 !== t && ((e.timeoutHandle = -1), Kr(t)), null !== zo))
                        for (t = zo.return; null !== t; ) {
                            var r = t;
                            switch (r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && va();
                                    break;
                                case 3:
                                    zi(), ca(ma), ca(pa), qi();
                                    break;
                                case 5:
                                    Ri(r);
                                    break;
                                case 4:
                                    zi();
                                    break;
                                case 13:
                                case 19:
                                    ca(Di);
                                    break;
                                case 10:
                                    ri(r);
                                    break;
                                case 23:
                                case 24:
                                    xu();
                            }
                            t = t.return;
                        }
                    (To = e), (zo = Ku(e.current, null)), (Ao = Ro = Bo = n), (Io = 0), (Fo = null), (Ho = Vo = Uo = 0);
                }
                function Cu(e, n) {
                    for (;;) {
                        var t = zo;
                        try {
                            if ((ti(), (Yi.current = Ol), tl)) {
                                for (var r = Zi.memoizedState; null !== r; ) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), (r = r.next);
                                }
                                tl = !1;
                            }
                            if (((Xi = 0), (nl = el = Zi = null), (rl = !1), (Oo.current = null), null === t || null === t.return)) {
                                (Io = 1), (Fo = n), (zo = null);
                                break;
                            }
                            e: {
                                var i = e,
                                    l = t.return,
                                    o = t,
                                    u = n;
                                if (((n = Ao), (o.flags |= 2048), (o.firstEffect = o.lastEffect = null), null !== u && "object" === typeof u && "function" === typeof u.then)) {
                                    var s = u;
                                    if (0 === (2 & o.mode)) {
                                        var c = o.alternate;
                                        c ? ((o.updateQueue = c.updateQueue), (o.memoizedState = c.memoizedState), (o.lanes = c.lanes)) : ((o.updateQueue = null), (o.memoizedState = null));
                                    }
                                    var d = 0 !== (1 & Di.current),
                                        f = l;
                                    do {
                                        var p;
                                        if ((p = 13 === f.tag)) {
                                            var m = f.memoizedState;
                                            if (null !== m) p = null !== m.dehydrated;
                                            else {
                                                var h = f.memoizedProps;
                                                p = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !d);
                                            }
                                        }
                                        if (p) {
                                            var g = f.updateQueue;
                                            if (null === g) {
                                                var y = new Set();
                                                y.add(s), (f.updateQueue = y);
                                            } else g.add(s);
                                            if (0 === (2 & f.mode)) {
                                                if (((f.flags |= 64), (o.flags |= 16384), (o.flags &= -2981), 1 === o.tag))
                                                    if (null === o.alternate) o.tag = 17;
                                                    else {
                                                        var v = ci(-1, 1);
                                                        (v.tag = 2), di(o, v);
                                                    }
                                                o.lanes |= 1;
                                                break e;
                                            }
                                            (u = void 0), (o = n);
                                            var b = i.pingCache;
                                            if ((null === b ? ((b = i.pingCache = new co()), (u = new Set()), b.set(s, u)) : void 0 === (u = b.get(s)) && ((u = new Set()), b.set(s, u)), !u.has(o))) {
                                                u.add(o);
                                                var w = Uu.bind(null, i, s, o);
                                                s.then(w, w);
                                            }
                                            (f.flags |= 4096), (f.lanes = n);
                                            break e;
                                        }
                                        f = f.return;
                                    } while (null !== f);
                                    u = Error(
                                        ($(o.type) || "A React component") +
                                            " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                                    );
                                }
                                5 !== Io && (Io = 2), (u = uo(u, o)), (f = l);
                                do {
                                    switch (f.tag) {
                                        case 3:
                                            (i = u), (f.flags |= 4096), (n &= -n), (f.lanes |= n), fi(f, fo(0, i, n));
                                            break e;
                                        case 1:
                                            i = u;
                                            var k = f.type,
                                                S = f.stateNode;
                                            if (0 === (64 & f.flags) && ("function" === typeof k.getDerivedStateFromError || (null !== S && "function" === typeof S.componentDidCatch && (null === Xo || !Xo.has(S))))) {
                                                (f.flags |= 4096), (n &= -n), (f.lanes |= n), fi(f, po(f, i, n));
                                                break e;
                                            }
                                    }
                                    f = f.return;
                                } while (null !== f);
                            }
                            Ou(t);
                        } catch (x) {
                            (n = x), zo === t && null !== t && (zo = t = t.return);
                            continue;
                        }
                        break;
                    }
                }
                function _u() {
                    var e = Mo.current;
                    return (Mo.current = Ol), null === e ? Ol : e;
                }
                function Lu(e, n) {
                    var t = jo;
                    jo |= 16;
                    var r = _u();
                    for ((To === e && Ao === n) || Eu(e, n); ; )
                        try {
                            Pu();
                            break;
                        } catch (a) {
                            Cu(e, a);
                        }
                    if ((ti(), (jo = t), (Mo.current = r), null !== zo)) throw Error(l(261));
                    return (To = null), (Ao = 0), Io;
                }
                function Pu() {
                    for (; null !== zo; ) Mu(zo);
                }
                function Nu() {
                    for (; null !== zo && !Pa(); ) Mu(zo);
                }
                function Mu(e) {
                    var n = Qo(e.alternate, e, Ro);
                    (e.memoizedProps = e.pendingProps), null === n ? Ou(e) : (zo = n), (Oo.current = null);
                }
                function Ou(e) {
                    var n = e;
                    do {
                        var t = n.alternate;
                        if (((e = n.return), 0 === (2048 & n.flags))) {
                            if (null !== (t = lo(t, n, Ro))) return void (zo = t);
                            if ((24 !== (t = n).tag && 23 !== t.tag) || null === t.memoizedState || 0 !== (1073741824 & Ro) || 0 === (4 & t.mode)) {
                                for (var r = 0, a = t.child; null !== a; ) (r |= a.lanes | a.childLanes), (a = a.sibling);
                                t.childLanes = r;
                            }
                            null !== e &&
                                0 === (2048 & e.flags) &&
                                (null === e.firstEffect && (e.firstEffect = n.firstEffect),
                                null !== n.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = n.firstEffect), (e.lastEffect = n.lastEffect)),
                                1 < n.flags && (null !== e.lastEffect ? (e.lastEffect.nextEffect = n) : (e.firstEffect = n), (e.lastEffect = n)));
                        } else {
                            if (null !== (t = oo(n))) return (t.flags &= 2047), void (zo = t);
                            null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
                        }
                        if (null !== (n = n.sibling)) return void (zo = n);
                        zo = n = e;
                    } while (null !== n);
                    0 === Io && (Io = 5);
                }
                function ju(e) {
                    var n = Wa();
                    return Ka(99, Tu.bind(null, e, n)), null;
                }
                function Tu(e, n) {
                    do {
                        Au();
                    } while (null !== eu);
                    if (0 !== (48 & jo)) throw Error(l(327));
                    var t = e.finishedWork;
                    if (null === t) return null;
                    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)) throw Error(l(177));
                    e.callbackNode = null;
                    var r = t.lanes | t.childLanes,
                        a = r,
                        i = e.pendingLanes & ~a;
                    (e.pendingLanes = a), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= a), (e.mutableReadLanes &= a), (e.entangledLanes &= a), (a = e.entanglements);
                    for (var o = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
                        var s = 31 - Gn(i),
                            c = 1 << s;
                        (a[s] = 0), (o[s] = -1), (u[s] = -1), (i &= ~c);
                    }
                    if (
                        (null !== au && 0 === (24 & r) && au.has(e) && au.delete(e),
                        e === To && ((zo = To = null), (Ao = 0)),
                        1 < t.flags ? (null !== t.lastEffect ? ((t.lastEffect.nextEffect = t), (r = t.firstEffect)) : (r = t)) : (r = t.firstEffect),
                        null !== r)
                    ) {
                        if (((a = jo), (jo |= 32), (Oo.current = null), (Ur = Yn), yr((o = gr())))) {
                            if ("selectionStart" in o) u = { start: o.selectionStart, end: o.selectionEnd };
                            else
                                e: if (((u = ((u = o.ownerDocument) && u.defaultView) || window), (c = u.getSelection && u.getSelection()) && 0 !== c.rangeCount)) {
                                    (u = c.anchorNode), (i = c.anchorOffset), (s = c.focusNode), (c = c.focusOffset);
                                    try {
                                        u.nodeType, s.nodeType;
                                    } catch (_) {
                                        u = null;
                                        break e;
                                    }
                                    var d = 0,
                                        f = -1,
                                        p = -1,
                                        m = 0,
                                        h = 0,
                                        g = o,
                                        y = null;
                                    n: for (;;) {
                                        for (
                                            var v;
                                            g !== u || (0 !== i && 3 !== g.nodeType) || (f = d + i), g !== s || (0 !== c && 3 !== g.nodeType) || (p = d + c), 3 === g.nodeType && (d += g.nodeValue.length), null !== (v = g.firstChild);

                                        )
                                            (y = g), (g = v);
                                        for (;;) {
                                            if (g === o) break n;
                                            if ((y === u && ++m === i && (f = d), y === s && ++h === c && (p = d), null !== (v = g.nextSibling))) break;
                                            y = (g = y).parentNode;
                                        }
                                        g = v;
                                    }
                                    u = -1 === f || -1 === p ? null : { start: f, end: p };
                                } else u = null;
                            u = u || { start: 0, end: 0 };
                        } else u = null;
                        (Vr = { focusedElem: o, selectionRange: u }), (Yn = !1), (cu = null), (du = !1), (qo = r);
                        do {
                            try {
                                zu();
                            } catch (_) {
                                if (null === qo) throw Error(l(330));
                                Bu(qo, _), (qo = qo.nextEffect);
                            }
                        } while (null !== qo);
                        (cu = null), (qo = r);
                        do {
                            try {
                                for (o = e; null !== qo; ) {
                                    var b = qo.flags;
                                    if ((16 & b && ve(qo.stateNode, ""), 128 & b)) {
                                        var w = qo.alternate;
                                        if (null !== w) {
                                            var k = w.ref;
                                            null !== k && ("function" === typeof k ? k(null) : (k.current = null));
                                        }
                                    }
                                    switch (1038 & b) {
                                        case 2:
                                            So(qo), (qo.flags &= -3);
                                            break;
                                        case 6:
                                            So(qo), (qo.flags &= -3), _o(qo.alternate, qo);
                                            break;
                                        case 1024:
                                            qo.flags &= -1025;
                                            break;
                                        case 1028:
                                            (qo.flags &= -1025), _o(qo.alternate, qo);
                                            break;
                                        case 4:
                                            _o(qo.alternate, qo);
                                            break;
                                        case 8:
                                            Co(o, (u = qo));
                                            var S = u.alternate;
                                            wo(u), null !== S && wo(S);
                                    }
                                    qo = qo.nextEffect;
                                }
                            } catch (_) {
                                if (null === qo) throw Error(l(330));
                                Bu(qo, _), (qo = qo.nextEffect);
                            }
                        } while (null !== qo);
                        if (((k = Vr), (w = gr()), (b = k.focusedElem), (o = k.selectionRange), w !== b && b && b.ownerDocument && hr(b.ownerDocument.documentElement, b))) {
                            null !== o &&
                                yr(b) &&
                                ((w = o.start),
                                void 0 === (k = o.end) && (k = w),
                                "selectionStart" in b
                                    ? ((b.selectionStart = w), (b.selectionEnd = Math.min(k, b.value.length)))
                                    : (k = ((w = b.ownerDocument || document) && w.defaultView) || window).getSelection &&
                                      ((k = k.getSelection()),
                                      (u = b.textContent.length),
                                      (S = Math.min(o.start, u)),
                                      (o = void 0 === o.end ? S : Math.min(o.end, u)),
                                      !k.extend && S > o && ((u = o), (o = S), (S = u)),
                                      (u = mr(b, S)),
                                      (i = mr(b, o)),
                                      u &&
                                          i &&
                                          (1 !== k.rangeCount || k.anchorNode !== u.node || k.anchorOffset !== u.offset || k.focusNode !== i.node || k.focusOffset !== i.offset) &&
                                          ((w = w.createRange()).setStart(u.node, u.offset), k.removeAllRanges(), S > o ? (k.addRange(w), k.extend(i.node, i.offset)) : (w.setEnd(i.node, i.offset), k.addRange(w))))),
                                (w = []);
                            for (k = b; (k = k.parentNode); ) 1 === k.nodeType && w.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
                            for ("function" === typeof b.focus && b.focus(), b = 0; b < w.length; b++) ((k = w[b]).element.scrollLeft = k.left), (k.element.scrollTop = k.top);
                        }
                        (Yn = !!Ur), (Vr = Ur = null), (e.current = t), (qo = r);
                        do {
                            try {
                                for (b = e; null !== qo; ) {
                                    var x = qo.flags;
                                    if ((36 & x && yo(b, qo.alternate, qo), 128 & x)) {
                                        w = void 0;
                                        var E = qo.ref;
                                        if (null !== E) {
                                            var C = qo.stateNode;
                                            qo.tag, (w = C), "function" === typeof E ? E(w) : (E.current = w);
                                        }
                                    }
                                    qo = qo.nextEffect;
                                }
                            } catch (_) {
                                if (null === qo) throw Error(l(330));
                                Bu(qo, _), (qo = qo.nextEffect);
                            }
                        } while (null !== qo);
                        (qo = null), Ia(), (jo = a);
                    } else e.current = t;
                    if (Zo) (Zo = !1), (eu = e), (nu = n);
                    else for (qo = r; null !== qo; ) (n = qo.nextEffect), (qo.nextEffect = null), 8 & qo.flags && (((x = qo).sibling = null), (x.stateNode = null)), (qo = n);
                    if ((0 === (r = e.pendingLanes) && (Xo = null), 1 === r ? (e === lu ? iu++ : ((iu = 0), (lu = e))) : (iu = 0), (t = t.stateNode), Ea && "function" === typeof Ea.onCommitFiberRoot))
                        try {
                            Ea.onCommitFiberRoot(xa, t, void 0, 64 === (64 & t.current.flags));
                        } catch (_) {}
                    if ((gu(e, Ha()), Yo)) throw ((Yo = !1), (e = Jo), (Jo = null), e);
                    return 0 !== (8 & jo) || Qa(), null;
                }
                function zu() {
                    for (; null !== qo; ) {
                        var e = qo.alternate;
                        du || null === cu || (0 !== (8 & qo.flags) ? en(qo, cu) && (du = !0) : 13 === qo.tag && Po(e, qo) && en(qo, cu) && (du = !0));
                        var n = qo.flags;
                        0 !== (256 & n) && go(e, qo),
                            0 === (512 & n) ||
                                Zo ||
                                ((Zo = !0),
                                $a(97, function () {
                                    return Au(), null;
                                })),
                            (qo = qo.nextEffect);
                    }
                }
                function Au() {
                    if (90 !== nu) {
                        var e = 97 < nu ? 97 : nu;
                        return (nu = 90), Ka(e, Iu);
                    }
                    return !1;
                }
                function Ru(e, n) {
                    tu.push(n, e),
                        Zo ||
                            ((Zo = !0),
                            $a(97, function () {
                                return Au(), null;
                            }));
                }
                function Du(e, n) {
                    ru.push(n, e),
                        Zo ||
                            ((Zo = !0),
                            $a(97, function () {
                                return Au(), null;
                            }));
                }
                function Iu() {
                    if (null === eu) return !1;
                    var e = eu;
                    if (((eu = null), 0 !== (48 & jo))) throw Error(l(331));
                    var n = jo;
                    jo |= 32;
                    var t = ru;
                    ru = [];
                    for (var r = 0; r < t.length; r += 2) {
                        var a = t[r],
                            i = t[r + 1],
                            o = a.destroy;
                        if (((a.destroy = void 0), "function" === typeof o))
                            try {
                                o();
                            } catch (s) {
                                if (null === i) throw Error(l(330));
                                Bu(i, s);
                            }
                    }
                    for (t = tu, tu = [], r = 0; r < t.length; r += 2) {
                        (a = t[r]), (i = t[r + 1]);
                        try {
                            var u = a.create;
                            a.destroy = u();
                        } catch (s) {
                            if (null === i) throw Error(l(330));
                            Bu(i, s);
                        }
                    }
                    for (u = e.current.firstEffect; null !== u; ) (e = u.nextEffect), (u.nextEffect = null), 8 & u.flags && ((u.sibling = null), (u.stateNode = null)), (u = e);
                    return (jo = n), Qa(), !0;
                }
                function Fu(e, n, t) {
                    di(e, (n = fo(0, (n = uo(t, n)), 1))), (n = fu()), null !== (e = hu(e, 1)) && (Wn(e, 1, n), gu(e, n));
                }
                function Bu(e, n) {
                    if (3 === e.tag) Fu(e, e, n);
                    else
                        for (var t = e.return; null !== t; ) {
                            if (3 === t.tag) {
                                Fu(t, e, n);
                                break;
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || ("function" === typeof r.componentDidCatch && (null === Xo || !Xo.has(r)))) {
                                    var a = po(t, (e = uo(n, e)), 1);
                                    if ((di(t, a), (a = fu()), null !== (t = hu(t, 1)))) Wn(t, 1, a), gu(t, a);
                                    else if ("function" === typeof r.componentDidCatch && (null === Xo || !Xo.has(r)))
                                        try {
                                            r.componentDidCatch(n, e);
                                        } catch (i) {}
                                    break;
                                }
                            }
                            t = t.return;
                        }
                }
                function Uu(e, n, t) {
                    var r = e.pingCache;
                    null !== r && r.delete(n), (n = fu()), (e.pingedLanes |= e.suspendedLanes & t), To === e && (Ao & t) === t && (4 === Io || (3 === Io && (62914560 & Ao) === Ao && 500 > Ha() - Go) ? Eu(e, 0) : (Ho |= t)), gu(e, n);
                }
                function Vu(e, n) {
                    var t = e.stateNode;
                    null !== t && t.delete(n),
                        0 === (n = 0) && (0 === (2 & (n = e.mode)) ? (n = 1) : 0 === (4 & n) ? (n = 99 === Wa() ? 1 : 2) : (0 === uu && (uu = Bo), 0 === (n = Vn(62914560 & ~uu)) && (n = 4194304))),
                        (t = fu()),
                        null !== (e = hu(e, n)) && (Wn(e, n, t), gu(e, t));
                }
                function Hu(e, n, t, r) {
                    (this.tag = e),
                        (this.key = t),
                        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
                        (this.index = 0),
                        (this.ref = null),
                        (this.pendingProps = n),
                        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
                        (this.mode = r),
                        (this.flags = 0),
                        (this.lastEffect = this.firstEffect = this.nextEffect = null),
                        (this.childLanes = this.lanes = 0),
                        (this.alternate = null);
                }
                function Wu(e, n, t, r) {
                    return new Hu(e, n, t, r);
                }
                function Gu(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent);
                }
                function Ku(e, n) {
                    var t = e.alternate;
                    return (
                        null === t
                            ? (((t = Wu(e.tag, n, e.key, e.mode)).elementType = e.elementType), (t.type = e.type), (t.stateNode = e.stateNode), (t.alternate = e), (e.alternate = t))
                            : ((t.pendingProps = n), (t.type = e.type), (t.flags = 0), (t.nextEffect = null), (t.firstEffect = null), (t.lastEffect = null)),
                        (t.childLanes = e.childLanes),
                        (t.lanes = e.lanes),
                        (t.child = e.child),
                        (t.memoizedProps = e.memoizedProps),
                        (t.memoizedState = e.memoizedState),
                        (t.updateQueue = e.updateQueue),
                        (n = e.dependencies),
                        (t.dependencies = null === n ? null : { lanes: n.lanes, firstContext: n.firstContext }),
                        (t.sibling = e.sibling),
                        (t.index = e.index),
                        (t.ref = e.ref),
                        t
                    );
                }
                function $u(e, n, t, r, a, i) {
                    var o = 2;
                    if (((r = e), "function" === typeof e)) Gu(e) && (o = 1);
                    else if ("string" === typeof e) o = 5;
                    else
                        e: switch (e) {
                            case E:
                                return Qu(t.children, a, i, n);
                            case R:
                                (o = 8), (a |= 16);
                                break;
                            case C:
                                (o = 8), (a |= 1);
                                break;
                            case _:
                                return ((e = Wu(12, t, n, 8 | a)).elementType = _), (e.type = _), (e.lanes = i), e;
                            case M:
                                return ((e = Wu(13, t, n, a)).type = M), (e.elementType = M), (e.lanes = i), e;
                            case O:
                                return ((e = Wu(19, t, n, a)).elementType = O), (e.lanes = i), e;
                            case D:
                                return qu(t, a, i, n);
                            case I:
                                return ((e = Wu(24, t, n, a)).elementType = I), (e.lanes = i), e;
                            default:
                                if ("object" === typeof e && null !== e)
                                    switch (e.$$typeof) {
                                        case L:
                                            o = 10;
                                            break e;
                                        case P:
                                            o = 9;
                                            break e;
                                        case N:
                                            o = 11;
                                            break e;
                                        case j:
                                            o = 14;
                                            break e;
                                        case T:
                                            (o = 16), (r = null);
                                            break e;
                                        case z:
                                            o = 22;
                                            break e;
                                    }
                                throw Error(l(130, null == e ? e : typeof e, ""));
                        }
                    return ((n = Wu(o, t, n, a)).elementType = e), (n.type = r), (n.lanes = i), n;
                }
                function Qu(e, n, t, r) {
                    return ((e = Wu(7, e, r, n)).lanes = t), e;
                }
                function qu(e, n, t, r) {
                    return ((e = Wu(23, e, r, n)).elementType = D), (e.lanes = t), e;
                }
                function Yu(e, n, t) {
                    return ((e = Wu(6, e, null, n)).lanes = t), e;
                }
                function Ju(e, n, t) {
                    return ((n = Wu(4, null !== e.children ? e.children : [], e.key, n)).lanes = t), (n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), n;
                }
                function Xu(e, n, t) {
                    (this.tag = n),
                        (this.containerInfo = e),
                        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
                        (this.timeoutHandle = -1),
                        (this.pendingContext = this.context = null),
                        (this.hydrate = t),
                        (this.callbackNode = null),
                        (this.callbackPriority = 0),
                        (this.eventTimes = Hn(0)),
                        (this.expirationTimes = Hn(-1)),
                        (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
                        (this.entanglements = Hn(0)),
                        (this.mutableSourceEagerHydrationData = null);
                }
                function Zu(e, n, t) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return { $$typeof: x, key: null == r ? null : "" + r, children: e, containerInfo: n, implementation: t };
                }
                function es(e, n, t, r) {
                    var a = n.current,
                        i = fu(),
                        o = pu(a);
                    e: if (t) {
                        n: {
                            if (Ye((t = t._reactInternals)) !== t || 1 !== t.tag) throw Error(l(170));
                            var u = t;
                            do {
                                switch (u.tag) {
                                    case 3:
                                        u = u.stateNode.context;
                                        break n;
                                    case 1:
                                        if (ya(u.type)) {
                                            u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break n;
                                        }
                                }
                                u = u.return;
                            } while (null !== u);
                            throw Error(l(171));
                        }
                        if (1 === t.tag) {
                            var s = t.type;
                            if (ya(s)) {
                                t = wa(t, s, u);
                                break e;
                            }
                        }
                        t = u;
                    } else t = fa;
                    return null === n.context ? (n.context = t) : (n.pendingContext = t), ((n = ci(i, o)).payload = { element: e }), null !== (r = void 0 === r ? null : r) && (n.callback = r), di(a, n), mu(a, o, i), o;
                }
                function ns(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
                }
                function ts(e, n) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var t = e.retryLane;
                        e.retryLane = 0 !== t && t < n ? t : n;
                    }
                }
                function rs(e, n) {
                    ts(e, n), (e = e.alternate) && ts(e, n);
                }
                function as(e, n, t) {
                    var r = (null != t && null != t.hydrationOptions && t.hydrationOptions.mutableSources) || null;
                    if (((t = new Xu(e, n, null != t && !0 === t.hydrate)), (n = Wu(3, null, null, 2 === n ? 7 : 1 === n ? 3 : 0)), (t.current = n), (n.stateNode = t), ui(n), (e[ea] = t.current), jr(8 === e.nodeType ? e.parentNode : e), r))
                        for (e = 0; e < r.length; e++) {
                            var a = (n = r[e])._getVersion;
                            (a = a(n._source)), null == t.mutableSourceEagerHydrationData ? (t.mutableSourceEagerHydrationData = [n, a]) : t.mutableSourceEagerHydrationData.push(n, a);
                        }
                    this._internalRoot = t;
                }
                function is(e) {
                    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)));
                }
                function ls(e, n, t, r, a) {
                    var i = t._reactRootContainer;
                    if (i) {
                        var l = i._internalRoot;
                        if ("function" === typeof a) {
                            var o = a;
                            a = function () {
                                var e = ns(l);
                                o.call(e);
                            };
                        }
                        es(n, l, e, a);
                    } else {
                        if (
                            ((i = t._reactRootContainer = (function (e, n) {
                                if ((n || (n = !(!(n = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) || 1 !== n.nodeType || !n.hasAttribute("data-reactroot"))), !n)) for (var t; (t = e.lastChild); ) e.removeChild(t);
                                return new as(e, 0, n ? { hydrate: !0 } : void 0);
                            })(t, r)),
                            (l = i._internalRoot),
                            "function" === typeof a)
                        ) {
                            var u = a;
                            a = function () {
                                var e = ns(l);
                                u.call(e);
                            };
                        }
                        ku(function () {
                            es(n, l, e, a);
                        });
                    }
                    return ns(l);
                }
                function os(e, n) {
                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!is(n)) throw Error(l(200));
                    return Zu(e, n, null, t);
                }
                (Qo = function (e, n, t) {
                    var r = n.lanes;
                    if (null !== e)
                        if (e.memoizedProps !== n.pendingProps || ma.current) Rl = !0;
                        else {
                            if (0 === (t & r)) {
                                switch (((Rl = !1), n.tag)) {
                                    case 3:
                                        Kl(n), $i();
                                        break;
                                    case 5:
                                        Ai(n);
                                        break;
                                    case 1:
                                        ya(n.type) && ka(n);
                                        break;
                                    case 4:
                                        Ti(n, n.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        r = n.memoizedProps.value;
                                        var a = n.type._context;
                                        da(Xa, a._currentValue), (a._currentValue = r);
                                        break;
                                    case 13:
                                        if (null !== n.memoizedState) return 0 !== (t & n.child.childLanes) ? Jl(e, n, t) : (da(Di, 1 & Di.current), null !== (n = ao(e, n, t)) ? n.sibling : null);
                                        da(Di, 1 & Di.current);
                                        break;
                                    case 19:
                                        if (((r = 0 !== (t & n.childLanes)), 0 !== (64 & e.flags))) {
                                            if (r) return ro(e, n, t);
                                            n.flags |= 64;
                                        }
                                        if ((null !== (a = n.memoizedState) && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)), da(Di, Di.current), r)) break;
                                        return null;
                                    case 23:
                                    case 24:
                                        return (n.lanes = 0), Ul(e, n, t);
                                }
                                return ao(e, n, t);
                            }
                            Rl = 0 !== (16384 & e.flags);
                        }
                    else Rl = !1;
                    switch (((n.lanes = 0), n.tag)) {
                        case 2:
                            if (
                                ((r = n.type),
                                null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
                                (e = n.pendingProps),
                                (a = ga(n, pa.current)),
                                ii(n, t),
                                (a = ll(null, n, r, e, a, t)),
                                (n.flags |= 1),
                                "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof)
                            ) {
                                if (((n.tag = 1), (n.memoizedState = null), (n.updateQueue = null), ya(r))) {
                                    var i = !0;
                                    ka(n);
                                } else i = !1;
                                (n.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null), ui(n);
                                var o = r.getDerivedStateFromProps;
                                "function" === typeof o && gi(n, r, o, e), (a.updater = yi), (n.stateNode = a), (a._reactInternals = n), ki(n, r, e, t), (n = Gl(null, n, r, !0, i, t));
                            } else (n.tag = 0), Dl(null, n, a, t), (n = n.child);
                            return n;
                        case 16:
                            a = n.elementType;
                            e: {
                                switch (
                                    (null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
                                    (e = n.pendingProps),
                                    (a = (i = a._init)(a._payload)),
                                    (n.type = a),
                                    (i = n.tag = (function (e) {
                                        if ("function" === typeof e) return Gu(e) ? 1 : 0;
                                        if (void 0 !== e && null !== e) {
                                            if ((e = e.$$typeof) === N) return 11;
                                            if (e === j) return 14;
                                        }
                                        return 2;
                                    })(a)),
                                    (e = Ja(a, e)),
                                    i)
                                ) {
                                    case 0:
                                        n = Hl(null, n, a, e, t);
                                        break e;
                                    case 1:
                                        n = Wl(null, n, a, e, t);
                                        break e;
                                    case 11:
                                        n = Il(null, n, a, e, t);
                                        break e;
                                    case 14:
                                        n = Fl(null, n, a, Ja(a.type, e), r, t);
                                        break e;
                                }
                                throw Error(l(306, a, ""));
                            }
                            return n;
                        case 0:
                            return (r = n.type), (a = n.pendingProps), Hl(e, n, r, (a = n.elementType === r ? a : Ja(r, a)), t);
                        case 1:
                            return (r = n.type), (a = n.pendingProps), Wl(e, n, r, (a = n.elementType === r ? a : Ja(r, a)), t);
                        case 3:
                            if ((Kl(n), (r = n.updateQueue), null === e || null === r)) throw Error(l(282));
                            if (((r = n.pendingProps), (a = null !== (a = n.memoizedState) ? a.element : null), si(e, n), pi(n, r, null, t), (r = n.memoizedState.element) === a)) $i(), (n = ao(e, n, t));
                            else {
                                if (((i = (a = n.stateNode).hydrate) && ((Bi = Qr(n.stateNode.containerInfo.firstChild)), (Fi = n), (i = Ui = !0)), i)) {
                                    if (null != (e = a.mutableSourceEagerHydrationData)) for (a = 0; a < e.length; a += 2) ((i = e[a])._workInProgressVersionPrimary = e[a + 1]), Qi.push(i);
                                    for (t = Li(n, null, r, t), n.child = t; t; ) (t.flags = (-3 & t.flags) | 1024), (t = t.sibling);
                                } else Dl(e, n, r, t), $i();
                                n = n.child;
                            }
                            return n;
                        case 5:
                            return (
                                Ai(n),
                                null === e && Wi(n),
                                (r = n.type),
                                (a = n.pendingProps),
                                (i = null !== e ? e.memoizedProps : null),
                                (o = a.children),
                                Wr(r, a) ? (o = null) : null !== i && Wr(r, i) && (n.flags |= 16),
                                Vl(e, n),
                                Dl(e, n, o, t),
                                n.child
                            );
                        case 6:
                            return null === e && Wi(n), null;
                        case 13:
                            return Jl(e, n, t);
                        case 4:
                            return Ti(n, n.stateNode.containerInfo), (r = n.pendingProps), null === e ? (n.child = _i(n, null, r, t)) : Dl(e, n, r, t), n.child;
                        case 11:
                            return (r = n.type), (a = n.pendingProps), Il(e, n, r, (a = n.elementType === r ? a : Ja(r, a)), t);
                        case 7:
                            return Dl(e, n, n.pendingProps, t), n.child;
                        case 8:
                        case 12:
                            return Dl(e, n, n.pendingProps.children, t), n.child;
                        case 10:
                            e: {
                                (r = n.type._context), (a = n.pendingProps), (o = n.memoizedProps), (i = a.value);
                                var u = n.type._context;
                                if ((da(Xa, u._currentValue), (u._currentValue = i), null !== o))
                                    if (((u = o.value), 0 === (i = cr(u, i) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(u, i) : 1073741823)))) {
                                        if (o.children === a.children && !ma.current) {
                                            n = ao(e, n, t);
                                            break e;
                                        }
                                    } else
                                        for (null !== (u = n.child) && (u.return = n); null !== u; ) {
                                            var s = u.dependencies;
                                            if (null !== s) {
                                                o = u.child;
                                                for (var c = s.firstContext; null !== c; ) {
                                                    if (c.context === r && 0 !== (c.observedBits & i)) {
                                                        1 === u.tag && (((c = ci(-1, t & -t)).tag = 2), di(u, c)), (u.lanes |= t), null !== (c = u.alternate) && (c.lanes |= t), ai(u.return, t), (s.lanes |= t);
                                                        break;
                                                    }
                                                    c = c.next;
                                                }
                                            } else o = 10 === u.tag && u.type === n.type ? null : u.child;
                                            if (null !== o) o.return = u;
                                            else
                                                for (o = u; null !== o; ) {
                                                    if (o === n) {
                                                        o = null;
                                                        break;
                                                    }
                                                    if (null !== (u = o.sibling)) {
                                                        (u.return = o.return), (o = u);
                                                        break;
                                                    }
                                                    o = o.return;
                                                }
                                            u = o;
                                        }
                                Dl(e, n, a.children, t), (n = n.child);
                            }
                            return n;
                        case 9:
                            return (a = n.type), (r = (i = n.pendingProps).children), ii(n, t), (r = r((a = li(a, i.unstable_observedBits)))), (n.flags |= 1), Dl(e, n, r, t), n.child;
                        case 14:
                            return (i = Ja((a = n.type), n.pendingProps)), Fl(e, n, a, (i = Ja(a.type, i)), r, t);
                        case 15:
                            return Bl(e, n, n.type, n.pendingProps, r, t);
                        case 17:
                            return (
                                (r = n.type),
                                (a = n.pendingProps),
                                (a = n.elementType === r ? a : Ja(r, a)),
                                null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
                                (n.tag = 1),
                                ya(r) ? ((e = !0), ka(n)) : (e = !1),
                                ii(n, t),
                                bi(n, r, a),
                                ki(n, r, a, t),
                                Gl(null, n, r, !0, e, t)
                            );
                        case 19:
                            return ro(e, n, t);
                        case 23:
                        case 24:
                            return Ul(e, n, t);
                    }
                    throw Error(l(156, n.tag));
                }),
                    (as.prototype.render = function (e) {
                        es(e, this._internalRoot, null, null);
                    }),
                    (as.prototype.unmount = function () {
                        var e = this._internalRoot,
                            n = e.containerInfo;
                        es(null, e, null, function () {
                            n[ea] = null;
                        });
                    }),
                    (nn = function (e) {
                        13 === e.tag && (mu(e, 4, fu()), rs(e, 4));
                    }),
                    (tn = function (e) {
                        13 === e.tag && (mu(e, 67108864, fu()), rs(e, 67108864));
                    }),
                    (rn = function (e) {
                        if (13 === e.tag) {
                            var n = fu(),
                                t = pu(e);
                            mu(e, t, n), rs(e, t);
                        }
                    }),
                    (an = function (e, n) {
                        return n();
                    }),
                    (Le = function (e, n, t) {
                        switch (n) {
                            case "input":
                                if ((te(e, t), (n = t.name), "radio" === t.type && null != n)) {
                                    for (t = e; t.parentNode; ) t = t.parentNode;
                                    for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        if (r !== e && r.form === e.form) {
                                            var a = ia(r);
                                            if (!a) throw Error(l(90));
                                            J(r), te(r, a);
                                        }
                                    }
                                }
                                break;
                            case "textarea":
                                se(e, t);
                                break;
                            case "select":
                                null != (n = t.value) && le(e, !!t.multiple, n, !1);
                        }
                    }),
                    (Te = wu),
                    (ze = function (e, n, t, r, a) {
                        var i = jo;
                        jo |= 4;
                        try {
                            return Ka(98, e.bind(null, n, t, r, a));
                        } finally {
                            0 === (jo = i) && ($o(), Qa());
                        }
                    }),
                    (Ae = function () {
                        0 === (49 & jo) &&
                            ((function () {
                                if (null !== au) {
                                    var e = au;
                                    (au = null),
                                        e.forEach(function (e) {
                                            (e.expiredLanes |= 24 & e.pendingLanes), gu(e, Ha());
                                        });
                                }
                                Qa();
                            })(),
                            Au());
                    }),
                    (Re = function (e, n) {
                        var t = jo;
                        jo |= 2;
                        try {
                            return e(n);
                        } finally {
                            0 === (jo = t) && ($o(), Qa());
                        }
                    });
                var us = { Events: [ra, aa, ia, Oe, je, Au, { current: !1 }] },
                    ss = { findFiberByHostInstance: ta, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" },
                    cs = {
                        bundleType: ss.bundleType,
                        version: ss.version,
                        rendererPackageName: ss.rendererPackageName,
                        rendererConfig: ss.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: k.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function (e) {
                            return null === (e = Ze(e)) ? null : e.stateNode;
                        },
                        findFiberByHostInstance:
                            ss.findFiberByHostInstance ||
                            function () {
                                return null;
                            },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!ds.isDisabled && ds.supportsFiber)
                        try {
                            (xa = ds.inject(cs)), (Ea = ds);
                        } catch (ge) {}
                }
                (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = us),
                    (n.createPortal = os),
                    (n.findDOMNode = function (e) {
                        if (null == e) return null;
                        if (1 === e.nodeType) return e;
                        var n = e._reactInternals;
                        if (void 0 === n) {
                            if ("function" === typeof e.render) throw Error(l(188));
                            throw Error(l(268, Object.keys(e)));
                        }
                        return (e = null === (e = Ze(n)) ? null : e.stateNode);
                    }),
                    (n.flushSync = function (e, n) {
                        var t = jo;
                        if (0 !== (48 & t)) return e(n);
                        jo |= 1;
                        try {
                            if (e) return Ka(99, e.bind(null, n));
                        } finally {
                            (jo = t), Qa();
                        }
                    }),
                    (n.hydrate = function (e, n, t) {
                        if (!is(n)) throw Error(l(200));
                        return ls(null, e, n, !0, t);
                    }),
                    (n.render = function (e, n, t) {
                        if (!is(n)) throw Error(l(200));
                        return ls(null, e, n, !1, t);
                    }),
                    (n.unmountComponentAtNode = function (e) {
                        if (!is(e)) throw Error(l(40));
                        return (
                            !!e._reactRootContainer &&
                            (ku(function () {
                                ls(null, null, e, !1, function () {
                                    (e._reactRootContainer = null), (e[ea] = null);
                                });
                            }),
                            !0)
                        );
                    }),
                    (n.unstable_batchedUpdates = wu),
                    (n.unstable_createPortal = function (e, n) {
                        return os(e, n, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
                    }),
                    (n.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
                        if (!is(t)) throw Error(l(200));
                        if (null == e || void 0 === e._reactInternals) throw Error(l(38));
                        return ls(e, n, t, !1, r);
                    }),
                    (n.version = "17.0.2");
            },
            168: function (e, n, t) {
                !(function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                        try {
                            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                        } catch (n) {
                            console.error(n);
                        }
                })(),
                    (e.exports = t(534));
            },
            918: function (e, n, t) {
                t(843);
                var r = t(313),
                    a = 60103;
                if (((n.Fragment = 60107), "function" === typeof Symbol && Symbol.for)) {
                    var i = Symbol.for;
                    (a = i("react.element")), (n.Fragment = i("react.fragment"));
                }
                var l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    o = Object.prototype.hasOwnProperty,
                    u = { key: !0, ref: !0, __self: !0, __source: !0 };
                function s(e, n, t) {
                    var r,
                        i = {},
                        s = null,
                        c = null;
                    for (r in (void 0 !== t && (s = "" + t), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (c = n.ref), n)) o.call(n, r) && !u.hasOwnProperty(r) && (i[r] = n[r]);
                    if (e && e.defaultProps) for (r in (n = e.defaultProps)) void 0 === i[r] && (i[r] = n[r]);
                    return { $$typeof: a, type: e, key: s, ref: c, props: i, _owner: l.current };
                }
                (n.jsx = s), (n.jsxs = s);
            },
            306: function (e, n, t) {
                var r = t(843),
                    a = 60103,
                    i = 60106;
                (n.Fragment = 60107), (n.StrictMode = 60108), (n.Profiler = 60114);
                var l = 60109,
                    o = 60110,
                    u = 60112;
                n.Suspense = 60113;
                var s = 60115,
                    c = 60116;
                if ("function" === typeof Symbol && Symbol.for) {
                    var d = Symbol.for;
                    (a = d("react.element")),
                        (i = d("react.portal")),
                        (n.Fragment = d("react.fragment")),
                        (n.StrictMode = d("react.strict_mode")),
                        (n.Profiler = d("react.profiler")),
                        (l = d("react.provider")),
                        (o = d("react.context")),
                        (u = d("react.forward_ref")),
                        (n.Suspense = d("react.suspense")),
                        (s = d("react.memo")),
                        (c = d("react.lazy"));
                }
                var f = "function" === typeof Symbol && Symbol.iterator;
                function p(e) {
                    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
                    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
                }
                var m = {
                        isMounted: function () {
                            return !1;
                        },
                        enqueueForceUpdate: function () {},
                        enqueueReplaceState: function () {},
                        enqueueSetState: function () {},
                    },
                    h = {};
                function g(e, n, t) {
                    (this.props = e), (this.context = n), (this.refs = h), (this.updater = t || m);
                }
                function y() {}
                function v(e, n, t) {
                    (this.props = e), (this.context = n), (this.refs = h), (this.updater = t || m);
                }
                (g.prototype.isReactComponent = {}),
                    (g.prototype.setState = function (e, n) {
                        if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(p(85));
                        this.updater.enqueueSetState(this, e, n, "setState");
                    }),
                    (g.prototype.forceUpdate = function (e) {
                        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
                    }),
                    (y.prototype = g.prototype);
                var b = (v.prototype = new y());
                (b.constructor = v), r(b, g.prototype), (b.isPureReactComponent = !0);
                var w = { current: null },
                    k = Object.prototype.hasOwnProperty,
                    S = { key: !0, ref: !0, __self: !0, __source: !0 };
                function x(e, n, t) {
                    var r,
                        i = {},
                        l = null,
                        o = null;
                    if (null != n) for (r in (void 0 !== n.ref && (o = n.ref), void 0 !== n.key && (l = "" + n.key), n)) k.call(n, r) && !S.hasOwnProperty(r) && (i[r] = n[r]);
                    var u = arguments.length - 2;
                    if (1 === u) i.children = t;
                    else if (1 < u) {
                        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
                        i.children = s;
                    }
                    if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
                    return { $$typeof: a, type: e, key: l, ref: o, props: i, _owner: w.current };
                }
                function E(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === a;
                }
                var C = /\/+/g;
                function _(e, n) {
                    return "object" === typeof e && null !== e && null != e.key
                        ? (function (e) {
                              var n = { "=": "=0", ":": "=2" };
                              return (
                                  "$" +
                                  e.replace(/[=:]/g, function (e) {
                                      return n[e];
                                  })
                              );
                          })("" + e.key)
                        : n.toString(36);
                }
                function L(e, n, t, r, l) {
                    var o = typeof e;
                    ("undefined" !== o && "boolean" !== o) || (e = null);
                    var u = !1;
                    if (null === e) u = !0;
                    else
                        switch (o) {
                            case "string":
                            case "number":
                                u = !0;
                                break;
                            case "object":
                                switch (e.$$typeof) {
                                    case a:
                                    case i:
                                        u = !0;
                                }
                        }
                    if (u)
                        return (
                            (l = l((u = e))),
                            (e = "" === r ? "." + _(u, 0) : r),
                            Array.isArray(l)
                                ? ((t = ""),
                                  null != e && (t = e.replace(C, "$&/") + "/"),
                                  L(l, n, t, "", function (e) {
                                      return e;
                                  }))
                                : null != l &&
                                  (E(l) &&
                                      (l = (function (e, n) {
                                          return { $$typeof: a, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
                                      })(l, t + (!l.key || (u && u.key === l.key) ? "" : ("" + l.key).replace(C, "$&/") + "/") + e)),
                                  n.push(l)),
                            1
                        );
                    if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
                        for (var s = 0; s < e.length; s++) {
                            var c = r + _((o = e[s]), s);
                            u += L(o, n, t, c, l);
                        }
                    else if (
                        ((c = (function (e) {
                            return null === e || "object" !== typeof e ? null : "function" === typeof (e = (f && e[f]) || e["@@iterator"]) ? e : null;
                        })(e)),
                        "function" === typeof c)
                    )
                        for (e = c.call(e), s = 0; !(o = e.next()).done; ) u += L((o = o.value), n, t, (c = r + _(o, s++)), l);
                    else if ("object" === o) throw ((n = "" + e), Error(p(31, "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n)));
                    return u;
                }
                function P(e, n, t) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return (
                        L(e, r, "", "", function (e) {
                            return n.call(t, e, a++);
                        }),
                        r
                    );
                }
                function N(e) {
                    if (-1 === e._status) {
                        var n = e._result;
                        (n = n()),
                            (e._status = 0),
                            (e._result = n),
                            n.then(
                                function (n) {
                                    0 === e._status && ((n = n.default), (e._status = 1), (e._result = n));
                                },
                                function (n) {
                                    0 === e._status && ((e._status = 2), (e._result = n));
                                }
                            );
                    }
                    if (1 === e._status) return e._result;
                    throw e._result;
                }
                var M = { current: null };
                function O() {
                    var e = M.current;
                    if (null === e) throw Error(p(321));
                    return e;
                }
                var j = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: w, IsSomeRendererActing: { current: !1 }, assign: r };
                (n.Children = {
                    map: P,
                    forEach: function (e, n, t) {
                        P(
                            e,
                            function () {
                                n.apply(this, arguments);
                            },
                            t
                        );
                    },
                    count: function (e) {
                        var n = 0;
                        return (
                            P(e, function () {
                                n++;
                            }),
                            n
                        );
                    },
                    toArray: function (e) {
                        return (
                            P(e, function (e) {
                                return e;
                            }) || []
                        );
                    },
                    only: function (e) {
                        if (!E(e)) throw Error(p(143));
                        return e;
                    },
                }),
                    (n.Component = g),
                    (n.PureComponent = v),
                    (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
                    (n.cloneElement = function (e, n, t) {
                        if (null === e || void 0 === e) throw Error(p(267, e));
                        var i = r({}, e.props),
                            l = e.key,
                            o = e.ref,
                            u = e._owner;
                        if (null != n) {
                            if ((void 0 !== n.ref && ((o = n.ref), (u = w.current)), void 0 !== n.key && (l = "" + n.key), e.type && e.type.defaultProps)) var s = e.type.defaultProps;
                            for (c in n) k.call(n, c) && !S.hasOwnProperty(c) && (i[c] = void 0 === n[c] && void 0 !== s ? s[c] : n[c]);
                        }
                        var c = arguments.length - 2;
                        if (1 === c) i.children = t;
                        else if (1 < c) {
                            s = Array(c);
                            for (var d = 0; d < c; d++) s[d] = arguments[d + 2];
                            i.children = s;
                        }
                        return { $$typeof: a, type: e.type, key: l, ref: o, props: i, _owner: u };
                    }),
                    (n.createContext = function (e, n) {
                        return (
                            void 0 === n && (n = null),
                            ((e = { $$typeof: o, _calculateChangedBits: n, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = { $$typeof: l, _context: e }),
                            (e.Consumer = e)
                        );
                    }),
                    (n.createElement = x),
                    (n.createFactory = function (e) {
                        var n = x.bind(null, e);
                        return (n.type = e), n;
                    }),
                    (n.createRef = function () {
                        return { current: null };
                    }),
                    (n.forwardRef = function (e) {
                        return { $$typeof: u, render: e };
                    }),
                    (n.isValidElement = E),
                    (n.lazy = function (e) {
                        return { $$typeof: c, _payload: { _status: -1, _result: e }, _init: N };
                    }),
                    (n.memo = function (e, n) {
                        return { $$typeof: s, type: e, compare: void 0 === n ? null : n };
                    }),
                    (n.useCallback = function (e, n) {
                        return O().useCallback(e, n);
                    }),
                    (n.useContext = function (e, n) {
                        return O().useContext(e, n);
                    }),
                    (n.useDebugValue = function () {}),
                    (n.useEffect = function (e, n) {
                        return O().useEffect(e, n);
                    }),
                    (n.useImperativeHandle = function (e, n, t) {
                        return O().useImperativeHandle(e, n, t);
                    }),
                    (n.useLayoutEffect = function (e, n) {
                        return O().useLayoutEffect(e, n);
                    }),
                    (n.useMemo = function (e, n) {
                        return O().useMemo(e, n);
                    }),
                    (n.useReducer = function (e, n, t) {
                        return O().useReducer(e, n, t);
                    }),
                    (n.useRef = function (e) {
                        return O().useRef(e);
                    }),
                    (n.useState = function (e) {
                        return O().useState(e);
                    }),
                    (n.version = "17.0.2");
            },
            313: function (e, n, t) {
                e.exports = t(306);
            },
            417: function (e, n, t) {
                e.exports = t(918);
            },
            95: function (e, n) {
                var t, r, a, i;
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var l = performance;
                    n.unstable_now = function () {
                        return l.now();
                    };
                } else {
                    var o = Date,
                        u = o.now();
                    n.unstable_now = function () {
                        return o.now() - u;
                    };
                }
                if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                    var s = null,
                        c = null,
                        d = function e() {
                            if (null !== s)
                                try {
                                    var t = n.unstable_now();
                                    s(!0, t), (s = null);
                                } catch (r) {
                                    throw (setTimeout(e, 0), r);
                                }
                        };
                    (t = function (e) {
                        null !== s ? setTimeout(t, 0, e) : ((s = e), setTimeout(d, 0));
                    }),
                        (r = function (e, n) {
                            c = setTimeout(e, n);
                        }),
                        (a = function () {
                            clearTimeout(c);
                        }),
                        (n.unstable_shouldYield = function () {
                            return !1;
                        }),
                        (i = n.unstable_forceFrameRate = function () {});
                } else {
                    var f = window.setTimeout,
                        p = window.clearTimeout;
                    if ("undefined" !== typeof console) {
                        var m = window.cancelAnimationFrame;
                        "function" !== typeof window.requestAnimationFrame &&
                            console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),
                            "function" !== typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
                    }
                    var h = !1,
                        g = null,
                        y = -1,
                        v = 5,
                        b = 0;
                    (n.unstable_shouldYield = function () {
                        return n.unstable_now() >= b;
                    }),
                        (i = function () {}),
                        (n.unstable_forceFrameRate = function (e) {
                            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (v = 0 < e ? Math.floor(1e3 / e) : 5);
                        });
                    var w = new MessageChannel(),
                        k = w.port2;
                    (w.port1.onmessage = function () {
                        if (null !== g) {
                            var e = n.unstable_now();
                            b = e + v;
                            try {
                                g(!0, e) ? k.postMessage(null) : ((h = !1), (g = null));
                            } catch (t) {
                                throw (k.postMessage(null), t);
                            }
                        } else h = !1;
                    }),
                        (t = function (e) {
                            (g = e), h || ((h = !0), k.postMessage(null));
                        }),
                        (r = function (e, t) {
                            y = f(function () {
                                e(n.unstable_now());
                            }, t);
                        }),
                        (a = function () {
                            p(y), (y = -1);
                        });
                }
                function S(e, n) {
                    var t = e.length;
                    e.push(n);
                    e: for (;;) {
                        var r = (t - 1) >>> 1,
                            a = e[r];
                        if (!(void 0 !== a && 0 < C(a, n))) break e;
                        (e[r] = n), (e[t] = a), (t = r);
                    }
                }
                function x(e) {
                    return void 0 === (e = e[0]) ? null : e;
                }
                function E(e) {
                    var n = e[0];
                    if (void 0 !== n) {
                        var t = e.pop();
                        if (t !== n) {
                            e[0] = t;
                            e: for (var r = 0, a = e.length; r < a; ) {
                                var i = 2 * (r + 1) - 1,
                                    l = e[i],
                                    o = i + 1,
                                    u = e[o];
                                if (void 0 !== l && 0 > C(l, t)) void 0 !== u && 0 > C(u, l) ? ((e[r] = u), (e[o] = t), (r = o)) : ((e[r] = l), (e[i] = t), (r = i));
                                else {
                                    if (!(void 0 !== u && 0 > C(u, t))) break e;
                                    (e[r] = u), (e[o] = t), (r = o);
                                }
                            }
                        }
                        return n;
                    }
                    return null;
                }
                function C(e, n) {
                    var t = e.sortIndex - n.sortIndex;
                    return 0 !== t ? t : e.id - n.id;
                }
                var _ = [],
                    L = [],
                    P = 1,
                    N = null,
                    M = 3,
                    O = !1,
                    j = !1,
                    T = !1;
                function z(e) {
                    for (var n = x(L); null !== n; ) {
                        if (null === n.callback) E(L);
                        else {
                            if (!(n.startTime <= e)) break;
                            E(L), (n.sortIndex = n.expirationTime), S(_, n);
                        }
                        n = x(L);
                    }
                }
                function A(e) {
                    if (((T = !1), z(e), !j))
                        if (null !== x(_)) (j = !0), t(R);
                        else {
                            var n = x(L);
                            null !== n && r(A, n.startTime - e);
                        }
                }
                function R(e, t) {
                    (j = !1), T && ((T = !1), a()), (O = !0);
                    var i = M;
                    try {
                        for (z(t), N = x(_); null !== N && (!(N.expirationTime > t) || (e && !n.unstable_shouldYield())); ) {
                            var l = N.callback;
                            if ("function" === typeof l) {
                                (N.callback = null), (M = N.priorityLevel);
                                var o = l(N.expirationTime <= t);
                                (t = n.unstable_now()), "function" === typeof o ? (N.callback = o) : N === x(_) && E(_), z(t);
                            } else E(_);
                            N = x(_);
                        }
                        if (null !== N) var u = !0;
                        else {
                            var s = x(L);
                            null !== s && r(A, s.startTime - t), (u = !1);
                        }
                        return u;
                    } finally {
                        (N = null), (M = i), (O = !1);
                    }
                }
                var D = i;
                (n.unstable_IdlePriority = 5),
                    (n.unstable_ImmediatePriority = 1),
                    (n.unstable_LowPriority = 4),
                    (n.unstable_NormalPriority = 3),
                    (n.unstable_Profiling = null),
                    (n.unstable_UserBlockingPriority = 2),
                    (n.unstable_cancelCallback = function (e) {
                        e.callback = null;
                    }),
                    (n.unstable_continueExecution = function () {
                        j || O || ((j = !0), t(R));
                    }),
                    (n.unstable_getCurrentPriorityLevel = function () {
                        return M;
                    }),
                    (n.unstable_getFirstCallbackNode = function () {
                        return x(_);
                    }),
                    (n.unstable_next = function (e) {
                        switch (M) {
                            case 1:
                            case 2:
                            case 3:
                                var n = 3;
                                break;
                            default:
                                n = M;
                        }
                        var t = M;
                        M = n;
                        try {
                            return e();
                        } finally {
                            M = t;
                        }
                    }),
                    (n.unstable_pauseExecution = function () {}),
                    (n.unstable_requestPaint = D),
                    (n.unstable_runWithPriority = function (e, n) {
                        switch (e) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                e = 3;
                        }
                        var t = M;
                        M = e;
                        try {
                            return n();
                        } finally {
                            M = t;
                        }
                    }),
                    (n.unstable_scheduleCallback = function (e, i, l) {
                        var o = n.unstable_now();
                        switch (("object" === typeof l && null !== l ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o) : (l = o), e)) {
                            case 1:
                                var u = -1;
                                break;
                            case 2:
                                u = 250;
                                break;
                            case 5:
                                u = 1073741823;
                                break;
                            case 4:
                                u = 1e4;
                                break;
                            default:
                                u = 5e3;
                        }
                        return (
                            (e = { id: P++, callback: i, priorityLevel: e, startTime: l, expirationTime: (u = l + u), sortIndex: -1 }),
                            l > o ? ((e.sortIndex = l), S(L, e), null === x(_) && e === x(L) && (T ? a() : (T = !0), r(A, l - o))) : ((e.sortIndex = u), S(_, e), j || O || ((j = !0), t(R))),
                            e
                        );
                    }),
                    (n.unstable_wrapCallback = function (e) {
                        var n = M;
                        return function () {
                            var t = M;
                            M = n;
                            try {
                                return e.apply(this, arguments);
                            } finally {
                                M = t;
                            }
                        };
                    });
            },
            224: function (e, n, t) {
                e.exports = t(95);
            },
        },
        n = {};
    function t(r) {
        var a = n[r];
        if (void 0 !== a) return a.exports;
        var i = (n[r] = { exports: {} });
        return e[r](i, i.exports, t), i.exports;
    }
    t.p = "/";
    t(545);
})();
