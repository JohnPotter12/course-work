function getCurrentTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    console.log(`${date}`);
    return `${hours}:${minutes} ${day}-${month}-${year}`;
}

module.exports = getCurrentTime;