/**
 * All 11 Verified Engineering Case Studies for Chung Hoang Cong Khanh
 * Exact 16:10 uncut studio covers + 57 detailed inner product/architecture/proof screens.
 * Client-confidential names/domains are redacted for NDA safety.
 */
window.PORTFOLIO_PROJECTS = [
  {
    id: 'cho-tot-mua',
    title: 'Cho Tot Mua — E-Commerce & Multi-Role CRM (Web + Flutter)',
    categoryLabel: 'Full-Stack & Mobile',
    categories: ['fullstack'],
    role: 'Team Lead · Full-Stack & Mobile Architect',
    summary:
      'Complete e-commerce storefront, multi-department CRM admin portal, and native Flutter mobile app synchronized over 170+ Spring Boot REST endpoints and 40+ PostgreSQL tables.',
    cover: 'assets/images/cover_01.jpg',
    images: [
      { src: 'assets/images/p01_admin.jpg', caption: 'React Admin Portal: Live LTV Revenue, Order Status & KPI Dashboard' },
      { src: 'assets/images/p01_storefront.jpg', caption: 'Buyer Storefront: Flash Deals, Category Discovery & Real-Time Cart' },
      { src: 'assets/images/p01_buyer_prod.jpg', caption: 'Product Detail Page: SKU Variants, Stock Validation & Instant Checkout' },
      { src: 'assets/images/p01_crm_rfm.jpg', caption: 'Customer Service CRM: Automated RFM Segmentation, VIP Tiers & Churn Risk' },
      { src: 'assets/images/p01_cs_crm.jpg', caption: 'Customer 360° Profile: Lifetime Value History, Orders & Support Tickets' },
      { src: 'assets/images/p01_sales_ord.jpg', caption: 'Sales Operations: Multi-Department Order Fulfillment & Status Workflow' },
      { src: 'assets/images/p01_flutter_1.jpg', caption: 'Flutter Mobile App (Part 1): Shopping, Variants, Voucher Wallet & Checkout' },
      { src: 'assets/images/p01_flutter_2.jpg', caption: 'Flutter Mobile App (Part 2): 4-Step Order Tracking, VietQR & VAT e-Invoice' },
      { src: 'assets/images/p01_flutter_3.jpg', caption: 'Flutter Mobile App (Part 3): Loyalty Membership Tiers, Points & Voucher Redemption' },
      { src: 'assets/images/p01_flutter_4.jpg', caption: 'Flutter Mobile App (Part 4): Real-Time Customer Support Chat & Help Center' },
      { src: 'assets/images/p01_ctm_1.jpg', caption: 'Full-Stack System Showcase: Web Admin Portal & Mobile App Architecture' }
    ],
    metrics: [
      { val: '170+', lbl: 'REST Endpoints' },
      { val: '40+', lbl: 'PostgreSQL Tables' },
      { val: '4 Teams', lbl: 'Department RBAC' },
      { val: 'Web + App', lbl: 'React & Flutter' }
    ],
    challenge:
      'Build a unified retail + CRM platform where Admin, Sales, Warehouse, and Customer Service teams share real-time order and inventory data while strictly isolating each department\'s permissions.',
    highlights: [
      'Designed 170+ Spring Boot REST endpoints with JWT authentication and strict role/department guards across 4 operational teams.',
      'Built an automated RFM customer segmentation CRM dashboard tracking lifetime value (LTV), churn risk, and VIP loyalty tiers.',
      'Delivered a 15+ screen Flutter mobile app supporting real-time cart sync, voucher wallet, VietQR payment, VAT e-invoices, and live chat.'
    ],
    results:
      'Delivered end-to-end across Web Admin, Storefront, and Flutter Mobile with full role isolation and hardened checkout concurrency.',
    tags: ['React', 'Spring Boot', 'Flutter', 'PostgreSQL', 'JWT/RBAC', 'CRM']
  },
  {
    id: 'ktour-heristepai',
    title: 'K-Tour / HeriStepAI — GPS Geofence Audio Guide (Web + .NET MAUI)',
    categoryLabel: 'Full-Stack & Mobile',
    categories: ['fullstack'],
    role: 'Full-Stack & Mobile Engineer',
    summary:
      'Multi-role heritage tourism platform (ASP.NET Core 8 API, Admin/ShopOwner MVC Portal, and .NET MAUI mobile app) with hands-free GPS geofence audio narration in 7+ languages.',
    cover: 'assets/images/cover_02.jpg',
    images: [
      { src: 'assets/images/p02_heatmap.jpg', caption: 'Live Real-Time Tourist GPS Heatmap (30s Rolling Window, 3s Auto-Refresh)' },
      { src: 'assets/images/p02_simulator.jpg', caption: 'Built-In Geofence Load-Test Simulator (Up to 200 Concurrent Virtual Devices)' },
      { src: 'assets/images/p02_dashboard.jpg', caption: 'Admin Overview Dashboard: Active POIs, Audio Plays & Live Visitor Telemetry' },
      { src: 'assets/images/p02_poi.jpg', caption: 'POI & Geofence Management: Radius Configuration, Multi-Language Audio & Priority' },
      { src: 'assets/images/p02_analytics.jpg', caption: 'Tourism Analytics: Top Heritage Stops, Language Breakdown & Peak Hours' },
      { src: 'assets/images/p02_maui_app.jpg', caption: '.NET MAUI Mobile App: Offline SQLite POI Cache & OpenStreetMap Navigation' },
      { src: 'assets/images/p02_maui_lang.jpg', caption: '.NET MAUI Audio Engine: Hands-Free 7+ Language TTS Narration on Geofence Entry' },
      { src: 'assets/images/p02_ktour_2.jpg', caption: 'Complete Mobile Geofence Architecture & Cross-Platform Showcase' }
    ],
    metrics: [
      { val: '45 APIs', lbl: 'ASP.NET Core 8' },
      { val: '200 Devices', lbl: 'Load-Test Simulator' },
      { val: '7+ Langs', lbl: 'Auto TTS Narration' },
      { val: 'N → 1', lbl: 'Micro-Batched DB Pool' }
    ],
    challenge:
      'Tourists walking through overlapping heritage points of interest triggered conflicting audio and overwhelmed database connections under heavy GPS visit-log traffic.',
    highlights: [
      'Engineered a bounded Channel<T> + BackgroundService write queue (micro-batching 10 rows / 500ms flush) reducing concurrent DB connections from N to 1 with single-row fallback on FK errors.',
      'Built a shared HeriStepAI.Geo library implementing Haversine geofence priority resolution with 11 automated unit test cases.',
      'Delivered offline-first SQLite POI caching on .NET MAUI, OpenStreetMap rendering without paid map keys, and a live 200-device web simulator.'
    ],
    results:
      'Sustained 200 concurrent simulated GPS devices smoothly on pooled Supabase PostgreSQL with zero request blocking.',
    tags: ['ASP.NET Core 8', '.NET MAUI', 'C#', 'Supabase PostgreSQL', 'Leaflet', 'GPS Geofencing']
  },
  {
    id: 'real-estate-mls',
    title: 'Real Estate Data Platform — ~94K MLS Listings Sync & Map Search',
    categoryLabel: 'Full-Stack & Mobile',
    categories: ['fullstack'],
    role: 'Full-Stack & Data Sync Engineer',
    summary:
      'Production Florida real-estate search platform keeping ~94,000 MLS Grid & external property listings in sync using Next.js, Express, Supabase PostgreSQL, Mapbox, and AWS S3/R2.',
    cover: 'assets/images/cover_03.jpg',
    images: [
      { src: 'assets/images/p03_arch.jpg', caption: 'System Architecture: MLS Grid OData Sync, Supabase PostGIS BBox & S3/R2 Media Mirror' },
      { src: 'assets/images/p03_sync_code.jpg', caption: 'Production Code: Incremental Checkpoint Sync (ModificationTimestamp) & 500-Row Chunked Upserts' },
      { src: 'assets/images/p03_retry_code.jpg', caption: 'Rate-Limit Resilience: HTTP 429 Retry-After Backoff & Signed URL Auto-Refresh' },
      { src: 'assets/images/p03_re_1.jpg', caption: 'Platform Summary & Verified Production Scale (~94,000 Active Listings)' },
      { src: 'assets/images/p03_cover_upw.jpg', caption: 'Executive Architecture & Engineering Deliverables Overview' }
    ],
    metrics: [
      { val: '~94,000', lbl: 'Listings Synced' },
      { val: '500 Rows', lbl: 'Chunked Upserts' },
      { val: '~0.8 req/s', lbl: 'Retry-After Safe' },
      { val: 'S3 / R2', lbl: 'Media Mirror CDN' }
    ],
    challenge:
      'Third-party MLS feeds enforce strict rate limits and expiring image URLs, while naive map queries over ~94K JSONB property records caused slow page loads.',
    highlights: [
      'Implemented checkpoint-based incremental OData sync (ModificationTimestamp) with 500-row batch upserts and automatic HTTP 429 Retry-After backoff.',
      'Built a resilient media mirroring pipeline transferring unstable listing photos to AWS S3 / Cloudflare R2 with automatic 403 signed-URL refresh.',
      'Added server-side PostgreSQL bounding-box RPC (filter_listings_by_bbox) and indexed lat/lng columns for fast Mapbox viewport search.'
    ],
    results:
      'Kept ~94K property records and media galleries continuously synchronized in production without tripping MLS API rate limits.',
    tags: ['Next.js', 'Express.js', 'TypeScript', 'Supabase PostgreSQL', 'Mapbox', 'AWS S3 / R2']
  },
  {
    id: 'n8n-ai-outreach',
    title: 'AI-Powered B2B Lead Generation & Outreach Pipeline (43-Node n8n)',
    categoryLabel: 'AI & n8n Automation',
    categories: ['automation'],
    role: 'Automation & AI Workflow Engineer',
    summary:
      'Production 43-node n8n automation pipeline for a financial-services team detecting real-time buyer signals, enriching contacts via Apollo, drafting Azure OpenAI outreach, and syncing HubSpot + Azure SQL.',
    cover: 'assets/images/cover_04.jpg',
    images: [
      { src: 'assets/images/p04_canvas.jpg', caption: 'Live 43-Node n8n Production Workflow Canvas (Client Data Hidden)' },
      { src: 'assets/images/p04_arch.jpg', caption: '9-Step Signal-Based Architecture & Reliability Engineering' },
      { src: 'assets/images/p04_flow_diag.jpg', caption: 'End-to-End Data Flow: Apify · Serper · Apollo · Azure OpenAI · HubSpot · Azure SQL' },
      { src: 'assets/images/p04_n8n_alt.jpg', caption: 'Detailed Node Execution, Guard Filters & Error-Handling Branch' },
      { src: 'assets/images/p04_showcase.jpg', caption: 'Production Metrics & Automated Outreach Summary (1,838 Contacts)' },
      { src: 'assets/images/p04_n8n_crm_1.jpg', caption: 'AI Outreach Executive Overview: 1,838 Contacts, 43 Nodes, 4 Signals & 6 Tables' }
    ],
    metrics: [
      { val: '1,838', lbl: 'Contacts Automated' },
      { val: '43 Nodes', lbl: 'Production Workflow' },
      { val: '4 Signals', lbl: 'Apify · Serper · Apollo' },
      { val: '6 Tables', lbl: 'Azure SQL + HubSpot' }
    ],
    challenge:
      'Sales reps manually researched 1,800+ contacts across LinkedIn and news feeds. They needed an automated pipeline that detects life/company events without hallucinated copy or duplicate outreach.',
    highlights: [
      'Orchestrated Apify LinkedIn scraping, Serper company news checks, and Apollo.io contact enrichment with strict guard filters.',
      'Built a two-stage Azure OpenAI chain with structured JSON parsing to classify signals and generate personalized email + 160-character SMS copy.',
      'Engineered idempotent writes across 6 Azure SQL tables, 5-second retry backoff, Slack sales alerts, and HubSpot contact upserts.'
    ],
    results:
      'Processed 1,838 contacts end-to-end with zero manual data entry and zero duplicate outreach sends.',
    tags: ['n8n', 'Azure OpenAI', 'HubSpot CRM', 'Apollo.io', 'Apify', 'Azure SQL', 'Slack']
  },
  {
    id: 'n8n-social-video',
    title: 'Multi-Platform Social Video Automation & 215-Node n8n Audit',
    categoryLabel: 'AI & n8n Automation',
    categories: ['automation'],
    role: 'n8n Architect & Workflow Auditor',
    summary:
      '12 interconnected n8n workflows (215+ total nodes) automating TikTok/Instagram content ingestion, LLM caption rewriting, JSON2Video cloud rendering, multi-platform publishing, and daily analytics.',
    cover: 'assets/images/cover_05.jpg',
    images: [
      { src: 'assets/images/p05_publisher.jpg', caption: 'Live 51-Node Multi-Platform Publisher Workflow (TikTok · IG · FB · Threads)' },
      { src: 'assets/images/p05_rss_router.jpg', caption: 'Live RSS Ingestion & Upstream Media Classification Router (70% → 100% Accuracy)' },
      { src: 'assets/images/p05_topology.jpg', caption: 'Parsed Real n8n Node Topology: TikTok JSON2Video Render Loop + Polling Cap' },
      { src: 'assets/images/p05_yanji_topo.jpg', caption: 'Full Parsed Workflow Graph: SplitInBatches 40-Poll Timeout & Error Exit' },
      { src: 'assets/images/p05_audit36.jpg', caption: 'Before vs. After: 36 Documented Reliability, Credential & Loop Fixes (OR-1 to OR-36)' },
      { src: 'assets/images/p05_showcase.jpg', caption: '12-Workflow Multi-Platform Video Automation Ecosystem Overview' },
      { src: 'assets/images/p05_n8n_vid_1.jpg', caption: 'Video Automation Executive Overview: 215+ Nodes, 40-Poll Cap & 100% Accuracy' },
      { src: 'assets/images/p05_n8n_vid_3.jpg', caption: 'n8n Audit & Refactoring Breakdown: Polling Cap, Credential Security & Deduplication' }
    ],
    metrics: [
      { val: '12 Flows', lbl: '215+ Total Nodes' },
      { val: '40 Polls', lbl: 'JSON2Video Cap' },
      { val: '70→100%', lbl: 'Media Classification' },
      { val: '36 Fixes', lbl: 'Security & Loop Audit' }
    ],
    challenge:
      'The client\'s legacy multi-workflow n8n system suffered from infinite JSON2Video polling loops, ~30% Video/Photo misclassification, duplicate reposts, and hardcoded API keys.',
    highlights: [
      'Engineered a SplitInBatches polling cap (max 40 retries / 10-minute timeout) with clean error exits when cloud video rendering stalls.',
      'Moved RapidAPI post inspection upstream to classify Video vs. Photo carousels from real API payloads, raising accuracy from ~70% to 100%.',
      'Migrated hardcoded RapidAPI, JSON2Video, and Late API keys into encrypted n8n Credentials, sanitized pinData, and batched analytics 50 rows at a time into Google Sheets.'
    ],
    results:
      'Stabilized a 215+ node production content engine across TikTok, Instagram, Facebook, and Threads via 36 documented engineering fixes.',
    tags: ['n8n', 'JSON2Video', 'RapidAPI', 'Airtable', 'Google Sheets', 'LLM', 'Workflow Audit']
  },
  {
    id: 'b2b-ai-assessment',
    title: 'Next.js 14 + n8n + Gemini AI Lead Assessment & Brevo CRM Funnel',
    categoryLabel: 'Full-Stack & AI',
    categories: ['fullstack', 'automation'],
    role: 'Full-Stack & Integration Developer',
    summary:
      'B2B lead qualification portal and Next.js 14 webhook delivery hub pairing Typeform, n8n + Google Gemini AI report generation, Supabase deduplication, and Brevo transactional HTML emails (client NDA redacted).',
    cover: 'assets/images/cover_06.jpg',
    images: [
      { src: 'assets/images/p06_ui_clean.jpg', caption: 'B2B AI Readiness Assessment Portal & Corporate Email Domain Guard (NDA Redacted)' },
      { src: 'assets/images/p06_emails.jpg', caption: 'Branded Transactional HTML Emails: AI Report Delivery & Duplicate-Email Guard' },
      { src: 'assets/images/p06_arch.jpg', caption: 'End-to-End Funnel Architecture: Typeform → n8n + Gemini AI → Supabase → Brevo' },
      { src: 'assets/images/p06_webhook.jpg', caption: 'Next.js 14 /api/webhook/brevo Hub, Payload Normalization & Auto-PDF Fallback' },
      { src: 'assets/images/p06_overview.jpg', caption: 'Full Funnel Deliverables & Dual-Layer Deduplication Summary' },
      { src: 'assets/images/p06_piq_1.jpg', caption: 'Framed UI Showcase: AI Opportunity Assessment & 16-Domain Corporate Email Guard' },
      { src: 'assets/images/p06_piq_2.jpg', caption: 'Real HTML Report Emails & Next.js 14 Brevo Webhook Hub Payload' }
    ],
    metrics: [
      { val: '16 Domains', lbl: 'Free Emails Blocked' },
      { val: 'Dual Dedupe', lbl: 'Supabase + Brevo' },
      { val: 'Auto PDF', lbl: 'Gemini AI Report' },
      { val: 'Next.js 14', lbl: 'Webhook Hub' }
    ],
    challenge:
      'Prevent personal-email spam and duplicate AI report runs while delivering branded HTML reports with public share URLs and PDF downloads within 30 seconds of assessment completion.',
    highlights: [
      'Implemented corporate email validation blocking 16 free-email domains and dual-layer deduplication across Supabase (n8n) and Brevo REPORT_SENT attributes.',
      'Built /api/webhook/brevo in Next.js 14 (TypeScript) to normalize n8n array/object payloads, trigger auto-PDF fallback generation, and sync Brevo CRM contacts.',
      'Crafted distinct responsive HTML email templates for both successful AI report delivery and duplicate-email notifications.'
    ],
    results:
      'Eliminated duplicate AI token spend and delivered seamless automated report emails with zero silent failures.',
    tags: ['Next.js 14', 'TypeScript', 'React', 'n8n', 'Google Gemini', 'Supabase', 'Brevo CRM']
  },
  {
    id: 'booking-webhook-queue',
    title: 'Node.js, Bull Queue & Redis Fault-Tolerant Booking Webhook Engine',
    categoryLabel: 'Backend & Automation',
    categories: ['fullstack', 'automation'],
    role: 'Backend Engineer',
    summary:
      'Event-driven Express.js + TypeScript webhook server backed by Bull Queue and Redis that verifies Cal.com webhooks via HMAC-SHA256 and schedules delayed Gmail confirmations, reminders, and Slack alerts.',
    cover: 'assets/images/cover_07.jpg',
    images: [
      { src: 'assets/images/p07_ui_clean.jpg', caption: 'Slack Block Kit Alerts, Gmail OAuth2 Delayed Emails & Bull Queue /stats (NDA Redacted)' },
      { src: 'assets/images/p07_arch.jpg', caption: 'Event-Driven Architecture: HMAC-SHA256 Auth, Redis Bull Delayed Jobs & 3-Layer Idempotency' },
      { src: 'assets/images/p07_showcase.jpg', caption: 'Production Reliability Metrics: +5m Confirmations, -2h Reminders & 3x Exponential Retry' },
      { src: 'assets/images/p07_aaa_1.jpg', caption: 'Slack Block Kit, Gmail OAuth2 & Bull Redis Queue Verification' },
      { src: 'assets/images/p07_aaa_2.jpg', caption: 'Booking Queue Executive Overview: +5m Delay, -2h Reminder & 0 Duplicate Sends' }
    ],
    metrics: [
      { val: 'HMAC-256', lbl: 'Timing-Safe Auth' },
      { val: '+5m / -2h', lbl: 'Bull Delayed Jobs' },
      { val: '0 Dupes', lbl: '3-Layer Idempotency' },
      { val: '3x Backoff', lbl: 'Auto Retry Policy' }
    ],
    challenge:
      'Webhook retries and server restarts frequently cause duplicate booking confirmations or missed pre-meeting reminders when built with naive cron jobs.',
    highlights: [
      'Secured incoming webhooks using HMAC-SHA256 (timingSafeEqual) with a strict 5-minute timestamp freshness window.',
      'Assigned deterministic Redis Bull job IDs ({bookingId}-immediate and {bookingId}-reminder) ensuring 0 duplicate emails across webhook retries or restarts.',
      'Integrated Gmail API (OAuth2 MIME base64url) with natural-language timezone phrasing and non-blocking Slack Block Kit notifications.'
    ],
    results:
      'Delivered reliable, idempotent booking confirmations and pre-meeting reminders with live queue observability via GET /stats.',
    tags: ['Node.js', 'TypeScript', 'Express.js', 'Bull Queue', 'Redis', 'Gmail API', 'Slack']
  },
  {
    id: 'security-audit-jwt',
    title: 'Pre-Launch Security Audit & Broken Access Control Fix (HTTP 200 → 403)',
    categoryLabel: 'Security & QA',
    categories: ['security-qa'],
    role: 'Security Auditor & Backend Engineer',
    summary:
      'Full-stack security audit reviewing 170+ API endpoints, catching a High-severity privilege escalation bug where demoted Admin staff retained 24-hour admin JWT access, patching it, and proving it with automated tests.',
    cover: 'assets/images/cover_08.jpg',
    images: [
      { src: 'assets/images/p08_repro.jpg', caption: 'Live Exploit Reproduction (python demo.py): BEFORE HTTP 200 vs. AFTER HTTP 403' },
      { src: 'assets/images/p08_diff.jpg', caption: 'Code Patch (git diff JwtAuthenticationFilter.java) + Automated Unit Tests Passing' },
      { src: 'assets/images/p08_checklist.jpg', caption: 'Pre-Launch OWASP & Full-Stack Security Coverage Checklist (170+ Endpoints)' },
      { src: 'assets/images/p08_summary.jpg', caption: 'Executive Audit Findings, Severity Matrix & Remediation Verification' },
      { src: 'assets/images/p08_app_proof.jpg', caption: 'Audited Production Application Context & Live Role Revocation Proof' },
      { src: 'assets/images/p08_sec_1.jpg', caption: 'Found It, Fixed It, Proved It: HTTP 200 Vulnerable vs. HTTP 403 Blocked' },
      { src: 'assets/images/p08_sec_2.jpg', caption: 'Real System Audited + Code Patch & Passing Automated Unit Tests' }
    ],
    metrics: [
      { val: '170+', lbl: 'Endpoints Audited' },
      { val: '200 → 403', lbl: 'Exploit Blocked' },
      { val: '6 / 6', lbl: 'Security Tests Pass' },
      { val: '30s Cache', lbl: 'Live DB Role Check' }
    ],
    challenge:
      'AI-assisted and fast-moving apps often trust stale JWT claims without verifying live user status or department changes in the database—allowing demoted staff to reset real admin passwords.',
    highlights: [
      'Wrote a reproducible end-to-end exploit script (python demo.py) proving a demoted staff member\'s old JWT still returned HTTP 200 on admin password reset.',
      'Patched JwtAuthenticationFilter.java to resolve active status, role, and department from the database (with a 30-second cache) instead of trusting static token claims.',
      'Added automated regression unit tests (JwtAuthenticationFilterStatusTest & JwtServiceSecretTest) verifying HTTP 403 enforcement.'
    ],
    results:
      'Eliminated High-severity privilege escalation before launch and delivered a complete OWASP coverage checklist + passing test suite.',
    tags: ['Security Audit', 'JWT / RBAC', 'Supabase RLS', 'Java / Spring Security', 'OWASP', 'Unit Testing']
  },
  {
    id: 'real-device-qa-concurrency',
    title: 'Real-Device iOS/Android QA & E-Commerce Checkout Concurrency Fix',
    categoryLabel: 'Security & QA',
    categories: ['security-qa'],
    role: 'QA & Concurrency Engineer',
    summary:
      'Hands-on testing across 4 real physical devices (iPhone 15 Pro Max, iPhone 11, Oppo A31 Android, Windows PC) combined with parallel checkout race-condition testing that caught 300% stock overselling.',
    cover: 'assets/images/cover_09.jpg',
    images: [
      { src: 'assets/images/p09_race.jpg', caption: 'Checkout Concurrency Audit: 6 Simultaneous Buyers (1 Item Left → 4 Sold! Fixed to 8/8 Exact Stock)' },
      { src: 'assets/images/p09_devices.jpg', caption: '4 Real Physical Devices Lab (iPhone 15 Pro Max, iPhone 11, Oppo A31, Windows) & Deliverables' },
      { src: 'assets/images/p09_bugrep.jpg', caption: 'Developer-Ready Bug Report Format With Repro Steps, HD Videos & API Payloads' },
      { src: 'assets/images/p09_devlab.jpg', caption: 'Cross-Platform Responsive, Touch & Network-Throttling Verification Matrix' },
      { src: 'assets/images/p09_qa_showcase.jpg', caption: 'Real-Device QA Process, Video Proof Standards & Regression Coverage' },
      { src: 'assets/images/p09_race_showcase.jpg', caption: 'Database Pessimistic Locking & Atomic Transaction Remediation Summary' },
      { src: 'assets/images/p09_qa_1.jpg', caption: 'Tested on 4 Real Physical Devices + Dev-Ready Bug Report Deliverables' },
      { src: 'assets/images/p09_qa_3.jpg', caption: 'Sample Critical Bug Report & Live App Concurrency Testing Proof' }
    ],
    metrics: [
      { val: '4 Devices', lbl: 'Real iOS · Android · PC' },
      { val: '11 Bugs', lbl: 'Logic & Race Fixes' },
      { val: '8 / 8', lbl: 'Race Rounds Pass' },
      { val: 'HD Video', lbl: 'Every Bug Recorded' }
    ],
    challenge:
      'Single-user happy-path clicks passed, but under simultaneous checkout spikes (6 buyers clicking Place Order on the last 1 item), 4 orders succeeded—overselling stock by 300% and bypassing single-use vouchers.',
    highlights: [
      'Tested mobile responsiveness, touch gestures, and checkout flows by hand across physical iOS, Android, and desktop browsers with HD video proof.',
      'Built a multi-threaded Python concurrency stress script simulating simultaneous checkout, voucher redemption, and partial refund edge cases.',
      'Implemented database pessimistic row-level locking and atomic transactions—verifying 8/8 concurrent stress rounds with zero stock drift.'
    ],
    results:
      'Uncovered and verified fixes for 11 critical business-logic, concurrency, and mobile UI bugs before production release.',
    tags: ['Real-Device QA', 'iOS / Android', 'Concurrency Testing', 'PostgreSQL Locks', 'Playwright', 'Postman']
  },
  {
    id: 'kafka-fastapi-67m',
    title: '67.5M Events Apache Kafka Streaming & FastAPI Ingestion Pipeline',
    categoryLabel: 'Distributed & Data',
    categories: ['distributed'],
    role: 'Backend & Data Streaming Engineer',
    summary:
      'High-throughput e-commerce event ingestion REST API (FastAPI) and partitioned Apache Kafka (KRaft) streaming pipeline benchmarked at 67.5 million events (9.01 GB) and 91,023 msg/sec with zero data loss.',
    cover: 'assets/images/cover_10.jpg',
    images: [
      { src: 'assets/images/p10_proof.jpg', caption: 'Real Kafka UI Topics, FastAPI Swagger POST /events & Terminal Verifier (91K msg/s)' },
      { src: 'assets/images/p10_bench.jpg', caption: 'Latency Benchmarks (p50=11ms, p99=22ms), Dead-Letter Queue & 20s Broker Crash Recovery' },
      { src: 'assets/images/p10_showcase.jpg', caption: 'Streaming Pipeline Architecture: Partitioned by user_id + LZ4 Compression (26.3 GB → 7.8 GB)' },
      { src: 'assets/images/p10_kafka_2.jpg', caption: 'Load Testing, DLQ Routing & 20s Broker Crash Recovery Proof' }
    ],
    metrics: [
      { val: '67.5M', lbl: 'Events Ingested (9 GB)' },
      { val: '91,023/s', lbl: 'Peak Throughput' },
      { val: '0 Lost', lbl: '0 Dupes · 0 Reorder' },
      { val: '20s Kill', lbl: '100% Crash Recovery' }
    ],
    challenge:
      'Ingest both high-speed real-time HTTP web/mobile events and massive 9 GB historical clickstreams into Kafka while guaranteeing strict per-user ordering, schema validation, and crash resilience.',
    highlights: [
      'Built a containerized FastAPI ingestion service (POST /events & POST /events/batch up to 500 events/req) routing invalid HTTP 422 payloads to a Dead-Letter Queue (ecommerce.events.dlq).',
      'Configured idempotent producers (acks=all, enable.idempotence=true) partitioned by user_id and LZ4 compression (26.3 GB JSON compressed to 7.8 GB on broker disk).',
      'Executed automated scaling, end-to-end latency, and sudden broker outage (20s docker kill) benchmarks verified by an independent consumer verifier.'
    ],
    results:
      'Ingested 67,501,979 events in 12.4 minutes at 91,023 msg/s peak with 0 lost messages, 0 duplicates, and 100% recovery after simulated broker crash.',
    tags: ['Apache Kafka', 'FastAPI', 'Python', 'Docker', 'Dead-Letter Queue', 'Load Testing']
  },
  {
    id: 'distributed-3db-techstore',
    title: 'Heterogeneous 3-DB Distributed Tech Store Cluster (14 Containers)',
    categoryLabel: 'Distributed & Data',
    categories: ['distributed', 'fullstack'],
    role: 'Distributed Systems & Backend Engineer',
    summary:
      '14-container Docker Compose heterogeneous distributed database system synchronizing SQL Server 2022 (HQ), MySQL 8.4 (CN01), and PostgreSQL 16 (CN02) with Redis 7, Event Sourcing, and 6 Flask microservices.',
    cover: 'assets/images/cover_11.jpg',
    images: [
      { src: 'assets/images/p11_dash.jpg', caption: '3-Node Distributed Cluster Health Monitor, Sync Lag & Event Sourcing UI' },
      { src: 'assets/images/p11_sync.jpg', caption: 'Event Sourcing Sync Log, Dead-Letter Queue & Live /api/system/health JSON' },
      { src: 'assets/images/p11_arch.jpg', caption: 'Horizontal/Vertical Fragmentation, Saga Retry (5s–300s) & Scoped JWT Architecture' },
      { src: 'assets/images/p11_dist_1.jpg', caption: '3-Node Heterogeneous Distributed Database Cluster Overview (14 Containers)' },
      { src: 'assets/images/p11_dist_2.jpg', caption: 'Distributed Patterns: Horizontal/Vertical Fragmentation, Saga Retry & Scoped JWT' }
    ],
    metrics: [
      { val: '3 DBMS', lbl: 'MSSQL · MySQL · PG' },
      { val: '14 Nodes', lbl: 'Docker Compose Cluster' },
      { val: 'DLQ + Retry', lbl: 'Backoff 5s–300s' },
      { val: 'Swagger UI', lbl: 'All 3 Node APIs' }
    ],
    challenge:
      'Unify three completely different database engines (SQL Server, MySQL, PostgreSQL) across headquarters and regional branches so branches operate independently offline while staying eventually consistent.',
    highlights: [
      'Built versioned Event Sourcing (product_sync_events) with exponential retry backoff (5s–300s), automatic dead_letter isolation after 5 failures, and single/batch retry endpoints.',
      'Implemented Horizontal Fragmentation by branch code, Vertical Fragmentation masking sensitive payroll/ID columns for non-admins, and scoped JWT auth (central vs. branch).',
      'Built GET /api/system/health aggregating status across all 6 Flask services, 3 DBMS engines, pending/failed events, and per-branch last_sync_version.'
    ],
    results:
      'Fully reproducible 1-command Docker cluster demonstrating production distributed database patterns, eventual consistency, and observability.',
    tags: ['SQL Server', 'MySQL', 'PostgreSQL', 'Redis', 'Python / Flask', 'Docker Compose', 'Event Sourcing'],
    githubUrl: 'https://github.com/ACEBILL/distributed-database-for-tech-store--'
  }
];
