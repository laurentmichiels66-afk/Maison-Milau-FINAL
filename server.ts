import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory persistent state for production demo
const state = {
  orders: [
    {
      id: "ORD-2026-1042",
      customerName: "Laurent Michiels",
      accountType: "b2c",
      createdAt: "2026-09-01T10:15:00Z",
      items: [
        { name: "Milau Selection Daily", weight: "1000g", grind: "Volle bonen", quantity: 2, pricePerUnit: 21.50 }
      ],
      totalAmount: 43.00,
      vatAmount: 2.43,
      paymentMethod: "POM Bancontact",
      paymentStatus: "Payment Successful",
      trackingCode: "bpost-3232-9840-0284",
      shippingStatus: "Verzonden",
      invoiceNumber: "INV-2026-089",
      pomTransactionId: "POM_TX_9841276"
    }
  ],
  quotes: [] as any[],
  appointments: [] as any[],
  supportTickets: [] as any[],
  subscriptions: [
    {
      id: "SUB-8812",
      customerName: "Laurent Michiels",
      planName: "Milau Selection Daily - Vast Maandelijks",
      frequency: "Elke 4 weken",
      weight: "1000g",
      grind: "Volle bonen",
      amount: 19.35, // 10% korting
      status: "Actief",
      nextDelivery: "2026-09-18",
      paymentMethod: "POM Terugkerende domiciliëring"
    }
  ],
  b2bAccounts: [
    {
      companyName: "Koffiebar De Reus Oudegem",
      vatNumber: "BE 0842.193.844",
      contactPerson: "Marc Verbeeck",
      email: "marc@dereuskoffie.be",
      phone: "+32 470 12 34 56",
      contractDiscount: "15%",
      monthlyVolumeKg: 25,
      openInvoices: [
        { invoiceNumber: "INV-2026-B2B-014", date: "2026-08-15", dueDate: "2026-09-15", amount: 485.00, status: "Open", pomPaymentUrl: "https://app.pom.be/pay/INV-2026-B2B-014" }
      ]
    }
  ]
};

// API: Config & Environment variables
app.get("/api/config", (req, res) => {
  const config = {
    SITE_URL: process.env.SITE_URL || "https://maisonmilau.be",
    LOGIN_URL: process.env.LOGIN_URL || "/account/login",
    REGISTER_URL: process.env.REGISTER_URL || "/account/register",
    API_BASE_URL: process.env.API_BASE_URL || "/api",
    SUPPORT_EMAIL: process.env.SUPPORT_EMAIL || "hello@maisonmilau.be",
    SMTP_SERVER: process.env.SMTP_SERVER || "smtp.maisonmilau.be",
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET ? "[CONFIGURED]" : "",
    POM_MERCHANT_ID: process.env.POM_MERCHANT_ID || "POM_MID_MAISON_MILAU_001",
    POM_API_KEY: process.env.POM_API_KEY ? "[CONFIGURED]" : "",
    POM_WEBHOOK_SECRET: process.env.POM_WEBHOOK_SECRET ? "[CONFIGURED]" : "",
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || "",
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || "",
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "",
    ACCOUNTABLE_API_KEY: process.env.ACCOUNTABLE_API_KEY ? "[CONFIGURED]" : "",
    TODO_ITEMS: [
      { key: "GOOGLE_CLIENT_ID", description: "Configure Google OAuth Client ID in settings for Google Sign-In" },
      { key: "POM_API_KEY", description: "Configure production POM Merchant API Key for live settlement" },
      { key: "ACCOUNTABLE_API_KEY", description: "Configure Accountable ERP API Key for direct sync with accounting software" }
    ]
  };
  res.json(config);
});

// API: Sitemap (Step 1)
app.get("/api/sitemap", (req, res) => {
  res.json({
    sitemap: [
      { path: "/", title: "Home", category: "General", priority: 1.0, description: "Ambachtelijke Koffiebranderij · Oudegem (Dendermonde)" },
      { path: "/koffies", title: "Onze Koffies (Catalogus & PIS)", category: "Catalog", priority: 0.9, description: "Educatieve catalogus met smaakprofielen, SCA-scores en herkomst" },
      { path: "/webshop", title: "Webshop", category: "Commerce", priority: 0.9, description: "Snel bestellen van bonen, giftboxen, toebehoren en abonnementen" },
      { path: "/kantoor-horeca", title: "Kantoor en Horeca (B2B)", category: "B2B", priority: 0.8, description: "B2B oplossingen, volumekortingen, calculators en proefpakket" },
      { path: "/events", title: "Events & Verhuur", category: "Events", priority: 0.8, description: "Koffiecatering & machines voor feesten en recepties" },
      { path: "/afspraakplanner", title: "Afspraakplanner", category: "Services", priority: 0.7, description: "Boek cuppingsessie, atelierbezoek of white label consultatie" },
      { path: "/faq", title: "Klantenservice & FAQ", category: "Support", priority: 0.7, description: "Veelgestelde vragen, track & trace en retouren" },
      { path: "/over-ons", title: "Over Ons", category: "Company", priority: 0.8, description: "Branderij, ambacht, ons verhaal, markten en contact" },
      { path: "/account", title: "Mijn Account (B2C / B2B)", category: "Portal", priority: 0.6, description: "Klantendashboard, bestellingen, facturen en abonnementen" },
      { path: "/checkout", title: "Afrekenen & POM Betaling", category: "Commerce", priority: 0.5, description: "Beveiligde betaling via POM (Bancontact, iDEAL, Payconiq, Kaarten)" },
      { path: "/admin", title: "Webbeheerder Analyse (Privé)", category: "Administration", priority: 0.1, description: "Omzetrapporten, verkoopdashboard en POM analytics" }
    ]
  });
});

// API: Routes (Step 2)
app.get("/api/routes", (req, res) => {
  res.json({
    routes: [
      { route: "/", component: "HomeView", authRequired: false, canonical: "https://maisonmilau.be/" },
      { route: "/koffies", component: "CatalogView", authRequired: false, canonical: "https://maisonmilau.be/koffies" },
      { route: "/webshop", component: "WebshopView", authRequired: false, canonical: "https://maisonmilau.be/webshop" },
      { route: "/kantoor-horeca", component: "B2BView", authRequired: false, canonical: "https://maisonmilau.be/kantoor-horeca" },
      { route: "/events", component: "EventsView", authRequired: false, canonical: "https://maisonmilau.be/events" },
      { route: "/afspraakplanner", component: "AppointmentView", authRequired: false, canonical: "https://maisonmilau.be/afspraakplanner" },
      { route: "/faq", component: "FaqView", authRequired: false, canonical: "https://maisonmilau.be/faq" },
      { route: "/over-ons", component: "AboutView", authRequired: false, canonical: "https://maisonmilau.be/over-ons" },
      { route: "/account", component: "AccountView", authRequired: false, canonical: "https://maisonmilau.be/account" },
      { route: "/checkout", component: "CheckoutView", authRequired: false, canonical: "https://maisonmilau.be/checkout" },
      { route: "/admin", component: "AdminView", authRequired: true, role: "admin", canonical: "https://maisonmilau.be/admin" }
    ]
  });
});

// API: Database Entities (Step 3)
app.get("/api/database/entities", (req, res) => {
  res.json({
    entities: [
      {
        name: "User",
        table: "users",
        attributes: ["id", "email", "name", "phone", "accountType (B2C | B2B)", "companyId", "createdAt", "updatedAt"]
      },
      {
        name: "Company",
        table: "companies",
        attributes: ["id", "legalName", "vatNumber", "billingAddress", "shippingAddresses", "paymentTermsDays", "contractDiscountPercentage", "approved"]
      },
      {
        name: "Product",
        table: "products",
        attributes: ["id", "sku", "category", "subCategory", "name", "scaScore", "basePrice", "stockQuantity", "roastBatchDate"]
      },
      {
        name: "Order",
        table: "orders",
        attributes: ["id", "userId", "totalAmount", "vatAmount", "shippingStatus", "paymentStatus", "pomTransactionId", "invoiceId", "trackingNumber"]
      },
      {
        name: "Invoice",
        table: "invoices",
        attributes: ["id", "invoiceNumber", "orderId", "vatAmount", "totalAmount", "status (Open|Paid|Overdue)", "pdfUrl", "pomPaymentUrl", "pomQrCode"]
      },
      {
        name: "Subscription",
        table: "subscriptions",
        attributes: ["id", "userId", "productId", "frequency", "grind", "weight", "monthlyPrice", "status (Actief|Gepauzeerd|Geannuleerd)", "nextBillingDate"]
      },
      {
        name: "QuoteRequest",
        table: "quote_requests",
        attributes: ["id", "companyName", "contactPerson", "email", "phone", "businessType", "estimatedVolumeKg", "needsMachine", "notes", "status"]
      },
      {
        name: "Appointment",
        table: "appointments",
        attributes: ["id", "type (Cupping | Tasting | WhiteLabel | AtelierBezoek)", "date", "time", "contactName", "email", "phone", "notes", "confirmed"]
      },
      {
        name: "SupportTicket",
        table: "support_tickets",
        attributes: ["id", "ticketNumber", "category", "subject", "message", "status", "priority", "createdAt"]
      }
    ]
  });
});

// API: Navigation Menus (Step 4)
app.get("/api/menus", (req, res) => {
  res.json({
    mainMenu: [
      { title: "Home", path: "/" },
      { title: "Onze Koffies", path: "/koffies" },
      {
        title: "Webshop",
        path: "/webshop",
        subcategories: [
          { title: "Milau Houseblends", path: "/webshop?cat=houseblends" },
          { title: "Barrel Aged Coffees", path: "/webshop?cat=barrel-aged" },
          { title: "Infused Coffees", path: "/webshop?cat=infused" },
          { title: "Single Origin Coffees", path: "/webshop?cat=single-origin" },
          { title: "Giftboxen & Proefpakketten", path: "/webshop?cat=giftboxen" },
          { title: "Toebehoren & Merchandise", path: "/webshop?cat=toebehoren" },
          { title: "Abonnementen", path: "/webshop?cat=abonnementen" },
          { title: "Promoties", path: "/webshop?cat=promoties" }
        ]
      },
      { title: "Kantoor en Horeca", path: "/kantoor-horeca" },
      { title: "Events", path: "/events" },
      { title: "Afspraakplanner", path: "/afspraakplanner" },
      { title: "FAQ", path: "/faq" },
      { title: "Over ons", path: "/over-ons" },
      { title: "My Account", path: "/account" }
    ],
    footerMenu: [
      { title: "Mijn Account", path: "/account" },
      { title: "Webshop", path: "/webshop" },
      { title: "Kantoor & Horeca", path: "/kantoor-horeca" },
      { title: "Event Planner", path: "/events" },
      { title: "FAQ", path: "/faq" },
      { title: "Over Ons", path: "/over-ons" },
      { title: "Afspraakplanner", path: "/afspraakplanner" }
    ]
  });
});

// API: Checkout & Orders
app.get("/api/orders", (req, res) => {
  res.json({ orders: state.orders });
});

app.post("/api/orders", (req, res) => {
  const { customerName, email, phone, address, items, totalAmount, paymentMethod, accountType } = req.body;
  if (!customerName || !items || !items.length) {
    return res.status(400).json({ error: "Validation failed: customerName and items are required" });
  }

  const newOrder = {
    id: `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName,
    email,
    phone,
    address,
    accountType: accountType || "b2c",
    createdAt: new Date().toISOString(),
    items,
    totalAmount,
    vatAmount: +(totalAmount * 0.06).toFixed(2),
    paymentMethod: paymentMethod || "POM Bancontact",
    paymentStatus: "Payment Authorized",
    trackingCode: `bpost-3232-${Math.floor(1000 + Math.random() * 9000)}-BE`,
    shippingStatus: "In voorbereiding (vers gebrand binnen 1-2 weken)",
    invoiceNumber: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
    pomTransactionId: `POM_TX_${Date.now()}`
  };

  state.orders.unshift(newOrder);
  res.json({ success: true, order: newOrder });
});

// API: POM Payment Provider integration
app.post("/api/pom/pay", (req, res) => {
  const { orderId, amount, paymentMethod, returnUrl } = req.body;
  if (!orderId || !amount) {
    return res.status(400).json({ error: "Order ID and amount are required for POM payment initiation" });
  }

  const transactionId = `POM_TX_${Date.now()}`;
  const pomPaymentUrl = `https://app.pom.be/pay/tx_${transactionId}?amount=${amount}&ref=${orderId}`;
  const pomQrCodeData = `BCD\n002\n1\nSCT\nMAISBE22\nMaison Milau BV\nBE29732049102934\nEUR${amount}\n\n\n${orderId}`;

  res.json({
    success: true,
    transactionId,
    orderId,
    amount,
    paymentMethod: paymentMethod || "Bancontact",
    status: "Pending Payment",
    pomPaymentUrl,
    pomQrCodeData,
    supportedMethods: ["Bancontact", "iDEAL", "Visa", "Mastercard", "Apple Pay", "Wero", "Cartes Bancaires"],
    webhookConfigured: Boolean(process.env.POM_WEBHOOK_SECRET)
  });
});

// API: POM Webhook
app.post("/api/pom/webhook", (req, res) => {
  const { transactionId, status, orderId } = req.body;
  const order = state.orders.find(o => o.id === orderId || o.pomTransactionId === transactionId);
  if (order) {
    order.paymentStatus = status === "SUCCESS" ? "Payment Successful" : "Payment Failed";
  }
  res.json({ received: true });
});

// API: Subscriptions
app.get("/api/subscriptions", (req, res) => {
  res.json({ subscriptions: state.subscriptions });
});

app.post("/api/subscriptions", (req, res) => {
  const { customerName, planName, frequency, weight, grind, amount } = req.body;
  const newSub = {
    id: `SUB-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName: customerName || "Klant",
    planName,
    frequency,
    weight,
    grind,
    amount,
    status: "Actief",
    nextDelivery: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    paymentMethod: "POM Terugkerende domiciliëring"
  };
  state.subscriptions.unshift(newSub);
  res.json({ success: true, subscription: newSub });
});

app.patch("/api/subscriptions/:id", (req, res) => {
  const { id } = req.params;
  const { action, frequency } = req.body; // 'pause', 'resume', 'cancel', 'update'
  const sub = state.subscriptions.find(s => s.id === id);
  if (!sub) {
    return res.status(404).json({ error: "Subscription not found" });
  }

  if (action === "pause") sub.status = "Gepauzeerd";
  if (action === "resume") sub.status = "Actief";
  if (action === "cancel") sub.status = "Geannuleerd";
  if (frequency) sub.frequency = frequency;

  res.json({ success: true, subscription: sub });
});

// API: B2B Quote Request
app.post("/api/b2b/quote", (req, res) => {
  const { companyName, vatNumber, contactPerson, email, phone, businessType, machineNeed, notes, monthlyVolumeKg } = req.body;
  
  if (!companyName || !contactPerson || !email || !phone) {
    return res.status(400).json({ error: "Validation error: companyName, contactPerson, email and phone are mandatory." });
  }

  const quote = {
    id: `QUOTE-${Date.now()}`,
    companyName,
    vatNumber: vatNumber || "Niet opgegeven",
    contactPerson,
    email,
    phone,
    businessType,
    machineNeed,
    notes,
    monthlyVolumeKg: monthlyVolumeKg || "Indicatief",
    status: "In behandeling",
    createdAt: new Date().toISOString()
  };

  state.quotes.unshift(quote);
  res.json({ success: true, message: "Uw B2B offerteaanvraag werd succesvol ontvangen. Wij bezorgen u binnen 24u een voorstel op maat.", quote });
});

// API: Event Request
app.post("/api/events/quote", (req, res) => {
  const { name, email, phone, eventType, date, guestsCount, needsBarista, needsMachine, notes } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Validation error: Naam, e-mail en telefoon zijn verplicht." });
  }

  const eventRequest = {
    id: `EVT-${Date.now()}`,
    name,
    email,
    phone,
    eventType,
    date,
    guestsCount,
    needsBarista,
    needsMachine,
    notes,
    status: "Ontvangen",
    createdAt: new Date().toISOString()
  };

  res.json({ success: true, message: "Aanvraag voor evenement koffiecatering succesvol ontvangen.", eventRequest });
});

// API: Appointment Booking
app.post("/api/appointments", (req, res) => {
  const { name, email, phone, type, date, time, notes } = req.body;
  if (!name || !email || !phone || !date) {
    return res.status(400).json({ error: "Validation error: Naam, e-mail, telefoon en datum zijn verplicht." });
  }

  const appt = {
    id: `APT-${Date.now()}`,
    name,
    email,
    phone,
    type: type || "Cuppingsessie & Proeverij Atelier",
    date,
    time: time || "10:00",
    notes,
    status: "Bevestigd op afspraak",
    location: "Roastery Atelier: Jef Scheirsstraat 29, 9200 Oudegem",
    createdAt: new Date().toISOString()
  };

  state.appointments.unshift(appt);
  res.json({ success: true, message: "Uw afspraak in ons branderij-atelier in Oudegem werd succesvol geboekt.", appointment: appt });
});

// API: Support Ticket & Returns
app.post("/api/support/ticket", (req, res) => {
  const { name, email, orderNumber, category, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Validation error: Naam, e-mail en bericht zijn verplicht." });
  }

  const ticket = {
    id: `TCK-${Math.floor(1000 + Math.random() * 9000)}`,
    name,
    email,
    orderNumber: orderNumber || "N.v.t.",
    category: category || "Algemene vraag",
    subject: subject || "Klantenservice contact",
    message,
    status: "In behandeling",
    createdAt: new Date().toISOString()
  };

  state.supportTickets.unshift(ticket);
  res.json({ success: true, message: "Uw ticket werd geregistreerd. Ons team reageert binnen 1 werkdag.", ticket });
});

// API: Admin Reports (webbeheerder alleen)
app.get("/api/admin/reports", (req, res) => {
  res.json({
    metrics: {
      totalRevenue: 48950.00,
      monthlyRecurringRevenue: 5420.00,
      activeSubscribers: 184,
      totalOrders: 1120,
      pomConversionRate: 98.4,
      averageOrderValue: 43.70,
      failedPayments: 1,
      refundsProcessed: 0
    },
    pomSettlementStatus: {
      provider: "POM Payment",
      methods: {
        bancontact: "94.2% aandeel",
        ideal: "3.1% aandeel",
        creditCard: "2.7% aandeel"
      },
      pciCompliant: true,
      lastPayoutDate: "2026-09-01"
    }
  });
});

// Start server with Vite middleware in development or static in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Maison Milau server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
