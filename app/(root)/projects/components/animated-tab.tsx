"use client";


import { MotionTab } from "@/components/layout/motion-tab";
import { useTabStore } from "@/store/store";

type Props = {
  tabs: { id: string; label: string }[];
};

export function AnimatedTabs({ tabs }: Props) {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <MotionTab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
  );
}
