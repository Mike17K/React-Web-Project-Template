## Naming

- All folders are lowercase, except the folders that contain a component or a page, in this case we use Camelcase
- All Components jsx are Camel Case
- All pages have names with the final word is 'Page' ex: ExamplePage
- All servicies in the src/servicies folder have snake_case naming.
- All constants in the src/constants folder have snake_case naming.
- All utils files have camel case naming and .js extensions.

## Translations

- All translations goes into 'src/translations/**ExampleLang2Letter**/global.json'
- In the global.json we place all text for each page into their name object ex: global.json: { "HomePage": { "NavBar":{ "ExampleTextName":"ExampleText1"}, ... }, ... }

## Reusable Components

All reusable components goes into the 'src/components/' folder, within their folder in camel case with their .css and .jsx and components/ folder inside.

## Pages Structure

All pages are in the 'src/pages' folder with their own folder same as the page main component
if there are sub components only used in the current page their code goes into the '/src/pages/ExamplePage/components/' folder with their own folderName same as the component name
example: NewPage => src/pages/NewPage/NewPage.jsx

## CSS

All css files are going in the same folder as their component, and have the same name but with .css extension
All css colors are being handled in /tailwind.config.js ex: 'primary-red' to use u add to className of the element for example for the backgroud: bg-primary-red

## Static Content

All static content goes into public folder in their sutable folder ex: icons/icon1.png

## Servicies

All servicies like translations goes into '/src/services/' folder

## Popups

Every popup have the className: 'popup'
