# The 4 Season Studio

## GitHub

- ارفع كل ملفات المشروع من الجذر (`package.json`, `package-lock.json`, `tsconfig.json`, `vite.config.ts`, `src/`, إلخ).
- لا ترفع مجلد `node_modules/` أبداً. هذا الملف موجود في `.gitignore`.
- يمكنك اختيار لغة `Node` عندما تنشئ الريبو.

## Netlify

- اربط الريبو من GitHub إلى Netlify.
- استخدم الأمر التالي للبناء:
  - `npm run build`
- مجلد النشر (publish directory): `dist`
- ملف `netlify.toml` مُضاف لذلك.
- إذا كنت تستخدم روابط داخلية مع React Router أو TanStack Router، فإن `netlify.toml` يحتوي على إعادة توجيه إلى `index.html`.

## التشغيل المحلي

1. `npm install`
2. `npm run dev`
3. افتح المتصفح على العنوان الذي يعطيه Vite.

## ملاحظات

- لا ترفع `node_modules/` على GitHub.
- `package-lock.json` مفيد حتى يستخدم Netlify `npm install` بدلاً من محاولة استخدام `bun`.
- إذا أردت، يمكنك حذف `bun.lockb` من الريبو ولكن ليس ضروريًا إذا كنت تستخدم npm.
