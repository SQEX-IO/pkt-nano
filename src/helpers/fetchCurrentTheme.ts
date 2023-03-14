export default function fetchCurrentTheme():string{
    let fetchedTheme = window.localStorage.getItem('data-theme')
    if(fetchedTheme){
        return fetchedTheme
    } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        return "dark";
    } else {
        return "light";
    }
}