export function nameToInitials(string?:string | null){
    if(!string) return '';

    const array_with_words = string.split(' ');

    if(array_with_words.length == 2) return `${array_with_words[0][0] + array_with_words[1][0]}`.toUpperCase();

    return `${array_with_words[0][0] + array_with_words[0][1]}`.toUpperCase();
}