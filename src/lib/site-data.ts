export type NavItem = { href: string; label: string }

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/firm', label: 'Firm' },
  { href: '/services', label: 'Services' },
  { href: '/sectors', label: 'Sectors' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export const topbarLinks = [
  { href: '/client-portal', label: 'Confidential Intake' },
  { href: '/contact', label: 'Contact' },
]

export const practicePills = [
  { slug: 'corporate-commercial', label: 'Corporate & Commercial' },
  { slug: 'disputes-litigation-investigations', label: 'Disputes, Litigation & Investigations' },
  { slug: 'regulatory-compliance-public-law', label: 'Regulatory, Compliance & Public Law' },
  { slug: 'employment-internal-operations', label: 'Employment & Internal Operations' },
  { slug: 'projects-real-estate-asset-based-transactions', label: 'Projects, Real Estate & Asset-Based Transactions' },
]

export const servicePillars = [
  {
    slug: 'corporate-commercial',
    title: 'Corporate & Commercial',
    summary: 'Commercial contracts, structuring, transactions, due diligence, tax-sensitive issues, and business-critical advisory.',
    intro:
      'Domes Legal advises businesses, investors, founders, and decision-makers on the legal architecture that supports commercial activity, corporate stability, investment, and growth. This practice is built around precise drafting, clear structuring, commercially sensible negotiation, and legal judgment that works in the real conditions of business.',
    keyMandates: [
      'Commercial contracts, contracting strategy, and negotiation support',
      'Corporate structuring, governance, shareholder arrangements, and business reorganisation',
      'Mergers, acquisitions, investment-related transactions, and legal due diligence',
      'Research, legal opinions, and transaction-specific strategic advice',
      'Tax-sensitive structuring and intellectual-property-adjacent commercial support',
    ],
    clientNeeds: [
      'Preparing, reviewing, or renegotiating business-critical agreements',
      'Structuring a company, group, investment, or ownership arrangement properly from the outset',
      'Assessing transaction risk before commitment, signature, or closing',
    ],
  },
  {
    slug: 'disputes-litigation-investigations',
    title: 'Disputes, Litigation & Investigations',
    summary: 'Commercial disputes, arbitration strategy, mediation, investigations, criminal defence, and sensitive representation.',
    intro:
      'Disputes are never only about the claim itself. They affect leverage, assets, timing, reputation, operational continuity, and future relationships. Domes Legal approaches contentious matters with procedural discipline, evidentiary control, and strategic clarity. In addition to its commercial disputes practice, the firm also acts in selected criminal-defence and rights-sensitive matters where discretion, urgency, and strong representation are required.',
    keyMandates: [
      'Commercial litigation and court representation across civil and administrative disputes',
      'Arbitration strategy, mediation, negotiation, and pre-dispute positioning',
      'Internal review, investigations, and sensitive fact assessment',
      'Asset-protection-oriented urgent measures and interim relief strategy',
      'Selected criminal-defence and human-rights-sensitive representation',
    ],
    clientNeeds: [
      'Responding quickly to threatened claims, regulatory pressure, or escalating conflict',
      'Building a litigation or arbitration strategy before positions harden',
      'Managing fact-sensitive, reputationally exposed, or high-stakes personal matters',
    ],
  },
  {
    slug: 'regulatory-compliance-public-law',
    title: 'Regulatory, Compliance & Public Law',
    summary: 'Licensing, compliance reviews, legal audit, sector regulation, public law, and engagement with regulators and authorities.',
    intro:
      'Businesses operating in regulated or politically sensitive environments need more than technical compliance. They need workable legal structures, defensible internal controls, and clear assessment of where pressure may come from next. Domes Legal helps clients move from regulatory uncertainty to control, particularly where licensing, public authorities, and administrative exposure are central to the matter.',
    keyMandates: [
      'Licensing, permits, approvals, and regulated-market entry support',
      'Compliance assessments, legal audit, and internal control review',
      'Public and administrative law disputes, challenges, and defence',
      'Regulatory correspondence, authority-facing strategy, and procedural representation',
      'Sector-specific legal analysis for finance, energy, telecom, healthcare, and other regulated industries',
    ],
    clientNeeds: [
      'Understanding what new or existing regulation means in practical terms',
      'Assessing compliance gaps and internal legal vulnerability before they become disputes',
      'Challenging or defending decisions made by regulators or administrative bodies',
    ],
  },
  {
    slug: 'employment-internal-operations',
    title: 'Employment & Internal Operations',
    summary: 'Employment documentation, internal policies, workplace disputes, executive issues, and operational legal discipline.',
    intro:
      'Employment problems are often legally sensitive, fact-specific, and operationally disruptive. Domes Legal helps employers build sound employment frameworks, prepare documentation that is defensible in practice, and respond carefully when conflict, restructuring, or termination risk emerges. The emphasis is on legal control without losing sight of business continuity and internal governance.',
    keyMandates: [
      'Employment agreements, internal regulations, and workplace documentation',
      'HR-facing policies, disciplinary frameworks, and executive arrangements',
      'Termination strategy, separation-related risk, and workplace disputes',
      'Internal operational legal support and coordination with management',
      'Employment aspects of restructurings, transactions, and organisational change',
    ],
    clientNeeds: [
      'Bringing employment paperwork and internal rules into a defensible form',
      'Managing difficult exits, allegations, or executive conflict carefully',
      'Reducing operational disruption caused by weak internal legal process',
    ],
  },
  {
    slug: 'projects-real-estate-asset-based-transactions',
    title: 'Projects, Real Estate & Asset-Based Transactions',
    summary: 'Real estate, infrastructure, construction, energy, and multi-party asset-heavy transactions and disputes.',
    intro:
      'Asset-based matters require more than document production. They involve timing, approvals, financing, title, counterparties, physical assets, and long-term operational obligations. Domes Legal supports clients on real-estate, construction, infrastructure, and energy-related matters with a structured approach to execution, negotiation, and risk allocation.',
    keyMandates: [
      'Real estate acquisition, disposal, leasing, development, and title-sensitive transactions',
      'Construction and infrastructure documentation, procurement support, and project execution issues',
      'Energy and other regulated asset-heavy project support',
      'Due diligence, transaction review, and multi-party negotiations',
      'Disputes tied to performance, ownership, payment, delay, or project breakdown',
    ],
    clientNeeds: [
      'Assessing title, document, and execution risk before closing a transaction',
      'Managing complex real-estate or project structures with multiple stakeholders',
      'Resolving disputes connected to asset-heavy investments and operations',
    ],
  },
]

export const servicesCatalog = [
  {
    slug: 'contracting-commercial-agreements',
    title: 'Contracting & Commercial Agreements',
    pillarSlug: 'corporate-commercial',
    summary: 'Drafting, review, negotiation, amendment, and conclusion of commercial agreements across core business relationships.',
    body: [
      'Spotless, well-thought, and properly tailored contracts remain essential regardless of sector. Domes Legal supports the structuring, drafting, negotiation, review, amendment, and conclusion of agreements that govern how a business actually operates.',
      'The emphasis is on enforceability, leverage, and practical room to manoeuvre if the relationship later becomes difficult.'
    ],
  },
  {
    slug: 'corporate-structuring-governance',
    title: 'Corporate Structuring & Governance',
    pillarSlug: 'corporate-commercial',
    summary: 'Formation, ownership structuring, governance documents, shareholder arrangements, and internal corporate architecture.',
    body: [
      'Businesses need structures that are both legally sound and operationally usable. This service covers governance frameworks, ownership arrangements, internal decision-making rules, and the restructuring of corporate relationships.',
      'The goal is to protect commercial flexibility while keeping the legal structure disciplined and defensible.'
    ],
  },
  {
    slug: 'mergers-acquisitions-investment-transactions',
    title: 'Mergers, Acquisitions & Investment Transactions',
    pillarSlug: 'corporate-commercial',
    summary: 'Support on acquisitions, exits, investment entry, consolidation, transaction documents, and execution strategy.',
    body: [
      'Transactions become materially harder without strong legal coordination. Domes Legal supports the drafting, negotiation, and execution of documentation linked to acquisitions, consolidations, investment entry, and related business transfers.',
      "The priority is to align structure, diligence, documentation, and closing risk with the client's commercial objective."
    ],
  },
  {
    slug: 'legal-due-diligence',
    title: 'Legal Due Diligence',
    pillarSlug: 'corporate-commercial',
    summary: 'Risk-focused investigation of legal exposure before investments, acquisitions, financings, or strategic commitments.',
    body: [
      'Before entering a transaction, investment, or major contractual commitment, clients need a close and disciplined view of existing legal risk. Domes Legal conducts legal due diligence with attention to documents, title, compliance, disputes, and structural weaknesses.',
      'The output is built to support better decision-making, not merely produce a checklist.'
    ],
  },
  {
    slug: 'research-legal-opinions',
    title: 'Research & Legal Opinions',
    pillarSlug: 'corporate-commercial',
    summary: 'Targeted legal research and formal opinions on complex, uncertain, or high-value legal questions.',
    body: [
      'Some decisions require more than informal advice. They require a researched and reasoned legal position. Domes Legal prepares legal opinions and research-led memoranda on commercial, regulatory, transactional, and contentious issues.',
      'These are built on close analysis of the governing framework, the factual context, and the available strategic options.'
    ],
  },
  {
    slug: 'tax-structuring-commercial-support',
    title: 'Tax Structuring & Commercial Support',
    pillarSlug: 'corporate-commercial',
    summary: 'Tax-sensitive support for transactions, structures, and operational decisions with legal consequences.',
    body: [
      'Tax issues often sit inside broader commercial and transactional matters. Domes Legal supports clients where tax-sensitive structuring, documentation, and legal positioning materially affect business outcomes.',
      'The focus is practical coordination rather than isolated technical commentary.'
    ],
  },
  {
    slug: 'intellectual-property-brand-support',
    title: 'Intellectual Property & Brand Support',
    pillarSlug: 'corporate-commercial',
    summary: 'Commercial support on ownership, brand-sensitive issues, licensing, and IP-adjacent business arrangements.',
    body: [
      'Intellectual property questions often arise inside broader commercial relationships. Domes Legal supports clients on ownership-sensitive documentation, brand-facing issues, licensing structures, and commercial arrangements that affect intangible assets.',
      'The service is designed to protect business value without overcomplicating the legal framework.'
    ],
  },
  {
    slug: 'commercial-litigation',
    title: 'Commercial Litigation',
    pillarSlug: 'disputes-litigation-investigations',
    summary: 'Strategic representation in commercial, civil, and administrative proceedings where assets, contracts, or operations are at stake.',
    body: [
      'Each legal action should serve a purpose. Domes Legal handles commercial litigation with attention to procedure, evidence, leverage, and consequence. The work is not limited to filings: it includes pre-action positioning, claim strategy, and pressure management through the life of the case.',
      'The objective is a grounded and strong position in court, not litigation for its own sake.'
    ],
  },
  {
    slug: 'arbitration-mediation-negotiation',
    title: 'Arbitration, Mediation & Negotiation',
    pillarSlug: 'disputes-litigation-investigations',
    summary: 'Arbitration strategy, structured negotiation, and confidential dispute resolution outside court when that serves the client better.',
    body: [
      'Litigation is not always the best answer. Where continued commercial relations, time, confidentiality, or cost matter most, structured negotiation, mediation, or arbitration may provide the stronger route.',
      'Domes Legal helps clients choose the right forum and negotiate from a disciplined position.'
    ],
  },
  {
    slug: 'investigations-sensitive-fact-review',
    title: 'Investigations & Sensitive Fact Review',
    pillarSlug: 'disputes-litigation-investigations',
    summary: 'Fact-intensive review, internal assessment, evidence control, and early response in sensitive matters.',
    body: [
      'Some matters require careful fact development before any formal position is taken. Domes Legal supports internal review, document control, evidence-sensitive assessment, and the preparation of legally coherent response strategies in commercially or reputationally exposed situations.',
      'This service is particularly important when the facts are incomplete, contested, or politically sensitive.'
    ],
  },
  {
    slug: 'criminal-defence',
    title: 'Criminal Defence',
    pillarSlug: 'disputes-litigation-investigations',
    summary: 'Selected defence mandates in serious, high-stakes, or reputationally sensitive criminal matters.',
    body: [
      "Criminal defence is not presented as the firm's primary market positioning, but it remains an important and real area of practice. Domes Legal acts in selected criminal matters where the stakes are high, the facts are sensitive, and the client requires disciplined representation, strategic control, and absolute seriousness of approach.",
      "The focus is careful defence strategy, procedural control, and protection of the client's wider legal position."
    ],
  },
  {
    slug: 'human-rights-rights-sensitive-representation',
    title: 'Human Rights & Rights-Sensitive Representation',
    pillarSlug: 'disputes-litigation-investigations',
    summary: 'Selected rights-sensitive matters where public-law, reputational, or personal-rights exposure requires strategic handling.',
    body: [
      'Domes Legal also acts in selected human-rights-sensitive and public-interest matters where legal complexity intersects with personal rights, institutional pressure, or reputational consequence.',
      'This remains an important but secondary area of practice and is handled selectively and strategically.'
    ],
  },
  {
    slug: 'licensing-regulatory-permissions',
    title: 'Licensing & Regulatory Permissions',
    pillarSlug: 'regulatory-compliance-public-law',
    summary: 'Support on licences, permits, approvals, regulated entry, and ongoing authority-facing procedures.',
    body: [
      'Obtaining licences and permits in Georgia can become challenging when regulation is layered, sector-specific, or procedurally demanding. Domes Legal supports clients through the preparation, filing, follow-up, and defence of licensing and permit-related processes.',
      'The work is built to reduce friction and preserve business momentum in regulated environments.'
    ],
  },
  {
    slug: 'compliance-reviews-legal-audit',
    title: 'Compliance Reviews & Legal Audit',
    pillarSlug: 'regulatory-compliance-public-law',
    summary: 'Structured review of compliance posture, internal vulnerabilities, controls, and legal exposure.',
    body: [
      'Legal audit and compliance review are tools for understanding how a business actually operates against the legal framework that governs it. Domes Legal reviews documents, workflows, internal rules, and sector obligations to identify where exposure is concentrated and what should be corrected first.',
      'The result is a practical map of risk, not abstract commentary.'
    ],
  },
  {
    slug: 'public-administrative-law',
    title: 'Public & Administrative Law',
    pillarSlug: 'regulatory-compliance-public-law',
    summary: 'Advisory and representation where decisions of regulators, ministries, municipalities, or agencies affect business or rights.',
    body: [
      'No serious business operates entirely outside the reach of administrative bodies, regulators, commissions, and public authorities. Domes Legal advises and acts where those decisions need to be challenged, defended, or navigated strategically.',
      'The service combines procedural knowledge, commercial awareness, and sensitivity to the institutional realities involved.'
    ],
  },
  {
    slug: 'sector-regulation-finance-telecom-healthcare-energy',
    title: 'Sector Regulation in Finance, Telecom, Healthcare & Energy',
    pillarSlug: 'regulatory-compliance-public-law',
    summary: 'Focused advisory for clients in regulated industries where licensing, supervision, and compliance obligations shape operations.',
    body: [
      'Some sectors carry ongoing regulatory intensity as part of ordinary business. Domes Legal supports financial institutions, technology and telecom businesses, healthcare participants, and energy-facing actors where day-to-day operations are shaped by licensing, compliance, regulator interaction, and public-law risk.',
      'The work is designed to integrate operational reality with legal control.'
    ],
  },
  {
    slug: 'employment-contracts-policies',
    title: 'Employment Contracts & Internal Policies',
    pillarSlug: 'employment-internal-operations',
    summary: 'Preparation and revision of employment agreements, workplace rules, internal procedures, and management-facing documents.',
    body: [
      'Strong internal documentation reduces later conflict. Domes Legal prepares and updates employment contracts, workplace rules, executive arrangements, disciplinary frameworks, and other internal legal documents with attention to how they will function in practice.',
      'The purpose is not paper volume. It is operational clarity and legal defensibility.'
    ],
  },
  {
    slug: 'workplace-disputes-executive-separation',
    title: 'Workplace Disputes & Executive Separation',
    pillarSlug: 'employment-internal-operations',
    summary: 'Support on dismissals, disciplinary issues, allegations, executive exits, and employment-related conflict.',
    body: [
      'Employment conflicts become more difficult when fact management, communications, and process discipline are weak. Domes Legal helps employers respond to allegations, terminations, and sensitive personnel disputes in a controlled and defensible way.',
      'This includes high-risk management and executive separation matters.'
    ],
  },
  {
    slug: 'internal-operations-operational-legal-support',
    title: 'Internal Operations & Operational Legal Support',
    pillarSlug: 'employment-internal-operations',
    summary: 'Day-to-day legal structuring for internal operations, decision-making, workflows, and management processes.',
    body: [
      'Some legal work is not transactional or contentious, but still critical. Domes Legal helps structure internal decision-making, operational controls, and management workflows so that legal risk does not accumulate in ordinary business activity.',
      'This service is especially useful for growing companies and management teams operating under pressure.'
    ],
  },
  {
    slug: 'real-estate-transactions-development',
    title: 'Real Estate Transactions & Development',
    pillarSlug: 'projects-real-estate-asset-based-transactions',
    summary: 'Acquisition, disposal, leasing, title review, development, and execution support for real-estate matters.',
    body: [
      'Real-estate matters require more than standard forms. Domes Legal advises on acquisition, disposal, leasing, ownership, title, development, and document negotiation with a view to both transaction efficiency and future defensibility.',
      'The work spans from pre-transaction review to closing and post-closing issues.'
    ],
  },
  {
    slug: 'construction-infrastructure-project-support',
    title: 'Construction & Infrastructure Project Support',
    pillarSlug: 'projects-real-estate-asset-based-transactions',
    summary: 'Project-facing support on construction documentation, tender processes, contractors, disputes, and execution risk.',
    body: [
      'Construction and infrastructure projects involve multiple documents, parties, deadlines, technical inputs, and performance risks. Domes Legal supports clients on the legal side of project preparation, tender-related work, execution, and disputes arising from delay, payment, scope, or performance breakdown.',
      'The aim is to keep the project legally controlled without slowing it unnecessarily.'
    ],
  },
  {
    slug: 'energy-regulated-projects',
    title: 'Energy & Regulated Projects',
    pillarSlug: 'projects-real-estate-asset-based-transactions',
    summary: 'Support on energy-facing and other regulated project structures involving investors, approvals, and long-term obligations.',
    body: [
      'Energy and regulated projects often combine investment, licensing, infrastructure, finance, and long-term contractual obligations. Domes Legal supports these matters with an integrated legal approach built around risk allocation, approvals, and document discipline.',
      'This includes both transactional work and disputes tied to project execution.'
    ],
  },
]

export const sectors = [
  {
    slug: 'advanced-manufacturing-services',
    title: 'Advanced Manufacturing & Services',
    summary: 'Supply-chain contracts, operations, labour, compliance, distribution, and disputes in industrial and production-led businesses.',
    overview:
      'Manufacturing businesses require legal support that reaches far beyond a single contract. Domes Legal advises manufacturers and service-heavy industrial businesses on supply-chain documentation, labour-sensitive operations, distribution frameworks, commercial disputes, and compliance pressure that can affect strategic position, products, customers, and brand.',
    legalIssues: [
      'Supply, distribution, and subcontracting arrangements',
      'Operational employment and labour-related exposure',
      'Intellectual property, technology use, and product-facing risk',
      'Commercial disputes affecting performance, payment, or delivery',
    ],
    relatedServiceSlugs: ['corporate-commercial', 'employment-internal-operations', 'disputes-litigation-investigations'],
  },
  {
    slug: 'agribusiness-food-supply',
    title: 'Agribusiness & Food Supply',
    summary: 'Agri-sector contracts, operations, supply-chain issues, land and asset matters, and regulatory exposure across the food chain.',
    overview:
      'Agribusiness is no longer isolated from broader regulatory, supply-chain, and consumer-facing pressures. Domes Legal supports participants across the chain, from input supplier to grower, producer, distributor, and downstream operator, with legal support tailored to the realities of modern agricultural business.',
    legalIssues: [
      'Supply-chain and commercial agreement structuring',
      'Land, asset, and operational documentation',
      'Regulatory and compliance issues affecting food-related activity',
      'Disputes involving delivery, performance, payment, or business relations',
    ],
    relatedServiceSlugs: ['corporate-commercial', 'regulatory-compliance-public-law', 'projects-real-estate-asset-based-transactions'],
  },
  {
    slug: 'transportation-trade-logistics',
    title: 'Transportation, Trade & Logistics',
    summary: 'Cross-border trade, logistics, multimodal transport, commercial documentation, and operational disputes.',
    overview:
      'Economic globalisation has transformed transportation and trade into legally dense, time-sensitive, and document-heavy business environments. Domes Legal advises clients operating in transport, logistics, and trade where commercial agreements, cross-border relationships, operational performance, and disputes intersect.',
    legalIssues: [
      'Trade-facing commercial contracts and performance allocation',
      'Logistics and transport-related liability issues',
      'Cross-border operational disputes and payment conflict',
      'Regulatory and compliance pressure affecting movement of goods and services',
    ],
    relatedServiceSlugs: ['corporate-commercial', 'disputes-litigation-investigations', 'regulatory-compliance-public-law'],
  },
  {
    slug: 'energy',
    title: 'Energy',
    summary: 'Regulated projects, investment, infrastructure, licensing, and disputes across electricity, oil, gas, and renewables.',
    overview:
      'Energy business combines investment, infrastructure, regulation, finance, and long-term execution risk. Domes Legal supports clients involved in renewable energy, electricity, oil, gas, and adjacent project activity where licensing, documentation, approvals, and disputes need integrated legal management.',
    legalIssues: [
      'Licensing, approvals, and regulator-facing processes',
      'Project and infrastructure documentation',
      'Investment, financing, and risk-allocation structures',
      'Disputes tied to performance, delay, access, or project execution',
    ],
    relatedServiceSlugs: ['projects-real-estate-asset-based-transactions', 'regulatory-compliance-public-law', 'corporate-commercial'],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    summary: 'Acquisition, disposal, leasing, title, development, financing, and disputes involving real property and built assets.',
    overview:
      'Real estate work ranges from relatively straightforward commercial transactions to complex, multi-party asset deals involving title, finance, construction, and operational risk. Domes Legal advises across the full cycle of acquisition, development, leasing, ownership, and real-estate disputes.',
    legalIssues: [
      'Acquisition, disposal, and leasing of commercial real estate',
      'Title, ownership, easement, and document defects',
      'Development and construction-related project structures',
      'Property disputes, contract breaches, and asset-sensitive litigation',
    ],
    relatedServiceSlugs: ['projects-real-estate-asset-based-transactions', 'corporate-commercial', 'disputes-litigation-investigations'],
  },
  {
    slug: 'financial-services-investment',
    title: 'Financial Services & Investment',
    summary: 'Financial institutions, investment activity, regulated products, compliance, structuring, and contentious risk.',
    overview:
      'Domes Legal advises clients in financial-services and investment environments where regulation, products, governance, documentation, and disputes intersect. The practice is built for institutions, investors, and businesses operating in capital-sensitive and compliance-heavy conditions.',
    legalIssues: [
      'Licensing and regulatory obligations of financial-market participants',
      'Investment structuring and transaction documentation',
      'Compliance, internal control, and legal-audit needs',
      'Disputes involving financial instruments, products, or institutional relationships',
    ],
    relatedServiceSlugs: ['regulatory-compliance-public-law', 'corporate-commercial', 'disputes-litigation-investigations'],
  },
  {
    slug: 'healthcare-pharmaceuticals',
    title: 'Healthcare & Pharmaceuticals',
    summary: 'Regulation, licensing, contracting, operations, and disputes for healthcare providers and pharmaceutical businesses.',
    overview:
      'Healthcare and pharmaceuticals operate inside a dense regulatory framework that can change quickly and affect daily operations materially. Domes Legal advises public and private participants on licensing, contracts, compliance, operational risk, and disputes affecting healthcare-facing business activity.',
    legalIssues: [
      'Licensing and regulated operation of healthcare or pharmaceutical activity',
      'Commercial contracts and distribution arrangements',
      'Compliance with sector-specific rules and public-law obligations',
      'Disputes affecting service delivery, supply, or institutional relationships',
    ],
    relatedServiceSlugs: ['regulatory-compliance-public-law', 'corporate-commercial', 'disputes-litigation-investigations'],
  },
  {
    slug: 'infrastructure-construction',
    title: 'Infrastructure & Construction',
    summary: 'Projects, procurement, construction documentation, contractor issues, regulated execution, and project disputes.',
    overview:
      'Infrastructure and construction matters require legal support that understands technical context, procurement reality, project pressure, and dispute risk. Domes Legal supports clients on project-facing documentation, procurement and tender issues, contractual structure, and disputes arising during execution.',
    legalIssues: [
      'Construction contracts and supporting project documentation',
      'Tender, procurement, and authority-facing procedures',
      'Delay, performance, payment, and variation disputes',
      'Real-estate, public-law, and regulatory questions affecting build and operation',
    ],
    relatedServiceSlugs: ['projects-real-estate-asset-based-transactions', 'regulatory-compliance-public-law', 'disputes-litigation-investigations'],
  },
  {
    slug: 'technology-telecommunications',
    title: 'Technology & Telecommunications',
    summary: 'Technology contracts, outsourcing, telecom operations, data-sensitive business risk, and regulated digital activity.',
    overview:
      'Technology and telecom businesses move quickly, but weak legal structure creates long-tail risk. Domes Legal advises on service agreements, outsourcing, procurement, regulated operations, and disputes involving access, control, delivery, and compliance within digital and telecommunications environments.',
    legalIssues: [
      'Technology and telecom service agreements',
      'Procurement, outsourcing, and vendor-management structures',
      'Regulatory and compliance obligations tied to digital operations',
      'Disputes involving delivery, control, interruption, or commercial breakdown',
    ],
    relatedServiceSlugs: ['corporate-commercial', 'regulatory-compliance-public-law', 'disputes-litigation-investigations'],
  },
]

export const team = [
  {
    slug: 'placeholder-managing-partner',
    fullName: '[Placeholder Managing Partner]',
    jobTitle: 'Managing Partner',
    shortBio: 'Placeholder profile for corporate, regulatory, and disputes leadership.',
    fullBio:
      'This is a placeholder team profile for implementation. Replace with the final biography, credentials, sectors, and representative matters once ready.',
    email: 'info@domes.ge',
    featuredOnFirmPage: false,
  },
  {
    slug: 'placeholder-disputes-lead',
    fullName: '[Placeholder Disputes Lead]',
    jobTitle: 'Partner, Disputes, Litigation & Sensitive Representation',
    shortBio: 'Placeholder profile for commercial disputes, investigations, criminal defence, and rights-sensitive matters.',
    fullBio:
      'This is a placeholder disputes profile for implementation. Replace with the final biography, credentials, and representative matters once ready.',
    email: 'info@domes.ge',
    featuredOnFirmPage: false,
  },
]

export const insights = [
  {
    slug: 'before-a-contract-turns-contentious',
    title: 'What businesses should address before a contract turns contentious',
    category: 'article',
    excerpt: 'Practical commentary on preserving leverage before a commercial disagreement hardens into a dispute.',
    author: 'placeholder-disputes-lead',
    body: [
      'By the time a dispute becomes formal, many strategic positions are already weakened by poor document discipline, fragmented communications, or avoidable inconsistency in internal decision-making.',
      'Businesses should think about dispute preparedness long before proceedings begin: preserving evidence, controlling written communications, and assessing which contractual mechanisms still offer leverage or protection.',
      'In many cases, the strongest litigation strategy begins well before litigation itself.'
    ],
    relatedServiceSlugs: ['disputes-litigation-investigations', 'corporate-commercial'],
    relatedSectorSlugs: ['technology-telecommunications'],
  },
  {
    slug: 'managing-regulatory-change-without-losing-operational-control',
    title: 'Managing regulatory change without losing operational control',
    category: 'regulatory-alert',
    excerpt: 'How businesses should distinguish urgent compliance priorities from issues that can be sequenced in a controlled way.',
    author: 'placeholder-managing-partner',
    body: [
      'When the regulatory environment tightens, the key question is rarely whether obligations exist. It is how exposure should be prioritised, documented, and controlled without damaging continuity of operations.',
      'A disciplined response starts with mapping obligations, identifying practical pressure points, and distinguishing matters that require immediate remediation from those that can be addressed through a sequenced plan.',
      'That is where legal advice becomes commercially useful: not merely identifying the rule, but structuring the response around timing, business impact, and defensibility.'
    ],
    relatedServiceSlugs: ['regulatory-compliance-public-law', 'employment-internal-operations'],
    relatedSectorSlugs: ['financial-services-investment'],
  },
  {
    slug: 'real-estate-transactions-where-title-and-timing-collide',
    title: 'Real estate transactions where title and timing collide',
    category: 'briefing',
    excerpt: 'Why title issues, conditional financing, and rushed execution often create avoidable legal risk in real-estate deals.',
    author: 'placeholder-managing-partner',
    body: [
      'Even relatively straightforward real-estate transactions can become unstable when timing pressure overtakes title review, document discipline, or financing conditions.',
      'The better approach is to treat title, ownership, approvals, and execution mechanics as central transaction issues from the start rather than as closing-stage formalities.',
      'A disciplined transaction structure usually costs less than curing avoidable defects after commitment.'
    ],
    relatedServiceSlugs: ['projects-real-estate-asset-based-transactions', 'corporate-commercial'],
    relatedSectorSlugs: ['real-estate'],
  },
]

export const homeMetrics = [
  {
    title: 'Judgment tied to reality',
    text: 'Advice framed around timing, leverage, operational consequence, and the facts on the ground.',
  },
  {
    title: 'Disputes capability that matters',
    text: 'Serious contentious support when contracts, assets, operations, or reputation are already under strain.',
  },
  {
    title: 'Controlled execution',
    text: 'Clear communication, disciplined drafting, and follow-through that does not collapse once pressure rises.',
  },
]

const contactEmail = 'info@domes.ge'
const contactPhone = '+995 555 678 999'
const contactAddress = '3 Arakishvili Street\nEntrance 1, Floor 5, Apartment 71\n0179 Tbilisi, Georgia'

export const globalSeeds = {
  siteSettings: {
    siteName: 'Domes Legal',
    tagline: 'Clarity. Strategy. Resolution.',
    siteDescription:
      'Domes Legal advises on commercial matters, disputes, regulation, and selected high-sensitivity mandates where clear judgment and disciplined execution matter.',
  },
  headerGlobal: {
    utilityEmail: contactEmail,
    utilityPhone: contactPhone,
    trustNotice: 'Commercial matters | disputes | discreet first contact',
    portalButtonLabel: 'Confidential Intake',
  },
  footerGlobal: {
    footerIntro:
      'Domes Legal advises businesses, investors, and decision-makers on commercial matters, disputes, regulatory issues, and selected high-sensitivity mandates that require careful first contact.',
    footerAddress: contactAddress,
    footerEmail: contactEmail,
    footerPhone: contactPhone,
  },
  homepage: {
    heroEyebrow: 'Commercial law | disputes | discreet first contact',
    heroHeadline: 'Clear legal judgment when the stakes are real.',
    heroText:
      'Domes Legal advises businesses, investors, and private decision-makers when transactions tighten, disputes begin to form, regulatory issues escalate, or a matter requires discreet first contact. The firm is built for situations that need clear analysis, controlled execution, and steady judgment under pressure.',
    servicesIntro:
      "The practice is organised around the places where legal quality materially changes outcome: deal structure, contract risk, disputes, regulatory exposure, internal issues, and asset-heavy execution. The aim is clarity, not a catalogue of generic labels.",
    sectorsIntro:
      'Legal advice improves when it reflects the sector in which the client actually operates. The sector list is intentionally selective and tied to real regulatory, capital, infrastructure, technology, and operational pressure.',
    whyDomesHeading: 'Why clients come to the firm',
    whyDomesItems: [
      { title: 'Commercial judgment first', text: 'Advice shaped around what the client is trying to protect, complete, defend, or contain.' },
      { title: 'Credible contentious support', text: 'Serious representation when a matter is no longer routine and position must be protected early.' },
      { title: 'Disciplined delivery', text: 'Structured follow-through across urgent, complex, and politically sensitive work.' },
    ],
    secondaryPracticeTitle: 'Selected high-sensitivity mandates',
    secondaryPracticeText:
      'Alongside the core commercial profile, the firm accepts selected sensitive mandates where urgency, discretion, and serious representation are essential from the first contact onward.',
    experienceTitle: 'How we work',
    experienceText:
      'We start with the real commercial or personal problem, not the label attached to it. The goal is to identify what matters, protect position early, and move toward a result that is defensible and usable.',
    contactHeading: 'Tell us what is happening.',
    contactText:
      'A short, clear outline is enough for a first approach. If timing, confidentiality, asset risk, reputational exposure, or regulatory pressure is already in play, say so early so the matter can be directed appropriately.',
  },
  contactSettings: {
    contactHeading: 'Tell us what is happening.',
    contactIntro:
      'Use the contact form for an initial confidential approach. Provide only what is necessary to describe the matter, and make clear if timing, publicity, regulatory action, or immediate risk requires urgent attention.',
    contactEmail,
    contactPhone,
    contactAddress,
  },
  portalEntrySettings: {
    portalEyebrow: 'Confidential Intake',
    portalHeading: 'Confidential intake for matters that require greater discretion.',
    portalIntro:
      'Use this page where the matter calls for a more discreet first-contact route from the outset. It is intended for sensitive commercial matters, urgent disputes, and communications that require greater care in initial handling.',
    securityChips: ['Discreet first contact', 'Sensitive matters triaged', 'No document portal claims'],
  },
}

export const pageSeeds = {
  firm: {
    title: 'Firm',
    slug: 'firm',
    pageType: 'firm',
    heroTitle: 'A commercial law firm built for pressure, complexity, and consequence.',
    heroText:
      'Domes Legal is first and foremost a commercial law firm with strong disputes capability. The practice is designed for transactions, contractual issues, regulatory pressure, internal risk, and contentious matters that require legal control and practical judgment.',
    body:
      "Domes Legal was built on a straightforward premise: legal work should help clients take clearer decisions, protect position, and move through difficulty with discipline. The lawyer is not treated as a passive observer standing outside the problem. Legal counsel is part of the operating strategy, especially when timing, exposure, leverage, or execution risk matter.\n\nThe firm's primary focus is commercial, corporate, regulatory, and disputes work. That includes contracts, transactions, internal legal control, public-law pressure, and high-stakes contentious matters. Alongside that core profile, the firm accepts selected sensitive mandates where urgency, discretion, and strong representation are essential from the start.\n\nThe approach is deliberately practical. First understand the factual and commercial reality. Then identify which legal issues genuinely change outcome. Then structure the response in a way that is coherent, defensible, and usable in the real world.\n\nThis is not intended to look broad for the sake of appearances. It is meant to be clear in profile, disciplined in execution, and trusted where legal quality materially affects the result.",
  },
  services: {
    title: 'Services',
    slug: 'services',
    pageType: 'standard',
    heroTitle: 'Legal services organised around real business and dispute needs.',
    heroText:
      "The practice groups are structured to show both the firm's principal areas of work and the more specific forms of support available beneath them, from transactions and regulatory control to disputes, internal risk, and asset-heavy matters.",
    body:
      "The public service structure is intentionally two-layered. Practice groups show the main areas in which the firm operates; the detailed services beneath them show the more specific forms of support clients may require. That makes the offering easier to understand and more credible than a flat catalogue of generic legal labels.",
  },
  sectors: {
    title: 'Sectors',
    slug: 'sectors',
    pageType: 'standard',
    heroTitle: 'Sector understanding that sharpens legal judgment.',
    heroText:
      'Commercial legal advice is stronger when it reflects the business environment in which the client actually operates, the counterparties it deals with, and the regulatory and operational pressures that shape the market.',
    body:
      'We do not use sectors as decorative labels. We treat them as real operating environments, each with its own counterparties, document structures, regulatory patterns, transaction risk, and dispute dynamics. The list is intentionally limited to industries in which sector context genuinely sharpens legal judgment and improves the quality of advice, negotiation, and contentious strategy.',
  },
  insights: {
    title: 'Insights',
    slug: 'insights',
    pageType: 'standard',
    heroTitle: 'Focused commentary on law, business, and legal risk.',
    heroText:
      'Practical analysis, not background noise. The section is meant to demonstrate judgment, explain emerging issues early, and attract better-quality enquiries.',
    body:
      "Insights should help clients understand risk earlier, not simply comment on events after the fact. The initial articles focus on contract pressure, regulatory change, and execution risk in asset-heavy matters - all topics aligned with the firm's positioning. Over time, this section should become a working library of concise, commercially useful commentary for clients who value clarity over volume.",
  },
  contact: {
    title: 'Contact',
    slug: 'contact',
    pageType: 'standard',
    heroTitle: 'Confidential first contact with Domes Legal.',
    heroText:
      'Use this page for an initial confidential approach regarding a transaction, dispute, regulatory issue, internal concern, or selected high-sensitivity matter.',
    body:
      'Provide a concise outline of the matter, the parties involved, the current stage of the issue, and any timing pressure. Do not send privileged or highly sensitive material unless requested. If urgency, confidentiality, asset risk, reputational exposure, or regulatory action is involved, say so clearly from the outset so the enquiry can be directed appropriately.',
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    pageType: 'legal-page',
    heroTitle: 'Privacy Policy',
    heroText:
      "This policy explains how Domes Legal handles personal data collected through this website and related first-contact channels.",
    body:
      "Domes Legal may collect personal data that you choose to provide through contact forms, confidential intake requests, email correspondence initiated through the website, and other direct interactions with the site. This may include your name, organisation, email address, phone number, the category of your enquiry, and any information you include in your message.\n\nWe use that information to review and respond to enquiries, assess whether the matter falls within the firm's practice, manage protected first contact, maintain the security and operation of the website, and comply with applicable legal or professional obligations. We do not treat submission of a form as creating a lawyer-client relationship.\n\nWhere the website stores enquiry information through its internal systems, access is restricted to authorised personnel and service providers acting on our behalf for hosting, maintenance, or other technical support. We do not sell personal data. We may disclose information where required by law, where necessary to protect legal rights, or where disclosure is otherwise permitted under applicable legal rules.\n\nIf analytics, cookies, or similar technologies are used on the live website, they should be described consistently with the final production setup. The current legal text is intended for website preparation and should still be checked before launch against the final hosting structure, analytics stack, and applicable data-protection requirements.\n\nSubject to applicable law, you may have rights relating to access, correction, deletion, restriction, objection, or other control over your personal data. Requests regarding personal data may be directed to the contact details published on this website.\n\nThis policy may be updated from time to time to reflect changes in legal requirements, operational practice, or website functionality. The date of the most recent update should be added before launch.",
  },
  'terms-of-use': {
    title: 'Terms of Use',
    slug: 'terms-of-use',
    pageType: 'legal-page',
    heroTitle: 'Terms of Use',
    heroText:
      "These terms govern access to and use of the Domes Legal website.",
    body:
      'This website is provided for general informational purposes and to facilitate initial contact with Domes Legal. Nothing on the site should be understood as legal advice for any specific matter, and access to the site does not by itself create a lawyer-client relationship. Any reliance on the material published here should be limited accordingly.\n\nUsers may browse the site and submit enquiries through the available contact channels, provided that they do so lawfully and without interfering with the security, integrity, or availability of the website. You must not misuse the site, attempt unauthorised access, introduce malicious code, or use the website in a way that disrupts its operation or the rights of others.\n\nDomes Legal aims to keep website information accurate and up to date, but does not guarantee that all content is complete, current, or suitable for every purpose. Legal rules, commercial conditions, and factual contexts change, and published content may not reflect the most recent developments relevant to a particular matter.\n\nAll intellectual-property rights in the website content, design, branding, and materials belong to Domes Legal or the relevant rights holders unless stated otherwise. No use beyond ordinary browsing and reasonable reference is permitted without prior consent, except where applicable law allows otherwise.\n\nEnquiry forms and confidential intake requests are intended for first contact only. Submission of information through those channels does not oblige the firm to accept instructions, does not create a duty to act, and does not establish a lawyer-client relationship unless and until that relationship is expressly confirmed.\n\nThese terms should be reviewed before launch against the final operating entity, hosting environment, and any jurisdiction-specific requirements that may apply to the live website.',
  },
  'cookie-notice': {
    title: 'Cookie Notice',
    slug: 'cookie-notice',
    pageType: 'legal-page',
    heroTitle: 'Cookie Notice',
    heroText:
      'This notice explains how cookies or similar technologies may be used on the Domes Legal website.',
    body:
      'Cookies and similar technologies may be used to support basic website functionality, security, performance monitoring, and, where enabled, analytics. The exact categories in use should match the final production setup.\n\nIf analytics or preference-management tools are added before launch, this notice should be updated so that it accurately reflects the tools in use, the purposes for which they operate, and any choices available to users.\n\nUntil the live analytics and cookie stack is finalised, this notice should be treated as a framework text for the production version rather than the final statement of cookie practice.',
  },
}
