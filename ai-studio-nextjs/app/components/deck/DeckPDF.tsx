import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  Svg,
  Circle,
  Path,
  Rect,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#000000",
    padding: 40,
    position: "relative",
  },
  pageNoPadding: {
    backgroundColor: "#000000",
    position: "relative",
  },
  slideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // Container (подложка)
  container: {
    backgroundColor: "#171717",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#262626",
    padding: 30,
    width: "90%",
  },
  // Common
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    color: "#a3a3a3",
    textAlign: "center",
    marginBottom: 25,
  },
  // Slide 1: Hook - BIG TYPOGRAPHY
  hookTitle: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 0.9,
  },
  hookTitleBlue: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#3b82f6",
    textAlign: "center",
    lineHeight: 0.9,
    marginBottom: 20,
  },
  hookSubtitle: {
    fontSize: 14,
    color: "#525252",
    textAlign: "center",
    maxWidth: 400,
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 16,
  },
  // Slide 2: Pain - BIG "DONE"
  painIntro: {
    fontSize: 16,
    color: "#525252",
    textAlign: "center",
    marginBottom: 8,
  },
  painCharge: {
    fontSize: 20,
    color: "#d4d4d4",
    textAlign: "center",
    marginBottom: 10,
  },
  painDone: {
    fontSize: 120,
    fontWeight: "bold",
    color: "#3b82f6",
    textAlign: "center",
    lineHeight: 0.9,
  },
  blueText: {
    color: "#3b82f6",
  },
  painSubtext: {
    fontSize: 14,
    color: "#525252",
    textAlign: "center",
    marginTop: 20,
  },
  // Slide 3: Virtual Squad
  flowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  flowItem: {
    alignItems: "center",
  },
  flowBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  flowBoxLarge: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  flowLabel: {
    fontSize: 8,
    color: "#a3a3a3",
    textAlign: "center",
    marginTop: 4,
  },
  flowLabelBold: {
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 4,
  },
  aiCluster: {
    alignItems: "center",
    backgroundColor: "#17171780",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#7c3aed30",
    padding: 12,
  },
  aiClusterTitle: {
    fontSize: 7,
    fontWeight: "bold",
    color: "#a78bfa",
    letterSpacing: 1,
    marginBottom: 4,
  },
  aiClusterSubtitle: {
    fontSize: 6,
    color: "#525252",
    marginBottom: 8,
  },
  aiClusterRow: {
    flexDirection: "row",
    gap: 8,
  },
  aiBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#7c3aed10",
    borderWidth: 1,
    borderColor: "#7c3aed30",
    justifyContent: "center",
    alignItems: "center",
  },
  aiBoxLabel: {
    fontSize: 6,
    color: "#c4b5fd",
    marginTop: 3,
    fontWeight: "bold",
  },
  aiBoxDesc: {
    fontSize: 5,
    color: "#525252",
    marginTop: 1,
  },
  arrow: {
    fontSize: 12,
    color: "#525252",
  },
  trustMessage: {
    fontSize: 11,
    color: "#d4d4d4",
    textAlign: "center",
    marginTop: 20,
    backgroundColor: "#17171780",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#262626",
    padding: 12,
    maxWidth: 400,
  },
  trustHighlight: {
    color: "#34d399",
    fontWeight: "bold",
  },
  trustSub: {
    fontSize: 9,
    color: "#525252",
    marginTop: 4,
  },
  // Slide 4: Tech Stack
  techGrid: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    width: "100%",
  },
  techCard: {
    backgroundColor: "#17171780",
    borderRadius: 12,
    padding: 14,
    width: 200,
    borderWidth: 1,
    borderColor: "#262626",
  },
  techCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  techCardIcon: {
    width: 28,
    height: 28,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  techCardTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  techRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  techName: {
    fontSize: 9,
    color: "#ffffff",
    fontWeight: "bold",
  },
  techDesc: {
    fontSize: 7,
    color: "#525252",
  },
  techTagline: {
    fontSize: 9,
    color: "#525252",
    textAlign: "center",
    marginTop: 16,
  },
  techTaglineHighlight: {
    color: "#ffffff",
  },
  // Slide 5: Proof
  proofCard: {
    backgroundColor: "#171717",
    borderRadius: 14,
    padding: 24,
    width: 360,
    borderWidth: 1,
    borderColor: "#262626",
  },
  proofLabel: {
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 4,
  },
  proofValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
  },
  proofDivider: {
    height: 1,
    backgroundColor: "#404040",
    marginVertical: 12,
  },
  // Slide 6: Deliverables
  deliverablesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
    width: "100%",
  },
  deliverableCard: {
    backgroundColor: "#17171780",
    borderRadius: 10,
    padding: 14,
    width: 200,
    borderWidth: 1,
    borderColor: "#262626",
    flexDirection: "row",
    gap: 10,
  },
  deliverableIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  deliverableContent: {
    flex: 1,
  },
  deliverableTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 3,
  },
  deliverableDesc: {
    fontSize: 8,
    color: "#a3a3a3",
    lineHeight: 1.4,
  },
  // Slide 7: Offer - BIG PRICE
  offerLabel: {
    fontSize: 10,
    color: "#525252",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 10,
  },
  priceBig: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#3b82f6",
    textAlign: "center",
    lineHeight: 0.9,
  },
  priceLabel: {
    fontSize: 16,
    color: "#a3a3a3",
    fontWeight: "bold",
    letterSpacing: 3,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  deliveryBadge: {
    backgroundColor: "#3b82f620",
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#3b82f650",
    marginBottom: 30,
  },
  deliveryText: {
    fontSize: 14,
    color: "#60a5fa",
    fontWeight: "bold",
  },
  featuresRow: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  featureChip: {
    backgroundColor: "#171717",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkMark: {
    fontSize: 12,
    color: "#22c55e",
    fontWeight: "bold",
  },
  featureText: {
    fontSize: 10,
    color: "#ffffff",
  },
  // Slide 5: Proof - Full bleed style
  proofOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000cc",
  },
  proofContent: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 60,
    paddingRight: 200,
  },
  proofLabelAlt: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#60a5fa",
    letterSpacing: 2,
    marginBottom: 8,
  },
  proofTitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  proofSubtitle: {
    fontSize: 18,
    color: "#a3a3a3",
    marginBottom: 30,
  },
  proofStat: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  proofDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  proofStatText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  proofStatTextLight: {
    fontSize: 14,
    color: "#a3a3a3",
  },
});

// Icons
const CodeIcon = ({ color = "#a78bfa" }: { color?: string }) => (
  <Svg viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
    <Path stroke={color} strokeWidth={2} fill="none" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </Svg>
);

const BugIcon = () => (
  <Svg viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
    <Path stroke="#a78bfa" strokeWidth={2} fill="none" d="M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3 3 0 116 0v1M5 10h2a4 4 0 018 0h2M8 14v.01M16 14v.01M12 14v.01M5 10v4a7 7 0 0014 0v-4" />
  </Svg>
);

const DocIcon = () => (
  <Svg viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
    <Path stroke="#a78bfa" strokeWidth={2} fill="none" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <Path stroke="#a78bfa" strokeWidth={2} fill="none" d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </Svg>
);

const UserIcon = () => (
  <Svg viewBox="0 0 24 24" style={{ width: 24, height: 24 }}>
    <Circle cx="12" cy="8" r="4" stroke="#34d399" strokeWidth={2} fill="none" />
    <Path stroke="#34d399" strokeWidth={2} fill="none" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
  </Svg>
);

const ShieldIcon = () => (
  <Svg viewBox="0 0 24 24" style={{ width: 24, height: 24 }}>
    <Path stroke="#34d399" strokeWidth={2} fill="none" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Svg>
);

const ServerIcon = () => (
  <Svg viewBox="0 0 24 24" style={{ width: 14, height: 14 }}>
    <Rect x="2" y="2" width="20" height="8" rx="2" stroke="#4ade80" strokeWidth={2} fill="none" />
    <Rect x="2" y="14" width="20" height="8" rx="2" stroke="#4ade80" strokeWidth={2} fill="none" />
  </Svg>
);

const BrainIcon = () => (
  <Svg viewBox="0 0 24 24" style={{ width: 14, height: 14 }}>
    <Path stroke="#a78bfa" strokeWidth={2} fill="none" d="M12 4.5a2.5 2.5 0 00-4.96-.46 2.5 2.5 0 00-1.98 3 2.5 2.5 0 00-1.32 4.24 3 3 0 00.34 5.58 2.5 2.5 0 002.96 3.08A2.5 2.5 0 0012 19.5a2.5 2.5 0 004.96.46 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-1.32-4.24 2.5 2.5 0 00-1.98-3A2.5 2.5 0 0012 4.5" />
    <Path stroke="#a78bfa" strokeWidth={2} fill="none" d="M12 4.5V19.5" />
  </Svg>
);

const GithubIcon = () => (
  <Svg viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
    <Path fill="#60a5fa" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </Svg>
);

const FileCodeIcon = () => (
  <Svg viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
    <Path stroke="#4ade80" strokeWidth={2} fill="none" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <Path stroke="#4ade80" strokeWidth={2} fill="none" d="M14 2v6h6M10 12l-2 2 2 2M14 12l2 2-2 2" />
  </Svg>
);

const FigmaIcon = () => (
  <Svg viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
    <Circle cx="12" cy="12" r="2" fill="#a78bfa" />
    <Path stroke="#a78bfa" strokeWidth={2} fill="none" d="M5 5.5A2.5 2.5 0 017.5 3H12v5H7.5A2.5 2.5 0 015 5.5zM12 3h4.5A2.5 2.5 0 0119 5.5v0A2.5 2.5 0 0116.5 8H12V3zM12 16v2.5a2.5 2.5 0 11-5 0v0A2.5 2.5 0 019.5 16H12zM5 12a2.5 2.5 0 012.5-2.5H12v5H7.5A2.5 2.5 0 015 12z" />
  </Svg>
);

const CloudIcon = () => (
  <Svg viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
    <Path stroke="#fb923c" strokeWidth={2} fill="none" d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
  </Svg>
);

export const createDeckPDF = (baseUrl: string = "") => (
  <Document>
    {/* Slide 1: The Hook - BIG TYPOGRAPHY */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.slideContainer}>
        {baseUrl && <Image src={`${baseUrl}/images/logo-icon.png`} style={styles.logo} />}
        <Text style={styles.hookTitle}>Your MVP.</Text>
        <Text style={styles.hookTitle}>Live.</Text>
        <Text style={styles.hookTitleBlue}>30 Days.</Text>
        <Text style={styles.hookSubtitle}>
          Most startups die waiting for code. We build fast so you can start selling.
        </Text>
      </View>
    </Page>

    {/* Slide 2: The Pain - GIANT "DONE" */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.slideContainer}>
        <Text style={styles.painIntro}>Traditional agencies charge you for hours.</Text>
        <Text style={styles.painCharge}>We charge you for</Text>
        <Text style={styles.painDone}>DONE.</Text>
        <Text style={styles.painSubtext}>
          Fixed price. Guaranteed launch date. No surprises.
        </Text>
      </View>
    </Page>

    {/* Slide 3: Virtual Squad */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.slideContainer}>
        <Text style={styles.title}>Your Virtual Squad</Text>
        <Text style={styles.subtitle}>One Human Brain. Three AI Agents. Working in Parallel.</Text>

        <View style={styles.flowContainer}>
          {/* Client */}
          <View style={styles.flowItem}>
            <View style={[styles.flowBox, { backgroundColor: "#26262680", borderWidth: 1, borderColor: "#404040" }]}>
              <Text style={{ fontSize: 20 }}>👤</Text>
            </View>
            <Text style={styles.flowLabel}>Client</Text>
          </View>

          <Text style={styles.arrow}>→</Text>

          {/* Senior Architect */}
          <View style={styles.flowItem}>
            <View style={[styles.flowBoxLarge, { backgroundColor: "#10b98115", borderColor: "#10b98150" }]}>
              <UserIcon />
            </View>
            <Text style={[styles.flowLabelBold, { color: "#34d399" }]}>Senior Architect</Text>
            <Text style={[styles.flowLabel, { fontSize: 6 }]}>Strategy & Tasks</Text>
          </View>

          <Text style={styles.arrow}>→</Text>

          {/* AI Cluster */}
          <View style={styles.aiCluster}>
            <Text style={styles.aiClusterTitle}>AI AGENT CLUSTER</Text>
            <Text style={styles.aiClusterSubtitle}>Working in PARALLEL</Text>
            <View style={styles.aiClusterRow}>
              <View style={{ alignItems: "center" }}>
                <View style={styles.aiBox}><CodeIcon /></View>
                <Text style={styles.aiBoxLabel}>AI Dev</Text>
                <Text style={styles.aiBoxDesc}>API & UI</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <View style={styles.aiBox}><BugIcon /></View>
                <Text style={styles.aiBoxLabel}>AI QA</Text>
                <Text style={styles.aiBoxDesc}>Tests</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <View style={styles.aiBox}><DocIcon /></View>
                <Text style={styles.aiBoxLabel}>AI Docs</Text>
                <Text style={styles.aiBoxDesc}>Swagger</Text>
              </View>
            </View>
          </View>

          <Text style={styles.arrow}>→</Text>

          {/* Code Review */}
          <View style={styles.flowItem}>
            <View style={[styles.flowBoxLarge, { backgroundColor: "#10b98115", borderColor: "#10b98150" }]}>
              <ShieldIcon />
            </View>
            <Text style={[styles.flowLabelBold, { color: "#34d399" }]}>Code Review</Text>
            <Text style={[styles.flowLabel, { fontSize: 6 }]}>Security Audit</Text>
          </View>

          <Text style={styles.arrow}>→</Text>

          {/* MVP */}
          <View style={styles.flowItem}>
            <View style={[styles.flowBox, { backgroundColor: "#22c55e20", borderWidth: 2, borderColor: "#22c55e50" }]}>
              <Text style={{ fontSize: 20 }}>🚀</Text>
            </View>
            <Text style={[styles.flowLabelBold, { color: "#4ade80" }]}>Production MVP</Text>
          </View>
        </View>

        <View style={styles.trustMessage}>
          <Text>
            You pay for a <Text style={styles.trustHighlight}>human expert</Text> who commands a powerful AI team.
          </Text>
          <Text style={styles.trustSub}>This is why we're 3x faster without sacrificing quality.</Text>
        </View>
      </View>
    </Page>

    {/* Slide 4: Tech Stack */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.slideContainer}>
        <Text style={styles.title}>Enterprise-Grade Tech Stack</Text>
        <Text style={styles.subtitle}>Startup Speed.</Text>

        <View style={styles.techGrid}>
          {/* Frontend */}
          <View style={styles.techCard}>
            <View style={styles.techCardHeader}>
              <View style={[styles.techCardIcon, { backgroundColor: "#3b82f620" }]}>
                <CodeIcon color="#60a5fa" />
              </View>
              <Text style={[styles.techCardTitle, { color: "#60a5fa" }]}>Frontend & Mobile</Text>
            </View>
            {[
              { name: "React / Next.js", desc: "Production-ready" },
              { name: "React Native", desc: "Cross-platform" },
              { name: "TypeScript", desc: "Type-safe" },
              { name: "Tailwind CSS", desc: "Rapid UI" },
              { name: "V0.dev", desc: "AI-powered UI" },
            ].map((tech) => (
              <View key={tech.name} style={styles.techRow}>
                <Text style={styles.techName}>{tech.name}</Text>
                <Text style={styles.techDesc}>{tech.desc}</Text>
              </View>
            ))}
          </View>

          {/* Backend */}
          <View style={styles.techCard}>
            <View style={styles.techCardHeader}>
              <View style={[styles.techCardIcon, { backgroundColor: "#22c55e20" }]}>
                <ServerIcon />
              </View>
              <Text style={[styles.techCardTitle, { color: "#4ade80" }]}>Backend & Cloud</Text>
            </View>
            {[
              { name: "Python + FastAPI", desc: "AI-native" },
              { name: "Node.js", desc: "Real-time" },
              { name: "PostgreSQL", desc: "Reliable DB" },
              { name: "Redis", desc: "Caching" },
              { name: "Docker + AWS", desc: "Scalable" },
              { name: "Supabase", desc: "Instant backend" },
            ].map((tech) => (
              <View key={tech.name} style={styles.techRow}>
                <Text style={styles.techName}>{tech.name}</Text>
                <Text style={styles.techDesc}>{tech.desc}</Text>
              </View>
            ))}
          </View>

          {/* AI */}
          <View style={[styles.techCard, { borderColor: "#7c3aed30" }]}>
            <View style={styles.techCardHeader}>
              <View style={[styles.techCardIcon, { backgroundColor: "#7c3aed20" }]}>
                <BrainIcon />
              </View>
              <Text style={[styles.techCardTitle, { color: "#a78bfa" }]}>AI & Automation</Text>
            </View>
            {[
              { name: "OpenAI GPT-4o", desc: "Code gen" },
              { name: "Claude 3.5 Sonnet", desc: "Reasoning" },
              { name: "LangChain", desc: "Orchestration" },
              { name: "Pinecone", desc: "Vector DB" },
              { name: "Cursor IDE", desc: "AI-first dev" },
            ].map((tech) => (
              <View key={tech.name} style={styles.techRow}>
                <Text style={styles.techName}>{tech.name}</Text>
                <Text style={[styles.techDesc, { color: "#a78bfa60" }]}>{tech.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.techTagline}>
          We choose the <Text style={styles.techTaglineHighlight}>right tool</Text> for your specific goal.
        </Text>
      </View>
    </Page>

    {/* Slide 5: The Proof - Full Bleed Style */}
    <Page size="A4" orientation="landscape" style={styles.pageNoPadding}>
      {/* Background image would go here, but react-pdf has limitations */}
      {/* Using gradient-like overlay effect */}
      <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#0a0a0a" }} />
      <View style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", backgroundColor: "#171717" }} />

      <View style={styles.proofContent}>
        <Text style={styles.proofLabelAlt}>CASE STUDY</Text>
        <Text style={styles.proofTitle}>Forch</Text>
        <Text style={styles.proofSubtitle}>DeFi Trading Platform</Text>

        <View style={styles.proofStat}>
          <View style={[styles.proofDot, { backgroundColor: "#22c55e" }]} />
          <Text style={styles.proofStatText}>Built & Launched in 5 Weeks</Text>
        </View>
        <View style={styles.proofStat}>
          <View style={[styles.proofDot, { backgroundColor: "#3b82f6" }]} />
          <Text style={styles.proofStatTextLight}>Real-time Analytics</Text>
        </View>
        <View style={styles.proofStat}>
          <View style={[styles.proofDot, { backgroundColor: "#a78bfa" }]} />
          <Text style={styles.proofStatTextLight}>Bank-Grade Security</Text>
        </View>
      </View>
    </Page>

    {/* Slide 6: Deliverables */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.slideContainer}>
        <Text style={styles.title}>What You Get</Text>
        <Text style={styles.subtitle}>Everything you need to own and scale your product</Text>

        <View style={styles.deliverablesGrid}>
          <View style={styles.deliverableCard}>
            <View style={[styles.deliverableIcon, { backgroundColor: "#3b82f620" }]}>
              <GithubIcon />
            </View>
            <View style={styles.deliverableContent}>
              <Text style={styles.deliverableTitle}>Source Code</Text>
              <Text style={styles.deliverableDesc}>Full ownership. Clean GitHub repo with Git history.</Text>
            </View>
          </View>

          <View style={styles.deliverableCard}>
            <View style={[styles.deliverableIcon, { backgroundColor: "#22c55e20" }]}>
              <FileCodeIcon />
            </View>
            <View style={styles.deliverableContent}>
              <Text style={styles.deliverableTitle}>Documentation</Text>
              <Text style={styles.deliverableDesc}>API docs (Swagger) & setup guide for your team.</Text>
            </View>
          </View>

          <View style={styles.deliverableCard}>
            <View style={[styles.deliverableIcon, { backgroundColor: "#7c3aed20" }]}>
              <FigmaIcon />
            </View>
            <View style={styles.deliverableContent}>
              <Text style={styles.deliverableTitle}>Design Assets</Text>
              <Text style={styles.deliverableDesc}>Figma files with components & style guide.</Text>
            </View>
          </View>

          <View style={styles.deliverableCard}>
            <View style={[styles.deliverableIcon, { backgroundColor: "#f9731620" }]}>
              <CloudIcon />
            </View>
            <View style={styles.deliverableContent}>
              <Text style={styles.deliverableTitle}>Live Deployment</Text>
              <Text style={styles.deliverableDesc}>Production-ready on Vercel/AWS with CI/CD.</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>

    {/* Slide 7: The Offer - BIG PRICE */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.slideContainer}>
        <Text style={styles.offerLabel}>THE "LAUNCHPAD" PACKAGE</Text>

        <Text style={styles.priceBig}>$5,900</Text>

        <Text style={styles.priceLabel}>FIXED PRICE</Text>

        <View style={styles.deliveryBadge}>
          <Text style={styles.deliveryText}>4 Weeks Guaranteed Delivery</Text>
        </View>

        <View style={styles.featuresRow}>
          <View style={styles.featureChip}>
            <Text style={styles.checkMark}>✓</Text>
            <Text style={styles.featureText}>Full Web App</Text>
          </View>
          <View style={styles.featureChip}>
            <Text style={styles.checkMark}>✓</Text>
            <Text style={styles.featureText}>Mobile-Ready</Text>
          </View>
          <View style={styles.featureChip}>
            <Text style={styles.checkMark}>✓</Text>
            <Text style={styles.featureText}>Payments & Auth</Text>
          </View>
          <View style={styles.featureChip}>
            <Text style={styles.checkMark}>✓</Text>
            <Text style={styles.featureText}>Admin Dashboard</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
