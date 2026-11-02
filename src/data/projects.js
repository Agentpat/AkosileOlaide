const projects = [
  {
    slug: "colossus-migration-platform",
    title: "Colossus Migration Platform",
    category: "Migration & Application Management",
    status: "Private Production System",
    description:
      "A multi-role migration operations platform connecting client applications, documents, staff casework, administration, payments and notifications in one production system.",
    overview:
      "Colossus brings the operational side of a migration service into one connected application. Clients manage their profiles, applications and documents, staff work assigned cases, and administrators oversee users, assignments and application progress through dedicated workspaces.",
    problem:
      "Migration cases involve multiple people, documents, application stages and operational decisions. Without a shared system, information can become fragmented across conversations, files and manual processes, making it harder to maintain visibility across a case.",
    businessPurpose:
      "Colossus is designed to help migration and travel businesses manage the full client journey in one place. Its purpose is to reduce the administrative work involved in onboarding clients, collecting documents, coordinating caseworkers, tracking application progress and keeping customers informed. It turns a service business that can otherwise depend on scattered chats, spreadsheets and manual follow-ups into a more repeatable operating process.",
    targetCustomers:
      "Migration consultancies, education and international recruitment agencies, travel operators, and other service businesses that manage document-heavy client applications.",
    valueProposition:
      "The business gains clearer case visibility, more consistent client communication, fewer missed follow-ups and the ability to manage more applications without increasing administrative work at the same rate.",
    revenueModel:
      "Potential revenue can come from monthly or annual SaaS subscriptions priced by staff seats, active client cases or business size; setup and onboarding fees; premium workflow automation; document and communication add-ons; and payment or consultation fees collected through the platform. A migration consultancy could also use the system internally to improve service capacity and protect margins.",
    revenueOpportunity:
      "The strongest opportunity is a B2B SaaS product for migration and education consultancies. A small number of paying agencies on recurring plans can create predictable monthly revenue, while implementation and customization provide higher-value one-off contracts. The commercial case depends on proving that agencies save enough staff time and improve case throughput to justify the subscription.",
    system:
      "The platform is organized around the lifecycle of a migration application. A client enters through the public website, completes their profile, creates an application and submits documents. Staff can then work assigned cases while administrators retain broader oversight of users, assignments, workflow progress and system activity.",
    architecture:
      "The frontend is built with React while Node.js and Express provide the API and application service layer. MongoDB and Mongoose handle persistent application data and relationships. Authentication and authorization are enforced through JWT-based sessions and role-based access control, while Cloudinary and Paystack provide document storage and payment infrastructure.",
    workflows: [
      "Client registration and profile completion",
      "Application creation and management",
      "Document submission and review",
      "Staff assignment and case handling",
      "Application status progression",
      "Administrative oversight",
      "Consultation payment workflow",
      "Notifications and activity updates",
    ],
    engineering: [
      "JWT authentication",
      "Role-based access control",
      "Modular Express backend",
      "MongoDB and Mongoose data modelling",
      "Protected client, staff and admin workflows",
      "Cloudinary document storage",
      "Paystack payment integration",
      "Production deployment",
    ],
    capabilities: [
      "Client Portal",
      "Staff Workspace",
      "Admin Dashboard",
      "Application Management",
      "Document Management",
      "Application Workflows",
      "Notifications",
      "Payments",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Paystack",
      "Cloudinary",
    ],
    images: [
      {
        src: "/images/projects/colossus/overview.png",
        title: "Public Website",
        description:
          "The public-facing entry point into the migration service and application journey.",
        alt: "Colossus Migration Platform public website",
      },
      {
        src: "/images/projects/colossus/client-dashboard.png",
        title: "Client Dashboard",
        description:
          "The authenticated client workspace for managing applications and activity.",
        alt: "Colossus client dashboard",
      },
      {
        src: "/images/projects/colossus/application.png",
        title: "Application Management",
        description:
          "Application information and workflow state inside the client portal.",
        alt: "Colossus application management screen",
      },
      {
        src: "/images/projects/colossus/documents.png",
        title: "Document Management",
        description:
          "Documents organized around the application they belong to.",
        alt: "Colossus document management screen",
      },
      {
        src: "/images/projects/colossus/staff-workspace.png",
        title: "Staff Workspace",
        description:
          "A dedicated operational workspace for assigned applications and case handling.",
        alt: "Colossus staff workspace",
      },
      {
        src: "/images/projects/colossus/admin-dashboard.png",
        title: "Admin Dashboard",
        description:
          "Administrative visibility across users, assignments, workflows and operations.",
        alt: "Colossus admin dashboard",
      },
      {
        src: "/images/projects/colossus/workflow.png",
        title: "Workflow & Activity",
        description:
          "Application progression and operational activity across the case lifecycle.",
        alt: "Colossus application workflow screen",
      },
    ],
    featured: true,
  },

  {
    slug: "vantage-dealer-os",
    title: "Vantage Dealer OS",
    category: "Dealership Sales & Inventory",
    status: "Live Demo",
    description:
      "A dealership operating system connecting vehicle inventory, enquiries, customers, sales pipelines, reservations, follow-ups and reporting.",
    overview:
      "Vantage Dealer OS is built around the day-to-day sales workflow of an automotive dealership. Instead of treating inventory, enquiries and customer activity as separate records, the system connects them into one operational flow.",
    problem:
      "Dealership sales activity can become scattered across vehicle records, customer conversations, spreadsheets and follow-up reminders. The system provides a structured workspace for tracking what is available, who is interested, where each opportunity stands and what needs to happen next.",
    businessPurpose:
      "Vantage Dealer OS is intended to help vehicle dealerships control the commercial process from vehicle acquisition and listing through enquiries, sales follow-up, reservation and completed sale. It gives owners and sales teams one place to understand stock, customer demand and the next action required to close a deal.",
    targetCustomers:
      "Independent car dealerships, multi-branch auto retailers, vehicle importers and sales teams that manage inventory and customer enquiries.",
    valueProposition:
      "Dealers can reduce lost leads, respond faster to buyers, keep inventory information organized and understand which vehicles and salespeople are generating activity. Better follow-up and stock visibility can improve conversion and inventory turnover.",
    revenueModel:
      "Potential monetization includes monthly or annual subscriptions tiered by number of users, branches or active vehicle listings; paid onboarding and data migration; premium reporting; customer communication integrations; and custom integrations for larger dealerships.",
    revenueOpportunity:
      "A recurring dealership subscription is the core opportunity. The product can start with a focused plan for small dealers and expand into higher-priced multi-user or multi-branch plans. Revenue potential is tied to the number of dealerships retained, the value of faster lead conversion and the operational complexity supported by each tier.",
    system:
      "The core workflow connects vehicles to enquiries, enquiries to customers and customers to sales activity. Pipeline stages, reservations and follow-ups give the sales team a structured way to move opportunities forward while reporting provides an operational view of activity.",
    architecture:
      "React provides the operational interface while Node.js and Express expose the application API. MongoDB stores vehicle, customer, enquiry, pipeline and sales records so related dealership activity can remain connected across the application.",
    workflows: [
      "Vehicle inventory management",
      "Customer enquiry capture",
      "Lead qualification",
      "Sales pipeline progression",
      "Customer record management",
      "Vehicle reservations",
      "Sales team activity",
      "Follow-up tracking",
    ],
    engineering: [
      "REST API architecture",
      "MongoDB data modelling",
      "Connected vehicle and customer records",
      "Sales workflow states",
      "Operational dashboards",
      "Persistent follow-up records",
      "Role-aware workflows",
      "Production deployment",
    ],
    capabilities: [
      "Vehicle Inventory",
      "Enquiries",
      "Sales Pipeline",
      "Customers",
      "Reservations",
      "Sales Team",
      "Follow-ups",
      "Reporting",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    images: [
      {
        src: "/images/projects/vantage/overview.png",
        title: "Dealer OS Overview",
        description:
          "The primary operating view for dealership sales activity.",
        alt: "Vantage Dealer OS overview",
      },
      {
        src: "/images/projects/vantage/dashboard.png",
        title: "Operations Dashboard",
        description:
          "A centralized view of dealership activity, metrics and sales operations.",
        alt: "Vantage Dealer OS dashboard",
      },
      {
        src: "/images/projects/vantage/inventory.png",
        title: "Vehicle Inventory",
        description:
          "Structured inventory records for vehicles available through the dealership.",
        alt: "Vantage Dealer OS vehicle inventory",
      },
      {
        src: "/images/projects/vantage/enquiries.png",
        title: "Customer Enquiries",
        description:
          "Incoming vehicle enquiries organized for sales follow-up.",
        alt: "Vantage Dealer OS customer enquiries",
      },
      {
        src: "/images/projects/vantage/pipeline.png",
        title: "Sales Pipeline",
        description: "Lead progression organized across defined sales stages.",
        alt: "Vantage Dealer OS sales pipeline",
      },
      {
        src: "/images/projects/vantage/customers.png",
        title: "Customers",
        description:
          "Centralized customer records connected to dealership activity.",
        alt: "Vantage Dealer OS customers",
      },
      {
        src: "/images/projects/vantage/sales-team.png",
        title: "Sales Team",
        description:
          "Sales team activity and operational ownership across the dealership.",
        alt: "Vantage Dealer OS sales team",
      },
      {
        src: "/images/projects/vantage/reporting.png",
        title: "Reporting",
        description: "Operational reporting across dealership sales activity.",
        alt: "Vantage Dealer OS reporting",
      },
    ],
    link: "https://vantage-motors-auto-sales-os.vercel.app/",
    featured: true,
  },

  {
    slug: "estateflow",
    title: "EstateFlow",
    category: "Property Sales Operations",
    status: "Live Demo",
    description:
      "A property sales operating system connecting listings, enquiries, lead progression, follow-ups and property inspections.",
    overview:
      "EstateFlow structures the property sales process around the information a sales team needs to manage day-to-day opportunities: properties, prospective clients, lead stages, follow-ups and inspections.",
    problem:
      "Property sales involve multiple properties, prospects and follow-up activities moving at different stages. EstateFlow creates a shared operational workspace so those activities can be managed as connected records rather than isolated tasks.",
    businessPurpose:
      "EstateFlow is designed to organize the revenue-generating side of a real estate agency: marketing available properties, capturing buyer and tenant interest, qualifying leads, arranging inspections and following opportunities through to a transaction. It connects property supply with prospective demand and gives agents a consistent process for moving enquiries forward.",
    targetCustomers:
      "Real estate agencies, independent property brokers, property developers and property sales teams managing multiple listings and prospective buyers or tenants.",
    valueProposition:
      "The system helps agencies reduce enquiry leakage, improve response and inspection coordination, maintain a usable record of prospects and identify which listings attract demand. This can improve agent productivity and increase the chance that marketing spend results in completed transactions.",
    revenueModel:
      "Potential revenue streams include subscriptions based on agent seats, branches or active listings; premium listing and lead-management features; paid agency websites or branded portals; onboarding and listing-data migration; and integrations with advertising, messaging or property services.",
    revenueOpportunity:
      "The recurring SaaS opportunity is selling to agencies that need a dependable lead and inspection workflow. Higher-value packages can serve developers and larger brokerages, while setup, branded portals and integrations create additional implementation revenue. The commercial value is strongest when agencies can connect platform usage to more inspections and closed transactions.",
    system:
      "The platform connects property records with the enquiry and lead pipeline. Prospective clients can express interest through Find Your Match, while the operational side of the system provides lead progression, follow-up tracking and property inspection workflows.",
    architecture:
      "React handles the application interface while Node.js and Express provide the API and business logic layer. MongoDB persists property, enquiry, lead and inspection records and allows the different parts of the sales workflow to remain connected.",
    workflows: [
      "Property listing management",
      "Find Your Match enquiries",
      "Lead qualification",
      "Lead pipeline progression",
      "Follow-up tracking",
      "Property inspection",
    ],
    engineering: [
      "REST API architecture",
      "MongoDB data modelling",
      "Connected property and lead records",
      "Lead pipeline states",
      "Operational dashboards",
      "Follow-up workflows",
      "Property inspection workflows",
      "Production deployment",
    ],
    capabilities: [
      "Property Listings",
      "Find Your Match",
      "Lead Management",
      "Lead Pipeline",
      "Follow-ups",
      "Property Inspection",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    images: [
      {
        src: "/images/projects/estateflow/overview.png",
        title: "EstateFlow Overview",
        description:
          "The primary operating view for the property sales platform.",
        alt: "EstateFlow overview",
      },
      {
        src: "/images/projects/estateflow/dashboard.png",
        title: "Operations Dashboard",
        description:
          "A centralized view of property sales activity and operations.",
        alt: "EstateFlow dashboard",
      },
      {
        src: "/images/projects/estateflow/properties.png",
        title: "Property Listings",
        description: "Structured property records managed inside the platform.",
        alt: "EstateFlow property listings",
      },
      {
        src: "/images/projects/estateflow/find-your-match.png",
        title: "Find Your Match",
        description:
          "A property discovery and enquiry workflow for prospective clients.",
        alt: "EstateFlow Find Your Match",
      },
      {
        src: "/images/projects/estateflow/lead-pipeline.png",
        title: "Lead Pipeline",
        description: "Lead progression organized across property sales stages.",
        alt: "EstateFlow lead pipeline",
      },
      {
        src: "/images/projects/estateflow/inspection.png",
        title: "Property Inspection",
        description:
          "A structured workflow for recording and managing property inspection activity.",
        alt: "EstateFlow property inspection",
      },
    ],
    link: "https://real-estate-sales-os-demo.vercel.app/",
    featured: true,
  },
  {
    slug: "routelink-logistics-platform",
    title: "RouteLink",
    category: "Logistics & Delivery Management",
    status: "Live Product",
    description:
      "A logistics booking and operations platform connecting customer bookings, shipment tracking, dispatch, drivers, fleet, deliveries and business reporting.",
    overview:
      "RouteLink brings the customer-facing delivery journey and the internal logistics operation into one connected platform. Customers can request and manage deliveries, while operations teams coordinate bookings, dispatch work, drivers, vehicles and shipment progress through dedicated workspaces.",
    problem:
      "Logistics businesses often coordinate bookings, customer requests, drivers, vehicles and delivery updates across calls, messaging applications and disconnected spreadsheets. This makes it difficult to maintain accurate shipment visibility, allocate resources and understand daily operational performance.",
    businessPurpose:
      "RouteLink is designed to give logistics and delivery businesses a structured digital system for managing the full delivery lifecycle. It connects booking intake, shipment tracking, dispatch, driver and fleet coordination, customer records and reporting so the business can operate with better visibility and more consistent processes.",
    targetCustomers:
      "Courier companies, last-mile delivery businesses, logistics operators, dispatch companies and growing businesses that coordinate deliveries across drivers and vehicles.",
    valueProposition:
      "The platform provides one operational view of delivery activity. Teams can organize incoming requests, coordinate dispatch, monitor deliveries, manage drivers and fleet records, and maintain customer and operational information without relying entirely on fragmented manual coordination.",
    revenueModel:
      "Potential monetization includes monthly or annual SaaS subscriptions based on delivery volume, staff seats, drivers or fleet size; implementation and onboarding fees; premium tracking and reporting modules; branded customer portals; and custom integrations for larger logistics operators.",
    revenueOpportunity:
      "The core opportunity is recurring software revenue from logistics businesses that need dependable booking and dispatch infrastructure. Tiered subscriptions can serve smaller operators, while larger fleets can pay for additional users, operational modules, integrations and support. Implementation services can provide additional revenue during onboarding and expansion.",
    system:
      "RouteLink connects the delivery journey from customer request and booking through dispatch, driver allocation, shipment tracking and delivery completion. The operations workspace brings bookings, requests, deliveries, drivers, fleet and customers together, while reporting and settings support day-to-day business administration.",
    architecture:
      "The product is presented as a route-based web application with dedicated interfaces for customer delivery activity and internal logistics operations. Its interface organizes booking, tracking, dispatch, fleet and reporting capabilities into connected operational sections. The implementation details should be represented according to the deployed application's actual backend and integrations.",
    workflows: [
      "Customer delivery booking",
      "Booking and quote management",
      "Shipment tracking",
      "Delivery request management",
      "Dispatch coordination",
      "Driver management",
      "Fleet and vehicle management",
      "Delivery status monitoring",
      "Customer record management",
      "Operational reporting",
      "Business settings management",
    ],
    engineering: [
      "Route-based application structure",
      "Reusable logistics management interfaces",
      "Booking and delivery workflow interfaces",
      "Shipment tracking experience",
      "Dispatch and driver operations screens",
      "Fleet and customer management screens",
      "Operational reporting interface",
      "Responsive application layouts",
      "Production demo deployment",
    ],
    capabilities: [
      "Customer Booking",
      "Quote & Booking Management",
      "Shipment Tracking",
      "Operations Dashboard",
      "Dispatch Management",
      "Delivery Management",
      "Driver Management",
      "Fleet Management",
      "Customer Management",
      "Delivery Requests",
      "Reports",
      "Settings",
    ],
    technologies: ["React", "JavaScript", "CSS"],
    images: [
      {
        src: "/images/projects/routelink/landing-page.png",
        title: "RouteLink Landing Page",
        description:
          "The customer-facing introduction to the logistics and delivery service.",
        alt: "RouteLink logistics landing page",
      },
      {
        src: "/images/projects/routelink/booking.png",
        title: "Delivery Booking",
        description:
          "The booking experience for capturing delivery requirements and customer requests.",
        alt: "RouteLink delivery booking interface",
      },
      {
        src: "/images/projects/routelink/tracking.png",
        title: "Shipment Tracking",
        description:
          "A shipment tracking experience for viewing delivery progress.",
        alt: "RouteLink shipment tracking interface",
      },
      {
        src: "/images/projects/routelink/overview.png",
        title: "Operations Overview",
        description:
          "The main operations dashboard for viewing logistics activity.",
        alt: "RouteLink operations overview dashboard",
      },
      {
        src: "/images/projects/routelink/dispatch.png",
        title: "Dispatch Management",
        description:
          "An operations workspace for coordinating dispatch activity.",
        alt: "RouteLink dispatch management screen",
      },
      {
        src: "/images/projects/routelink/deliveries.png",
        title: "Deliveries",
        description:
          "A structured view of delivery records and their operational progress.",
        alt: "RouteLink deliveries management screen",
      },
      {
        src: "/images/projects/routelink/drivers.png",
        title: "Driver Management",
        description:
          "A workspace for organizing driver records and delivery assignments.",
        alt: "RouteLink driver management screen",
      },
      {
        src: "/images/projects/routelink/fleet.png",
        title: "Fleet Management",
        description:
          "A fleet workspace for organizing vehicles used in delivery operations.",
        alt: "RouteLink fleet management screen",
      },
      {
        src: "/images/projects/routelink/customers.png",
        title: "Customer Management",
        description:
          "Customer records organized for ongoing logistics service operations.",
        alt: "RouteLink customer management screen",
      },
      {
        src: "/images/projects/routelink/requests.png",
        title: "Delivery Requests",
        description:
          "A centralized view of incoming delivery requests awaiting operational handling.",
        alt: "RouteLink delivery requests screen",
      },
      {
        src: "/images/projects/routelink/reports.png",
        title: "Operations Reports",
        description:
          "Reporting views for reviewing delivery and logistics activity.",
        alt: "RouteLink logistics reports screen",
      },
      {
        src: "/images/projects/routelink/settings.png",
        title: "Platform Settings",
        description:
          "The configuration area for managing platform and business settings.",
        alt: "RouteLink platform settings screen",
      },
    ],
    link: "https://route-link-logistics-os.vercel.app/",
    featured: true,
  },

  {
    slug: "snapconfused",
    title: "SnapConfused",
    category: "Social Entertainment & Community Platform",
    status: "Live Product",
    description:
      "A Lagos-focused social entertainment platform turning everyday confusion, anonymous confessions, internet culture and social drama into interactive community experiences.",
    overview:
      "SnapConfused is a social entertainment platform built around the things people talk about, laugh about, argue over and sometimes struggle to understand. Designed around Lagos internet culture, the platform combines anonymous confessions, community reactions, social rankings, fictional personalities, interactive games, confession battles and shareable content. Instead of being just another confession website, SnapConfused creates multiple reasons for people to participate, explore, react and return.",
    problem:
      "Most online confession platforms are built around a single activity: submitting and reading anonymous stories. That creates limited opportunities for repeat engagement and community participation. SnapConfused approaches the problem differently by turning shared experiences into interactive entertainment. People can discover conversations, react to stories, participate in debates, explore fictional personalities, compete in playful experiences and share content beyond the platform.",
    businessPurpose:
      "SnapConfused is designed to become a recognizable youth-oriented social entertainment brand, beginning with Lagos. Its purpose is to transform everyday social experiences, relationship drama, campus conversations and anonymous stories into a participatory digital entertainment experience. The platform combines community-generated content with interactive formats that encourage discovery, contribution, sharing and repeat visits. The wider business opportunity is to build an audience-driven entertainment product that can eventually support advertising, sponsorships, branded experiences and partnerships.",
    targetCustomers:
      "Young adults, university students, Snapchat users, social media enthusiasts, Lagos internet culture communities and people who enjoy anonymous confessions, relationship conversations, humorous stories, social debates, interactive games and shareable entertainment.",
    valueProposition:
      "SnapConfused gives people a place to anonymously share experiences, discover relatable stories, participate in conversations and enjoy interactive entertainment. Users are not restricted to reading confessions: they can react, comment, vote in battles, explore rankings, participate in games and turn interesting moments into shareable content. The platform creates an entertainment loop where every contribution can become something the wider community reacts to.",
    revenueModel:
      "Potential monetization includes sponsored confession categories, branded challenges, sponsored battles, native advertising, brand placements, sponsored rankings, campaign partnerships, premium profile experiences, promotional placements and partnerships with youth-focused consumer brands. The platform could also introduce sponsored entertainment experiences and event-based campaigns. Any virtual currency or fictional wealth displayed in the product should be clearly distinguished from real money and should not be represented as a financial product.",
    revenueOpportunity:
      "The commercial opportunity is to build a highly engaged youth entertainment audience that brands can reach through relevant, interactive experiences. For example, a consumer brand could sponsor a weekly confession challenge, a university-focused campaign, a relationship-themed battle or a branded community event. Unlike relying entirely on banner advertising, SnapConfused can create sponsorship opportunities around the actual experiences people use. Audience growth, repeat visits, content sharing and participation will be the important early indicators of commercial potential.",
    system:
      "SnapConfused is organized as a collection of connected entertainment experiences. The central Gist experience provides a community feed for discovering confessions and reacting to conversations. Other experiences introduce social competition, fictional profiles, rankings, games, daily challenges and themed entertainment. Users can contribute anonymously, participate in community activities and generate shareable content. The product is designed around several connected engagement loops rather than a single content feed.",
    architecture:
      "The frontend is structured as a multi-experience React web application with dedicated product sections and reusable interface components. The product separates content discovery, community participation, social entertainment and profile-based experiences into distinct areas while maintaining a consistent visual identity. Shared interface patterns support confession cards, reactions, voting, profile cards, rankings, modals, shareable content and responsive layouts. Backend services, persistence and production integrations should be documented according to their actual implementation.",
    workflows: [
      "Browse the Gist community feed",
      "Filter content by relationships, campus gist, friendship and confessions",
      "Read anonymous community submissions",
      "Submit a confession anonymously",
      "React to community stories",
      "Comment on conversations",
      "Share interesting confessions",
      "Generate shareable confession cards",
      "Discover trending conversations",
      "Explore fictional social profiles",
      "View community rankings",
      "Participate in confession battles",
      "Vote on competing opinions",
      "Explore fictional dating profiles",
      "Discover interactive entertainment experiences",
      "Participate in quick games",
      "Explore Roast This",
      "Enter After Hours",
      "Participate in daily challenges",
      "Explore the Hall of Shame",
      "Discover the Lagos Edition experience",
    ],
    engineering: [
      "Multi-section React application",
      "Route-based product experiences",
      "Reusable confession and content cards",
      "Category-based content discovery interface",
      "Interactive reaction interfaces",
      "Comment and conversation interfaces",
      "Anonymous submission interface",
      "Modal-based content submission",
      "Shareable confession card interface",
      "Social profile and ranking interfaces",
      "Confession battle voting interface",
      "Gamified virtual currency presentation",
      "Interactive challenge interfaces",
      "Responsive community feed",
      "Consistent design system across product sections",
      "Production deployment",
    ],
    capabilities: [
      "The Gist Radar",
      "Community Confessions",
      "Anonymous Submissions",
      "Category-Based Discovery",
      "Community Reactions",
      "Comments & Conversations",
      "Trending Gist",
      "Shareable Confession Cards",
      "People & Social Rankings",
      "Confession Battles",
      "Confused Cash — Virtual Economy Concept",
      "Date Me",
      "Quick Games",
      "Roast This",
      "After Hours",
      "Daily Challenges",
      "Hall of Shame",
      "Lagos Edition",
    ],
    technologies: ["React", "JavaScript", "Vite", "CSS"],
    images: [
      {
        src: "/images/projects/snapconfused/gist-radar.png",
        title: "The Gist Radar",
        description:
          "The central community feed, bringing together anonymous stories, content categories, trending conversations and community reactions.",
        alt: "SnapConfused Gist Radar community feed",
      },
      {
        src: "/images/projects/snapconfused/gist-drop.png",
        title: "The Gist Drop",
        description:
          "A confession discovery experience featuring anonymous stories, featured submissions, reactions, comments and content sharing.",
        alt: "SnapConfused Gist Drop interface",
      },
      {
        src: "/images/projects/snapconfused/people.png",
        title: "Become Somebody",
        description:
          "A fictional social status experience featuring community personalities, profile cards and playful rankings.",
        alt: "SnapConfused fictional people and profiles",
      },
      {
        src: "/images/projects/snapconfused/confused-cash.png",
        title: "Confused Cash",
        description:
          "A fictional in-product currency and status interface showing demo balances, progression and ranking-related experiences.",
        alt: "SnapConfused Confused Cash interface",
      },
      {
        src: "/images/projects/snapconfused/get-involved.png",
        title: "Get Involved",
        description:
          "A discovery section introducing interactive experiences such as Confession Battle, Roast This, Quick Games and After Hours.",
        alt: "SnapConfused interactive entertainment experiences",
      },
      {
        src: "/images/projects/snapconfused/confession-battle.png",
        title: "Confession Battle",
        description:
          "A head-to-head voting experience where users compare two confessions and choose which side they support.",
        alt: "SnapConfused Confession Battle interface",
      },
      {
        src: "/images/projects/snapconfused/date-me.png",
        title: "Date Me",
        description:
          "A playful fictional dating experience featuring profile cards, exaggerated dating fees and character discovery.",
        alt: "SnapConfused Date Me interface",
      },
      {
        src: "/images/projects/snapconfused/rankings.png",
        title: "Community Rankings",
        description:
          "A leaderboard experience presenting fictional community personalities and their positions in the platform's ranking system.",
        alt: "SnapConfused community rankings",
      },
      {
        src: "/images/projects/snapconfused/daily-challenge.png",
        title: "Daily Challenge",
        description:
          "A daily interactive question designed to encourage quick participation and repeat engagement.",
        alt: "SnapConfused daily challenge interface",
      },
      {
        src: "/images/projects/snapconfused/after-hours.png",
        title: "After Hours",
        description:
          "A themed entertainment experience built around fictional scenarios, uncomfortable questions and late-night conversations.",
        alt: "SnapConfused After Hours experience",
      },
      {
        src: "/images/projects/snapconfused/show-preview.png",
        title: "The SnapConfused Show",
        description:
          "A visual introduction to the Lagos Edition concept, presenting the platform as an ongoing social entertainment experience.",
        alt: "SnapConfused Lagos Edition show preview",
      },
      {
        src: "/images/projects/snapconfused/confuse.png",
        title: "Don't Just Watch. Confuse.",
        description:
          "A brand experience encouraging visitors to move beyond passive content consumption and participate in the community.",
        alt: "SnapConfused Don't Just Watch Confuse section",
      },
      {
        src: "/images/projects/snapconfused/confessions.png",
        title: "The Confessional",
        description:
          "A dedicated confession discovery page where visitors can browse anonymous stories and share their own experiences.",
        alt: "SnapConfused confessions page",
      },
      {
        src: "/images/projects/snapconfused/share-pain-modal.png",
        title: "Share the Pain",
        description:
          "An anonymous submission modal allowing users to describe their experiences and choose whether to attach a name.",
        alt: "SnapConfused anonymous confession submission modal",
      },
      {
        src: "/images/projects/snapconfused/share-card.png",
        title: "Make It a Post",
        description:
          "A share-card creation interface that turns a confession into a visual asset users can share or download.",
        alt: "SnapConfused shareable confession card",
      },
      {
        src: "/images/projects/snapconfused/trending.png",
        title: "What's Causing Noise?",
        description:
          "A trending content carousel highlighting conversations and confessions attracting community attention.",
        alt: "SnapConfused trending confessions carousel",
      },
      {
        src: "/images/projects/snapconfused/hall-of-shame.png",
        title: "The Hall of Shame",
        description:
          "A dedicated community experience showcasing memorable and questionable social moments.",
        alt: "SnapConfused Hall of Shame",
      },
      {
        src: "/images/projects/snapconfused/gist-experience.png",
        title: "The Gist Experience",
        description:
          "A featured mobile-inspired confession interface bringing the platform's brand, anonymous stories and live reactions together.",
        alt: "SnapConfused Gist mobile experience",
      },
      {
        src: "/images/projects/snapconfused/landing-page.png",
        title: "Gist. Drama. Everybody.",
        description:
          "The main brand landing experience introducing SnapConfused and its Lagos-focused social entertainment identity.",
        alt: "SnapConfused main landing page",
      },
    ],
    link: "https://snapconfused.vercel.app/",
    featured: true,
  },
  {
    slug: "electronic-medical-records-system",
    title: "Electronic Medical Records System",
    category: "Healthcare Technology & Hospital Operations",
    status: "Deployed Hospital System",
    description:
      "A multi-role Electronic Medical Records platform deployed for a hospital in Port Harcourt, Nigeria, connecting hospital administration, doctors and patients through a centralized digital healthcare management system.",
    overview:
      "This Electronic Medical Records system was developed to bring essential hospital operations and patient-facing services into a connected digital environment. The platform provides dedicated workspaces for administrators, doctors and patients, with interfaces for managing patient information, appointments, clinical activities, prescriptions, reports and operational records. Beyond the public demonstration environment, the system has been deployed for a hospital in Port Harcourt, Nigeria.",
    problem:
      "Healthcare facilities manage sensitive patient information, appointments, clinical activities and administrative responsibilities across multiple people and departments. When these processes depend heavily on disconnected records and manual coordination, information becomes difficult to organize and operational visibility suffers. The platform introduces a centralized digital environment where different hospital roles can access the information and workflows relevant to their responsibilities.",
    businessPurpose:
      "The system was built to help healthcare providers modernize hospital administration and organize the patient care journey through software. Its purpose is to provide a shared operational platform for hospital administrators, doctors and patients while reducing dependence on fragmented manual processes. The hospital deployment demonstrates the practical application of software engineering in a real healthcare environment.",
    targetCustomers:
      "Private hospitals, specialist healthcare facilities, medical centres and healthcare providers seeking to digitize patient records, organize clinical workflows and improve administrative visibility.",
    valueProposition:
      "The platform gives hospitals a structured digital environment for managing patient-related information and coordinating different healthcare roles. Administrators gain operational visibility, doctors receive dedicated workspaces for their schedules and patient activities, and patients have access to a more organized view of their healthcare information.",
    revenueModel:
      "The commercial model can support hospital software licensing, implementation and onboarding fees, recurring maintenance and support contracts, facility-specific customization, additional modules and integration services. This creates opportunities to provide long-term technology infrastructure to healthcare organizations rather than delivering isolated software projects.",
    revenueOpportunity:
      "Healthcare technology offers an opportunity to build recurring business relationships with hospitals and medical facilities. Each deployment can create an initial implementation engagement followed by ongoing support, maintenance, customization and potential module expansion. The platform demonstrates the ability to take a specialized business problem, engineer a digital solution and deploy it within an actual institutional environment.",
    system:
      "The platform is organized around three primary user experiences: an administrative workspace for hospital oversight, a doctor workspace for clinical activities and patient management, and a patient workspace for accessing personal healthcare information. The administrative environment provides visibility into hospital activity, analytics, reports and notifications. The doctor environment focuses on schedules, patients and clinical tasks, while the patient environment provides access to appointments, medications, test results and billing information.",
    architecture:
      "The application is structured as a role-based web platform with dedicated dashboard experiences for administrators, doctors and patients. The frontend uses reusable React components and organized application interfaces to present healthcare information according to each user's role. The system is designed around clearly separated operational workspaces, structured data presentation and responsive dashboard experiences.",
    workflows: [
      "Hospital administrative dashboard",
      "Hospital activity and operational overview",
      "Patient information management",
      "Doctor schedule management",
      "Doctor patient workspace",
      "Clinical task management",
      "Prescription management",
      "Patient appointment overview",
      "Patient medication information",
      "Test result visibility",
      "Healthcare reports and analytics",
      "Hospital notifications",
      "Patient billing overview",
    ],
    engineering: [
      "Multi-role application architecture",
      "Administrator, doctor and patient workspaces",
      "Reusable React dashboard components",
      "Structured healthcare information interfaces",
      "Operational data visualization",
      "Patient and appointment interfaces",
      "Clinical workflow interfaces",
      "Responsive application layouts",
      "Hospital deployment",
      "Public demonstration environment",
    ],
    capabilities: [
      "Hospital Admin Dashboard",
      "Doctor Dashboard",
      "Patient Dashboard",
      "Patient Management",
      "Appointment Overview",
      "Doctor Scheduling",
      "Clinical Tasks",
      "Prescription Management",
      "Healthcare Analytics",
      "Reports",
      "Notifications",
      "Patient Billing Overview",
    ],
    technologies: ["React", "JavaScript", "CSS"],
    images: [
      {
        src: "/images/projects/emr/admin-dashboard.png",
        title: "Hospital Administration Dashboard",
        description:
          "The administrative workspace providing a centralized overview of hospital activity, patient metrics, appointments and operational information.",
        alt: "Electronic Medical Records hospital administration dashboard",
      },
      {
        src: "/images/projects/emr/admin-overview.png",
        title: "Hospital Operations Overview",
        description:
          "A detailed administrative view presenting hospital activity, patient visits, revenue visualization and recent appointments.",
        alt: "EMR hospital operations overview",
      },
      {
        src: "/images/projects/emr/analytics.png",
        title: "Healthcare Analytics",
        description:
          "Analytics interfaces for understanding patient demographics, appointment activity and hospital performance indicators.",
        alt: "EMR healthcare analytics dashboard",
      },
      {
        src: "/images/projects/emr/reports.png",
        title: "Hospital Reports",
        description:
          "A reporting workspace providing structured access to financial, patient and operational reporting categories.",
        alt: "EMR hospital reporting interface",
      },
      {
        src: "/images/projects/emr/notifications.png",
        title: "Hospital Notifications",
        description:
          "A centralized notification interface for organizing alerts, updates and administrative communications.",
        alt: "EMR hospital notifications interface",
      },
      {
        src: "/images/projects/emr/doctor-schedule.png",
        title: "Doctor Workspace & Schedule",
        description:
          "A dedicated doctor interface presenting schedules, upcoming appointments and clinical priorities.",
        alt: "EMR doctor schedule dashboard",
      },
      {
        src: "/images/projects/emr/doctor-patients.png",
        title: "Doctor Patient Management",
        description:
          "A patient-focused workspace designed to help doctors access patient information and review clinical notes.",
        alt: "EMR doctor patient management interface",
      },
      {
        src: "/images/projects/emr/doctor-tasks.png",
        title: "Clinical Tasks & Prescriptions",
        description:
          "A doctor workspace bringing pending clinical tasks and prescription information into one organized view.",
        alt: "EMR clinical tasks and prescriptions interface",
      },
      {
        src: "/images/projects/emr/patient-dashboard.png",
        title: "Patient Portal",
        description:
          "The patient-facing dashboard providing an overview of appointments, medications, test results and billing information.",
        alt: "EMR patient portal dashboard",
      },
    ],
    link: "https://emr-psi-beige.vercel.app/dashboard/admin",
    linkLabel: "Explore Public Demo",
    featured: true,
  },

  {
    slug: "service-ops",
    title: "Service Ops",
    category: "Service Operations",
    status: "Live System",
    description:
      "A towing operations platform connecting customer requests, service jobs and administrative monitoring into one structured workflow.",
    overview:
      "Service Ops organizes a towing workflow around the three sides of the operation: customers requesting assistance, vendors handling service work and administrators monitoring active jobs.",
    problem:
      "Towing requests require coordination from the initial customer request through operational handling and administrative monitoring. Service Ops provides a shared application workflow for those activities.",
    businessPurpose:
      "Service Ops is designed to coordinate a towing and roadside-assistance operation from the moment a customer requests help to the assignment, execution and monitoring of a job. It creates a structured connection between customers, service vendors and administrators so requests can be handled consistently and service activity remains visible.",
    targetCustomers:
      "Towing companies, roadside-assistance operators, fleet-support businesses and service networks that coordinate jobs across multiple drivers or vendors.",
    valueProposition:
      "Operators can reduce manual dispatch coordination, improve job visibility, track service status and maintain a record of customer requests and vendor activity. Faster coordination and better job allocation can help providers complete more jobs and improve customer experience.",
    revenueModel:
      "Potential revenue includes monthly subscriptions for operators, per-dispatch or per-completed-job fees, vendor or driver seats, premium dispatch and reporting modules, and branded platforms for larger roadside-assistance networks. A marketplace model could also charge a transaction fee where customer demand is matched to independent providers.",
    revenueOpportunity:
      "A recurring operator subscription is the simplest starting model, with usage-based fees becoming attractive as dispatch volume grows. Larger fleets and roadside-assistance networks may pay for integrations, custom workflows and service-level support. Revenue depends on building a reliable provider network and proving that the platform increases completed jobs or reduces coordination costs.",
    system:
      "Customers can enter the service workflow through a dedicated request experience, while the operational system maintains job records that administrators can monitor through a centralized jobs workspace.",
    architecture:
      "The application combines React interfaces with Node.js and Express services and MongoDB persistence. The backend provides the API layer for service requests, operational records and protected application workflows.",
    workflows: [
      "Customer service requests",
      "Vendor access",
      "Towing job creation",
      "Administrative job monitoring",
      "Service status tracking",
    ],
    engineering: [
      "REST APIs",
      "MongoDB data modelling",
      "Role-based access",
      "Service request workflow",
      "Operational job tracking",
      "Protected application paths",
    ],
    capabilities: [
      "Customer Requests",
      "Vendor Access",
      "Job Management",
      "Tow Monitoring",
      "Service Tracking",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    images: [
      {
        src: "/images/projects/service-ops/overview.png",
        title: "Service Ops Overview",
        description:
          "The entry point with dedicated access paths for customers, vendors and administrators.",
        alt: "Service Ops landing page",
      },
      {
        src: "/images/projects/service-ops/customer-request.png",
        title: "Customer Request",
        description:
          "The customer workflow for submitting a towing service request.",
        alt: "Service Ops customer request screen",
      },
      {
        src: "/images/projects/service-ops/jobs-table.png",
        title: "Jobs Table",
        description:
          "An administrative workspace for monitoring towing jobs and service activity.",
        alt: "Service Ops admin jobs table",
      },
    ],
    featured: false,
  },

  {
    slug: "church-growth-os",
    title: "Church Growth OS",
    category: "Church Management & Operations",
    status: "In Development",
    description:
      "A church operations system bringing member records, attendance, services and financial activity into one structured administrative workspace.",
    overview:
      "Church Growth OS is designed around the recurring operational work of church administration. It gives administrators a connected workspace for member records, attendance, services and financial activity.",
    problem:
      "Church administration combines recurring records and activities that can become difficult to coordinate when membership, attendance, services and finances are maintained separately.",
    businessPurpose:
      "Church Growth OS is intended to help churches manage membership and recurring organizational operations with less dependence on disconnected spreadsheets and manual records. It brings member information, attendance, services and financial activity into a shared administrative workspace so leaders can understand participation and manage day-to-day operations.",
    targetCustomers:
      "Churches, ministries and faith-based organizations, particularly growing congregations with administrative teams and multiple recurring services or activities.",
    valueProposition:
      "Church administrators gain a more reliable view of membership, attendance and recorded activity. Better records can support follow-up with members, planning, stewardship and decisions about where to direct organizational resources.",
    revenueModel:
      "Potential monetization includes monthly or annual subscriptions tiered by congregation size, staff seats or enabled modules; one-time setup and data-import fees; training and support packages; and custom deployments for larger churches or church networks.",
    revenueOpportunity:
      "The opportunity is a vertical SaaS product with pricing that reflects church size and administrative needs. A low-friction entry plan can support adoption by smaller congregations, while larger organizations can pay for multiple users, finance features, reporting and support. Trust, ease of use and data handling are especially important in this market.",
    system:
      "The platform organizes operations around member records, detailed member information, attendance, services and financial activity, with dashboard views providing a broader picture of the organization's current activity.",
    architecture:
      "React provides the application interface while Node.js, Express and MongoDB provide authentication, persistence and the operational service layer. The application is structured around protected administrative workflows and domain-specific records.",
    workflows: [
      "Member management",
      "Member detail management",
      "Attendance tracking",
      "Service management",
      "Financial activity tracking",
      "Administrative dashboard workflows",
    ],
    engineering: [
      "Authentication",
      "Protected application routes",
      "MongoDB data modelling",
      "Attendance state management",
      "Operational dashboards",
      "Financial data organization",
      "Role-aware administration",
    ],
    capabilities: [
      "Member Management",
      "Member Details",
      "Attendance",
      "Services",
      "Finance",
      "Dashboard",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    images: [
      {
        src: "/images/projects/church-growth/dashboard.png",
        title: "Operations Dashboard",
        description:
          "A centralized view of church activity, KPIs and operational information.",
        alt: "Church Growth OS dashboard",
      },
      {
        src: "/images/projects/church-growth/members.png",
        title: "Members",
        description:
          "Centralized member records for managing the church membership base.",
        alt: "Church Growth OS members table",
      },
      {
        src: "/images/projects/church-growth/member-details.png",
        title: "Member Details",
        description:
          "Detailed member information organized inside the membership workspace.",
        alt: "Church Growth OS member details",
      },
      {
        src: "/images/projects/church-growth/attendance.png",
        title: "Attendance",
        description:
          "Attendance records organized for tracking participation across activities.",
        alt: "Church Growth OS attendance table",
      },
      {
        src: "/images/projects/church-growth/services.png",
        title: "Services",
        description:
          "Service records organized within the church operations workspace.",
        alt: "Church Growth OS services table",
      },
      {
        src: "/images/projects/church-growth/finance-overview.png",
        title: "Finance Overview",
        description:
          "Financial KPIs providing a high-level view of recorded financial activity.",
        alt: "Church Growth OS finance overview",
      },
      {
        src: "/images/projects/church-growth/finance-breakdown.png",
        title: "Income & Expenses",
        description:
          "Financial activity organized by income type and expense category.",
        alt: "Church Growth OS income and expense breakdown",
      },
      {
        src: "/images/projects/church-growth/finance-activity.png",
        title: "Finance Activity",
        description:
          "A detailed view of recorded financial activity inside the system.",
        alt: "Church Growth OS finance activity",
      },
    ],
    featured: false,
  },

  {
    slug: "phonetics-prostudio",
    title: "Phonetics ProStudio",
    category: "Learning Platform",
    status: "In Development",
    description:
      "A client learning platform being built around course discovery, structured lessons, learner progression and interactive language-learning experiences.",
    overview:
      "Phonetics ProStudio is being built as a focused learning product rather than simply a course catalogue. The experience connects course discovery, course information, learner progress and lesson delivery into one learning journey.",
    problem:
      "A useful learning platform needs to organize both content and progression. Learners need to understand what they are taking, where they are in the course and what comes next.",
    businessPurpose:
      "Phonetics ProStudio is being developed as a paid learning product focused on pronunciation, spoken English and communication skills. Its purpose is to package expert learning content into structured courses and lessons that learners can access at their own pace, while giving the provider a repeatable way to deliver training beyond one-to-one sessions.",
    targetCustomers:
      "Students, professionals, job seekers, educators and adult learners who want to improve English pronunciation, accent clarity, connected speech and speaking confidence. Institutions and training providers may also use it for cohorts or group learning.",
    valueProposition:
      "Learners receive a guided learning path with course discovery, lesson content and progress visibility. The business can serve more learners through reusable digital content, while preserving opportunities for instructor-led support and institutional training.",
    revenueModel:
      "Potential revenue includes one-time course purchases, monthly or annual learner subscriptions, premium course bundles, paid assessments or coaching sessions, and institutional or cohort licences for schools and organizations. Certificates and instructor feedback can be offered as paid add-ons where there is genuine learner value.",
    revenueOpportunity:
      "The product can combine scalable digital course revenue with higher-value services such as coaching and institutional licences. Course completion, learner outcomes, repeat purchases and referral rates will be important measures. The business case depends on credible learning content and demonstrated improvement, not simply the number of courses listed.",
    system:
      "The application connects the public course catalogue with course details, the learner dashboard and lesson experiences, creating a continuous path from discovering a course to working through its content.",
    architecture:
      "The frontend is built with React, JavaScript, Vite and React Router, with reusable components and component-level CSS organizing the application experience and route structure.",
    workflows: [
      "Course discovery",
      "Course detail exploration",
      "Learner dashboard",
      "Lesson progression",
      "Learning state",
      "Audio-based learning",
    ],
    engineering: [
      "React component architecture",
      "React Router navigation",
      "Reusable learning interfaces",
      "Course data modelling",
      "Progress tracking",
      "Responsive application design",
    ],
    capabilities: [
      "Course Catalogue",
      "Course Details",
      "Learner Dashboard",
      "Course Progression",
      "Lessons",
      "Audio Learning",
      "Learning Workflow",
    ],
    technologies: ["React", "JavaScript", "Vite", "React Router", "CSS"],
    images: [
      {
        src: "/images/projects/phonetics/overview.png",
        title: "Course Catalogue",
        description:
          "The course discovery experience for exploring available learning content.",
        alt: "Phonetics ProStudio course catalogue",
      },
      {
        src: "/images/projects/phonetics/course-details.png",
        title: "Course Details",
        description:
          "A structured course view presenting course information and learning content.",
        alt: "Phonetics ProStudio course details",
      },
      {
        src: "/images/projects/phonetics/dashboard.png",
        title: "Learner Dashboard",
        description:
          "A learner workspace for tracking courses, progress and recent activity.",
        alt: "Phonetics ProStudio learner dashboard",
      },
      {
        src: "/images/projects/phonetics/learn.png",
        title: "Learning Experience",
        description:
          "The lesson interface for working through structured language-learning content.",
        alt: "Phonetics ProStudio learning interface",
      },
    ],
    featured: false,
  },
];

export default projects;
