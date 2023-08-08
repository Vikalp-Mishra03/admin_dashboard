const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');

let currentDate = new Date();

function updateCalendar() {
    const today = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayIndex = firstDayOfMonth.getDay();

    monthYear.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    let day = 1;
    calendarBody.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');

            if ((i === 0 && j < firstDayIndex) || day > daysInMonth) {
                cell.textContent = '';
            } else {
                cell.textContent = day;
                if (
                    currentDate.getFullYear() === today.getFullYear() &&
                    currentDate.getMonth() === today.getMonth() &&
                    day === today.getDate()
                ) {
                    cell.classList.add('today');
                }
                day++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    }
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();
