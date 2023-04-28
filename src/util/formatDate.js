function formatDate(dateString) {
    if (dateString === 'Departure' || dateString === 'Return') {
        return dateString
    }
    const dateParts = dateString.split(' ');
    const date = dateParts[0].split('.');
    const time = dateParts[1];
    const day = date[0].toString().padStart(2, '0');
    const monthIndex = parseInt(date[1]) - 1;
    const year = date[2].substr(-2);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[monthIndex];
    return `${day} ${monthName} ${year}`;
}

export {
    formatDate
}