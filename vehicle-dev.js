[
	{
		"id": 0,
		"name": "LF 20",
		"short_name": "LF 20",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0, 18],
		"additional": {
			"water": 2000,
			"pump_engine": 2000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 1,
		"name": "LF 10",
		"short_name": "LF 10",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0, 18],
		"additional": {
			"water": 1200,
			"pump_engine": 1000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 2,
		"name": "Drehleiter",
		"short_name": "DLK 23",
		"class": ["platform_trucks"],
		"class_alias": ["Drehleitern"],
		"cost": 10000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {},
		"prerequisites": {
			"fire_stations": 3
		}
	},
	{
		"id": 3,
		"name": "Einsatzleitwagen 1",
		"short_name": "ELW 1",
		"class": ["battalion_chief_vehicles"],
		"class_alias": ["ELW 1"],
		"cost": 10000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {},
		"prerequisites": {
			"fire_stations": 6
		}
	},
	{
		"id": 4,
		"name": "Rüstwagen",
		"short_name": "RW",
		"class": ["heavy_rescue_vehicles"],
		"class_alias": ["Rüstwagen"],
		"cost": 12180,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {},
		"prerequisites": {
			"fire_stations": 4
		}
	},
	{
		"id": 5,
		"name": "GW-Atemschutz",
		"short_name": "GW-A",
		"class": ["mobile_air_vehicles"],
		"class_alias": ["Atemschutz"],
		"cost": 11680,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {},
		"prerequisites": {
			"fire_stations": 5
		}
	},
	{
		"id": 6,
		"name": "LF 8/6",
		"short_name": "LF 8/6",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0, 18],
		"additional": {
			"water": 600,
			"pump_engine": 800
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 7,
		"name": "LF 20/16",
		"short_name": "LF 20/16",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0, 18],
		"additional": {
			"water": 1600,
			"pump_engine": 2000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 8,
		"name": "LF 10/6",
		"short_name": "LF 10/6",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0, 18],
		"additional": {
			"water": 600,
			"pump_engine": 1000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 9,
		"name": "LF 16-TS",
		"short_name": "LF 16-TS",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0, 18],
		"additional": {
			"pump_engine": 1600
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 10,
		"name": "GW-Öl",
		"short_name": "GW-Öl",
		"class": ["gwoil"],
		"class_alias": ["Öl"],
		"cost": 12000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {},
		"prerequisites": {
			"fire_stations": 6
		}
	},
	{
		"id": 11,
		"name": "GW-L2-Wasser",
		"short_name": "GW-L2-W",
		"class": ["water_tankers"],
		"class_alias": ["Schlauchwagen"],
		"cost": 17300,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water_bonus": 25
		},
		"prerequisites": {
			"fire_stations": 7
		}
	},
	{
		"id": 12,
		"name": "GW-Messtechnik",
		"short_name": "GW-Mess",
		"class": ["gwmess"],
		"class_alias": ["Messtechnik"],
		"cost": 18300,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"qualification": [{"names": ["GW-Messtechnik"]}]
		},
		"prerequisites": {
			"fire_stations": 10
		}
	},
	{
		"id": 13,
		"name": "SW 1000",
		"short_name": "SW 1000",
		"class": ["water_tankers"],
		"class_alias": ["Schlauchwagen"],
		"cost": 17300,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water_bonus": 25
		},
		"prerequisites": {
			"fire_stations": 7
		}
	},
	{
		"id": 14,
		"name": "SW 2000",
		"short_name": "SW 2000",
		"class": ["water_tankers"],
		"class_alias": ["Schlauchwagen"],
		"cost": 17300,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [0, 18],
		"additional": {
			"water_bonus": 25
		},
		"prerequisites": {
			"fire_stations": 7
		}
	},
	{
		"id": 15,
		"name": "SW 2000-Tr",
		"short_name": "SW 2000-Tr",
		"class": ["water_tankers"],
		"class_alias": ["Schlauchwagen"],
		"cost": 17300,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water_bonus": 25
		},
		"prerequisites": {
			"fire_stations": 7
		}
	},
	{
		"id": 16,
		"name": "SW KatS",
		"short_name": "SW KatS",
		"class": ["water_tankers"],
		"class_alias": ["Schlauchwagen"],
		"cost": 17300,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water_bonus": 25
		},
		"prerequisites": {
			"fire_stations": 7
		}
	},
	{
		"id": 17,
		"name": "TLF 2000",
		"short_name": "TLF 2000",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 2000,
			"pump_engine": 1000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 18,
		"name": "TLF 3000",
		"short_name": "TLF 3000",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 3000,
			"pump_engine": 2000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 19,
		"name": "TLF 8/8",
		"short_name": "TLF 8/8",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 800,
			"pump_engine": 800
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 20,
		"name": "TLF 8/18",
		"short_name": "TLF 8/18",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 1800,
			"pump_engine": 800
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 21,
		"name": "TLF 16/24-Tr",
		"short_name": "TLF 16/24-Tr",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 2400,
			"pump_engine": 1600
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 22,
		"name": "TLF 16/25",
		"short_name": "TLF 16/25",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [0, 18],
		"additional": {
			"water": 2400,
			"pump_engine": 1600
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 23,
		"name": "TLF 16/45",
		"short_name": "TLF 16/45",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 4500,
			"pump_engine": 1600
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 24,
		"name": "TLF 20/40",
		"short_name": "TLF 20/40",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 4000,
			"pump_engine": 2000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 25,
		"name": "TLF 20/40-SL",
		"short_name": "TLF 20/40-SL",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 4000,
			"pump_engine": 2000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 26,
		"name": "TLF 16",
		"short_name": "TLF 16",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 1800,
			"pump_engine": 1600
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 27,
		"name": "GW-Gefahrgut",
		"short_name": "GW-G",
		"class": ["hazmat_vehicles"],
		"class_alias": ["Gefahrgut"],
		"cost": 19200,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"qualification": [{"names": ["GW-Gefahrgut"]}]
		},
		"prerequisites": {
			"fire_stations": 11
		}
	},
	{
		"id": 28,
		"name": "Rettungswagen",
		"short_name": "RTW",
		"class": ["ambulances"],
		"class_alias": ["Patiententransport"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [0, 2, 12, 20],
		"additional": {
			"critical_patients": true,
			"primary_transport": true,
			"secondary_transport": true
		},
		"prerequisites": {
			"rescue_stations": 1
		}
	},
	{
		"id": 29,
		"name": "Notarzteinsatzfahrzeug",
		"short_name": "NEF",
		"class_alias": ["Notarzt"],
		"class": ["nef"],
		"cost": 20000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [0, 2, 20],
		"additional": {
			"critical_patients": true,
			"qualification": [{"names": ["Notarzt"]}]
		},
		"prerequisites": {
			"rescue_stations": 3
		}
	},
	{
		"id": 30,
		"name": "HLF 20",
		"short_name": "HLF 20",
		"class": ["firetrucks", "water_damage_pump", "heavy_rescue_vehicles"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe", "Rüstwagen"],
		"cost": 20000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0, 18],
		"additional": {
			"water": 1600,
			"pump_engine": 2000,
			"rank": "Gruppenführer(in)"
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 31,
		"name": "Rettungshubschrauber",
		"short_name": "RTH",
		"class": ["helicopter", "nef"],
		"class_alias": ["RTH", "Notarzt"],
		"cost": 300000,
		"personal": {
			"min": 1,
			"max": 1
		},
		"building": [5],
		"additional": {
			"critical_patients": true,
			"primary_transport": true,
			"required_on_mission": [28, 58],
			"qualification": [{"names": ["Notarzt"]}],
			"rank": "Stv. Zugführer(in)",
			"special_conditions": true
		},
		"prerequisites": {
			"rescue_stations": 3
		}
	},
	{
		"id": 32,
		"name": "Funkstreifenwagen",
		"short_name": "FuStW",
		"class": ["police_cars"],
		"class_alias": ["Polizeistreifen"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [6, 19],
		"additional": {
			"prisoners_transport": 1
		},
		"prerequisites": {
			"police_stations": 1
		}
	},
	{
		"id": 33,
		"name": "GW-Höhenrettung",
		"short_name": "GW-H",
		"class": ["height_rescue_units"],
		"class_alias": ["Höhenrettung"],
		"cost": 19500,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0, 18],
		"additional": {
			"qualification": [{"names": ["GW-Höhenrettung"]}]
		},
		"prerequisites": {
			"fire_stations": 12
		}
	},
	{
		"id": 34,
		"name": "Einsatzleitwagen 2",
		"short_name": "ELW 2",
		"class": ["mobile_command_vehicles", "battalion_chief_vehicles"],
		"class_alias": ["ELW 2", "ELW 1"],
		"cost": 25500,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [0, 18],
		"additional": {
			"qualification": [{"names": ["ELW 2"]}]
		},
		"prerequisites": {
			"fire_stations": 13
		}
	},
	{
		"id": 35,
		"name": "Leichter Befehlskraftwagen",
		"short_name": "leBefKw",
		"class": ["lebefkw"],
		"class_alias": ["leBefKw"],
		"cost": 10000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [11],
		"additional": {
			"qualification": [{"names": ["Zugführer (leBefKw)"]}]
		},
		"prerequisites": {
			"bereitschaftspolizei": 1
		}
	},
	{
		"id": 36,
		"name": "Mannschaftstransport-Wagen",
		"short_name": "MTW",
		"class": [],
		"class_alias": [],
		"cost": 2500,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0, 18],
		"additional": {},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 37,
		"name": "TSF-W",
		"short_name": "TSF-W",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [0, 18],
		"additional": {
			"water": 500,
			"pump_engine": 1000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 38,
		"name": "Krankentransportwagen",
		"short_name": "KTW",
		"class": ["ambulances"],
		"class_alias": ["Patiententransport"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [0, 2, 20],
		"additional": {
			"primary_transport": true,
			"secondary_transport": true
		},
		"prerequisites": {
			"rescue_stations": 1
		}
	},
	{
		"id": 39,
		"name": "Gerätekraftwagen",
		"short_name": "GKW",
		"class": ["thw_gkw", "heavy_rescue_vehicles"],
		"class_alias": ["GKW", "Rüstwagen"],
		"cost": 13000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [9],
		"additional": {},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 40,
		"name": "MTW-TZ",
		"short_name": "MTW-TZ",
		"class": ["thw_mtwtz"],
		"class_alias": ["MTW-TZ"],
		"cost": 2500,
		"personal": {
			"min": 1,
			"max": 4
		},
		"building": [9],
		"additional": {
			"qualification": [{"names": ["Zugtrupp"]}]
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 41,
		"name": "Mehrzweck-Gerätewagen der Fachgruppe N",
		"short_name": "Mehrzweck-Gerätewagen der Fachgruppe N",
		"class": ["thw_mzkw"],
		"class_alias": ["MzGW (FGr N)"],
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [9],
		"additional": {},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 42,
		"name": "Lastkraftwagen-Kipper 9 t",
		"short_name": "LKW K9",
		"class": ["thw_lkw"],
		"class_alias": ["LKW K9"],
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [9],
		"additional": {
			"qualification": [{"names": ["Fachgruppe Räumen"]}]
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 43,
		"name": "Radlader groß",
		"short_name": "BRmG R",
		"class": ["thw_brmg_r"],
		"class_alias": ["BRmG R"],
		"cost": 15000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [9],
		"additional": {
			"trailer": true
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 44,
		"name": "Anhänger Drucklufterzeugung",
		"short_name": "Anh. DLE",
		"class": ["thw_dle"],
		"class_alias": ["Anh DLE"],
		"cost": 10000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [9],
		"additional": {
			"trailer": true
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 45,
		"name": "Mannschaftslastwagen Typ V",
		"short_name": "MLW 5",
		"class": [],
		"class_alias": [],
		"cost": 2500,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [9],
		"additional": {
			"qualification": [{"names": ["Fachgruppe Räumen"]}],
			"mission_time_bonus": 20
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 46,
		"name": "Wechselladerfahrzeug",
		"short_name": "WLF",
		"class": [],
		"class_alias": [],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"qualification": [{"names": ["Wechsellader"]}]
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 47,
		"name": "Abrollbehälter-Rüst",
		"short_name": "AB-Rüst",
		"class": ["heavy_rescue_vehicles"],
		"class_alias": ["Rüstwagen"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 48,
		"name": "AB-Atemschutz",
		"short_name": "AB-A",
		"class": ["mobile_air_vehicles"],
		"class_alias": ["Atemschutz"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 49,
		"name": "AB-Öl",
		"short_name": "AB-Öl",
		"class": ["gwoil"],
		"class_alias": ["Öl"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 50,
		"name": "Gruppenkraftwagen",
		"short_name": "GruKw",
		"class": ["grukw"],
		"class_alias": ["GruKw"],
		"cost": 10000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [11],
		"additional": {},
		"prerequisites": {
			"bereitschaftspolizei": 1
		}
	},
	{
		"id": 51,
		"name": "Führungskraftwagen",
		"short_name": "FüKw",
		"class": ["fukw"],
		"class_alias": ["FüKw"],
		"cost": 17500,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [11, 17],
		"additional": {
			"qualification": [{"names": ["Hundertschaftsführer (FüKw)"]}]
		},
		"prerequisites": {
			"bereitschaftspolizei": 1,
			"sek": 1,
			"mek": 1
		}
	},
	{
		"id": 52,
		"name": "Gefangenenkraftwagen",
		"short_name": "GefKw",
		"class": ["gefkw"],
		"class_alias": ["GefKw"],
		"cost": 13000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [11],
		"additional": {
			"prisoners_transport": 5
		},
		"prerequisites": {
			"bereitschaftspolizei": 1
		}
	},
	{
		"id": 53,
		"name": "Dekon-P",
		"short_name": "Dekon-P",
		"class": ["hazmat_dekon"],
		"class_alias": ["Dekon-P"],
		"cost": 23100,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [0, 18],
		"additional": {
			"qualification": [{"names": ["Dekon-P"]}]
		},
		"prerequisites": {
			"fire_stations": 14
		}
	},
	{
		"id": 54,
		"name": "AB-Dekon-P",
		"short_name": "AB-Dekon-P",
		"class": ["hazmat_dekon"],
		"class_alias": ["Dekon-P"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true,
			"qualification": [{"names": ["Dekon-P"]}]
		},
		"prerequisites": {
			"fire_stations": 14
		}
	},
	{
		"id": 55,
		"name": "Kommandowagen - für den LNA",
		"short_name": "KdoW-LNA",
		"class": [],
		"class_alias": [],
		"cost": 20000,
		"personal": {
			"min": 1,
			"max": 1
		},
		"building": [2, 20],
		"additional": {
			"qualification": [{"names": ["LNA"]}]
		},
		"prerequisites": {
			"rescue_stations": 5,
			"patient_min": 5
		}
	},
	{
		"id": 56,
		"name": "Kommandowagen - für den OrgL",
		"short_name": "KdoW-OrgL",
		"class": [],
		"class_alias": [],
		"cost": 20000,
		"personal": {
			"min": 1,
			"max": 1
		},
		"building": [2, 20],
		"additional": {
			"qualification": [{"names": ["OrgL"]}]
		},
		"prerequisites": {
			"rescue_stations": 10,
			"patient_min": 10
		}
	},
	{
		"id": 57,
		"name": "Feuerwehrkran",
		"short_name": "FwK",
		"class": ["fwk"],
		"class_alias": ["FwK"],
		"cost": 30000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [0, 18],
		"additional": {
			"qualification": [{"names": ["Feuerwehrkran"]}]
		},
		"prerequisites": {
			"fire_stations": 14
		}
	},
	{
		"id": 58,
		"name": "Krankentransportwagen Typ B",
		"short_name": "KTW Typ B",
		"class": ["ambulances"],
		"class_alias": ["Patiententransport"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [12],
		"additional": {
			"critical_patients": true,
			"primary_transport": true,
			"required_on_mission": [60]
		},
		"prerequisites": {
			"rescue_stations": 3,
			"seg": 1
		}
	},
	{
		"id": 59,
		"name": "Einsatzleitwagen (SEG)",
		"short_name": "ELW 1 (SEG)",
		"class": ["seg_elw"],
		"class_alias": ["ELW 1 (SEG)"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [12],
		"additional": {
			"auto_request_transport": true,
			"qualification": [{"names": ["Einsatzleitung (SEG)"]}]
		},
		"prerequisites": {
			"rescue_stations": 3,
			"seg": 1
		}
	},
	{
		"id": 60,
		"name": "Gerätewagen Sanität",
		"short_name": "GW-San",
		"class": ["gw_san"],
		"class_alias": ["GW-San"],
		"cost": 5000,
		"personal": {
			"min": 6,
			"max": 6
		},
		"building": [12],
		"additional": {
			"patients_on_time": 5,
			"qualification": [{"names": ["GW-San"]}]
		},
		"prerequisites": {
			"rescue_stations": 3,
			"seg": 1,
			"extensions": ["Sanitätsdienst"]
		}
	},
	{
		"id": 61,
		"name": "Polizeihubschrauber",
		"short_name": "Pol-Heli",
		"class": ["police_helicopters"],
		"class_alias": ["Polizeihubschrauber"],
		"cost": 300000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [13],
		"additional": {
			"qualification": [{"names": ["Polizeihubschrauber"]}],
			"special_conditions": true
		},
		"prerequisites": {
			"police_helicopter_stations": 1
		}
	},
	{
		"id": 62,
		"name": "Abrollbehälter-Schlauch",
		"short_name": "AB-Schlauch",
		"class": ["water_tankers"],
		"class_alias": ["Schlauchwagen"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true,
			"water_bonus": 25
		},
		"prerequisites": {
			"fire_stations": 7
		}
	},
	{
		"id": 63,
		"name": "Gerätewagen Taucher",
		"short_name": "GW-Taucher",
		"class": ["diver_units"],
		"class_alias": ["Taucher"],
		"cost": 10000,
		"personal": {
			"min": 2,
			"max": 2
		},
		"building": [0, 12, 15],
		"additional": {
			"qualification": [{"names": ["GW-Taucher"]}]
		},
		"prerequisites": {
			"wasserrettung": 1
		}
	},
	{
		"id": 64,
		"name": "Gerätewagen Wasserrettung",
		"short_name": "GW-Wasserrettung",
		"class": [],
		"class_alias": [],
		"cost": 10000,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [0, 12, 15],
		"additional": {
			"qualification": [{"names": ["GW-Wasserrettung"]}]
		},
		"prerequisites": {
			"wasserrettung": 1
		}
	},
	{
		"id": 65,
		"name": "LKW-Kipper, 7 t, geländegängig",
		"short_name": "LKW 7 Lkr 19 tm",
		"class": [],
		"class_alias": [],
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [9],
		"additional": {
			"qualification": [{"names": ["GW-Wasserrettung"]}]
		},
		"prerequisites": {
			"wasserrettung": 1
		}
	},
	{
		"id": 66,
		"name": "Mehrzweckboot (MzB) auf Transporthänger",
		"short_name": "Anh MzB",
		"class": ["boats"],
		"class_alias": ["Boote"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [9],
		"additional": {
			"trailer": true
		},
		"prerequisites": {
			"wasserrettung": 1
		}
	},
	{
		"id": 67,
		"name": "Schlauchboot 1 t auf Transporthänger",
		"short_name": "Anh SchlB",
		"class": ["boats"],
		"class_alias": ["Boote"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [9],
		"additional": {
			"trailer": true
		},
		"prerequisites": {
			"wasserrettung": 1
		}
	},
	{
		"id": 68,
		"name": "Mehrzweckarbeitsboot mit Bugklappe auf Transport-Anhänger",
		"short_name": "Anh MzAB",
		"class": ["boats"],
		"class_alias": ["Boote"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [9],
		"additional": {
			"trailer": true
		},
		"prerequisites": {
			"wasserrettung": 1
		}
	},
	{
		"id": 69,
		"name": "Tauchkraftwagen",
		"short_name": "TKW",
		"class": ["diver_units"],
		"class_alias": ["Taucher"],
		"cost": 10000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [9],
		"additional": {
			"qualification": [{"names": ["GW-Taucher"]}]
		},
		"prerequisites": {
			"wasserrettung": 1
		}
	},
	{
		"id": 70,
		"name": "Mehrzweckboot",
		"short_name": "MZB",
		"class": ["boats"],
		"class_alias": ["Boote"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 12, 15],
		"additional": {
			"trailer": true
		},
		"prerequisites": {
			"wasserrettung": 1
		}
	},
	{
		"id": 71,
		"name": "Abrollbehälter-Mehrzweckboot",
		"short_name": "AB-MZB",
		"class": ["boats"],
		"class_alias": ["Boote"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true,
			"qualification": [{"names": ["GW-Wasserrettung"]}]
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 72,
		"name": "Wasserwerfer 1000",
		"short_name": "WaWe 10",
		"class": ["wasserwerfer"],
		"class_alias": ["Wasserwerfer"],
		"cost": 32000,
		"personal": {
			"min": 5,
			"max": 5
		},
		"building": [11],
		"additional": {
			"qualification": [{"names": ["Wasserwerfer"]}]
		},
		"prerequisites": {
			"bereitschaftspolizei": 1
		}
	},
	{
		"id": 73,
		"name": "Großraum-Rettungstransportwagen",
		"short_name": "GRTW",
		"class": ["ambulances"],
		"class_alias": ["Patiententransport"],
		"cost": 25000,
		"personal": {
			"min": 6,
			"max": 6
		},
		"building": [0, 2, 20],
		"additional": {
			"option_with_na": {
				"critical_patients": true,
				"primary_transport": true,
				"patients_on_time": 3,
				"qualification": [{"names": ["Notarzt"]}]
			},
			"option_without_na": {
				"primary_transport": true,
				"patients_on_time": 7
			},
			"special_conditions": true
		},
		"prerequisites": {
			"rescue_stations": {
				"premium": 15,
				"normal": 20
			}
		}
	},
	{
		"id": 74,
		"name": "Notarztwagen",
		"short_name": "NAW",
		"class": ["ambulances", "nef"],
		"class_alias": ["Patiententransport", "Notarzt"],
		"cost": 25000,
		"personal": {
			"min": 3,
			"max": 3
		},
		"building": [0, 2, 20],
		"additional": {
			"critical_patients": true,
			"primary_transport": true,
			"qualification": [{"names": ["Notarzt"]}],
			"special_conditions": true
		},
		"prerequisites": {
			"rescue_stations": 3
		}
	},
	{
		"id": 75,
		"name": "Flugfeldlöschfahrzeug",
		"short_name": "FLF",
		"class": ["arff"],
		"class_alias": ["FLF"],
		"cost": 80000,
		"personal": {
			"min": 2,
			"max": 3
		},
		"building": [0],
		"additional": {
			"water": 12000,
			"qualification": [{"names": ["Flugfeldlöschfahrzeug"]}]
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 76,
		"name": "Rettungstreppe",
		"short_name": "RTF",
		"class": ["rettungstreppe"],
		"class_alias": ["Rettungstreppe"],
		"cost": 20000,
		"personal": {
			"min": 2,
			"max": 2
		},
		"building": [0],
		"additional": {
			"qualification": [{"names": ["Rettungstreppe"]}]
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 77,
		"name": "Abrollbehälter-Gefahrgut",
		"short_name": "AB-Gefahrgut",
		"class": ["hazmat_vehicles"],
		"class_alias": ["Gefahrgut"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true,
			"qualification": [{"names": ["GW-Gefahrgut"]}]
		},
		"prerequisites": {
			"fire_stations": 11
		}
	},
	{
		"id": 78,
		"name": "AB-Einsatzleitung",
		"short_name": "AB-EL",
		"class": ["mobile_command_vehicles", "battalion_chief_vehicles"],
		"class_alias": ["ELW 2", "ELW 1"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true,
			"qualification": [{"names": ["ELW 2"]}]
		},
		"prerequisites": {
			"fire_stations": 13
		}
	},
	{
		"id": 79,
		"name": "SEK - Zivilfahrzeug",
		"short_name": "SEK - ZF",
		"class": ["sek", "sek_zf"],
		"class_alias": ["SEK", "SEK - ZF"],
		"cost": 10000,
		"personal": {
			"min": 3,
			"max": 4
		},
		"building": [11, 17],
		"additional": {
			"qualification": [{"names": ["SEK"]}]
		},
		"prerequisites": {
			"sek": 1
		}
	},
	{
		"id": 80,
		"name": "SEK - Mannschaftstransportfahrzeug",
		"short_name": "SEK - MTF",
		"class": ["sek", "sek_mtf"],
		"class_alias": ["SEK", "SEK - MTF"],
		"cost": 10000,
		"personal": {
			"min": 9,
			"max": 9
		},
		"building": [11, 17],
		"additional": {
			"qualification": [{"names": ["SEK"]}]
		},
		"prerequisites": {
			"sek": 1
		}
	},
	{
		"id": 81,
		"name": "MEK - Zivilfahrzeug",
		"short_name": "MEK - ZF",
		"class": ["mek", "mek_zf"],
		"class_alias": ["MEK", "MEK - ZF"],
		"cost": 10000,
		"personal": {
			"min": 3,
			"max": 4
		},
		"building": [11, 17],
		"additional": {
			"qualification": [{"names": ["MEK"]}]
		},
		"prerequisites": {
			"mek": 1
		}
	},
	{
		"id": 82,
		"name": "MEK - Mannschaftstransportfahrzeug",
		"short_name": "MEK - MTF",
		"class": ["mek", "mek_mtf"],
		"class_alias": ["MEK", "MEK - MTF"],
		"cost": 10000,
		"personal": {
			"min": 9,
			"max": 9
		},
		"building": [11, 17],
		"additional": {
			"qualification": [{"names": ["MEK"]}]
		},
		"prerequisites": {
			"mek": 1
		}
	},
	{
		"id": 83,
		"name": "GW-Werkfeuerwehr",
		"short_name": "GW-Werk",
		"class": ["gw_werkfeuerwehr"],
		"class_alias": ["GW-Werkfeuerwehr"],
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0],
		"additional": {
			"qualification": [{"names": ["Werkfeuerwehr"]}]
		},
		"prerequisites": {
			"werkfeuerwehr": 1
		}
	},
	{
		"id": 84,
		"name": "ULF mit Löscharm",
		"short_name": "ULF-Löscharm",
		"class": ["ulf"],
		"class_alias": ["ULF mit Löscharm"],
		"cost": 20000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0],
		"additional": {
			"water": 5000,
			"qualification": [{"names": ["Werkfeuerwehr"]}]
		},
		"prerequisites": {
			"werkfeuerwehr": 1
		}
	},
	{
		"id": 85,
		"name": "Teleskopmast 50",
		"short_name": "TM 50",
		"class": ["teleskopmast", "platform_trucks"],
		"class_alias": ["TM 50", "Drehleitern"],
		"cost": 20000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0],
		"additional": {
			"qualification": [{"names": ["Werkfeuerwehr"]}]
		},
		"prerequisites": {
			"werkfeuerwehr": 1
		}
	},
	{
		"id": 86,
		"name": "Turbolöscher",
		"short_name": "Turbolöscher",
		"class": ["turboloescher"],
		"class_alias": ["Turbolöscher"],
		"cost": 12500,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0],
		"additional": {
			"qualification": [{"names": ["Werkfeuerwehr"]}]
		},
		"prerequisites": {
			"werkfeuerwehr": 1
		}
	},
	{
		"id": 87,
		"name": "TLF 4000",
		"short_name": "TLF 4000",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 4000,
			"pump_engine": 2000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 88,
		"name": "Kleinlöschfahrzeug",
		"short_name": "KLF",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [0, 18],
		"additional": {
			"water": 500,
			"pump_engine": 1000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 89,
		"name": "Mittleres Löschfahrzeug",
		"short_name": "MLF",
		"class": ["firetrucks", "water_damage_pump"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [0, 18],
		"additional": {
			"water": 1000,
			"pump_engine": 1000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 90,
		"name": "HLF 10",
		"short_name": "HLF 10",
		"class": ["firetrucks", "water_damage_pump", "heavy_rescue_vehicles"],
		"class_alias": ["Löschfahrzeuge", "Feuerlöschpumpe", "Rüstwagen"],
		"cost": 20000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0, 18],
		"additional": {
			"water": 1000,
			"pump_engine": 1000
		},
		"prerequisites": {
			"fire_stations": 1,
			"rank": "Gruppenführer(in)"
		}
	},
	{
		"id": 91,
		"name": "Rettungshundefahrzeug",
		"short_name": "MTF-Hund",
		"class": ["rescue_dog_units"],
		"class_alias": ["Rettungshunde"],
		"cost": 25000,
		"personal": {
			"min": 4,
			"max": 5
		},
		"building": [12, 21],
		"additional": {
			"qualification": [{"names": ["Rettungshundeführer (SEG)"]}]
		},
		"prerequisites": {
			"rescue_dog_units": 1
		}
	},
	{
		"id": 92,
		"name": "Anhänger Hundetransport",
		"short_name": "Anh Hund",
		"class": ["rescue_dog_units"],
		"class_alias": ["Rettungshunde"],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [9],
		"additional": {
			"trailer": true,
			"qualification": [{"names": ["Rettungshundeführer (THW)"]}]
		},
		"prerequisites": {
			"rescue_dog_units": 1
		}
	},
	{
		"id": 93,
		"name": "Mannschaftstransportwagen Ortsverband",
		"short_name": "MTW-O (Hunde)",
		"class": [],
		"class_alias": [],
		"cost": 19000,
		"personal": {
			"min": 4,
			"max": 5
		},
		"building": [9],
		"additional": {},
		"prerequisites": {
			"rescue_dog_units": 1
		}
	},
	{
		"id": 94,
		"name": "Diensthundeführerkraftwagen",
		"short_name": "DHuFüKw",
		"class": ["k9"],
		"class_alias": ["Polizeihund"],
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [6, 11, 17],
		"additional": {
			"qualification": [{"names": ["Hundeführer (Schutzhund)"]}]
		},
		"prerequisites": {
			"k9": 1
		}
	},
	{
		"id": 95,
		"name": "Polizeimotorrad",
		"short_name": "Pol-Motorrad",
		"class": ["police_motorcycle"],
		"class_alias": ["Polizeimotorrad"],
		"cost": 3000,
		"personal": {
			"min": 1,
			"max": 1
		},
		"building": [6, 19],
		"additional": {
			"qualification": [{"names": ["Motorradstaffel"]}]
		},
		"prerequisites": {
			"police_stations": 1
		}
	},
	{
		"id": 96,
		"name": "Außenlastbehälter (allgemein)",
		"short_name": "Außenlastbehälter",
		"class": ["helicopter_bucket"],
		"class_alias": ["Außenlastbehälter"],
		"cost": 50000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [13],
		"additional": {
			"qualification": [{"names": ["Brandbekämpfung"]}],
			"trailer": true,
			"water": 1000
		},
		"prerequisites": {
			"police_helicopter_stations": 1
		}
	},
	{
		"id": 97,
		"name": "Intensivtransportwagen",
		"short_name": "ITW",
		"class": ["ambulances", "nef"],
		"class_alias": ["Patiententransport", "Notarzt"],
		"cost": 30000,
		"personal": {
			"min": 3,
			"max": 3
		},
		"building": [0, 2, 20],
		"additional": {
			"critical_patients": true,
			"primary_transport": true,
			"secondary_transport": true,
			"qualification": [{"names": ["Notarzt"], "min": 1, "max": 1}, {"names": ["Intensivpflege"], "min": 2, "max": 2}],
			"special_conditions": true
		},
		"prerequisites": {
			"rescue_stations": {
				"premium": 10,
				"normal": 15
			}
		}
	},
	{
		"id": 98,
		"name": "Zivilstreifenwagen",
		"short_name": "Zivilstreife",
		"class": ["civil_patrolcar"],
		"class_alias": ["Zivilstreife"],
		"cost": 5000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [6, 19],
		"additional": {
			"qualification": [{"names": ["Kriminalpolizist"]}],
			"prisoners_transport": 1
		},
		"prerequisites": {
			"police_stations": 1
		}
	},
	{
		"id": 99,
		"name": "Lastkraftwagen Plane/Spriegel mit Ladebordwand, 7 t",
		"short_name": "LKW 7 Lbw",
		"class": [],
		"class_alias": [],
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [9],
		"additional": {
			"qualification": [{"names": ["Fachgruppe Wasserschaden/Pumpen"]}]
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 100,
		"name": "Mannschaftslastwagen Typ IV mit Ladebordwand",
		"short_name": "MLW 4",
		"class": [],
		"class_alias": [],
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 7
		},
		"building": [9],
		"additional": {
			"qualification": [{"names": ["Fachgruppe Wasserschaden/Pumpen"]}]
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 101,
		"name": "Anhänger mit Schmutzwasserkreiselpumpe",
		"short_name": "Anh SwPu",
		"class": ["pump", "water_tankers", "water_damage_pump"],
		"class_alias": [
			"Schmutzwasserpumpe",
			"Schlauchwagen",
			"Feuerlöschpumpe"
		],
		"cost": 15000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [9],
		"additional": {
			"trailer": true,
			"water_bonus": 25,
			"pump_engine": 15000
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 102,
		"name": "Anhänger Plane/Spriegel für Nutzlast, 7 t",
		"short_name": "Anh 7",
		"class": ["pump", "water_tankers", "water_damage_pump"],
		"class_alias": [
			"Schmutzwasserpumpe",
			"Schlauchwagen",
			"Feuerlöschpumpe"
		],
		"cost": 6000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [9],
		"additional": {
			"trailer": true,
			"water_bonus": 25,
			"pump_engine": 12400
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 103,
		"name": "Funkstreifenwagen (Dienstgruppenleiter)",
		"short_name": "FuStW (DGL)",
		"class": ["police_service_group_leader", "police_cars"],
		"class_alias": ["Dienstgruppenleiter", "Polizeistreifen"],
		"cost": 25000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [6],
		"additional": {
			"prisoners_transport": 1,
			"qualification": [{"names": ["Dienstgruppenleitung"]}]
		},
		"prerequisites": {
			"police_stations": 1
		}
	},
	{
		"id": 104,
		"name": "Gerätewagen Logistik 1",
		"short_name": "GW-L1",
		"class": [],
		"class_alias": [],
		"cost": 8000,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [0, 18],
		"additional": {
			"capacity": 20
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 105,
		"name": "Gerätewagen Logistik 2",
		"short_name": "GW-L2",
		"class": [],
		"class_alias": [],
		"cost": 12000,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [0, 18],
		"additional": {
			"capacity": 30
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 106,
		"name": "Mannschaftstransportfahrzeug mit Ladefläche",
		"short_name": "MTF-L",
		"class": [],
		"class_alias": [],
		"cost": 4000,
		"personal": {
			"min": 1,
			"max": 6
		},
		"building": [0, 18],
		"additional": {
			"capacity": 10
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 107,
		"name": "Löschfahrzeug Logistik",
		"short_name": "LF-L",
		"class": [],
		"class_alias": [],
		"cost": 9000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [0, 18],
		"additional": {
			"capacity": 10,
			"water": 2000,
			"pump_engine": 2000
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 108,
		"name": "Abrollbehälter Logistik",
		"short_name": "AB-L",
		"class": [],
		"class_alias": [],
		"cost": 7000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"capacity": 30,
			"trailer": true
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 109,
		"name": "Mehrzweck-Gerätewagen (SB)",
		"short_name": "MzGW SB",
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [9],
		"additional": {
			"qualification": [{"names": ["FGr SB"]}]
		}
	},
	{
		"id": 110,
		"name": "Netzersatzanlage 50 kVA",
		"short_name": "NEA50 (THW)",
		"cost": 10000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [9],
		"additional": {
			"trailer": true
		}
	},
	{
		"id": 111,
		"name": "NEA50",
		"short_name": "NEA50 (FW)",
		"cost": 10000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true
		}
	},
	{
		"id": 112,
		"name": "Netzersatzanlage 200 kVA",
		"short_name": "NEA200 (THW)",
		"cost": 50000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [9],
		"additional": {
			"trailer": true
		}
	},
	{
		"id": 113,
		"name": "NEA200",
		"short_name": "NEA200 (FW)",
		"cost": 50000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true
		}
	},
	{
		"id": 114,
		"name": "Gerätewagen Lüfter",
		"short_name": "GW-Lüfter",
		"cost": 25000,
		"personal": {
			"min": 1,
			"max": 2
		},
		"building": [0, 18]
	},
	{
		"id": 115,
		"name": "Anhänger Lüfter",
		"short_name": "Anh Lüfter",
		"cost": 10000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true
		}
	},
	{
		"id": 116,
		"name": "Abrollbehälter Lüfter",
		"short_name": "AB Lüfter",
		"cost": 7000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true
		}
	},
	{
		"id": 117,
		"name": "Abrollbehälter Tank",
		"short_name": "AB-Tank",
		"cost": 4000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true,
			"water": 10000 
		}
	},
	{
		"id": 118,
		"name": "Kleintankwagen",
		"short_name": "Kleintankwagen",
		"cost": 10000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 10000
		}
	},
	{
		"id": 119,
		"name": "Abrollbehälter Löschwasser",
		"short_name": "AB-Lösch",
		"cost": 8000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [0, 18],
		"additional": {
			"trailer": true,
			"water": 8000
		}
	},
	{
		"id": 120,
		"name": "Tankwagen",
		"short_name": "Tankwagen",
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 20000
		}
	},
	{
		"id": 121,
		"name": "Großtanklöschfahrzeuge",
		"short_name": "GTLF",
		"cost": 10000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [0, 18],
		"additional": {
			"water": 10000
		}
	},
		{
		"id": 122,
		"name": "Lastkraftwagen Plane/Spriegel mit Ladebordwand, 7 t, Fachgruppe Elerktroversorgung",
		"short_name": "LKW 7 Lbw (FGr E)",
		"class": [],
		"class_alias": [],
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [9],
		"additional": {
			"qualification": [{"names": ["FGr E"]}]
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 123,
		"name": "Lastkraftwagen Plane/Spriegel mit Ladebordwand, 7 t, Fachgruppe Wasserschaden/Pumpen",
		"short_name": "LKW 7 Lbw (FGr WP)",
		"class": [],
		"class_alias": [],
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 3
		},
		"building": [9],
		"additional": {
			"qualification": [{"names": ["Fachgruppe Wasserschaden/Pumpen"]}]
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 124,
		"name": "Mannschaftstransportwagen des Ortsverbands",
		"short_name": "MTW-OV",
		"class": [],
		"class_alias": [],
		"cost": 15000,
		"personal": {
			"min": 1,
			"max": 7
		},
		"building": [9],
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 125,
		"name": "Mannschaftstransportwagen Trupp Unbemannte Luftfahrtsysteme",
		"short_name": "MTW-Tr UL",
		"class": [],
		"class_alias": [],
		"cost": 10000,
		"personal": {
			"min": 4,
			"max": 4
		},
		"building": [9],
		"additional": {
			"qualification": [{"names": ["Tr UL"]}]
		},
		"prerequisites": {
			"thw": 1
		}
	},
	{
		"id": 126,
		"name": "Mannschaftstransportfahrzeug Drohne",
		"short_name": "MTF Drohne",
		"class": [],
		"class_alias": [],
		"cost": 10000,
		"personal": {
			"min": 4,
			"max": 5
		},
		"building": [0, 18],
		"additional": {
			"qualification": [{"names": ["Drohnen-Schulung"]}]
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 127,
		"name": "Gerätewagen Drohne",
		"short_name": "GW UAS",
		"class": [],
		"class_alias": [],
		"cost": 10000,
		"personal": {
			"min": 4,
			"max": 4
		},
		"building": [12],
		"additional": {
			"qualification": [{"names": ["SEG Drohne"]}]
		},
		"prerequisites": {
			"seg": 1
		}
	},
	{
		"id": 128,
		"name": "Einsatzleitwagen Drohne",
		"short_name": "ELW Drohne",
		"class": [],
		"class_alias": [],
		"cost": 20000,
		"personal": {
			"min": 4,
			"max": 5
		},
		"building": [0, 18],
		"additional": {
			"qualification": [{"names": ["Drohnen-Schulung"]}]
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 129,
		"name": "Einsatzleitwagen 2 Drohne",
		"short_name": "ELW2 Drohne",
		"class": [],
		"class_alias": [],
		"cost": 35000,
		"personal": {
			"min": 4,
			"max": 6
		},
		"building": [0, 18],
		"additional": {
			"qualification": [{"names": ["ELW 2", "Drohnen-Schulung"]}]
		},
		"prerequisites": {
			"fire_stations": 1
		}
	},
	{
		"id": 130,
		"name": "Gerätewagen Betreuung",
		"short_name": "GW-Bt",
		"class": [],
		"class_alias": [],
		"cost": 35000,
		"personal": {
			"min": 3,
			"max": 3
		},
		"building": [12],
		"additional": {
			"qualification": [{"names": ["Betreuungshelfer"], "min": 1, "max": 1}, {"names": ["Verpflegungshelfer"], "min": 2, "max": 2}]
		},
		"prerequisites": {
			"seg": 1
		}
	},
	{
		"id": 131,
		"name": "Betreuungskombi",
		"short_name": "Bt-Kombi",
		"class": [],
		"class_alias": [],
		"cost": 25000,
		"personal": {
			"min": 1,
			"max": 9
		},
		"building": [12],
		"additional": {
			"qualification": [{"names": ["Betreuungshelfer"]}]
		},
		"prerequisites": {
			"seg": 1
		}
	},
	{
		"id": 132,
		"name": "Anhänger Feldkochherd",
		"short_name": "FKH",
		"class": [],
		"class_alias": [],
		"cost": 20000,
		"personal": {
			"min": 0,
			"max": 0
		},
		"building": [12],
		"additional": {
			"trailer": true
		},
		"prerequisites": {
			"seg": 1
		}
	},
	{
		"id": 133,
		"name": "Betreuungs-Lastkraftwagen",
		"short_name": "Bt LKW",
		"class": [],
		"class_alias": [],
		"cost": 15000,
		"personal": {
			"min": 3,
			"max": 3
		},
		"building": [12],
		"additional": {
			"qualification": [{"names": ["Betreuungshelfer"], "min": 1, "max": 1}, {"names": ["Verpflegungshelfer"], "min": 2, "max": 2}]
		},
		"prerequisites": {
			"seg": 1
		}
	},
	{
		"id": 134,
		"name": "Pferdetransporter klein",
		"short_name": "Pferd-k",
	},
	{
		"id": 135,
		"name": "Pferdetransporter groß",
		"short_name": "Pferd-g",
	},
	{
		"id": 136,
		"name": "Anh Pferdetransport",
		"short_name": "Anh Pferd",
	},
	{
		"id": 137,
		"name": "Zugfahrzeug Pferdetransport",
		"short_name": "Zugf. Pferd",
	},
	{
		"id": 138,
		"name": "GW-Verpflegung",
		"short_name": "GW V",
	},
	{
		"id": 139,
		"name": "GW-Küche",
		"short_name": "GW K",
	},
	{
		"id": 140,
		"name": "MTW-Verpflegung",
		"short_name": "MTW-V",
	},
	{
		"id": 141,
		"name": "FKH (FW)",
		"short_name": "FKH (FW)",
	},
	{
		"id": 142,
		"name": "AB-Küche",
		"short_name": "AB-Küche",
	}
]
