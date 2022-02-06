// 첫 풀이
function solution(s) {
    let arr = s.split(' ');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== ' '){
            for(let j = 0; j < arr[i].length; j++){
                if(arr[i][j] === ' ') continue;
                arr[i] = arr[i][j].toUpperCase() + arr[i].substring(j + 1).toLowerCase();
                break;
            }
        }
    }
    return arr.join(' ');
}

// 리팩토링 풀이
function solution(s) {
    return s.split(' ').map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(' ');
}