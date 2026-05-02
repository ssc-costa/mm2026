import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed"
    });
  }

  try {
    const {
      name,
      email,
      phone,
      move_date,
      pickup,
      delivery,
      property_type,
      storage,
      services,
      message,
      _gotcha
    } = req.body || {};

    // Honeypot spam trap
    if (_gotcha) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !email) {
      return res.status(400).json({
        ok: false,
        error: "Name and email are required."
      });
    }

    const serviceList = Array.isArray(services)
      ? services.join(", ")
      : services || "Not specified";

    const html = `
      <h2>New Mr Move quote request</h2>

      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone || "Not provided")}</p>
      <p><strong>Preferred move date:</strong> ${escapeHtml(move_date || "Not provided")}</p>

      <hr />

      <p><strong>Moving from:</strong> ${escapeHtml(pickup || "Not provided")}</p>
      <p><strong>Moving to:</strong> ${escapeHtml(delivery || "Not provided")}</p>
      <p><strong>Property type:</strong> ${escapeHtml(property_type || "Not specified")}</p>
      <p><strong>Storage:</strong> ${escapeHtml(storage || "Not specified")}</p>
      <p><strong>Services:</strong> ${escapeHtml(serviceList)}</p>

      <hr />

      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message || "No message provided").replaceAll("\n", "<br>")}</p>
    `;

    const text = `
New Mr Move quote request

Name: ${name}
Email: ${email}
Phone / WhatsApp: ${phone || "Not provided"}
Preferred move date: ${move_date || "Not provided"}

Moving from: ${pickup || "Not provided"}
Moving to: ${delivery || "Not provided"}
Property type: ${property_type || "Not specified"}
Storage: ${storage || "Not specified"}
Services: ${serviceList}

Message:
${message || "No message provided"}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: "Mr Move Website <onboarding@resend.dev>",
      to: ["info@mrmove.es"],
      replyTo: email,
      subject: `New Mr Move quote request from ${name}`,
      html,
      text
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        ok: false,
        error: "Email failed to send."
      });
    }

    return res.status(200).json({
      ok: true,
      id: data?.id
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      ok: false,
      error: "Server error. Please call or WhatsApp us directly."
    });
  }
}
