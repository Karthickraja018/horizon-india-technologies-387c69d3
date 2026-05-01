const industries = [
  "Automotive",
  "Foundry",
  "Aerospace",
  "Construction",
  "Manufacturing",
  "Education",
  "Research Labs",
  "Heat Treatment",
];

const IndustriesStrip = () => (
  <section className="bg-background border-b border-border">
    <div className="container mx-auto px-6 lg:px-12 py-6">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-center">
        <span className="label-eyebrow shrink-0">Industries Served</span>
        <div className="flex flex-wrap items-center gap-2 justify-center">
          {industries.map((tag) => (
            <span key={tag} className="tag-chip">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default IndustriesStrip;
