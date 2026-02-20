import { useState, useRef, useCallback } from "react";
import { ArrowBack } from "./icons/ArrowBack";
import { ArrowForward } from "./icons/ArrowForward";
import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";
import { LocationOn } from "./icons/LocationOn";
import { Messenger } from "./icons/Messenger";
import logo from "./images/logo.png";
import hero from "./images/hero.jpg";
import upcomingEventImage from "./images/upcoming-event.jpeg";
import workshopImg from "./images/workshop.jpg";
import wingsImg from "./images/wings.jpeg";
import elephantImg from "./images/elephant.jpeg";
import bonfireImg from "./images/bonfire.jpeg";
import peakyImg from "./images/peaky.jpeg";
import bruImg from "./images/bru.jpeg";
import halloweenImg from "./images/halloween.jpeg";
import beachImg from "./images/beach.jpg";
import nyeImg from "./images/nye.jpg";

const socialLinks = [
  {
    label: "Facebook",
    buttonLabel: "Join Facebook Group",
    href: "https://www.facebook.com/groups/stmaryssocial",
    Icon: Facebook,
  },
  {
    label: "Messenger",
    buttonLabel: "Join Messenger Chats",
    href: "https://www.facebook.com/groups/-4151958868400925/chats/1228654278950949/",
    Icon: Messenger,
  },
  {
    label: "Instagram",
    buttonLabel: "Follow on Instagram",
    href: "https://www.instagram.com/stmarys.social/",
    Icon: Instagram,
  },
];

const pastEventImages = [
  { src: workshopImg, alt: "Workshop event" },
  { src: wingsImg, alt: "Wings event" },
  { src: elephantImg, alt: "Elephant event" },
  { src: bonfireImg, alt: "Bonfire event" },
  { src: peakyImg, alt: "Peaky event" },
  { src: bruImg, alt: "Bru event" },
  { src: halloweenImg, alt: "Halloween event" },
  { src: beachImg, alt: "Beach event" },
];

export const HomeMobile = (): JSX.Element => {
  const cloneCount = 2;
  const totalImages = pastEventImages.length;
  const [slideIndex, setSlideIndex] = useState(cloneCount);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const extendedImages = [
    ...pastEventImages.slice(-cloneCount),
    ...pastEventImages,
    ...pastEventImages.slice(0, cloneCount),
  ];

  const handleTransitionEnd = useCallback(() => {
    if (slideIndex >= totalImages + cloneCount) {
      setIsTransitioning(false);
      setSlideIndex(cloneCount);
    } else if (slideIndex <= 0) {
      setIsTransitioning(false);
      setSlideIndex(totalImages);
    }
  }, [slideIndex, totalImages]);

  const handleSnap = useCallback((newIndex: number) => {
    requestAnimationFrame(() => {
      setIsTransitioning(true);
      setSlideIndex(newIndex);
    });
  }, []);

  const handlePrevSlide = () => {
    if (!isTransitioning) {
      handleSnap(slideIndex - 1);
    } else {
      setSlideIndex((prev) => prev - 1);
    }
  };

  const handleNextSlide = () => {
    if (!isTransitioning) {
      handleSnap(slideIndex + 1);
    } else {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const realIndex = ((slideIndex - cloneCount) % totalImages + totalImages) % totalImages;

  return (
    <div
      className="flex flex-col items-start relative"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <header className="flex flex-col h-16 items-center justify-center pr-[var(--spacing-sizing-page-padding-padding-global)] pl-[var(--spacing-sizing-page-padding-padding-global)] py-0 relative self-stretch w-full bg-color-schemes-color-scheme-3-background">
        <nav className="justify-center gap-4 self-stretch w-full flex items-center relative flex-[0_0_auto]" aria-label="Main navigation">
          <div className="flex items-center relative">
            <div
              className="relative w-[47px] h-[47px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-[100px] border border-solid border-white bg-cover bg-center"
              style={{ backgroundImage: `url(${logo})` }}
              role="img"
              aria-label="St. Mary's Social logo"
            />
            <div className="w-[242px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-white text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
              &nbsp;&nbsp;St. Mary&apos;s Social
            </div>
          </div>
        </nav>
      </header>

      <section
        className="relative flex flex-col items-center justify-center min-h-[70vh] px-[var(--spacing-sizing-page-padding-padding-global)] py-12 self-stretch w-full overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 bg-cover bg-center blur-[2px] scale-105"
          style={{ backgroundImage: `url(${hero})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="flex flex-col items-center gap-5 relative w-full">
            <h1
              id="hero-heading"
              className="relative self-stretch mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]"
            >
              Southern Maryland doesn&#39;t have to be boring.
            </h1>
            <p className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              St. Mary&#39;s Social connects young adults in SOMD by hosting
              fresh and fun events to help you find in-person community.
            </p>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] bg-color-schemes-color-scheme-3-background"
        aria-labelledby="upcoming-events-heading"
      >
        <div className="flex flex-col items-center gap-12 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-12 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] items-center gap-6 relative w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <h2
                  id="upcoming-events-heading"
                  className="relative self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-color-schemes-color-scheme-3-text text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]"
                >
                  Don&#39;t miss what&#39;s coming
                </h2>
                <p className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-color-schemes-color-scheme-3-text text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  Check out our next event! Join our Facebook Group to save your
                  spot at this and future events. Also join our Messenger
                  community to chat with other members!
                </p>
              </div>
              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`all-[unset] box-border ${index === 0 ? "mt-[-4.00px]" : ""} ${index === socialLinks.length - 1 ? "mb-[-4.00px]" : ""} flex items-center justify-center gap-2 px-6 py-2.5 relative self-stretch w-full flex-[0_0_auto] ml-[-4.00px] mr-[-4.00px] bg-[color:var(--primitives-color-corn)] rounded-[100px] border-b-4 [border-bottom-style:solid] border-primitives-color-corn-dark cursor-pointer hover:opacity-90 transition-opacity`}
                  >
                    <span className="relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img
          className="aspect-[0.75] object-cover relative self-stretch w-full"
          alt="Upcoming event poster"
          src={upcomingEventImage}
        />
      </section>

      <section
        className="flex flex-col items-center gap-12 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative self-stretch w-full flex-[0_0_auto] bg-color-schemes-color-scheme-4-background"
        aria-labelledby="past-events-heading"
      >
        <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-12 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] items-center gap-5 relative w-full flex-[0_0_auto]">
            <h2
              id="past-events-heading"
              className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-4-text)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative self-stretch mt-[-1.00px] [font-style:var(--heading-h2-font-style)]"
            >
              Past events
            </h2>
            <p className="text-[color:var(--color-schemes-color-scheme-4-text)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
              Our variety of themes and activities make it easier for you to
              meet new faces
            </p>
          </div>
          <div className="relative self-stretch w-full flex-[0_0_auto]">
            <div className="overflow-hidden">
              <div
                ref={trackRef}
                className={`flex gap-4 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
                style={{ transform: `translateX(calc(-${slideIndex} * (75% + 16px)))` }}
                onTransitionEnd={handleTransitionEnd}
                role="region"
                aria-label="Past events carousel"
              >
                {extendedImages.map((image, index) => (
                  <img
                    key={index}
                    className="w-[75%] flex-shrink-0 aspect-square object-cover rounded-[var(--UI-styles-radius-large)]"
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={handlePrevSlide}
              className="absolute top-1/2 left-2 -translate-y-1/2 inline-flex items-center justify-center p-2 bg-color-schemes-color-scheme-4-foreground rounded-full border border-solid border-color-schemes-color-scheme-4-background cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Previous slide"
            >
              <ArrowBack className="!relative !w-5 !h-5" />
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute top-1/2 right-2 -translate-y-1/2 inline-flex items-center justify-center p-2 bg-color-schemes-color-scheme-4-foreground rounded-full border border-solid border-color-schemes-color-scheme-4-background cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Next slide"
            >
              <ArrowForward className="!relative !w-5 !h-5" />
            </button>
            <div
              className="flex items-center gap-[9px] p-2.5 w-full justify-center mt-4"
              role="tablist"
              aria-label="Carousel pagination"
            >
              {pastEventImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setIsTransitioning(true); setSlideIndex(index + cloneCount); }}
                  className={`relative w-2 h-2 bg-[color:var(--color-schemes-color-scheme-4-text)] rounded-full cursor-pointer border-0 p-0 transition-opacity ${index !== realIndex ? "opacity-20" : ""}`}
                  role="tab"
                  aria-selected={index === realIndex}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col items-center gap-12 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative self-stretch w-full flex-[0_0_auto] bg-color-schemes-color-scheme-3-background"
        aria-labelledby="community-heading"
      >
        <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-12 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-medium)] items-center gap-10 relative w-full flex-[0_0_auto]">
            <div className="items-center gap-5 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="relative w-[102px] h-[102px] mt-[-1.00px] rounded-[100px] border border-solid border-white bg-cover bg-center"
                style={{ backgroundImage: `url(${logo})` }}
                role="img"
                aria-label="Community image"
              />
              <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="items-start gap-2 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                  <h2
                    id="community-heading"
                    className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-color-schemes-color-scheme-3-text text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] relative self-stretch mt-[-1.00px] [font-style:var(--heading-h5-font-style)]"
                  >
                    Meet our community!
                  </h2>
                  <p className="text-color-schemes-color-scheme-3-text text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                    Join our Facebook group to stay posted on events. Find even
                    more discussion in our Messenger community.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <LocationOn className="!relative !w-6 !h-6" aria-hidden="true" />
                  <p className="relative w-fit mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-color-schemes-color-scheme-3-text text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                    For Southern Maryland young adults 21+
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full rounded-[var(--UI-styles-radius-large)] overflow-hidden aspect-[1.5]">
                <img
                  className="w-full h-full object-cover"
                  alt="New Year's Eve event"
                  src={nyeImg}
                />
              </div>
              <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-color-schemes-color-scheme-3-text text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] relative self-stretch mt-[-1.00px] [font-style:var(--heading-h6-font-style)]">
                  Social channels
                </h3>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-2.5 relative self-stretch w-full flex-[0_0_auto] ml-[-4.00px] mr-[-4.00px] bg-[color:var(--primitives-color-corn)] rounded-[100px] border-b-4 [border-bottom-style:solid] border-[color:var(--primitives-opacity-white-20)] no-underline cursor-pointer hover:opacity-90 transition-opacity ${index === socialLinks.length - 1 ? "mb-[-4.00px]" : ""}`}
                  >
                    <span className="relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                      {link.buttonLabel}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-start pr-[var(--spacing-sizing-page-padding-padding-global)] pl-[var(--spacing-sizing-page-padding-padding-global)] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-4 p-4 flex-[0_0_auto] bg-primitives-color-neutral-dark rounded-[var(--UI-styles-radius-medium)] border-0 border-none flex relative w-full border-[color:var(--color-schemes-color-scheme-2-border)]">
          <div className="flex items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start relative flex-1 grow">
              <p className="font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[color:var(--color-schemes-color-scheme-2-text)] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] relative self-stretch mt-[-1.00px] [font-style:var(--text-regular-semi-bold-font-style)]">
                Find us where the action is
              </p>
              <p className="text-[color:var(--color-schemes-color-scheme-2-text)] text-[length:var(--text-small-normal-font-size)] leading-[var(--text-small-normal-line-height)] relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] tracking-[var(--text-small-normal-letter-spacing)] [font-style:var(--text-small-normal-font-style)]">
                Join SMS on social media
              </p>
            </div>
          </div>
          <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="cursor-pointer"
              >
                <link.Icon className="!relative !w-6 !h-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
