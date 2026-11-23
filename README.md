# גלריות ללקוחות

אתר גלריות לצלמים. האתר יושב ב־GitHub Pages, והתמונות נשארות ב־Google Drive.

- `index.html`: הגלריה שהלקוח רואה (`.../?g=כתובת-הגלריה`)
- `admin.html`: ממשק הניהול שלך
- `config.js`: כאן מדביקים את כתובת ה־Web app מ־Google Apps Script

הקוד של צד השרת (`Code.gs`) לא נמצא כאן. הוא יושב ב־Google Apps Script, בחשבון הגוגל שלך.

## עדכון קוד השרת
אחרי כל שינוי ב־`Code.gs`: **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**.
ככה הכתובת נשארת אותה כתובת, ולא צריך לשנות את `config.js`.
