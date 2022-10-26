import { DateTime, MonthNumbers } from "luxon";
import { useEffect, useState } from "react";
import { useEventStore } from "../../state";
import { Calendar } from "./Calendar";

const months = Array(12)
    .fill(0)
    .map((_, index) =>
        DateTime.fromObject({ month: index + 1 }, { locale: "ru" })
    );

const years = Array(10)
    .fill(0)
    .map((_, index) =>
        DateTime.fromObject({ year: 2020 + index }, { locale: "ru" })
    );

export function CalendarWithControls() {
    const [month, setMonth] = useState<number | undefined>();
    const [year, setYear] = useState<number | undefined>();
    const clearEvents = useEventStore(state => state.clearEvents)
    useEffect(() => {
        const now = DateTime.now();
        setMonth(now.month);
        setYear(now.year);
    }, []);
    useEffect(() => {
        clearEvents()
    }, [year, month, clearEvents])
    return (
        <div className="w-full flex flex-col items-center">
            <div className="space-x-2 mb-4">
                <select
                    name="choice"
                    className="p-2 rounded-lg bg-white shadow-md"
                    onChange={(e) => {
                        setMonth(+e.target.value as MonthNumbers);
                    }}
                    value={month}
                >
                    {months.map((date) => (
                        <option
                            key={date.month}
                            value={date.month}
                        >
                            {date.monthLong}
                        </option>
                    ))}
                </select>
                <select
                    name="choice"
                    className="p-2 rounded-lg bg-white shadow-md"
                    onChange={(e) => {
                        setYear(+e.target.value as MonthNumbers);
                    }}
                    value={year}
                >
                    {years.map((date) => (
                        <option
                            key={date.year}
                            value={date.year}
                        >
                            {date.year}
                        </option>
                    ))}
                </select>
            </div>
            {month && year && <Calendar year={year} month={month} />}
        </div>
    );
}
