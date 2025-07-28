declare global {
    interface Window {
        dataLayer: Record<string, any>[];
        gtag: Gtag.Gtag;
    }
}

type EventType = {
    action: Gtag.EventNames | (string & {});
} & (Gtag.ControlParams | Gtag.EventParams | Gtag.CustomParams);

export const event = ({ action, ...eventParams }: EventType) => {
    if (!window.gtag) return;

    window.gtag("event", action, eventParams);
};

export const pageview = (url?: string) => {
    event({
        action: "page_view",
        page_path: url ?? window.location.pathname
    });
};

export const EVENTS = {
    gotToWaitlistRegister: ({ position }: { position: string }) =>
        event({
            action: "go_to_waitlist_register",
            event_category: "click",
            position
        }),
    waitlistRegister: ({
        email,
    }: {
        email: string;
    }) =>
        event({
            action: "waitlist_register",
            event_category: "click",
            email
        }),
};