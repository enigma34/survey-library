import { surveyLocalization } from "../surveyStrings";

export var germanSurveyStrings = {
  pagePrevText: "Zurück",
  pageNextText: "Weiter",
  completeText: "Abschließen",
  startSurveyText: "Start",
  otherItemText: "Sonstiges (Beschreibung)",
  noneItemText: "Nichts",
  selectAllItemText: "Alle auswählen",
  progressText: "Seite {0} von {1}",
  emptySurvey: "Es ist keine Frage vorhanden.",
  completingSurvey: "Danke, dass Sie die Umfrage abgeschlossen haben!",
  completingSurveyBefore:
    "Wir haben festgestellt, dass Sie diese Umfrage bereits abgeschlossen haben.",
  loadingSurvey: "Fragebogen wird geladen...",
  optionsCaption: "Bitte auswählen...",
  value: "Wert",
  requiredError: "Bitte beantworten Sie diese Frage.",
  requiredErrorInPanel: "Bitte beantworten Sie mindestens eine Frage.",
  requiredInAllRowsError: "Bitte beantworten Sie alle Fragen.",
  numericError: "Der Wert muss eine Zahl sein.",
  textMinLength: "Bitte geben sie mindestens {0} Zeichen ein.",
  textMaxLength: "Bitte geben Sie nicht mehr als {0} Zeichen ein.",
  textMinMaxLength: "Bitte geben sie mindestens {0} und maximal {1} Zeichen ein.",
  minRowCountError: "Bitte machen Sie in mindestens {0} Zeilen eine Eingabe.",
  minSelectError: "Bitte wählen Sie mindestens {0} Variante(n) aus.",
  maxSelectError: "Bitte wählen Sie nicht mehr als {0} Variante(n) aus.",
  numericMinMax:
    "'{0}' muss größer oder gleich {1} und kleiner oder gleich {2} sein",
  numericMin: "'{0}' muss größer oder gleich {1} sein",
  numericMax: "'{0}' muss kleiner oder gleich {1} sein",
  invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  invalidExpression: "Der Ausdruck: {0} muss den Wert 'wahr'(true) zurückliefern.",
  urlRequestError: "Die Anfrage lieferte den folgenden Fehler zurück '{0}'. {1}",
  urlGetChoicesError:
    "Die Anfrage lieferte leere Daten zurück oder der Wert der Variable 'path' ist falsch",
  exceedMaxSize: "Die Dateigröße darf {0} nicht überschreiten.",
  otherRequiredError: "Bitte geben Sie den anderen Wert ein.",
  uploadingFile:
    "Ihre Datei wird hochgeladen. Bitte warten Sie ein paar Sekunden und versuchen Sie es dann erneut.",
  loadingFile: "Wird geladen...",
  chooseFile: "Datei(en) auswählen...",
  confirmDelete: "Wollen Sie den Eintrag löschen?",
  keyDuplicationError: "Dieser Wert muss eindeutig sein.",
  addColumn: "Spalte hinzufügen",
  addRow: "Zeile hinzufügen",
  removeRow: "Entfernen",
  addPanel: "Neu hinzufügen",
  removePanel: "Entfernen",
  choices_Item: "Element",
  matrix_column: "Spalte",
  matrix_row: "Zeile",
  savingData: "Die Ergebnisse werden auf dem Server gespeichert...",
  savingDataError: "Es ist ein Fehler aufgetreten. Die Ergebnisse konnten nicht gespeichert werden.",
  savingDataSuccess: "Die Ergebnisse wurden gespeichert!",
  saveAgainButton: "Bitte versuchen Sie es erneut",
  timerMin: "Min.",
  timerSec: "Sek.",
  timerSpentAll: "Sie waren {0} auf dieser Seite und insgesamt {1}.",
  timerSpentPage: "Sie waren {0} auf dieser Seite.",
  timerSpentSurvey: "Sie haben insgesamt {0} benötigt.",
  timerLimitAll:
    "Sie waren {0} von {1} auf dieser Seite und insgesamt {2} von {3}.",
  timerLimitPage: "Sie waren {0} von {1} auf dieser Seite.",
  timerLimitSurvey: "Sie haben insgesamt {0} von {1} benötigt.",
  cleanCaption: "Sauber",
  clearCaption: "Leeren",
  removeFileCaption: "Datei löschen",
  booleanCheckedLabel: "Ja",
  booleanUncheckedLabel: "Nein",
  chooseFileCaption: "Datei wählen",
  confirmRemoveAllFiles: "Sind sie sicher, dass sie alle Dateien löschen möchten?",
  confirmRemoveFile: "Sind sie sicher, dass sie diese Datei löschen möchten: {0}?",
  noFileChosen: "Keine Datei ausgewählt",
  panelDynamicProgressText: "Eintrag {0} von {1}",
  questionTitlePatternText: "Fragetitel",
  questionsProgressText: "{0} von {1} Fragen beantwortet",
};

surveyLocalization.locales["de"] = germanSurveyStrings;
surveyLocalization.localeNames["de"] = "deutsch";
