import { useEffect, useState } from "react";

interface UseScrollSpyOptions {
  rootMargin?: string;
  threshold?: number;
}

export function useScrollSpy(sectionIds: string[], options?: UseScrollSpyOptions) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: options?.rootMargin ?? "-35% 0px -55% 0px",
        threshold: options?.threshold ?? 0.25,
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [options?.rootMargin, options?.threshold, sectionIds]);

  return activeSection;
}
