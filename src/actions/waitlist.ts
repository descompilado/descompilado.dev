import { RESEND_API_KEY, RESEND_AUDIENCE_ID} from 'astro:env/server';

import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';

import { Resend } from 'resend';


const resend = new Resend(RESEND_API_KEY);
const audienceId = RESEND_AUDIENCE_ID!;

export const waitlist = {
    register: defineAction({
        input: z.string().email(),
        handler: async (email) => {
            try {
                const { error } = await resend.contacts.create({
                    audienceId,
                    email,
                    unsubscribed: false
                });

                if (error) {
                    console.error("Resend API error:", error);

                    throw new ActionError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: "Failed to add to waitlist",
                    });
                }
            } catch (error) {
                console.error("API error:", error);

                throw new ActionError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Internal server error",
                });
            }
        }
    })
};
