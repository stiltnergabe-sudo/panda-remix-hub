import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import pandaLogo from "../assets/panda-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claim your $500 Panda voucher" },
      { name: "description", content: "Claim your $500 Panda voucher. 3,500+ people already claimed." },
      { property: "og:title", content: "Claim your $500 Panda voucher" },
      { property: "og:description", content: "Claim your $500 Panda voucher. 3,500+ people already claimed." },
    ],
  }),
  component: Index,
});

const steps = [
  { n: 1, text: 'Click "Claim Now"' },
  { n: 2, text: "Enter your email and basic info" },
  { n: 3, text: "Complete 4–5 sponsored deals" },
  { n: 4, text: "Enjoy your $500 voucher!" },
];

const faqs = [
  {
    q: "How long do the deals take?",
    a: "Most users complete the required deals in 15–30 minutes. Some deals are instant, while others may require a short signup or trial.",
  },
  {
    q: "What are deals?",
    a: "Deals are sponsored offers from our partners. They can include free trials, app downloads, signups, or product purchases.",
  },
  {
    q: "How many deals do I have to do?",
    a: "You'll need to complete 4–5 sponsored deals to qualify for your $500 Panda voucher.",
  },
  {
    q: "When will I receive my voucher?",
    a: "Your voucher will be sent to your email within 24 hours after all required deals are verified as completed.",
  },
];

function Index() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fdf2f2" }}>
      <div className="w-full text-center py-4 font-bold text-black" style={{ backgroundColor: "#fbd9dd" }}>
        3,500+ People Already Claimed
      </div>

      <div className="max-w-2xl mx-auto px-6 pt-16 pb-12">
        <img
          src={pandaLogo}
          alt="Panda"
          className="mx-auto h-[60px] md:h-[72px] w-auto"
        />

        <p className="text-center mt-16 text-xl text-gray-700">
          Claim your <span className="font-bold text-black">$500</span> Panda voucher
        </p>

        <div className="mt-10 space-y-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 shadow-sm"
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold"
                style={{ backgroundColor: "#e8a5ad" }}
              >
                {s.n}
              </div>
              <span className="text-black text-lg">{s.text}</span>
            </div>
          ))}
        </div>

        <a href="https://giftclick.org/aff_c?offer_id=174&aff_id=152053&source=panda" className="block">
          <button className="mt-10 w-full bg-black text-white text-xl font-bold py-6 rounded-full hover:bg-gray-900 transition">
            CLAIM NOW
          </button>
        </a>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Completion of sponsored deals is required to claim your voucher.
        </p>

        <h2 className="text-3xl font-bold text-black mt-20 mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-bold text-black">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600">{f.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-12 pb-12">
          <span className="font-bold" style={{ color: "#00b67a" }}>Excellent</span>
          <div className="flex items-center gap-1 px-2 py-1" style={{ backgroundColor: "#00b67a" }}>
            {[0,1,2,3,4].map((i) => (
              <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 1l2.6 6.3L19 8l-5 4.7L15.5 19 10 15.7 4.5 19 6 12.7 1 8l6.4-.7L10 1z" />
              </svg>
            ))}
          </div>
          <span className="font-semibold text-black">4.9 / 5</span>
        </div>
      </div>
    </div>
  );
}
