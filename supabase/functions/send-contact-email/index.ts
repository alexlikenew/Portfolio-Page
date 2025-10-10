import {serve} from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = 're_aWtqoqCJ_JmDav6dThrasNMB2SeKPgDMm';


// Domena produkcyjna
const PRODUCTION_ORIGIN = "https://twoja-domena.pl";

serve(async (req: Request) => {
    const headers = {
        "Access-Control-Allow-Origin": PRODUCTION_ORIGIN,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    // Preflight
    if (req.method === "OPTIONS") {
        return new Response(null, {status: 204, headers});
    }

    try {
        if (!RESEND_API_KEY) {
            return new Response(JSON.stringify({error: "Missing RESEND_API_KEY"}), {
                status: 500,
                headers,
            });
        }

        const body = await req.json().catch(() => null);
        if (!body) {
            return new Response(JSON.stringify({error: "Invalid JSON body"}), {
                status: 400,
                headers,
            });
        }

        const {firstName, lastName, email, message} = body;
        if (!email || !message) {
            return new Response(JSON.stringify({error: "Email and message are required"}), {
                status: 400,
                headers,
            });
        }

        // Wyślij mail przez Resend
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "no-reply@yourdomain.com",
                to: ["you@your-email.com"], // Twój email
                subject: `New contact from ${firstName ?? "Visitor"}`,
                html: `<p><strong>From:</strong> ${firstName ?? ""} ${lastName ?? ""} &lt;${email}&gt;</p>
               <p><strong>Message:</strong></p>
               <div>${String(message).replace(/\n/g, "<br/>")}</div>`,
            }),
        });

        const result = await res.json().catch(() => null);

        return new Response(JSON.stringify({ok: true, result}), {
            status: 200,
            headers,
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({error: "Internal server error"}), {
            status: 500,
            headers,
        });
    }
});

