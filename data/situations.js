export const situationsData = {
  en: [
    {
      id: "stopped",
      category: "General",
      title: "Police Stops or Questions You",
      icon: "stop",
      quick_actions: [
        "Stay calm, polite, and cooperative. Do not run or resist physically.",
        "Ask: 'Am I free to go?' If yes, walk away. If no, ask why you are being detained.",
        "Ask for the officer's name, rank, and police station (look at their name badge).",
        "Do not confess to anything or sign any document without understanding it."
      ],
      detailed_steps: [
        "Keep Calm: Speak politely and address the officer respectfully. Keeping a cool head prevents escalation.",
        "Ask the Right Question: Ask calmly, 'Officer, am I being detained or am I free to go?' If they say you are free to go, calmly walk away.",
        "Identify the Officer: You have a right to know who is stopping you. Check their name badge and rank. If they are in plain clothes, politely ask for their official ID card.",
        "Provide Basic ID: Under Section 179 BNS, you are required to answer questions truthfully, but only regarding your name and address. You are NOT required to answer incriminating questions without a lawyer.",
        "Document the Incident: If safe, note the time, location, vehicle number, and officer's name badge details. Witnesses or video recording (done non-threatingly) can help if rights are violated."
      ],
      rights: [
        {
          section: "Section 179 BNS (formerly Sec 191 IPC)",
          desc: "You must answer questions about your identity truthfully, but you have the constitutional right to remain silent on questions that might incriminate you."
        },
        {
          section: "Article 20(3) Constitution of India",
          desc: "No person accused of any offense shall be compelled to be a witness against himself (Right against self-incrimination)."
        }
      ],
      complaints: [
        { step: "1", text: "Note down the officer's name tag details, rank, vehicle number, and time/location of the incident." },
        { step: "2", text: "Submit a written complaint regarding harassment or abuse of power to the Superintendent of Police (SP) or Deputy Commissioner of Police (DCP)." },
        { step: "3", text: "If no action is taken, file a complaint with the State Police Complaints Authority (PCA) or the State Human Rights Commission." }
      ],
      helplines: [
        { name: "Emergency Response Support", number: "112" }
      ]
    },
    {
      id: "arrested",
      category: "Arrest",
      title: "You are Arrested or Detained",
      icon: "user-x",
      quick_actions: [
        "Ask for the grounds of arrest and request a copy of the written Arrest Memo.",
        "Inform a family member or friend immediately (police must do this under Section 48 BNSS).",
        "Demand to consult a lawyer immediately (Section 540 BNSS).",
        "If you are a woman, you cannot be arrested after sunset (6 PM) or before sunrise (6 AM) without a Magistrate's order."
      ],
      detailed_steps: [
        "Ask for Grounds and Memo: Demand to know why you are being arrested. Ensure an 'Arrest Memo' is prepared on the spot, detailing the date, exact time of arrest, and signed by at least one witness (family member or local citizen) and yourself.",
        "Notify Family: Under Section 48 BNSS, the police are legally obligated to immediately inform a relative or friend of your choice about your arrest and the place where you are being held.",
        "Request a Lawyer: You have the right to consult and be defended by a legal practitioner of your choice. Under Section 540 BNSS, you have the right to meet your lawyer during interrogation, though not throughout the interrogation.",
        "Demand Medical Examination: Under Section 51 BNSS, you have the right to be medically examined by a medical officer immediately after arrest. This records your physical condition and prevents physical torture.",
        "Magistrate Production: The police must produce you before a Judicial Magistrate within 24 hours of your arrest (excluding travel time), as per Section 58 BNSS. If they fail to do so, your detention is illegal."
      ],
      rights: [
        {
          section: "Section 47 BNSS (formerly Sec 50 CrPC)",
          desc: "Mandates that the police officer arresting you must communicate full particulars of the offense and the grounds of arrest."
        },
        {
          section: "Section 43(5) BNSS (formerly Sec 46(4) CrPC)",
          desc: "Except in exceptional circumstances, no woman can be arrested after sunset and before sunrise, and where such exceptional circumstances exist, the female officer must obtain prior written permission of a Judicial Magistrate."
        },
        {
          section: "Section 540 BNSS & Section 58 BNSS",
          desc: "Right to consult a lawyer of choice, and mandates production before a magistrate within 24 hours."
        }
      ],
      complaints: [
        { step: "1", text: "Inform the Judicial Magistrate about any violation of rights, refusal to show the arrest memo, or physical abuse immediately upon production." },
        { step: "2", text: "Contact the District Legal Services Authority (DLSA) if you cannot afford a lawyer; they are obligated to provide free legal aid." },
        { step: "3", text: "File a writ petition for Habeas Corpus in the High Court or Supreme Court if detention exceeds 24 hours without magistrate production." }
      ],
      helplines: [
        { name: "NALSA Free Legal Aid", number: "15100" },
        { name: "National Commission for Women", number: "7827170170" }
      ]
    },
    {
      id: "fir_refused",
      category: "FIR",
      title: "Police Refuse to Register an FIR",
      icon: "file-warning",
      quick_actions: [
        "Ask for the reason in writing. If refused, note the officer's name.",
        "Use the new 'E-FIR' option introduced under Section 173 BNSS to file online.",
        "Send your complaint in writing via registered post to the Superintendent of Police (SP).",
        "Approach the Judicial Magistrate Court to direct the police to register the FIR."
      ],
      detailed_steps: [
        "Understand Cognizable Offense: Police are legally bound to register an FIR immediately if the complaint discloses a cognizable offense (e.g., theft, assault, kidnapping).",
        "Utilize E-FIR (New BNSS provision): Under Section 173 BNSS, you can now file an FIR electronically (E-FIR). You must sign it within 3 days to officially register it.",
        "Escalate to SP: If the officer-in-charge refuses, write down the complaint and send it by Registered Post to the Superintendent of Police (SP) under Section 173(4) BNSS. If the SP is satisfied, they will investigate it or direct an officer to do so.",
        "File a Magistrate Complaint: If the SP also fails to act, you can approach the Judicial Magistrate Court under Section 175 BNSS (formerly Sec 156(3) CrPC) or Section 223 BNSS. The Magistrate can order the police to register the FIR and investigate."
      ],
      rights: [
        {
          section: "Section 173 BNSS (formerly Sec 154 CrPC)",
          desc: "Mandates that every information relating to the commission of a cognizable offense must be registered as an FIR. Introduces official E-FIR framework."
        },
        {
          section: "Section 197 BNS (formerly Sec 166A IPC)",
          desc: "Provides that a public servant/police officer who fails to record any information given to him regarding cognizable offenses can be punished with rigorous imprisonment for up to two years."
        }
      ],
      complaints: [
        { step: "1", text: "Submit a formal written complaint to the Senior Superintendent of Police (SSP/SP) regarding the station officer's refusal." },
        { step: "2", text: "File a petition under Section 175 BNSS before the local Judicial Magistrate requesting an order to register the FIR." },
        { step: "3", text: "Report the officer to the State Police Complaints Authority for neglect of duty under the Prevention of Corruption or Police Act rules." }
      ],
      helplines: [
        { name: "National Consumer Helpline (Grievance)", number: "1915" }
      ]
    },
    {
      id: "search_seizure",
      category: "Property",
      title: "Police Want to Search or Seize",
      icon: "search",
      quick_actions: [
        "Ask to see the official Search Warrant signed by a Magistrate.",
        "Conduct a body search of the police officers before they enter (to prevent planted evidence).",
        "Ensure two independent local witnesses are present during the entire search.",
        "Demand a signed copy of the Seizure Memo (Seizure List) immediately."
      ],
      detailed_steps: [
        "Demand a Warrant: Except in specific emergencies (like hot pursuit or risk of destruction of evidence), the police must present a Search Warrant issued by a Magistrate.",
        "Search the Police Officers: Politely but firmly ask the police officers to allow themselves to be searched before they enter your premises. This prevents them from planting illegal items (drugs, weapons) on your property.",
        "Insist on Witnesses: Under Section 185 BNSS, the search must be conducted in the presence of at least two independent, respectable local inhabitants as witnesses. Do not let the police bring their own friendly witnesses.",
        "Get the Seizure Memo: If the police seize any items, they must prepare a list (Seizure Memo) of all items confiscated. Ensure it is signed by the witnesses and get a copy of this list immediately. Do not sign a blank page.",
        "Search of Women: If a female citizen needs to be searched physically, it must be done strictly by a female police officer with strict regard to decency (Section 51(2) BNSS)."
      ],
      rights: [
        {
          section: "Section 185 BNSS (formerly Sec 100/165 CrPC)",
          desc: "Lays down the strict procedure for searches, requiring independent witnesses, body search of officers, and the mandatory provision of the seizure list."
        },
        {
          section: "Section 51(2) BNSS (formerly Sec 51(2) CrPC)",
          desc: "Mandates that whenever it is necessary to cause a female to be searched, the search shall be made by another female with strict regard to decency."
        }
      ],
      complaints: [
        { step: "1", text: "Note down the details of items taken that were not listed on the Seizure Memo, or if witnesses were denied." },
        { step: "2", text: "Submit an application to the Judicial Magistrate under whose jurisdiction the search was conducted, detailing the irregularities." },
        { step: "3", text: "File an action for illegal trespass or theft if police seized property without a warrant or official memo." }
      ],
      helplines: [
        { name: "Emergency Support", number: "112" }
      ]
    },
    {
      id: "assault_abuse",
      category: "Brutality",
      title: "Police Threatens, Abuses, or Assaults You",
      icon: "shield-alert",
      quick_actions: [
        "Do not physically retaliate. It will be used as an excuse to charge you with obstructing a public servant.",
        "Go to a Government Hospital immediately for a Medico-Legal Certificate (MLC).",
        "Document all injuries with photos, videos, and witness statements.",
        "File a complaint with the Police Complaints Authority (PCA) or Human Rights Commission."
      ],
      detailed_steps: [
        "Do Not Fight Back: Do not physically resist or verbally abuse the officers. Retaliation gives them a legal basis to arrest you for obstructing public duties (Section 221 BNS).",
        "Obtain Medical Evidence: Go straight to the nearest Government Hospital. Request the doctor on duty to conduct a Medico-Legal Case (MLC) examination. Get a copy of the MLC report showing all physical injuries.",
        "Collect Proof: Take clear photos of all injuries, bruises, and damage to property. Write down the names of any eyewitnesses, exact time, location, and the names/badge numbers of the offending officers.",
        "File Human Rights Complaint: Police brutality violates Article 21 (Right to Life and Liberty). You can file a direct petition in the High Court, or register a complaint online with the National Human Rights Commission (NHRC).",
        "Private Complaint: You can file a private criminal complaint before a Magistrate against the police officers for voluntary hurt, wrongful confinement, or criminal intimidation."
      ],
      rights: [
        {
          section: "Article 21 of the Constitution",
          desc: "Guarantees the protection of life and personal liberty. Third-degree methods and torture by police are direct violations of this fundamental right."
        },
        {
          section: "Section 198 BNS (formerly Sec 166 IPC)",
          desc: "Punishes a public servant who knowingly disobeys law to cause injury to any person with imprisonment up to one year."
        },
        {
          section: "Section 115 BNS (formerly Sec 323 IPC)",
          desc: "Punishes voluntarily causing hurt. Police officers have no immunity for committing physical violence outside of lawful execution."
        }
      ],
      complaints: [
        { step: "1", text: "Go to a government hospital and get a Medico-Legal Certificate (MLC) detailing all injuries immediately." },
        { step: "2", text: "Submit a written complaint along with the MLC and photos to the Police Complaints Authority (PCA) or the SP/DCP." },
        { step: "3", text: "File a private criminal complaint under Section 223 BNSS (formerly Sec 200 CrPC) in the Magistrate Court." }
      ],
      helplines: [
        { name: "Human Rights Commission Helpline", number: "144333" },
        { name: "National Commission for Women", number: "7827170170" }
      ]
    },
    {
      id: "bribe",
      category: "Corruption",
      title: "Police Officer Asks for a Bribe",
      icon: "dollar",
      quick_actions: [
        "Never pay the bribe. Giving a bribe is also a punishable offense under the law.",
        "Pretend to delay the payment to gather evidence (record audio/video discretely).",
        "Report immediately to the Anti-Corruption Bureau (ACB) or State Vigilance Department.",
        "Call the National Anti-Corruption Helpline at 1064."
      ],
      detailed_steps: [
        "Do Not Agree or Pay: Firmly refuse to pay the bribe. Remember, under Section 8 of the Prevention of Corruption Act, giving a bribe is also a criminal offense unless you were forced and report it within 7 days.",
        "Collect Evidence Discretely: Use your phone to record audio or video of the demand. If you can't record, try to have a witness present who hears the demand. Note the exact amount, reason, and officer details.",
        "Set Up a Trap (Optional): If you report the demand to the Anti-Corruption Bureau (ACB), they will often arrange a 'trap' using chemically-marked currency to catch the corrupt officer red-handed.",
        "Report Online: You can file complaints directly on the Central Vigilance Commission (CVC) portal or your state's Anti-Corruption department website."
      ],
      rights: [
        {
          section: "Prevention of Corruption Act, 1988",
          desc: "Section 7 criminalizes public servants accepting bribes. Section 8 protects citizens who are forced to give bribes IF they report the matter to law enforcement within 7 days."
        }
      ],
      complaints: [
        { step: "1", text: "Do not pay the bribe. Note down the officer's name, designation, police station, and exact demand." },
        { step: "2", text: "Call the Anti-Corruption helpline (1064) or contact the local Anti-Corruption Bureau (ACB) office immediately." },
        { step: "3", text: "Provide the audio/video recordings and any other evidence to the ACB officers to initiate a trap or formal investigation." }
      ],
      helplines: [
        { name: "National Anti-Corruption Helpline", number: "1064" }
      ]
    },
    {
      id: "complaint_channels",
      category: "Redressal",
      title: "Where & How to Complain",
      icon: "message",
      quick_actions: [
        "File a complaint with the Police Complaints Authority (PCA) in your state.",
        "Submit an online complaint to the National Human Rights Commission (NHRC).",
        "For women, complain to the National Commission for Women (NCW).",
        "Hire a lawyer to file a private complaint or Writ Petition in Court."
      ],
      detailed_steps: [
        "Police Complaints Authority (PCA): Set up specifically to hear complaints of serious misconduct (death in custody, rape, extortion, serious abuse of power) against police officers. PCA exists at both State and District levels.",
        "National Human Rights Commission (NHRC): You can file a complaint online on the HRCNet portal (hrcnet.nic.in). NHRC can order compensation, direct FIRs, and investigate human rights violations by public servants.",
        "Magistrate Court: Under Section 223 BNSS, you can file a direct private criminal complaint. The Magistrate will examine you under oath and can summon the accused police officers.",
        "Higher Courts (Writs): For serious violations (like illegal detention), your lawyer can file a Writ Petition (Habeas Corpus or Mandamus) under Article 226 in the High Court or Article 32 in the Supreme Court."
      ],
      rights: [
        {
          section: "Section 223 BNSS (formerly Sec 200 CrPC)",
          desc: "Enables any citizen to file a direct complaint to a Magistrate regarding any criminal act, including those committed by police officers."
        },
        {
          section: "Article 226 & Article 32 of Constitution",
          desc: "Empowers the High Courts and Supreme Court to issue writs (orders) to protect fundamental rights from violation by state officials."
        }
      ],
      complaints: [
        { step: "1", text: "Draft a clear, chronological statement of facts containing dates, times, names of officers, and witness details." },
        { step: "2", text: "Attach medical reports (MLCs), photographs of injuries, or video evidence to your complaint." },
        { step: "3", text: "Submit the complaint package to the State Human Rights Commission, PCA, or send it by registered post to the SP/DCP." }
      ],
      helplines: [
        { name: "NHRC Helpline", number: "144333" },
        { name: "National Commission for Women", number: "7827170170" },
        { name: "NALSA Legal Aid", number: "15100" }
      ]
    }
  ],
  hi: [
    {
      id: "stopped",
      category: "सामान्य",
      title: "पुलिस आपको रोकती या पूछताछ करती है",
      icon: "stop",
      quick_actions: [
        "शांत, विनम्र और सहयोगी रहें। भागें नहीं या शारीरिक रूप से विरोध न करें।",
        "पूछें: 'क्या मैं जाने के लिए स्वतंत्र हूँ?' यदि हाँ, तो चले जाएं। यदि नहीं, तो पूछें कि आपको क्यों रोका गया है।",
        "अधिकारी का नाम, पद और पुलिस स्टेशन पूछें (उनके नेम बैज को देखें)।",
        "बिना समझे किसी भी दस्तावेज़ पर हस्ताक्षर न करें या कुछ भी स्वीकार न करें।"
      ],
      detailed_steps: [
        "शांत रहें: गहरी सांस लें। विनम्रता से बात करें और अधिकारी को सम्मानपूर्वक संबोधित करें। शांत रहने से मामला बढ़ता नहीं है।",
        "सही सवाल पूछें: शांति से पूछें, 'अधिकारी जी, क्या मुझे हिरासत में लिया जा रहा है या मैं जाने के लिए स्वतंत्र हूँ?' यदि वे कहते हैं कि आप स्वतंत्र हैं, तो शांति से चले जाएं।",
        "अधिकारी की पहचान करें: आपको यह जानने का अधिकार है कि आपको कौन रोक रहा है। उनका नेम बैज और पद देखें। यदि वे सादे कपड़ों में हैं, तो विनम्रता से उनका आधिकारिक पहचान पत्र (आईडी) मांगें।",
        "मूल पहचान प्रदान करें: BNS की धारा 179 के तहत, आपको अपनी पहचान (नाम और पता) के बारे में पूछे गए सवालों का सही जवाब देना आवश्यक है। बिना वकील के किसी भी ऐसे सवाल का जवाब देने की आवश्यकता नहीं है जो आपको फंसा सकता है।",
        "घटना का विवरण नोट करें: यदि सुरक्षित हो, तो समय, स्थान, वाहन संख्या और अधिकारी के नेम बैज का विवरण नोट करें। यदि अधिकारों का उल्लंघन होता है, तो गवाह या वीडियो रिकॉर्डिंग (बिना डराए की गई) मदद कर सकती है।"
      ],
      rights: [
        {
          section: "BNS की धारा 179 (पहले IPC धारा 191)",
          desc: "आपको अपनी पहचान के बारे में पूछे गए सवालों का जवाब सच देना होगा, लेकिन आपके पास उन सवालों पर चुप रहने का संवैधानिक अधिकार है जो आपको फंसा सकते हैं।"
        },
        {
          section: "भारत के संविधान का अनुच्छेद 20(3)",
          desc: "आरोपी व्यक्ति को खुद के खिलाफ गवाह बनने के लिए मजबूर नहीं किया जाएगा (आत्म-दोषारोपण के खिलाफ अधिकार)।"
        }
      ],
      complaints: [
        { step: "1", text: "अधिकारी के नेम टैग का विवरण, पद, वाहन संख्या और घटना के समय/स्थान को नोट करें।" },
        { step: "2", text: "उत्पीड़न या शक्ति के दुरुपयोग के संबंध में पुलिस अधीक्षक (SP) या पुलिस उपायुक्त (DCP) को लिखित शिकायत दर्ज करें।" },
        { step: "3", text: "यदि कोई कार्रवाई नहीं की जाती है, तो राज्य पुलिस शिकायत प्राधिकरण (PCA) या राज्य मानवाधिकार आयोग में शिकायत दर्ज करें।" }
      ],
      helplines: [
        { name: "आपातकालीन प्रतिक्रिया सहायता", number: "112" }
      ]
    },
    {
      id: "arrested",
      category: "गिरफ्तारी",
      title: "आपको गिरफ्तार या हिरासत में लिया जाता है",
      icon: "user-x",
      quick_actions: [
        "गिरफ्तारी का कारण पूछें और लिखित गिरफ्तारी ज्ञापन (Arrest Memo) की एक प्रति मांगें।",
        "अपने परिवार के सदस्य या मित्र को तुरंत सूचित करें (पुलिस को BNSS की धारा 48 के तहत ऐसा करना अनिवार्य है)।",
        "तुरंत वकील से परामर्श करने की मांग करें (BNSS धारा 540)।",
        "यदि आप एक महिला हैं, तो आपको सूर्यास्त (शाम 6 बजे) के बाद या सूर्योदय (सुबह 6 बजे) से पहले मजिस्ट्रेट के आदेश के बिना गिरफ्तार नहीं किया जा सकता।"
      ],
      detailed_steps: [
        "कारण और मेमो मांगें: यह जानने की मांग करें कि आपको क्यों गिरफ्तार किया जा रहा है। सुनिश्चित करें कि मौके पर ही एक 'गिरफ्तारी ज्ञापन' (Arrest Memo) तैयार किया जाए, जिसमें तारीख, गिरफ्तारी का सही समय दर्ज हो और जिस पर कम से कम एक गवाह (परिवार का सदस्य या स्थानीय नागरिक) और आपके हस्ताक्षर हों।",
        "परिवार को सूचित करें: BNSS की धारा 48 के तहत, पुलिस कानूनी रूप से आपके द्वारा चुने गए किसी रिश्तेदार या दोस्त को आपकी गिरफ्तारी और हिरासत में रखने के स्थान के बारे में तुरंत सूचित करने के लिए बाध्य है।",
        "वकील की मांग करें: आपको अपनी पसंद के वकील से परामर्श करने और अपना बचाव करने का अधिकार है। BNSS की धारा 540 के तहत, आपको पूछताछ के दौरान अपने वकील से मिलने का अधिकार है, हालांकि पूरी पूछताछ के दौरान नहीं।",
        "चिकित्सा जांच की मांग करें: BNSS की धारा 51 के तहत, आपको गिरफ्तारी के तुरंत बाद डॉक्टर द्वारा चिकित्सकीय जांच कराने का अधिकार है। यह आपकी शारीरिक स्थिति को रिकॉर्ड करता है और पुलिस प्रताड़ना को रोकता है।",
        "मजिस्ट्रेट के समक्ष पेशी: पुलिस को आपकी गिरफ्तारी के 24 घंटे के भीतर (यात्रा के समय को छोड़कर) आपको न्यायिक मजिस्ट्रेट के समक्ष पेश करना होगा (BNSS की धारा 58)। यदि वे ऐसा करने में विफल रहते हैं, तो आपकी हिरासत अवैध है।"
      ],
      rights: [
        {
          section: "BNSS की धारा 47 (पहले CrPC धारा 50)",
          desc: "यह अनिवार्य करता है कि गिरफ्तार करने वाले पुलिस अधिकारी को अपराध के पूर्ण विवरण और गिरफ्तारी के कारणों के बारे में बताना होगा।"
        },
        {
          section: "BNSS की धारा 43(5) (पहले CrPC धारा 46(4))",
          desc: "असाधारण परिस्थितियों को छोड़कर, किसी भी महिला को सूर्यास्त के बाद और सूर्योदय से पहले गिरफ्तार नहीं किया जा सकता है। जहां ऐसी परिस्थितियां मौजूद हों, वहां महिला अधिकारी को न्यायिक मजिस्ट्रेट की पूर्व लिखित अनुमति प्राप्त करनी होगी।"
        },
        {
          section: "BNSS धारा 540 और धारा 58",
          desc: "अपनी पसंद के वकील से परामर्श करने का अधिकार, और 24 घंटे के भीतर मजिस्ट्रेट के समक्ष पेशी अनिवार्य है।"
        }
      ],
      complaints: [
        { step: "1", text: "पेशी के दौरान न्यायिक मजिस्ट्रेट को अधिकारों के उल्लंघन, गिरफ्तारी ज्ञापन न दिखाने, या शारीरिक शोषण के बारे में तुरंत सूचित करें।" },
        { step: "2", text: "यदि आप वकील का खर्च वहन नहीं कर सकते हैं, तो जिला कानूनी सेवा प्राधिकरण (DLSA) से संपर्क करें; वे मुफ्त कानूनी सहायता प्रदान करने के लिए बाध्य हैं।" },
        { step: "3", text: "यदि मजिस्ट्रेट की पेशी के बिना हिरासत 24 घंटे से अधिक हो जाती है, तो उच्च न्यायालय या उच्चतम न्यायालय में बंदी प्रत्यक्षीकरण (Habeas Corpus) याचिका दायर करें।" }
      ],
      helplines: [
        { name: "NALSA मुफ्त कानूनी सहायता", number: "15100" },
        { name: "राष्ट्रीय महिला आयोग", number: "7827170170" }
      ]
    },
    {
      id: "fir_refused",
      category: "एफआईआर",
      title: "पुलिस एफआईआर (FIR) दर्ज करने से मना करती है",
      icon: "file-warning",
      quick_actions: [
        "लिखित में इनकार करने का कारण मांगें। यदि मना करें, तो अधिकारी का नाम नोट करें।",
        "ऑनलाइन शिकायत दर्ज करने के लिए BNSS की धारा 173 के तहत पेश किए गए नए 'E-FIR' विकल्प का उपयोग करें।",
        "अपनी शिकायत लिखित रूप में पंजीकृत डाक (Registered Post) द्वारा पुलिस अधीक्षक (SP) को भेजें।",
        "पुलिस को एफआईआर दर्ज करने का निर्देश देने के लिए न्यायिक मजिस्ट्रेट अदालत का दरवाजा खटखटाएं।"
      ],
      detailed_steps: [
        "संज्ञेय अपराध (Cognizable Offense) को समझें: यदि शिकायत से किसी संज्ञेय अपराध (जैसे चोरी, मारपीट, अपहरण) का पता चलता है, तो पुलिस तुरंत एफआईआर दर्ज करने के लिए कानूनी रूप से बाध्य है।",
        "E-FIR का उपयोग करें (नया BNSS प्रावधान): BNSS की धारा 173 के तहत, अब आप इलेक्ट्रॉनिक रूप से एफआईआर (E-FIR) दर्ज कर सकते हैं। इसे आधिकारिक रूप से पंजीकृत करने के लिए आपको 3 दिनों के भीतर इस पर हस्ताक्षर करना होगा।",
        "SP को भेजें: यदि थाना प्रभारी मना करता है, तो शिकायत को लिखित रूप में दर्ज करें और इसे BNSS की धारा 173(4) के तहत पंजीकृत डाक से पुलिस अधीक्षक (SP) को भेजें। यदि SP संतुष्ट होते हैं, तो वे जांच करेंगे या किसी अधिकारी को निर्देश देंगे।",
        "मजिस्ट्रेट शिकायत दर्ज करें: यदि SP भी कार्रवाई करने में विफल रहते हैं, तो आप BNSS की धारा 175 (पहले CrPC धारा 156(3)) या धारा 223 के तहत न्यायिक मजिस्ट्रेट अदालत का रुख कर सकते हैं। मजिस्ट्रेट पुलिस को एफआईआर दर्ज करने और जांच करने का आदेश दे सकते हैं।"
      ],
      rights: [
        {
          section: "BNSS की धारा 173 (पहले CrPC धारा 154)",
          desc: "संज्ञेय अपराध से संबंधित प्रत्येक सूचना को एफआईआर के रूप में दर्ज करना अनिवार्य है। इसमें आधिकारिक E-FIR ढांचा शामिल है।"
        },
        {
          section: "BNS की धारा 197 (पहले IPC धारा 166A)",
          desc: "कोई भी लोक सेवक/पुलिस अधिकारी जो संज्ञेय अपराधों के संबंध में उसे दी गई जानकारी को दर्ज करने में विफल रहता है, उसे दो साल तक के कठोर कारावास से दंडित किया जा सकता है।"
        }
      ],
      complaints: [
        { step: "1", text: "थाना अधिकारी के इनकार के संबंध में वरिष्ठ पुलिस अधीक्षक (SSP/SP) को एक औपचारिक लिखित शिकायत प्रस्तुत करें।" },
        { step: "2", text: "स्थानीय न्यायिक मजिस्ट्रेट के समक्ष BNSS की धारा 175 के तहत एक याचिका दायर कर एफआईआर दर्ज करने का आदेश देने का अनुरोध करें।" },
        { step: "3", text: "कर्तव्य में लापरवाही के लिए पुलिस शिकायत प्राधिकरण को अधिकारी की रिपोर्ट करें।" }
      ],
      helplines: [
        { name: "राष्ट्रीय उपभोक्ता हेल्पलाइन", number: "1915" }
      ]
    },
    {
      id: "search_seizure",
      category: "संपत्ति",
      title: "पुलिस तलाशी या जब्ती करना चाहती है",
      icon: "search",
      quick_actions: [
        "मजिस्ट्रेट द्वारा हस्ताक्षरित आधिकारिक तलाशी वारंट (Search Warrant) दिखाने की मांग करें।",
        "पुलिस अधिकारियों को प्रवेश करने से पहले उनकी शारीरिक तलाशी लें (ताकि वे झूठे सबूत न रख सकें)।",
        "सुनिश्चित करें कि पूरी तलाशी के दौरान दो स्वतंत्र स्थानीय गवाह मौजूद हों।",
        "तुरंत हस्ताक्षरित जब्ती ज्ञापन (Seizure Memo) की प्रति मांगें।"
      ],
      detailed_steps: [
        "वारंट की मांग करें: विशिष्ट आपात स्थितियों को छोड़कर, पुलिस को मजिस्ट्रेट द्वारा जारी तलाशी वारंट पेश करना होगा।",
        "police अधिकारियों की तलाशी लें: पुलिस अधिकारियों को अपने परिसर में प्रवेश करने से पहले खुद की तलाशी देने के लिए विनम्रता से कहें। यह उन्हें आपकी संपत्ति पर अवैध सामान (ड्रग्स, हथियार) रखने से रोकता है।",
        "स्वतंत्र गवाहों पर जोर दें: BNSS की धारा 185 के तहत, तलाशी कम से कम दो स्वतंत्र, सम्मानित स्थानीय निवासियों की उपस्थिति में होनी चाहिए। पुलिस को अपने अनुकूल गवाह लाने न दें।",
        "जब्ती ज्ञापन प्राप्त करें: यदि पुलिस कोई सामान जब्त करती है, तो उन्हें जब्त की गई सभी वस्तुओं की सूची (Seizure Memo) तैयार करनी होगी। सुनिश्चित करें कि इस पर गवाहों के हस्ताक्षर हों और इसकी एक प्रति तुरंत प्राप्त करें। खाली पन्नों पर हस्ताक्षर न करें।",
        "महिला की तलाशी: यदि किसी महिला की शारीरिक तलाशी लेने की आवश्यकता है, तो यह कड़ाई से एक महिला पुलिस अधिकारी द्वारा ही शालीनता का पूरा ध्यान रखते हुए की जानी चाहिए (BNSS धारा 51(2))।"
      ],
      rights: [
        {
          section: "BNSS की धारा 185 (पहले CrPC धारा 100/165)",
          desc: "तलाशी के लिए सख्त प्रक्रिया निर्धारित करता है, जिसमें स्वतंत्र गवाहों की आवश्यकता, अधिकारियों की शारीरिक तलाशी और जब्ती सूची प्रदान करना अनिवार्य है।"
        },
        {
          section: "BNSS की धारा 51(2) (पहले CrPC धारा 51(2))",
          desc: "यह अनिवार्य करता है कि जब भी किसी महिला की तलाशी लेना आवश्यक हो, तो तलाशी शालीनता का पूरा ध्यान रखते हुए दूसरी महिला द्वारा की जाएगी।"
        }
      ],
      complaints: [
        { step: "1", text: "उन वस्तुओं का विवरण नोट करें जो जब्त की गईं लेकिन जब्ती ज्ञापन पर सूचीबद्ध नहीं थीं।" },
        { step: "2", text: "जिस न्यायिक मजिस्ट्रेट के अधिकार क्षेत्र में तलाशी ली गई थी, उनके समक्ष अनियमितताओं का विवरण देते हुए एक आवेदन प्रस्तुत करें।" },
        { step: "3", text: "यदि पुलिस ने बिना वारंट या आधिकारिक मेमो के संपत्ति जब्त की है, तो अवैध प्रवेश या चोरी की कार्रवाई शुरू करें।" }
      ],
      helplines: [
        { name: "आपातकालीन सहायता", number: "112" }
      ]
    },
    {
      id: "assault_abuse",
      category: "बर्बरता",
      title: "पुलिस अधिकारी आपको धमकाता, गाली देता या पीटता है",
      icon: "shield-alert",
      quick_actions: [
        "शारीरिक रूप से जवाबी कार्रवाई न करें। इसे सरकारी काम में बाधा डालने के आरोप लगाने के बहाने के रूप में इस्तेमाल किया जाएगा।",
        "मेडिको-लीगल सर्टिफिकेट (MLC) के लिए तुरंत सरकारी अस्पताल जाएं।",
        "तस्वीरों, वीडियो और गवाहों के बयानों के साथ सभी चोटों के दस्तावेज़ तैयार करें।",
        "पुलिस शिकायत प्राधिकरण (PCA) या मानवाधिकार आयोग में शिकायत दर्ज करें।"
      ],
      detailed_steps: [
        "जवाबी हमला न करें: अधिकारियों का शारीरिक रूप से विरोध न करें। जवाबी कार्रवाई उन्हें सरकारी कार्यों में बाधा डालने के आरोप में आपको गिरफ्तार करने का कानूनी आधार देती है (BNS धारा 221)।",
        "चिकित्सीय साक्ष्य प्राप्त करें: सीधे नजदीकी सरकारी अस्पताल जाएं। ड्यूटी पर मौजूद डॉक्टर से मेडिको-लीगल केस (MLC) जांच करने का अनुरोध करें और MLC रिपोर्ट की एक प्रति प्राप्त करें।",
        "सबूत इकट्ठा करें: सभी चोटों, नीले निशानों और संपत्ति के नुकसान की स्पष्ट तस्वीरें लें। चश्मदीद गवाहों के नाम, सही समय, स्थान और दोषी अधिकारियों के नाम/बैज नंबर नोट करें।",
        "मानवाधिकार शिकायत दर्ज करें: पुलिस बर्बरता अनुच्छेद 21 (जीवन और स्वतंत्रता का अधिकार) का उल्लंघन है। आप उच्च न्यायालय में सीधी याचिका दायर कर सकते हैं, या राष्ट्रीय मानवाधिकार आयोग (NHRC) के साथ ऑनलाइन शिकायत दर्ज कर सकते हैं।",
        "निजी शिकायत: आप पुलिस अधिकारियों के खिलाफ चोट पहुंचाने, गलत तरीके से बंधक बनाने या आपराधिक धमकी देने के लिए मजिस्ट्रेट के समक्ष सीधी निजी शिकायत दर्ज कर सकते हैं।"
      ],
      rights: [
        {
          section: "संविधान का अनुच्छेद 21",
          desc: "जीवन और व्यक्तिगत स्वतंत्रता के संरक्षण की गारंटी देता है। पुलिस द्वारा यातना और बर्बरता इस मौलिक अधिकार का सीधा उल्लंघन है।"
        },
        {
          section: "BNS की धारा 198 (पहले IPC धारा 166)",
          desc: "किसी भी व्यक्ति को चोट पहुंचाने के लिए जानबूझकर कानून की अवज्ञा करने वाले लोक सेवक को एक वर्ष तक के कारावास से दंडित करती है।"
        },
        {
          section: "BNS की धारा 115 (पहले IPC धारा 323)",
          desc: "स्वेच्छा से चोट पहुंचाने के लिए दंडित करती है। पुलिस अधिकारियों को शारीरिक हिंसा करने के लिए कोई छूट प्राप्त नहीं है।"
        }
      ],
      complaints: [
        { step: "1", text: "तुरंत सरकारी अस्पताल जाएं और चोटों का विवरण देने वाला मेडिको-लीगल सर्टिफिकेट (MLC) प्राप्त करें।" },
        { step: "2", text: "MLC और तस्वीरों के साथ पुलिस शिकायत प्राधिकरण (PCA) या SP/DCP को एक लिखित शिकायत प्रस्तुत करें।" },
        { step: "3", text: "मजिस्ट्रेट कोर्ट में BNSS की धारा 223 के तहत एक निजी शिकायत दर्ज करें।" }
      ],
      helplines: [
        { name: "मानवाधिकार आयोग हेल्पलाइन", number: "144333" },
        { name: "राष्ट्रीय महिला आयोग", number: "7827170170" }
      ]
    },
    {
      id: "bribe",
      category: "भ्रष्टाचार",
      title: "पुलिस अधिकारी रिश्वत मांगता है",
      icon: "dollar",
      quick_actions: [
        "कभी भी रिश्वत न दें। कानूनन रिश्वत देना भी एक दंडनीय अपराध है।",
        "सबूत इकट्ठा करने के लिए भुगतान में थोड़ी देरी का बहाना बनाएं (चुपके से रिकॉर्ड करें)।",
        "तुरंत भ्रष्टाचार निरोधक ब्यूरो (ACB) या राज्य सतर्कता विभाग को रिपोर्ट करें।",
        "राष्ट्रीय भ्रष्टाचार निरोधक हेल्पलाइन नंबर 1064 पर कॉल करें।"
      ],
      detailed_steps: [
        "सहमत न हों और रिश्वत न दें: रिश्वत देने से दृढ़ता से इनकार करें। याद रखें, भ्रष्टाचार निवारण अधिनियम की धारा 8 के तहत रिश्वत देना भी एक अपराध है, जब तक कि आपको मजबूर न किया गया हो और आप 7 दिनों के भीतर रिपोर्ट करते हैं।",
        "चुपके से सबूत इकट्ठा करें: रिश्वत की मांग का आदेश या वीडियो रिकॉर्ड करने के लिए अपने फोन का उपयोग करें। यदि आप रिकॉर्ड नहीं कर सकते हैं, तो गवाह को साथ रखने का प्रयास करें। सटीक राशि और अधिकारी का विवरण नोट करें।",
        "जाल (Trap) बिछाएं: यदि आप भ्रष्टाचार निरोधक ब्यूरो (ACB) को मांग की रिपोर्ट करते हैं, तो वे अक्सर भ्रष्ट अधिकारी को रंगे हाथों पकड़ने के लिए रासायनिक रूप से चिह्नित मुद्रा का उपयोग करके 'जाल' बिछाते हैं।",
        "ऑनलाइन रिपोर्ट करें: आप केंद्रीय सतर्कता आयोग (CVC) पोर्टल या अपने राज्य के भ्रष्टाचार निरोधक विभाग की वेबसाइट पर सीधे शिकायत दर्ज कर सकते हैं।"
      ],
      rights: [
        {
          section: "भ्रष्टाचार निवारण अधिनियम, 1988",
          desc: "धारा 7 रिश्वत स्वीकार करने वाले लोक सेवकों को अपराधी मानती है। धारा 8 उन नागरिकों की रक्षा करती है जिन्हें रिश्वत देने के लिए मजबूर किया गया था, यदि वे 7 दिनों के भीतर रिपोर्ट करते हैं।"
        }
      ],
      complaints: [
        { step: "1", text: "रिश्वत न दें। अधिकारी का नाम, पद, पुलिस स्टेशन और सही मांग नोट करें।" },
        { step: "2", text: "तुरंत भ्रष्टाचार निरोधक हेल्पलाइन (1064) पर कॉल करें या स्थानीय भ्रष्टाचार निरोधक ब्यूरो (ACB) कार्यालय से संपर्क करें।" },
        { step: "3", text: "कार्रवाई शुरू करने के लिए एसीबी अधिकारियों को ऑडियो/वीडियो रिकॉर्डिंग और अन्य सबूत प्रदान करें।" }
      ],
      helplines: [
        { name: "राष्ट्रीय भ्रष्टाचार निरोधक हेल्पलाइन", number: "1064" }
      ]
    },
    {
      id: "complaint_channels",
      category: "शिकायत",
      title: "कहां और कैसे शिकायत करें",
      icon: "message",
      quick_actions: [
        "अपने राज्य में पुलिस शिकायत प्राधिकरण (PCA) में शिकायत दर्ज करें।",
        "राष्ट्रीय मानवाधिकार आयोग (NHRC) को एक ऑनलाइन शिकायत प्रस्तुत करें।",
        "महिलाओं के मामले में, राष्ट्रीय महिला आयोग (NCW) में शिकायत दर्ज करें।",
        "अदालत में निजी शिकायत या रिट याचिका दायर करने के लिए एक वकील से मिलें।"
      ],
      detailed_steps: [
        "पुलिस शिकायत प्राधिकरण (PCA): विशेष रूप से पुलिस अधिकारियों के खिलाफ गंभीर कदाचार (हिरासत में मौत, बलात्कार, जबरन वसूली, गंभीर शक्ति का दुरुपयोग) की शिकायतों को सुनने के लिए स्थापित किया गया है।",
        "राष्ट्रीय मानवाधिकार आयोग (NHRC): आप HRCNet पोर्टल (hrcnet.nic.in) पर ऑनलाइन शिकायत दर्ज कर सकते हैं। NHRC मुआवजे का आदेश दे सकता है, एफआईआर का निर्देश दे सकता है और जांच कर सकता है।",
        "मजिस्ट्रेट कोर्ट: BNSS की धारा 223 के तहत, आप एक सीधी निजी शिकायत दर्ज कर सकते हैं। मजिस्ट्रेट शपथ पर आपकी जांच करेंगे और आरोपी पुलिस अधिकारियों को समन जारी कर सकते हैं।",
        "उच्च न्यायालय (रिट याचिका): गंभीर उल्लोंघनों के लिए, आपका वकील उच्च न्यायालय में अनुच्छेद 226 के तहत या उच्चतम न्यायालय में अनुच्छेद 32 के तहत बंदी प्रत्यक्षीकरण (Habeas Corpus) याचिका दायर कर सकता है।"
      ],
      rights: [
        {
          section: "BNSS की धारा 223 (पहले CrPC धारा 200)",
          desc: "किसी भी नागरिक को पुलिस अधिकारियों द्वारा किए गए कृत्यों सहित किसी भी आपराधिक कृत्य के संबंध में सीधे मजिस्ट्रेट से शिकायत करने में सक्षम बनाती है।"
        },
        {
          section: "संविधान का अनुच्छेद 226 और अनुच्छेद 32",
          desc: "राज्य के अधिकारियों द्वारा मौलिक अधिकारों के उल्लंघन से बचाने के लिए उच्च न्यायालयों और उच्चतम न्यायालय को रिट (आदेश) जारी करने का अधिकार देता है।"
        }
      ],
      complaints: [
        { step: "1", text: "तथ्यों का एक स्पष्ट लिखित विवरण तैयार करें जिसमें तारीख, समय, अधिकारियों के नाम और गवाहों का विवरण शामिल हो।" },
        { step: "2", text: "अपनी शिकायत के साथ मेडिकल रिपोर्ट (MLC), चोटों की तस्वीरें, या वीडियो साक्ष्य संलग्न करें।" },
        { step: "3", text: "शिकायत पत्र को राज्य मानवाधिकार आयोग, PCA को सौंपें या पंजीकृत डाक से SP/DCP को भेजें।" }
      ],
      helplines: [
        { name: "NHRC हेल्पलाइन", number: "144333" },
        { name: "राष्ट्रीय महिला आयोग", number: "7827170170" },
        { name: "NALSA कानूनी सहायता", number: "15100" }
      ]
    }
  ]
};
