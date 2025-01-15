import { useRef, useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

/*
    // Example usage
    const CalendarButton = () => {
        const [calRef] = useCalDotCom(
            '',
            'ThisIsNotJustin/30min',
            { layout: 'month_view' }
        )

        return (
            <button ref={calRef} className="calendar-button">
                Book a Time
            </button>
        )
    }

*/
const useCalDotCom = (namespace: string, link: string, config: object) => {
    const calRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const initCal = async () => {
            const cal = await getCalApi()

            if (cal) {
                cal('ui', {
                    theme: 'dark',
                    styles: { branding: { brandColor: '#000000' } },
                    hideEventTypeDetails: false,
                    layout: 'month_view'
                })
            }
        }

        initCal()
    }, [])

    useEffect(() => {
        if (calRef.current) {
            calRef.current.setAttribute('data-cal-namespace', namespace)
            calRef.current.setAttribute('data-cal-link', link)
            calRef.current.setAttribute('data-cal-config', JSON.stringify(config))
        }
    }, [namespace, link, config, calRef])

    return [calRef]
}

export default useCalDotCom