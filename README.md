test

npm uninstall tailwindcss
npm install -D tailwindcss@3.4.3 postcss autoprefixer
npx tailwindcss init -p



npm create vite@latest 03tailwindprops
cd 03tailwindprops
npm install


@tailwind base;
@tailwind components;
@tailwind utilities;

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],