// import the format_date to reconfigure the displayed date
const {format_date} = require('../utils/helpers');

module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    }
}