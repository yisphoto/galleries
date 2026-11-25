// ← הדביקו כאן את כתובת ה-Web app מ-Google Apps Script (מסתיימת ב-/exec)
window.GALLERY_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbwSmAa3NtJMg1sHY1iTB5GYTL-t9c4zie9D7f76JgL9g7FaxY2L8-XyiEDwdBEW340pLA/exec',
  // הורדה ישירה מהאתר (הקבצים עוברים דרך הסקריפט של גוגל, הלקוח לא רואה את Drive)
  DIRECT_DOWNLOAD: true,
  // מפתח API של גוגל – הורדה מהירה ישירות מ-Drive (מוגבל לאתר הזה בלבד)
  DRIVE_API_KEY: 'AIzaSyCjaJj16fv2-iE3lMLgEC0oazvPoAu670k',
  // חלון ההמלצה שקופץ ללקוח בגלריה
  REVIEWS: true,
  REVIEW_DELAY_SEC: 20
};
