DURATUS SLEEP DEBT SCREENER

Overview  
The Duratus Sleep Debt Screener is a browser-based assessment tool designed to identify probable sleep debt, reduced recovery, and daytime performance impairment. It delivers a structured questionnaire, real-time scoring, and a one-page executive report that can be exported directly as a PDF.

The tool is grounded in contemporary sleep science, including behavioural markers of insufficient sleep, circadian regulation, and performance degradation associated with sleep restriction.

---

Key Features  

Card-based assessment  
Questions are delivered sequentially to reduce cognitive load and improve response quality.

Live scoring dashboard  
The application updates total score, subscale scores, and RAG classification in real time as responses are entered.

RAG classification  
Green indicates low current evidence of sleep debt  
Amber indicates emerging sleep debt or reduced recovery margin  
Red indicates high likelihood of meaningful sleep debt or a triggered safety or clinical flag

Override flags  
Driving-related sleepiness and indicators of sleep-disordered breathing can override the core score and trigger a Red classification.

Executive summary report  
A one-page report summarises score, interpretation, subscale profile, and priority actions.

Direct PDF export  
The application generates a downloadable PDF file directly from the report view. No browser print workflow is required.

---

File Structure  

index.html  
Main application structure and layout

style.css  
Duratus visual identity, layout, and responsive styling

script.js  
Assessment logic, scoring system, navigation, and PDF generation

DuratusNeg.png  
Brand logo used in the interface and report

README.txt  
Project documentation

---

How to Use  

1. Open index.html in a modern web browser  
2. Complete the questionnaire using the card-based interface  
3. Review the live dashboard as scores update  
4. Scroll to the executive summary report  
5. Click "Export PDF"  
6. The application will generate and download a branded PDF report

---

Scoring Model  

Core score range  
0 to 27 based on Questions 1 to 9

Subscales  
Sleep opportunity  
Recovery and alertness  
Daytime consequences

Override logic  
Driving sleepiness or probable sleep-disordered breathing can elevate the result to Red regardless of core score

---

Intended Use  

This tool is designed for:  
Performance coaching  
Leadership development  
Occupational health contexts  
High reliability environments  

The screener provides an indication of sleep-related risk. It is not a diagnostic instrument and does not replace clinical assessment.

---

Technical Notes  

The application runs entirely client-side  
No user data is stored or transmitted  
PDF export is handled within the application using client-side rendering  
Best performance in Chrome and Edge  
Internet connection may be required for external libraries depending on deployment

---

Limitations  

PDF rendering depends on browser support for canvas and client-side libraries  
Very large displays or zoom settings may affect PDF scaling  
The tool does not provide clinical diagnosis

---

Future Development  

Potential extensions include:  
User data capture and longitudinal tracking  
Automated report storage  
Integration with wearable data  
Expanded clinical screening pathways  
Multi-user organisational dashboards  

---

Licence  

Specify licence terms here if distributing publicly

---

Contact  

Duratus  
Add contact details or website here
