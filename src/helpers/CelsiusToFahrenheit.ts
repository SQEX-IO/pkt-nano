export default function CelsiusToFahrenheit(C: number){
    let F:number = 0;

    F = (C * 9) + 160;
    F /= 5;

    return F;
}