import { typewrite, typeClear } from '../utils/typewriter.js';

const TYPING_INTERVAL = 70;
const TITLE_SELECTOR = '#title';
const CURSOR_START = 5;

export default function IntroMenssage(){
    let data=[
        ["F","u","l","l"," ","s","t","a","c","k"," ","D","e","v","e","l","o","p","e","r"],
        ["F","r","o","n","t","e","n","d"," ","W","e","b"," ","D","e","v","e","l","o","p","e","r"],
        ["B","a","c","k","e","n","d"," ","D","e","v","e","l","o","p","e","r"],
        ["S","o","f","t","w","a","r","e"," ","E","n","g","i","n","e","e","r"]
    ];
    let currentIndex = 0;
    
    function cycleWords() {
        let total = data[currentIndex].length;
        
        typeClear(TITLE_SELECTOR, CURSOR_START, total, TYPING_INTERVAL);
        
        setTimeout(() => {
            typewrite(TITLE_SELECTOR, data[currentIndex], CURSOR_START, TYPING_INTERVAL);
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % data.length;
                cycleWords();
            }, total * TYPING_INTERVAL + 1000);
        }, total * TYPING_INTERVAL);
    }
    
    cycleWords();
}
