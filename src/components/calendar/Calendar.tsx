import { DateTime } from "luxon";
import { Paper } from "../Paper";
import clsx from "clsx";
import { useAsync } from "react-use";
import { EventService } from "../../client/services/EventService";
import { EventRead } from "../../client/models/EventRead";
import { useEventStore } from "../../state";
import { useEffect, useState } from "react";

interface Props {
    year: number;
    month: number;
}

export function Calendar({ year, month }: Props) {
    const firstDate = DateTime.fromObject({ year, month, day: 1 });
    const setEvents = useEventStore(state => state.setEvents)
    const [chosenDay, setChosenDay] = useState<number>(0)
    useEffect(() => {
        setChosenDay(0)
    }, [year, month])
    const totalDays = firstDate.daysInMonth;
    const days = Array(totalDays)
        .fill(null)
        .map((_, index) => {
            return firstDate.plus({ days: index });
        });
    const loadEvents = useAsync(async () => {
        const events = await EventService.getEventsEventGet(
            firstDate.toISO(),
            firstDate.plus({ month: 1 }).toISO()
        );
        const eventsMap = events.reduce((acc, event) => {
            const date = DateTime.fromISO(event.start_date);
            const eventList = acc.get(date.day) || [];
            eventList.push(event);
            acc.set(date.day, eventList);
            return acc;
        }, new Map<number, EventRead[]>());
        return { events, eventsMap };
    }, [year, month]);
    const { eventsMap = new Map<number, EventRead[]>() } = loadEvents.value ?? {};
    return (
        <div className="w-full max-w-3xl">
            <div className="grid grid-cols-7 gap-2">
                {Array(firstDate.weekday - 1)
                    .fill(null)
                    .map((_, index) => (
                        <div key={index} />
                    ))}
                {days.map((day) => (
                    <Paper
                        key={day.toUnixInteger()}
                        onClick={() => {
                            const events = eventsMap.get(day.day)
                            if (!events) {
                                return
                            }
                            setChosenDay(day.day)
                            setEvents(events)
                        }}
                        className={clsx(
                            day.weekday > 5 && "text-red-400",
                            day.day === chosenDay && "bg-blue-200",
                            eventsMap.has(day.day) &&
                                "outline outline-2 outline-blue-300 cursor-pointer"
                        )}
                    >
                        {day.day} {eventsMap.get(day.day)?.map(event => event.icon).slice(0, 3)}
                    </Paper>
                ))}
            </div>
        </div>
    );
}
