

const isPalindrome = (text) => {

    if (text.length <= 0) return true;

    if (text[0] === text[text.length - 1]) {
        return isPalindrome(text.slice(1, -1))
    }else{
        return false;
    }
}

console.log(isPalindrome('aaaaaaaaa'));