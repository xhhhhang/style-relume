"use client";
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
type Billing = "monthly" | "yearly";
type ImageProps = {
  src: string;
  alt?: string;
};
type PricingPlan = {
  icon: ImageProps;
  planName: string;
  price: number;
  discount?: string;
  description: string;
  features: string[];
  button: ButtonProps;
};
type Tab = {
  value: Billing;
  tabName: string;
  plans: PricingPlan[];
};
type Props = {
  tagline: string;
  heading: string;
  description: string;
  defaultTabValue: Billing;
  tabs: Tab[];
};
export type Pricing17Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Pricing17 = (props: Pricing17Props) => {
  const { tagline, heading, description, defaultTabValue, tabs } = {
    ...Pricing17Defaults,
    ...props,
  } as Props;
  const [activeTab, setActiveTab] = useState(defaultTabValue);
  const MotionTabsContent = motion(TabsContent);
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
<p className="md:text-md">{description}</p>
</div>
<Tabs defaultValue={defaultTabValue}>
<TabsList className="mx-auto mb-12 w-fit">
            {tabs.map((tab, index) => (
              <TabsTrigger key={index} value={tab.value} onClick={() => setActiveTab(tab.value)}>
                {tab.tabName}
              </TabsTrigger>
            ))}
          </TabsList>
<AnimatePresence initial={false}>
            {tabs.map(
              (tab, index) =>
                tab.value === activeTab && (
                  <MotionTabsContent
key={index}
initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    value={tab.value}
className="grid grid-cols-1 gap-8 md:grid-cols-2"
                  >
                    {tab.plans.map((plan, index) => (
                      <PricingPlan key={index} plan={plan} billing={tab.value} />
                    ))}
                  </MotionTabsContent>
                ),
            )}
          </AnimatePresence>
</Tabs>
</div>
</section>
  );
};
const PricingPlan = ({ plan, billing }: { plan: PricingPlan; billing: Billing }) => (
  <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
<div>
<div className="flex items-start justify-between">
<div>
<div className="mb-4 flex flex-col items-start justify-end">
<img src={plan.icon.src} alt={plan.icon.alt} className="size-12" />
</div>
<h5 className="mb-2 text-xl font-bold md:text-2xl">{plan.planName}</h5>
<p>{plan.description}</p>
</div>
<div className="text-right">
<h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
            ${plan.price}
            <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
              {billing === "monthly" ? "/mo" : "/yr"}
            </span>
</h1>
          {billing === "yearly" && "discount" in plan && (
            <p className="mt-2 font-medium">{plan.discount}</p>
          )}
        </div>
</div>
<div className="my-8 h-px w-full shrink-0 bg-border" />
<p>Includes:</p>
<div className="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-4 py-2 lg:grid-cols-2">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex self-start">
<div className="mr-4 flex-none self-start">
<BiCheck className="size-6" />
</div>
<p>{feature}</p>
</div>
        ))}
      </div>
</div>
<div>
<Button
variant={plan.button.variant}
size={plan.button.size}
iconRight={plan.button.iconRight}
iconLeft={plan.button.iconLeft}
className="w-full"
      >
        {plan.button.title}
      </Button>
</div>
</div>
);
export const Pricing17Defaults: Pricing17Props = {
  tagline: "Tagline",
  heading: "Pricing plan",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  defaultTabValue: "monthly",
  tabs: [
    {
      value: "monthly",
      tabName: "Monthly",
      plans: [
        {
          icon: {
            src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
            alt: "Relume icon 1",
          },
          planName: "Basic plan",
          description: "Lorem ipsum dolor sit amet",
          price: 19,
          features: [
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
          ],
          button: { title: "Get started" },
        },
        {
          icon: {
            src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
            alt: "Relume icon 2",
          },
          planName: "Business plan",
          description: "Lorem ipsum dolor sit amet",
          price: 19,
          features: [
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
          ],
          button: { title: "Get started" },
        },
      ],
    },
    {
      value: "yearly",
      tabName: "Yearly",
      plans: [
        {
          icon: {
            src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
            alt: "Relume icon 1",
          },
          planName: "Basic plan",
          description: "Lorem ipsum dolor sit amet",
          price: 180,
          discount: "Save 20%",
          features: [
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
          ],
          button: { title: "Get started" },
        },
        {
          icon: {
            src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
            alt: "Relume icon 2",
          },
          planName: "Business plan",
          description: "Lorem ipsum dolor sit amet",
          price: 280,
          discount: "Save 20%",
          features: [
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
            "Feature text goes here",
          ],
          button: { title: "Get started" },
        },
      ],
    },
  ],
};