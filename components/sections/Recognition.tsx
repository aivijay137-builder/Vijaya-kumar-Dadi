export function Recognition() {
  const items = [
    { title: "MedTech Innovator APAC (Olympus)", label: "Finalist" },
    { title: "UK–India HealthTech Accelerator", label: "Selected" },
    { title: "BIRAC NIDHI Prayas Grant", label: "Awarded" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <hr className="mb-12 border-border" />
        <h2 className="text-xl font-semibold mb-2">Recognition</h2>
        <p className="text-sm text-muted-foreground mb-8">
          Recognition for building impactful healthcare products
        </p>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.title} className="text-sm">
              <span className="text-foreground">{item.title}</span>
              <span className="text-muted-foreground"> — {item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
