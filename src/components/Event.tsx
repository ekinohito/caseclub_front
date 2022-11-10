import { useBoolean } from "react-use";
import { EventService, PostService } from "../client";
import { EventRead } from "../client/models/EventRead";
import { useAuth } from "../hooks/useAuth";
import { AttachmentImage } from "./AttachmentImage";
import { Button } from "./Button";
import { Paper } from "./Paper";
import { DateTime } from "luxon";
import { AuthOnly } from "./AuthOnly";
import { useEffect } from "react";

interface Props {
    event: EventRead;
}

export function Event({ event }: Props) {
    const [isAttended, setIsAttended] = useBoolean(false);
    useEffect(() => {
        setIsAttended(event.is_attended ?? false)
    }, [setIsAttended, event.is_attended])
    const startDate = DateTime.fromISO(event.start_date, { locale: "ru" });
    const endDate = DateTime.fromISO(event.end_date, { locale: "ru" });
    const sameDate = startDate.day === endDate.day;
    const timeSpan = sameDate
        ? `${startDate.toLocaleString(
              DateTime.DATE_MED
          )} ${startDate.toLocaleString(
              DateTime.TIME_24_SIMPLE
          )}-${endDate.toLocaleString(DateTime.TIME_24_SIMPLE)}`
        : `${startDate.toLocaleString(
              DateTime.DATETIME_SHORT
          )} - ${endDate.toLocaleString(DateTime.DATETIME_SHORT)}`;
    const startDiff = startDate.diffNow().toMillis();
    const endDiff = endDate.diffNow().toMillis();
    const state =
        startDiff > 0
            ? "before_start"
            : endDiff > 0
            ? "in_progress"
            : "after_end";
    return (
        <Paper>
            <p className="text-blue-500">{timeSpan}</p>
            <p className="text-xl font-bold my-4">
                {event.icon} {event.title}
            </p>
            <div className="flex flex-row w-full max-h-80 space-x-2">
                {event.text}
            </div>
            <p className="text-gray-500">
                {
                    {
                        before_start: <>Начало {startDate.toRelative()}</>,
                        in_progress: <>Окончание {endDate.toRelative()}</>,
                        after_end: <>Закончилось {endDate.toRelative()}</>,
                    }[state]
                }
            </p>
            <AuthOnly>
                {state === "before_start" &&
                    (isAttended ? (
                        <Button
                            color="blue"
                            onClick={async () => {
                                await EventService.attendEventEventIdStopAttendPost(
                                    event.id
                                )
                                setIsAttended(false)
                            }}
                        >
                            Отписаться
                        </Button>
                    ) : (
                        <Button
                            color="blue"
                            onClick={async () => {
                                await EventService.attendEventEventIdAttendPost(
                                    event.id
                                )
                                setIsAttended(true)
                            }}
                        >
                            Записаться
                        </Button>
                    ))}
            </AuthOnly>
        </Paper>
    );
}
