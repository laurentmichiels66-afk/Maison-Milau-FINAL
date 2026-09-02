import { DatabaseEntity } from '../types';

/**
 * Step 3: Database Entities & Schema Definitions
 * Covers Users, Companies, Products, Variants, Orders, Invoices, Subscriptions, Quotes, Appointments, Support.
 */
export const DATABASE_ENTITIES: DatabaseEntity[] = [
  {
    name: "User",
    table: "users",
    description: "Persoonlijk account voor particuliere (B2C) en professionele (B2B) klanten.",
    attributes: [
      "id (UUID - Primary Key)",
      "email (VARCHAR, Unique, Indexed)",
      "passwordHash (VARCHAR, Bcrypt)",
      "fullName (VARCHAR)",
      "phone (VARCHAR)",
      "accountType (ENUM: 'b2c', 'b2b')",
      "companyId (UUID, Nullable, Foreign Key -> companies.id)",
      "loyaltyPoints (INT, Default 0)",
      "preferredLanguage (ENUM: 'nl', 'en', 'fr')",
      "createdAt (TIMESTAMP)",
      "updatedAt (TIMESTAMP)"
    ]
  },
  {
    name: "Company",
    table: "companies",
    description: "Bedrijfsprofiel voor B2B klanten met btw-validatie en contractvoorwaarden.",
    attributes: [
      "id (UUID - Primary Key)",
      "legalName (VARCHAR)",
      "tradeName (VARCHAR)",
      "vatNumber (VARCHAR, Unique, VIES validated e.g. BE 1041.542.844)",
      "billingAddressLine1 (VARCHAR)",
      "billingPostalCode (VARCHAR)",
      "billingCity (VARCHAR)",
      "billingCountry (VARCHAR, Default 'BE')",
      "paymentTermsDays (INT, Default 30)",
      "contractDiscountTier (VARCHAR, e.g. '15%')",
      "monthlyVolumeTargetKg (DECIMAL)",
      "approved (BOOLEAN, Default false)"
    ]
  },
  {
    name: "Product",
    table: "products",
    description: "Koffies, giftboxen, toebehoren en merchandise met herkomst en brandbatches.",
    attributes: [
      "id (UUID - Primary Key)",
      "sku (VARCHAR, Unique)",
      "slug (VARCHAR, Unique)",
      "category (ENUM: 'houseblends', 'barrel-aged', 'infused', 'single-origin', 'giftboxen', 'toebehoren')",
      "collectionTier (ENUM: 'Milau Selection', 'Milau Premium', 'Milau Prestige', 'Craft Special')",
      "name (VARCHAR)",
      "scaScoreExpected (VARCHAR, e.g. '86 tot 87 punten')",
      "roastCurveBatchId (VARCHAR)",
      "stockKg (DECIMAL)",
      "active (BOOLEAN)"
    ]
  },
  {
    name: "Order",
    table: "orders",
    description: "Volledige verkoop- en orderbeheertransactie met track & trace en btw-splitsing.",
    attributes: [
      "id (UUID - Primary Key)",
      "orderNumber (VARCHAR, Unique, e.g. ORD-2026-1042)",
      "userId (UUID, Foreign Key -> users.id)",
      "accountType (ENUM: 'b2c', 'b2b')",
      "subtotal (DECIMAL)",
      "vatRate (DECIMAL, 6% voor koffie, 21% voor machines/diensten)",
      "vatAmount (DECIMAL)",
      "shippingFee (DECIMAL, Gratis vanaf €45)",
      "totalAmount (DECIMAL)",
      "paymentMethod (ENUM: 'POM Bancontact', 'POM iDEAL', 'POM Visa/MC', 'POM Apple Pay', 'Op Factuur 30d')",
      "paymentStatus (ENUM: 'Pending Payment', 'Payment Authorized', 'Payment Successful', 'Payment Failed', 'Refunded')",
      "shippingStatus (ENUM: 'In voorbereiding', 'Vers gebrand', 'Verzonden bpost', 'Geleverd')",
      "trackingCode (VARCHAR, bpost)",
      "pomTransactionId (VARCHAR)",
      "createdAt (TIMESTAMP)"
    ]
  },
  {
    name: "Invoice",
    table: "invoices",
    description: "Officiële PDF-factuur met POM-betaallink, POM QR-code en Accountable ERP synchronisatie.",
    attributes: [
      "id (UUID - Primary Key)",
      "invoiceNumber (VARCHAR, Unique, e.g. INV-2026-089)",
      "orderId (UUID, Foreign Key -> orders.id)",
      "companyVatNumber (VARCHAR, BE 1041.542.844)",
      "clientVatNumber (VARCHAR, Nullable)",
      "dueDate (DATE)",
      "status (ENUM: 'Open', 'Partially Paid', 'Paid', 'Overdue', 'Cancelled')",
      "pomPaymentLink (VARCHAR)",
      "pomQrCodeData (TEXT)",
      "accountableSyncId (VARCHAR, Nullable)",
      "pdfStorageUrl (VARCHAR)"
    ]
  },
  {
    name: "Subscription",
    table: "subscriptions",
    description: "Periodiek koffie-abonnement met automatische incasso, pauzeren, aanpassen en herinneringen.",
    attributes: [
      "id (UUID - Primary Key)",
      "subscriptionNumber (VARCHAR, e.g. SUB-8812)",
      "userId (UUID, Foreign Key -> users.id)",
      "productId (UUID, Foreign Key -> products.id)",
      "frequency (ENUM: 'Elke 2 weken', 'Elke 4 weken', 'Elke 6 weken')",
      "grindType (ENUM: 'Volle bonen', 'Filter', 'Espresso', 'Moka', 'French Press')",
      "packageWeight (ENUM: '250g', '500g', '1000g', '2000g')",
      "monthlyAmount (DECIMAL, -10% abonnementskorting)",
      "status (ENUM: 'Actief', 'Gepauzeerd', 'Aangepast', 'Geannuleerd')",
      "nextBillingDate (DATE)",
      "nextRoastBatchDate (DATE)",
      "pomMandateId (VARCHAR)"
    ]
  },
  {
    name: "QuoteRequest",
    table: "quote_requests",
    description: "B2B offerte- en proefpakketaanvragen voor Horeca, Kantoren en White Label.",
    attributes: [
      "id (UUID - Primary Key)",
      "companyName (VARCHAR)",
      "vatNumber (VARCHAR)",
      "contactPerson (VARCHAR)",
      "email (VARCHAR)",
      "phone (VARCHAR)",
      "sectorType (VARCHAR)",
      "machineNeed (VARCHAR)",
      "estimatedMonthlyVolumeKg (DECIMAL)",
      "notes (TEXT)",
      "status (ENUM: 'Ontvangen', 'Voorstel verstuurd', 'Goedgekeurd', 'Geweigerd')"
    ]
  },
  {
    name: "Appointment",
    table: "appointments",
    description: "Bezoekatelier & cuppingplanner te Jef Scheirsstraat 29 Oudegem.",
    attributes: [
      "id (UUID - Primary Key)",
      "type (ENUM: 'Cupping & Tasting', 'White Label Ontwikkeling', 'Atelierbezoek & Afhaling')",
      "appointmentDate (DATE)",
      "appointmentTime (TIME)",
      "contactName (VARCHAR)",
      "contactEmail (VARCHAR)",
      "contactPhone (VARCHAR)",
      "attendeesCount (INT)",
      "confirmed (BOOLEAN)"
    ]
  },
  {
    name: "SupportTicket",
    table: "support_tickets",
    description: "Klantenservice tickets, retouren en vragen geïnspireerd op Coolblue & Amazon standaarden.",
    attributes: [
      "id (UUID - Primary Key)",
      "ticketNumber (VARCHAR, e.g. TCK-8402)",
      "userId (UUID, Nullable)",
      "category (VARCHAR)",
      "subject (VARCHAR)",
      "message (TEXT)",
      "orderReference (VARCHAR, Nullable)",
      "status (ENUM: 'Open', 'In behandeling', 'Opgelost', 'Gesloten')",
      "priority (ENUM: 'Laag', 'Normaal', 'Dringend')"
    ]
  }
];
