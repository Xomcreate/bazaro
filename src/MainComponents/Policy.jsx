import React, { useRef, useEffect, useState } from "react";
import {
  FaUserShield,
  FaCookieBite,
  FaChartBar,
  FaEnvelope,
  FaLock,
  FaStore,
  FaLink,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function Policy() {
  const mainColorHex = "#FF4500"; // orangered
  const textDark = "text-gray-900";

  // refs for each section
  const refs = {
    introduction: useRef(null),
    dataCollection: useRef(null),
    dataUse: useRef(null),
    dataSharing: useRef(null),
    cookies: useRef(null),
    userRights: useRef(null),
    contact: useRef(null),
  };

  // active section for TOC highlight
  const [active, setActive] = useState("introduction");

  // manage collapsed state for sections to make page less dense
  const [collapsed, setCollapsed] = useState({
    introduction: false,
    dataCollection: true,
    dataUse: true,
    dataSharing: true,
    cookies: true,
    userRights: true,
    contact: true,
  });

  // Smooth scroll helper
  const scrollTo = (key) => {
    const node = refs[key].current;
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // IntersectionObserver to update active TOC item
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px", // triggers when section roughly in middle
      threshold: 0,
    };

    const observerCallback = (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        setActive(visible[0].target.dataset.section);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    Object.values(refs).forEach((r) => {
      if (r.current) observer.observe(r.current);
    });

    return () => observer.disconnect();
  }, []);

  // small helper to create SectionHeader
  const SectionHeader = ({ id, title, Icon }) => (
    <div
      className="flex items-center gap-3 mb-4"
      style={{ scrollMarginTop: 120 }}
    >
      <div
        className="rounded-full p-3 shadow-md flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #fff4f0, #fffaf6)" }}
      >
        <Icon size={22} color={mainColorHex} />
      </div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 flex items-center gap-3">
        {title}
        <button
          onClick={() => {
            // copy link to clipboard
            const url = `${window.location.origin}${window.location.pathname}#${id}`;
            navigator.clipboard?.writeText(url);
            // tiny visual feedback could be added
          }}
          title="Copy link to section"
          className="opacity-60 hover:opacity-100 ml-2"
        >
          <FaLink />
        </button>
      </h2>
    </div>
  );

  // NavItem component
  const NavItem = ({ keyId, title }) => {
    const isActive = active === keyId;
    return (
      <button
        onClick={() => scrollTo(keyId)}
        className={`w-full text-left py-2 px-3 rounded-lg flex items-center justify-between transition-all duration-200 ${
          isActive
            ? "bg-white shadow-sm border-l-4 border-[#FF4500]"
            : "hover:bg-gray-100"
        }`}
        aria-current={isActive ? "true" : "false"}
      >
        <span className="text-sm font-medium text-gray-700">{title}</span>
        {isActive && <span className="text-xs text-gray-500">Now</span>}
      </button>
    );
  };

  // small paragraph component to keep sizes consistent
  const P = ({ children }) => (
    <p className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
      {children}
    </p>
  );

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-white to-gray-50 font-sans">
      {/* hero with decorative SVG blobs */}
      <section className="relative overflow-hidden py-12 px-4 md:px-12">
        <div className="absolute -left-20 -top-10 w-72 h-72 rounded-full bg-[#FFEDD9] blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute -right-20 top-40 w-96 h-96 rounded-full bg-[#FFF0EB] blur-3xl opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="rounded-xl p-3 shadow-lg"
                style={{ background: "linear-gradient(135deg,#fff7f1,#fff5f3)" }}
              >
                <FaUserShield size={26} color={mainColorHex} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Privacy Policy
                </h1>
                <p className="text-sm text-gray-600">
                  We put your privacy first — here’s what we collect and why.
                </p>
              </div>
            </div>

            <P>
              This Privacy Policy explains how Bazaro (operated by [Legal Entity
              Name]) collects and processes your personal data when you use our
              website and services.
            </P>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-white p-2 px-3 rounded-full text-xs shadow-sm text-gray-700">
                <FaLock /> Secure processing
              </span>
              <span className="inline-flex items-center gap-2 bg-white p-2 px-3 rounded-full text-xs shadow-sm text-gray-700">
                <FaStore /> Vendor-aware platform
              </span>
              <span className="inline-flex items-center gap-2 bg-white p-2 px-3 rounded-full text-xs shadow-sm text-gray-700">
                Effective: Dec 4, 2025
              </span>
            </div>
          </div>

          <div className="lg:w-1/3">
            {/* small card with quick links */}
            <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
              <p className="text-sm text-gray-600 mb-3 font-semibold">
                Quick links
              </p>
              <div className="grid gap-2">
                <NavItem keyId="introduction" title="1. Introduction" />
                <NavItem keyId="dataCollection" title="2. Data We Collect" />
                <NavItem keyId="dataUse" title="3. How We Use Data" />
                <NavItem keyId="cookies" title="5. Cookies" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* main layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 px-4 md:px-12 pb-24">
        {/* Sticky sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-800 mb-3">In this policy</h3>
            <nav className="space-y-1">
              <NavItem keyId="introduction" title="1. Introduction" />
              <NavItem keyId="dataCollection" title="2. Data We Collect" />
              <NavItem keyId="dataUse" title="3. How We Use Data" />
              <NavItem keyId="dataSharing" title="4. Sharing Your Data" />
              <NavItem keyId="cookies" title="5. Cookies & Tracking" />
              <NavItem keyId="userRights" title="6. Your Rights" />
              <NavItem keyId="contact" title="7. Contact" />
            </nav>
            <div className="mt-4 pt-3 border-t border-gray-100 text-sm text-gray-600">
              <p className="mb-2 font-medium">Need help?</p>
              <button
                onClick={() => scrollTo("contact")}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition"
              >
                Contact data team
              </button>
            </div>
          </div>
        </aside>

        {/* Article */}
        <article className="prose prose-lg max-w-none">
          {/* 1. Introduction */}
          <section
            ref={refs.introduction}
            data-section="introduction"
            id="introduction"
            className="mb-10"
          >
            <SectionHeader id="introduction" title="1. Introduction" Icon={FaUserShield} />
            {!collapsed.introduction ? (
              <>
                <P>
                  This Privacy Policy explains how Bazaro (operated by [Legal Entity Name]) manages personal data when you use our services, including our website and mobile applications. By using the Platform, you consent to the data practices described in this policy.
                </P>
                <P>
                  Effective Date: December 4, 2025.
                </P>
              </>
            ) : (
              <button
                onClick={() =>
                  setCollapsed((s) => ({ ...s, introduction: false }))
                }
                className="inline-flex items-center gap-2 text-sm text-[#FF4500]"
              >
                Read introduction
              </button>
            )}
            <div className="mt-4">
              <button
                onClick={() =>
                  setCollapsed((s) => ({ ...s, introduction: !s.introduction }))
                }
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                aria-expanded={!collapsed.introduction}
              >
                {collapsed.introduction ? <FaChevronDown /> : <FaChevronUp />}
                {collapsed.introduction ? "Expand" : "Collapse"}
              </button>
            </div>
          </section>

          {/* 2. Data We Collect */}
          <section
            ref={refs.dataCollection}
            data-section="dataCollection"
            id="dataCollection"
            className="mb-10"
          >
            <SectionHeader id="dataCollection" title="2. Data We Collect" Icon={FaLock} />
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <P>
                    We collect several categories of information in order to provide and improve our service.
                  </P>
                  <ul className="list-disc ml-5 space-y-3 text-gray-700">
                    <li><strong>Personal Data:</strong> name, email, shipping address, phone number, payment tokens (handled by a secure payment processor).</li>
                    <li><strong>Vendor Data:</strong> store name, business registration, tax & banking details (only with explicit vendor consent).</li>
                    <li><strong>Usage Data:</strong> IP address, device identifiers, pages visited, search terms, and diagnostic logs.</li>
                  </ul>
                </div>
                <div className="w-40 shrink-0 hidden md:block">
                  <div className="p-3 rounded-lg bg-linear-to-br from-[#fff7f1] to-[#fff3f0] text-center shadow">
                    <FaChartBar size={28} color={mainColorHex} />
                    <p className="text-xs text-gray-600 mt-2">Collected responsibly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => setCollapsed((s) => ({ ...s, dataCollection: !s.dataCollection }))}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                aria-expanded={!collapsed.dataCollection}
              >
                {collapsed.dataCollection ? <FaChevronDown /> : <FaChevronUp />}
                {collapsed.dataCollection ? "Expand" : "Collapse"}
              </button>
            </div>
          </section>

          {/* 3. How We Use Data */}
          <section
            ref={refs.dataUse}
            data-section="dataUse"
            id="dataUse"
            className="mb-10"
          >
            <SectionHeader id="dataUse" title="3. How We Use Data" Icon={FaChartBar} />
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <P>
                We use data to operate the platform, fulfill orders, improve the product, and protect users from fraud and abuse.
              </P>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Provide, maintain and improve the Platform.</li>
                <li>Process orders and share necessary shipping details with vendors.</li>
                <li>Send transactional communications and optional marketing messages per your preferences.</li>
                <li>Detect and prevent fraud, and to meet legal obligations.</li>
              </ul>
            </div>

            <div className="mt-4">
              <button
                onClick={() => setCollapsed((s) => ({ ...s, dataUse: !s.dataUse }))}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                aria-expanded={!collapsed.dataUse}
              >
                {collapsed.dataUse ? <FaChevronDown /> : <FaChevronUp />}
                {collapsed.dataUse ? "Expand" : "Collapse"}
              </button>
            </div>
          </section>

          {/* 4. Sharing Your Data */}
          <section
            ref={refs.dataSharing}
            data-section="dataSharing"
            id="dataSharing"
            className="mb-10"
          >
            <SectionHeader id="dataSharing" title="4. Sharing Your Data" Icon={FaStore} />
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <P>
                We share your information only with parties necessary to provide our services or as required by law.
              </P>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li><strong>Vendors:</strong> we provide shipping & contact details necessary to fulfill orders.</li>
                <li><strong>Service Providers:</strong> payment processors, hosting providers, analytics — all under contractual obligations.</li>
                <li><strong>Legal Requests:</strong> if required by law or to protect rights & safety.</li>
              </ul>
            </div>

            <div className="mt-4">
              <button
                onClick={() => setCollapsed((s) => ({ ...s, dataSharing: !s.dataSharing }))}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                aria-expanded={!collapsed.dataSharing}
              >
                {collapsed.dataSharing ? <FaChevronDown /> : <FaChevronUp />}
                {collapsed.dataSharing ? "Expand" : "Collapse"}
              </button>
            </div>
          </section>

          {/* 5. Cookies & Tracking */}
          <section
            ref={refs.cookies}
            data-section="cookies"
            id="cookies"
            className="mb-10"
          >
            <SectionHeader id="cookies" title="5. Cookies & Tracking Technologies" Icon={FaCookieBite} />
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <P>
                We use cookies for essential functionality and analytics. You can change browser settings to block cookies, though this may degrade some features.
              </P>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Essential Cookies</h4>
                  <p className="text-sm text-gray-700">Required for core features like cart and login.</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-gray-700">Help us improve the platform and troubleshoot issues.</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => setCollapsed((s) => ({ ...s, cookies: !s.cookies }))}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                aria-expanded={!collapsed.cookies}
              >
                {collapsed.cookies ? <FaChevronDown /> : <FaChevronUp />}
                {collapsed.cookies ? "Expand" : "Collapse"}
              </button>
            </div>
          </section>

          {/* 6. Your Rights */}
          <section
            ref={refs.userRights}
            data-section="userRights"
            id="userRights"
            className="mb-10"
          >
            <SectionHeader id="userRights" title="6. Your Data Protection Rights" Icon={FaUserShield} />
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <P>
                Depending on where you live, you may have rights such as access, correction, deletion, and objection to marketing processing.
              </P>

              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate or incomplete data.</li>
                <li>Request deletion in certain circumstances.</li>
                <li>Opt out of marketing communications.</li>
              </ul>
            </div>

            <div className="mt-4">
              <button
                onClick={() => setCollapsed((s) => ({ ...s, userRights: !s.userRights }))}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                aria-expanded={!collapsed.userRights}
              >
                {collapsed.userRights ? <FaChevronDown /> : <FaChevronUp />}
                {collapsed.userRights ? "Expand" : "Collapse"}
              </button>
            </div>
          </section>

          {/* 7. Contact */}
          <section
            ref={refs.contact}
            data-section="contact"
            id="contact"
            className="mb-10"
          >
            <SectionHeader id="contact" title="7. Contact Us" Icon={FaEnvelope} />
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <P>
                If you have questions or wish to exercise your rights, contact our Data Protection Officer.
              </P>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-4 rounded-lg border border-gray-100 bg-gray-50">
                  <p className="text-sm font-semibold text-gray-900">By email</p>
                  <p className="text-sm text-[#FF4500] font-medium">privacy@bazaro.com</p>
                </div>

                <div className="p-4 rounded-lg border border-gray-100 bg-gray-50">
                  <p className="text-sm font-semibold text-gray-900">By mail</p>
                  <p className="text-sm text-gray-700">Bazaro Data Protection Officer, [Corporate Address Here]</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4500] text-white font-semibold shadow hover:scale-[1.02] transition"
              >
                Back to top
              </button>
            </div>
          </section>
        </article>
      </div>

      {/* footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Committed to your security</h4>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            We continuously review security practices and update this policy as required. If you notice an issue, email privacy@bazaro.com.
          </p>
        </div>
      </footer>
    </div>
  );
}
