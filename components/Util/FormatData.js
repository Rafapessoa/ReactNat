export default class FormatData{

    static FormatData(date){
        var fdate = date.split('-');
        return `${fdate[2]}/${fdate[1]}/${fdate[0]}`;
    }
}