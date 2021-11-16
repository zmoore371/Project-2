module.exports = {
    format_date: date => {
        const currentDate = new Date(date)
        const formattedDate = currentDate.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })
        return formattedDate;
    }

}