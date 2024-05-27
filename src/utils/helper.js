export function formatDate(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
}

export function getDayFormat(str) {
    const weekday = [
        "Chủ Nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7",
    ];
    let d = new Date(str);
    const day = d.getDay();
    const date = str?.split("-").reverse().join("-");
    const formatDate = `${weekday[day]} - ${date}`;
    return formatDate;
}
