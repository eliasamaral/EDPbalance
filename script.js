const codigos = [
  {
    codigo: "10000016",
    descricao: "CALCO CHAVE FACA ACO-CAR 138mm",
  },
  {
    codigo: "10000017",
    descricao: "LAMINA DESLIG 15KV 300A 285mm",
  },
  {
    codigo: "10000017",
    descricao: "LAMINA DESLIG LIGA CO BZ 15KV 300A 285MM",
  },
  {
    codigo: "10000021",
    descricao: "Barra Terra - 19 furos",
  },
  {
    codigo: "10000023",
    descricao: "LÂMPADA VAPOR DE SÓDIO TUBULAR 100 W",
  },
  {
    codigo: "10000107",
    descricao: "CAPACITOR POTÊNCIA 7,96KV 200KVAR 15KV",
  },
  {
    codigo: "10000156",
    descricao: "TRAFO DIS TRI-45KVA-15KV-220/127V - M",
  },
  {
    codigo: "10000158",
    descricao: "TRAFO DIST 3F 300KVA M 15KV 220/127V",
  },
  {
    codigo: "10000160",
    descricao: "TRAFO DIS TRI-150KVA-15KV-220/127V - M",
  },
  {
    codigo: "10000163",
    descricao: "TRAFO DIS TRI-30KVA-15KV-220/127V - M",
  },
  {
    codigo: "10000164",
    descricao: "TRAFO DIS TRI-75KVA-15KV-220/127V - M",
  },
  {
    codigo: "10000168",
    descricao: "TRAFO DIST 3F 15KVA M 15KV 220/127V",
  },
  {
    codigo: "10000195",
    descricao: "CABO COBERTO  AL  XLPE 185,00mm²",
  },
  {
    codigo: "10000204",
    descricao: "CABO COBERTO AL  XLPE 70,00mm²",
  },
  {
    codigo: "10000207",
    descricao: "CABO COBERTO AL 1/0AWG PVC AM 4MM",
  },
  {
    codigo: "10000209",
    descricao: "CABO MULT AL XLPE 8,7/15KV 3X1X 240+120",
  },
  {
    codigo: "10000211",
    descricao: "CABO COL MULT AL  0,60/1KV 3X1X120+70mm²",
  },
  {
    codigo: "10000212",
    descricao: "CABO COL MULT AL  0,60/1KV 3X1X70+70mm²",
  },
  {
    codigo: "10000221",
    descricao: "Cabo - Cu - 3 x 1 x 25 mm - 8,7/15kV - XLPE / EPR",
  },
  {
    codigo: "10000228",
    descricao: "CABO ISOL CU EPR PR 0,75KV 10MM2",
  },
  {
    codigo: "10000230",
    descricao: "CABO - CU - 3 X 1 X 35 mm - 8,7/15KV - XLPE / EPR",
  },
  {
    codigo: "10000234",
    descricao: "CABO ISOL CU  0,6/1KV PVC 1X95,00mm²",
  },
  {
    codigo: "10000248",
    descricao: "CABO ISOL  CU XLPE 4X35mmÝ 0,6/1KV",
  },
  {
    codigo: "10000249",
    descricao: "CABO ISOL CU  0,6/1KV  PVC 1X70,00MM2 ",
  },
  {
    codigo: "10000250",
    descricao: "CABO ISOL CU 0,6/1KV  PVC 3X70mm² PRBRVM",
  },
  {
    codigo: "10000262",
    descricao: "CABO ISOL  CU PVC/A 1X16MM² 0,6/1KV",
  },
  {
    codigo: "10000276",
    descricao: "CABO ISOL CU 0,6/1KV PVC 2X2,50mm² C/COR",
  },
  {
    codigo: "10000280",
    descricao: "CABO COBERTO CU WPP 35MM²PVC 0,8MM 2A",
  },
  {
    codigo: "10000281",
    descricao: "CABO COBERTO CU WPP 50mm²PVC PR 0,8mm 2A",
  },
  {
    codigo: "10000283",
    descricao: "CABO COBERTO CU WPP 120mm² PVC 0,8mm 2A",
  },
  {
    codigo: "10000284",
    descricao: "CABO E POT BT CU PVC/A 1X120mm² 1KV",
  },
  {
    codigo: "10000291",
    descricao: "CABO ISOL 0,6/1 KV COBR 1X240mm XLPE/EPR",
  },
  {
    codigo: "10000330",
    descricao: "CABO ISOL 0,6/1 kV COBR 1x120mm XLPE/EPR",
  },
  {
    codigo: "10000333",
    descricao: "CABO ISOL CU 8,7/15KV 3X1X240mm²EPR/XLPE",
  },
  {
    codigo: "10000339",
    descricao: "CABO MULT AL XLPE 0,60/1KV 2X1X 25mm²",
  },
  {
    codigo: "10000340",
    descricao: "CABO MULT AL  AU SUS XLPE CA 2X25+25MM2",
  },
  {
    codigo: "10000341",
    descricao: "CABO COL MULT AL 0,6/1KV  3x1x25+25mm2",
  },
  {
    codigo: "10000343",
    descricao: "CABO COL MULT AL  0,60/1kV 3X1X10+16mm2",
  },
  {
    codigo: "10000345",
    descricao: "CABO MULT AL XLPE 0,60/1kV 2X1x10+ 10mm2",
  },
  {
    codigo: "10000424",
    descricao: "MANILHA PRÉ-REUNIDO 15 KV",
  },
  {
    codigo: "10000432",
    descricao: "Conector eletr. Parafuso fendido - 35 mm2 - Tipo 1",
  },
  {
    codigo: "10000434",
    descricao: "CONEC PARAF  FEND BZ 2AWGX8-2AWG",
  },
  {
    codigo: "10000436",
    descricao: "CONECTOR CUNHA CN5",
  },
  {
    codigo: "10000441",
    descricao: "CONECTOR CUNHA CN1",
  },
  {
    codigo: "10000442",
    descricao: "CONECTOR CUNHA CN2",
  },
  {
    codigo: "10000476",
    descricao: "CONECTOR CUNHA RAMAL  TIPO VII  MP0708",
  },
  {
    codigo: "10000485",
    descricao: "CONECTOR PERF 25~120X25~120mm²",
  },
  {
    codigo: "10000487",
    descricao: "CONECTOR PERF CABO AL 16-95mm X 6-35mm",
  },
  {
    codigo: "10000533",
    descricao: "LUVA COMPRESSÃO 433mm P/ CABO 1/0 AL CAA",
  },
  {
    codigo: "10000534",
    descricao: "MANILHA   SAPATILHA  DISTRIBUIÇÃO.",
  },
  {
    codigo: "10000545",
    descricao: "Conector Terminal CU - 120 mm2 -  2 furos",
  },
  {
    codigo: "10000550",
    descricao: "CONECTOR GRAMPO BIM DER LINHA VIVA AL",
  },
  {
    codigo: "10000559",
    descricao: "Capuz Termocontratil p/ cabo 35 mm e 70 mm - Tipo A",
  },
  {
    codigo: "10000560",
    descricao: "Capuz Termocontratil p/ cabo 240 mm - Tipo B",
  },
  {
    codigo: "10000582",
    descricao: "Massa para calefetar",
  },
  {
    codigo: "10000586",
    descricao: "ABRAÇADEIRA FLEXÍVEL PRETA 7,8 X 390 mm",
  },
  {
    codigo: "10000595",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 140A',
  },
  {
    codigo: "10000596",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 200A',
  },
  {
    codigo: "10000641",
    descricao: "Braçadeira tipo Unha",
  },
  {
    codigo: "10000665",
    descricao: "Barra de aluminio",
  },
  {
    codigo: "10000689",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2MM 400MM",
  },
  {
    codigo: "10000690",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 450mm",
  },
  {
    codigo: "10000691",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 500mm",
  },
  {
    codigo: "10000692",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 550mm",
  },
  {
    codigo: "10000693",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 600mm",
  },
  {
    codigo: "10000704",
    descricao: 'PARAFUSO SEXT  AÇO CARB BSW 3/8 " X1 "',
  },
  {
    codigo: "10000708",
    descricao: 'PARAFUSO SEXT AÇO CARB BSW 1/2 "X1.3/4 "',
  },
  {
    codigo: "10000717",
    descricao: "PARAFUSO ABAUL  AÇO CARB M16 X  45 mm",
  },
  {
    codigo: "10000718",
    descricao: "PARAFUSO ABAUL  AÇO CARB M16 X  70 mm",
  },
  {
    codigo: "10000719",
    descricao: "PARAFUSO CAB AB ZI 16X150mm M POR Q",
  },
  {
    codigo: "10000723",
    descricao: "PARAFUSO QUAD AÇO CARB M16 X 50 mm",
  },
  {
    codigo: "10000724",
    descricao: "PARAFUSO QUAD AÇO CARB M16 X 125 mm",
  },
  {
    codigo: "10000725",
    descricao: "PARAFUSO CAB Q ZI 16X250mm M POR Q",
  },
  {
    codigo: "10000726",
    descricao: "PARAFUSO CAB Q ZI 16X300mm POR Q RP",
  },
  {
    codigo: "10000727",
    descricao: "PARAFUSO QUAD AÇO CARB M16 X 400 mm",
  },
  {
    codigo: "10000728",
    descricao: "PARAFUSO CAB Q ZI 16X500mm M POR Q",
  },
  {
    codigo: "10000746",
    descricao: "PORCA - OLHAL  M16 X 2-7H",
  },
  {
    codigo: "10000747",
    descricao: "PORCA QUADRADA M16 X 2 - 7H",
  },
  {
    codigo: "10000874",
    descricao: "CONECTOR CUNHA RAMAL TIPO VI",
  },
  {
    codigo: "10000879",
    descricao: "LUVA EMENDA COMP CABO 336,4 MCM AL",
  },
  {
    codigo: "10000880",
    descricao: "Conector Luva compressão Cu 70 mm2 - 100 mm",
  },
  {
    codigo: "10000881",
    descricao: "Conector Luva compressão Cu 120 mm2 - 138 mm",
  },
  {
    codigo: "10000882",
    descricao: "Conector Luva compressão Cu 240 mm2",
  },
  {
    codigo: "10000966",
    descricao: "CHAVE FACA 34,5 KV UNIP 630 A",
  },
  {
    codigo: "10000983",
    descricao: 'Tubo de Aço galvaniz. 3" ',
  },
  {
    codigo: "10000985",
    descricao: "ARRUELA AÇO-CAR QUADRAD(38MM)-FURO(18MM)",
  },
  {
    codigo: "10000987",
    descricao: 'ARRUELA REDON. LISA AÇO CARB 3/8 "X1/16"',
  },
  {
    codigo: "10001240",
    descricao: "CHAVE FACA 15KV  UNIP 630A",
  },
  {
    codigo: "10001247",
    descricao: "ISOLADOR CASTANHA PORC 6500DAN",
  },
  {
    codigo: "10001248",
    descricao: "ISOLADOR CAST PORC MR 0,6KV 90X85X20mm",
  },
  {
    codigo: "10001265",
    descricao: "ISOLADOR ROLDANA 1,3KV POR R 1350-2",
  },
  {
    codigo: "10001266",
    descricao: "PINO P/ISOL 15KV 294MM AC",
  },
  {
    codigo: "10001267",
    descricao: "PINO CURTO DE ISOLADOR",
  },
  {
    codigo: "10001268",
    descricao: "PINO ISOL AÇO CRUZ MAD 35mm 324mm",
  },
  {
    codigo: "10001276",
    descricao: "ALCA PREF DIST CA  336,4 AWG",
  },
  {
    codigo: "10001277",
    descricao: "ALÇA DISTRIB COND AL 3/0AWG 825mm",
  },
  {
    codigo: "10001280",
    descricao: "ALÇA PREF ESTAI ACO 6,4mm AM GDE-1204H",
  },
  {
    codigo: "10001281",
    descricao: "ALCA PREF SERVICO 10 mm",
  },
  {
    codigo: "10001283",
    descricao: "ALÇA DISTRIB COND AL 1/0AWG 1270mm",
  },
  {
    codigo: "10001311",
    descricao: "Conector Terminal CU - 70 mm2 - 1 furo",
  },
  {
    codigo: "10001322",
    descricao: "Conector Terminal CU - 240 mm2 - 2 furos",
  },
  {
    codigo: "10001323",
    descricao: "Taco de fibra - 3 furos",
  },
  {
    codigo: "10001324",
    descricao: "Taco de fibra - 1 furo",
  },
  {
    codigo: "10001331",
    descricao: "CONECTOR TERMINAL COBRE 1 FURO - 35mm",
  },
  {
    codigo: "10001332",
    descricao: "Conector Terminal CU - 120 mm2 - 1 furo",
  },
  {
    codigo: "10001383",
    descricao: "SUPORTE P/ FIX  BF OU PR EM CRUZETA",
  },
  {
    codigo: "10001395",
    descricao: "SUPORTE P/ INST CF NA HORIZONTAL",
  },
  {
    codigo: "10001415",
    descricao: "ARMAÇÃO SECUND POSTE CONCRETO 1 ESTRIBO",
  },
  {
    codigo: "10001416",
    descricao: "ARMAÇÃO SEC AÇO 2 ESTRIBOS 310mm",
  },
  {
    codigo: "10001417",
    descricao: "SELA CRUZETA ACO 94X110mm 30mm",
  },
  {
    codigo: "10001418",
    descricao: "SELA PARA CRUZETA DE AÇO",
  },
  {
    codigo: "10001419",
    descricao: "SUPORTE ESCADA ACO-CAR",
  },
  {
    codigo: "10001428",
    descricao: 'PROTETOR P/ TIRANTE DE 1/4"',
  },
  {
    codigo: "10001429",
    descricao: "GARFO OLHAL P/ SUST PRÉ-REUNIDO 15KV",
  },
  {
    codigo: "10001430",
    descricao: "GARFO DUPLO P/ SUST PRÉ-REUNIDO 15KV",
  },
  {
    codigo: "10001431",
    descricao: "ARMAÇÃO SECUND POSTE MADEIRA 1 ESTRIBO",
  },
  {
    codigo: "10001433",
    descricao: "GRAMPO SUSP P/ CABO PRÉ-REUNIDO 120mm²",
  },
  {
    codigo: "10001439",
    descricao: "HASTE ATERRAMENTO TIPO CILINDRICA 1,50m",
  },
  {
    codigo: "10001443",
    descricao: "MOLDURA LINHA TERRA MAD MEIA CANA",
  },
  {
    codigo: "10001444",
    descricao: "GRAMPO DE SUSP P/ CABO PRÉ-REUNIDO 70mm²",
  },
  {
    codigo: "10001445",
    descricao: "PROLONGADOR OLH-OLH FOFO RD 342,00mm",
  },
  {
    codigo: "10001452",
    descricao: "Protetor de 120 mm",
  },
  {
    codigo: "10001453",
    descricao: "Tampa para ventilação de CT",
  },
  {
    codigo: "10001454",
    descricao: "BASE, TAMPA INT/EXT PARA CT,PI E MP",
  },
  {
    codigo: "10001456",
    descricao: "HASTE ATER AÇO CILIND 14,3X2400mm PADRÃO",
  },
  {
    codigo: "10001460",
    descricao: "Protetor de Borracha p/ cabo de 240 mm",
  },
  {
    codigo: "10001463",
    descricao: "Protetor de Borracha p/ cabo de 120 mm",
  },
  {
    codigo: "10001465",
    descricao: "Protetor de 240 mm",
  },
  {
    codigo: "10001467",
    descricao: "TERMINAL EXTERNO 8,7/15KV P/ CABO 240 mm",
  },
  {
    codigo: "10001468",
    descricao: "Limitador de corrente 240 mm",
  },
  {
    codigo: "10001477",
    descricao: "Protetor para cabo",
  },
  {
    codigo: "10001481",
    descricao: "TERMINAL INT. CABO ISOL. 12/20kV 240mm2",
  },
  {
    codigo: "10001485",
    descricao: "Terminal Externo - Cabo de 35 mm2",
  },
  {
    codigo: "10001487",
    descricao: "MANTA TERMOCONTRÁTIL 120-185 mm2",
  },
  {
    codigo: "10001488",
    descricao: "MANTA TERM XLPE 50- 70X 2,5- 70MM2",
  },
  {
    codigo: "10001491",
    descricao: "Terminal Interno - Cabo de 240 mm2",
  },
  {
    codigo: "10001495",
    descricao: "Suporte para 2 selas",
  },
  {
    codigo: "10001496",
    descricao: "Suporte para 3 selas",
  },
  {
    codigo: "10001497",
    descricao: "Suporte de aluminio",
  },
  {
    codigo: "10001498",
    descricao: "Suporte vertical de 7 furos",
  },
  {
    codigo: "10001502",
    descricao: "Fita Rayon sem adesivo 50 mm - 3 m",
  },
  {
    codigo: "10001507",
    descricao: "BRAÇO LUMINÁRIA BPC (CURTO)",
  },
  {
    codigo: "10001508",
    descricao: "BRAÇO LUMINÁRIA BPN (LONGO)",
  },
  {
    codigo: "10001511",
    descricao: "BRAÇO LUMINÁRIA BPM (MÉDIO)",
  },
  {
    codigo: "10001532",
    descricao: "BASE RELE FOTOELETRICO IP MP-16-21",
  },
  {
    codigo: "10001551",
    descricao: "CALÇO MAD PARA POSTE - 100X90X90 mm",
  },
  {
    codigo: "10001635",
    descricao: "Sela de Porcelana",
  },
  {
    codigo: "10001674",
    descricao: "POSTE CONCRETO CIRCUL 10,5M 300DAN",
  },
  {
    codigo: "10001675",
    descricao: "POSTE CONCRETO CIRCUL 10,5M 600DAN",
  },
  {
    codigo: "10001676",
    descricao: "POSTE CONCRETO CIRCUL 10,5M 1000DAN",
  },
  {
    codigo: "10001677",
    descricao: "POSTE CONCRETO CIRCUL 10,5M 1500DAN",
  },
  {
    codigo: "10001678",
    descricao: "POSTE CONCRETO CIRCUL 10,5M 1800DAN",
  },
  {
    codigo: "10001679",
    descricao: "POSTE CONCRETO CIRCULAR 12,0M 300DAN",
  },
  {
    codigo: "10001680",
    descricao: "POSTE CONCRETO CIRCULAR 12,0M 600DAN",
  },
  {
    codigo: "10001681",
    descricao: "POSTE CONCRETO CIRCULAR 12,0 M 1800 DAN",
  },
  {
    codigo: "10001682",
    descricao: "POSTE CONCRETO CIRCUL 12,0M 1000DAN",
  },
  {
    codigo: "10001683",
    descricao: "POSTE CONCRETO CIRCUL 14,0M 1000DAN",
  },
  {
    codigo: "10001688",
    descricao: "POSTE CONCRETO CIRCULAR 16,0 M 1500 DAN",
  },
  {
    codigo: "10001689",
    descricao: "POSTE CONCRETO CIRCULAR 14,0 M   600 DAN",
  },
  {
    codigo: "10001693",
    descricao: "POSTE CONCRETO CIRCULAR 14,0M 1500DAN",
  },
  {
    codigo: "10001694",
    descricao: "POSTE CONCRETO CIRCULAR 12,0 M 1500 DAN",
  },
  {
    codigo: "10001696",
    descricao: "POSTE CONCRETO CIRCULAR 16,0M 2500DAN",
  },
  {
    codigo: "10001697",
    descricao: "POSTE CONCRETO CIRCULAR 12,0 M 2500 DAN",
  },
  {
    codigo: "10001698",
    descricao: "POSTE CONCRETO CIRCULAR 14,0 M 2500 DAN",
  },
  {
    codigo: "10001699",
    descricao: "POSTE CONCRETO CIRCULAR 20,0 M 2500 DAN",
  },
  {
    codigo: "10001700",
    descricao: "POSTE CONCRETO CIRCULAR 20,0M 1500DAN",
  },
  {
    codigo: "10001704",
    descricao: "POSTE MADEIRA EUC PRES 10M MEDIO",
  },
  {
    codigo: "10001707",
    descricao: "POSTE MADEIRA CIRCUL 12,0M 300DAN",
  },
  {
    codigo: "10001708",
    descricao: "POSTE MADEIRA CIRCUL 12,0M 600DAN",
  },
  {
    codigo: "10001710",
    descricao: "SUPORTE TRANSF ACO POST MADEIRA",
  },
  {
    codigo: "10001721",
    descricao: "MÃO FRANCESA PLANA - TIPO 1",
  },
  {
    codigo: "10001722",
    descricao: "MÃO FRANCESA PLANA - TIPO 2",
  },
  {
    codigo: "10001723",
    descricao: "MÃO FRANCESA PLANA - TIPO 3",
  },
  {
    codigo: "10001724",
    descricao: "MÃO FRANCESA FERRO CHATO TIPO1",
  },
  {
    codigo: "10001725",
    descricao: "MÃO FRANCESA FERRO CANTONEIRA - TIPO 1",
  },
  {
    codigo: "10001726",
    descricao: "MÃO FRANCESA FERRO CANTONEIRA - TIPO 2",
  },
  {
    codigo: "10001727",
    descricao: "MAO FRANCESA PERFIL ACO 38X38X5X1971mm",
  },
  {
    codigo: "10001728",
    descricao: "AFASTADOR AÇO CARB 900mm 500mm",
  },
  {
    codigo: "10001730",
    descricao: "SUPORTE TRANSF ACO POST CON CIR 225mm",
  },
  {
    codigo: "10001731",
    descricao: "SUPORTE TRANSF ACO POST CON CIR 255mm",
  },
  {
    codigo: "10001732",
    descricao: "SUPORTE INSTAL EQUIP TIPO I DIAM 285mm",
  },
  {
    codigo: "10001733",
    descricao: "SUPORTE INSTAL EQUIP TIPO II DIAM 225mm",
  },
  {
    codigo: "10001734",
    descricao: "SUPORTE INSTAL EQUIP TIPO II DIAM 255mm",
  },
  {
    codigo: "10001735",
    descricao: "SUPORTE INSTAL EQUIP TIPO II DIAM 285mm",
  },
  {
    codigo: "10001736",
    descricao: "SUPORTE INSTAL EQUIP TIPO III DIAM 225mm",
  },
  {
    codigo: "10001737",
    descricao: "SUPORTE INSTAL EQUIP TIPO III DIAM 255mm",
  },
  {
    codigo: "10001738",
    descricao: "SUPORTE INSTAL EQUIP TIPO III DIAM285mm",
  },
  {
    codigo: "10001739",
    descricao: "SUPORTE INSTAL EQUIP TIPO IV DIAM 225mm",
  },
  {
    codigo: "10001740",
    descricao: "SUPORTE INSTAL EQUIP TIPO IV DIAM 255mm",
  },
  {
    codigo: "10001741",
    descricao: "SUPORTE INSTAL EQUIP TIPO IV DIAM 285mm",
  },
  {
    codigo: "10001743",
    descricao: "CRUZETA MADEIRA 90x90x2000mm",
  },
  {
    codigo: "10001750",
    descricao: "CRUZETA AÇO 2800 mm MP-02-13",
  },
  {
    codigo: "10001752",
    descricao: "CRUZETA  AÇO 2000 mm",
  },
  {
    codigo: "10001753",
    descricao: "CRUZETA  AÇO 2400 mm",
  },
  {
    codigo: "10001757",
    descricao: "SUPORTE P/ INST BC EM ADAPTADOR",
  },
  {
    codigo: "10001761",
    descricao: "CRUZETA AÇO UNIV P/ CABO PRÉ-REUNIDO",
  },
  {
    codigo: "10001778",
    descricao: "GRAMPO P/ ISOLADOR CASTANHA T-2",
  },
  {
    codigo: "10001792",
    descricao: "LAÇO TOPO COND. AL. 1/0 AWG 750mm",
  },
  {
    codigo: "10001793",
    descricao: "LAÇO TOPO COND. AL. 336,4 MCM 840mm",
  },
  {
    codigo: "10001794",
    descricao: "ESTRIBO P/ REDE DISTRIBUIÇÃO",
  },
  {
    codigo: "10001799",
    descricao: "LUVA COMPRESSAO AL 70mm²",
  },
  {
    codigo: "10001800",
    descricao: "LUVA DE COMP P/ EMEN PRÉ-REUN TIPO 4",
  },
  {
    codigo: "10001816",
    descricao: "BALANCIM CABO PRE-REU 15KV FOFO MP-15-02",
  },
  {
    codigo: "10001827",
    descricao: 'ADAPTADOR "L"  PARA TERMINAL',
  },
  {
    codigo: "10001833",
    descricao: "LAÇO ROLDANA PARA COND. AL. 4 AWG",
  },
  {
    codigo: "10001834",
    descricao: "LAÇO ROLDANA PARA COND. AL. 1/0 AWG",
  },
  {
    codigo: "10001835",
    descricao: "LAÇO ROLDANA PARA COND. AL. 3/0 AWG",
  },
  {
    codigo: "10001836",
    descricao: "LAÇO ROLDANA PARA COND. AL. 336,4 MCM",
  },
  {
    codigo: "10001840",
    descricao: "LAÇO LATERAL DUPLO P/ COND ALUM 1/0 AWG",
  },
  {
    codigo: "10001842",
    descricao: "LAÇO LATERAL DP P/ COND ALUM 336,4 MCM",
  },
  {
    codigo: "10001847",
    descricao: "TAMPA QUAD FERRO FUNDIDO P/CX PASSAGEM",
  },
  {
    codigo: "10001848",
    descricao: "ADAPTADOR BANDEIRA  TIPO 1",
  },
  {
    codigo: "10001859",
    descricao: "Terminal Descon. Cotovelo p/ cabo de 35 mm",
  },
  {
    codigo: "10001860",
    descricao: "TUBO VENTILADOR COM PORTINHOLA",
  },
  {
    codigo: "10001901",
    descricao: "ARGOLA EM AÇO CARBONO P/CT,PI E MP",
  },
  {
    codigo: "10001910",
    descricao: "SAPATILHA CABO ACO 9,5mm 3160DAN",
  },
  {
    codigo: "10001922",
    descricao: "Moto Ventilador",
  },
  {
    codigo: "10001925",
    descricao: "TRAFO DIST SUBT 3F OLEO 500KVA 15KV 220V",
  },
  {
    codigo: "10001926",
    descricao: "ABRAÇADEIRA FLEXIVEL PRETA",
  },
  {
    codigo: "10001938",
    descricao: 'Tubo de Aço galvaniz. 4" ',
  },
  {
    codigo: "10001989",
    descricao: "Conector Luva compressão Al 70 mm2",
  },
  {
    codigo: "10002024",
    descricao: "CABO ISOL CU PVC/A 1X50mm² 0,6/1KV",
  },
  {
    codigo: "10002043",
    descricao: "CABO CONTR CU 4X2,5mm² ENC4 ISOLAC",
  },
  {
    codigo: "10002081",
    descricao: "CONECTOR CUNHA RAMAL TIPO III-IV-V",
  },
  {
    codigo: "10002120",
    descricao: "TRAFO DIST SUBT 3F OLEO 300KVA 15KV 220V",
  },
  {
    codigo: "10002123",
    descricao: "TRAFO DIST SUBT 3F OLEO 1MVA 15KV 400V",
  },
  {
    codigo: "10002374",
    descricao: "SEPARADOR FASE POLIMÉRICO 13,8KV",
  },
  {
    codigo: "10002378",
    descricao: "ANEL DE AMARRAÇÃO P/ ESPAÇ. E SEPARADOR",
  },
  {
    codigo: "10002410",
    descricao: "BRACO TIPO L REDE COMPAC 15KV",
  },
  {
    codigo: "10002411",
    descricao: "BRAÇO TIPO C 13,8KV",
  },
  {
    codigo: "10002412",
    descricao: "CANTONEIRA AUXILIAR PARA BRAÇO TIPO C",
  },
  {
    codigo: "10002421",
    descricao: "BRAÇO ANTI-BALANÇO 13,8KV",
  },
  {
    codigo: "10002422",
    descricao: "ESTRIBO PARA BRAÇO TIPO L",
  },
  {
    codigo: "10002423",
    descricao: "ISOLADOR PINO POLIMÉR 13,8KV",
  },
  {
    codigo: "10002425",
    descricao: "GRAMPO ANCORAGEM POLIM CABO 70 mm²",
  },
  {
    codigo: "10002427",
    descricao: "ISOLADOR BASTÃO POLIMER 15KV MP 06-18",
  },
  {
    codigo: "10002430",
    descricao: "SUPORTE HORIZONTAL 13,8KV",
  },
  {
    codigo: "10002433",
    descricao: "BRACO TIPO L REDE COMPAC 36,2KV",
  },
  {
    codigo: "10002434",
    descricao: "BRAÇO TIPO C 34,5KV",
  },
  {
    codigo: "10002436",
    descricao: "ISOLADOR DE PINO POLIMÉRICO 34,5KV",
  },
  {
    codigo: "10002437",
    descricao: "ESPAÇADOR LOSANGULAR POLIMÉRICO 34,5KV",
  },
  {
    codigo: "10002575",
    descricao: "ANEL DE AMARRAÇÃO PARA ISOLADOR PINO",
  },
  {
    codigo: "10002576",
    descricao: "SUPORTE TIPO Z",
  },
  {
    codigo: "10002577",
    descricao: "SUPORTE AFASTADOR HORIZONTAL 13,8KV",
  },
  {
    codigo: "10002578",
    descricao: "SUPORTE AFASTADOR HORIZONTAL 34,5KV",
  },
  {
    codigo: "10002580",
    descricao: "BRAÇO ANTI-BALANÇO 34,5KV",
  },
  {
    codigo: "10002581",
    descricao: "COBERTURA PROTETORA PARA PARA-RAIOS",
  },
  {
    codigo: "10002582",
    descricao: "LAÇO PREFORMADO PARA MENSAGEIRO",
  },
  {
    codigo: "10002611",
    descricao: "CHAVE FUS RELIG C 15KV 100A 2KA 3 OP",
  },
  {
    codigo: "10002641",
    descricao: "Cabo - Cu - 3 x 1 x 70 mm - 8,7/15kV - XLPE / EPR",
  },
  {
    codigo: "10002642",
    descricao: "CABO POT CU CL2 1X35mmÝ 0,6/1KV PT",
  },
  {
    codigo: "10002643",
    descricao: "CABO ISOL 0,6/1 KV COBR 1X16mm² EPR",
  },
  {
    codigo: "10002644",
    descricao: "Cabo - Cu - 1 x 10 mm - 0,6/1kV - XLPE / EPR",
  },
  {
    codigo: "10002649",
    descricao: "Conector Luva compressão Cu 35 mm2",
  },
  {
    codigo: "10002650",
    descricao: "Terminal Descon. Cotovelo p/ cabo de 70 mm",
  },
  {
    codigo: "10002652",
    descricao: "Terminal Externo - Cabo de 70 mm2",
  },
  {
    codigo: "10002653",
    descricao: "Emenda para cabo de 70 mm2 - 15 kV",
  },
  {
    codigo: "10002654",
    descricao: "Emenda para cabo de 35 mm2 - 15 kV",
  },
  {
    codigo: "10002781",
    descricao: "RELÉ FOTOELETRÔNICO P/ ILUMIN. PÚBLICA",
  },
  {
    codigo: "10002791",
    descricao: "ADAPTADOR BANDEIRA TIPO 2",
  },
  {
    codigo: "10002792",
    descricao: "ADAPTADOR BANDEIRA TIPO 3",
  },
  {
    codigo: "10002851",
    descricao: "CONECTOR CUNHA CN3",
  },
  {
    codigo: "10002854",
    descricao: "CONECTOR CUNHA CN4",
  },
  {
    codigo: "10002857",
    descricao: "CONECTOR CUNHA CN6",
  },
  {
    codigo: "10002860",
    descricao: "CONECTOR CUNHA CN7 (P 1/0-4/0 > D 6-1/0)",
  },
  {
    codigo: "10002993",
    descricao: "CHAVE SECC BY-PASS 15KV 630A-DIR/ESQUER.",
  },
  {
    codigo: "10002994",
    descricao: "CHAVE SECC BY-PASS 15KV 630A-ESQU/DIREIT",
  },
  {
    codigo: "10003042",
    descricao: "CONECTOR CUNHA RAMAL TIPO I",
  },
  {
    codigo: "10003043",
    descricao: "CONECTOR CUNHA RAMAL  II OTM MP-07-25",
  },
  {
    codigo: "10003111",
    descricao: "MANTA REPARO CABO PROTEGIDO 15KV",
  },
  {
    codigo: "10003161",
    descricao: "TRAFO AEREO MONO 7,5 KVA GRUPO G/B 15KV",
  },
  {
    codigo: "10003182",
    descricao: "SUPORTE P/ FIX BF E PR EM CRUZETA",
  },
  {
    codigo: "10003251",
    descricao: "CHAVE TANDEN CASCATA 15KV",
  },
  {
    codigo: "10003292",
    descricao: "MED ELETR 1EL 3F 240V 15A",
  },
  {
    codigo: "10003293",
    descricao: "MED ELETR 2EL 3F 120V 15A",
  },
  {
    codigo: "10003301",
    descricao: "TRAFO DIST PED 3F OLEO 500KVA 15KV 220V",
  },
  {
    codigo: "10003302",
    descricao: "TRAFO DIST PED 3F OLEO 500KVA 15KV 380V",
  },
  {
    codigo: "10003303",
    descricao: "TRANSF DIST PED 3F ÀLEO 300KVA 15KV 220V",
  },
  {
    codigo: "10003304",
    descricao: "TRANSF DIST PED 3F OLEO 150KVA 15KV 220V",
  },
  {
    codigo: "10003305",
    descricao: "Fusivel tipo baioneta - 50 A para Trafo Pedestal de 500 kVA",
  },
  {
    codigo: "10003306",
    descricao: "Fusivel tipo baioneta - 25 A para Trafo Pedestal de 300 kVA",
  },
  {
    codigo: "10003307",
    descricao: "Fusivel tipo baioneta - 12 A para Trafo Pedestal de 150 kVA",
  },
  {
    codigo: "10003311",
    descricao: "ISOLADOR BASTÃO POLIMER 34,5KV MP 06-18",
  },
  {
    codigo: "10003347",
    descricao: "CHAVE SEC 1P FC 15KV 400A 12,5KA 95KV",
  },
  {
    codigo: "10003348",
    descricao: "CHAVE SEC 1P FC 15KV 630A 16KA",
  },
  {
    codigo: "10003351",
    descricao: "CHAVE SEC 3P AV 15KV 200A CAMARA TRANSF",
  },
  {
    codigo: "10003362",
    descricao: "BRAÇO LUMINÁRIA BPD ( DUPLO )",
  },
  {
    codigo: "10003522",
    descricao: "Terminal Descon. Reto p/ cabo de 70 mm",
  },
  {
    codigo: "10003523",
    descricao: "Terminal Descon. Reto p/ cabo de 35 mm",
  },
  {
    codigo: "10003525",
    descricao: "Plugue T - PT2",
  },
  {
    codigo: "10003526",
    descricao: "Plugue T - PT3",
  },
  {
    codigo: "10003527",
    descricao: "Plugue Isolante Blindado - PIB",
  },
  {
    codigo: "10003528",
    descricao: "Plugue para Aterramento - PAT",
  },
  {
    codigo: "10003529",
    descricao: "Receptaculo Blindado Isolante - RIB",
  },
  {
    codigo: "10003530",
    descricao: "Plugue de Inserção Duplo - PID",
  },
  {
    codigo: "10003531",
    descricao: "Modulo Isolante Blindado - MIB",
  },
  {
    codigo: "10003532",
    descricao: "Plugue de Inserção Simples - PIS",
  },
  {
    codigo: "10003853",
    descricao: "CABO COL MULT AL  0,60/1KV 3X1X50+35mm²",
  },
  {
    codigo: "10003941",
    descricao: "RELE PARA  BC - INSTALAÇAO EXTERNA",
  },
  {
    codigo: "10003991",
    descricao: "TRANSF DIST PED 3F OLEO 75KVA 15KV 220V",
  },
  {
    codigo: "10003992",
    descricao: "Fusivel tipo baioneta - 8 A para Trafo Pedestal de 75 kVA",
  },
  {
    codigo: "10003994",
    descricao: "QUADRO DISTRIBUIÇÃO PEDESTAL QDP TIPO 0",
  },
  {
    codigo: "10003995",
    descricao: "QUADRO DISTRIBUIÇÃO PEDESTAL QDP TIPO 1",
  },
  {
    codigo: "10003996",
    descricao: "Chave Seccionadora Vertical para QDP - 160 A",
  },
  {
    codigo: "10003997",
    descricao: "Chave Seccionadora Vertical para QDP - 250 A",
  },
  {
    codigo: "10003998",
    descricao: "Chave Seccionadora Vertical para QDP - 400 A",
  },
  {
    codigo: "10003999",
    descricao: "CABO ISOL 0,6/1 kV ALUM 1x120mm XLPE/EPR",
  },
  {
    codigo: "10004000",
    descricao: "CABO ISOL 0,6/1 KV ALUM 1X70mm XLPE/EPR",
  },
  {
    codigo: "10004001",
    descricao: "CABO ISOL 0,6/1 KV ALUM 1X185mm XLPE/EPR",
  },
  {
    codigo: "10004002",
    descricao: "CABO ISOL 0,6/1KV COBR 1X70mm² EPR",
  },
  {
    codigo: "10004111",
    descricao: "CABO NU AL CA 1/0AWG 7F POPPY",
  },
  {
    codigo: "10004121",
    descricao: "CABO NU AL CAA BITOLA 4AWG -SWAN",
  },
  {
    codigo: "10004122",
    descricao: "CABO NU AL CA 336,4MCM 19F TULIP",
  },
  {
    codigo: "10004123",
    descricao: "CABO NU AL CA BITOLA 4AWG - SUCATA",
  },
  {
    codigo: "10004131",
    descricao: "CABO NU AL CAA 336,4MCM LINNET",
  },
  {
    codigo: "10004141",
    descricao: "CABO NU AL CA BITOLA 3/0AWG - PHLOX",
  },
  {
    codigo: "10004142",
    descricao: "CABO NU AL CAA 1/0AWG 6/1F RAVEN",
  },
  {
    codigo: "10004148",
    descricao: "FIO NU CU MEIO DURA 1X 16,00mm²",
  },
  {
    codigo: "10004244",
    descricao: "CABO E ISO CU PVC BWF 25mm² 750V PR",
  },
  {
    codigo: "10004247",
    descricao: "CABO E COBERTO POLIM CA 50mm² 6F BLOQ",
  },
  {
    codigo: "10004250",
    descricao: "CABO E ISO CU PVC BWF 120mm² 750V PR",
  },
  {
    codigo: "10004253",
    descricao: "CABO E ISO CU PVC BWF 50mm² 750V PR",
  },
  {
    codigo: "10004254",
    descricao: "CABO E ISO CU PVC BWF 70mm² 750V PR",
  },
  {
    codigo: "10004260",
    descricao: "CABO MULT AU SUS AL XLPE CA2X70+70mm²CAL",
  },
  {
    codigo: "10004263",
    descricao: "CABO NU CU 25MM2 7F",
  },
  {
    codigo: "10004266",
    descricao: "CABO E POT BT CU PVC/A 1X35mm² 1KV",
  },
  {
    codigo: "10004267",
    descricao: "CABO E NU CA 2AWG 7F IRIS",
  },
  {
    codigo: "10004268",
    descricao: "CABO E NU CA 4/0AWG 7F OXILIP",
  },
  {
    codigo: "10004269",
    descricao: "CABO E NU CAA 2AWG 6/1F SPARROW",
  },
  {
    codigo: "10004271",
    descricao: "CABO E NU CAA 4/0AWG 6/1F PENGUIN",
  },
  {
    codigo: "10004272",
    descricao: "FIO E ISO AL XLPE 1X10mm² 600V",
  },
  {
    codigo: "10004273",
    descricao: "CABO E POT BT CU PVC/A 1X16mm² 1KV",
  },
  {
    codigo: "10004286",
    descricao: "FIO AMARRACAO NU AL RECOZIDO 4AWG",
  },
  {
    codigo: "10004288",
    descricao: "FITA AMARRACAO AL 1X10mm",
  },
  {
    codigo: "10004297",
    descricao: "CABO E POT BT CU XLPE 1X240MM2 1KV",
  },
  {
    codigo: "10004299",
    descricao: "CABO E POT BT CU XLPE 1X70mm² 1KV",
  },
  {
    codigo: "10004302",
    descricao: "CABO POT CU CL2 2X2,5mm 1KV PT",
  },
  {
    codigo: "10004311",
    descricao: "CABO COL MULT AL  0,60/1KV 3X1X35+35mm²",
  },
  {
    codigo: "10004314",
    descricao: "CABO E NU CAA 3/0AWG 6/1F PIGEON",
  },
  {
    codigo: "10004315",
    descricao: "CABO DE AL NU CAA 556,5 MCM - DOVE",
  },
  {
    codigo: "10004323",
    descricao: "CABO E COBERTO ANTI-FURTO CU XLPE 1X6mm²",
  },
  {
    codigo: "10004324",
    descricao: "CABO E POT BT CU PVC/A 2X1,5mm² 1KV BLIN",
  },
  {
    codigo: "10004332",
    descricao: "CABO E ISO CU PVC BWF 1,5mm² 750V PR",
  },
  {
    codigo: "10004343",
    descricao: "TRANSF DIS 1F 10KVA 7967-254/127V FN BL",
  },
  {
    codigo: "10004344",
    descricao: "TRANSF DIS 1F 15KVA 7967-254/127V FN BL",
  },
  {
    codigo: "10004345",
    descricao: "TRANSF DIS 1F 25KVA 7967-254/127V FN BL",
  },
  {
    codigo: "10004346",
    descricao: "TRANSF DIS 1F 37,5KVA 7967-254/127V BL",
  },
  {
    codigo: "10004347",
    descricao: "TRAFO DIS MONO 5KVA-15KV-254/127V-H SUB",
  },
  {
    codigo: "10004348",
    descricao: "TRAFO DIST 3F 30KVA N 15KV 380/220V",
  },
  {
    codigo: "10004366",
    descricao: "TRAFO DIST 3F 112,5KVA N 15KV 380/220V",
  },
  {
    codigo: "10004368",
    descricao: "TRAFO DIST 3F 45KVA N 15KV 380/220V",
  },
  {
    codigo: "10004369",
    descricao: "TRAFO DIST 3F 75KVA N 15KV 380/220V",
  },
  {
    codigo: "10004370",
    descricao: "TRAFO DIST 3F 225KVA M 15KV 220/127V",
  },
  {
    codigo: "10004382",
    descricao: "TRANSF DIS 3F 112,5KVA 13800-220/127V BL",
  },
  {
    codigo: "10004384",
    descricao: "TRAFO DIST 3F 30KVA P 36,2KV 220/127V",
  },
  {
    codigo: "10004385",
    descricao: "TRAFO DIST 3F 45KVA P 36,2KV 220/127V",
  },
  {
    codigo: "10004389",
    descricao: "TRANSF DIS 1F 10KVA 19919-254/127V FN",
  },
  {
    codigo: "10004390",
    descricao: "TRAFO DIST 1F 15KVA K 36,2KV 254/127V",
  },
  {
    codigo: "10004397",
    descricao: "DISJUNTOR P VOL àLEO 15KV 630A CT 30 A.",
  },
  {
    codigo: "10004398",
    descricao: "CAPACITOR POT MONO 200KVAR 7960V 95KV",
  },
  {
    codigo: "10004400",
    descricao: "CHAVE FUS DIS C 38KV 300A 150KV 5KA",
  },
  {
    codigo: "10004403",
    descricao: "CHAVE FUS RELIG C 25,8KV 100A 125KV 3 OP",
  },
  {
    codigo: "10004407",
    descricao: "ISOLADOR SUSP COMP POLIM 15KV GO 4AL",
  },
  {
    codigo: "10004424",
    descricao: "TUBO EMENDA CONTRATIL 8,7/15KV 185MM2",
  },
  {
    codigo: "10004425",
    descricao: "TUBO EMENDA CONTRATIL 8,7/15KV 50mm²",
  },
  {
    codigo: "10004426",
    descricao: "ISOLADOR PILAR PORCELANA 15KV 110KV",
  },
  {
    codigo: "10004428",
    descricao: 'ISOLADOR PILAR POR 35KV 170KV R3/4"PL-',
  },
  {
    codigo: "10004433",
    descricao: "CINTA POSTE CIRCULAR 180mm ACO",
  },
  {
    codigo: "10004435",
    descricao: "CINTA POSTE CIRCULAR 200mm AÇO",
  },
  {
    codigo: "10004437",
    descricao: "CINTA POSTE CIRCULAR 220mm ACO",
  },
  {
    codigo: "10004439",
    descricao: "CINTA POSTE CIRCULAR B-24 AC 240mm",
  },
  {
    codigo: "10004441",
    descricao: "CINTA POSTE CIRCULAR 260mm ACO",
  },
  {
    codigo: "10004443",
    descricao: "CINTA POSTE CIRCULAR B-28 AC 280mm",
  },
  {
    codigo: "10004445",
    descricao: "CINTA POSTE CIRCULAR 300mm ACO",
  },
  {
    codigo: "10004447",
    descricao: "CINTA POSTE CIRCULAR 320mm ACO",
  },
  {
    codigo: "10004448",
    descricao: "CINTA POSTE CIRCULAR 340mm ACO",
  },
  {
    codigo: "10004449",
    descricao: "CINTA POSTE CIRCULAR 360mm ACO",
  },
  {
    codigo: "10004450",
    descricao: "CINTA POSTE CIRCULAR B-38 AC 380mm",
  },
  {
    codigo: "10004456",
    descricao: "GANCHO OLHAL AÇO 80mm 5000DAN",
  },
  {
    codigo: "10004460",
    descricao: "OLHAL PARAFUSO ACO 16mm 5000DAN F-1425",
  },
  {
    codigo: "10004463",
    descricao: "SUPORTE INSTAL EQUIP TIPO I DIAM 270mm",
  },
  {
    codigo: "10004464",
    descricao: "GRAMPO U CERCA ACO 3,5X30mm",
  },
  {
    codigo: "10004470",
    descricao: "ARMAÇÃO SEC AL 1 ESTRIBO 110MM",
  },
  {
    codigo: "10004471",
    descricao: "CHAPA AÇO ESTAI 5000DAN",
  },
  {
    codigo: "10004477",
    descricao: "HASTE ANCORA ACO 16mm 1600mm 3200DAN",
  },
  {
    codigo: "10004486",
    descricao: "PINO TOPO AÇO 35MM 494MM",
  },
  {
    codigo: "10004492",
    descricao: "SUPORTE CHAVE SEC BY PASS 15KV 400A AÇO",
  },
  {
    codigo: "10004501",
    descricao: "CINTA POSTE CIRCULAR AL 160MM",
  },
  {
    codigo: "10004502",
    descricao: "CINTA POSTE CIRCULAR 400mm ACO",
  },
  {
    codigo: "10004514",
    descricao: "AFASTADOR REDE COMP AC 4 FUR 6MM 500MM",
  },
  {
    codigo: "10004517",
    descricao: "CINTA POSTE CIRCULAR 160mm ACO",
  },
  {
    codigo: "10004520",
    descricao: "PINO ISOL AÇO CRUZ A TRAV 85mm",
  },
  {
    codigo: "10004525",
    descricao: "PINO ISOL AÇO CRUZ A TRAV 169mm",
  },
  {
    codigo: "10004527",
    descricao: "EMENDA PREF CABO AÇO 3X2,25mm PRETO",
  },
  {
    codigo: "10004532",
    descricao: "LAÇO PREF CAB AL LAT CAA 2AWG 60mm",
  },
  {
    codigo: "10004535",
    descricao: "LAÇO PREF CAB AL LAT DP CAA 2AWG 60mm",
  },
  {
    codigo: "10004537",
    descricao: "LAÇO ROLDANA P/CABO AL CAA2AWG CAL35mm²",
  },
  {
    codigo: "10004538",
    descricao: "LAÇO PRÉF TOPO CA CAA 4/0AWG DIAM 60mm",
  },
  {
    codigo: "10004539",
    descricao: "LAÇO PRÉF TOPO CAA 2AWG DIAM 60mm",
  },
  {
    codigo: "10004540",
    descricao: "LAÇO PRÉF TOPO AL CAA 4AWG DIAM 60mm",
  },
  {
    codigo: "10004542",
    descricao: "SECCIONADOR PREF CERC3,25-4,11mm SCM0100",
  },
  {
    codigo: "10004557",
    descricao: "ALCA PREF DIST CAA  336,4 AWG",
  },
  {
    codigo: "10004560",
    descricao: "ALCA PREF SERVICO 50 mm",
  },
  {
    codigo: "10004561",
    descricao: "ALÇA SERVIÇO PREF CA 4AWG 25mm²",
  },
  {
    codigo: "10004564",
    descricao: "ALCA PREF SERVICO 70 mm",
  },
  {
    codigo: "10004574",
    descricao: "LAÇO TOPO DUPLO PREF CAA  2AWG 60mm",
  },
  {
    codigo: "10004575",
    descricao: "LAÇO TOPO DUPLO PREF CA CAA 4/0AWG 60mm",
  },
  {
    codigo: "10004576",
    descricao: "LAÇO TOPO DUPLO PREF CAA 336,4MCM 60mm",
  },
  {
    codigo: "10004577",
    descricao: "LAÇO TOPO DUPLO PREF CAA 4AWG 60mm",
  },
  {
    codigo: "10004579",
    descricao: "ALÇA PREF CABO COBERTO CA 185mm² -15KV",
  },
  {
    codigo: "10004586",
    descricao: "ALÇA PREF DIST CA CAA 1/0AWG",
  },
  {
    codigo: "10004587",
    descricao: "ALCA PREF DIST CA CAA 2AWG",
  },
  {
    codigo: "10004588",
    descricao: "ALÇA PREF DIS CA CAA 4/0AWG VERM DG4547H",
  },
  {
    codigo: "10004590",
    descricao: "ALÇA PREF DIS CABO AÇO 4,87mm PR GDE1158",
  },
  {
    codigo: "10004591",
    descricao: "ALCA ESTAI PREF P/CABO ACO 9,5mm (3/8)",
  },
  {
    codigo: "10004592",
    descricao: "ALCA PREF SERVICO 35 mm",
  },
  {
    codigo: "10004609",
    descricao: "CONECTOR CUNHA CN50",
  },
  {
    codigo: "10004610",
    descricao: "CONECTOR CUNHA CN51",
  },
  {
    codigo: "10004611",
    descricao: "CONECTOR CUNHA CN52",
  },
  {
    codigo: "10004615",
    descricao: "CONECTOR CUNHA CN10",
  },
  {
    codigo: "10004617",
    descricao: "CONECTOR CUNHA CN9",
  },
  {
    codigo: "10004625",
    descricao: "CONECTOR CUNHA RAMAL TIPO VIII",
  },
  {
    codigo: "10004654",
    descricao: "CONECTOR L VIVA CUES 2-1/0 D 16 35mm²",
  },
  {
    codigo: "10004745",
    descricao: "CONECTOR PERF 16~95X1,5~10mm",
  },
  {
    codigo: "10004775",
    descricao: "LUVA EMENDA COMP CA 336,4MCM IT-09",
  },
  {
    codigo: "10004823",
    descricao: "CONECTOR D P FEND CU 10-35 mm² S/ESP",
  },
  {
    codigo: "10005040",
    descricao: "POSTE CONCRETO CIRCULAR 11M 1000DAN",
  },
  {
    codigo: "10005041",
    descricao: "POSTE CONCRETO CIRCULAR 11M 300DAN",
  },
  {
    codigo: "10005042",
    descricao: "POSTE CONCRETO CIRCULAR 11M 600DAN",
  },
  {
    codigo: "10005043",
    descricao: "POSTE CONCRETO CIRCULAR 13M 1000DAN",
  },
  {
    codigo: "10005044",
    descricao: "POSTE CONCRETO CIRCULAR 9M 150DAN",
  },
  {
    codigo: "10005045",
    descricao: "POSTE CONCRETO CIRCULAR 9M 300DAN",
  },
  {
    codigo: "10005046",
    descricao: "POSTE CONCRETO CIRCULAR 9M 600DAN C-19",
  },
  {
    codigo: "10005049",
    descricao: "POSTE CONCRETO DT TIPO B 11M 300DAN",
  },
  {
    codigo: "10005050",
    descricao: "POSTE CONCRETO DT TIPO B 11M 600DAN",
  },
  {
    codigo: "10005051",
    descricao: "POSTE CONCRETO DT TIPO B 12M 300DAN",
  },
  {
    codigo: "10005052",
    descricao: "POSTE CONCRETO DT TIPO B 12M 600DAN",
  },
  {
    codigo: "10005061",
    descricao: "POSTE CONCRETO DT TIPO D 10M 150DAN",
  },
  {
    codigo: "10005062",
    descricao: "POSTE CONCRETO DT TIPO D 7M 100DAN",
  },
  {
    codigo: "10005070",
    descricao: "POSTE CONCRETO DT TIPO D 10,5M 150DAN",
  },
  {
    codigo: "10005075",
    descricao: "POSTE CONCRETO CIRCULAR 11M 1500DAN",
  },
  {
    codigo: "10005076",
    descricao: "POSTE CONCRETO CIRCULAR 15M 1000DAN",
  },
  {
    codigo: "10005077",
    descricao: "POSTE CONCRETO DT TIPO B 7M 300DAN",
  },
  {
    codigo: "10005079",
    descricao: "POSTE PADRAO ENTRADA MR1 10M 300DAN",
  },
  {
    codigo: "10005081",
    descricao: "POSTE CONCRETO CIRCULAR 13M 600DAN",
  },
  {
    codigo: "10005101",
    descricao: "PARAFUSO CAB Q ZI 16X200mm M POR Q",
  },
  {
    codigo: "10005102",
    descricao: "PARAFUSO CAB Q ZI 16X350mm M POR Q",
  },
  {
    codigo: "10005103",
    descricao: "PARAFUSO CAB Q ZI 16X450mm M POR Q",
  },
  {
    codigo: "10005107",
    descricao: "PARAFUSO CAB SE BRONZE M12X50mm AR POR",
  },
  {
    codigo: "10005109",
    descricao: "PORCA QUAD ZI 16mm M CHANFRO",
  },
  {
    codigo: "10005110",
    descricao: "ARRUELA LISA QUAD ZI 50X3MM DI 18MM",
  },
  {
    codigo: "10005113",
    descricao: "PARAFUSO CAB AB ZI 16X50MM POR Q",
  },
  {
    codigo: "10005121",
    descricao: "PARAFUSO CAB AB AL 16X150mm M POR Q",
  },
  {
    codigo: "10005122",
    descricao: "PARAFUSO CAB AB AL 16X45mm M POR Q",
  },
  {
    codigo: "10005123",
    descricao: "PARAFUSO CAB AB AL 16X70mm M POR Q",
  },
  {
    codigo: "10005124",
    descricao: "PARAFUSO CAB Q AL 16X250mm M POR Q",
  },
  {
    codigo: "10005125",
    descricao: "PARAFUSO CAB Q AL 16X300mm M POR Q",
  },
  {
    codigo: "10005127",
    descricao: "PARAFUSO CAB Q AL 16X500mm M POR Q",
  },
  {
    codigo: "10005155",
    descricao: "ARRUELA LISA QUAD ZI 35X4,7MM DI 14MM",
  },
  {
    codigo: "10005166",
    descricao: "CORDOALHA AÇO CARB 6,4mm 7F MR/SM CL.B",
  },
  {
    codigo: "10005168",
    descricao: "CORDOALHA AÇO CARB 9,5mm 7F CL.B MR/SM",
  },
  {
    codigo: "10005181",
    descricao: "FITA ISOL BOR AUTA FUSAO PRETA 19MMX10M",
  },
  {
    codigo: "10005185",
    descricao: "POSTE MADEIRA EUC PRES 11M MEDIO",
  },
  {
    codigo: "10005189",
    descricao: "POSTE MADEIRA EUC PRES 7M MEDIO",
  },
  {
    codigo: "10005200",
    descricao: "CRUZETA MADEIRA PRESERV 90X112,5X5000MM",
  },
  {
    codigo: "10005225",
    descricao: "TRAFO DIS MONO-FF 10KVA-36,2KV-240/120-U",
  },
  {
    codigo: "10005235",
    descricao: "TRANSF DIS 1F 5KVA 34500-230/115V 3D",
  },
  {
    codigo: "10005248",
    descricao: "TRAFO DIST 3F 500KVA M 15KV 220/127V",
  },
  {
    codigo: "10005259",
    descricao: "TRAFO DIST 1F 25KVA K 36,2KV 254/127V",
  },
  {
    codigo: "10005288",
    descricao: "CABO E POT BT CU XLPE 1X95mm² 1KV",
  },
  {
    codigo: "10005317",
    descricao: "PARA RAIOS DIS 12KV 10KA ZNO POLIMERICO",
  },
  {
    codigo: "10005318",
    descricao: "ARMAÇÃO SEC AL 2 ESTRIBOS 310MM",
  },
  {
    codigo: "10005357",
    descricao: "VIGA MET U 800X203,2X50,8X6,35mm REG. T",
  },
  {
    codigo: "10005381",
    descricao: "CABO E ISO CU PVC BWF 35MM2 750V PR",
  },
  {
    codigo: "10005402",
    descricao: "CABO POT CU CL2 1X25mm² 1KV PT",
  },
  {
    codigo: "10005403",
    descricao: "CABO E NU CAA 266,8MCM 26/7F PARTRIDGE",
  },
  {
    codigo: "10005404",
    descricao: "CABO E POT BT CU PVC/A 1X50mm² 1KV",
  },
  {
    codigo: "10005421",
    descricao: "CHAVE FUS RELIG C 36,2KV 100A 150KV 3 OP",
  },
  {
    codigo: "10005442",
    descricao: "CAPACITOR POT MONO 100KVAR 7960V 95KV",
  },
  {
    codigo: "10005482",
    descricao: "CAPACITOR POT MONO 100KVAR 6600V 95KV",
  },
  {
    codigo: "10005494",
    descricao: "POSTE CONCRETO CIRCULAR 18M 2500DAN",
  },
  {
    codigo: "10005533",
    descricao: "PARAFUSO CAB AB AL 16X200mm M POR Q",
  },
  {
    codigo: "10005540",
    descricao: "CINTA POSTE CIRCULAR AL 180mm",
  },
  {
    codigo: "10005545",
    descricao: "CHAPA ACO 100X12,7X610MM P-100-002",
  },
  {
    codigo: "10005549",
    descricao: "PARAFUSO CAB Q AL 16X125mm M POR Q",
  },
  {
    codigo: "10005670",
    descricao: "POSTE DE CONCRETO SEÇÃO CIRC 15/1500 DAN",
  },
  {
    codigo: "10005740",
    descricao: "CHAVE SECCIONADORA MONOPOLAR 34,5 KV",
  },
  {
    codigo: "10005754",
    descricao: "TRAFO DIST 3F 150KVA N 15KV 380/220V",
  },
  {
    codigo: "10005831",
    descricao: "CHAVE SEC 1P FC 25KV 400A 125KV",
  },
  {
    codigo: "10006021",
    descricao: "POSTE CONCRETO CIRCULAR: 13M:1500DAN",
  },
  {
    codigo: "10006034",
    descricao: "ELETRODUTO RIG ACO S/COS 4POL 6M",
  },
  {
    codigo: "10006043",
    descricao: "LUMINÁRIA IP.VS.250W LPS2 - VIDRO",
  },
  {
    codigo: "10006073",
    descricao: "DISJUNTOR P VOL àLEO 15KV 630A / CT 15A.",
  },
  {
    codigo: "10006074",
    descricao: "DISJUNTOR P VOL àLEO 15KV 630A CT 60A.",
  },
  {
    codigo: "10006181",
    descricao: "CABO E COBERTO ANTI-FURTO CU XLPE 10MM2",
  },
  {
    codigo: "10006291",
    descricao: "POSTE AÇO CIRCULAR, ALT 7000mm X 150 DAN",
  },
  {
    codigo: "10006301",
    descricao: "ISOLADOR PINO POR 25KV R35",
  },
  {
    codigo: "10006351",
    descricao: "POSTE CON CIRC C-29 16M 2000DAN",
  },
  {
    codigo: "10006352",
    descricao: "POSTE DE CONCRETO SEÇÃO CIRC 18/1000 DAN",
  },
  {
    codigo: "10006371",
    descricao: "CAIXA DE INTERLIGAÇÃO PARA BC AUTOMÁTICO",
  },
  {
    codigo: "10006415",
    descricao: "CAIXA DE COMANDO BC",
  },
  {
    codigo: "10006422",
    descricao: "POSTE CONCRETO CIRCUL 18,0M 2000DAN",
  },
  {
    codigo: "10006452",
    descricao: "CONECTOR CUNHA CN17",
  },
  {
    codigo: "10006463",
    descricao: "POSTE CON CIRC 22M 2500DAN",
  },
  {
    codigo: "10006591",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-0",
  },
  {
    codigo: "10006592",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-1",
  },
  {
    codigo: "10006593",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-2",
  },
  {
    codigo: "10006594",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-3",
  },
  {
    codigo: "10006595",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-4",
  },
  {
    codigo: "10006596",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-5",
  },
  {
    codigo: "10006597",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-6",
  },
  {
    codigo: "10006598",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-7",
  },
  {
    codigo: "10006599",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-8",
  },
  {
    codigo: "10006600",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-A",
  },
  {
    codigo: "10006601",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-B",
  },
  {
    codigo: "10006602",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-C",
  },
  {
    codigo: "10006603",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-D",
  },
  {
    codigo: "10006604",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-E",
  },
  {
    codigo: "10006605",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-F",
  },
  {
    codigo: "10006606",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-G",
  },
  {
    codigo: "10006607",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-H",
  },
  {
    codigo: "10006608",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-I",
  },
  {
    codigo: "10006609",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-J",
  },
  {
    codigo: "10006610",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-K",
  },
  {
    codigo: "10006611",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-L",
  },
  {
    codigo: "10006612",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-M",
  },
  {
    codigo: "10006613",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-N",
  },
  {
    codigo: "10006614",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-P",
  },
  {
    codigo: "10006615",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-Q",
  },
  {
    codigo: "10006616",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-R",
  },
  {
    codigo: "10006617",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-S",
  },
  {
    codigo: "10006618",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-T",
  },
  {
    codigo: "10006619",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-U",
  },
  {
    codigo: "10006620",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-V",
  },
  {
    codigo: "10006621",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-W",
  },
  {
    codigo: "10006622",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-X",
  },
  {
    codigo: "10006623",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-Y",
  },
  {
    codigo: "10006651",
    descricao: "CONECTOR TERMINAL AL 2 FUROS-240mm²",
  },
  {
    codigo: "10006652",
    descricao: "CONECTOR LUVA COMPRESSÃO ALUMINIO-240mm²",
  },
  {
    codigo: "10006661",
    descricao: "CABO ISOL CU 8,7/15KV 1X240mm² EPR/XLPE",
  },
  {
    codigo: "10006692",
    descricao: "SUPORTE P/ NUMEROS REFLETIVOS 440X95X4",
  },
  {
    codigo: "10006773",
    descricao: "SUPORTE NUMERO REFLETIVO 230x110x4mm",
  },
  {
    codigo: "10006781",
    descricao: "REGULADOR TENSAO MONO 13800V 200A",
  },
  {
    codigo: "10006794",
    descricao: "FECHO PARA FITA DE AÇO",
  },
  {
    codigo: "10006825",
    descricao: "CONECTOR TERM ESTRANGUL TIPO 7 2FUROS",
  },
  {
    codigo: "10006872",
    descricao: "PELÍCULA ALFANUM. ADESIVA IDENT-Z",
  },
  {
    codigo: "10006884",
    descricao: "FITA AÇO PARA SUPORTE DE ADESIVO",
  },
  {
    codigo: "10006953",
    descricao: "CONECTOR TERM TIPO ESTRANGUL 1/0-2/0AWG",
  },
  {
    codigo: "10006954",
    descricao: "CONECTOR TERM TIPO ESTRANGUL 3/0-4/0AWG",
  },
  {
    codigo: "10007063",
    descricao: "CONECTOR TERM ESTRANGUL TIPO 3 1FURO",
  },
  {
    codigo: "10007172",
    descricao: "LUMINÁRIA IP VS 100W LPS00 VIDRO PLANO",
  },
  {
    codigo: "10007173",
    descricao: "LUMINÁRIA IP VS 150W LPS1 VIDRO PLANO",
  },
  {
    codigo: "10007252",
    descricao: "TRAFO DIS MONO 1,5 KVA -15KV- CAP / REL",
  },
  {
    codigo: "10007253",
    descricao: "TRAFO DIST 1F 5KVA G 15KV 240/120V",
  },
  {
    codigo: "10007255",
    descricao: "TRAFO DIST 1F 15KVA G 15KV 240/120V",
  },
  {
    codigo: "10007256",
    descricao: "TRAFO DIST 1F 25KVA G 15KV 240/120V",
  },
  {
    codigo: "10007257",
    descricao: "TRAFO DIST 1F 10KVA G 15KV 240/120V",
  },
  {
    codigo: "10007258",
    descricao: "TRAFO DIST 1F 37,5KVA G 15KV 240/120V",
  },
  {
    codigo: "10007259",
    descricao: "TRAFO DIST 1F 50KVA G 15KV 240/120V",
  },
  {
    codigo: "10007260",
    descricao: "TRAFO DIST 1F 100KVA G 15KV 240/120V",
  },
  {
    codigo: "10007281",
    descricao: "CONTROLE SENSOR BCºCAPAC COR/kVAR/TENSÃO",
  },
  {
    codigo: "10007401",
    descricao: "POSTE CONCRETO. SEÇÃO CIRCULAR.20/2000 ",
  },
  {
    codigo: "10007415",
    descricao: "CINTA POSTE CIRCULAR B-42 AC 420mm",
  },
  {
    codigo: "10007416",
    descricao: "CINTA POSTE CIRCULAR B-44 AC 440mm",
  },
  {
    codigo: "10007417",
    descricao: "CINTA POSTE CIRCULAR 460mm",
  },
  {
    codigo: "10007418",
    descricao: "CINTA POSTE CIRCULAR B-48 AC 480mm",
  },
  {
    codigo: "10007481",
    descricao: "ISOLADOR PILAR HÍBRIDO 15KV C/PINO 190mm",
  },
  {
    codigo: "10007541",
    descricao: "POSTE CONCRETO S/CIRCULAR 18M 1500DAN",
  },
  {
    codigo: "10007901",
    descricao: "POSTE CONCRETO CIRCULAR 15M 2000DAN",
  },
  {
    codigo: "10008001",
    descricao: "CONECTOR TERM ESTRANGUL TIPO 6 2FUROS225",
  },
  {
    codigo: "10008281",
    descricao: "ALÇA PREF CABO COBERTO CA 300mm² -34,5KV",
  },
  {
    codigo: "10008285",
    descricao: "CONECTOR TERM ESTRANGUL TIPO 8 2FUROS",
  },
  {
    codigo: "10008289",
    descricao: "CABO COBERTO  AL  XLPE 300,00mm² 38KV",
  },
  {
    codigo: "10008290",
    descricao: "CHAVE SECC BY-PASS 35KV 630A DIR/ESQ",
  },
  {
    codigo: "10008312",
    descricao: "CHAVE SECC BY-PASS 35KV 630A ESQ/DIR",
  },
  {
    codigo: "10008314",
    descricao: "SUPORTE INSTAL EQUIP TIPO III DIAM 320mm",
  },
  {
    codigo: "10008320",
    descricao: "PARA RAIOS DIS 34,KV 10KA ZNO POLIMERICO",
  },
  {
    codigo: "10008331",
    descricao: "SUPORTE INSTAL EQUIP TIPO II DIAM 320mm",
  },
  {
    codigo: "10008332",
    descricao: "SUPORTE INSTAL EQUIP TIPO IV DIAM 320mm",
  },
  {
    codigo: "10008333",
    descricao: "CHAVE FUSÍVEL POLIMER DISTRIB 15KV",
  },
  {
    codigo: "10008371",
    descricao: "RELIGADOR AUT 3F 34,5KV/560A 10KA-POSTE",
  },
  {
    codigo: "10008441",
    descricao: "TAMPA RET CX PASS DT.PN.01.42.0005 EDP",
  },
  {
    codigo: "10008461",
    descricao: "DISJUNTOR TRIP AUT 15KV 630A CT",
  },
  {
    codigo: "10008531",
    descricao: "LUVA EMENDA COMP CABO 300mm² AL",
  },
  {
    codigo: "10008604",
    descricao: "TERMINAL TUB TIPO 2 CABO 6AWG 16mm² AZ",
  },
  {
    codigo: "10008605",
    descricao: "TERMINAL TUB TIPO 3 CABO 4AWG 25mm² AM",
  },
  {
    codigo: "10008606",
    descricao: "TERMINAL TUB TIPO 4 CABO 2AWG 35mm² VM",
  },
  {
    codigo: "10008633",
    descricao: "CABO ISOL 0,6/1 KV ALUM 1X50mm XLPE/EPR",
  },
  {
    codigo: "10008643",
    descricao: "TRAFO DIST 3F 75KVA AP 15KV 220/127V",
  },
  {
    codigo: "10008644",
    descricao: "TRAFO DIST 3F 112,5KVA AP 15KV 220/127V",
  },
  {
    codigo: "10008645",
    descricao: "TRAFO DIST 3F 150KVA AP 15KV 220/127V",
  },
  {
    codigo: "10008731",
    descricao: "CABO ISOL AL 8,7/15KV 3X1X70mmÝ EPR/XLPE",
  },
  {
    codigo: "10008732",
    descricao: "CABO ISOL AL 8,7/15KV 3X1X35mm² EPR/XLPE",
  },
  {
    codigo: "10008791",
    descricao: "PARAFUSO DE CABEÇA ABAULADA - M16X100 mm",
  },
  {
    codigo: "10008811",
    descricao: "PINO ISOL AÇO CARB 34,5KV M16X35X240mm",
  },
  {
    codigo: "10008828",
    descricao: "ISOLADOR PILAR POLIMÉCO 15KV 1000DAN",
  },
  {
    codigo: "10008869",
    descricao: "CRUZETA FIB VIDRO 90X90mm 2000mm",
  },
  {
    codigo: "10008951",
    descricao: "SUPORTE INSTAL EQUIP TIPO III DIAM 360mm",
  },
  {
    codigo: "10008970",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 750mm",
  },
  {
    codigo: "10008972",
    descricao: "TRANSF TRIF 75KVA 15KV 220/127V SECO",
  },
  {
    codigo: "10008974",
    descricao: "TRANSF DIS TRI 150KVA 15KV 220/127V SECO",
  },
  {
    codigo: "10008975",
    descricao: "TRANSF DIS TRI 150KVA 15KV 380/220V SECO",
  },
  {
    codigo: "10008976",
    descricao: "TRANSF DIS TRI 300KVA 15KV 220/127V SECO",
  },
  {
    codigo: "10008977",
    descricao: "TRANSF DIS TRI 300KVA 15KV 380/220V SECO",
  },
  {
    codigo: "10008978",
    descricao: "TRANSF DIS TRI 500KVA 15KV 220/127V SECO",
  },
  {
    codigo: "10008979",
    descricao: "TRANSF DIS TRI 500KVA 15KV 380/220V SECO",
  },
  {
    codigo: "10008980",
    descricao: "TRANSF DIS TRI 750KVA 15KV 220/127V SECO",
  },
  {
    codigo: "10009002",
    descricao: "TRANSF DIS TRI1000KVA 15KV 220/127V SECO",
  },
  {
    codigo: "10009122",
    descricao: "CONEC PERF RAMAL CLI TP2 16-6/16-6",
  },
  {
    codigo: "10009124",
    descricao: "CONEC PERF RAMAL CLI TP4 35-10/35-25",
  },
  {
    codigo: "10009125",
    descricao: "CONECTOR PERF TP 5A CABO CL 4-5",
  },
  {
    codigo: "10009126",
    descricao: " CONEC PERF RAMAL CLI TP6 70-50/70-50",
  },
  {
    codigo: "10009131",
    descricao: "CONEC PERF RAMAL CLI TP9 120-95/120-95",
  },
  {
    codigo: "10009192",
    descricao: "LUMINARIA LED 92W 70000H DIôM 50a70mm",
  },
  {
    codigo: "10009233",
    descricao: "CONTROLE ACIONAMENTO AUTO MONO 127VCA",
  },
  {
    codigo: "10009646",
    descricao: "CABO PROTEGIDO AL 34,5KV XLPE CZ 185mm²",
  },
  {
    codigo: "10009647",
    descricao: "ALÇA PREF CABO COBERTO CA 185mm² -35KV",
  },
  {
    codigo: "10009672",
    descricao: "CABO MX AL XLPE 0,6/1KV 2X1X10+ 10MM2 NI",
  },
  {
    codigo: "10009674",
    descricao: "CABO MX AL XLPE 0,6/1KV 2X1X16+16mm² NI",
  },
  {
    codigo: "10009724",
    descricao: "CABO ISOL CU 8,7/15KV 1X1X35mm² EPR/XLPE",
  },
  {
    codigo: "10009772",
    descricao: "POSTE FIBRA CIRCULAR 11M 600DAN",
  },
  {
    codigo: "10009774",
    descricao: "POSTE FIBRA CIRCULAR 11M 600DAN SECCION",
  },
  {
    codigo: "10009775",
    descricao: "POSTE FIBRA CIRCULAR 11M 300DAN",
  },
  {
    codigo: "10009776",
    descricao: "POSTE FIBRA CIRCULAR 11M 300DAN SECCION",
  },
  {
    codigo: "10009777",
    descricao: "POSTE FIBRA CIRCULAR 12M 300DAN",
  },
  {
    codigo: "10009778",
    descricao: "POSTE FIBRA CIRCULAR 12M 300DAN SECCION",
  },
  {
    codigo: "10009779",
    descricao: "POSTE FIBRA CIRCULAR 12M 600DAN",
  },
  {
    codigo: "10009780",
    descricao: "POSTE FIBRA CIRCULAR 12M 600DAN SECCION",
  },
  {
    codigo: "10009832",
    descricao: "POSTE FIBRA CIRCULAR 12M  1000DAN",
  },
  {
    codigo: "10009833",
    descricao: "POSTE FIBRA CIRCULAR 12M  1000DAN SECC",
  },
  {
    codigo: "10009862",
    descricao: "SUPORTE AÇO PARA-RAIOS TRANSF DISTRIB",
  },
  {
    codigo: "10009902",
    descricao: "CABO COB ANTI-FURTO AL XLPE  1X16 +16mm²",
  },
  {
    codigo: "10009947",
    descricao: "SUPORTE CONCENTRADOR SEC SMC",
  },
  {
    codigo: "10009947",
    descricao: "SUPORTE CONCENTRADOR SEC SMC",
  },
  {
    codigo: "10009994",
    descricao: "SECCIONALIZADOR ELETRON FUS C 15KV 200A",
  },
  {
    codigo: "10009995",
    descricao: "TRANSF DIS TRI500KVA 36,2KV-220/127V SEC",
  },
  {
    codigo: "10010045",
    descricao: "PARAFUSO CAB SE ZI 10X25mm M T 2AR POR",
  },
  {
    codigo: "10010091",
    descricao: "PARAFUSO QUAD ACO CARB M16 X 1000 mm",
  },
  {
    codigo: "10010109",
    descricao: "ESPAÇADOR LOSAN POLI AUTOTRAVANTE 13,8KV",
  },
  {
    codigo: "10010114",
    descricao: "GANCHO SUSTENT POLIM#RICO REDE BTZERO",
  },
  {
    codigo: "10010137",
    descricao: "TRAFO DIS TRI-225KVA-15KV-380/220V - N",
  },
  {
    codigo: "10010171",
    descricao: "CABO MULT AL XLPE 20/35 KV 3X1X185+120",
  },
  {
    codigo: "10010173",
    descricao: "TERMINAL EXT CABO ISOL 20/35KV 185mm²",
  },
  {
    codigo: "10010174",
    descricao: "CONECTOR TERMINAL AL 2 FUROS-185mm²",
  },
  {
    codigo: "10010175",
    descricao: "CONECTOR LUVA COMPRESSÃO ALUMINIO-185mm²",
  },
  {
    codigo: "10010244",
    descricao: "CABO MX AL XLPE 0,6/1KV 2X1X25+25mm² NI",
  },
  {
    codigo: "10010245",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X10+16MM2 NI",
  },
  {
    codigo: "10010246",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X25+25mm² NI",
  },
  {
    codigo: "10010301",
    descricao: "ANILHA PVC NUMERO ZERO 9A12,6MM",
  },
  {
    codigo: "10010302",
    descricao: "ANILHA PVC NUMERO UM 9A12,6MM",
  },
  {
    codigo: "10010303",
    descricao: "ANILHA PVC NUMERO DOIS 9A12,6MM",
  },
  {
    codigo: "10010304",
    descricao: "ANILHA PVC NUMERO TRES 9A12,6MM",
  },
  {
    codigo: "10010305",
    descricao: "ANILHA PVC NUMERO QUATRO 9A12,6MM",
  },
  {
    codigo: "10010306",
    descricao: "ANILHA PVC NUMERO CINCO 9A12,6MM",
  },
  {
    codigo: "10010307",
    descricao: "ANILHA PVC NUMERO 6 9A12,6MM",
  },
  {
    codigo: "10010308",
    descricao: "ANILHA PVC NUMERO SETE 9A12,6MM",
  },
  {
    codigo: "10010309",
    descricao: "ANILHA PVC NUMERO OITO 9A12,6MM",
  },
  {
    codigo: "10010310",
    descricao: "ANILHA PVC NUMERO NOVE 9A12,6MM",
  },
  {
    codigo: "10010332",
    descricao: "CRUZETA FIB VIDRO 90X90mm 2400mm",
  },
  {
    codigo: "10010333",
    descricao: "CRUZETA FIB VIDRO 90X112,5mm 2800mm",
  },
  {
    codigo: "10010334",
    descricao: "CRUZETA FIB VIDRO 90X90MM 3920MM",
  },
  {
    codigo: "10010361",
    descricao: "SUPORTE TOPO ISOLADOR PILAR",
  },
  {
    codigo: "10010421",
    descricao: "ANEL AMARRACAO ISOL PINO 34,5KV",
  },
  {
    codigo: "10010576",
    descricao: "CINTA POSTE CIRCULAR H-9 AC 290mm",
  },
  {
    codigo: "10010664",
    descricao: "TRAFO DIST SECO 3F 750KVA 36,2KV 220V",
  },
  {
    codigo: "10010673",
    descricao: "CABO ACO ALUMINIZADO 3X5AWG 40% IACS",
  },
  {
    codigo: "10010676",
    descricao: "CABO ACO ALUMINIZADO 3X6AWG 20% IACS",
  },
  {
    codigo: "10010680",
    descricao: "TRAFO DIST SECO 3F 112,5KVA 15KV 220V",
  },
  {
    codigo: "10010712",
    descricao: "TRAFO TRI 15 KV-225 KVA 220/127V A SECO",
  },
  {
    codigo: "10010718",
    descricao: "CONECTOR CUNHA ATERR CORDOALHA 25-50mm²",
  },
  {
    codigo: "10010719",
    descricao: "HASTE ATERRAMENTO COBREADA RABICHO 2,40M",
  },
  {
    codigo: "10010733",
    descricao: "CABO COBERTO CU 15KV XLPE CZ 16mm²",
  },
  {
    codigo: "10010771",
    descricao: "CABO ACO COBREADO 7X2,91 mmÝ 30% IACS",
  },
  {
    codigo: "10010774",
    descricao: "CABO POT CU CL2 1X240MM² 0,6/1KV AZ",
  },
  {
    codigo: "10010784",
    descricao: "CABO POT 0,6/1KV COBR 1X35mm² XLPE (AZ)",
  },
  {
    codigo: "10010785",
    descricao: "CABO POT CU CL2 1X70MM² 0,6/1KV AZ",
  },
  {
    codigo: "10010786",
    descricao: "CABO POT 0,6/1KV COBR 1X120mm² XLPE (AZ)",
  },
  {
    codigo: "10010787",
    descricao: "CABO POT AL CL2 1X185MM² 0,6/1KV AZ",
  },
  {
    codigo: "10010788",
    descricao: "CABO POT AL CL2 1X120MM² 0,6/1KV AZ",
  },
  {
    codigo: "10010789",
    descricao: "CABO POT AL CL2 1X70MM² 0,6/1KV AZ",
  },
  {
    codigo: "10011013",
    descricao: "RELIGADOR AUT 3F 34,5KV 560A 10KA-POSTE",
  },
  {
    codigo: "10011049",
    descricao: "INDICADOR FALTA REDE ATE 35KV - LOCAL",
  },
  {
    codigo: "10011050",
    descricao: "INDICADOR FALTA REDE ATE 35KV LOCAL",
  },
  {
    codigo: "10011091",
    descricao: "CORDOALHA AÇO CARB 4,87mm 3 F CL.A",
  },
  {
    codigo: "10011092",
    descricao: "duto corrugado espiralado - 30mm",
  },
  {
    codigo: "10011093",
    descricao: "duto corrugado espiralado - 50 mm",
  },
  {
    codigo: "10011094",
    descricao: "duto corrugado espiralado - 75 mm",
  },
  {
    codigo: "10011095",
    descricao: "duto corrugado espiralado - 100mm",
  },
  {
    codigo: "10011096",
    descricao: "duto corrugado espiralado - 125 mm",
  },
  {
    codigo: "10011097",
    descricao: "duto corrugado espiralado - 150 mm",
  },
  {
    codigo: "10011192",
    descricao: "CONECTOR CUNHA CN4 PROT CORROS GALVÂNICA",
  },
  {
    codigo: "10011193",
    descricao: "CONECTOR CUNHA CN6 PROT CORROS GALVÂNICA",
  },
  {
    codigo: "10011194",
    descricao: "CONECTOR CUNHA CN7 PROT CORROS GALVÂNICA",
  },
  {
    codigo: "10011195",
    descricao: "CONECTOR CUNHA CN9 PROT CORROS GALVÂNICA",
  },
  {
    codigo: "10011196",
    descricao: "CONECTOR CUNHA CN50 PROT CORR GALVÂNICA",
  },
  {
    codigo: "10011197",
    descricao: "CONECTOR CUNHA CN51 PROT CORR GALVÂNICA",
  },
  {
    codigo: "10011198",
    descricao: "CONECTOR CUNHA CN53 PROT CORR GALVÂNICA",
  },
  {
    codigo: "10011213",
    descricao: "SUPORTE FIXACAO EXTENS CONS SEC SMC AC 1",
  },
  {
    codigo: "10011241",
    descricao: "BLINDAGEM COMPLETA SEC TRAFO DIST TRI",
  },
  {
    codigo: "10011255",
    descricao: "CABO MX AL XLPE 0,6/1KV 1X1X16+16mm² NI",
  },
  {
    codigo: "10011256",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X16+16mm² NI",
  },
  {
    codigo: "10011257",
    descricao: "CABO MX AL XLPE 0,6/1KV 2X1X35+35mm² NI",
  },
  {
    codigo: "10011258",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X35+35mm² NI",
  },
  {
    codigo: "10011259",
    descricao: "CABO MX AL XLPE 0,6/1KV 2X1X70+70mm² NI",
  },
  {
    codigo: "10011260",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X70+70mm² NI",
  },
  {
    codigo: "10011271",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X120+70mm² NI",
  },
  {
    codigo: "10011355",
    descricao: "TUBO FLEX AC 1020 2POL 2M BTZERO",
  },
  {
    codigo: "10011417",
    descricao: "CONECTOR PARA CABO DE 185 mm²",
  },
  {
    codigo: "10011418",
    descricao: "CONECTOR PARA CABO DE 50 mm² E 70 mm²",
  },
  {
    codigo: "10011419",
    descricao: "CONECTOR PERFURANTE 4 SAIDAS RELIGAVEL",
  },
  {
    codigo: "10011441",
    descricao: "TRANSF DIST PED 3F OLEO 750KVA 15KV 220V",
  },
  {
    codigo: "10011442",
    descricao: "TRANSF DIST. PED 3F VERD 45KVA 15KV 220V",
  },
  {
    codigo: "10011468",
    descricao: "TRAFO VERD 3F-112,5/150KVA-15KV-220/127V",
  },
  {
    codigo: "10011469",
    descricao: "TRAFO VERD 3F-150/225KVA-15KV-220/127V",
  },
  {
    codigo: "10011470",
    descricao: "TRAFO VERD 3F-225/300KVA-15KV-220/127V",
  },
  {
    codigo: "10011481",
    descricao: "CANTONEIRA AUXILIAR RDC",
  },
  {
    codigo: "10011491",
    descricao: "CANTONEIRA RETA RDC",
  },
  {
    codigo: "10011551",
    descricao: "TRAFO VERD 3F-15/30KVA-15KV-220/127V",
  },
  {
    codigo: "10011552",
    descricao: "TRAFO VERD 3F-30/45KVA-15KV-220/127V",
  },
  {
    codigo: "10011553",
    descricao: "TRAFO VERD 3F-45/75KVA-15KV-220/127V",
  },
  {
    codigo: "10011554",
    descricao: "TRAFO VERD 3F-75/112,5KVA-15KV-220/127V",
  },
  {
    codigo: "10011631",
    descricao: "CABO MX AL XLPE 8,7/15KV 3X1X70+70MM2",
  },
  {
    codigo: "10011827",
    descricao: "POSTE FIBRA CIRCULAR 9M 300DAN",
  },
  {
    codigo: "10011828",
    descricao: "POSTE FIBRA CIRCULAR 9M 600DAN",
  },
  {
    codigo: "10011829",
    descricao: "POSTE FIBRA CIRCULAR 9M 300DAN SECCION",
  },
  {
    codigo: "10011830",
    descricao: "POSTE FIBRA CIRCULAR 9M 600DAN SECCION",
  },
  {
    codigo: "10011833",
    descricao: "CABO COB ANTI-FURTO AL XLPE 1x25+25MM²",
  },
  {
    codigo: "10011835",
    descricao: "CABO ARMADO Al XLPE 3X70 + 70 mm2 Tetra",
  },
  {
    codigo: "10011858",
    descricao: "CONCENTRADOR SECUNDÁRIO SLOT-SMC",
  },
  {
    codigo: "10011859",
    descricao: "CABO MULT AL XLPE 20/35KV 3X1X300+120",
  },
  {
    codigo: "10011861",
    descricao: "TRAFO DIST 1F 1,5KVA BCO CAP 36,2KV 127V",
  },
  {
    codigo: "10011959",
    descricao: "CABO ARMADO Al XLPE 3x35 + 35mm² Tetra",
  },
  {
    codigo: "10011960",
    descricao: "CABO ARMADO Al XLPE 3x50 + 50mm² Tetra",
  },
  {
    codigo: "10012161",
    descricao: "CHAVE FUSIVEL RELIG POL C 15KV 100A 2KA",
  },
  {
    codigo: "10012212",
    descricao: "CABO ISOL CU 36,2KV 3X1X240MM2 XLPE",
  },
  {
    codigo: "10012222",
    descricao: "CONCENTR SEC ENERG 3F RF",
  },
  {
    codigo: "10012272",
    descricao: "CABO CU NU 1/0 AWG",
  },
  {
    codigo: "10012281",
    descricao: "CABO ISOL 0,6/1 KV ALUM 1X185mm XLPE",
  },
  {
    codigo: "10012282",
    descricao: "CABO E POT BT CU XLPE 1X240mm² 1KV",
  },
  {
    codigo: "10012284",
    descricao: "CABO ISOL 0,6/1 KV COBR 1X120mm XLPE",
  },
  {
    codigo: "10012285",
    descricao: "CONECTOR GLV TORQ P 10-150 mm² D ESTRIBO",
  },
  {
    codigo: "10012421",
    descricao: "CABO POT AL CL2 1X120mm² 0,6/1KV PT XLPE",
  },
  {
    codigo: "10012538",
    descricao: "CABO POT  COBR 1X10mm² 0,6/1KV XLPE",
  },
  {
    codigo: "10012588",
    descricao: "POSTE FIBRA CIRCULAR 10M 300DAN 2P BECO",
  },
  {
    codigo: "10012602",
    descricao: "CABO OPDC 53mm² 1/0AWG ACO ALUMINIZADO",
  },
  {
    codigo: "10012854",
    descricao: "TRAFO 1F 1,5KVA BCO 7,96KV 127V OVI",
  },
  {
    codigo: "10012855",
    descricao: "TRAFO 1F 1,5KVA BCO 20,3KV 127V OVI",
  },
  {
    codigo: "10012856",
    descricao: "TRAFO 1F 5KVA G 7,96KV 240/120V OVI",
  },
  {
    codigo: "10012857",
    descricao: "TRAFO 1F 10KVA G 7,96KV 240/120V OVI",
  },
  {
    codigo: "10012858",
    descricao: "TRAFO 1F 15KVA G 7,96KV 240/120V OVI",
  },
  {
    codigo: "10012859",
    descricao: "TRAFO 1F 25KVA G 15KV 240/120V OVI",
  },
  {
    codigo: "10012860",
    descricao: "TRAFO 1F 37,5KVA G 15KV 240/120V OVI",
  },
  {
    codigo: "10012865",
    descricao: "TRAFO PEDESTAL 3F OVI 75KVA 15KV 220V",
  },
  {
    codigo: "10012866",
    descricao: "TRAFO PEDESTAL 3F OVI 150KVA 15KV 220V",
  },
  {
    codigo: "10012867",
    descricao: "TRAFO PEDESTAL 3F OVI 300KVA 15KV 220V",
  },
  {
    codigo: "10012868",
    descricao: "TRAFO PEDESTAL 3F OVI 500KVA 15KV 220V",
  },
  {
    codigo: "10012869",
    descricao: "TRAFO PEDESTAL 3F OVI 500KVA 15KV 380V",
  },
  {
    codigo: "10012870",
    descricao: "TRAFO PEDESTAL 3F OVI 750KVA 15KV 220V",
  },
  {
    codigo: "10012871",
    descricao: "TRAFO 1F 50KVA G 15KV 240/120V OVI",
  },
  {
    codigo: "10012872",
    descricao: "TRAFO 1F 100KVA G 15KV 240/120V OVI",
  },
  {
    codigo: "10012873",
    descricao: "TRAFO 1F 10KVA HV 15KV 254/127V OVI",
  },
  {
    codigo: "10012874",
    descricao: "TRAFO 1F 15KVA H 15KV 254/127V OVI",
  },
  {
    codigo: "10012875",
    descricao: "TRAFO 1F 25KVA H 15KV 254/127V OVI",
  },
  {
    codigo: "10012876",
    descricao: "TRAFO 1F 37,5KVA H 15KV 254/127V OVI",
  },
  {
    codigo: "10012877",
    descricao: "TRAFO 1F 10KVA K 36,2KV 254/127V OVI",
  },
  {
    codigo: "10012878",
    descricao: "TRAFO 1F 15KVA K 36,2KV 254/127V OVI",
  },
  {
    codigo: "10012879",
    descricao: "TRAFO 1F 25KVA K 36,2KV 254/127V OVI",
  },
  {
    codigo: "10012880",
    descricao: "TRAFO 3F 15KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "10012881",
    descricao: "TRAFO 3F 30KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "10012882",
    descricao: "TRAFO 3F 45KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "10012883",
    descricao: "TRAFO 3F 75KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "10012884",
    descricao: "TRAFO 3F 112,5KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "10012885",
    descricao: "TRAFO 3F 150KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "10012886",
    descricao: "TRAFO 3F 225KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "10012887",
    descricao: "TRAFO 3F 300KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "10012888",
    descricao: "TRAFO 3F 500KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "10012889",
    descricao: "TRAFO 3F 30KVA N 15KV 380/220V OVI",
  },
  {
    codigo: "10012890",
    descricao: "TRAFO 3F 45KVA N 15KV 380/220V OVI",
  },
  {
    codigo: "10012891",
    descricao: "TRAFO 3F 75KVA N 15KV 380/220V OVI",
  },
  {
    codigo: "10012892",
    descricao: "TRAFO 3F 112,5KVA N 15KV 380/220V OVI",
  },
  {
    codigo: "10012893",
    descricao: "TRAFO 3F 150KVA N 15KV 380/220V OVI",
  },
  {
    codigo: "10012894",
    descricao: "TRAFO 3F 45KVA AP 15KV 220/127V OVI",
  },
  {
    codigo: "10012895",
    descricao: "TRAFO 3F 75KVA AP 15KV 220/127V OVI",
  },
  {
    codigo: "10012896",
    descricao: "TRAFO 3F 112,5KVA AP 15KV 220/127V OVI",
  },
  {
    codigo: "10012897",
    descricao: "TRAFO 3F 150KVA AP 15KV 220/127V OVI",
  },
  {
    codigo: "10012898",
    descricao: "TRAFO 3F 30KVA P 36,2KV 220/127V OVI",
  },
  {
    codigo: "10012899",
    descricao: "TRAFO 3F 45KVA P 36,2KV 220/127V OVI",
  },
  {
    codigo: "10012900",
    descricao: "TRAFO 3F 75KVA P 36,2KV 220/127V OVI",
  },
  {
    codigo: "10012901",
    descricao: "TRAFO 3F 75KVA Q 36,2KV 380/220V OVI",
  },
  {
    codigo: "10012912",
    descricao: "TRAFO SUBM 3F OVI 500KVA 15KV 220/127V",
  },
  {
    codigo: "10012913",
    descricao: "TRAFO SUBM 3F OVI 750KVA 15KV 220/127V",
  },
  {
    codigo: "10012914",
    descricao: "TRAFO SUBM 3F OVI 1MVA 15KV 400/231V",
  },
  {
    codigo: "10012917",
    descricao: "TRAFO SUBM 3F OVI 300KVA 15KV 220/127V",
  },
  {
    codigo: "10013139",
    descricao: "RELIGADOR MONO ELETR 15KV 100A AUT 4KA",
  },
  {
    codigo: "10013231",
    descricao: "LUMINARIA LED 80W 70000H DIAM 50A70MM",
  },
  {
    codigo: "10013281",
    descricao: "POSTE ACO QUADRAD ALT 7500MMx200DAN",
  },
  {
    codigo: "10013291",
    descricao: "CHAVE SEC FACA ISOL POLIM 15KV 630A",
  },
  {
    codigo: "10013292",
    descricao: "CHAVE SECC BY-PASS 15KV 630A-DIR/ESQUER.",
  },
  {
    codigo: "10013293",
    descricao: "CHAVE SEC BYP 15KV 630A MA POLIM SEC E-D",
  },
  {
    codigo: "11000071",
    descricao: "LUVA EMENDA CABO AL CAA-336,4MCM",
  },
  {
    codigo: "11000078",
    descricao: "LUVA EMENDA CABO AL CAA-636MCM",
  },
  {
    codigo: "11000163",
    descricao: "REGULADOR TENSAO 1F 7,62KV 438A 333KVA",
  },
  {
    codigo: "11000271",
    descricao: "REGULADOR TENSAO 1F 7,62KV 219A 167KVA",
  },
  {
    codigo: "11001721",
    descricao: "RELIGADOR AUTOMÁTICO 630A 15KV",
  },
  {
    codigo: "11002161",
    descricao: "Indicador de Defeitos para cabos de Distribuição Subterrânea",
  },
  {
    codigo: "11002336",
    descricao: "REGULADOR TENSAO MONO 7620V 328A TP",
  },
  {
    codigo: "11002338",
    descricao: "SECCIONALIZADOR AUT 3F 14,4KV 200A GN3E",
  },
  {
    codigo: "11002352",
    descricao: "CHAVE UNIP OLEO BCO CAPACITOR MOTORIZAD",
  },
  {
    codigo: "11002364",
    descricao: "CHAVE SEC D CARG 3P 15KV 600A BECO",
  },
  {
    codigo: "11002365",
    descricao: "CHAVE SEC D CARG 3P 38KV 400A",
  },
  {
    codigo: "11002381",
    descricao: "ISOLADOR SUSPENS#O POLIM 36,2KV",
  },
  {
    codigo: "11002397",
    descricao: "ESTRUTURA SUP MET B CAP P3-7-6-R1",
  },
  {
    codigo: "11002440",
    descricao: "VIGA MET U 5000X203,2X50,8X6,35mm REG.T",
  },
  {
    codigo: "11002491",
    descricao: "CHAVE BY PASS 15KV 400A 95KV 12,5KA",
  },
  {
    codigo: "11002522",
    descricao: "CAPACITOR POT MONO 200KVAR 6600V 95KV",
  },
  {
    codigo: "11002793",
    descricao: "RELIGADOR AUT 3F 15KV 560A 16KA SF6",
  },
  {
    codigo: "11003263",
    descricao: "REGULADOR DE TENSÇO MONO 19920V 201A.",
  },
  {
    codigo: "11003442",
    descricao: "RELIGADOR AUT 3F 38KV 630A 16KA SF6 SD",
  },
  {
    codigo: "11003785",
    descricao: "RELIGADOR TRIF 15KV 280A TIPO SEV1506",
  },
  {
    codigo: "11003809",
    descricao: "RELIGADOR AUT 3F 15KV 400A 6KA OLEO KFE",
  },
  {
    codigo: "11003810",
    descricao: "RELIGADOR AUT 3F 15KV 400A 6KA OLEO KFME",
  },
  {
    codigo: "11003841",
    descricao: "RELIGADOR AUT 3F 15KV 280A 6KA OLEO KF",
  },
  {
    codigo: "11003922",
    descricao: "CABO ISOL 35KV COBRE SINGELO 630mmÝ",
  },
  {
    codigo: "11004058",
    descricao: "RELIGADOR AUTOMÁTICO 15KV",
  },
  {
    codigo: "11004581",
    descricao: "REGULADOR TENSAO 1F 19,92KV 418A 833KVA",
  },
  {
    codigo: "11005613",
    descricao: "QUADRO DISTRIBUIÇÃO PEDESTAL QDP TIPO 00",
  },
  {
    codigo: "11005614",
    descricao: "QUADRO DISTRIBUIÇÃO PEDESTAL QDP TIPO 2",
  },
  {
    codigo: "11006172",
    descricao: "TRAFO DIS TRI-750KVA-15KV-220/127V",
  },
  {
    codigo: "11006183",
    descricao: "ALÇA PREF CABO COBERTO CA 300MM2 -34,5kV",
  },
  {
    codigo: "11006283",
    descricao: "RELIGADOR AUT TRIF 15KV 560A 12KA EXTERN",
  },
  {
    codigo: "11006322",
    descricao: "RELIGADOR AUT 3F 38KV 630A 12KA C/ TPS",
  },
  {
    codigo: "11006782",
    descricao: "LUMINÁRIA LED COBRAHEAD 157W",
  },
  {
    codigo: "11006783",
    descricao: "LUMINÁRIA LED COBRAHEAD 127W",
  },
  {
    codigo: "11007868",
    descricao: "CAIXA PASSAGEM QUADRADO - PRE MOLDADO",
  },
  {
    codigo: "11007869",
    descricao: "CAIXA PASSAGEM RETANGULAR - PRE MOLDADO",
  },
  {
    codigo: "11007871",
    descricao: "BASE TRANSFORMADOR PEDESTAL",
  },
  {
    codigo: "11007872",
    descricao: "BASE PARA QDP TIPO 00 - PRE MOLDADO",
  },
  {
    codigo: "11007873",
    descricao: "BASE PARA QDP TIPO 0 - PRE MOLDADO",
  },
  {
    codigo: "11007874",
    descricao: "BASE PARA QDP TIPO 1 - PRE MOLDADO",
  },
  {
    codigo: "11007875",
    descricao: "BASE PARA QDP TIPO 2 - PRE MOLDADO",
  },
  {
    codigo: "11008594",
    descricao: "POSTE CONC CIRC 5M 300DAN",
  },
  {
    codigo: "11008595",
    descricao: "CRUZETA MADEIRA SUSTENT 90X90X600mm",
  },
  {
    codigo: "11119862",
    descricao: "SUPORTE AÇO PARA-RAIOS TRANSF DISTRIB",
  },
  {
    codigo: "23011941",
    descricao: "A CJ BCO CAPACITOR  AUT 15 KV 300 KVAR",
  },
  {
    codigo: "23011950",
    descricao: "A CJ BCO CAPACITOR  AUT 15 KV 600 KVAR",
  },
  {
    codigo: "23011951",
    descricao: "A CJ BCO CAPACITOR PARAL AUT 15KV 1200KVA",
  },
  {
    codigo: "23011954",
    descricao: "A CJ BCO CAPACITOR PARAL FIXO 15KV 300KVA",
  },
  {
    codigo: "23011958",
    descricao: "A CJ BCO CAPACITOR PARAL FIXO15KV 600KVA",
  },
  {
    codigo: "23011959",
    descricao: "A CJ BCO CAPACITOR PARAL FIXO 15KV 1200KVA",
  },
  {
    codigo: "23014030",
    descricao: "A CJ BCO CAPACITOR PARAL AUT 15KV 900KVA",
  },
  {
    codigo: "23014031",
    descricao: "A CJ BCO CAPACITOR PARAL FIX 15KV 900KVA",
  },
  {
    codigo: "23014650",
    descricao: "DUTO V1H1 75~150mm² 0,5M2 CORRU ENV",
  },
  {
    codigo: "23014651",
    descricao: "DUTO V1H2/V2H1 75~150mm 0,5M2 CORRU ENV",
  },
  {
    codigo: "23014652",
    descricao: "DUTO V1H3/V3H1 75~150mm 0,5M2 CORRU ENV",
  },
  {
    codigo: "23014653",
    descricao: "DUTO V1H4/V4H1 75~150mm 0,5M2 CORRU ENV",
  },
  {
    codigo: "23014654",
    descricao: "DUTO V2H2 75~150mm 0,5M2 CORRU ENV",
  },
  {
    codigo: "23014655",
    descricao: "DUTO V2H3/V3H2 75~150mm 0,5M2 CORRU ENV",
  },
  {
    codigo: "23014656",
    descricao: "DUTO V2H4/V4H2 75~150mm 0,5M2 CORRU ENV",
  },
  {
    codigo: "23014657",
    descricao: "DUTO V3H3 75~150mm 0,5M2 CORRU ENV",
  },
  {
    codigo: "23014658",
    descricao: "DUTO V3H4/V4H3 75~125mm 0,5M2 CORRU ENV",
  },
  {
    codigo: "23014659",
    descricao: "DUTO V3H4/V4H3 150mm 0,5~1M2 CORRUG ENV",
  },
  {
    codigo: "23014660",
    descricao: "DUTO V4H4 75~100mm 0,5M2 CORRUG ENV",
  },
  {
    codigo: "23014661",
    descricao: "DUTO V4H4 125~150mm 0,5~1M2 CORRUG ENV",
  },
  {
    codigo: "23014662",
    descricao: "DUTO V1H1+V1H2 75~150mm 0,5M2 CORRUG EV",
  },
  {
    codigo: "23014663",
    descricao: "DUTO V1H1+V1H3 75~150mm 0,5M2 CORRUG EV",
  },
  {
    codigo: "23014664",
    descricao: "DUTO V1H2+V1H3 75~150mm 0,5M2 CORRU ENV",
  },
  {
    codigo: "23014665",
    descricao: "DUTO V1H1 75~150mm CORRUG ENT",
  },
  {
    codigo: "23014666",
    descricao: "DUTO V1H2/V2H1 75~150mm CORRU ENT",
  },
  {
    codigo: "23014667",
    descricao: "DUTO V1H3/V3H1 75~150mm CORRUG ENT",
  },
  {
    codigo: "23014668",
    descricao: "DUTO V1H4/V4H1 75~150mm CORRU ENT",
  },
  {
    codigo: "23014669",
    descricao: "DUTO V2H2 75~150mm CORRUG ENT",
  },
  {
    codigo: "23014670",
    descricao: "DUTO V2H3/V3H2 75~150mm CORRUG ENT",
  },
  {
    codigo: "23014671",
    descricao: "DUTO V2H4/V4H2 75~150mm CORRUG ENT",
  },
  {
    codigo: "23014672",
    descricao: "DUTO V3H3 75~150mm CORRUG ENT",
  },
  {
    codigo: "23014673",
    descricao: "DUTO V3H4/V4H3 75~125mm CORRUG ENT",
  },
  {
    codigo: "23014674",
    descricao: "DUTO V3H4/V4H3 150mm CORRUG ENT",
  },
  {
    codigo: "23014675",
    descricao: "DUTO V4H4 75~100mm CORRUG ENT",
  },
  {
    codigo: "23014676",
    descricao: "DUTO V4H4 125~150mm CORRUG ENT",
  },
  {
    codigo: "23014677",
    descricao: "DUTO V1H1+V1H2 75~150mm CORRUG ENT",
  },
  {
    codigo: "23014678",
    descricao: "DUTO V1H1+V1H3 75~150mm CORRUG ENT",
  },
  {
    codigo: "23014679",
    descricao: "DUTO V1H2+V1H3 75~150mm CORRUG ENT",
  },
  {
    codigo: "23014980",
    descricao: "A CONJ BCO CAPACITOR PARAL FIX 11kV 300KVA",
  },
  {
    codigo: "23014981",
    descricao: "A CONJ BCO CAPACITOR PARAL FIX 11kV 600KVA",
  },
  {
    codigo: "23014982",
    descricao: "A CONJ BCO CAPACITOR PARAL AUT 11KV 300KVA",
  },
  {
    codigo: "23014983",
    descricao: "A CONJ BCO CAPACITOR PARAL AUT 11KV 600KVA",
  },
  {
    codigo: "23015742",
    descricao: "CAMARA RED DIST PRE-MOL CONCR 4M 2M 1,9M",
  },
  {
    codigo: "30000167",
    descricao: 'PLACA ADV TORRES "PERIGO NAO SUBA"',
  },
  {
    codigo: "30000191",
    descricao: "GRAMPO TENSÃO P/ CABO AL 3/0 AWG A 336,4",
  },
  {
    codigo: "30000192",
    descricao: "CONEC PARAF  FEND BZ 1/0AWGX6-1/0AWG",
  },
  {
    codigo: "30000194",
    descricao: "Conector eletr. Parafuso fendido - 4/0 AWG - Tipo 7",
  },
  {
    codigo: "30000243",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 6A',
  },
  {
    codigo: "30000244",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 8A',
  },
  {
    codigo: "30000245",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 10A',
  },
  {
    codigo: "30000246",
    descricao: "ELO FUSIVEL DIS K 15A 500mm INTERRUPÇÃO",
  },
  {
    codigo: "30000247",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 20A',
  },
  {
    codigo: "30000249",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 25A',
  },
  {
    codigo: "30000251",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 30A',
  },
  {
    codigo: "30000252",
    descricao: "ELO FUSIVEL DIS K 40A 500mm INTERRUPÇÃO",
  },
  {
    codigo: "30000253",
    descricao: "ELO FUSIVEL DIS K 50A 500mm INTERRUPÇÃO",
  },
  {
    codigo: "30000254",
    descricao: "ELO FUSIVEL DIS K 65A 500mm INTERRUPÇÃO",
  },
  {
    codigo: "30000255",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 80A',
  },
  {
    codigo: "30000256",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 100A',
  },
  {
    codigo: "30000257",
    descricao: 'ELO FUSÍVEL DISTRIB "H" 5A',
  },
  {
    codigo: "30000258",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 12A',
  },
  {
    codigo: "30000259",
    descricao: 'ELO FUSÍVEL DISTRIB "H" 3A',
  },
  {
    codigo: "30000260",
    descricao: 'ELO FUSIVEL DISTRIB "H" 1,00A 1000mm',
  },
  {
    codigo: "30000261",
    descricao: 'ELO FUSÍVEL DISTRIB "H" 2A',
  },
  {
    codigo: "30000275",
    descricao: "Chumbador M12 x 1,15",
  },
  {
    codigo: "30000276",
    descricao: "Chumbador M6 x 1,0",
  },
  {
    codigo: "30000385",
    descricao: "Prisioneiro M 12 x 1,75 - Tipo I",
  },
  {
    codigo: "30000386",
    descricao: "Prisioneiro M 12 x 1,75 - Tipo II",
  },
  {
    codigo: "30000387",
    descricao: "Prisioneiro M 12 x 1,75 - Tipo III",
  },
  {
    codigo: "30000388",
    descricao: "Parafuso Cabeça sextav M 12 x 1,75 - Tipo III",
  },
  {
    codigo: "30000389",
    descricao: "Parafuso de latão M6 x 1,0",
  },
  {
    codigo: "30000779",
    descricao: "LUVA EMENDA COMP CABO 4 AWG AL",
  },
  {
    codigo: "30000780",
    descricao: "LUVA EMENDA COMP CABO 1/0 AWG AL",
  },
  {
    codigo: "30000781",
    descricao: "LUVA EMENDA COMP CABO 3/0 AWG AL",
  },
  {
    codigo: "30000783",
    descricao: "LUVA DE COMP P/ EMENDAS CABO 4 AL CAA",
  },
  {
    codigo: "30000990",
    descricao: "PINO TOPO ACO 25mm 389mm",
  },
  {
    codigo: "30000993",
    descricao: "ALÇA DISTRIB COND AL 4 AWG 445mm",
  },
  {
    codigo: "30001096",
    descricao: "SUPORTE P/ INST BF E PR EM POSTE",
  },
  {
    codigo: "30001103",
    descricao: "GUARNIÇÃO PARA TAMPA DE FERRO QUADRADO ",
  },
  {
    codigo: "30001104",
    descricao: "Fita EPR auto aglomera 25 mm - 10 m",
  },
  {
    codigo: "30001105",
    descricao: "Suporte vertical de 15 furos",
  },
  {
    codigo: "30001112",
    descricao: "FITA ISOLANTE ADESIVA",
  },
  {
    codigo: "30001225",
    descricao: "Limitador de corrente 120 mm",
  },
  {
    codigo: "30001226",
    descricao: "EMENDA 8,7/15KV P/ CABO DE 240 mm²",
  },
  {
    codigo: "30001797",
    descricao: "Fusível tipo NH - 400 A",
  },
  {
    codigo: "30003033",
    descricao: "Fusível tipo NH - 63 A",
  },
  {
    codigo: "30003034",
    descricao: "Fusível tipo NH - 125 A",
  },
  {
    codigo: "30003035",
    descricao: "Fusível tipo NH - 200 A",
  },
  {
    codigo: "30003036",
    descricao: "Fusível tipo NH - 250 A",
  },
  {
    codigo: "30003037",
    descricao: "Fusível tipo NH - 315A",
  },
  {
    codigo: "30003327",
    descricao: "SUPORTE CHAVE SEC 1P INCLINADA ACO",
  },
  {
    codigo: "30003329",
    descricao: "SUPORTE T ACO 540X10mm",
  },
  {
    codigo: "30003330",
    descricao: "SUPORTE TL ACO",
  },
  {
    codigo: "30003331",
    descricao: "SUPORTE TRANSF ACO POST CON CIR 240mm",
  },
  {
    codigo: "30003335",
    descricao: "AFASTADOR ARMAÇÃO SEC AÇO 500X700mm",
  },
  {
    codigo: "30003339",
    descricao: "HASTE ATERR CANTONEIRA AC ZINC F",
  },
  {
    codigo: "30003340",
    descricao: "MANILHA AÇO 16X75X22mm 120KN F-1201",
  },
  {
    codigo: "30003341",
    descricao: 'MAO FRANCESA PERFIL ACO DP "V" 45X45X',
  },
  {
    codigo: "30003342",
    descricao: "M#O FRANCESA PLANA AL 32X6X726mm",
  },
  {
    codigo: "30003353",
    descricao: "CINTA REGULAVEL CIRCULAR TIPO BAP-3 ACO",
  },
  {
    codigo: "30003354",
    descricao: "SUPORTE L AÇO 2 FUROS P-760-019 REV.1",
  },
  {
    codigo: "30003364",
    descricao: "LACO PREF TOPO CAA 336,4MCM DIAM 60mm",
  },
  {
    codigo: "30003366",
    descricao: "SECCIONADOR PREF CERC 2,6-3mm 450DAN",
  },
  {
    codigo: "30003367",
    descricao: "ALCA PREF CABO COBERTO CA 50mm² -15KV",
  },
  {
    codigo: "30003390",
    descricao: "LACO ROLDANA P/CABO ACO 3X2,25mm 45mm",
  },
  {
    codigo: "30003394",
    descricao: "ALCA PREF DIST CA CAA 2/0AWG",
  },
  {
    codigo: "30003396",
    descricao: "CAPA ISOL 15KV CONEC CUNNHA AZUL",
  },
  {
    codigo: "30003406",
    descricao: "CONECTOR D AL COMP CACU4/0 CACU14AWG",
  },
  {
    codigo: "30003413",
    descricao: "CONECTOR D P FEND CU 8-6 AWG S/ESP",
  },
  {
    codigo: "30003428",
    descricao: "CONECTOR CUNHA CN11",
  },
  {
    codigo: "30003429",
    descricao: "CONECTOR CUNHA CN15",
  },
  {
    codigo: "30003430",
    descricao: "CONECTOR CUNHA CN14",
  },
  {
    codigo: "30003431",
    descricao: "CONECTOR CUNHA CN13",
  },
  {
    codigo: "30003451",
    descricao: "LUVA EMENDA COMP CA 1/0 AWG IT-06",
  },
  {
    codigo: "30003452",
    descricao: "LUVA EMENDA COMP CA 2AWG IT-03",
  },
  {
    codigo: "30003453",
    descricao: "LUVA EMENDA COMP CA 4/0AWG IT-08",
  },
  {
    codigo: "30003454",
    descricao: "LUVA EMENDA COMP CA 4 AWG IT-02",
  },
  {
    codigo: "30003456",
    descricao: "LUVA EMENDA COMP CAA 1/0AWG IT3",
  },
  {
    codigo: "30003457",
    descricao: "LUVA EMENDA COMP CAA 2AWG RD17.048 IT2",
  },
  {
    codigo: "30003458",
    descricao: "LUVA EMENDA COMP CAA336,4 RD17.048 IT5",
  },
  {
    codigo: "30003459",
    descricao: "LUVA EMENDA COMP CAA4/0AWG RD17.048 IT4",
  },
  {
    codigo: "30003460",
    descricao: "LUVA EMENDA COMP CAA4AWG RD17.048 IT1",
  },
  {
    codigo: "30003461",
    descricao: "LUVA EMENDA COMP CAL 35 MM IT-04 ",
  },
  {
    codigo: "30003467",
    descricao: "CONECTOR CUNHA CN16",
  },
  {
    codigo: "30003469",
    descricao: "CONECTOR D AL COMP CACU2 CAA4 CACU8AWG",
  },
  {
    codigo: "30003470",
    descricao: "CONECTOR D AL COMP CACUCAA 14-8 1 2/0AWG",
  },
  {
    codigo: "30003546",
    descricao: "BLOCO CONCRETO 5000DAN C/ PALETS",
  },
  {
    codigo: "30003557",
    descricao: "CRUZETA MET 3X3X3/8POLX2600MM G-A3-326",
  },
  {
    codigo: "30003558",
    descricao: "CRUZETA MET 90X90X7X5000mm HT HS DDPP",
  },
  {
    codigo: "30003581",
    descricao: "ARRUELA LISA QUAD AÇO ZI 38X3X18mm",
  },
  {
    codigo: "30003583",
    descricao: "PARAFUSO CAB AB ZI 12,7X40mm AR POR Q",
  },
  {
    codigo: "30003589",
    descricao: "CORDOALHA AÇO CARB 7,9mm 7F CL.B AR/HS",
  },
  {
    codigo: "30003590",
    descricao: "SUPORTE CHAVE SEC 1P INVERTIDA ACO",
  },
  {
    codigo: "30003850",
    descricao: "PARA RAIOS DIS BT 0,6KV 10KA 280V S/CENT",
  },
  {
    codigo: "30003859",
    descricao: "CONECTOR TERM C BIM CACAA4/0 CU120mm²IT5",
  },
  {
    codigo: "30003911",
    descricao: "ARRUELA QUAD LISA 38X3mm DI 18mm AL",
  },
  {
    codigo: "30024654",
    descricao: "KIT REPARO CABO PROTEGIDO 34,5KV",
  },
  {
    codigo: "30025124",
    descricao: "CONECTOR ATER CUNHA COBRE HASTE 14,30mm",
  },
  {
    codigo: "30025125",
    descricao: "CORDOALHA COBREADA 40% 16mm² 7F CL A",
  },
  {
    codigo: "30025618",
    descricao: "COBERTURA PROT PONTO ATERRAM TEMP 15KV",
  },
  {
    codigo: "30027477",
    descricao: "CINTA POSTE CIRCULAR B-10 AC 100mm",
  },
  {
    codigo: "30028194",
    descricao: "PROTETOR CRUZETA POLIM CONTRA PÁSSAROS",
  },
  {
    codigo: "30028386",
    descricao: "ALÇA PREF SERVIÇO CABO ISOLADO 10mm² BR",
  },
  {
    codigo: "30028387",
    descricao: "ALÇA PREF SERVIÇO CABO ISOLADO 25mm² LJ",
  },
  {
    codigo: "30028388",
    descricao: "ALÇA PREF SERVIÇO CABO ISOLADO 35mm² VM",
  },
  {
    codigo: "30028389",
    descricao: "ALÇA PREF SERVIÇO CABO ISOLADO 70mm² PT",
  },
  {
    codigo: "30028557",
    descricao: "MAO FRANCESA PLANA AL 619mm",
  },
  {
    codigo: "30028558",
    descricao: "MAO FRANCESA PERFIL AL 993mm",
  },
  {
    codigo: "30028559",
    descricao: "MAO FRANCESA PERFIL AL 1534mm",
  },
  {
    codigo: "30028560",
    descricao: "MAO FRANCESA PERFIL AL 1971mm",
  },
  {
    codigo: "30028561",
    descricao: "OLHAL PARAFUSO AL 16mm 5000DAN",
  },
  {
    codigo: "30028562",
    descricao: "MANILHA SAPAT AL 5000DAN",
  },
  {
    codigo: "30028565",
    descricao: "LUVA COMPRESSAO AL 70mm² COMP 234mm",
  },
  {
    codigo: "30028578",
    descricao: "CONTROLE P/ BANCO REG TENSAO C/ NOBREAK",
  },
  {
    codigo: "30028579",
    descricao: "CONECTOR 4 DERIVACOES",
  },
  {
    codigo: "30028581",
    descricao: "CONECTOR TERM ESTRANGUL TIPO 1 1FURO",
  },
  {
    codigo: "30028595",
    descricao: "SELA CRUZETA AL 94X110mm 30mm",
  },
  {
    codigo: "30028597",
    descricao: "CINTA POSTE CIRCULAR AL 200mm",
  },
  {
    codigo: "30028598",
    descricao: "CINTA POSTE CIRCULAR AL 220mm",
  },
  {
    codigo: "30028599",
    descricao: "CINTA POSTE CIRCULAR AL 240mm",
  },
  {
    codigo: "30028600",
    descricao: "CINTA POSTE CIRCULAR AL 260mm",
  },
  {
    codigo: "30028601",
    descricao: "CINTA POSTE CIRCULAR AL 280mm",
  },
  {
    codigo: "30028602",
    descricao: "CINTA POSTE CIRCULAR AL 320mm",
  },
  {
    codigo: "30028605",
    descricao: "CONECTOR TERMINAL AL 2 FUROS-300mm²",
  },
  {
    codigo: "30028611",
    descricao: "TERMINAL EXT. CABO ISOL. 20/35KV 300mm²",
  },
  {
    codigo: "30028612",
    descricao: "AFASTADOR ARM SEC 500MM AL",
  },
  {
    codigo: "30028613",
    descricao: 'SUPORTE TIPO "L" AL',
  },
  {
    codigo: "30028624",
    descricao: "PORCA QUADRADA M16X2 AL",
  },
  {
    codigo: "30028643",
    descricao: "PARAFUSO CAB Q AL 16X400mm M POR Q",
  },
  {
    codigo: "30028644",
    descricao: "PARAFUSO CAB Q AL 16X450mm M POR Q",
  },
  {
    codigo: "30028762",
    descricao: "PROTETOR DE EMENDA ANTI-FURTO ",
  },
  {
    codigo: "30028775",
    descricao: "MANTA ASFÁLTICA ",
  },
  {
    codigo: "30028880",
    descricao: "CONECTOR TERM ESTRANGUL SAÍDA DUPLA",
  },
  {
    codigo: "30028984",
    descricao: "ALCA PREF CABO COBERTO CA 70mm² - 15KV",
  },
  {
    codigo: "30029047",
    descricao: "LUVA COMPRESSAO AL 35mm² COMP 137mm",
  },
  {
    codigo: "30029048",
    descricao: "CINTA POSTE CIRCULAR AL 380mm",
  },
  {
    codigo: "30029049",
    descricao: "CINTA POSTE CIRCULAR AL 400mm",
  },
  {
    codigo: "30029050",
    descricao: "CINTA POSTE CIRCULAR B-42 AL 420mm",
  },
  {
    codigo: "30029051",
    descricao: "CINTA POSTE CIRCULAR B-44 AL 440mm",
  },
  {
    codigo: "30029052",
    descricao: "CINTA POSTE CIRCULAR AL 460mm",
  },
  {
    codigo: "30029053",
    descricao: "CINTA POSTE CIRCULAR AL 480mm",
  },
  {
    codigo: "30029054",
    descricao: "PARAFUSO ESP AL MA M16X2mm 450mm",
  },
  {
    codigo: "30029055",
    descricao: "PARAFUSO ESP AL MA M16X2mm 500mm",
  },
  {
    codigo: "30029056",
    descricao: "PARAFUSO ESP AL MA M16X2mm 550mm",
  },
  {
    codigo: "30029057",
    descricao: "PARAFUSO ESP AL MA M16X2mm 600mm",
  },
  {
    codigo: "30029058",
    descricao: "PARAFUSO ESP AL MA M16X2mm 750mm",
  },
  {
    codigo: "30029061",
    descricao: "CINTA POSTE CIRCULAR AL 300mm",
  },
  {
    codigo: "30029062",
    descricao: "CINTA POSTE CIRCULAR AL 340mm",
  },
  {
    codigo: "30029063",
    descricao: "CINTA POSTE CIRCULAR AL 360mm",
  },
  {
    codigo: "30029074",
    descricao: "SELA CRUZETA AL 120X110mm 30mm",
  },
  {
    codigo: "30029075",
    descricao: "PARAFUSO CAB ABAUL AL M16X100mm",
  },
  {
    codigo: "30029076",
    descricao: "PORCA - OLHAL  AL M16 X 2-7H",
  },
  {
    codigo: "30029133",
    descricao: "SUPORTE TIPO Z AL",
  },
  {
    codigo: "30029134",
    descricao: "SUPORTE T ACO 540X10mm AL",
  },
  {
    codigo: "30029135",
    descricao: "SUPORTE P/ INST CF NA HORIZONTAL AL",
  },
  {
    codigo: "30029136",
    descricao: "SUPORTE CHAVE SEC 1P INVERTIDA ACO AL",
  },
  {
    codigo: "30029137",
    descricao: "SUPORTE CHAVE SEC 1P INCLINADA AL",
  },
  {
    codigo: "30029138",
    descricao: "SUPORTE TL AL",
  },
  {
    codigo: "30029139",
    descricao: "SUPORTE AFASTADOR HORIZONTAL 13,8KV AL",
  },
  {
    codigo: "30029140",
    descricao: "SUPORTE P/ INST BF E PR EM POSTE AL",
  },
  {
    codigo: "30029213",
    descricao: "RABICHO CABO NEUTRO 70 mm²",
  },
  {
    codigo: "30029293",
    descricao: "CONECTOR PERFURANTE PARA IP CL 05",
  },
  {
    codigo: "30029641",
    descricao: "CABO MX AL XLPE 0,6/1KV 1X70MM2",
  },
  {
    codigo: "30029736",
    descricao: "CONECT PERF ISO 16-95 mm2 X NU 4-4/0 AWG",
  },
  {
    codigo: "30029960",
    descricao: "CONECT PERF ISO 10-35 mm2 X NU 4-4/0 AWG",
  },
  {
    codigo: "30030010",
    descricao: "CRUZETA FIB VIDRO 90X112,5mm 5000mm",
  },
  {
    codigo: "30030066",
    descricao: "EMENDA AUTOMATICA 2AWG/4AWG/50MM² VERM",
  },
  {
    codigo: "30030067",
    descricao: "EMENDA AUTOMATICA 1/0AWG/2/0AWG/70MM² CZ",
  },
  {
    codigo: "30030068",
    descricao: "EMENDA AUTOMATICA 4/0AWG PRETA",
  },
  {
    codigo: "30030069",
    descricao: "EMENDA AUTOMATICA 336,4MCM/185MM² VERDE",
  },
  {
    codigo: "30030143",
    descricao: "EMENDA AUTOMATICA 477MCM AZ",
  },
  {
    codigo: "30030144",
    descricao: "EMENDA AUTOMATICA 636MCM BR",
  },
  {
    codigo: "30030264",
    descricao: "TERMINAL EXT CAB ISOL 20/35KV 240MM2 CO",
  },
  {
    codigo: "30030915",
    descricao: "ISOLADOR PINO POLIM AUTO TRAV 15KV",
  },
  {
    codigo: "30031407",
    descricao: "PROT P/ISOL CONTR PASS POL PINO/PILAR",
  },
  {
    codigo: "30031443",
    descricao: "ISOLADOR PL POLIM FB VID BORR SIL 36,2KV",
  },
  {
    codigo: "30031516",
    descricao: "CONECT ATER CUN HAST 14,3MM LG CU 50MM2",
  },
  {
    codigo: "30032216",
    descricao: "COBERTURA PROT CB COND 336 CAA 20KV 34,5",
  },
  {
    codigo: "50000602",
    descricao: "LÂMPADA VAPOR DE SÓDIO TUBULAR 150 W",
  },
  {
    codigo: "50000604",
    descricao: "LÂMPADA VAPOR DE SÓDIO TUBULAR 250 W",
  },
  {
    codigo: "50003331",
    descricao: "LÇA PRÉ FORMAD P/ CABO CONCÊNTRICO 19,5",
  },
  {
    codigo: "90000071",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 100,00A 500mm',
  },
  {
    codigo: "90000085",
    descricao: "CALCO CHAVE FACA ACO-CAR 138mm",
  },
  {
    codigo: "90000099",
    descricao: "CABO COBERTO AL 1/0AWG PVC BR 0,70mm SUC",
  },
  {
    codigo: "90000103",
    descricao: "LÂMPADA VAP. SÓDIO E40 TUBULAR 220V/100W",
  },
  {
    codigo: "90000108",
    descricao: "CONECTOR GRAMPO DE LINHA VIVA AL. SUCATA",
  },
  {
    codigo: "90000112",
    descricao: "CABO AL COB25KV XLPE/HDPE185,00mm²SUCATA",
  },
  {
    codigo: "90000132",
    descricao: "ABRACADEIRA PA 100MM PT 390X7,8MM",
  },
  {
    codigo: "90000134",
    descricao: "CABO AL COB PVC 336,4MCM - SUCATA",
  },
  {
    codigo: "90000136",
    descricao: "CINTA POSTE ACO CARB B-6 200mm SUCATA",
  },
  {
    codigo: "90000139",
    descricao: "CABO AL COB  PVC 4AWG - SUCATA",
  },
  {
    codigo: "90000140",
    descricao: "CINTA POSTE ACO CARB B-8 260mm SUCATA",
  },
  {
    codigo: "90000146",
    descricao: "ARRUELA LISA ACO CARB M18 SUCATA",
  },
  {
    codigo: "90000155",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 30,00A 500mm',
  },
  {
    codigo: "90000157",
    descricao: 'ARRUELA REDON. LISA AÇO CARB 3/8 "X1/16"',
  },
  {
    codigo: "90000159",
    descricao: "CHAPA ACO CARB 5,00X 60X 150mm SUCATA",
  },
  {
    codigo: "90000160",
    descricao: "CABO ALCOB 25KVXLPE/HDPE 70,00mm²-SUCATA",
  },
  {
    codigo: "90000161",
    descricao: "MANILHA FOFO RD PRE-REUN MP-15-04 SUCATA",
  },
  {
    codigo: "90000170",
    descricao: "CABO AL COB  PVC 3/0 AWG  - SUCATA",
  },
  {
    codigo: "90000175",
    descricao: "CABO AL COB  PVC 1/0 AWG  - SUCATA",
  },
  {
    codigo: "90000176",
    descricao: "CONECTOR CUNHA CN5",
  },
  {
    codigo: "90000177",
    descricao: "CHAVE SEC FACA ISOL PORC 15KV 630A",
  },
  {
    codigo: "90000184",
    descricao: "CABO MULT AL 8,7/15KV 3X240/120 - SUCATA",
  },
  {
    codigo: "90000185",
    descricao: "ISOLADOR PINO PORC BX 1000DAN",
  },
  {
    codigo: "90000186",
    descricao: "CONECTOR CUNHA CN2",
  },
  {
    codigo: "90000190",
    descricao: "ISOLADOR PINO PORC 15KV 1000DAN",
  },
  {
    codigo: "90000196",
    descricao: "CABO MULT AL XLPE0,60/1KV3X120/70-SUCATA",
  },
  {
    codigo: "90000199",
    descricao: "ISOLADOR CASTANHA PORC 6500DAN",
  },
  {
    codigo: "90000201",
    descricao: "CABO MULT AL XLPE0,60/1KV3X70/50-SUCATA",
  },
  {
    codigo: "90000212",
    descricao: "ISOLADOR CASTANHA PORC 3400DAN",
  },
  {
    codigo: "90000216",
    descricao: "ISOL.DISCO PORC C/FERRO 15KV SUCATA",
  },
  {
    codigo: "90000220",
    descricao: "CABO - CU - 3 X 1 X 35 mm - 8,7/15KV - XLPE / EPR",
  },
  {
    codigo: "90000223",
    descricao: "ISOLADOR ROLDANA 1,3KV POR R 1350-2",
  },
  {
    codigo: "90000227",
    descricao: "PINO ISOL AÇO CRUZ MAD 16mm 294mm",
  },
  {
    codigo: "90000231",
    descricao: "MANILHA  RD MP-07-11",
  },
  {
    codigo: "90000233",
    descricao: "PINO ISOLADOR ACO CARB 194mm SUCATA",
  },
  {
    codigo: "90000236",
    descricao: "CABO ISOL  CU XLPE 4X35mmÝ 0,6/1KV",
  },
  {
    codigo: "90000238",
    descricao: "PINO ISOL AÇO CRUZ MAD 35mm 324mm",
  },
  {
    codigo: "90000240",
    descricao: "ALÇA DISTRIB. COND. AL. 336,4MCM SUCATA",
  },
  {
    codigo: "90000248",
    descricao: "BRAÇO LUMINÁRIA BPC AÇO CARB /SUCATA",
  },
  {
    codigo: "90000249",
    descricao: "CABO POT CU CL4 2X2,5mm 0,45/0,75KV PT",
  },
  {
    codigo: "90000250",
    descricao: "BRAÇO LUMINÁRIA BPN AÇO CARB /SUCATA",
  },
  {
    codigo: "90000251",
    descricao: "ALÇA DISTRIB. COND. AL.  3/0AWG SUCATA",
  },
  {
    codigo: "90000252",
    descricao: "BRAÇO LUMINÁRIA BPM AÇO CARB /SUCATA",
  },
  {
    codigo: "90000253",
    descricao: "CABO CU COB  PVC 35,00MM2 - SUCATA",
  },
  {
    codigo: "90000257",
    descricao: "LUMINÁRIA I. PUB SÓD.1XLPS-1 150W/SUCATA",
  },
  {
    codigo: "90000258",
    descricao: "CABO COBERTO CU WPP 50mm²PVC PR 0,8mm 2A",
  },
  {
    codigo: "90000260",
    descricao: "ALÇA PREF ESTAI ACO 6,4mm AM GDE-1204H",
  },
  {
    codigo: "90000262",
    descricao: "LUMINÁRIA I.PUB SÓD. 1XLPS-2 250W/SUCATA",
  },
  {
    codigo: "90000264",
    descricao: "ALÇA SERVIÇO COND. AL. 10,00mm² SUCATA",
  },
  {
    codigo: "90000266",
    descricao: "CABO COBERTO CU WPP 120mm² PVC 0,8mm 2A",
  },
  {
    codigo: "90000271",
    descricao: "ALÇA DISTRIB. COND.6 AL. 1/0AWG SUCATA",
  },
  {
    codigo: "90000275",
    descricao: "LUMINÁRIA I.PUB SÓD.1XLPS-00 100W/SUCATA",
  },
  {
    codigo: "90000277",
    descricao: "TOMADA RELE MP-16-21/ SUCATA",
  },
  {
    codigo: "90000282",
    descricao: "CABO ISOL 0,6/1 KV COBR 1X240mm XLPE/EPR",
  },
  {
    codigo: "90000287",
    descricao: "CABO ISOL 0,6/1 kV COBR 1x120mm XLPE/EPR",
  },
  {
    codigo: "90000292",
    descricao: "CONECTOR TERMINAL COBRE 1 FURO - 35mm",
  },
  {
    codigo: "90000293",
    descricao: "CABO ISOL CU 8,7/15KV 3X1X240mm²EPR/XLPE",
  },
  {
    codigo: "90000295",
    descricao: "POSTE CONCR TUBULAR 16,0M 400KG SUCATA",
  },
  {
    codigo: "90000299",
    descricao: "CABO MULT AL XLPE0,60/1KV2X25/25-SUCATA",
  },
  {
    codigo: "90000300",
    descricao: "POSTE CONCR CIRCUL 14,0M 1500DAN SUCATA",
  },
  {
    codigo: "90000301",
    descricao: "FIO COBERTO CU PVC CZ 13,30mm²/6AWG",
  },
  {
    codigo: "90000305",
    descricao: "POSTE CONCR CIRCUL 12,0M 1500DAN SUCATA",
  },
  {
    codigo: "90000308",
    descricao: "CABO MX AL XLPE 0,6/1KV 2X1X25+25mm² ",
  },
  {
    codigo: "90000309",
    descricao: "POSTE CONCR CIRCUL 16,0M 2500DAN SUCATA",
  },
  {
    codigo: "90000311",
    descricao: "POSTE CONCRETO TUBUL 9,0M 400DAN/SUCATA",
  },
  {
    codigo: "90000312",
    descricao: "POSTE CONCR CIRCUL 12,0M 2500DAN SUCATA",
  },
  {
    codigo: "90000313",
    descricao: "CABO MULT AU SUS AL XLPE CA3X25+25mm²",
  },
  {
    codigo: "90000314",
    descricao: "RELE FOTOEL ILUM 220VCA 1000W NF SUCATA",
  },
  {
    codigo: "90000315",
    descricao: "POSTE CONCR CIRCUL 14,0M 2500DAN SUCATA",
  },
  {
    codigo: "90000317",
    descricao: "POSTE CONCR CIRCUL 20,0M 2500DAN",
  },
  {
    codigo: "90000319",
    descricao: "SUPORTE ACO CH FUS/P-RAIO MP1105 SUCATA",
  },
  {
    codigo: "90000320",
    descricao: "POSTE CONCRETO TUBUL 9,0M 800DAN/SUCATA",
  },
  {
    codigo: "90000321",
    descricao: "POSTE CONCR CIRCUL 20,0M 1500DAN SUCATA",
  },
  {
    codigo: "90000322",
    descricao: "POSTE CONCRETO CIRCUL10,5M 300DAN/SUCATA",
  },
  {
    codigo: "90000323",
    descricao: "POSTE MADEIR CIRCUL 10,0M  230DAN SUCATA",
  },
  {
    codigo: "90000324",
    descricao: "CABO COL MULT AL  0,60/1KV 3X1X10+16mm²",
  },
  {
    codigo: "90000325",
    descricao: "POSTE CONCRETO CIRC.10,5M 600DAN/SUCATA",
  },
  {
    codigo: "90000326",
    descricao: "POSTE MADEIRA EUC PRES 10M MEDIO",
  },
  {
    codigo: "90000329",
    descricao: "POSTE MADEIR CIRCUL 10,0M 600DAN SUCATA",
  },
  {
    codigo: "90000331",
    descricao: "POSTE MADEIR CIRCUL 12,0M 230DAN SUCATA",
  },
  {
    codigo: "90000333",
    descricao: "CABO MULT AL XLPE 0,60/1KV 2X1X10+ 10mm²",
  },
  {
    codigo: "90000334",
    descricao: "POSTE CONCRETO CIRC 10,5M 1000DAN/SUCATA",
  },
  {
    codigo: "90000335",
    descricao: "POSTE MADEIR CIRCUL 12,0M 300DAN SUCATA",
  },
  {
    codigo: "90000340",
    descricao: "POSTE MADEIR CIRCUL 12,0M 600DAN SUCATA",
  },
  {
    codigo: "90000341",
    descricao: "POSTE CONCRETO CIRC10,5M 1500DAN/SUCATA",
  },
  {
    codigo: "90000342",
    descricao: "ARMAÇÃO SEC AÇO 1 ESTRIBO 110mm",
  },
  {
    codigo: "90000343",
    descricao: "POSTE MADEIRA CIRCUL 13,0M 300DAN",
  },
  {
    codigo: "90000345",
    descricao: "REATOR  LAMP VAP MERC 230V 125W - SUCATA",
  },
  {
    codigo: "90000346",
    descricao: "POSTE CONCRETO CIRC10,5M 1800DAN/SUCATA",
  },
  {
    codigo: "90000347",
    descricao: "SUPORTE TRANSF ACO POST MADEIRA",
  },
  {
    codigo: "90000349",
    descricao: "POSTE CONCRETO CIRCULAR 12M 300DAN",
  },
  {
    codigo: "90000351",
    descricao: "ARMAÇÃO SEC AÇO 2 ESTRIBOS 310mm",
  },
  {
    codigo: "90000356",
    descricao: "POSTE CONCRETO CIRCULAR 12M 600DAN",
  },
  {
    codigo: "90000359",
    descricao: "MÃO FRANC PLANA ACO POSTE TIPO 1 SUCATA",
  },
  {
    codigo: "90000360",
    descricao: "SELA PARA CRUZETA DE MADEIRA E S/C",
  },
  {
    codigo: "90000362",
    descricao: "POSTE CONCRETO CIRC12,0M 1800DAN/SUCATA",
  },
  {
    codigo: "90000363",
    descricao: "MÃO FRANCESA PLANA - TIPO 2",
  },
  {
    codigo: "90000364",
    descricao: "SELA PARA CRUZETA DE AÇO",
  },
  {
    codigo: "90000365",
    descricao: "POSTE CONCRETO CIRC12,0M 1000DAN/SUCATA",
  },
  {
    codigo: "90000366",
    descricao: "MÃO FRANC PLANA ACO POSTE TIPO 3 SUCATA",
  },
  {
    codigo: "90000368",
    descricao: "POSTE CONCRETO CIRC14,0M 1000DAN/SUCATA",
  },
  {
    codigo: "90000369",
    descricao: "SUPORTE ESCADA ACO-CAR",
  },
  {
    codigo: "90000372",
    descricao: "GARFO OLH FOFO RD 112mm MP15-03 SUCATA",
  },
  {
    codigo: "90000376",
    descricao: "MÃO FRANC CANTON ACO POSTE TIPO 1 SUCATA",
  },
  {
    codigo: "90000379",
    descricao: "MÃO FRANC CANTON ACO POSTE TIPO 2 SUCATA",
  },
  {
    codigo: "90000380",
    descricao: "POSTE CONCRETO TUB 14,0M  400KG/SUCATA",
  },
  {
    codigo: "90000383",
    descricao: "GARFO DUP FOFO RD 12mm MP15-05 SUCATA",
  },
  {
    codigo: "90000384",
    descricao: "MAO FRANCESA PERFIL ACO 38X38X5X1971mm",
  },
  {
    codigo: "90000386",
    descricao: "POSTE CONCRETO TUB18,0M  600DAN/SUCATA",
  },
  {
    codigo: "90000387",
    descricao: "AFASTADOR ACO CARB  900mm 500mm SUCATA",
  },
  {
    codigo: "90000388",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 450mm",
  },
  {
    codigo: "90000389",
    descricao: "ARMACAO SEC POSTE MAD 1 ESTRIBO SUCATA",
  },
  {
    codigo: "90000390",
    descricao: "POSTE CONCRETO CIRC16,0M 1500DAN/SUCATA",
  },
  {
    codigo: "90000392",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 500mm",
  },
  {
    codigo: "90000393",
    descricao: "CRUZETA MADEIRA 15,0KV 2000mm SUCATA",
  },
  {
    codigo: "90000397",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 550mm",
  },
  {
    codigo: "90000400",
    descricao: "POSTE CONCRETO CIRC14,0M 600DAN/SUCATA",
  },
  {
    codigo: "90000401",
    descricao: "CRUZETA MADEIRA 0X6 5,0KV 2070mm SUCATA",
  },
  {
    codigo: "90000405",
    descricao: "CRUZETA MADEIRA 2X4 5,0KV 1930mm SUCATA",
  },
  {
    codigo: "90000408",
    descricao: "POSTE CONCRETO TUB 16,0M  600DAN/SUCATA",
  },
  {
    codigo: "90000419",
    descricao: "CRUZETA ACO CARB 2800mm SUCATA",
  },
  {
    codigo: "90000420",
    descricao: 'PARAFUSO SEXT  AÇO CARB BSW 3/8 " X1 "',
  },
  {
    codigo: "90000421",
    descricao: "CRUZETA ACO CARB 15,0KV 2000mm SUCATA",
  },
  {
    codigo: "90000422",
    descricao: "SUPORTE P/ INST BC EM ADAPTADOR",
  },
  {
    codigo: "90000424",
    descricao: "CRUZETA FOFO 15,0KV - SUCATA",
  },
  {
    codigo: "90000426",
    descricao: 'PARAFUSO SEXT AÇO CARB BSW 1/2 "X1.3/4 "',
  },
  {
    codigo: "90000429",
    descricao: "GRAMPO DE SUSP P/ CABO PRÉ-REUNIDO 70mm²",
  },
  {
    codigo: "90000430",
    descricao: "GRAMPO ACO CARBONO ISOLA CASTANHA SUCATA",
  },
  {
    codigo: "90000432",
    descricao: "PROLONG OLH-OLH FOFO RD 342mm SUCATA",
  },
  {
    codigo: "90000436",
    descricao: "LAÇO ROLDANA PARA COND. AL. 4 AWG",
  },
  {
    codigo: "90000441",
    descricao: "LAÇO ROLDANA PARA COND. AL. 1/0 AWG",
  },
  {
    codigo: "90000442",
    descricao: "PARAF ABA A CARB MTN M16X45,0mm-SUCATA",
  },
  {
    codigo: "90000445",
    descricao: "LAÇO ROLDANA COND. AL. 3/0AWG SUCATA",
  },
  {
    codigo: "90000446",
    descricao: "PARAF ABA A CARB MTN M16X70,0mm-SUCATA",
  },
  {
    codigo: "90000450",
    descricao: "LAÇO ROLDANA COND. AL. 635mm/336,4MCM",
  },
  {
    codigo: "90000452",
    descricao: "PARAFUSO CAB AB ZI 16X150mm M POR Q",
  },
  {
    codigo: "90000453",
    descricao: "ALÇA DISTRIB COND AL 4 AWG 445mm",
  },
  {
    codigo: "90000457",
    descricao: "PARAFUSO QUAD AÇO CARB M16 X 50 mm",
  },
  {
    codigo: "90000458",
    descricao: "PARA-RAIOS DIST POLIM 10KA12,0KV",
  },
  {
    codigo: "90000461",
    descricao: "LAÇO TOPO COND. AL. 1/0 AWG 750mm SUCATA",
  },
  {
    codigo: "90000463",
    descricao: "PARAFUSO QUAD AÇO CARB M16 X 125 mm",
  },
  {
    codigo: "90000464",
    descricao: "LAÇO TOPO COND AL 336,4 MCM 840mmSUCATA",
  },
  {
    codigo: "90000465",
    descricao: "SUPORTE P/ INST BF E PR EM POSTE",
  },
  {
    codigo: "90000466",
    descricao: "ESTRIBO CONECTOR COBRE REDE DIST SUCATA",
  },
  {
    codigo: "90000467",
    descricao: "PARAFUSO CAB Q ZI 16X250mm M POR Q",
  },
  {
    codigo: "90000472",
    descricao: "PARAFUSO CAB Q ZI 16X300mm POR Q RP",
  },
  {
    codigo: "90000477",
    descricao: "PARAF QUA A CARB MTN M16X400,0mm-SUCATA",
  },
  {
    codigo: "90000479",
    descricao: "LAÇO LATERAL DP COND. AL. 1/0AWG SUCATA",
  },
  {
    codigo: "90000480",
    descricao: "BALANCIM PRE-REUNIDO FOFO SUCATA",
  },
  {
    codigo: "90000482",
    descricao: "PARAFUSO CAB Q ZI 16X500mm M POR Q",
  },
  {
    codigo: "90000484",
    descricao: "PARAFUSO CAB Q ZI 16X150mm M POR Q",
  },
  {
    codigo: "90000485",
    descricao: "LAÇO LATERAL DP P/ COND ALUM 336,4 MCM",
  },
  {
    codigo: "90000486",
    descricao: "PORCA OLH ACO CARB ZIN MTN M16 - SUCATA",
  },
  {
    codigo: "90000490",
    descricao: "PORCA QUA ACO CARB MTN M16 - SUCATA",
  },
  {
    codigo: "90000498",
    descricao: "CHAVE FUSÍVEL DISTRIB 15,0KV 10,0KA 100A",
  },
  {
    codigo: "90000499",
    descricao: "LAÇO LATERAL COND. AL. 635mm 4AWG/SUCATA",
  },
  {
    codigo: "90000508",
    descricao: "LÂMPADA VAP. MERC E27 ELIPTICO 220V 125W",
  },
  {
    codigo: "90000510",
    descricao: "ADAPTADOR BANDEIRA  TIPO 1",
  },
  {
    codigo: "90000513",
    descricao: "LÂMPADA VAP. SÓDIO E40 TUBULAR 220V 150W",
  },
  {
    codigo: "90000514",
    descricao: "LÂMPADA VAP. SÓDIO E40 TUBULAR 220V 250W",
  },
  {
    codigo: "90000522",
    descricao: "CONEXAO CUNH III COBR RAMAL - SUCATA",
  },
  {
    codigo: "90000540",
    descricao: "SAPATILHA CABO ACO 9,5mm 3160DAN",
  },
  {
    codigo: "90000545",
    descricao: "TRAFO DIST SUBT 3F OLEO 500KVA 15KV 220V",
  },
  {
    codigo: "90000546",
    descricao: "ABRAÇADEIRA NAILON MP-03-06 SUCATA",
  },
  {
    codigo: "90000558",
    descricao: "ESPAÇADOR CABO POLIM MP-19-01 SUCATA",
  },
  {
    codigo: "90000567",
    descricao: "LUMINÁRIA ABERTA  I.P.1A MP-16-05 SUCATA",
  },
  {
    codigo: "90000569",
    descricao: "TUBO COND AÇO 114,3(COMPR)X4,5(ESP)MM",
  },
  {
    codigo: "90000575",
    descricao: "CONECTOR GRAMPO AL 336,40MCM 3/0AWG",
  },
  {
    codigo: "90000621",
    descricao: "CONECTOR CUNHA CU 10,11mm 4,66 mm",
  },
  {
    codigo: "90000651",
    descricao: "TRAFO A#REO TRIFAS 30 KVA GRUPO N 15KV",
  },
  {
    codigo: "90000653",
    descricao: "TRAFO A#REO TRIFAS 75 KVA GRUPO N 15KV",
  },
  {
    codigo: "90000656",
    descricao: "TRAFO A#REO TRIFAS 300 KVA GRUPO N 15KV",
  },
  {
    codigo: "90000660",
    descricao: "TRAFO DIS TRI-45KVA-24,2KV-220/127V  -O",
  },
  {
    codigo: "90000662",
    descricao: "TRAFO DIS TRI-150KVA-24,2KV-220/127V -O",
  },
  {
    codigo: "90000696",
    descricao: "TRAFO AEREO TRI 112,5KVA GRUPO M 15KV",
  },
  {
    codigo: "90000745",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 200,00A 500mm',
  },
  {
    codigo: "90000783",
    descricao: "TRAFO A#REO TRIFAS 225 KVA GRUPO M  15KV",
  },
  {
    codigo: "90000800",
    descricao: "TRAFO AÉREO MONOFA 15KV BANCO CAP 1,5KVA",
  },
  {
    codigo: "90000810",
    descricao: "CORDOALHA AÇO CARB 6,4mm 7F MR/SM CL.A",
  },
  {
    codigo: "90000811",
    descricao: "CRUZETA  AÇO 2400 mm",
  },
  {
    codigo: "90000830",
    descricao: "SUPORTE INSTAL EQUIP TIPO III DIAM 320mm",
  },
  {
    codigo: "90000835",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 6,00A 500mm',
  },
  {
    codigo: "90000841",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 8,00A 500mm',
  },
  {
    codigo: "90000845",
    descricao: "SUPORTE TRANSF ACO POST CON CIR 255mm",
  },
  {
    codigo: "90000846",
    descricao: "SUPORTE TRANSF ACO POST CON CIR 225mm",
  },
  {
    codigo: "90000854",
    descricao: 'ELO FUSÍVEL DISTRIB "H" 2,00A 500mm',
  },
  {
    codigo: "90000855",
    descricao: 'ELO FUSÍVEL DISTRIB "H" 3,00A 500mm',
  },
  {
    codigo: "90000856",
    descricao: 'ELO FUSÍVEL DISTRIB "H" 5,00A 500mm',
  },
  {
    codigo: "90000857",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 25,00A 500mm',
  },
  {
    codigo: "90000872",
    descricao: "SUPORTE TRANSF ACO POST CON CIR 255MM",
  },
  {
    codigo: "90000900",
    descricao: "PINO TOPO ACO 25mm 389mm",
  },
  {
    codigo: "90000921",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 20,00A 500mm',
  },
  {
    codigo: "90000930",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 10A 500mm',
  },
  {
    codigo: "90000931",
    descricao: "SUPORTE ACO REDE DIST TP 3 225mm SUCATA",
  },
  {
    codigo: "90000942",
    descricao: 'ELO FUSÍVEL DISTRIB "H" 1,00A 500mm',
  },
  {
    codigo: "90000975",
    descricao: "SUPORTE ACO REDE DIST TP 2 285mm SUCATA",
  },
  {
    codigo: "90000976",
    descricao: "ELO FUSIVEL DIS K 50A 500mm INTERRUPÇÃO",
  },
  {
    codigo: "90000978",
    descricao: "TRAFO DIS MONO 5KVA-15KV-240/120-G SUB",
  },
  {
    codigo: "90000979",
    descricao: "TRAFO A#REO MONOFAS 15KVA GRUPO G 15KV",
  },
  {
    codigo: "90000984",
    descricao: "CAPACITOR POTÊNCIA 7,62KV 200KVAR 15KV",
  },
  {
    codigo: "90000985",
    descricao: "SUPORTE TRANSF ACO POST CON CIR 285mm",
  },
  {
    codigo: "90000990",
    descricao: "SUPORTE ACO REDE DIST  TP 2 255mm SUCATA",
  },
  {
    codigo: "90001000",
    descricao: "SUPORTE ACO REDE DIST  TP 2 225mm SUCATA",
  },
  {
    codigo: "90001022",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 12A 500mm',
  },
  {
    codigo: "90001081",
    descricao: "SUPORTE ACO REDE DIST TP4 255mm SUCATA",
  },
  {
    codigo: "90001082",
    descricao: "ELO FUSIVEL DIS K 15A 500mm INTERRUPÇÃO",
  },
  {
    codigo: "90001110",
    descricao: "CAPAC POTENCIA 7,62KV 100KVAR 15KV",
  },
  {
    codigo: "90001141",
    descricao: "ELO FUSIVEL DIS K 40A 500mm INTERRUPÇÃO",
  },
  {
    codigo: "90001142",
    descricao: "SUPORTE ACO REDE DIST  T4 225mm SUCATA",
  },
  {
    codigo: "90001460",
    descricao: "CHAVE FUS RELIG C 15KV 100A 2KA 3 OP",
  },
  {
    codigo: "90001488",
    descricao: "CABO ISOL CU 0,6/1KV  PVC 3X70mm² PRBRVM",
  },
  {
    codigo: "90001566",
    descricao: "TRAFO DIST SUBT 3F OLEO 300KVA 15KV 220V",
  },
  {
    codigo: "90001579",
    descricao: "CABO ISOL CU PVC/A 1X50mm² 0,6/1KV",
  },
  {
    codigo: "90001580",
    descricao: "CABO POT CU CL4 2X2,5mm 0,45/0,75KV PT",
  },
  {
    codigo: "90001605",
    descricao: "CABO ISOL  CU PVC/A 1X16MM² 0,6/1KV",
  },
  {
    codigo: "90001629",
    descricao: "CABO POT CU CL2 1X35mmÝ 0,6/1KV PT",
  },
  {
    codigo: "90001930",
    descricao: "CABO ISOL 0,6/1 KV COBR 1X16mm² EPR",
  },
  {
    codigo: "90001935",
    descricao: "CABO ISOL CU EPR PR 0,75KV 10MM2",
  },
  {
    codigo: "90002462",
    descricao: "CABO ISOL CU  0,6/1KV  PVC 1X70,00MM2 ",
  },
  {
    codigo: "90002642",
    descricao: "CONECTOR CUNHA CN1",
  },
  {
    codigo: "90002680",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 140A',
  },
  {
    codigo: "90002726",
    descricao: "SUPORTE ACO REDE DIST TP 4 285mm SUCATA",
  },
  {
    codigo: "90002744",
    descricao: 'ADAPTADOR "L"  PARA TERMINAL SUCATA',
  },
  {
    codigo: "90002785",
    descricao: 'PLACA ADV TORRES "PERIGO NAO SUBA"',
  },
  {
    codigo: "90003058",
    descricao: "POSTE CONCRETO TUBULAR 20,0M 600DAN",
  },
  {
    codigo: "90003059",
    descricao: "POSTE CONCRETO TUBULAR 15,0M 400DAN",
  },
  {
    codigo: "90003060",
    descricao: "POSTE CONCRETO TUBULAR 22,0M 1200DAN",
  },
  {
    codigo: "90003181",
    descricao: "SUPORTE P/ INST CF NA HORIZONTAL",
  },
  {
    codigo: "90003191",
    descricao: "LAMINA DESLIG 15KV 300A 285mm",
  },
  {
    codigo: "90003191",
    descricao: "LÂMINA SECCION 300A 15kV P/ CHAVE FUS.",
  },
  {
    codigo: "90003192",
    descricao: "BRAÇO TIPO C 13,8KV.",
  },
  {
    codigo: "90003281",
    descricao: 'ELO FUSÍVEL DISTRIB "K" 80A',
  },
  {
    codigo: "90003351",
    descricao: "ELO FUSIVEL DIS K 65A 500mm INTERRUPÇÃO",
  },
  {
    codigo: "90003371",
    descricao: "CONECTOR CUNHA CN6",
  },
  {
    codigo: "90003372",
    descricao: "CONECTOR CUNHA AL 3/0 1/0 AWG 70mm² TP 7",
  },
  {
    codigo: "90003401",
    descricao: "ISOLADOR TIPO BASTÃO POLIMÉRICO 15KV",
  },
  {
    codigo: "90003421",
    descricao: "RELÉ FOTOELETRÔNICO P/ ILUMIN. PÚBLICA",
  },
  {
    codigo: "90003431",
    descricao: "TRAFO AEREO MONO 7,5 KVA GRUPO G/B 15KV",
  },
  {
    codigo: "90003441",
    descricao: "TRAFO DIST 1F 37,5KVA G 15KV 240/120V",
  },
  {
    codigo: "90003651",
    descricao: "ISOLADOR DE PINO POLIMÉRICO 34,5 KV",
  },
  {
    codigo: "90003700",
    descricao: "CORDOALHA AÇO CARB 9,5mm 7F CL.A MR/SM",
  },
  {
    codigo: "90003787",
    descricao: "GRAMPO SUSP P/ CABO PRÉ-REUNIDO 120mm²",
  },
  {
    codigo: "90003814",
    descricao: "TRAFO DIST 3F 15KVA M 15KV 220/127V",
  },
  {
    codigo: "90003815",
    descricao: "TRAFO DIS TRI-30KVA-15KV-220/127V - M",
  },
  {
    codigo: "90003816",
    descricao: "TRAFO DIS TRI-45KVA-15KV-220/127V - M",
  },
  {
    codigo: "90003820",
    descricao: "TRAFO DIS TRI-75KVA-15KV-220/127V - M",
  },
  {
    codigo: "90003822",
    descricao: "TRAFO DIS TRI-150KVA-15KV-220/127V - M",
  },
  {
    codigo: "90003823",
    descricao: "TRAFO DIS MONO 10KVA-15KV-240/120-G SUB",
  },
  {
    codigo: "90003824",
    descricao: "TRAFO DIST 1F 25KVA G 15KV 240/120V",
  },
  {
    codigo: "90003825",
    descricao: "TRAFO DIST 1F 50KVA G 15KV 240/120V",
  },
  {
    codigo: "90003826",
    descricao: "TRAFO DIS MONO 100KVA-15KV-240/120-F SUB",
  },
  {
    codigo: "90003827",
    descricao: "TRAFO DIST 3F 300KVA M 15KV 220/127V",
  },
  {
    codigo: "90003861",
    descricao: "LAÇO PREFORMADO  MENSAGEIRO -SUCATA",
  },
  {
    codigo: "90004031",
    descricao: "SEPARADOR FASE POLIMÉRICO 13,8VK  SUCATA",
  },
  {
    codigo: "90004032",
    descricao: "CONECTOR CUNHA CN3",
  },
  {
    codigo: "90004101",
    descricao: "TERMINAL EXT. CABO ISOL. 8,7/15KV 240mm²",
  },
  {
    codigo: "90004102",
    descricao: "TERMINAL INT. 12/20KV 240mm SUCATA",
  },
  {
    codigo: "90004112",
    descricao: "TRAFO DIST 1F 15KVA G 15KV 240/120V",
  },
  {
    codigo: "90004173",
    descricao: "CHAVE SECC BY-PASS 15KV 630A-ESQU/DIREIT",
  },
  {
    codigo: "90004191",
    descricao: "SUPORTE TIPO Z - SUCATA",
  },
  {
    codigo: "90004192",
    descricao: "SUPORTE AFASTADOR H. 13,8KV SUCATA",
  },
  {
    codigo: "90004204",
    descricao: "BRAÇO TIPO L 13,8KV - SUCATA",
  },
  {
    codigo: "90004211",
    descricao: "CHAVE SECC BY-PASS 15KV 630A-DIR/ESQUER.",
  },
  {
    codigo: "90004281",
    descricao: "CABO NU ALUM  CA 1/0AWG - SUCATA",
  },
  {
    codigo: "90004283",
    descricao: "CABO NU ALUM CLASSE AA 336,40MCM-SUCATA",
  },
  {
    codigo: "90004284",
    descricao: "CABO NU ALUM  336,40MCM - SUCATA",
  },
  {
    codigo: "90004285",
    descricao: "CABO NU AL CA BITOLA 4AWG - SUCATA",
  },
  {
    codigo: "90004291",
    descricao: "CABO NU AL CAA BITOLA 4AWG - SUCATA",
  },
  {
    codigo: "90004301",
    descricao: "CABO NU ALUM  CLASSE AA 3/0 AWG-SUCATA",
  },
  {
    codigo: "90004302",
    descricao: "CABO NU AL CA BITOLA 3/0AWG - SUCATA",
  },
  {
    codigo: "90004303",
    descricao: "CABO NU ALUM CLASSE CAA 1/0AWG - SUCATA",
  },
  {
    codigo: "90004304",
    descricao: "CABO NU COBRE  2AWG - SUCATA",
  },
  {
    codigo: "90004309",
    descricao: "FIO NU CU MEIO DURA 1X16,00mm² - SUCATA",
  },
  {
    codigo: "90004343",
    descricao: "CANTONEIRA AUX. P/ BRAÇO TIPO C SUCATA",
  },
  {
    codigo: "90004344",
    descricao: "BRAÇO ANTI-BALANÇO 13,8KV",
  },
  {
    codigo: "90004345",
    descricao: "ESTRIBO PARA BRAÇO TIPO L - SUCATA",
  },
  {
    codigo: "90004346",
    descricao: "ISOLADOR PINO POLIMÉR 13,8KV - SUCATA",
  },
  {
    codigo: "90004347",
    descricao: "SUPORTE HORIZONTAL 13,8KV - SUCATA",
  },
  {
    codigo: "90004349",
    descricao: "ANEL  AMARRAÇÃO P/ ISOLADOR PINO -SUCATA",
  },
  {
    codigo: "90004350",
    descricao: "COBERTURA PROTETORA PARA PARA-RAIOS",
  },
  {
    codigo: "90004351",
    descricao: "BRAÇO LUMINÁRIA BPD ( DUPLO ) - SUCATA",
  },
  {
    codigo: "90004410",
    descricao: "CABO E ISO CU PVC BWF 25mm² 750V PR",
  },
  {
    codigo: "90004411",
    descricao: "CABO E NU CAA 266,8MCM 26/7F PARTRIDGE",
  },
  {
    codigo: "90004413",
    descricao: "CABO E COBERTO POLIM CA 50mm² 6F BLOQ",
  },
  {
    codigo: "90004416",
    descricao: "CABO E ISO CU PVC BWF 120mm² 750V PR",
  },
  {
    codigo: "90004419",
    descricao: "CABO E ISO CU PVC BWF 50mm² 750V PR",
  },
  {
    codigo: "90004420",
    descricao: "CABO E ISO CU PVC BWF 70MM2 750V PR",
  },
  {
    codigo: "90004421",
    descricao: "CABO MULT AU SUS AL XLPE CA1X16+16MM²",
  },
  {
    codigo: "90004422",
    descricao: "CABO MULT AU SUS AL XLPE CA2X16+16mm²",
  },
  {
    codigo: "90004425",
    descricao: "CABO MULT AU SUS AL XLPE CA2X35+35mm²",
  },
  {
    codigo: "90004427",
    descricao: "CABO MULT AU SUS AL XLPE CA2X70+70mm²CAL",
  },
  {
    codigo: "90004428",
    descricao: "CABO MULT AU SUS AL XLPE CA3X16+16mm²",
  },
  {
    codigo: "90004433",
    descricao: "CABO E POT BT CU PVC/A 1X35MM2 1KV",
  },
  {
    codigo: "90004434",
    descricao: "CABO E NU CA 2AWG 7F IRIS",
  },
  {
    codigo: "90004435",
    descricao: "CABO E NU CA 4/0AWG 7F OXILIP",
  },
  {
    codigo: "90004436",
    descricao: "CABO E NU CAA 2AWG 6/1F SPARROW",
  },
  {
    codigo: "90004438",
    descricao: "CABO E NU CAA 4/0AWG 6/1F PENGUIN",
  },
  {
    codigo: "90004439",
    descricao: "FIO E ISO AL XLPE 1X10mm² 600V",
  },
  {
    codigo: "90004440",
    descricao: "CABO E POT BT CU PVC/A 1X16MM2 1KV",
  },
  {
    codigo: "90004453",
    descricao: "FIO AMARRACAO NU AL RECOZIDO 4AWG",
  },
  {
    codigo: "90004455",
    descricao: "FITA AMARRACAO AL 1X10MM",
  },
  {
    codigo: "90004463",
    descricao: "CABO E POT BT CU XLPE 1X120MM2 1KV",
  },
  {
    codigo: "90004464",
    descricao: "CABO E POT BT CU XLPE 1X240MM2 1KV",
  },
  {
    codigo: "90004466",
    descricao: "CABO E POT BT CU XLPE 1X70MM2 1KV",
  },
  {
    codigo: "90004469",
    descricao: "CABO POT CU CL2 2X2,5MM 1KV PT",
  },
  {
    codigo: "90004478",
    descricao: "CABO MULT AU SUS AL XLPE CA3X35+35mm²",
  },
  {
    codigo: "90004482",
    descricao: "CABO E NU CAA 556,5MCM 26/7F DOVE",
  },
  {
    codigo: "90004490",
    descricao: "CABO E COBERTO ANTI-FURTO CU XLPE 1X6MM²",
  },
  {
    codigo: "90004491",
    descricao: "CABO E POT BT CU PVC/A 2X1,5MM2 1KV BLIN",
  },
  {
    codigo: "90004499",
    descricao: "CABO E ISO CU PVC BWF 1,5mm² 750V PR",
  },
  {
    codigo: "90004510",
    descricao: "TRANSF DIS 1F 10KVA 7967-254/127V FN BL",
  },
  {
    codigo: "90004511",
    descricao: "TRANSF DIS 1F 15KVA 7967-254/127V FN BL",
  },
  {
    codigo: "90004512",
    descricao: "TRANSF DIS 1F 25KVA 7967-254/127V FN BL",
  },
  {
    codigo: "90004513",
    descricao: "TRANSF DIS 1F 37,5KVA 7967-254/127V BL",
  },
  {
    codigo: "90004514",
    descricao: "TRANSF DIS 1F 5KVA 7967-254/127V 6D",
  },
  {
    codigo: "90004515",
    descricao: "TRAFO DIST 3F 30KVA N 15KV 380/220V",
  },
  {
    codigo: "90004516",
    descricao: "TRAFO DIS AP TRI 45KVA-15KV-220/127V",
  },
  {
    codigo: "90004532",
    descricao: "TRANSF DIS 1F 5KVA 7967-254/127V",
  },
  {
    codigo: "90004533",
    descricao: "TRAFO DIST 3F 112,5KVA N 15KV 380/220V",
  },
  {
    codigo: "90004534",
    descricao: "TRANSF DIS 3F 15KVA 13800-220/127V 5D",
  },
  {
    codigo: "90004535",
    descricao: "TRAFO DIST 3F 45KVA N 15KV 380/220V",
  },
  {
    codigo: "90004536",
    descricao: "TRAFO DIST 3F 75KVA N 15KV 380/220V",
  },
  {
    codigo: "90004537",
    descricao: "TRAFO DIST 3F 225KVA M 15KV 220/127V",
  },
  {
    codigo: "90004541",
    descricao: "TRANSF DIS 3F 45KVA 14500-220/127V",
  },
  {
    codigo: "90004546",
    descricao: "TRANSF DIS 3F 30KVA 13800-220/127V 5D BL",
  },
  {
    codigo: "90004547",
    descricao: "TRANSF DIS 3F 45KVA 13800-220/127V 5D BL",
  },
  {
    codigo: "90004548",
    descricao: "TRANSF DIS 3F 75KVA 13800-220/127V BL",
  },
  {
    codigo: "90004549",
    descricao: "TRANSF DIS 3F 112,5KVA 13800-220/127V BL",
  },
  {
    codigo: "90004551",
    descricao: "TRAFO DIS TRI30KV36,2KV220/127V-P RETIRA",
  },
  {
    codigo: "90004552",
    descricao: "TRAFO DIST 3F 45KVA P 36,2KV 220/127V",
  },
  {
    codigo: "90004553",
    descricao: "TRANSF DIS 3F 150KVA 13800-220/127 BL",
  },
  {
    codigo: "90004555",
    descricao: "TRANSF DIS 3F 300KVA 13800-220/127 5D BL",
  },
  {
    codigo: "90004556",
    descricao: "TRAFO DIS MONO 10KVA-36,2KV-254/127V-K S",
  },
  {
    codigo: "90004557",
    descricao: "TRAFO DIST 1F 15KVA K 36,2KV 254/127V",
  },
  {
    codigo: "90004564",
    descricao: "DISJUNTOR P VOL àLEO 15KV 630A CT 30 A.",
  },
  {
    codigo: "90004565",
    descricao: "CAPACITOR POT MONO 200KVAR 7960V 95KV",
  },
  {
    codigo: "90004567",
    descricao: "CHAVE FUS DIS C 38KV 300A 150KV 5KA",
  },
  {
    codigo: "90004570",
    descricao: "CHAVE FUS RELIG C 25,8KV 100A 125KV 3 OP",
  },
  {
    codigo: "90004572",
    descricao: "ISOLADOR DISCO VID 15KV 160-175 GO ST160",
  },
  {
    codigo: "90004573",
    descricao: "ISOLADOR PINO POR MONOC 15KV P2-95-1",
  },
  {
    codigo: "90004574",
    descricao: "ISOLADOR SUSP COMP POLIM 15KV GO 4AL",
  },
  {
    codigo: "90004575",
    descricao: "ISOLADOR PINO POLIMÉR 13,8KV - SUCATA",
  },
  {
    codigo: "90004579",
    descricao: "ISOLADOR PINO POR MULTIC 46KV",
  },
  {
    codigo: "90004593",
    descricao: "ISOLADOR PILAR POR 15KV 110KV PL056 3/4",
  },
  {
    codigo: "90004595",
    descricao: 'ISOLADOR PILAR POR 35KV 170KV R3/4"PL-',
  },
  {
    codigo: "90004596",
    descricao: "ISOLADOR SUSP COMP POLIM 38 KV GO 9 ALET",
  },
  {
    codigo: "90004600",
    descricao: "CINTA POSTE CIRCULAR 180mm ACO",
  },
  {
    codigo: "90004601",
    descricao: "CINTA POSTE CIRCULAR 190mm ACO",
  },
  {
    codigo: "90004602",
    descricao: "CINTA POSTE CIRCULAR 200mm ACO",
  },
  {
    codigo: "90004603",
    descricao: "CINTA POSTE CIRCULAR 210mm ACO",
  },
  {
    codigo: "90004604",
    descricao: "CINTA POSTE CIRCULAR 220mm ACO",
  },
  {
    codigo: "90004605",
    descricao: "CINTA POSTE CIRCULAR 230mm ACO",
  },
  {
    codigo: "90004606",
    descricao: "CINTA POSTE CIRCULAR B-24 AC 240mm",
  },
  {
    codigo: "90004607",
    descricao: "CINTA POSTE CIRCULAR 250mm ACO",
  },
  {
    codigo: "90004608",
    descricao: "CINTA POSTE CIRCULAR 260mm ACO",
  },
  {
    codigo: "90004609",
    descricao: "CINTA POSTE CIRCULAR 270mm ACO",
  },
  {
    codigo: "90004610",
    descricao: "CINTA POSTE CIRCULAR B-28 AC 280mm",
  },
  {
    codigo: "90004611",
    descricao: "CINTA POSTE CIRCULAR 290mm ACO",
  },
  {
    codigo: "90004612",
    descricao: "CINTA POSTE CIRCULAR 300mm ACO",
  },
  {
    codigo: "90004613",
    descricao: "CINTA POSTE CIRCULAR 310mm ACO",
  },
  {
    codigo: "90004614",
    descricao: "CINTA POSTE CIRCULAR 320mm ACO",
  },
  {
    codigo: "90004615",
    descricao: "CINTA POSTE CIRCULAR 340mm ACO",
  },
  {
    codigo: "90004616",
    descricao: "CINTA POSTE CIRCULAR 360mm ACO",
  },
  {
    codigo: "90004617",
    descricao: "CINTA POSTE CIRCULAR 380mm ACO",
  },
  {
    codigo: "90004618",
    descricao: "CHAPA AÇO ESTAI 76MM",
  },
  {
    codigo: "90004623",
    descricao: "GANCHO OLHAL AÇO 80mm 5000DAN",
  },
  {
    codigo: "90004624",
    descricao: "HASTE ANCORA ACO 16MM 2400MM 5000DAN",
  },
  {
    codigo: "90004627",
    descricao: "OLHAL PARAFUSO ACO 16mm 5000DAN F-1425",
  },
  {
    codigo: "90004630",
    descricao: "SUPORTE TRANSF ACO POST CON CIR 270mm",
  },
  {
    codigo: "90004631",
    descricao: "GRAMPO U CERCA ACO 3,5X30mm",
  },
  {
    codigo: "90004637",
    descricao: "ARMAÇÃO SEC AL 1 ESTRIBO 110MM",
  },
  {
    codigo: "90004644",
    descricao: "HASTE ANCORA ACO 16MM 1600MM 3200DAN",
  },
  {
    codigo: "90004653",
    descricao: "PINO TOPO AÇO 35MM 419MM",
  },
  {
    codigo: "90004668",
    descricao: "CINTA POSTE CIRCULAR AL 160mm",
  },
  {
    codigo: "90004669",
    descricao: "CINTA POSTE CIRCULAR 400mm ACO",
  },
  {
    codigo: "90004684",
    descricao: "CINTA POSTE CIRCULAR B-16 AC 160mm",
  },
  {
    codigo: "90004687",
    descricao: "PINO ISOL AÇO CRUZ A TRAV 85MM",
  },
  {
    codigo: "90004692",
    descricao: "PINO ISOL AÇO CRUZ A TRAV 169mm",
  },
  {
    codigo: "90004699",
    descricao: "LAÇO PREF CAB AL LAT CAA 2AWG 60mm",
  },
  {
    codigo: "90004702",
    descricao: "LAÇO PREF CAB AL LAT DP CAA 2AWG 60MM",
  },
  {
    codigo: "90004704",
    descricao: "LAÇO ROLDANA P/CABO AL CAA2AWG CAL35mm²",
  },
  {
    codigo: "90004705",
    descricao: "LAÇO PREF CAB AL TOP CA CAA 4/0AWG 60mm",
  },
  {
    codigo: "90004707",
    descricao: "LAÇO PREF CAB AL TOP CAA4 60mm UTC-1102",
  },
  {
    codigo: "90004724",
    descricao: "ALCA PREF DIST CAA  336,4 AWG",
  },
  {
    codigo: "90004727",
    descricao: "ALCA PREF SERVICO 50 MM",
  },
  {
    codigo: "90004728",
    descricao: "ALÇA SERVIÇO PREF CA 4AWG 25mm²",
  },
  {
    codigo: "90004731",
    descricao: "ALÇA SERVIÇO PREF CA 70mm²",
  },
  {
    codigo: "90004741",
    descricao: "LAÇO TOPO DUPLO PREF CAA  2AWG 60mm",
  },
  {
    codigo: "90004742",
    descricao: "LAÇO TOPO DUPLO PREF CA CAA 4/0AWG SUCAT",
  },
  {
    codigo: "90004743",
    descricao: "LAÇO TOPO DUPLO PREF CAA 336,4MCM SUCATA",
  },
  {
    codigo: "90004744",
    descricao: "LAÇO TOPO DUPLO PREF CAA 4AWG SUCATA",
  },
  {
    codigo: "90004746",
    descricao: "ALÇA PREF CABO COBERTO CA 185mm² -15KV",
  },
  {
    codigo: "90004753",
    descricao: "ALÇA PREF DIST CA CAA 1/0AWG",
  },
  {
    codigo: "90004754",
    descricao: "ALCA PREF DIST CA CAA 2AWG",
  },
  {
    codigo: "90004755",
    descricao: "ALÇA PREF DIS CA CAA 4/0AWG VERM DG4547H",
  },
  {
    codigo: "90004757",
    descricao: "ALÇA PREF DIS CABO AÇO 4,87MM PR GDE1158",
  },
  {
    codigo: "90004758",
    descricao: 'ALCA ESTAI PREF P/CABO ACO 9,5mm(3/8")',
  },
  {
    codigo: "90004759",
    descricao: "ALÇA SERVIÇO PREF CA 2AWG 35mm²",
  },
  {
    codigo: "90004778",
    descricao: "CONECTOR CUNHA CN52",
  },
  {
    codigo: "90004782",
    descricao: "CONECTOR CUNHA CN10",
  },
  {
    codigo: "90004792",
    descricao: "CONECTOR CUNHA RAMAL TIPO VIII",
  },
  {
    codigo: "90004821",
    descricao: "CONECTOR TIPO GRAMPO LINHA VIVA",
  },
  {
    codigo: "90004912",
    descricao: "CONECTOR PERF 16~95X1,5~10mm",
  },
  {
    codigo: "90004990",
    descricao: "CONECTOR D P FEND CU 10-35 mm² S/ESP",
  },
  {
    codigo: "90005206",
    descricao: "POSTE CONCRETO CIRCULAR 10M 600DAN",
  },
  {
    codigo: "90005207",
    descricao: "POSTE CONCRETO CIRCULAR 11M 1000DAN",
  },
  {
    codigo: "90005208",
    descricao: "POSTE CONCRETO CIRCULAR 11M 300DAN",
  },
  {
    codigo: "90005209",
    descricao: "POSTE CONCRETO CIRCULAR 11M 600DAN",
  },
  {
    codigo: "90005210",
    descricao: "POSTE CONCRETO CIRCULAR 13M 1000DAN",
  },
  {
    codigo: "90005211",
    descricao: "POSTE CONCRETO CIRCULAR 9M 150DAN",
  },
  {
    codigo: "90005212",
    descricao: "POSTE CONCRETO CIRCULAR 9M 300DAN",
  },
  {
    codigo: "90005213",
    descricao: "POSTE CONCRETO CIRCULAR 9M 600DAN C-19",
  },
  {
    codigo: "90005214",
    descricao: "POSTE CONCRETO DT TIPO B-2 10M 1000DAN",
  },
  {
    codigo: "90005216",
    descricao: "POSTE CONCRETO DT TIPO B 11M 300DAN",
  },
  {
    codigo: "90005217",
    descricao: "POSTE CONCRETO DT TIPO B 11M 600DAN",
  },
  {
    codigo: "90005218",
    descricao: "POSTE CONCRETO DT TIPO B 12M 300DAN",
  },
  {
    codigo: "90005219",
    descricao: "POSTE CONCRETO DT TIPO B 12M 600DAN",
  },
  {
    codigo: "90005227",
    descricao: "POSTE CONCRETO DT TIPO B 9M 600DAN",
  },
  {
    codigo: "90005228",
    descricao: "POSTE CONCRETO DT TIPO D 10M 150DAN",
  },
  {
    codigo: "90005229",
    descricao: "POSTE CONCRETO DT TIPO D 7M 100DAN",
  },
  {
    codigo: "90005232",
    descricao: "POSTE CONCRETO CIRCULAR 12M 200DAN",
  },
  {
    codigo: "90005235",
    descricao: "POSTE CONCRETO DT TIPO B 11M 1000DAN",
  },
  {
    codigo: "90005236",
    descricao: "POSTE CONCRETO DT TIPO B 11M 800DAN",
  },
  {
    codigo: "90005237",
    descricao: "POSTE CONCRETO DT TIPO D 10,5M 150DAN SUCATA",
  },
  {
    codigo: "90005238",
    descricao: "POSTE CONCRETO DT TIPO D 11M 250DAN",
  },
  {
    codigo: "90005239",
    descricao: "POSTE CONCRETO DT TIPO D 12M 200DAN",
  },
  {
    codigo: "90005240",
    descricao: "POSTE CONCRETO DT TIPO D 8,5M 150DAN",
  },
  {
    codigo: "90005242",
    descricao: "POSTE CONCRETO CIRCULAR 11M 1500DAN",
  },
  {
    codigo: "90005243",
    descricao: "POSTE CONCRETO CIRCULAR 15M 1000DAN",
  },
  {
    codigo: "90005244",
    descricao: "POSTE CONCRETO DT TIPO B 7M 300DAN",
  },
  {
    codigo: "90005246",
    descricao: "POSTE PADRAO ENTRADA MR1 10M 300DAN",
  },
  {
    codigo: "90005248",
    descricao: "POSTE CONCRETO CIRCULAR 13M 600DAN",
  },
  {
    codigo: "90005268",
    descricao: "PARAFUSO CAB Q ZI 16X200mm M POR Q",
  },
  {
    codigo: "90005269",
    descricao: "PARAFUSO CAB Q ZI 16X350mm M POR Q",
  },
  {
    codigo: "90005270",
    descricao: "PARAFUSO CAB Q ZI 16X450mm M POR Q",
  },
  {
    codigo: "90005271",
    descricao: "PARAFUSO CAB Q ZI 16X550mm M POR Q",
  },
  {
    codigo: "90005274",
    descricao: "PARAFUSO CAB SE BRONZE M12X50mm AR POR",
  },
  {
    codigo: "90005276",
    descricao: "PORCA QUAD ZI 16mm M CHANFRO",
  },
  {
    codigo: "90005277",
    descricao: "ARRUELA LISA QUAD ZI 50X3MM DI 18MM",
  },
  {
    codigo: "90005288",
    descricao: "PARAFUSO CAB AB AL 16X150mm M POR Q",
  },
  {
    codigo: "90005289",
    descricao: "PARAFUSO CAB AB AL 16X45mm M POR Q",
  },
  {
    codigo: "90005290",
    descricao: "PARAFUSO CAB AB AL 16X70mm M POR Q",
  },
  {
    codigo: "90005291",
    descricao: "PARAFUSO CAB Q AL 16X250mm M POR Q",
  },
  {
    codigo: "90005292",
    descricao: "PARAFUSO CAB Q AL 16X300mm M POR Q",
  },
  {
    codigo: "90005294",
    descricao: "PARAFUSO CAB Q AL 16X500mm M POR Q",
  },
  {
    codigo: "90005322",
    descricao: "ARRUELA LISA QUAD ZI 35X4,7MM DI 14MM",
  },
  {
    codigo: "90005333",
    descricao: "CORDOALHA AÇO CARB 6,4mm 7F MR/SM CL.B",
  },
  {
    codigo: "90005335",
    descricao: "CORDOALHA AÇO CARB 9,5mm 7F CL.B MR/SM",
  },
  {
    codigo: "90005352",
    descricao: "POSTE MADEIRA EUC PRES 11M MEDIO/PESADO",
  },
  {
    codigo: "90005354",
    descricao: "POSTE MADEIRA EUC PRES 15M PESADO",
  },
  {
    codigo: "90005355",
    descricao: "POSTE MADEIRA EUC PRES 7M LEVE",
  },
  {
    codigo: "90005356",
    descricao: "POSTE MADEIRA EUC PRES 7M MEDIO",
  },
  {
    codigo: "90005358",
    descricao: "POSTE MADEIRA EUC PRES 9M MEDIO/PESADO",
  },
  {
    codigo: "90005362",
    descricao: "CRUZETA MADEIRA LEI 90X112,5X2400mm",
  },
  {
    codigo: "90005363",
    descricao: "POSTE MADEIRA EUC PRES 13M PESADO",
  },
  {
    codigo: "90005364",
    descricao: "POSTE MADEIRA EUC PRES 14M PESADO",
  },
  {
    codigo: "90005365",
    descricao: "POSTE MADEIRA EUC PRES 16M PESADO",
  },
  {
    codigo: "90005366",
    descricao: "POSTE MADEIRA EUC PRES 17M PESADO",
  },
  {
    codigo: "90005367",
    descricao: "CRUZETA MADEIRA 90X112,5X5000MM",
  },
  {
    codigo: "90005385",
    descricao: "TRANSF DIS 3F 15KVA 13800-220/127V 3D",
  },
  {
    codigo: "90005386",
    descricao: "TRAFO DIS AP TRI  112,5KVA-15KV-220/127V",
  },
  {
    codigo: "90005389",
    descricao: "TRAFO DIS MONO-FF 10KVA-36,2KV-240/120-U",
  },
  {
    codigo: "90005399",
    descricao: "TRANSF DIS 1F 5KVA 34500-230/115V 3D",
  },
  {
    codigo: "90005401",
    descricao: "TRANSF DIS 3F 45KVA 13800-220/127V",
  },
  {
    codigo: "90005409",
    descricao: "TRAFO DIS TRI-37,5KVA-15KV-220/127V  - M",
  },
  {
    codigo: "90005412",
    descricao: "TRAFO DIST 3F 500KVA M 15KV 220/127V",
  },
  {
    codigo: "90005417",
    descricao: "TRANSF DIS 3F 15KVA 13800-220/127V S/D",
  },
  {
    codigo: "90005419",
    descricao: "TRANSF DIS 1F 10KVA 7967-254/127V S/DER",
  },
  {
    codigo: "90005421",
    descricao: "TRANSF DIS 3F 500KVA 13800-220/127V",
  },
  {
    codigo: "90005423",
    descricao: "TRAFO DIST 1F 25KVA K 36,2KV 254/127V",
  },
  {
    codigo: "90005437",
    descricao: "SUPORTE CHAVE SEC 1P INCLINADA ACO",
  },
  {
    codigo: "90005438",
    descricao: "SUPORTE L AÇO 2 FUROS",
  },
  {
    codigo: "90005439",
    descricao: "SUPORTE T ACO 540X10mm",
  },
  {
    codigo: "90005440",
    descricao: "SUPORTE TL ACO",
  },
  {
    codigo: "90005441",
    descricao: "SUPORTE TRANSF ACO POST CON CIR 240MM",
  },
  {
    codigo: "90005445",
    descricao: "AFASTADOR ARMAÇÃO SEC AÇO 500X700MM",
  },
  {
    codigo: "90005449",
    descricao: "MANILHA ACO 16X75X22MM 120KN F-1201",
  },
  {
    codigo: "90005450",
    descricao: 'MAO FRANCESA PERFIL ACO DP "V" 45X45X',
  },
  {
    codigo: "90005451",
    descricao: "M#O FRANCESA PLANA AL 32X6X726mm",
  },
  {
    codigo: "90005458",
    descricao: "CINTA POSTE CIRCULAR 150mm ACO",
  },
  {
    codigo: "90005459",
    descricao: "CINTA POSTE CIRCULAR 170MM ACO",
  },
  {
    codigo: "90005462",
    descricao: "CINTA REGULAVEL CIRCULAR TIPO BAP-3 ACO",
  },
  {
    codigo: "90005463",
    descricao: "SUPORTE L AÇO 2 FUROS P-760-019 REV.1",
  },
  {
    codigo: "90005476",
    descricao: "ALÇA PREF CAB COBERTO CA50mm² DE-0152-L",
  },
  {
    codigo: "90005499",
    descricao: "LACO ROLDANA P/CABO ACO 3x2,25mm 45mm",
  },
  {
    codigo: "90005503",
    descricao: "ALCA PREF DIST CA CAA 2/0AWG",
  },
  {
    codigo: "90005515",
    descricao: "CONECTOR D AL COMP CACU4/0 CACU14AWG",
  },
  {
    codigo: "90005522",
    descricao: "CONECTOR D P FEND CU 8-6 AWG S/ESP",
  },
  {
    codigo: "90005537",
    descricao: "CONECTOR CUNHA CN11",
  },
  {
    codigo: "90005538",
    descricao: "CONECTOR CUNHA CN15",
  },
  {
    codigo: "90005539",
    descricao: "CONECTOR CUNHA CN14",
  },
  {
    codigo: "90005540",
    descricao: "CONECTOR CUNHA CN13",
  },
  {
    codigo: "90005576",
    descricao: "CONECTOR CUNHA CN16",
  },
  {
    codigo: "90005578",
    descricao: "CONECTOR D AL COMP CACU2 CAA4 CACU8AWG",
  },
  {
    codigo: "90005579",
    descricao: "CONECTOR D AL COMP CACUCAA 14-8 1 2/0AWG",
  },
  {
    codigo: "90005655",
    descricao: "BLOCO CONCRETO 5000DAN C/ PALETS",
  },
  {
    codigo: "90005666",
    descricao: "CRUZETA MET 3X3X3/8POLX2600MM G-A3-326",
  },
  {
    codigo: "90005690",
    descricao: "ARRUELA LISA QUAD AÇO ZI 38X3X18mm",
  },
  {
    codigo: "90005692",
    descricao: "PARAFUSO CAB AB ZI 12,7X40mm AR POR Q",
  },
  {
    codigo: "90005699",
    descricao: "CHAPA AÇO CHAVE SEC 1P P-760-023",
  },
  {
    codigo: "90005889",
    descricao: "CABO E POT BT CU XLPE 1X95MM2 1KV",
  },
  {
    codigo: "90005909",
    descricao: "TRANSF DIS 3F 30KVA 13800-220 6D SUPORTE",
  },
  {
    codigo: "90005910",
    descricao: "TRANSF DIS 3F 45KVA 13800-220 6D SUPORTE",
  },
  {
    codigo: "90005911",
    descricao: "TRANSF DIS 3F 75KVA 13800-220 6D SUPORTE",
  },
  {
    codigo: "90005912",
    descricao: "TRANSF DIS 3F 112,5KVA 13800-220 6D SUP.",
  },
  {
    codigo: "90005917",
    descricao: "TRANSF DIS 1F 25KVA 7967-254V 6D FN SUBT",
  },
  {
    codigo: "90005918",
    descricao: "PARA RAIOS DIS 12KV 10KA ZNO POLIMERICO",
  },
  {
    codigo: "90005937",
    descricao: "POSTE CONCRETO CIRCULAR 10M 1000DAN",
  },
  {
    codigo: "90005938",
    descricao: "POSTE CONCRETO CIRCULAR 10M 300DAN",
  },
  {
    codigo: "90005939",
    descricao: "POSTE CONCRETO CIRCULAR 11M 200DAN",
  },
  {
    codigo: "90005940",
    descricao: "POSTE CONCRETO CIRCULAR 12M 1200DAN",
  },
  {
    codigo: "90005941",
    descricao: "POSTE CONCRETO CIRCULAR 17M 200DAN",
  },
  {
    codigo: "90005942",
    descricao: "POSTE CONCRETO DT TIPO B 10M 600DAN",
  },
  {
    codigo: "90005943",
    descricao: "POSTE CONCRETO DT TIPO B 9M 300DAN",
  },
  {
    codigo: "90005944",
    descricao: "POSTE CONCRETO DT TIPO D 11M 200DAN",
  },
  {
    codigo: "90005945",
    descricao: "POSTE CONCRETO CIRCULAR 10,5M 150DAN",
  },
  {
    codigo: "90005946",
    descricao: "POSTE CONCRETO CIRCULAR 10M 400DAN",
  },
  {
    codigo: "90005947",
    descricao: "POSTE CONCRETO CIRCULAR 11M 400DAN",
  },
  {
    codigo: "90005948",
    descricao: "POSTE CONCRETO CIRCULAR 8,5M 150DAN",
  },
  {
    codigo: "90005949",
    descricao: "POSTE CONCRETO DT TIPO B 10M 400DAN",
  },
  {
    codigo: "90005950",
    descricao: "POSTE CONCRETO DT TIPO B 12M 1000DAN",
  },
  {
    codigo: "90005952",
    descricao: "POSTE CONCRETO DT TIPO D 10M 200DAN",
  },
  {
    codigo: "90005953",
    descricao: "POSTE CONCRETO DT TIPO D 10M 250DAN",
  },
  {
    codigo: "90005957",
    descricao: "VIGA MET U 800X203,2X50,8X6,35mm REG. T",
  },
  {
    codigo: "90005960",
    descricao: "CRUZETA MADEIRA LEI 90X112,5X5000MM HT",
  },
  {
    codigo: "90005974",
    descricao: "CHAVE BY PASS 15KV 400A 95KV 12,5KA",
  },
  {
    codigo: "90005994",
    descricao: "PARA RAIOS DIS BT 0,6KV 10KA 280V S/CENT",
  },
  {
    codigo: "90006075",
    descricao: "PARAFUSO CAB AB AL 16X200mm M POR Q",
  },
  {
    codigo: "90006101",
    descricao: "REGULADOR TENSAO 1F 7,62KV 219A 167KVA",
  },
  {
    codigo: "90006108",
    descricao: "BRACO TIPO L REDE COMPAC 36,2KV",
  },
  {
    codigo: "90006109",
    descricao: "CHAVE SEC 1P FC 15KV 400A 12,5KA 95KV",
  },
  {
    codigo: "90006113",
    descricao: "PARA RAIOS DIS 30KV 5KA ZNO CENTEL",
  },
  {
    codigo: "90006131",
    descricao: "POSTE MADEIRA EUC PRES 11M LEVE SUCATA",
  },
  {
    codigo: "90006137",
    descricao: "POSTE CONCRETO CIRCULAR 8,5M 600DAN",
  },
  {
    codigo: "90006139",
    descricao: "POSTE CONCRETO DT TIPO D 9M 150DAN",
  },
  {
    codigo: "90006141",
    descricao: "POSTE MADEIRA EUC PRES 9M LEVE",
  },
  {
    codigo: "90006152",
    descricao: "VIGA MET U 5000X203,2X50,8X6,35mm REG.T",
  },
  {
    codigo: "90006156",
    descricao: "CHAVE SEC 1P FC 25KV 400A 125KV",
  },
  {
    codigo: "90006161",
    descricao: "CHAVE SEC 1P FC 15KV 630A 16KA",
  },
  {
    codigo: "90006211",
    descricao: "ESTRUTURA SUP MET B CAP P3-7-6-R1",
  },
  {
    codigo: "90006221",
    descricao: "CHAVE FUS RELIG C 36,2KV 100A 150KV 3 OP",
  },
  {
    codigo: "90006241",
    descricao: "CHAVE SEC D CARG 3P 15KV 400A BASTÇO",
  },
  {
    codigo: "90006263",
    descricao: "CABO POT CU CL2 1X25MM² 1KV PT",
  },
  {
    codigo: "90006282",
    descricao: "POSTE CONCRETO DT TIPO B 10,5M 300DAN",
  },
  {
    codigo: "90006283",
    descricao: "CRUZETA MADEIRA LEI 90X112,5X2800mm",
  },
  {
    codigo: "90006284",
    descricao: "CHAVE UNIP OLEO BCO CAPACITOR MOTORIZAD",
  },
  {
    codigo: "90006292",
    descricao: "POSTE CONCRETO DT TIPO B 11M 150DAN",
  },
  {
    codigo: "90006303",
    descricao: "CABO E ISO CU PVC BWF 35MM2 750V PR",
  },
  {
    codigo: "90006331",
    descricao: "POSTE CONCRETO CIRCULAR: 13M:1500DAN.DES",
  },
  {
    codigo: "90006335",
    descricao: "CHAVE SEC D CARG 3P 15KV 600A BECO",
  },
  {
    codigo: "90006352",
    descricao: "CHAVE SEC D CARG 3P 38KV 400A",
  },
  {
    codigo: "90006391",
    descricao: "POSTE CONCRETO DT TIPO B 9M 400DAN",
  },
  {
    codigo: "90006411",
    descricao: "POSTE CONCRETO CIRCULAR 8,5M 300DAN",
  },
  {
    codigo: "90006412",
    descricao: "CHAVE SEC 1P FC 38KV 630A 170KV 25KA/3S",
  },
  {
    codigo: "90006442",
    descricao: "POSTE DE CONCRETO D/T 9/200",
  },
  {
    codigo: "90006474",
    descricao: "POSTE CONCRETO DT TIPO B 11M 400DAN",
  },
  {
    codigo: "90006478",
    descricao: "REGULADOR TENSAO MONO 13800V 50A",
  },
  {
    codigo: "90006492",
    descricao: "POSTE CONCRETO CIRCULAR 9M 200DAN",
  },
  {
    codigo: "90006493",
    descricao: "ISOLADOR PINO POR 25KV R35",
  },
  {
    codigo: "90006494",
    descricao: "POSTE CONCRETO CIRCULAR 12M 400DAN",
  },
  {
    codigo: "90006662",
    descricao: "POSTE CONCRETO DT TIPO B 10M 1500DAN",
  },
  {
    codigo: "90006741",
    descricao: "TRAFO AEREO MONOFAS 75KVA GRUPO G 15KV",
  },
  {
    codigo: "90006742",
    descricao: "CHAVE SEC 1P FC 38KV 630A 150KV 16KA",
  },
  {
    codigo: "90006744",
    descricao: "GRAMPO ANCORAGEM POLIM CABO 70 mm²",
  },
  {
    codigo: "90006791",
    descricao: "CABO COB ANTI-FURTO CU XLPE 1X10+10MM2",
  },
  {
    codigo: "90006792",
    descricao: "CABO E NU CAA 6AWG 6/1F TURKEY",
  },
  {
    codigo: "90006834",
    descricao: "POSTE CONCRETO CIRCULAR 14M 800DAN",
  },
  {
    codigo: "90006835",
    descricao: "POSTE CONCRETO CIRCULAR 15M 600DAN",
  },
  {
    codigo: "90007132",
    descricao: "POSTE CONCRETO DT TIPO D 10M 100DAN",
  },
  {
    codigo: "90007253",
    descricao: "CHAVE COM BC 3P 15KV 400A NBI-110KV ÀLEO",
  },
  {
    codigo: "90007311",
    descricao: "RELIGADOR AUT TRIF 15KV 560A 12KA EXTERN",
  },
  {
    codigo: "90007451",
    descricao: "RELIGADOR AUT 3F 15KV 400A 6KA OLEO KFE",
  },
  {
    codigo: "90007461",
    descricao: "RELIGADOR AUT 3F 13,8KV 600A",
  },
  {
    codigo: "90007494",
    descricao: "POSTE CONCRETO. SEÇÃO CIRCULAR.20/2000 ",
  },
  {
    codigo: "90007497",
    descricao: "REGULADOR TENSAO MONO 7620V 328A TP",
  },
  {
    codigo: "90007511",
    descricao: "POSTE CONCRETO CIRCULAR 12M 800DAN",
  },
  {
    codigo: "90007521",
    descricao: "CONECTOR TERM ESTRANGUL TIPO 3 1FURO",
  },
  {
    codigo: "90007522",
    descricao: "CONECTOR TERM ESTRANGUL TIPO 7 2FUROS",
  },
  {
    codigo: "90007523",
    descricao: "CONECTOR TERM TIPO ESTRANGUL 3/0-4/0AWG",
  },
  {
    codigo: "90007524",
    descricao: "CONECTOR TERM TIPO ESTRANGUL 1/0-2/0AWG",
  },
  {
    codigo: "90007526",
    descricao: "CHAVE TANDEN CASCATA 15KV",
  },
  {
    codigo: "90007532",
    descricao: "REGULADOR TENSAO MONO 7620V 100A",
  },
  {
    codigo: "90007671",
    descricao: "CAPACITOR POT MONO 100KVAR 6600V 95KV",
  },
  {
    codigo: "90007722",
    descricao: "ISOLADOR SUSPENS#O POLIM 36,2KV",
  },
  {
    codigo: "90007871",
    descricao: "REGULADOR TENSAO 1F 7,62KV 438A 333KVA",
  },
  {
    codigo: "90007890",
    descricao: "FITA AÇO PARA SUPORTE DE ADESIVO-SUCATA",
  },
  {
    codigo: "90007921",
    descricao: "FECHO PARA FITA DE AÇO- SUCATA",
  },
  {
    codigo: "90008322",
    descricao: "TRANSF DIST PED 3F ÀLEO 300KVA 15KV 220V",
  },
  {
    codigo: "90008402",
    descricao: "CONECTOR CUNHA RAMAL TIPO I",
  },
  {
    codigo: "90008403",
    descricao: "CONECTOR CUNHA RAMAL  II OTM MP-07-25",
  },
  {
    codigo: "90008406",
    descricao: "TRANSF DIST PED 3F OLEO 75KVA 15KV 220V",
  },
  {
    codigo: "90008407",
    descricao: "TRANSF DIST PED 3F OLEO 150KVA 15KV 220V",
  },
  {
    codigo: "90008408",
    descricao: "TRAFO DIST PED 3F OLEO 500KVA 15KV 220V",
  },
  {
    codigo: "90008409",
    descricao: "TRAFO DIST PED 3F OLEO 500KVA 15KV 380V",
  },
  {
    codigo: "90008441",
    descricao: "PINO ISOL AÇO 34,5KV M16X35X240mm SUCATA",
  },
  {
    codigo: "90008481",
    descricao: "ISOLADOR PILAR POLIMÉCO 15KV 1000DAN",
  },
  {
    codigo: "90008511",
    descricao: "CRUZETA POLIMER 90X90X2000mm S/EMENDA",
  },
  {
    codigo: "90008586",
    descricao: "SECCIONALIZADOR AUT 3F 14,4KV 200A GN3E",
  },
  {
    codigo: "90008587",
    descricao: "TRANSF TRIF 75KVA 15KV 220/127V SECO",
  },
  {
    codigo: "90008589",
    descricao: "TRANSF DIS TRI 150KVA 15KV 220/127V SECO",
  },
  {
    codigo: "90008590",
    descricao: "TRANSF DIS TRI 300KVA 15KV 220/127V SECO",
  },
  {
    codigo: "90008630",
    descricao: "CINTA POSTE CIRCULAR B-44 AC 440mm",
  },
  {
    codigo: "90008641",
    descricao: "TRANSF DIS TRI 500KVA 15KV 220/127V SECO",
  },
  {
    codigo: "90008642",
    descricao: "TRANSF DIS TRI 750KVA 15KV 220/127V SECO",
  },
  {
    codigo: "90008643",
    descricao: "TRANSF DIS TRI1000KVA 15KV 220/127V SECO",
  },
  {
    codigo: "90008644",
    descricao: "TRANSF DIS TRI 150KVA 15KV 380/220V SECO",
  },
  {
    codigo: "90008646",
    descricao: "TRANSF DIS TRI 500KVA 15KV 380/220V SECO",
  },
  {
    codigo: "90008651",
    descricao: "TRANSF DIS TRI 300KVA 15KV 380/220V SECO",
  },
  {
    codigo: "90008771",
    descricao: "TRAFO DIST 1F 5KVA G 15KV 240/120V",
  },
  {
    codigo: "90008799",
    descricao: "CONTROLE SENSOR BCºCAPAC COR/kVAR/TENSÃO",
  },
  {
    codigo: "90008961",
    descricao: "CABO ISOL 35KV COBRE SINGELO 630mmÝ",
  },
  {
    codigo: "90008991",
    descricao: "POSTE AÇO CIRCULAR ALT 7000mmX150DAN",
  },
  {
    codigo: "90009033",
    descricao: "TRAFO DIST SUBT 3F OLEO 1MVA 15KV 400V",
  },
  {
    codigo: "90009082",
    descricao: "BRAÇO TIPO C 34,5KV",
  },
  {
    codigo: "90009099",
    descricao: "POSTE CONCRETO CIRCULAR 16M 1000DAN",
  },
  {
    codigo: "90009143",
    descricao: "REGULADOR TENSAO MONO 7620V 150A SIMPLIF",
  },
  {
    codigo: "90009192",
    descricao: "RELIGADOR AUT 3F 15KV 560A 16KA SF6",
  },
  {
    codigo: "90009197",
    descricao: "CONECTOR CUNHA RAMAL TIPO VI",
  },
  {
    codigo: "90009201",
    descricao: "CAPACITOR POT MONO 100KVAR 7960V 95KV",
  },
  {
    codigo: "90009279",
    descricao: "TRANSF DIS TRI-45KVA-15KV-220/127V -M 3T",
  },
  {
    codigo: "90009311",
    descricao: "TRANSF DIS TRI-300KVA-15KV-220/127V-M 3T",
  },
  {
    codigo: "90009312",
    descricao: "TRANSF DIS TRI-150KVA-15KV-220/127V-M 3T",
  },
  {
    codigo: "90009313",
    descricao: "TRANSF DIS TRI-30KVA-15KV-220/127V-M 3T",
  },
  {
    codigo: "90009314",
    descricao: "TRANSF DIS TRI-75KVA-15KV-220/127V -M 3T",
  },
  {
    codigo: "90009316",
    descricao: "TRANSF DIS PED 500KVA-15KV-220/127V 3T",
  },
  {
    codigo: "90009318",
    descricao: "TRANS DIS TRI-225KVA-15KV-220/127V -M 3T",
  },
  {
    codigo: "90009414",
    descricao: "CHAVE FUSÍVEL -15 KV",
  },
  {
    codigo: "90009418",
    descricao: "RELIGADOR AUT 3F 15KV 280A 6KA OLEO KF",
  },
  {
    codigo: "90009432",
    descricao: "TRANSF DIS TRI500KVA 36,2KV-220/127V SEC",
  },
  {
    codigo: "90009446",
    descricao: "CHAVE SECC 15KV 200A 16KA\\1S ESCELSA",
  },
  {
    codigo: "90009494",
    descricao: "REGULADOR TENSAO 1F 19,92KV 418A 833KVA",
  },
  {
    codigo: "90009515",
    descricao: "CABO COL MULT AL  0,60/1KV 3X1X50+35mm²",
  },
  {
    codigo: "90009532",
    descricao: "RELIGADOR AUTOMÁTICO 15KV",
  },
  {
    codigo: "90009540",
    descricao: "CHAVE FACA 34,5 KV UNIP 630 A",
  },
  {
    codigo: "90009556",
    descricao: "CABO MULT AL XLPE 20/35 KV 3X1X185+120",
  },
  {
    codigo: "90009557",
    descricao: "CABO COBERTO AL XLPE 300,00mm² 38KV",
  },
  {
    codigo: "90009574",
    descricao: "POSTE FIBRA CIRCULAR 11M 600DAN",
  },
  {
    codigo: "90009575",
    descricao: "POSTE FIBRA CIRCULAR 11M 600DAN SECCION",
  },
  {
    codigo: "90009576",
    descricao: "POSTE FIBRA CIRCULAR 11M 300DAN",
  },
  {
    codigo: "90009577",
    descricao: "POSTE FIBRA CIRCULAR 11M 300DAN SECCION",
  },
  {
    codigo: "90009578",
    descricao: "POSTE FIBRA CIRCULAR 12M 300DAN",
  },
  {
    codigo: "90009579",
    descricao: "POSTE FIBRA CIRCULAR 12M 300DAN SECCION",
  },
  {
    codigo: "90009580",
    descricao: "POSTE FIBRA CIRCULAR 12M 600DAN",
  },
  {
    codigo: "90009591",
    descricao: "POSTE FIBRA CIRCULAR 12M 600DAN SECCION",
  },
  {
    codigo: "90009601",
    descricao: "POSTE FIBRA CIRCULAR 12M  1000DAN",
  },
  {
    codigo: "90009602",
    descricao: "POSTE FIBRA CIRCULAR 12M  1000DAN SECC",
  },
  {
    codigo: "90009612",
    descricao: "ESPAÇADOR LOSANGULAR POLIMÉRICO 34,5KV",
  },
  {
    codigo: "90009613",
    descricao: "SUPORTE AFASTADOR HORIZONTAL 34,5KV",
  },
  {
    codigo: "90009615",
    descricao: "BRAÇO ANTI-BALANÇO 34,5KV",
  },
  {
    codigo: "90009616",
    descricao: "ISOLADOR BASTÃO POLIMER 34,5KV MP 06-18",
  },
  {
    codigo: "90009617",
    descricao: "ALÇA PREF CABO COBERTO CA 300mm² -34,5KV",
  },
  {
    codigo: "90009645",
    descricao: "CABO AL COBERTO XLPE 185mm² 35KV",
  },
  {
    codigo: "90009684",
    descricao: "CINTA POSTE CIRCULAR 300mm ACO",
  },
  {
    codigo: "90009687",
    descricao: "CINTA POSTE CIRCULAR B-34 AC 340mm",
  },
  {
    codigo: "90009781",
    descricao: "CABO COB ANTI-FURTO AL XLPE 1X16+16MM2",
  },
  {
    codigo: "90009792",
    descricao: "SECCIONALIZADOR ELETRON FUS C 15KV 200A",
  },
  {
    codigo: "90009832",
    descricao: "CABO ISOL 0,6/1 KV ALUM 1X185mm XLPE/EPR",
  },
  {
    codigo: "90009833",
    descricao: "RELIGADOR AUT 3F 38KV 630A 16KA SF6 SD",
  },
  {
    codigo: "90009841",
    descricao: "CABO ISOL AL 8,7/15KV 3X1X35mm² EPR/XLPE",
  },
  {
    codigo: "90009847",
    descricao: "CABO ISOL 0,6/1 kV ALUM 1x120mm XLPE/EPR",
  },
  {
    codigo: "90009848",
    descricao: "POSTE CONCRETO S/C 18/1000",
  },
  {
    codigo: "90009861",
    descricao: "CORDOALHA COBREADA 40% 16mm² 7F CL A",
  },
  {
    codigo: "90009868",
    descricao: "CINTA POSTE CIRCULAR H-9 AC 290mm",
  },
  {
    codigo: "90009874",
    descricao: "CABO ACO ALUMINIZADO 3X5AWG 40% IACS",
  },
  {
    codigo: "90009877",
    descricao: "CABO ACO ALUMINIZADO 3X6AWG 20% IACS",
  },
  {
    codigo: "90009880",
    descricao: "TRAFO DIST SECO 3F 112,5KVA 15KV 220V",
  },
  {
    codigo: "90009882",
    descricao: "TRAFO DIST SECO 3F 750KVA 36,2KV 220V",
  },
  {
    codigo: "90009911",
    descricao: "POSTE CON CIRC 22M 2500DAN",
  },
  {
    codigo: "90009912",
    descricao: "POSTE CONCRETO CIRCULAR 18M 2500DAN",
  },
  {
    codigo: "90009913",
    descricao: "POSTE CONCRETO CIRCULAR 15M 2000DAN",
  },
  {
    codigo: "90009949",
    descricao: "POSTE CON CIRC C-29 16M 2000DAN",
  },
  {
    codigo: "90009951",
    descricao: "CABO MX AL XLPE 0,6/1KV 2X1X10+ 10mm² NI",
  },
  {
    codigo: "90009969",
    descricao: "SUPORTE INSTAL EQUIP TIPO II DIAM 320mm",
  },
  {
    codigo: "90009972",
    descricao: "KIT REPARO CABO PROTEGIDO 34,5kV",
  },
  {
    codigo: "90009976",
    descricao: "CABO MX AL XLPE 0,6/1KV 2X1X16+16mm² NI",
  },
  {
    codigo: "90010041",
    descricao: "TRAFO DIST 3F 150KVA AP 15KV 220/127V",
  },
  {
    codigo: "90010042",
    descricao: "CABO ISOL 0,6/1 KV ALUM 1X70mm XLPE/EPR",
  },
  {
    codigo: "90010051",
    descricao: "ESPACADOR LOSAN AUTOTRAV 13,8KV",
  },
  {
    codigo: "90010096",
    descricao: "DISJUNTOR TRIP AUT 15KV 630A CT",
  },
  {
    codigo: "90010112",
    descricao: "CABO ISOL 0,6/1KV COBR 1X70mm² EPR",
  },
  {
    codigo: "90010172",
    descricao: "QUADRO DISTRIBUIÇÃO PEDESTAL QDP TIPO 0",
  },
  {
    codigo: "90010179",
    descricao: "ADAPTADOR BANDEIRA TIPO 2",
  },
  {
    codigo: "90010180",
    descricao: "ADAPTADOR BANDEIRA TIPO 3",
  },
  {
    codigo: "90010195",
    descricao: "CONECTOR PERF CABO AL 16-95mm X 6-35mm",
  },
  {
    codigo: "90010197",
    descricao: "CONECTOR PERF 25~120X25~120mm²",
  },
  {
    codigo: "90010198",
    descricao: "CRUZETA FIB VIDRO 90X112,5mm 2800mm",
  },
  {
    codigo: "90010199",
    descricao: "CRUZETA FIB VIDRO 90X90mm 2400mm",
  },
  {
    codigo: "90010245",
    descricao: "CAIXA DE INTERLIGAÇÃO PARA BC AUTOMÁTICO",
  },
  {
    codigo: "90010246",
    descricao: "CAIXA DE COMANDO BC",
  },
  {
    codigo: "90010259",
    descricao: "CHAVE SECC BY-PASS 35KV 630A ESQ/DIR",
  },
  {
    codigo: "90010270",
    descricao: "CINTA POSTE CIRCULAR B-10 AC 100mm",
  },
  {
    codigo: "90010271",
    descricao: "CINTA POSTE CIRCULAR B-42 AC 420mm",
  },
  {
    codigo: "90010272",
    descricao: "CINTA POSTE CIRCULAR 460mm",
  },
  {
    codigo: "90010273",
    descricao: "CINTA POSTE CIRCULAR B-48 AC 480mm",
  },
  {
    codigo: "90010317",
    descricao: "CONECTOR TERM ESTRANGUL TIPO 6 2FUROS225",
  },
  {
    codigo: "90010319",
    descricao: "CONECTOR TERM ESTRANGUL TIPO 8 2FUROS",
  },
  {
    codigo: "90010321",
    descricao: "CONECTOR TERMINAL AL 2 FUROS-240mm²",
  },
  {
    codigo: "90010368",
    descricao: "MANTA REPARO CABO PROTEGIDO 15KV",
  },
  {
    codigo: "90010372",
    descricao: "PARA RAIO DISTR ZNO 30KV 10KA S/CENT",
  },
  {
    codigo: "90010415",
    descricao: "RELE PARA  BC - INSTALAÇAO EXTERNA",
  },
  {
    codigo: "90010428",
    descricao: "SUPORTE INSTAL EQUIP TIPO III DIAM 360mm",
  },
  {
    codigo: "90010429",
    descricao: "SUPORTE P/ FIX BF E PR EM CRUZETA",
  },
  {
    codigo: "90010430",
    descricao: "SUPORTE P/ NUMEROS REFLETIVOS 530X100X4",
  },
  {
    codigo: "90010437",
    descricao: "TERMINAL EXT CABO ISOL 20/35KV 185mm²",
  },
  {
    codigo: "90010484",
    descricao: "RELIGADOR TRIF 15KV 280A TIPO SEV1506",
  },
  {
    codigo: "90010485",
    descricao: "RELIGADOR AUT 3F 15KV 400A 6KA OLEO KFME",
  },
  {
    codigo: "90010512",
    descricao: "CORDOALHA AÇO CARB 4,87mm 3 F CL.A",
  },
  {
    codigo: "90010531",
    descricao: "CABO POT CU CL2 3X500 MCM -  8,7/15KV XL",
  },
  {
    codigo: "90010571",
    descricao: "RELIGADOR AUT 3F 34,5KV/560A 10KA-POSTE",
  },
  {
    codigo: "90010585",
    descricao: "CABO ISOL CU 8,7/15KV 1X240mm² EPR/XLPE",
  },
  {
    codigo: "90010591",
    descricao: "ALÇA PREF CABO COBERTO CA 185mm² -35KV",
  },
  {
    codigo: "90010616",
    descricao: "CABO MX AL XLPE 0,6/1KV 1X1X16+16MM2 NI",
  },
  {
    codigo: "90010617",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X16+16mm² NI",
  },
  {
    codigo: "90010618",
    descricao: "CABO MX AL XLPE 0,6/1KV 2X1X35+35mm² NI",
  },
  {
    codigo: "90010619",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X35+35mm² NI",
  },
  {
    codigo: "90010632",
    descricao: "CABO MX AL XLPE 0,6/1KV 2X1X70+70mm² NI",
  },
  {
    codigo: "90010633",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X70+70mm² NI",
  },
  {
    codigo: "90010634",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X120+70mm² NI",
  },
  {
    codigo: "90010635",
    descricao: "POSTE CONCRETO CIRCULAR 22M 2000DAN",
  },
  {
    codigo: "90010641",
    descricao: "PARAFUSO DE CABEÇA ABAULADA - M16X100 mm",
  },
  {
    codigo: "90010713",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X10+16mm² NI",
  },
  {
    codigo: "90010714",
    descricao: "CABO MX AL XLPE 0,6/1KV 3X1X25+25mm² NI",
  },
  {
    codigo: "90010734",
    descricao: "CABO POT 0,6/1KV COBR 1X35mm² XLPE (AZ)",
  },
  {
    codigo: "90010821",
    descricao: "ALÇA PREF SERVIÇO CABO ISOLADO 10mm² BR",
  },
  {
    codigo: "90010822",
    descricao: "ALÇA PREF SERVIÇO CABO ISOLADO 25mm² LJ",
  },
  {
    codigo: "90010831",
    descricao: "CABO MX AL XLPE 8,7/15KV 3X1X70+70MM2",
  },
  {
    codigo: "90010852",
    descricao: "CABO MX AL XLPE 0,6/1KV 2X1X25+25mm² NI",
  },
  {
    codigo: "90010874",
    descricao: "POSTE MADEIRA EUC PRES 9M MEDIO",
  },
  {
    codigo: "90010875",
    descricao: "POSTE MADEIRA EUC PRES 11M PESADO",
  },
  {
    codigo: "90010898",
    descricao: "CONTROLE P/ BANCO REG TENSAO C/ NOBREAK",
  },
  {
    codigo: "90010909",
    descricao: "CABO MULT AL XLPE 20/35 KV 3X1X300+120",
  },
  {
    codigo: "90010912",
    descricao: "POSTE CONCRETO CIRCULAR 15M 1500DAN",
  },
  {
    codigo: "90010944",
    descricao: "TRAFO DIST 1F 1,5KVA BCO CAP 36,2KV 127V",
  },
  {
    codigo: "90010980",
    descricao: "CABO COB ANTI-FURTO AL XLPE 1x25+25MM²",
  },
  {
    codigo: "90010992",
    descricao: "CABO ARMADO Al XLPE 3X70 + 70 mm2 Tetra",
  },
  {
    codigo: "90011099",
    descricao: "CABO ARMADO Al XLPE 3x35 + 35mm² Tetra",
  },
  {
    codigo: "90011100",
    descricao: "CABO ARMADO Al XLPE 3x50 + 50mm² Tetra",
  },
  {
    codigo: "90011231",
    descricao: "POSTE CONCRETO DUPLO T 7/150",
  },
  {
    codigo: "90017115",
    descricao: "CONECTOR TERM ESTRANGUL SAÍDA DUPLA",
  },
  {
    codigo: "90017171",
    descricao: "TRANSF DIST PED 3F OLEO 750KVA 15KV 220V",
  },
  {
    codigo: "90017172",
    descricao: "TRANSF DIST. PED 3F VERD 45KVA 15KV 220V",
  },
  {
    codigo: "90017260",
    descricao: "ALCA PREF CABO COBERTO CA 70mm² - 15KV",
  },
  {
    codigo: "90017273",
    descricao: "TRANSF DIST PED 3F OLEO VEG 75KVA 15KV",
  },
  {
    codigo: "90017306",
    descricao: "CANTONEIRA AUXILIAR RDC",
  },
  {
    codigo: "90017307",
    descricao: "CANTONEIRA RETA RDC",
  },
  {
    codigo: "90017334",
    descricao: "POSTE CONCRETO CIRCULAR 5M 600DAN",
  },
  {
    codigo: "90017335",
    descricao: "POSTE CONCRETO CIRCULAR 6M 200DAN",
  },
  {
    codigo: "90017336",
    descricao: "POSTE CONCRETO CIRCULAR 7M 100DAN",
  },
  {
    codigo: "90017337",
    descricao: "POSTE CONCRETO CIRCULAR 7M 150DAN",
  },
  {
    codigo: "90017339",
    descricao: "POSTE CONCRETO CIRCULAR 7M 200DAN",
  },
  {
    codigo: "90017340",
    descricao: "POSTE CONCRETO CIRCULAR 7M 300DAN",
  },
  {
    codigo: "90017341",
    descricao: "POSTE CONCRETO CIRCULAR 9M 100DAN",
  },
  {
    codigo: "90017343",
    descricao: "POSTE CONCRETO CIRCULAR 9M 250DAN",
  },
  {
    codigo: "90017344",
    descricao: "POSTE CONCRETO CIRCULAR 9M 450DAN",
  },
  {
    codigo: "90017345",
    descricao: "POSTE CONCRETO CIRCULAR 9M 500DAN",
  },
  {
    codigo: "90017346",
    descricao: "POSTE CONCRETO CIRCULAR 9M 1000DAN",
  },
  {
    codigo: "90017347",
    descricao: "POSTE CONCRETO CIRCULAR 9M 1200DAN",
  },
  {
    codigo: "90017348",
    descricao: "POSTE CONCRETO CIRCULAR 9M 1500DAN",
  },
  {
    codigo: "90017349",
    descricao: "POSTE CONCRETO CIRCULAR 9M 2000DAN",
  },
  {
    codigo: "90017350",
    descricao: "POSTE CONCRETO CIRCULAR 10M 100DAN",
  },
  {
    codigo: "90017352",
    descricao: "POSTE CONCRETO CIRCULAR 10M 200DAN",
  },
  {
    codigo: "90017353",
    descricao: "POSTE CONCRETO CIRCULAR 10M 500DAN",
  },
  {
    codigo: "90017354",
    descricao: "POSTE CONCRETO CIRCULAR 11M 100DAN",
  },
  {
    codigo: "90017355",
    descricao: "POSTE CONCRETO CIRCULAR 11M 150DAN",
  },
  {
    codigo: "90017357",
    descricao: "POSTE CONCRETO CIRCULAR 11M 250DAN",
  },
  {
    codigo: "90017358",
    descricao: "POSTE CONCRETO CIRCULAR 11M 450DAN",
  },
  {
    codigo: "90017359",
    descricao: "POSTE CONCRETO CIRCULAR 11M 500DAN",
  },
  {
    codigo: "90017360",
    descricao: "POSTE CONCRETO CIRCULAR 12M 250DAN",
  },
  {
    codigo: "90017361",
    descricao: "POSTE CONCRETO CIRCULAR 12M 450DAN",
  },
  {
    codigo: "90017362",
    descricao: "POSTE CONCRETO CIRCULAR 12M 500DAN",
  },
  {
    codigo: "90017363",
    descricao: "POSTE CONCRETO CIRCULAR 12M 1600DAN",
  },
  {
    codigo: "90017364",
    descricao: "POSTE CONCRETO CIRCULAR 12M 2000DAN",
  },
  {
    codigo: "90017366",
    descricao: "POSTE CONCRETO CIRCULAR 13M 200DAN",
  },
  {
    codigo: "90017367",
    descricao: "POSTE CONCRETO CIRCULAR 13M 300DAN",
  },
  {
    codigo: "90017368",
    descricao: "POSTE CONCRETO CIRCULAR 13M 400DAN",
  },
  {
    codigo: "90017369",
    descricao: "POSTE CONCRETO CIRCULAR 13M 800DAN",
  },
  {
    codigo: "90017370",
    descricao: "POSTE CONCRETO CIRCULAR 13M 2500DAN",
  },
  {
    codigo: "90017371",
    descricao: "POSTE CONCRETO CIRCULAR 14M 200DAN",
  },
  {
    codigo: "90017372",
    descricao: "POSTE CONCRETO CIRCULAR 14M 300DAN",
  },
  {
    codigo: "90017373",
    descricao: "POSTE CONCRETO CIRCULAR 14M 500DAN",
  },
  {
    codigo: "90017374",
    descricao: "POSTE CONCRETO CIRCULAR 14M 1400DAN",
  },
  {
    codigo: "90017375",
    descricao: "POSTE CONCRETO CIRCULAR 14M 1600DAN",
  },
  {
    codigo: "90017377",
    descricao: "POSTE CONCRETO CIRCULAR 14M 2000DAN",
  },
  {
    codigo: "90017378",
    descricao: "POSTE CONCRETO CIRCULAR 15M 200DAN",
  },
  {
    codigo: "90017379",
    descricao: "POSTE CONCRETO CIRCULAR 15M 300DAN",
  },
  {
    codigo: "90017380",
    descricao: "POSTE CONCRETO CIRCULAR 15M 500DAN",
  },
  {
    codigo: "90017381",
    descricao: "POSTE CONCRETO CIRCULAR 15M 800DAN",
  },
  {
    codigo: "90017382",
    descricao: "POSTE CONCRETO CIRCULAR 15M 1200DAN",
  },
  {
    codigo: "90017383",
    descricao: "POSTE CONCRETO CIRCULAR 16M 500DAN",
  },
  {
    codigo: "90017384",
    descricao: "POSTE CONCRETO CIRCULAR 16M 800DAN",
  },
  {
    codigo: "90017385",
    descricao: "POSTE CONCRETO CIRCULAR 16M 1200DAN",
  },
  {
    codigo: "90017387",
    descricao: "POSTE CONCRETO CIRCULAR 16M 1600DAN",
  },
  {
    codigo: "90017388",
    descricao: "POSTE CONCRETO CIRCULAR 16M 3000DAN",
  },
  {
    codigo: "90017389",
    descricao: "POSTE CONCRETO CIRCULAR 17M 300DAN",
  },
  {
    codigo: "90017390",
    descricao: "POSTE CONCRETO CIRCULAR 17M 600DAN",
  },
  {
    codigo: "90017391",
    descricao: "POSTE CONCRETO CIRCULAR 17M 800DAN",
  },
  {
    codigo: "90017392",
    descricao: "POSTE CONCRETO CIRCULAR 17M 1000DAN",
  },
  {
    codigo: "90017393",
    descricao: "POSTE CONCRETO CIRCULAR 18M 800DAN",
  },
  {
    codigo: "90017394",
    descricao: "POSTE CONCRETO CIRCULAR 18M 1800DAN",
  },
  {
    codigo: "90017395",
    descricao: "POSTE CONCRETO CIRCULAR 20M 1000DAN",
  },
  {
    codigo: "90017396",
    descricao: "POSTE CONCRETO CIRCULAR 22M 1000DAN",
  },
  {
    codigo: "90017397",
    descricao: "POSTE CONCRETO CIRCULAR 10,5M 100DAN",
  },
  {
    codigo: "90017399",
    descricao: "POSTE CONCRETO CIRCULAR 10,5M 200DAN",
  },
  {
    codigo: "90017400",
    descricao: "POSTE CONCRETO CIRCULAR 10,5M 250DAN",
  },
  {
    codigo: "90017401",
    descricao: "POSTE CONCRETO CIRCULAR 10M 500DAN",
  },
  {
    codigo: "90017402",
    descricao: "POSTE DE CONCRETO DT 07M 0200DAN",
  },
  {
    codigo: "90017403",
    descricao: "POSTE DE CONCRETO DT 07M 0400DAN",
  },
  {
    codigo: "90017404",
    descricao: "POSTE DE CONCRETO DT 8,5M 0100DAN",
  },
  {
    codigo: "90017405",
    descricao: "POSTE DE CONCRETO DT 8,5M 0200DAN",
  },
  {
    codigo: "90017406",
    descricao: "POSTE DE CONCRETO DT 9,5M 0100DAN",
  },
  {
    codigo: "90017407",
    descricao: "POSTE DE CONCRETO DT 9,5M 0800DAN",
  },
  {
    codigo: "90017408",
    descricao: "POSTE DE CONCRETO DT 11,5M 0100DAN",
  },
  {
    codigo: "90017410",
    descricao: "POSTE DE CONCRETO DT 11,5M 0500DAN",
  },
  {
    codigo: "90017411",
    descricao: "POSTE DE CONCRETO DT 11,5M 1200DAN",
  },
  {
    codigo: "90017412",
    descricao: "POSTE DE CONCRETO DT 11,5M 1300DAN",
  },
  {
    codigo: "90017413",
    descricao: "POSTE DE CONCRETO DT 11,5M 1500DAN",
  },
  {
    codigo: "90017414",
    descricao: "POSTE DE CONCRETO DT 12,5M 150DAN",
  },
  {
    codigo: "90017415",
    descricao: "POSTE DE CONCRETO DT 12,5M 250DAN",
  },
  {
    codigo: "90017416",
    descricao: "POSTE DE CONCRETO DT 12,5M 400DAN",
  },
  {
    codigo: "90017417",
    descricao: "POSTE DE CONCRETO DT 12,5M 500DAN",
  },
  {
    codigo: "90017418",
    descricao: "POSTE DE CONCRETO DT 12,5M 800DAN",
  },
  {
    codigo: "90017419",
    descricao: "POSTE DE CONCRETO DT 12,5M 1500DAN",
  },
  {
    codigo: "90017420",
    descricao: "POSTE DE CONCRETO DT 10M 0500DAN",
  },
  {
    codigo: "90017421",
    descricao: "POSTE CONCRETO DT TIPO B 10M 1300DAN",
  },
  {
    codigo: "90017422",
    descricao: "POSTE DE CONCRETO DUPLO T-DISTRIBUIÇÃO 22M 2000DAN",
  },
  {
    codigo: "90017423",
    descricao: "POSTE DE FERRO 4M 0150DAN",
  },
  {
    codigo: "90017424",
    descricao: "POSTE DE FERRO 9M 0150DAN",
  },
  {
    codigo: "90017425",
    descricao: "POSTE DE FERRO 10M 0150DAN",
  },
  {
    codigo: "90017426",
    descricao: "POSTE DE FERRO 11M 0150DAN",
  },
  {
    codigo: "90017427",
    descricao: "POSTE DE FERRO 12M 0150DAN",
  },
  {
    codigo: "90017428",
    descricao: "POSTE DE MADEIRA 06M 0300DAN",
  },
  {
    codigo: "90017429",
    descricao: "POSTE DE MADEIRA 07M 0150DAN",
  },
  {
    codigo: "90017430",
    descricao: "POSTE DE MADEIRA 07M 0600DAN",
  },
  {
    codigo: "90017431",
    descricao: "POSTE DE MADEIRA 08M 0150DAN",
  },
  {
    codigo: "90017432",
    descricao: "POSTE DE MADEIRA 08M 0230DAN",
  },
  {
    codigo: "90017433",
    descricao: "POSTE DE MADEIRA 08M 0300DAN",
  },
  {
    codigo: "90017434",
    descricao: "POSTE DE MADEIRA 08M 0600DAN",
  },
  {
    codigo: "90017435",
    descricao: "POSTE DE MADEIRA 09M 0230DAN",
  },
  {
    codigo: "90017436",
    descricao: "POSTE DE MADEIRA 09M 1000DAN",
  },
  {
    codigo: "90017437",
    descricao: "POSTE DE MADEIRA 10M 0150DAN",
  },
  {
    codigo: "90017438",
    descricao: "POSTE DE MADEIRA 10M 1000DAN",
  },
  {
    codigo: "90017439",
    descricao: "POSTE DE MADEIRA 10,5M 0150DAN",
  },
  {
    codigo: "90017440",
    descricao: "POSTE DE MADEIRA 10,5M 0300DAN",
  },
  {
    codigo: "90017441",
    descricao: "POSTE DE MADEIRA 10,5M 0600DAN",
  },
  {
    codigo: "90017442",
    descricao: "POSTE DE MADEIRA 11M 0150DAN",
  },
  {
    codigo: "90017443",
    descricao: "POSTE DE MADEIRA 11M 1000DAN",
  },
  {
    codigo: "90017444",
    descricao: "POSTE DE MADEIRA 12M 0150DAN",
  },
  {
    codigo: "90017445",
    descricao: "POSTE DE MADEIRA 12M 0800DAN",
  },
  {
    codigo: "90017446",
    descricao: "POSTE DE MADEIRA 12M 1000DAN",
  },
  {
    codigo: "90017447",
    descricao: "POSTE DE MADEIRA 13M 0800DAN",
  },
  {
    codigo: "90017448",
    descricao: "POSTE DE MADEIRA 13M 1000DAN",
  },
  {
    codigo: "90017449",
    descricao: "POSTE DE MADEIRA 14M 0300DAN",
  },
  {
    codigo: "90017450",
    descricao: "POSTE DE MADEIRA 14M 0800DAN",
  },
  {
    codigo: "90017451",
    descricao: "POSTE DE MADEIRA 14M 1000DAN",
  },
  {
    codigo: "90017452",
    descricao: "POSTE DE MADEIRA 15M 0300DAN",
  },
  {
    codigo: "90017453",
    descricao: "POSTE DE MADEIRA 15M 0800DAN",
  },
  {
    codigo: "90017454",
    descricao: "POSTE DE MADEIRA 15M 1000DAN",
  },
  {
    codigo: "90017455",
    descricao: "POSTE DE MADEIRA 16M 0800DAN",
  },
  {
    codigo: "90017456",
    descricao: "POSTE DE MADEIRA 16M 1000DAN",
  },
  {
    codigo: "90017457",
    descricao: "POSTE DE MADEIRA 17M 0800DAN",
  },
  {
    codigo: "90017458",
    descricao: "POSTE DE MADEIRA 17M 1000DAN",
  },
  {
    codigo: "90017459",
    descricao: "POSTE DE MADEIRA 18M 0300DAN",
  },
  {
    codigo: "90017460",
    descricao: "POSTE DE MADEIRA 18M 1000DAN",
  },
  {
    codigo: "90017461",
    descricao: "POSTE DE MADEIRA 19M 0800DAN",
  },
  {
    codigo: "90017462",
    descricao: "POSTE DE MADEIRA 20M 0300DAN",
  },
  {
    codigo: "90017463",
    descricao: "POSTE DE MADEIRA 20M 1000DAN",
  },
  {
    codigo: "90017464",
    descricao: "POSTE FIBRA CIRCULAR 9M 300DAN",
  },
  {
    codigo: "90017465",
    descricao: "POSTE FIBRA CIRCULAR 9M 600DAN",
  },
  {
    codigo: "90017466",
    descricao: "POSTE FIBRA CIRCULAR 9M 300DAN SECCION",
  },
  {
    codigo: "90017467",
    descricao: "POSTE FIBRA CIRCULAR 9M 600DAN SECCION",
  },
  {
    codigo: "90017472",
    descricao: "CABO ACO COBREADO 7X2,91 mmÝ 30% IACS",
  },
  {
    codigo: "90017473",
    descricao: "QUADRO DISTRIBUIÇÃO PEDESTAL QDP TIPO 00",
  },
  {
    codigo: "90017474",
    descricao: "QUADRO DISTRIBUIÇÃO PEDESTAL QDP TIPO 1",
  },
  {
    codigo: "90017475",
    descricao: "QUADRO DISTRIBUIÇÃO PEDESTAL QDP TIPO 2",
  },
  {
    codigo: "90017476",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 450mm",
  },
  {
    codigo: "90017477",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 500mm",
  },
  {
    codigo: "90017479",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 550mm",
  },
  {
    codigo: "90017480",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 600mm",
  },
  {
    codigo: "90017481",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 750mm",
  },
  {
    codigo: "90017483",
    descricao: "CINTA POSTE CIRCULAR B-36 AC 360mm",
  },
  {
    codigo: "90017489",
    descricao: "CINTA POSTE CIRCULAR B-44 AC 440mm",
  },
  {
    codigo: "90017492",
    descricao: "ARRUELA AÇO-CAR QUADRAD(38mm)-Furo(18mm)",
  },
  {
    codigo: "90017493",
    descricao: "SUPORTE INSTAL EQUIP TIPO III DIAM 255MM",
  },
  {
    codigo: "90017496",
    descricao: "CABO  NU CA 6AWG 7FIOS PEACHBELL",
  },
  {
    codigo: "90017501",
    descricao: "AFASTADOR ARM SEC 500MM AL",
  },
  {
    codigo: "90017502",
    descricao: "ARRUELA QUAD LISA 38X3mm DI 18mm AL",
  },
  {
    codigo: "90017504",
    descricao: "ARMAÇÃO SEC AL 2 ESTRIBOS 310MM",
  },
  {
    codigo: "90017505",
    descricao: "CINTA POSTE CIRCULAR AL 180mm",
  },
  {
    codigo: "90017506",
    descricao: "CINTA POSTE CIRCULAR AL 200mm",
  },
  {
    codigo: "90017511",
    descricao: "CINTA POSTE CIRCULAR AL 220mm",
  },
  {
    codigo: "90017512",
    descricao: "CINTA POSTE CIRCULAR AL 240mm",
  },
  {
    codigo: "90017513",
    descricao: "CINTA POSTE CIRCULAR AL 260mm",
  },
  {
    codigo: "90017514",
    descricao: "CINTA POSTE CIRCULAR AL 280mm",
  },
  {
    codigo: "90017515",
    descricao: "CINTA POSTE CIRCULAR AL 320mm",
  },
  {
    codigo: "90017517",
    descricao: "MAO FRANCESA PERFIL AL 993mm",
  },
  {
    codigo: "90017518",
    descricao: "MAO FRANCESA PERFIL AL 1534mm",
  },
  {
    codigo: "90017519",
    descricao: "MAO FRANCESA PERFIL AL 1971mm",
  },
  {
    codigo: "90017520",
    descricao: "MAO FRANCESA PLANA AL 619mm",
  },
  {
    codigo: "90017521",
    descricao: "PARAFUSO CAB Q AL 16X125mm M POR Q",
  },
  {
    codigo: "90017523",
    descricao: "PARAFUSO CAB Q AL 16X400mm M POR Q",
  },
  {
    codigo: "90017524",
    descricao: "PARAFUSO CAB Q AL 16X450mm M POR Q",
  },
  {
    codigo: "90017530",
    descricao: "PORCA QUADRADA M16X2 AL",
  },
  {
    codigo: "90017531",
    descricao: "SELA CRUZETA AL 94X110mm 30mm",
  },
  {
    codigo: "90017532",
    descricao: 'SUPORTE TIPO "L" AL',
  },
  {
    codigo: "90017533",
    descricao: "OLHAL PARAFUSO AL 16mm 5000DAN",
  },
  {
    codigo: "90017534",
    descricao: "MANILHA SAPAT AL 5000DAN",
  },
  {
    codigo: "90017539",
    descricao: "CINTA POSTE CIRCULAR B-30 AC 300MM",
  },
  {
    codigo: "90017543",
    descricao: "CINTA POSTE CIRCULAR B-36 AC 360mm",
  },
  {
    codigo: "90017544",
    descricao: "CINTA POSTE CIRCULAR B-38 AC 380mm",
  },
  {
    codigo: "90017545",
    descricao: "CINTA POSTE CIRCULAR B-40 AC 400mm",
  },
  {
    codigo: "90017546",
    descricao: "CINTA POSTE CIRCULAR B-42 AC 420mm",
  },
  {
    codigo: "90017552",
    descricao: "SUPORTE INSTAL EQUIP TIPO III DIAM285mm",
  },
  {
    codigo: "90017553",
    descricao: "POSTE CONCRETO CIRCULAR 10M 450DAN",
  },
  {
    codigo: "90017555",
    descricao: "POSTE CONCRETO DT TIPO B 11M 450DAN",
  },
  {
    codigo: "90017558",
    descricao: "POSTE CONCRETO DT TIPO B 10M 3000DAN",
  },
  {
    codigo: "90017567",
    descricao: "ISOLADOR PILAR HÍBRIDO 15KV C/PINO 190mm",
  },
  {
    codigo: "90017584",
    descricao: "CINTA POSTE CIRCULAR AL 380mm",
  },
  {
    codigo: "90017585",
    descricao: "CINTA POSTE CIRCULAR AL 400mm",
  },
  {
    codigo: "90017586",
    descricao: "CINTA POSTE CIRCULAR B-42 AL 420mm",
  },
  {
    codigo: "90017587",
    descricao: "CINTA POSTE CIRCULAR B-44 AL 440mm",
  },
  {
    codigo: "90017588",
    descricao: "CINTA POSTE CIRCULAR AL 460mm",
  },
  {
    codigo: "90017589",
    descricao: "CINTA POSTE CIRCULAR AL 480mm",
  },
  {
    codigo: "90017590",
    descricao: "PARAFUSO ESP AL MA M16X2mm 450mm",
  },
  {
    codigo: "90017594",
    descricao: "POSTE CONC CIRC 5M 300DAN",
  },
  {
    codigo: "90017595",
    descricao: "POSTE CONCRETO CIRCUL 18,0M 2000DAN",
  },
  {
    codigo: "90017596",
    descricao: "POSTE CONCRETO S/CIRCULAR 18M 1500DAN",
  },
  {
    codigo: "90017597",
    descricao: "CAPACITOR POT MONO 200KVAR 6600V 95KV",
  },
  {
    codigo: "90017599",
    descricao: "SELA CRUZETA AL 120X110mm 30mm",
  },
  {
    codigo: "90017600",
    descricao: "PARAFUSO CAB ABAUL AL M16X100mm",
  },
  {
    codigo: "90017601",
    descricao: "PARAFUSO ESP AL MA M16X2mm 500mm",
  },
  {
    codigo: "90017602",
    descricao: "PARAFUSO ESP AL MA M16X2mm 550mm",
  },
  {
    codigo: "90017603",
    descricao: "PARAFUSO ESP SAE1020 MA M16X2mm 600mm",
  },
  {
    codigo: "90017604",
    descricao: "PARAFUSO ESP AL MA M16X2mm 750mm",
  },
  {
    codigo: "90017607",
    descricao: "CINTA POSTE CIRCULAR AL 300mm",
  },
  {
    codigo: "90017608",
    descricao: "CINTA POSTE CIRCULAR AL 340mm",
  },
  {
    codigo: "90017609",
    descricao: "CINTA POSTE CIRCULAR AL 360mm",
  },
  {
    codigo: "90017631",
    descricao: "PORCA - OLHAL  AL M16 X 2-7H",
  },
  {
    codigo: "90017651",
    descricao: "SUPORTE TIPO Z AL",
  },
  {
    codigo: "90017652",
    descricao: "SUPORTE T ACO 540X10mm AL",
  },
  {
    codigo: "90017653",
    descricao: "SUPORTE P/ INST CF NA HORIZONTAL AL",
  },
  {
    codigo: "90017654",
    descricao: "SUPORTE CHAVE SEC 1P INVERTIDA ACO AL",
  },
  {
    codigo: "90017655",
    descricao: "SUPORTE CHAVE SEC 1P INCLINADA AL",
  },
  {
    codigo: "90017656",
    descricao: "SUPORTE TL AL",
  },
  {
    codigo: "90017657",
    descricao: "SUPORTE AFASTADOR HORIZONTAL 13,8KV AL",
  },
  {
    codigo: "90017658",
    descricao: "SUPORTE P/ INST BF E PR EM POSTE AL",
  },
  {
    codigo: "90017671",
    descricao: "CABO COBERTO CU 15KV XLPE CZ 16mm²",
  },
  {
    codigo: "90017681",
    descricao: "CRUZETA MADEIRA SUSTENT 90X90X600MM",
  },
  {
    codigo: "90017683",
    descricao: "CHAVE FUSIVEL RELIG POL C 15KV 100A 2KA",
  },
  {
    codigo: "90017715",
    descricao: "TRAFO DIST 3F 150KVA N 15KV 380/220V",
  },
  {
    codigo: "90017716",
    descricao: "TRAFO DIST 3F 75KVA AP 15KV 220/127V",
  },
  {
    codigo: "90017718",
    descricao: "TRAFO DIS TRI-750KVA-15KV-220/127V",
  },
  {
    codigo: "90017719",
    descricao: "TRAFO DIS TRI-225KVA-15KV-380/220V - N",
  },
  {
    codigo: "90017720",
    descricao: "CONTROLE ACIONAMENTO AUTO MONO 127VCA",
  },
  {
    codigo: "90017730",
    descricao: "CABO ISOL CU 8,7/15kV 1X1X35MM2 EPR/XLPE",
  },
  {
    codigo: "90017805",
    descricao: "RELIGADOR AUT 3F 34,5KV 560A 10KA-POSTE",
  },
  {
    codigo: "90017822",
    descricao: "CABO ISOL CU 36,2KV 3X1X240MM2 XLPE",
  },
  {
    codigo: "90018021",
    descricao: "CABO MX AL XLPE 0,6/1KV 1X70mm²",
  },
  {
    codigo: "90018041",
    descricao: "CABO CU NU 1/0 AWG",
  },
  {
    codigo: "90018051",
    descricao: "CABO ISOL 0,6/1 KV ALUM 1X185mm XLPE",
  },
  {
    codigo: "90018053",
    descricao: "CABO ISOL 0,6/1 kV COBR 1x120mm XLPE",
  },
  {
    codigo: "90018069",
    descricao: "SUPORTE TOPO ISOLADOR PILAR",
  },
  {
    codigo: "90018129",
    descricao: "RELIGADOR MONO. ELETR. 15KV 100A AUT 4KA",
  },
  {
    codigo: "90018242",
    descricao: "CABO POT AL CL2 1X120mm² 0,6/1KV PT XLPE",
  },
  {
    codigo: "90018362",
    descricao: "CABO POT  COBR 1X10mm² 0,6/1KV XLPE",
  },
  {
    codigo: "90018407",
    descricao: "CABO DE COBRE COBERTO PVC 2AWG",
  },
  {
    codigo: "90018486",
    descricao: "POSTE FIBRA CIRCULAR 10M 300DAN 2P BECO",
  },
  {
    codigo: "90018505",
    descricao: "CABO OPDC 53mm² 1/0AWG ACO ALUMINIZADO",
  },
  {
    codigo: "90018661",
    descricao: "CABO MULT AL PVC 0,60/1KV 2X4AWG",
  },
  {
    codigo: "90019418",
    descricao: "CONECTOR CUNHA CN7 PROT CORROS GALVÂNICA",
  },
  {
    codigo: "90019419",
    descricao: "CONECTOR CUNHA CN4 PROT CORROS GALVÂNICA",
  },
  {
    codigo: "90019420",
    descricao: "CONECTOR CUNHA CN6 PROT CORROS GALVÂNICA",
  },
  {
    codigo: "90019421",
    descricao: "CONECTOR CUNHA CN50 PROT CORR GALVÂNICA",
  },
  {
    codigo: "90019422",
    descricao: "CONECTOR CUNHA CN9 PROT CORROS GALVÂNICA",
  },
  {
    codigo: "90019423",
    descricao: "CONECTOR CUNHA CN51 PROT CORR GALVÂNICA",
  },
  {
    codigo: "90019424",
    descricao: "CONECTOR CUNHA CN53 PROT CORR GALVÂNICA",
  },
  {
    codigo: "90019425",
    descricao: "CONECTOR PERFURANTE 4 SAIDAS RELIGAVEL",
  },
  {
    codigo: "90019426",
    descricao: "CONECTOR DERIVACAO PERF ESTRIBO 70mm",
  },
  {
    codigo: "90019427",
    descricao: "CONECTOR DERIVACAO PERF ESTRIBO 180mm",
  },
  {
    codigo: "90019428",
    descricao: "CONECTOR CUNHA CN17",
  },
  {
    codigo: "90019429",
    descricao: "ALÇA PREF SERVIÇO CABO ISOLADO 70mm² PT",
  },
  {
    codigo: "90019430",
    descricao: "ALÇA PREF SERVIÇO CABO ISOLADO 35mm² VM",
  },
  {
    codigo: "90019536",
    descricao: "CHAVE SECC 15 KV 630 A 3P AUT GAS",
  },
  {
    codigo: "90019541",
    descricao: "TRAFO 1F 1,5KVA BCO 7,96KV 127V OVI",
  },
  {
    codigo: "90019542",
    descricao: "TRAFO 1F 1,5KVA BCO 20,3KV 127V OVI",
  },
  {
    codigo: "90019543",
    descricao: "TRAFO 1F 5KVA G 7,96KV 240/120V OVI",
  },
  {
    codigo: "90019544",
    descricao: "TRAFO 1F 10KVA G 7,96KV 240/120V OVI",
  },
  {
    codigo: "90019545",
    descricao: "TRAFO 1F 15KVA G 7,96KV 240/120V OVI",
  },
  {
    codigo: "90019546",
    descricao: "TRAFO 1F 25KVA G 15KV 240/120V OVI",
  },
  {
    codigo: "90019547",
    descricao: "TRAFO 1F 37,5KVA G 15KV 240/120V OVI",
  },
  {
    codigo: "90019548",
    descricao: "TRAFO 1F 50KVA G 15KV 240/120V OVI",
  },
  {
    codigo: "90019549",
    descricao: "TRAFO 1F 100KVA G 15KV 240/120V OVI",
  },
  {
    codigo: "90019550",
    descricao: "TRAFO 1F 10KVA H 15KV 254/127V OVI",
  },
  {
    codigo: "90019551",
    descricao: "TRAFO 1F 15KVA H 15KV 254/127V OVI",
  },
  {
    codigo: "90019552",
    descricao: "TRAFO 1F 25KVA H 15KV 254/127V OVI",
  },
  {
    codigo: "90019553",
    descricao: "TRAFO 1F 37,5KVA H 15KV 254/127V OVI",
  },
  {
    codigo: "90019554",
    descricao: "TRAFO 1F 10KVA K 36,2KV 254/127V OVI",
  },
  {
    codigo: "90019555",
    descricao: "TRAFO 1F 15KVA K 36,2KV 254/127V OVI",
  },
  {
    codigo: "90019556",
    descricao: "TRAFO 1F 25KVA K 36,2KV 254/127V OVI",
  },
  {
    codigo: "90019557",
    descricao: "TRAFO 3F 15KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "90019558",
    descricao: "TRAFO 3F 30KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "90019559",
    descricao: "TRAFO 3F 45KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "90019560",
    descricao: "TRAFO 3F 75KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "90019561",
    descricao: "TRAFO 3F 112,5KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "90019562",
    descricao: "TRAFO 3F 150KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "90019563",
    descricao: "TRAFO 3F 225KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "90019564",
    descricao: "TRAFO 3F 300KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "90019565",
    descricao: "TRAFO 3F 500KVA M 15KV 220/127V OVI",
  },
  {
    codigo: "90019566",
    descricao: "TRAFO 3F 30KVA N 15KV 380/220V OVI",
  },
  {
    codigo: "90019567",
    descricao: "TRAFO 3F 45KVA N 15KV 380/220V OVI",
  },
  {
    codigo: "90019568",
    descricao: "TRAFO 3F 75KVA N 15KV 380/220V OVI",
  },
  {
    codigo: "90019569",
    descricao: "TRAFO 3F 112,5KVA N 15KV 380/220V OVI",
  },
  {
    codigo: "90019570",
    descricao: "TRAFO 3F 150KVA N 15KV 380/220V OVI",
  },
  {
    codigo: "90019571",
    descricao: "TRAFO 3F 45KVA AP 15KV 220/127V OVI",
  },
  {
    codigo: "90019572",
    descricao: "TRAFO 3F 75KVA AP 15KV 220/127V OVI",
  },
  {
    codigo: "90019573",
    descricao: "TRAFO 3F 112,5KVA AP 15KV 220/127V OVI",
  },
  {
    codigo: "90019574",
    descricao: "TRAFO 3F 150KVA AP 15KV 220/127V OVI",
  },
  {
    codigo: "90019575",
    descricao: "TRAFO 3F 30KVA P 36,2KV 220/127V OVI",
  },
  {
    codigo: "90019576",
    descricao: "TRAFO 3F 45KVA P 36,2KV 220/127V OVI",
  },
  {
    codigo: "90019577",
    descricao: "TRAFO 3F 75KVA P 36,2KV 220/127V OVI",
  },
  {
    codigo: "90019578",
    descricao: "TRAFO 3F 75KVA Q 36,2KV 380/220V OVI",
  },
  {
    codigo: "90019581",
    descricao: "TRAFO PEDESTAL 3F OVI 75KVA 15KV 220V",
  },
  {
    codigo: "90019582",
    descricao: "TRAFO PEDESTAL 3F OVI 150KVA 15KV 220V",
  },
  {
    codigo: "90019583",
    descricao: "TRAFO PEDESTAL 3F OVI 300KVA 15KV 220V",
  },
  {
    codigo: "90019584",
    descricao: "TRAFO PEDESTAL 3F OVI 500KVA 15KV 220V",
  },
  {
    codigo: "90019585",
    descricao: "TRAFO PEDESTAL 3F OVI 500KVA 15KV 380V",
  },
  {
    codigo: "90019586",
    descricao: "TRAFO PEDESTAL 3F OVI 750KVA 15KV 220V",
  },
  {
    codigo: "90019587",
    descricao: "TRAFO SUBM 3F OVI 300KVA 15KV 220/127V",
  },
  {
    codigo: "90019588",
    descricao: "TRAFO SUBM 3F OVI 500KVA 15KV 220/127V",
  },
  {
    codigo: "90019589",
    descricao: "TRAFO SUBM 3F OVI 750KVA 15KV 220/127V",
  },
  {
    codigo: "90019590",
    descricao: "TRAFO SUBM 3F OVI 1MVA 15KV 400/231V",
  },
  {
    codigo: "90019959",
    descricao: "TERMINAL EXT CAB ISOL 20/35KV 240MM2 CO",
  },
  {
    codigo: "90020171",
    descricao: "LUMINARIA LED 80W 70000H DIAM 50A70MM",
  },
  {
    codigo: "90020221",
    descricao: "POSTE ACO QUADRAD ALT 7500MMx200DAN",
  },
  {
    codigo: "90020243",
    descricao: "CONEC PERF RAMAL CLI TP6 70-50/70-50",
  },
  {
    codigo: "71000037",
    descricao: "4.12 - I - AMARRAÇÃO",
  },
  {
    codigo: "71000151",
    descricao: "4.12 - L.V - I - AMARRAÇÃO",
  },
  {
    codigo: "71010000",
    descricao: "1.1 - PODA ÁRVORE URBANA",
  },
  {
    codigo: "71010001",
    descricao: "1.2 - PODA ÁRVORE RURAL",
  },
  {
    codigo: "71010010",
    descricao: "1.3 - CORTE ÁRVORE URBANA",
  },
  {
    codigo: "71010011",
    descricao: "1.4 - CORTE ÁRVORE RURAL",
  },
  {
    codigo: "71010012",
    descricao: "1.5 - ACEIRO",
  },
  {
    codigo: "71010013",
    descricao: "1.6 - ABERTURA DE FAIXA",
  },
  {
    codigo: "71010014",
    descricao: "1.7 - CR - LIMPEZA DE FAIXA COM REMO",
  },
  {
    codigo: "71010015",
    descricao: "1.8 - CORTE DE BAMBU",
  },
  {
    codigo: "71010016",
    descricao: "1.9 - PODA EM CERCA VIVA",
  },
  {
    codigo: "71010017",
    descricao: "10.1 - D - ISOLADOR",
  },
  {
    codigo: "71010018",
    descricao: "10.1 - I - ISOLADOR",
  },
  {
    codigo: "71010019",
    descricao: "10.1 - R - ISOLADOR",
  },
  {
    codigo: "71010020",
    descricao: "10.1 - SA - ISOLADOR",
  },
  {
    codigo: "71010021",
    descricao: "10.1 - SR - ISOLADOR",
  },
  {
    codigo: "71010022",
    descricao: "11.1 - D - RAMAL DE LIGAÇÃO",
  },
  {
    codigo: "71010023",
    descricao: "11.1 - I - RAMAL DE LIGAÇÃO",
  },
  {
    codigo: "71010024",
    descricao: "11.1 - R - RAMAL DE LIGAÇÃO",
  },
  {
    codigo: "71010025",
    descricao: "11.1 - SA - RAMAL DE LIGAÇÃO",
  },
  {
    codigo: "71010026",
    descricao: "11.1 - SR - RAMAL DE LIGAÇÃO",
  },
  {
    codigo: "71010027",
    descricao: "12.1 - D - PARA-RAIO",
  },
  {
    codigo: "71010028",
    descricao: "12.1 - I - PARA-RAIO",
  },
  {
    codigo: "71010029",
    descricao: "12.1 - R - PARA-RAIO",
  },
  {
    codigo: "71010030",
    descricao: "12.1 - SA - PARA-RAIO",
  },
  {
    codigo: "71010031",
    descricao: "12.1 - SR - PARA-RAIO",
  },
  {
    codigo: "71010037",
    descricao: "13.2 - CONCRETAR BASE",
  },
  {
    codigo: "71010038",
    descricao: "13.3 - REAPRUMAR POSTE",
  },
  {
    codigo: "71010039",
    descricao: "13.4 - REFAZER PASSEIO",
  },
  {
    codigo: "71010040",
    descricao: "13.5 - D - ESTAI",
  },
  {
    codigo: "71010041",
    descricao: "13.5 - I - ESTAI",
  },
  {
    codigo: "71010042",
    descricao: "13.5 - R - ESTAI",
  },
  {
    codigo: "71010043",
    descricao: "13.5 - SA - ESTAI",
  },
  {
    codigo: "71010044",
    descricao: "13.5 - SR - ESTAI",
  },
  {
    codigo: "71010045",
    descricao: "13.6 - I - ESTAI DE ÂNCORA",
  },
  {
    codigo: "71010046",
    descricao: "13.7 - MANUTENÇÃO EM ESTAI",
  },
  {
    codigo: "71010047",
    descricao: "14.1 - D - PADRÃO ECONÔMICO",
  },
  {
    codigo: "71010048",
    descricao: "14.1 - I - PADRÃO ECONÔMICO",
  },
  {
    codigo: "71010049",
    descricao: "14.2 - D - PADRÃO MONO/ BI / TRIFÁSIC",
  },
  {
    codigo: "71010050",
    descricao: "14.2 - I - PADRÃO MONO/ BI / TRIFÁSICO",
  },
  {
    codigo: "71010051",
    descricao: "14.3 - I - KIT DE INST ELÉTRICA RESIDENC",
  },
  {
    codigo: "71010052",
    descricao: "14.4 - I - KIT DE PROT ELÉTRICA RESIDEN",
  },
  {
    codigo: "71010053",
    descricao: "15.1 - INSPECIONAR REDE RURAL",
  },
  {
    codigo: "71010054",
    descricao: "15.2 - INSPECIONAR REDE URBANA",
  },
  {
    codigo: "71010055",
    descricao: "16.1 - ALUGUÉL DE TRATOR",
  },
  {
    codigo: "71010056",
    descricao: "16.10 - EFETUAR MANUTENÇÃO EM CHA",
  },
  {
    codigo: "71010057",
    descricao: "16.11 - I - ELETRODUTO REDE SUBTERRÂ",
  },
  {
    codigo: "71010058",
    descricao: "16.12 - I - CAIXA DE PASSAGEM",
  },
  {
    codigo: "71010059",
    descricao: "16.13 - ENVELOPAR ELETROD REDE SUBT",
  },
  {
    codigo: "71010060",
    descricao: "16.14 - D - DERIVAÇÃO ENTRADA SUBTER",
  },
  {
    codigo: "71010061",
    descricao: "16.14 - I - DERIVAÇÃO ENTRADA SUBTER",
  },
  {
    codigo: "71010062",
    descricao: "16.14 - R - DERIVAÇÃO ENTRADA SUBTER",
  },
  {
    codigo: "71010063",
    descricao: "16.15 - LAVAR ISOLADOR",
  },
  {
    codigo: "71010064",
    descricao: "16.16 - I - ACESS POSTE PADRÃO ENTR E",
  },
  {
    codigo: "71010065",
    descricao: "16.17 - ADICIONAL CAVA DE POSTE EM R",
  },
  {
    codigo: "71010066",
    descricao: "16.18 - ADICIONAL CAVA POSTE EM PÂN",
  },
  {
    codigo: "71010067",
    descricao: "16.2 - ALUGUÉL DE BALSA COM REBOCA",
  },
  {
    codigo: "71010068",
    descricao: "16.3 - ALUGUÉL DE BARCO",
  },
  {
    codigo: "71010069",
    descricao: "16.4 - I - PLACA ALUSIVA PROGRAMA ESP",
  },
  {
    codigo: "71010070",
    descricao: "16.5 - DESLOCAMENTO FORA ÁREA EMP",
  },
  {
    codigo: "71010071",
    descricao: "16.6 - EFETUAR MANUTENÇÃO ACESSÓR",
  },
  {
    codigo: "71010072",
    descricao: "16.7 - REMOVER ABELHAS",
  },
  {
    codigo: "71010073",
    descricao: "16.8 - RETIRAR OBJETOS ESTRANHOS DA",
  },
  {
    codigo: "71010074",
    descricao: "16.9 - NUMERAR POSTES E EQUIPAMENT",
  },
  {
    codigo: "71010075",
    descricao: "2.1 - I - ATERRAMENTO DE CERCA",
  },
  {
    codigo: "71010076",
    descricao: "2.2 - I - ATERRAMENTO COM UMA HAST",
  },
  {
    codigo: "71010077",
    descricao: "2.3 - I - ATERRAMENTO COM MAIS DE U",
  },
  {
    codigo: "71010078",
    descricao: "2.4 - I - MEDIR RESISTÊNCIA DE ATERRAM",
  },
  {
    codigo: "71010079",
    descricao: "2.5 - I - FURAÇÃO DE POÇO",
  },
  {
    codigo: "71010085",
    descricao: "3.6 - SA - ELO/PORTA FUS/LÂMINA",
  },
  {
    codigo: "71010086",
    descricao: "3.6 - SR - ELO/PORTA FUS/LÂMINA",
  },
  {
    codigo: "71010092",
    descricao: "4.10 - I - EMENDA PRÉ-REUNIDA PRIMÁR",
  },
  {
    codigo: "71010093",
    descricao: "4.11 - I - TERMINAL PRIMÁRIO - MUFLA",
  },
  {
    codigo: "71010094",
    descricao: "4.12 - SA - AMARRAÇÃO",
  },
  {
    codigo: "71010095",
    descricao: "4.12 - SR - AMARRAÇÃO",
  },
  {
    codigo: "71010096",
    descricao: "4.13 - I - FLYTAP",
  },
  {
    codigo: "71010097",
    descricao: "4.13  - SA - FLYTAP",
  },
  {
    codigo: "71010098",
    descricao: "4.13 - SR - FLYTAP",
  },
  {
    codigo: "71010099",
    descricao: "4.14 - I - BIG JUMPER",
  },
  {
    codigo: "71010100",
    descricao: "4.15 - D - COND PRÉ-REUNIDA SECUNDÁ",
  },
  {
    codigo: "71010101",
    descricao: "4.15 - I - COND PRÉ-REUNIDA - SECUNDÁ",
  },
  {
    codigo: "71010102",
    descricao: "4.15 - R - COND PRÉ-REUNIDA SECUNDÁ",
  },
  {
    codigo: "71010103",
    descricao: "4.15 - SA - COND PRÉ-REUNIDA SECUNDÁ",
  },
  {
    codigo: "71010104",
    descricao: "4.15 - SR - COND PRÉ-REUNIDA SECUNDÁ",
  },
  {
    codigo: "71010105",
    descricao: "4.2 - D - CONDUTOR REDE COMPACTA",
  },
  {
    codigo: "71010106",
    descricao: "4.2 - I - CONDUTOR REDE COMPACTA",
  },
  {
    codigo: "71010107",
    descricao: "4.2 - R - CONDUTOR REDE COMPACTA",
  },
  {
    codigo: "71010108",
    descricao: "4.2 - SA - CONDUTOR REDE COMPACTA",
  },
  {
    codigo: "71010109",
    descricao: "4.2 - SR - CONDUTOR REDE COMPACTA",
  },
  {
    codigo: "71010110",
    descricao: "4.3 - D - COND PRÉ-REUNIDA - PRIMÁRIA",
  },
  {
    codigo: "71010111",
    descricao: "4.3 - I - COND PRÉ-REUNIDA - PRIMÁRIA",
  },
  {
    codigo: "71010112",
    descricao: "4.3 - R - COND PRÉ-REUNIDA - PRIMÁRIA",
  },
  {
    codigo: "71010113",
    descricao: "4.3 - SA - COND PRÉ-REUNIDA - PRIMÁRI",
  },
  {
    codigo: "71010114",
    descricao: "4.3 - SR - COND PRÉ-REUNIDA - PRIMÁRI",
  },
  {
    codigo: "71010115",
    descricao: "4.4 - D - CONDUTOR REDE SUBTERRÂNEA",
  },
  {
    codigo: "71010116",
    descricao: "4.4 - I - CONDUTOR REDE SUBTERRÂNEA",
  },
  {
    codigo: "71010118",
    descricao: "4.6 - I - RETENSIONAMENTO",
  },
  {
    codigo: "71010119",
    descricao: "4.7 - I - CONEXÃO",
  },
  {
    codigo: "71010120",
    descricao: "4.7 - SA - CONEXÃO",
  },
  {
    codigo: "71010121",
    descricao: "4.7 - SR - CONEXÃO",
  },
  {
    codigo: "71010122",
    descricao: "4.8 - I - SECCIONAR CIRCUITO",
  },
  {
    codigo: "71010123",
    descricao: "4.9 - I - EMENDA",
  },
  {
    codigo: "71010124",
    descricao: "5.1 - D - DISJ MT E CONJUNTO DE MEDIÇ",
  },
  {
    codigo: "71010125",
    descricao: "5.1 - I - DISJ MT E CONJUNTO DE MEDIÇÃ",
  },
  {
    codigo: "71010126",
    descricao: "5.1 - R - DISJ MT E CONJUNTO DE MEDIÇ",
  },
  {
    codigo: "71010127",
    descricao: "5.1 - SA - DISJ MT E CONJUNTO DE MEDI",
  },
  {
    codigo: "71010128",
    descricao: "5.1 - SR - DISJ MT E CONJUNTO DE MEDI",
  },
  {
    codigo: "71010144",
    descricao: "6.1 - D - ENTRADA PRIMÁRIA",
  },
  {
    codigo: "71010145",
    descricao: "6.1 - I - ENTRADA PRIMÁRIA",
  },
  {
    codigo: "71010146",
    descricao: "6.1 - R - ENTRADA PRIMÁRIA",
  },
  {
    codigo: "71010147",
    descricao: "6.1 - SA - ENTRADA PRIMÁRIA",
  },
  {
    codigo: "71010148",
    descricao: "6.1 - SR - ENTRADA PRIMÁRIA",
  },
  {
    codigo: "71010149",
    descricao: "7.1 - D - TRANSFORMADOR",
  },
  {
    codigo: "71010150",
    descricao: "7.1 - I - TRANSFORMADOR",
  },
  {
    codigo: "71010151",
    descricao: "7.1 - R - TRANSFORMADOR",
  },
  {
    codigo: "71010152",
    descricao: "7.1 - SA - TRANSFORMADOR",
  },
  {
    codigo: "71010153",
    descricao: "7.1 - SR - TRANSFORMADOR",
  },
  {
    codigo: "71010154",
    descricao: "7.2 - D - ESTAÇÃO TRANSF MONO / TRI",
  },
  {
    codigo: "71010155",
    descricao: "7.2 - I - ESTAÇÃO TRANSF MONO / TRI",
  },
  {
    codigo: "71010156",
    descricao: "7.2 - R - ESTAÇÃO TRANSF MONO/ TRI",
  },
  {
    codigo: "71010157",
    descricao: "7.2 - SA - ESTAÇÃO TRANSF MONO/ TRI",
  },
  {
    codigo: "71010158",
    descricao: "7.2 - SR - ESTAÇÃO TRANSF MONO/ TRI",
  },
  {
    codigo: "71010159",
    descricao: "7.3 - D - ESTAÇÃO TRANSFORMADORA D",
  },
  {
    codigo: "71010160",
    descricao: "7.3 - I - ESTAÇÃO TRANSFORMADORA DE",
  },
  {
    codigo: "71010161",
    descricao: "7.3 - R - ESTAÇÃO TRANSFORMADORA D",
  },
  {
    codigo: "71010162",
    descricao: "7.3 - SA - ESTAÇÃO TRANSFORMADORA",
  },
  {
    codigo: "71010163",
    descricao: "7.3 - SR - ESTAÇÃO TRANSFORMADORA D",
  },
  {
    codigo: "71010164",
    descricao: "7.4 - SA - TAP DE TRANSFORMADOR",
  },
  {
    codigo: "71010165",
    descricao: "7.4 - SR - TAP DE TRANSFORMADOR",
  },
  {
    codigo: "71010166",
    descricao: "7.5 - D - ACESSÓRIO CÂMARA DE TRANSF",
  },
  {
    codigo: "71010167",
    descricao: "7.5 - I - ACESSÓRIO CÂMARA DE TRANSF",
  },
  {
    codigo: "71010168",
    descricao: "7.6 - I - EFETUAR MANUT CÂMARA DE TR",
  },
  {
    codigo: "71010169",
    descricao: "8.1 - D - ESTRUTURA PRIMÁRIA - MONO",
  },
  {
    codigo: "71010170",
    descricao: "8.1 - I - ESTRUTURA PRIMÁRIA - MONO",
  },
  {
    codigo: "71010171",
    descricao: "8.1 - R - ESTRUTURA PRIMÁRIA - MONO",
  },
  {
    codigo: "71010172",
    descricao: "8.1 - SA - ESTRUTURA PRIMÁRIA - MONO",
  },
  {
    codigo: "71010173",
    descricao: "8.1 - SR - ESTRUTURA PRIMÁRIA - MONO",
  },
  {
    codigo: "71010180",
    descricao: "8.3.2 - I - ESTR PRIMÁRIA-REDE COMPAC",
  },
  {
    codigo: "71010183",
    descricao: "8.3.1 - SR - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71010184",
    descricao: "8.4 - D - EST PRIMÁRIA REDE PRÉ-REUNID",
  },
  {
    codigo: "71010185",
    descricao: "8.4 - I - EST PRIMÁRIA REDE PRÉ-REUNID",
  },
  {
    codigo: "71010186",
    descricao: "8.4 - R - EST PRIMÁRIA REDE PRÉ-REUNID",
  },
  {
    codigo: "71010187",
    descricao: "8.4 - SA - EST PRIMÁRIA REDE PRÉ-REUNI",
  },
  {
    codigo: "71010188",
    descricao: "8.4 - SR - EST PRIMÁRIA REDE PRÉ-REUNI",
  },
  {
    codigo: "71010189",
    descricao: "8.5 - D - ACESSÓRIO REDE COMPACTA O",
  },
  {
    codigo: "71010190",
    descricao: "8.5 - I - ACESSÓRIO REDE COMPACTA OU",
  },
  {
    codigo: "71010191",
    descricao: "8.5 - R - ACESSÓRIO REDE COMPACTA O",
  },
  {
    codigo: "71010192",
    descricao: "8.5 - SA - ACESSÓRIO REDE COMPACTA O",
  },
  {
    codigo: "71010193",
    descricao: "8.5 - SR - ACESSÓRIO REDE COMPACTA O",
  },
  {
    codigo: "71010194",
    descricao: "8.6 - D - ESTRUTURA SECUNDÁRIA",
  },
  {
    codigo: "71010195",
    descricao: "8.6 - I - ESTRUTURA SECUNDÁRIA",
  },
  {
    codigo: "71010196",
    descricao: "8.6 - R - ESTRUTURA SECUNDÁRIA",
  },
  {
    codigo: "71010197",
    descricao: "8.6 - SA - ESTRUTURA SECUNDÁRIA",
  },
  {
    codigo: "71010198",
    descricao: "8.6 - SR - ESTRUTURA SECUNDÁRIA",
  },
  {
    codigo: "71010199",
    descricao: "8.7 - D - ESPAÇADOR SECUNDÁRIO",
  },
  {
    codigo: "71010200",
    descricao: "8.7 - I - ESPAÇADOR SECUNDÁRIO",
  },
  {
    codigo: "71010201",
    descricao: "8.7 - R - ESPAÇADOR SECUNDÁRIO",
  },
  {
    codigo: "71010202",
    descricao: "8.7 - SA - ESPAÇADOR SECUNDÁRIO",
  },
  {
    codigo: "71010203",
    descricao: "8.7 - SR - ESPAÇADOR SECUNDÁRIO",
  },
  {
    codigo: "71010204",
    descricao: "9.1 - D - ILUMINAÇÃO PÚBLICA",
  },
  {
    codigo: "71010205",
    descricao: "9.1 - I - ILUMINAÇÃO PÚBLICA",
  },
  {
    codigo: "71010206",
    descricao: "9.1 - R - ILUMINAÇÃO PÚBLICA",
  },
  {
    codigo: "71010207",
    descricao: "9.1 - SA - ILUMINAÇÃO PÚBLICA",
  },
  {
    codigo: "71010208",
    descricao: "9.1 - SR - ILUMINAÇÃO PÚBLICA",
  },
  {
    codigo: "71010209",
    descricao: "9.2 - I - ALTEAR/ REBAIXAR IP",
  },
  {
    codigo: "71010210",
    descricao: "9.3 - R - ACESSÓRIO DE ILUMINAÇÃO PÚ",
  },
  {
    codigo: "71010211",
    descricao: "9.3 - SA - ACESSÓRIO DE ILUMINAÇÃO PÚ",
  },
  {
    codigo: "71010212",
    descricao: "9.3 - SR - ACESSÓRIO DE ILUMINAÇÃO PÚ",
  },
  {
    codigo: "71010213",
    descricao: "1.1 - LV - PODA ÁRVORE URBANA",
  },
  {
    codigo: "71010214",
    descricao: "1.2 - LV - PODA ÁRVORE RURAL",
  },
  {
    codigo: "71010215",
    descricao: "1.3 - LV - CORTE ÁRVORE URBANA",
  },
  {
    codigo: "71010216",
    descricao: "1.4 - LV - CORTE ÁRVORE RURAL",
  },
  {
    codigo: "71010217",
    descricao: "1.9 - LV - PODA EM CERCA VIVA",
  },
  {
    codigo: "71010218",
    descricao: "10.1 - L.V. - D - ISOLADOR",
  },
  {
    codigo: "71010219",
    descricao: "10.1 - L.V. - I - ISOLADOR",
  },
  {
    codigo: "71010220",
    descricao: "10.1 - L.V. - R - ISOLADOR",
  },
  {
    codigo: "71010221",
    descricao: "10.1 - L.V. - SA - ISOLADOR",
  },
  {
    codigo: "71010222",
    descricao: "10.1 - L.V. - SR - ISOLADOR",
  },
  {
    codigo: "71010223",
    descricao: "12.1 - L.V. - D - PARA-RAIO",
  },
  {
    codigo: "71010224",
    descricao: "12.1 - L.V. - I - PARA-RAIO",
  },
  {
    codigo: "71010225",
    descricao: "12.1 - L.V. - R - PARA-RAIO",
  },
  {
    codigo: "71010226",
    descricao: "12.1 - L.V. - SA - PARA-RAIO",
  },
  {
    codigo: "71010227",
    descricao: "12.1 - L.V. - SR - PARA-RAIO",
  },
  {
    codigo: "71010233",
    descricao: "13.3 - LV - REAPRUMAR POSTE",
  },
  {
    codigo: "71010234",
    descricao: "13.5 - LV - D - ESTAI",
  },
  {
    codigo: "71010235",
    descricao: "13.5 - LV - I - ESTAI",
  },
  {
    codigo: "71010236",
    descricao: "13.5 - LV - R -  ESTAI",
  },
  {
    codigo: "71010237",
    descricao: "13.5 - LV - SA - ESTAI",
  },
  {
    codigo: "71010238",
    descricao: "13.5 - LV - SR - ESTAI",
  },
  {
    codigo: "71010239",
    descricao: "13.7 - LV - MANUTENÇÃO EM ESTAI",
  },
  {
    codigo: "71010240",
    descricao: "16.10 - LV - MANUTENÇÃO EM CHAVES",
  },
  {
    codigo: "71010241",
    descricao: "16.5 - LV - DESLOC FORA ÁREA EMP",
  },
  {
    codigo: "71010242",
    descricao: "16.6 - LV - MANUTENÇÃO ACESSÓRIO RE",
  },
  {
    codigo: "71010243",
    descricao: "16.7 - LV - REMOVER ABELHAS",
  },
  {
    codigo: "71010244",
    descricao: "16.8 - LV - RET OBJ ESTRANHOS DA REDE",
  },
  {
    codigo: "71010250",
    descricao: "3.6 - LV - SA - ELO/PORTA FUS/LÂMINA",
  },
  {
    codigo: "71010251",
    descricao: "3.6 - LV - SR - ELO/PORTA FUS/LÂMINA",
  },
  {
    codigo: "71010258",
    descricao: "4.12 - L.V. - SA - AMARRAÇÃO",
  },
  {
    codigo: "71010259",
    descricao: "4.12 - L.V. - SR - AMARRAÇÃO",
  },
  {
    codigo: "71010260",
    descricao: "4.13 - L.V. - I  - FLYTAP",
  },
  {
    codigo: "71010261",
    descricao: "4.13 - L.V. - SA - FLYTAP",
  },
  {
    codigo: "71010262",
    descricao: "4.13 - L.V. - SR - FLYTAP",
  },
  {
    codigo: "71010263",
    descricao: "4.14 - L.V. - I - BIG JUMPER",
  },
  {
    codigo: "71010269",
    descricao: "4.5 - LV - D - ENCABEÇAMENTO",
  },
  {
    codigo: "71010270",
    descricao: "4.5 - LV - I - ENCABEÇAMENTO",
  },
  {
    codigo: "71010271",
    descricao: "4.7 - LV - I - CONEXÃO",
  },
  {
    codigo: "71010272",
    descricao: "4.7 - LV - SA - CONEXÃO",
  },
  {
    codigo: "71010273",
    descricao: "4.7 - LV - SR - CONEXÃO",
  },
  {
    codigo: "71010274",
    descricao: "4.8 - L.V. - I - SECCIONAR CIRCUITO",
  },
  {
    codigo: "71010275",
    descricao: "4.9 - L.V. - I - EMENDA",
  },
  {
    codigo: "71010276",
    descricao: "5.1 - LV - D - DISJ MT E CONJUNTO DE ME",
  },
  {
    codigo: "71010277",
    descricao: "5.1 - LV - I - DISJ MT E CONJUNTO DE ME",
  },
  {
    codigo: "71010278",
    descricao: "5.1 - LV - R - DISJ MT E CONJUNTO DE ME",
  },
  {
    codigo: "71010279",
    descricao: "5.1 - LV - SA - DISJ MT E CONJUNTO DE M",
  },
  {
    codigo: "71010280",
    descricao: "5.1 - LV - SR - DISJ MT E CONJUNTO DE M",
  },
  {
    codigo: "71010296",
    descricao: "6.1 - LV - D - ENTRADA PRIMÁRIA",
  },
  {
    codigo: "71010297",
    descricao: "6.1 - LV - I - ENTRADA PRIMÁRIA",
  },
  {
    codigo: "71010298",
    descricao: "6.1 - LV - R - ENTRADA PRIMÁRIA",
  },
  {
    codigo: "71010299",
    descricao: "6.1 - LV - SA - ENTRADA PRIMÁRIA",
  },
  {
    codigo: "71010300",
    descricao: "6.1 - LV - SR - ENTRADA PRIMÁRIA",
  },
  {
    codigo: "71010316",
    descricao: "8.1 - LV - D - EST PRIM - MONOFÁSICA",
  },
  {
    codigo: "71010317",
    descricao: "8.1 - LV - I - EST PRIM - MONOFÁSICA",
  },
  {
    codigo: "71010318",
    descricao: "8.1 - LV - R - EST PRIM - MONOFÁSICA",
  },
  {
    codigo: "71010319",
    descricao: "8.1 - LV - SA - EST PRIM - MONOFÁSICA",
  },
  {
    codigo: "71010320",
    descricao: "8.1 - LV - SR - EST PRIM - MONOFÁSICA",
  },
  {
    codigo: "71010329",
    descricao: "8.3.1 - LV - SA - ESTR PRIMÁRIA-REDE CO",
  },
  {
    codigo: "71010330",
    descricao: "8.3.1 - LV - SR - ESTR PRIMÁRIA-REDE CO",
  },
  {
    codigo: "71010336",
    descricao: "8.5 - LV - D - ACESSÓRIO REDE COMPACT",
  },
  {
    codigo: "71010337",
    descricao: "8.5 - LV - I - ACESSÓRIO REDE COMPACTA",
  },
  {
    codigo: "71010338",
    descricao: "8.5 - LV - R - ACESSÓRIO REDE COMPACT",
  },
  {
    codigo: "71010339",
    descricao: "8.5 - LV - SA - ACESSÓRIO REDE COMPAC",
  },
  {
    codigo: "71010340",
    descricao: "8.5 - LV - SR - ACESSÓRIO REDE COMPAC",
  },
  {
    codigo: "71010771",
    descricao: "4.6 - L.V. - I - RETENSIONAMENTO",
  },
  {
    codigo: "71011323",
    descricao: "1.8 - LV - CORTE BAMBÚ SEM REMOÇÃO",
  },
  {
    codigo: "71011324",
    descricao: "1.11 - REMOÇÃO VEGETAÇÃO URB/RURA",
  },
  {
    codigo: "71011325",
    descricao: "1.7 - SR - LIMPEZA DE FAIXA S/ REMOÇÃ",
  },
  {
    codigo: "71011326",
    descricao: "1.12 - CORTE DE EUCALIPTO",
  },
  {
    codigo: "71011367",
    descricao: "1.10 - REMOÇÃO VEGETAÇÃO URB/RUR.",
  },
  {
    codigo: "71011371",
    descricao: "3.2 - D - CHAVE FUSÍVEL",
  },
  {
    codigo: "71011372",
    descricao: "3.2 - I - CHAVE FUSÍVEL",
  },
  {
    codigo: "71011373",
    descricao: "3.2 - LV - D - CHAVE FUSÍVEL",
  },
  {
    codigo: "71011374",
    descricao: "3.2 - LV - I - CHAVE FUSÍVEL",
  },
  {
    codigo: "71011375",
    descricao: "3.2 - LV - R - CHAVE FUSÍVEL",
  },
  {
    codigo: "71011376",
    descricao: "3.2 - LV - SA - CHAVE FUSÍVEL",
  },
  {
    codigo: "71011377",
    descricao: "3.2 - LV - SR - CHAVE FUSÍVEL",
  },
  {
    codigo: "71011378",
    descricao: "3.2 - R - CHAVE FUSÍVEL",
  },
  {
    codigo: "71011379",
    descricao: "3.2 - SA - CHAVE FUSÍVEL",
  },
  {
    codigo: "71011380",
    descricao: "3.2 - SR - CHAVE FUSÍVEL",
  },
  {
    codigo: "71011381",
    descricao: "3.1 - D - CHAVE FACA",
  },
  {
    codigo: "71011382",
    descricao: "3.1 - I - CHAVE FACA",
  },
  {
    codigo: "71011383",
    descricao: "3.1 - LV - D - CHAVE FACA",
  },
  {
    codigo: "71011384",
    descricao: "3.1 - LV - I - CHAVE FACA",
  },
  {
    codigo: "71011385",
    descricao: "3.1 - LV - R - CHAVE FACA",
  },
  {
    codigo: "71011386",
    descricao: "3.1 - LV - SA - CHAVE FACA",
  },
  {
    codigo: "71011387",
    descricao: "3.1 - LV - SR - CHAVE FACA",
  },
  {
    codigo: "71011388",
    descricao: "3.1 - R - CHAVE FACA",
  },
  {
    codigo: "71011389",
    descricao: "3.1 - SA - CHAVE FACA",
  },
  {
    codigo: "71011390",
    descricao: "3.1 - SR - CHAVE FACA",
  },
  {
    codigo: "71011391",
    descricao: "3.4 - I - CHAVE A ÓLEO (BANCO DE CAPA",
  },
  {
    codigo: "71011395",
    descricao: "3.4 - D - CHAVE A ÓLEO (BANCO DE CAPA",
  },
  {
    codigo: "71011398",
    descricao: "3.4 - R - CHAVE A ÓLEO (BANCO DE CAPA",
  },
  {
    codigo: "71011399",
    descricao: "3.4 - SA - CHAVE A ÓLEO (BANCO DE CAP",
  },
  {
    codigo: "71011400",
    descricao: "3.4 - SR - CHAVE A ÓLEO (BANCO DE CAP",
  },
  {
    codigo: "71011401",
    descricao: "5.2.2 - D - REG. TENSÃO EM PLATAFORM",
  },
  {
    codigo: "71011402",
    descricao: "5.2.1 - D - REG. TENSÃO EM ADAPTADOR",
  },
  {
    codigo: "71011403",
    descricao: "5.2.4 - D - REG. TENSÃO EM ADAPTADOR",
  },
  {
    codigo: "71011404",
    descricao: "5.2.1 - I - REG. TENSÃO EM ADAPTADOR",
  },
  {
    codigo: "71011405",
    descricao: "5.2.4 - I - REG. TENSÃO EM ADAPTADOR",
  },
  {
    codigo: "71011406",
    descricao: "5.2.2 - R - REG. TENSÃO EM PLATAFORM",
  },
  {
    codigo: "71011407",
    descricao: "5.2.1 - R - REG. TENSÃO EM ADAPTADOR",
  },
  {
    codigo: "71011408",
    descricao: "5.2.4 - R - REG. TENSÃO EM ADAPTADOR",
  },
  {
    codigo: "71011409",
    descricao: "5.2.2 - SA - REG. TENSÃO EM PLATAFORM",
  },
  {
    codigo: "71011410",
    descricao: "5.2.1 - SA - REG. TENSÃO EM ADAPTADO",
  },
  {
    codigo: "71011411",
    descricao: "5.2.4 - SA - REG. TENSÃO EM ADAPTADO",
  },
  {
    codigo: "71011412",
    descricao: "5.2.5 - SA - REG. TENSÃO EM PLATAFORM",
  },
  {
    codigo: "71011413",
    descricao: "5.2.2 - SR - REG. TENSÃO EM PLATAFORM",
  },
  {
    codigo: "71011414",
    descricao: "5.2.1 - SR - REG. TENSÃO EM ADAPTADO",
  },
  {
    codigo: "71011415",
    descricao: "5.2.4 - SR - REG. TENSÃO EM ADAPTADO",
  },
  {
    codigo: "71011416",
    descricao: "5.2.5 - SR - REG. TENSÃO EM PLATAFORM",
  },
  {
    codigo: "71011417",
    descricao: "5.2.5 - D - REG. TENSÃO EM PLATAFORM",
  },
  {
    codigo: "71011418",
    descricao: "5.2.2 - I - REG. TENSÃO EM PLATAFORMA",
  },
  {
    codigo: "71011419",
    descricao: "5.2.5 - I - REG. TENSÃO EM PLATAFORMA",
  },
  {
    codigo: "71011420",
    descricao: "5.2.5 - R - REG. TENSÃO EM PLATAFORM",
  },
  {
    codigo: "71011421",
    descricao: "5.2.1 - LV - D - REG. TENSÃO EM ADAPTA",
  },
  {
    codigo: "71011422",
    descricao: "5.2.1 - LV - I - REG TENSÃO EM ADAPTAD",
  },
  {
    codigo: "71011423",
    descricao: "5.2.1 - LV - R - REG TENSÃO EM ADAPTAD",
  },
  {
    codigo: "71011424",
    descricao: "5.2.4 - LV - R - REGUL TENSÃO EM ADAPT",
  },
  {
    codigo: "71011425",
    descricao: "5.2.1 - LV - SA - REG TENSÃO EM ADAPTA",
  },
  {
    codigo: "71011426",
    descricao: "5.2.1 - LV - SR - REG TENSÃO EM ADAPTA",
  },
  {
    codigo: "71011427",
    descricao: "5.2.4 - LV - D - REGULADOR TENSÃO EM",
  },
  {
    codigo: "71011428",
    descricao: "5.2.4 - LV - I - REGULADOR TENSÃO EM A",
  },
  {
    codigo: "71011429",
    descricao: "5.2.4 - LV - SR - REGULADOR TENSÃO EM",
  },
  {
    codigo: "71011434",
    descricao: "5.2.4 - LV - SA - REGUL TENSÃO EM ADAP",
  },
  {
    codigo: "71011441",
    descricao: "5.2.3 - D - RELIGADOR COM ESTRUTURA",
  },
  {
    codigo: "71011442",
    descricao: "5.2.6 - D - RELIGADOR SEM ACESSÓRIOS",
  },
  {
    codigo: "71011443",
    descricao: "5.2.3 - I - RELIGADOR COM ESTRUTURA",
  },
  {
    codigo: "71011444",
    descricao: "5.2.6 - I - RELIGADOR SEM ACESSÓRIOS",
  },
  {
    codigo: "71011455",
    descricao: "5.2.3 - R - RELIGADOR COM ESTRUTURA",
  },
  {
    codigo: "71011456",
    descricao: "5.2.6 - R - RELIGADOR SEM ACESSÓRIOS",
  },
  {
    codigo: "71011457",
    descricao: "5.2.3 - SA - RELIGADOR COM ESTRUTURA",
  },
  {
    codigo: "71011458",
    descricao: "5.2.6 - SA - RELIGADOR SEM ACESSÓRIOS",
  },
  {
    codigo: "71011459",
    descricao: "5.2.3 - SR - RELIGADOR COM ESTRUTURA",
  },
  {
    codigo: "71011460",
    descricao: "5.2.6 - SR - RELIGADOR SEM ACESSÓRIOS",
  },
  {
    codigo: "71011461",
    descricao: "5.3 - D - BANCO DE CAPACITORES (VASO",
  },
  {
    codigo: "71011462",
    descricao: "5.3 - I - BANCO DE CAPACITORES (VASOS",
  },
  {
    codigo: "71011466",
    descricao: "5.3 - R - BANCO DE CAPACITORES (VASOS",
  },
  {
    codigo: "71011467",
    descricao: "5.3 - SA - BANCO DE CAPACITORES (VASO",
  },
  {
    codigo: "71011468",
    descricao: "5.3 - SR - BANCO DE CAPACITORES (VASO",
  },
  {
    codigo: "71011475",
    descricao: "7.7 - R - TRANS. MONOFÁSICO 1-5KVA -B",
  },
  {
    codigo: "71011476",
    descricao: "7.7 - SA - TRANS. MONOFÁSICO 1-5KVA -",
  },
  {
    codigo: "71011477",
    descricao: "7.7 - SR - TRANS. MONOFÁSICO 1-5KVA -",
  },
  {
    codigo: "71011478",
    descricao: "7.7 - D - TRANS. MONOFÁSICO 1-5KVA -B",
  },
  {
    codigo: "71011479",
    descricao: "7.7 - I - TRANS. MONOFÁSICO 1-5KVA -B",
  },
  {
    codigo: "71011482",
    descricao: "8.2.2 - D - ESTR PRIMÁRIA -BIF/TRIF-TIPO",
  },
  {
    codigo: "71011483",
    descricao: "8.2.3 - D - ESTR PRIMÁRIA-BIF/TRIF-TIPO",
  },
  {
    codigo: "71011484",
    descricao: "8.2.4 - D - ESTR PRIMÁRIA -BIF/TRIF-TIPO",
  },
  {
    codigo: "71011485",
    descricao: "8.2.1 - D - ESTR PRIMÁRIA - BIF/TRIF -TIP",
  },
  {
    codigo: "71011486",
    descricao: "8.2.3 - I - ESTR PRIMÁRIA-BIF/TRIF-TIPO 3",
  },
  {
    codigo: "71011487",
    descricao: "8.2.1 - I - ESTR PRIMÁRIA - BIF/TRIF -TIPO",
  },
  {
    codigo: "71011488",
    descricao: "8.2.2 - I - ESTR PRIMÁRIA -BIF/TRIF-TIPO",
  },
  {
    codigo: "71011489",
    descricao: "8.2.4 - I - ESTR PRIMÁRIA -BIF/TRIF-TIPO",
  },
  {
    codigo: "71011493",
    descricao: "8.2.1 - R - ESTR PRIMÁRIA - BIF/TRIF -TIP",
  },
  {
    codigo: "71011494",
    descricao: "8.2.2 - R - ESTR PRIMÁRIA -BIF/TRIF-TIPO",
  },
  {
    codigo: "71011495",
    descricao: "8.2.4 - R - ESTR PRIMÁRIA -BIF/TRIF-TIPO",
  },
  {
    codigo: "71011496",
    descricao: "8.2.3 - R - ESTR PRIMÁRIA-BIF/TRIF-TIPO",
  },
  {
    codigo: "71011498",
    descricao: "8.2.1 - SA - ESTR PRIMÁRIA - BIF/TRIF -TI",
  },
  {
    codigo: "71011504",
    descricao: "8.2.2 - SR - ESTR PRIMÁRIA -BIF/TRIF-TIP",
  },
  {
    codigo: "71011505",
    descricao: "8.2.3 - SR - ESTR PRIMÁRIA-BIF/TRIF-TIPO",
  },
  {
    codigo: "71011506",
    descricao: "8.2.4 - SR - ESTR PRIMÁRIA -BIF/TRIF-TIP",
  },
  {
    codigo: "71011507",
    descricao: "8.2.4 - LV - I - ESTR PRIMÁRIA -BIF/TRIF-T",
  },
  {
    codigo: "71011508",
    descricao: "8.2.1 - LV - D - ESTR PRIMÁRIA - BIF/TRIF",
  },
  {
    codigo: "71011509",
    descricao: "8.2.2 - LV - D - ESTR PRIMÁRIA -BIF/TRIF-",
  },
  {
    codigo: "71011510",
    descricao: "8.2.3 - LV - D - ESTR PRIMÁRIA-BIF/TRIF-T",
  },
  {
    codigo: "71011511",
    descricao: "8.2.4 - LV - D - ESTR PRIMÁRIA -BIF/TRIF-",
  },
  {
    codigo: "71011512",
    descricao: "8.3.4 - LV - I - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011513",
    descricao: "8.2.1 - LV - I - ESTR PRIMÁRIA - BIF/TRIF -",
  },
  {
    codigo: "71011514",
    descricao: "8.2.2 - LV - I - ESTR PRIMÁRIA -BIF/TRIF-T",
  },
  {
    codigo: "71011515",
    descricao: "8.2.3 - LV - I - ESTR PRIMÁRIA-BIF/TRIF-TI",
  },
  {
    codigo: "71011516",
    descricao: "8.2.1 - LV - R - ESTR PRIMÁRIA - BIF/TRIF",
  },
  {
    codigo: "71011517",
    descricao: "8.2.2 - LV - R - ESTR PRIMÁRIA -BIF/TRIF-",
  },
  {
    codigo: "71011518",
    descricao: "8.2.3 - LV - R - ESTR PRIMÁRIA-BIF/TRIF-T",
  },
  {
    codigo: "71011519",
    descricao: "8.2.4 - LV - R - ESTR PRIMÁRIA -BIF/TRIF-",
  },
  {
    codigo: "71011520",
    descricao: "8.2.1 - LV - SA - ESTR PRIMÁRIA - BIF/TRI",
  },
  {
    codigo: "71011521",
    descricao: "8.2.2 - LV - SA - ESTR PRIMÁRIA -BIF/TRIF",
  },
  {
    codigo: "71011522",
    descricao: "8.2.4 - LV - SA - ESTR PRIMÁRIA -BIF/TRIF",
  },
  {
    codigo: "71011523",
    descricao: "8.2.1 - LV - SR - ESTR PRIMÁRIA - BIF/TRIF",
  },
  {
    codigo: "71011524",
    descricao: "8.2.2 - LV - SR - ESTR PRIMÁRIA -BIF/TRIF",
  },
  {
    codigo: "71011525",
    descricao: "8.2.3 - LV - SR - ESTR PRIMÁRIA-BIF/TRIF-",
  },
  {
    codigo: "71011526",
    descricao: "8.2.4 - LV - SR - ESTR PRIMÁRIA -BIF/TRIF",
  },
  {
    codigo: "71011527",
    descricao: "8.2.3 - LV - SA - ESTR PRIMÁRIA-BIF/TRIF-",
  },
  {
    codigo: "71011549",
    descricao: "4.1.1 - D -COND. REDE CONV. ATÉ 1/0 AW",
  },
  {
    codigo: "71011550",
    descricao: "4.1.1 - I -COND. REDE CONV. ATÉ 1/0 AW",
  },
  {
    codigo: "71011556",
    descricao: "4.1.1 - R - COND. REDE CONV. ATÉ 1/0 A",
  },
  {
    codigo: "71011557",
    descricao: "4.1.1 - SA - COND REDE CONV. ATÉ 1/0 A",
  },
  {
    codigo: "71011558",
    descricao: "4.1.1 - SR - COND REDE CONV. ATÉ 1/0 A",
  },
  {
    codigo: "71011559",
    descricao: "4.1.2 - D - COND. REDE CONV. > 1/0 AWG",
  },
  {
    codigo: "71011565",
    descricao: "4.1.2 - R - COND. REDE CONV. > 1/0 AWG",
  },
  {
    codigo: "71011566",
    descricao: "4.1.2 - SA - COND. REDE CONV. > 1/0 AW",
  },
  {
    codigo: "71011567",
    descricao: "4.1.2 - SR - COND. REDE CONV. > 1/0 AW",
  },
  {
    codigo: "71011568",
    descricao: "4.1.2 - I - COND. REDE CONV. > 1/0 AWG",
  },
  {
    codigo: "71011576",
    descricao: "8.3.1 - D - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71011577",
    descricao: "8.3.2 - D - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71011578",
    descricao: "8.3.3 - D - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71011579",
    descricao: "8.3.4 - D - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71011580",
    descricao: "8.3.1 - LV - R - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011581",
    descricao: "8.3.2 - LV - R - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011582",
    descricao: "8.3.3 - LV - R - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011583",
    descricao: "8.3.4 - LV - R - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011584",
    descricao: "8.3.1 - R - ESTR PRIMÁRIA-REDE COMPAC",
  },
  {
    codigo: "71011585",
    descricao: "8.3.2 - R - ESTR PRIMÁRIA-REDE COMPAC",
  },
  {
    codigo: "71011586",
    descricao: "8.3.3 - R - ESTR PRIMÁRIA-REDE COMPAC",
  },
  {
    codigo: "71011587",
    descricao: "8.3.4 - R - ESTR PRIMÁRIA-REDE COMPAC",
  },
  {
    codigo: "71011588",
    descricao: "8.3.1 - SA - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71011589",
    descricao: "8.3.2 - SA - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71011590",
    descricao: "8.3.3 - SA - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71011591",
    descricao: "8.3.4 - SA - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71011592",
    descricao: "8.3.1 - I - ESTR PRIMÁRIA-REDE COMPAC",
  },
  {
    codigo: "71011593",
    descricao: "8.3.3 - I - ESTR PRIMÁRIA-REDE COMPAC",
  },
  {
    codigo: "71011594",
    descricao: "8.3.4 - I - ESTR PRIMÁRIA-REDE COMPAC",
  },
  {
    codigo: "71011613",
    descricao: "8.3.1 - LV - D - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011614",
    descricao: "8.3.2 - LV - D - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011615",
    descricao: "8.3.3 - LV - D - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011616",
    descricao: "8.3.4 - LV - D - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011617",
    descricao: "8.3.1 - LV - I - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011618",
    descricao: "8.3.2 - LV - I - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011619",
    descricao: "8.3.3 - LV - I - ESTR PRIMÁRIA-REDE COM",
  },
  {
    codigo: "71011651",
    descricao: "3.5 - D - CHAVE TANDEN",
  },
  {
    codigo: "71011652",
    descricao: "3.5 - I - CHAVE TANDEN",
  },
  {
    codigo: "71011658",
    descricao: "3.5 - R - CHAVE TANDEN",
  },
  {
    codigo: "71011659",
    descricao: "3.5 - SA - CHAVE TANDEN",
  },
  {
    codigo: "71011660",
    descricao: "3.5 - SR - CHAVE TANDEN",
  },
  {
    codigo: "71011661",
    descricao: "3.3 - D - CHAVE BYPASS",
  },
  {
    codigo: "71011662",
    descricao: "3.3 - I - CHAVE BYPASS",
  },
  {
    codigo: "71011664",
    descricao: "3.3 - LV - D - CHAVE BYPASS",
  },
  {
    codigo: "71011666",
    descricao: "3.3 - LV - I - CHAVE BYPASS",
  },
  {
    codigo: "71011667",
    descricao: "3.3 - LV - R - CHAVE BYPASS",
  },
  {
    codigo: "71011668",
    descricao: "3.3 - LV - SA - CHAVE BYPASS",
  },
  {
    codigo: "71011669",
    descricao: "3.3 - LV - SR - CHAVE BYPASS",
  },
  {
    codigo: "71011670",
    descricao: "3.3 - R - CHAVE BYPASS",
  },
  {
    codigo: "71011671",
    descricao: "3.3 - SA - CHAVE BYPASS",
  },
  {
    codigo: "71011672",
    descricao: "3.3 - SR - CHAVE BYPASS",
  },
  {
    codigo: "71011741",
    descricao: "I - CONCENTRADOR PRIMÁRIO DE MEDIÇ",
  },
  {
    codigo: "71011742",
    descricao: "D - CONCENTRADOR PRIMÁRIO DE MEDI",
  },
  {
    codigo: "71011743",
    descricao: "R - CONCENTRADOR PRIMÁRIO DE MEDI",
  },
  {
    codigo: "71011744",
    descricao: "I - CONCENTRADOR SECUNDÁRIO DE ME",
  },
  {
    codigo: "71011745",
    descricao: "D - CONCENTRADOR SECUNDÁRIO DE M",
  },
  {
    codigo: "71011746",
    descricao: "R - CONCENTRADOR SECUNDÁRIO DE ME",
  },
  {
    codigo: "71011747",
    descricao: "I – RAMAL DE LIGAÇÃO BTZERO",
  },
  {
    codigo: "71011748",
    descricao: "D - RAMAL DE LIGAÇÃO BTZERO",
  },
  {
    codigo: "71011749",
    descricao: "R - RAMAL DE LIGAÇÃO BTZERO",
  },
  {
    codigo: "71012001",
    descricao: "13.1.3 - D - POSTE METÁLICO ATÉ 150 DA",
  },
  {
    codigo: "71012002",
    descricao: "13.1.3 - I - POSTE METÁLICO ATÉ 150 DA",
  },
  {
    codigo: "71012003",
    descricao: "13.1.3 - R - POSTE METÁLICO ATÉ 150 DA",
  },
  {
    codigo: "71012004",
    descricao: "13.1.3 - SA - POSTE METÁLICO ATÉ 150 D",
  },
  {
    codigo: "71012005",
    descricao: "13.1.3 - SR - POSTE METÁLICO ATÉ 150 D",
  },
  {
    codigo: "71012006",
    descricao: "16.20 - ADICIONAL INSTALAÇÃO POSTE E",
  },
  {
    codigo: "71012007",
    descricao: "3.7 - D - CHAVE SECCIONADORA TRIPOLA",
  },
  {
    codigo: "71012008",
    descricao: "3.7 - I - CHAVE SECCIONADORA TRIPOLAR",
  },
  {
    codigo: "71012009",
    descricao: "3.7 - LV - D - CHAVE SECCIONADORA TRIP",
  },
  {
    codigo: "71012010",
    descricao: "3.7 - LV - I - CHAVE SECCIONADORA TRIP",
  },
  {
    codigo: "71012011",
    descricao: "3.7 - LV - R - CHAVE SECCIONADORA TRIP",
  },
  {
    codigo: "71012012",
    descricao: "3.7 - LV - SA - CHAVE SECCIONADORA TRI",
  },
  {
    codigo: "71012013",
    descricao: "3.7 - LV - SR - CHAVE SECCIONADORA TRI",
  },
  {
    codigo: "71012014",
    descricao: "3.7 - R - CHAVE SECCIONADORA TRIPOLA",
  },
  {
    codigo: "71012015",
    descricao: "3.7 - SA - CHAVE SECCIONADORA TRIPOL",
  },
  {
    codigo: "71012016",
    descricao: "3.7 - SR - CHAVE SECCIONADORA TRIPOL",
  },
  {
    codigo: "71012017",
    descricao: "5.2.7 - D - SECCIONALIZADOR TRIPOLAR -",
  },
  {
    codigo: "71012018",
    descricao: "5.2.7 - I - SECCIONALIZADOR TRIPOLAR -",
  },
  {
    codigo: "71012019",
    descricao: "5.2.7 - R - SECCIONALIZADOR TRIPOLAR -",
  },
  {
    codigo: "71012020",
    descricao: "5.2.7 - SA - SECCIONALIZADOR TRIPOLAR",
  },
  {
    codigo: "71012021",
    descricao: "5.2.7 - SR - SECCIONALIZADOR TRIPOLAR",
  },
  {
    codigo: "71012022",
    descricao: "5.2.8 - D - SECCIONALIZADOR TRIPOLAR -",
  },
  {
    codigo: "71012023",
    descricao: "5.2.8 - I - SECCIONALIZADOR TRIPOLAR -",
  },
  {
    codigo: "71012024",
    descricao: "5.2.8 - R - SECCIONALIZADOR TRIPOLAR -",
  },
  {
    codigo: "71012025",
    descricao: "5.2.8 - SA - SECCIONALIZADOR TRIPOLAR",
  },
  {
    codigo: "71012026",
    descricao: "5.2.8 - SR - SECCIONALIZADOR TRIPOLAR",
  },
  {
    codigo: "71012027",
    descricao: "8.3.2 - LV - SA - ESTR PRIMÁRIA-REDE CO",
  },
  {
    codigo: "71012028",
    descricao: "8.3.2 - LV - SR - ESTR PRIMÁRIA-REDE CO",
  },
  {
    codigo: "71012029",
    descricao: "8.3.2 - SR - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71012030",
    descricao: "8.3.3 - LV - SA - ESTR PRIMÁRIA-REDE CO",
  },
  {
    codigo: "71012031",
    descricao: "8.3.3 - LV - SR - ESTR PRIMÁRIA-REDE CO",
  },
  {
    codigo: "71012032",
    descricao: "8.3.3 - SR - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71012033",
    descricao: "8.3.4 - LV - SA - ESTR PRIMÁRIA-REDE CO",
  },
  {
    codigo: "71012034",
    descricao: "8.3.4 - LV - SR - ESTR PRIMÁRIA-REDE CO",
  },
  {
    codigo: "71012035",
    descricao: "8.3.4 - SR - ESTR PRIMÁRIA-REDE COMPA",
  },
  {
    codigo: "71012115",
    descricao: "7.8 - SR - TRANSFORMADOR DE POTÊNCI",
  },
  {
    codigo: "71012127",
    descricao: "12.1 - R - PARA-RAIO - I (Exclusivo EDP-ES",
  },
  {
    codigo: "71012146",
    descricao: "7.8 - I - TRANSFORMADOR DE POTÊNCIA",
  },
  {
    codigo: "71012164",
    descricao: "I - ATUALIZAÇÃO DA BASE CADASTRAL A",
  },
  {
    codigo: "71012165",
    descricao: "D - ATUALIZAÇÃO DA BASE CADASTRAL A",
  },
  {
    codigo: "71012166",
    descricao: "7.8 - SA - TRANSFORMADOR DE POTÊNCI",
  },
  {
    codigo: "71012173",
    descricao: "7.8 - D - TRANSFORMADOR DE POTÊNCIA",
  },
  {
    codigo: "71012175",
    descricao: "7.8 - R - TRANSFORMADOR DE POTÊNCIA",
  },
  {
    codigo: "71012211",
    descricao: "10.1 - R - ISOLADOR - I (Exclusivo EDP-ES",
  },
  {
    codigo: "71012212",
    descricao: "10.1 - R - ISOLADOR - D (Exclusivo EDP-ES",
  },
  {
    codigo: "71012213",
    descricao: "11.1 - R - RAMAL DE LIGAÇÃO - I (Exclusiv",
  },
  {
    codigo: "71012214",
    descricao: "11.1 - R - RAMAL DE LIGAÇÃO - D (Exclusi",
  },
  {
    codigo: "71012215",
    descricao: "12.1 - R - PARA-RAIO - D (Exclusivo EDP-E",
  },
  {
    codigo: "71012217",
    descricao: "13.5 - R - ESTAI - D (Exclusivo EDP-ESPÍRI",
  },
  {
    codigo: "71012219",
    descricao: "16.14 - R -DERIVAÇÃO ENTRADA SUBTER",
  },
  {
    codigo: "71012221",
    descricao: "4.15 - R - COND PRÉ-REUNIDA - SECUND",
  },
  {
    codigo: "71012222",
    descricao: "4.2 - R - CONDUTOR REDE COMPACTA - I",
  },
  {
    codigo: "71012223",
    descricao: "4.2 - R - CONDUTOR REDE COMPACTA - D",
  },
  {
    codigo: "71012224",
    descricao: "4.3 - R - COND PRÉ-REUNIDA - PRIMÁRIA",
  },
  {
    codigo: "71012225",
    descricao: "4.3 - R - COND PRÉ-REUNIDA - PRIMÁRIA",
  },
  {
    codigo: "71012226",
    descricao: "5.1 - R - DISJ MT E CONJUNTO DE MEDIÇ",
  },
  {
    codigo: "71012227",
    descricao: "5.1 - R - DISJ MT E CONJUNTO DE MEDIÇ",
  },
  {
    codigo: "71012230",
    descricao: "7.1 - R - TRANSFORMADOR - I (Exclusivo",
  },
  {
    codigo: "71012231",
    descricao: "7.1 - R - TRANSFORMADOR - D (Exclusivo",
  },
  {
    codigo: "71012233",
    descricao: "7.2 - R - ESTAÇÃO TRANSF MONO/ TRI - D",
  },
  {
    codigo: "71012234",
    descricao: "7.3 - R - ESTAÇÃO TRANS. DELTA - I (Exclu",
  },
  {
    codigo: "71012236",
    descricao: "8.1 - R - ESTRUTURA PRIMÁRIA - MONO -",
  },
  {
    codigo: "71012237",
    descricao: "8.1 - R - ESTRUTURA PRIMÁRIA - MONO -",
  },
  {
    codigo: "71012238",
    descricao: "8.4 - R - EST PRIMÁRIA REDE PRÉ-REUNID",
  },
  {
    codigo: "71012240",
    descricao: "8.5 - R - ACESSÓRIO REDE COMPACTA - I",
  },
  {
    codigo: "71012242",
    descricao: "8.6 - R - ESTRUTURA SECUNDÁRIA - I (Exc",
  },
  {
    codigo: "71012243",
    descricao: "8.6 - R - ESTRUTURA SECUNDÁRIA - D (Ex",
  },
  {
    codigo: "71012244",
    descricao: "8.7 - R - ESPAÇADOR SECUNDÁRIO - I (Ex",
  },
  {
    codigo: "71012246",
    descricao: "10.1 - L.V. - R - ISOLADOR - I (Exclusivo ED",
  },
  {
    codigo: "71012247",
    descricao: "10.1 - L.V. - R - ISOLADOR - D (Exclusivo E",
  },
  {
    codigo: "71012248",
    descricao: "12.1 - L.V. - R - PARA-RAIO - I (Exclusivo E",
  },
  {
    codigo: "71012249",
    descricao: "12.1 - L.V. - R - PARA-RAIO - D (Exclusivo",
  },
  {
    codigo: "71012250",
    descricao: "13.5 - L.V. - R - ESTAI - I (Exclusivo EDP-ES",
  },
  {
    codigo: "71012251",
    descricao: "13.5 - L.V. - R - ESTAI - D (Exclusivo EDP-E",
  },
  {
    codigo: "71012252",
    descricao: "5.1 - L.V. - R - DISJ MT E CONJ. MED - I (E",
  },
  {
    codigo: "71012253",
    descricao: "5.1 - L.V. - R - DISJ MT E CONJ. MED - D (E",
  },
  {
    codigo: "71012256",
    descricao: "8.1 - L.V. - R - EST PRIM - MONO - I (Exclu",
  },
  {
    codigo: "71012257",
    descricao: "8.1 - L.V. - R - EST PRIM - MONO - D (Excl",
  },
  {
    codigo: "71012258",
    descricao: "8.5 - L.V. - R - ACESS. REDE COMPACTA -",
  },
  {
    codigo: "71012259",
    descricao: "8.5 - L.V. - R - ACESS. REDE COMPACTA -",
  },
  {
    codigo: "71012260",
    descricao: "3.1.1 - L.V. - R - CHAVE FUSÍVEL (P/ 34,5k",
  },
  {
    codigo: "71012261",
    descricao: "3.1.1 - L.V. - R - CHAVE FUSÍVEL (P/ 34,5k",
  },
  {
    codigo: "71012262",
    descricao: "3.1.1 - R - CHAVE FUSÍVEL - I (Exclusivo E",
  },
  {
    codigo: "71012263",
    descricao: "3.1.1 - R - CHAVE FUSÍVEL - D (Exclusivo E",
  },
  {
    codigo: "71012264",
    descricao: "3.1.2 - L.V. - R - CHAVE FACA - I (Exclusivo",
  },
  {
    codigo: "71012265",
    descricao: "3.1.2 - L.V. - R - CHAVE FACA - D (Exclusiv",
  },
  {
    codigo: "71012266",
    descricao: "3.1.2 - R - CHAVE FACA - I (Exclusivo EDP-",
  },
  {
    codigo: "71012268",
    descricao: "3.3 -R-CHAVE A ÓLEO (BCO DE CAPAC) - I",
  },
  {
    codigo: "71012269",
    descricao: "3.3 -R-CHAVE A ÓLEO (BCO DE CAPACITO",
  },
  {
    codigo: "71012274",
    descricao: "5.2.1 - R - REG. TENSÃO S/ ACESSÓRIOS -",
  },
  {
    codigo: "71012275",
    descricao: "5.2.1 - R - REG. TENSÃO S/ ACESSÓRIOS -",
  },
  {
    codigo: "71012281",
    descricao: "5.2.2 - L.V. - R - REGUL TENSÃO S/ACESS",
  },
  {
    codigo: "71012282",
    descricao: "5.2.3 - R - RELIGADOR COM ESTRUTURA",
  },
  {
    codigo: "71012283",
    descricao: "5.2.3 - R - RELIGADOR COM ESTRUTURA",
  },
  {
    codigo: "71012284",
    descricao: "5.2.3 - R - RELIGADOR SEM ACESSÓRIOS",
  },
  {
    codigo: "71012285",
    descricao: "5.2.3 - R - RELIGADOR SEM ACESSÓRIOS",
  },
  {
    codigo: "71012286",
    descricao: "5.4 - R - BANCO DE CAPACITORES (VASOS",
  },
  {
    codigo: "71012287",
    descricao: "5.4 - R - BANCO DE CAPACITORES (VASOS",
  },
  {
    codigo: "71012288",
    descricao: "7.7 -R-TRANS. MONO 1-5KVA-BC/RE/SA -",
  },
  {
    codigo: "71012289",
    descricao: "7.7 -R-TRANS. MONO 1-5KVA-BC/RE/SA -",
  },
  {
    codigo: "71012290",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO 1",
  },
  {
    codigo: "71012291",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO 1",
  },
  {
    codigo: "71012292",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO 2",
  },
  {
    codigo: "71012293",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO 2",
  },
  {
    codigo: "71012294",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO 4",
  },
  {
    codigo: "71012295",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO 4",
  },
  {
    codigo: "71012296",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO 3",
  },
  {
    codigo: "71012297",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO 3",
  },
  {
    codigo: "71012298",
    descricao: "8.2.1-LV-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO",
  },
  {
    codigo: "71012299",
    descricao: "8.2.1-LV-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO",
  },
  {
    codigo: "71012300",
    descricao: "8.2.1-LV-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO",
  },
  {
    codigo: "71012301",
    descricao: "8.2.1-LV-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO",
  },
  {
    codigo: "71012302",
    descricao: "8.2.1-LV-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO",
  },
  {
    codigo: "71012303",
    descricao: "8.2.1-LV-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO",
  },
  {
    codigo: "71012304",
    descricao: "8.2.1-LV-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO",
  },
  {
    codigo: "71012305",
    descricao: "8.2.1-LV-R-ESTR PRIMÁRIA-BIF/TRIF-TIPO",
  },
  {
    codigo: "71012314",
    descricao: "4.1 - R - CONDUTOR CONV. ATÉ 1/0 AWG",
  },
  {
    codigo: "71012315",
    descricao: "4.1 - R - CONDUTOR CONV. ATÉ 1/0 AWG",
  },
  {
    codigo: "71012316",
    descricao: "4.16 - R - COND. CONV. > 1/0 AWG - I (Ex",
  },
  {
    codigo: "71012317",
    descricao: "4.16 - R - COND. CONV. > 1/0 AWG - D (E",
  },
  {
    codigo: "71012320",
    descricao: "8.2.1-LV-R-ESTR PRIM-REDE COMPAC-TIP",
  },
  {
    codigo: "71012321",
    descricao: "8.2.1-LV-R-ESTR PRIM-REDE COMPAC-TIP",
  },
  {
    codigo: "71012322",
    descricao: "8.2.1-LV-R-ESTR PRIM-REDE COMPAC-TIP",
  },
  {
    codigo: "71012323",
    descricao: "8.2.1-LV-R-ESTR PRIM-REDE COMPAC-TIP",
  },
  {
    codigo: "71012324",
    descricao: "8.2.1-LV-R-ESTR PRIM-REDE COMPAC-TIP",
  },
  {
    codigo: "71012325",
    descricao: "8.2.1-LV-R-ESTR PRIM-REDE COMPAC-TIP",
  },
  {
    codigo: "71012328",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-REDE COMPAC-T",
  },
  {
    codigo: "71012329",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-REDE COMPAC-T",
  },
  {
    codigo: "71012330",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-REDE COMPAC-T",
  },
  {
    codigo: "71012331",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-REDE COMPAC-T",
  },
  {
    codigo: "71012332",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-REDE COMPAC-T",
  },
  {
    codigo: "71012333",
    descricao: "8.2.1-R-ESTR PRIMÁRIA-REDE COMPAC-T",
  },
  {
    codigo: "71012334",
    descricao: "3.3 - R - CHAVE BYPASS - I (Exclusivo EDP",
  },
  {
    codigo: "71012335",
    descricao: "3.3 - R - CHAVE BYPASS - D (Exclusivo ED",
  },
  {
    codigo: "71012336",
    descricao: "3.3 - L.V. - R - CHAVE BYPASS - I (Exclusiv",
  },
  {
    codigo: "71012337",
    descricao: "3.3 - L.V. - R - CHAVE BYPASS - D (Exclusiv",
  },
  {
    codigo: "71012348",
    descricao: "3.7 - LV - R - CHAVE SECC. TRIPOLAR - I (E",
  },
  {
    codigo: "71012349",
    descricao: "3.7 - LV - R - CHAVE SECC. TRIPOLAR - D (",
  },
  {
    codigo: "71012350",
    descricao: "3.7 - R - CHAVE SECC. TRIPOLAR - I (Exclu",
  },
  {
    codigo: "71012351",
    descricao: "3.7 - R - CHAVE SECC. TRIPOLAR - D (Excl",
  },
  {
    codigo: "71012352",
    descricao: "5.2.3 - L.V. - R - RELIGADOR SEM ACESS -",
  },
  {
    codigo: "71012353",
    descricao: "5.2.3 - L.V. - R - RELIGADOR SEM ACESS -",
  },
  {
    codigo: "71012356",
    descricao: "4.16 - L.V. - R - COND. CONV. > 1/0 AWG",
  },
  {
    codigo: "71012357",
    descricao: "4.16 - L.V. - R - COND. CONV. > 1/0 AWG",
  },
  {
    codigo: "71012373",
    descricao: "13.5 - R - ESTAI - I (Exclusivo EDP-ESPÍRIT",
  },
  {
    codigo: "71012374",
    descricao: "16.14 - R -DERIVAÇÃO ENTRADA SUBTER",
  },
  {
    codigo: "71012375",
    descricao: "4.15 - R - COND PRÉ-REUNIDA - SECUND",
  },
  {
    codigo: "71012377",
    descricao: "7.2 - R - ESTAÇÃO TRANSF MONO/ TRI - I",
  },
  {
    codigo: "71012379",
    descricao: "8.5 - R - ACESSÓRIO REDE COMPACTA - D",
  },
  {
    codigo: "71012381",
    descricao: "3.1.2 - R - CHAVE FACA - D (Exclusivo EDP",
  },
  {
    codigo: "71012392",
    descricao: "5.4 - LV.- R BANCO DE CAPAC. VASOS - I (",
  },
  {
    codigo: "71012393",
    descricao: "5.4 - LV.- R BANCO DE CAPAC. VASOS - D",
  },
  {
    codigo: "71012463",
    descricao: "4.8 – I – MT - SECCIONAR CIRCUITO MT -",
  },
  {
    codigo: "71012464",
    descricao: "4.8 – D – MT - SECCIONAR CIRCUITO MT",
  },
  {
    codigo: "71012465",
    descricao: "4.8 - LV – I – MT-  SECCIONAR CIRCUITO",
  },
  {
    codigo: "71012466",
    descricao: "4.8 - LV – D - SECCIONAR CIRCUITO MT–",
  },
  {
    codigo: "71012467",
    descricao: "4.8  - I – BT - SECCIONAR CIRCUITO BT",
  },
  {
    codigo: "71012468",
    descricao: "4.8 - LV – I – BT-  SECCIONAR CIRCUITO B",
  },
  {
    codigo: "71014512",
    descricao: "DESLOCAMENTO EQUIPE A1 –D-DISPOS",
  },
  {
    codigo: "71014513",
    descricao: "DESLOCAMENTO EQUIPE A2 –D-DISPOS",
  },
  {
    codigo: "71014514",
    descricao: "DESLOCAMENTO EQUIPE A3 –D-DISPOS",
  },
  {
    codigo: "71014515",
    descricao: "DESLOCAMENTO EQUIPE B1 –D-DISPOS",
  },
  {
    codigo: "71014516",
    descricao: "DESLOCAMENTO EQUIPE B2 –D-DISPOS",
  },
  {
    codigo: "71014517",
    descricao: "DESLOCAMENTO EQUIPE B3 –D-DISPOS",
  },
  {
    codigo: "71014518",
    descricao: "DESLOCAMENTO EQUIPE B4 –D-DISPOS",
  },
  {
    codigo: "71014519",
    descricao: "DESLOCAMENTO EQUIPE B5 –D-DISPOS",
  },
  {
    codigo: "71014523",
    descricao: "DESLOCAMENTO EQUIPE B1 –N-DISPOS",
  },
  {
    codigo: "71014524",
    descricao: "DESLOCAMENTO EQUIPE B2 –N-DISPOS",
  },
  {
    codigo: "71014525",
    descricao: "DESLOCAMENTO EQUIPE B3 –N-DISPOS",
  },
  {
    codigo: "71014526",
    descricao: "DESLOCAMENTO EQUIPE B4 –N-DISPOS",
  },
  {
    codigo: "71014528",
    descricao: "DESLOCAMENTO EQUIPE C1-D-DISPOS",
  },
  {
    codigo: "71014529",
    descricao: "DESLOCAMENTO EQUIPE C2-D-DISPOS",
  },
  {
    codigo: "71014531",
    descricao: "DESLOCAMENTO EQUIPE C2-N-DISPOS",
  },
  {
    codigo: "71015161",
    descricao: "ENTREGA DE CARTAS VIA MOTOCICLETA",
  },
  {
    codigo: "71015162",
    descricao: "DESLOCAMENTO EQUIPE A1 EM REGIME",
  },
  {
    codigo: "71015165",
    descricao: "DESLOCAMENTO EQUIPE B1 EM REGIME",
  },
  {
    codigo: "71015166",
    descricao: "DESLOCAMENTO EQUIPE B2 EM REGIME",
  },
  {
    codigo: "71015167",
    descricao: "DESLOCAMENTO EQUIPE B3 EM REGIME",
  },
  {
    codigo: "71015168",
    descricao: "DESLOCAMENTO EQUIPE B4 EM REGIME",
  },
  {
    codigo: "71015170",
    descricao: "DESLOCAMENTO EQUIPE C1 EM REGIME",
  },
  {
    codigo: "71015191",
    descricao: "DESLOCAMENTO EQUIPE C2 EM REGIME",
  },
  {
    codigo: "71015691",
    descricao: "STC RETIRADA DE LIGACAO CLANDESTIN",
  },
  {
    codigo: "71015692",
    descricao: "Instalação de Padrão BR",
  },
  {
    codigo: "71015762",
    descricao: "STC INST. MEDIDOR MONOFASICO  BTZE",
  },
  {
    codigo: "71015764",
    descricao: "STC INST. MEDIDOR BIFASICO  BTZERO",
  },
  {
    codigo: "71015766",
    descricao: "STC INST.  MEDIDOR TRIFASICO  BTZERO",
  },
  {
    codigo: "71015768",
    descricao: "STC RETIRADA MEDIDOR MONOFASICO",
  },
  {
    codigo: "71015770",
    descricao: "STC RETIRADA MEDIDOR BIFASICA  BTZE",
  },
  {
    codigo: "71015772",
    descricao: "STC RETIRADA MEDIDOR TRIIFASIC0  BTZ",
  },
  {
    codigo: "71015789",
    descricao: "Instalção de Kits Internos",
  },
  {
    codigo: "71015900",
    descricao: "FISCALIZACAO SMC",
  },
  {
    codigo: "71015901",
    descricao: "COMISSIONAMENTO SMC",
  },
  {
    codigo: "71016042",
    descricao: "PRE MANOBRAS-I (0,7)",
  },
  {
    codigo: "71016043",
    descricao: "PRE MANOBRAS-D (0,3)",
  },
  {
    codigo: "71016202",
    descricao: "I – CONEXÃO RAMAL DE LIGAÇÃO",
  },
  {
    codigo: "71016203",
    descricao: "D – CONEXÃO RAMAL DE LIGAÇÃO",
  },
  {
    codigo: "71016204",
    descricao: "13.1.1 - L.V. - SR – POSTE - < 2500 kg C/ T",
  },
  {
    codigo: "71016205",
    descricao: "13.1.1 – SR – POSTE - < 2500 kg C/TRAN",
  },
  {
    codigo: "71016206",
    descricao: "13.1.2 – D - POSTE - >= 2500 kg C/TRAN",
  },
  {
    codigo: "71016207",
    descricao: "SERV D-LV-POSTE>=2500KG C/TRAN",
  },
  {
    codigo: "71016208",
    descricao: "13.1.2 - L.V. – SR – POSTE - >= 2500 kg C/",
  },
  {
    codigo: "71016209",
    descricao: "13.1.2 – SR – POSTE - >= 2500 kg C/TRAN",
  },
  {
    codigo: "71016210",
    descricao: "13.1.1 - D - POSTE - < 2500 kg C/ TRAN",
  },
  {
    codigo: "71016211",
    descricao: "SERV D-LV-POSTE<2500KG C/TRAN",
  },
  {
    codigo: "71016212",
    descricao: "13.1.1 - L.V. – I - POSTE - < 2500 kg C/TRA",
  },
  {
    codigo: "71016213",
    descricao: "13.1.1 – R - POSTE - < 2500 kg C/TRAN",
  },
  {
    codigo: "71016214",
    descricao: "13.1.1 – I - POSTE - < 2500 kg C/TRAN",
  },
  {
    codigo: "71016215",
    descricao: "13.1.2 - L.V. – R – POSTE - >= 2500 kg C/T",
  },
  {
    codigo: "71016216",
    descricao: "13.1.2 – R - POSTE - >= 2500 kg C/TRAN",
  },
  {
    codigo: "71016217",
    descricao: "13.1.2 - L.V. – SA – POSTE - >= 2500 kg C/",
  },
  {
    codigo: "71016218",
    descricao: "13.1.2 – SA - POSTE - >= 2500 kg C/TRAN",
  },
  {
    codigo: "71016219",
    descricao: "13.1.1 - L.V. - R - POSTE - < 2500 kg C/TR",
  },
  {
    codigo: "71016220",
    descricao: "13.1.1 - L.V. – SA – POSTE - < 2500 kg C/T",
  },
  {
    codigo: "71016221",
    descricao: "13.1.1 – SA - POSTE - < 2500 kg C/TRAN",
  },
  {
    codigo: "71016222",
    descricao: "13.1.2 - L.V. – I – POSTE - >= 2500 kg C/T",
  },
  {
    codigo: "71016223",
    descricao: "13.1.2 – I - POSTE - >= 2500 kg C/TRAN",
  },
  {
    codigo: "71016224",
    descricao: "IMPRESSÃO E ENTREGA DE CARTAS DE D",
  },
];

const listContainer = document.querySelector("#codigos-list");
const filterInput = document.querySelector("#filter-input");
const listaVazia = document.querySelector("#lista_vazia");

const historicoList = document.querySelector("#historico-list");

function renderCodigosList(codigos) {
  const listItems = codigos.map((codigo) => {
    const listItem = document.createElement("li");
    listItem.classList.add("descricao-item");

    const codigoSpan = document.createElement("span");
    codigoSpan.setAttribute("alt", "código");
    codigoSpan.textContent = codigo.codigo;

    const descricaoSpan = document.createElement("span");
    descricaoSpan.setAttribute("alt", "descrição");
    descricaoSpan.textContent = codigo.descricao;

    listItem.appendChild(codigoSpan);
    listItem.appendChild(descricaoSpan);

    listItem.addEventListener("click", () => {
      addToHistory(listItem);
    });

    return listItem;
  });

  if (listItems.length > 0) {
    listContainer.innerHTML = "";
    listItems.forEach((item) => listContainer.appendChild(item));
    listaVazia.style.display = "none";
  } else {
    listContainer.innerHTML = "";
    listaVazia.style.display = "flex";
  }
}

function filterCodigosByCodigoOrDescricao(codigos, filtro) {
  const filteredCodigos = codigos.filter((codigo) => {
    const codigoString = codigo.codigo.toString();
    const descricao = codigo.descricao.toLowerCase();
    const filtroLower = filtro.toLowerCase();
    return (
      codigoString.includes(filtroLower) || descricao.includes(filtroLower)
    );
  });
  renderCodigosList(filteredCodigos);
}

filterInput.addEventListener("input", () => {
  const filtro = filterInput.value;
  filterCodigosByCodigoOrDescricao(codigos, filtro);
});

renderCodigosList(codigos);

function addToHistory(e) {
  const item = e.cloneNode(true);
  historicoList.appendChild(item);
  historicoList.classList.add("history");
}
