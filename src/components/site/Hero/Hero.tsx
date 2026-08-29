import type { ReactNode } from "react";
import { FadeIn, ScaleUnblur } from "@/components/site/Hero/MotionPrimitives";
import { HeroCtas } from "@/components/site/Hero/HeroCtas";
import { PortraitMorph } from "@/components/site/Hero/PortraitMorph";
import Threads from "@/components/site/Threads/Threads";
import StrokeText from "@/components/site/StrokeText/StrokeText";
import TextType from "@/components/site/TextType/TextType";
import { profile } from "@/lib/site-data";

const PORTRAIT_SRC = "https://github.com/Daker22f.png";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <Threads amplitude={3.4} distance={0.3} enableMouseInteraction />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-linear-to-b from-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="font-medium text-[20px] leading-tight tracking-tight text-foreground">
              Hola
              <span aria-hidden="true" className="mx-0.5">
                👋
              </span>
              , soy Robert
            </p>

            <h1 aria-label="Ingeniero de software" className="flex flex-col gap-1">
              <StrokeText
                text="Ingeniero de software"
                strokeColor="#A78BFA"
                fillColor="#F8FAFC"
                strokeWidth={1.6}
                drawDuration={1.6}
                fillDelay={0.2}
                stagger={0.05}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={96}
                fontWeight={600}
                letterSpacing={-3}
              />
              <StrokeText
                text="& Full-Stack"
                strokeColor="#A78BFA"
                fillColor="#F8FAFC"
                strokeWidth={1.6}
                drawDuration={1.6}
                fillDelay={0.35}
                stagger={0.05}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={96}
                fontWeight={600}
                letterSpacing={-3}
              />
            </h1>

            <p className="max-w-[34ch] text-[22px] leading-[1.4] tracking-tight text-foreground/65">
              <TextType
                text={[profile.intro]}
                typingSpeed={75}
                pauseDuration={1500}
                deletingSpeed={50}
                variableSpeed={{ min: 60, max: 120 }}
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
                loop={false}
                as="span"
              />
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div className="relative aspect-square w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm md:max-w-105">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph srcA={PORTRAIT_SRC} srcB={PORTRAIT_SRC} alt="Retrato de Robert" />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
