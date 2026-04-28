import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Beehive for Life, the founder Michèle van de Roer, and La Ruche, Paris.",
};

export default function AboutPage() {
  return (
    <>
      <Section bg="warm">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">About</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl text-deep leading-[1.05]">
              The hive, the founder, the place.
            </h1>
          </Reveal>
        </div>
      </Section>

      <Section bg="ivory">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <Reveal className="md:col-span-2">
            <Placeholder ratio="aspect-[4/5]" label="La Ruche, exterior" />
          </Reveal>
          <div className="md:col-span-3">
            <Reveal>
              <p className="wordmark text-xs text-terracotta">
                About Beehive for Life
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
                A community born from a vision over a century old.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-charcoal text-lg leading-relaxed">
                <p>
                  In 1902, the sculptor Alfred Boucher bought a parcel of land
                  in the south of Paris and built a curious round building
                  from the leftovers of the World&rsquo;s Fair. He called it
                  La Ruche, the Beehive. His idea was simple and radical:
                  give artists a place to live and work side by side, so that
                  none of them would ever have to make art alone.
                </p>
                <p>
                  Beehive for Life carries that idea into the digital age.
                  Studios are wonderful, but a working artist&rsquo;s life
                  is global now. The hive can stretch across oceans. What
                  matters is the same thing Boucher believed in over a
                  hundred years ago: artistic solidarity, generosity, and
                  the conviction that art is more powerful when shared.
                </p>
                <p>
                  Michèle van de Roer founded Beehive for Life from inside
                  La Ruche itself. The community is the practice. The hive
                  is the studio.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section bg="cream">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <Reveal className="md:col-span-2">
            <Placeholder
              ratio="aspect-[4/5]"
              label="Michèle van de Roer"
            />
          </Reveal>
          <div className="md:col-span-3">
            <Reveal>
              <p className="wordmark text-xs text-terracotta">
                About the founder
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
                Michèle van de Roer
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-charcoal text-lg leading-relaxed">
                <p>
                  Dutch-born, Paris-based, Michèle van de Roer is a
                  multimedia artist working from La Ruche. Her practice moves
                  between painting, drawing, and printmaking, and her
                  teaching weaves technique together with healing and
                  wellbeing.
                </p>
                <p>
                  She has held a Fulbright Fellowship. Her work is collected
                  by the Musée Rodin and the Bibliothèque Nationale de
                  France, and held in private collections worldwide. She is
                  represented by Galerie Paul Prouté in Paris and Galerie
                  Mourlot in New York.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="https://michelevanderoer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-terracotta link-underline"
              >
                Explore Michèle&rsquo;s artwork
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section bg="ivory">
        <div className="max-w-3xl">
          <Reveal>
            <p className="wordmark text-xs text-terracotta">About La Ruche</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-deep leading-tight">
              The Beehive of Paris.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5 text-charcoal text-lg leading-relaxed">
              <p>
                For over 120 years La Ruche has sheltered artists. Chagall,
                Modigliani, Soutine, Brancusi, Léger, Rivera, Zadkine and
                generations after them passed through its narrow staircase
                and circular studios. The building still stands. Artists
                still work there. The light still falls the way it did in
                1910.
              </p>
              <p>
                Beehive for Life ensures its spirit reaches the world.
                5% of every membership and every course goes to the
                Fondation La Ruche-Seydoux to help preserve the building
                and the residencies it makes possible.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="https://michelevanderoer.com/la-ruche"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-terracotta link-underline"
            >
              Read the full La Ruche story
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
