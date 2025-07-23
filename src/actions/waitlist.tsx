import { RESEND_API_KEY, RESEND_AUDIENCE_ID } from 'astro:env/server';

import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';

import { Resend } from 'resend';

import WelcomeWaitlist from "@/emails/welcome/waitlist";


const resend = new Resend(RESEND_API_KEY);
const audienceId = RESEND_AUDIENCE_ID!;

export const waitlist = {
    count: defineAction({
        handler: async () => {
            const {data, error} = await resend.contacts.list({audienceId})

            if(error) {
                console.log("Count error", error)
                return 0;
            }

            return data.data.length;
        }
    }),
    register: defineAction({
        input: z.string().email(),
        handler: async (email) => {
            try {
                const { error: addContactError } = await resend.contacts.create({
                    audienceId,
                    email,
                    unsubscribed: false
                });

                if (addContactError) {
                    console.error("Create Contact Resend API error:", addContactError);

                    throw new ActionError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: "Failed to add to waitlist",
                    });
                }

                const { error: sendEmailError } = await resend.emails.send({
                    from: 'Descompilando <contato@descompilado.dev>',
                    to: [email],
                    subject: 'Bem Vindo ao Descompilando!',
                    react: <WelcomeWaitlist />,
                });

                if (sendEmailError) {
                    console.error("Send Email Resend API error:", sendEmailError);
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
